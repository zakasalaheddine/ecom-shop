/**
 * Get the HTTP URL for a Convex storage ID
 * Uses the /getImage HTTP endpoint to fetch images
 */
export function getStorageUrl(storageId: string): string {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_SITE;
  if (!convexUrl) {
    throw new Error("NEXT_PUBLIC_CONVEX_SITE is not defined");
  }
  return `${convexUrl}/getImage?storageId=${storageId}`;
}

/**
 * Check if a string is a valid Convex storage ID
 */
export function isStorageId(value: string): boolean {
  return value.startsWith("kg") || value.startsWith("jg");
}
