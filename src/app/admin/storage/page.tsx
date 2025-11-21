"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { StorageImage } from "@/components/storage-image";
import { Copy, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function StorageBrowserPage() {
  const files = useQuery(api.storage.listFiles);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewId, setPreviewId] = useState("");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(text);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Storage Browser
          </h1>
          <p className="text-gray-600">
            View and manage all uploaded images in Convex storage
          </p>
        </div>

        {/* Quick Preview Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Preview
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Paste Storage ID
              </label>
              <input
                type="text"
                value={previewId}
                onChange={(e) => setPreviewId(e.target.value)}
                placeholder="kg2dhzhc1mgy3s7mbwevzzs88h7vtev1"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent font-mono text-sm"
              />
              <p className="mt-2 text-xs text-gray-500">
                Enter a Convex storage ID to preview the image
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preview
              </label>
              {previewId ? (
                <div className="aspect-square max-w-xs bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-200">
                  <StorageImage
                    storageId={previewId}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-square max-w-xs bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <p className="text-gray-400 text-sm">No ID entered</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {!files && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto" />
            <p className="mt-4 text-gray-600">Loading storage files...</p>
          </div>
        )}

        {files && files.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-300">
            <p className="text-gray-600">No storage files found</p>
            <p className="text-sm text-gray-400 mt-2">
              Upload some images to categories to see them here
            </p>
          </div>
        )}

        {files && files.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {files.map((file) => (
              <div
                key={file.storageId}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-square bg-gray-100 relative">
                  <StorageImage
                    storageId={file.storageId}
                    alt={file.usedBy.label}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                      Used by {file.usedBy.type}
                    </div>
                    <div className="font-medium text-gray-900">
                      {file.usedBy.label}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                      Storage ID
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded flex-1 truncate">
                        {file.storageId}
                      </code>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(file.storageId)}
                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                        title="Copy storage ID"
                      >
                        {copiedId === file.storageId ? (
                          <span className="text-green-600 text-xs">✓</span>
                        ) : (
                          <Copy size={14} className="text-gray-600" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={file.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-800 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Open
                    </a>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(file.url || "")}
                      className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 transition-colors"
                    >
                      Copy URL
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
          <h2 className="font-semibold text-blue-900 mb-2">Quick Tips</h2>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Click "Copy" to copy storage IDs to your clipboard</li>
            <li>• Use the StorageImage component to display these images</li>
            <li>
              • Storage IDs can be used directly in your category data instead
              of URLs
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
