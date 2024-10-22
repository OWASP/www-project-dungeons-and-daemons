import { FileSystemHelper } from '$lib/filesystem/fileSystemHelper.ts';

export async function load({params})
{
    return {
        games : getGames()
    }
}

function getGames() : string[]
{
    return FileSystemHelper.getDirectories("./games");
}