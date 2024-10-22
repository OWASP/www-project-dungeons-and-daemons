import { FileSystemHelper } from "$lib/filesystem/fileSystemHelper.js";
import fs from "fs";

export async function load({ params }) {
  let filePath: string = "./games/" + params.path;
  let [files, folders, content] = getDataFromPath(filePath);

  return {
    files: files,
    folders: folders,
    content: content,
    path: params.path,
    timestamp: new Date().toUTCString(),
  };
}

function getDataFromPath(path: string) {
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