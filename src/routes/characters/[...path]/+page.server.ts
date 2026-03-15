import { FileSystemHelper } from "$lib/filesystem/fileSystemHelper.js";

export async function load({ params }) {
  const filePath = `./characters/${params.path}`;
  const { files, folders, content } = FileSystemHelper.getRouteData(filePath);

  return {
    files,
    folders,
    content,
    path: params.path,
    timestamp: new Date().toUTCString(),
  };
}
