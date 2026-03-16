import { FileSystemHelper } from "$lib/filesystem/fileSystemHelper.js";

export async function load({ params }) {
  const resolvedPath = resolveCharacterContentPath(params.path);
  const filePath = `./characters/${resolvedPath}`;
  const { files, folders, content } = FileSystemHelper.getRouteData(filePath);

  return {
    files,
    folders,
    content,
    characterImage: FileSystemHelper.getPublicImage(`characters/${params.path}`),
    path: params.path,
    timestamp: new Date().toUTCString(),
  };
}

function resolveCharacterContentPath(routePath: string): string {
  const aliases: Record<string, string> = {
    "defcon-is-canceled/noc-engineer": "defcon-is-canceled/noc.engineer",
    "defcon-is-canceled/press-liason": "defcon-is-canceled/press-liaison",
  };

  return aliases[routePath] ?? routePath;
}
