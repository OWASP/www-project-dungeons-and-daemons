import { FileSystemHelper, type DirectoryCard } from '$lib/filesystem/fileSystemHelper.ts';

export async function load({params})
{
    return {
        games : getGameRules()
    }
}

function getGameRules() : DirectoryCard[]
{
    return FileSystemHelper.getDirectoryCards("./rules");
}