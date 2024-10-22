import { Text } from '$lib/utils/text.ts';
export const prerender = true;

export async function load(event: any) 
{
    return {
        renderTimestamp : Text.FormatDateAsDate(new Date()),
        timestamp : new Date(),
    }
}