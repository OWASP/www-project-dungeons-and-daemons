import { FileSystemHelper, type DirectoryCard } from '$lib/filesystem/fileSystemHelper.ts';

export async function load({params})
{
    return {
        games : getCheatSheets()
    }
}

function getCheatSheets() : DirectoryCard[]
{
    return FileSystemHelper.getDirectoryCards("./cheatsheets");
}