import { Media } from "@/payload-types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getImageUrl = (item: number | Media): string => {
  if (typeof item === "number" || !item.url) {
    return "";
  }
  return item.url;
};
