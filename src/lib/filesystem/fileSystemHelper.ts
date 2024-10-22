import fs from "fs";
import path from "path";
import type { Route } from "../../domain/routes/route.ts";

export class FileSystemHelper {
  public static getDirectories(path: string): string[] {
    console.log('📂 scanning ' + path + ' for directories')
    return fs
      .readdirSync(path, { withFileTypes: true })
      .filter((x) => x.isDirectory())
      .map((dirent) => dirent.name)  || [];
  }

  public static getFiles(path: string): string[] {
    // console.log('📂 scanning ' + path + ' for files')
    return fs
      .readdirSync(path, { withFileTypes: true })
      .filter((x) => x.isFile())
      .map((dirent) => dirent.name) || [];
  }

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
}