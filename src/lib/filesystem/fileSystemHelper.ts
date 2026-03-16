import fs from "fs";
import path from "path";
import type { Route } from "../../domain/routes/route.ts";
import { fileURLToPath } from 'url';

type RouteContent = {
  files: string[];
  folders: string[];
  content: string;
};

export type DirectoryCard = {
  slug: string;
  image: string | null;
};

export class FileSystemHelper {

  private static root = (() => {
    // During development and build, calculate root from import.meta.url

    if (import.meta.url.includes('.svelte-kit')) {
      return path.normalize(path.dirname(fileURLToPath(import.meta.url)) + '/../../../../');
    }

    return path.normalize(path.dirname(fileURLToPath(import.meta.url)) + '/../../../');

  })();

  public static hasDir(path: string): boolean {
    return fs.existsSync(path);
  }

  public static hasFile(path: string): boolean {
    return FileSystemHelper.hasDir(path) && fs.lstatSync(path).isFile();
  }

  public static getDirectories(path: string): string[] {
    return fs
      .readdirSync(path, { withFileTypes: true })
      .filter((x) => x.isDirectory())
      .map((dirent) => dirent.name);
  }

  public static getFiles(path: string): string[] {
    return fs
      .readdirSync(path, { withFileTypes: true })
      .filter((x) => x.isFile())
      .map((dirent) => dirent.name);
  }

