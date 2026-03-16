import { FileSystemHelper, type DirectoryCard } from '$lib/filesystem/fileSystemHelper.ts';

export async function load({params})
{
    return {
        games : getGames()
    }
}

function getGames() : DirectoryCard[]
{
    return FileSystemHelper.getDirectoryCards("./characters");
}