import { FileSystemHelper } from '$lib/filesystem/fileSystemHelper.ts';

export async function load({params})
{
    return {
        games : getCheatSheets()
    }
}

function getCheatSheets() : string[]
{
    return FileSystemHelper.getDirectories("./cheatsheets");
}