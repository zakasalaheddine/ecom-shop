"use client";

import { useState } from "react";
import { getStorageUrl } from "@/lib/storage-utils";

interface StorageImageProps {
  storageId?: string;
  fallbackUrl?: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

/**
 * Component to display images from Convex storage
 * Automatically handles storageId to URL conversion
 */
export function StorageImage({
  storageId,
  fallbackUrl = "/placeholder.jpg",
  alt,
  className = "",
  width,
  height,
}: StorageImageProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const imageUrl = storageId && !error ? getStorageUrl(storageId) : fallbackUrl;

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {loading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded" />
      )}
      <img
        src={imageUrl}
        alt={alt}
        className={`${className} ${loading ? "opacity-0" : "opacity-100"} transition-opacity`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
        width={width}
        height={height}
      />
    </div>
  );
}
