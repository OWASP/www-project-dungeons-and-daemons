import { FileSystemHelper } from '$lib/filesystem/fileSystemHelper.ts';

export async function load({params})
{
    return {
        games : getGameRules()
    }
}

function getGameRules() : string[]
{
    return FileSystemHelper.getDirectories("./rules");
}