  private static normalizeContentPath(contentPath: string): string {
    return contentPath.replace(/\\/g, '/').replace(/^\.\//, '').replace(/^\/+/, '');
  }

    /**
   * Resolves a path in a case-insensitive manner by checking actual directory names.
   * This ensures cross-platform compatibility between case-sensitive and case-insensitive filesystems.
   */
  private static resolveCaseInsensitivePath(basePath: string, relativePath: string): string {
    const parts = relativePath.split('/').filter(p => p.length > 0);
    let currentPath = path.normalize(basePath);
    
    for (const part of parts) {
      if (!fs.existsSync(currentPath)) {
        return path.join(basePath, relativePath); // Path doesn't exist, return as-is
      }
      
      const entries = fs.readdirSync(currentPath, { withFileTypes: true });
      const matchingEntry = entries.find(entry => 
        entry.name.toLowerCase() === part.toLowerCase()
      );
      
      if (matchingEntry) {
        currentPath = path.join(currentPath, matchingEntry.name);
      } else {
        currentPath = path.join(currentPath, part);
      }
    }
    
    return currentPath;
  }

  private static resolveContentPath(contentPath: string): { resolvedPath: string; isFile: boolean } {
    const normalizedPath = FileSystemHelper.normalizeContentPath(contentPath);
    const directPath = FileSystemHelper.resolveCaseInsensitivePath(FileSystemHelper.root, normalizedPath);

    if (fs.existsSync(directPath)) {
      return {
        resolvedPath: directPath,
        isFile: fs.lstatSync(directPath).isFile(),
      };
    }

    const markdownPath = FileSystemHelper.resolveCaseInsensitivePath(
      FileSystemHelper.root,
      normalizedPath.endsWith('.md') ? normalizedPath : `${normalizedPath}.md`
    );

    if (fs.existsSync(markdownPath) && fs.lstatSync(markdownPath).isFile()) {
      return {
        resolvedPath: markdownPath,
        isFile: true,
      };
    }

    return {
      resolvedPath: directPath,
      isFile: false,
    };
  }

  /*
  public static getDataFromPath(path: string) {
    let resultFolders = [];
    let resultFiles = [];
  
    let content: string = "";
    let indexFile: string = path + "/index.md";
    if (fs.existsSync(indexFile)) content = fs.readFileSync(indexFile, "utf8");
  
    if (content.length == 0 && fs.existsSync(path)) content = fs.readFileSync(path, "utf8");
    let folders: any;
    try {
      folders = FileSystemHelper.getDirectories(path);
    } catch (e) {
      folders = [];
    }
    if (folders.length == 0) console.log("No folders found for path: " + path);
  
    for (let i = 0; i < folders.length; i++) {
      let folderName = folders[i];
      let folder = path + "/" + folderName;
      let files = FileSystemHelper.getFiles(folder);
      files.includes("index.md")
        ? resultFolders.push(folderName)
        : resultFiles.push(folderName);
    }
  
    return [resultFiles, resultFolders, content];
  }
  */
  
  public static CharactersRouteMap(): any[] {
    const basePath: string = "data/characters";
    const sectionRegex = /^(\d{2})-/;
    let routes: Route[] = [];

    const firstLevelDirs = this.getDirectories(basePath).filter((dir) =>
      sectionRegex.test(dir)
    );

    firstLevelDirs.forEach((firstLevelDir) => {
      const firstLevelPath = basePath + '/' + firstLevelDir;
      const firstPart = firstLevelDir.match(sectionRegex)?.[1];

      const secondLevelDirs = this.getDirectories(firstLevelPath).filter(
        (dir) => sectionRegex.test(dir)
      );

      secondLevelDirs.forEach((secondLevelDir) => {
        const secondPart = secondLevelDir.match(sectionRegex)?.[1];
        const section = `${firstPart}.${secondPart}`;
        let fullPath = firstLevelPath + '/' + secondLevelDir;
        fullPath = fullPath.replace("data/characters", "/characters");

        routes.push({
          Path: fullPath,
          Section: section,
        });
      });
    });

    return routes;
  }

  public static getDataFromPath(filePath: string) : Map<string, string>
  {
    const base = FileSystemHelper.root;
    let content = new Map<string, string>();
  
    // Resolve the actual filesystem path (case-insensitive)
    const resolvedPath = FileSystemHelper.resolveCaseInsensitivePath(base, filePath);
    
    let indexFile: string = path.join(resolvedPath, "index.md");
    if (fs.existsSync(indexFile)) {
      content.set(filePath, fs.readFileSync(indexFile, "utf8"));
    }
  
    let folders: string[];
    try {
      folders = FileSystemHelper.getDirectories(resolvedPath);
    } catch (e) {
      folders = [];
    }
  
    folders.forEach((folder) => {
      const folderIndexFile = path.join(resolvedPath, folder, "index.md");
      if (fs.existsSync(folderIndexFile)) {
        content.set(folder, fs.readFileSync(folderIndexFile, "utf8"));
      }
    });
  
    return content;
  }

  public static getRouteData(contentPath: string): RouteContent {
    const { resolvedPath, isFile } = FileSystemHelper.resolveContentPath(contentPath);

    if (isFile) {
      return {
        files: [],
        folders: [],
        content: fs.readFileSync(resolvedPath, "utf8"),
      };
    }

    const indexFile = path.join(resolvedPath, "index.md");
    const content = fs.existsSync(indexFile)
      ? fs.readFileSync(indexFile, "utf8")
      : "";

    let folders: string[] = [];
    let files: string[] = [];

    try {
      folders = FileSystemHelper.getDirectories(resolvedPath);
      files = FileSystemHelper.getFiles(resolvedPath)
        .filter((fileName) => fileName.toLowerCase().endsWith('.md') && fileName.toLowerCase() !== 'index.md')
        .map((fileName) => fileName.replace(/\.md$/i, ''));
    } catch (e) {
      folders = [];
      files = [];
    }

    return {
      files,
      folders,
      content,
    };
  }

  public static getDirectoryCards(contentPath: string, imageDirectory = "games"): DirectoryCard[] {
    return FileSystemHelper.getDirectories(contentPath).map((slug) => ({
      slug,
      image: FileSystemHelper.getPublicImage(`${imageDirectory}/${slug}`),
    }));
  }

  public static getPublicImage(relativeImagePath: string): string | null {
    const extensions = ["jpg", "jpeg", "png", "webp"];
    const normalizedImagePath = FileSystemHelper.normalizeContentPath(relativeImagePath);

    for (const extension of extensions) {
      const imagePathWithExtension = `${normalizedImagePath}.${extension}`;
      const resolvedImagePath = FileSystemHelper.resolveCaseInsensitivePath(
        FileSystemHelper.root,
        path.join("static", "images", imagePathWithExtension)
      );

      if (fs.existsSync(resolvedImagePath) && fs.lstatSync(resolvedImagePath).isFile()) {
        return `/${FileSystemHelper.normalizeContentPath(path.join("images", imagePathWithExtension))}`;
      }
    }

    return null;
  }
}