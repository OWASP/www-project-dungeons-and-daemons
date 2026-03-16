import { readable } from "svelte/store";

const translations: Record<string, string> = {
  "getthegame.title": "Play",
};

export function readTranslation() {
  return readable((key: string) => translations[key] ?? key);
}