"use client";

import { useRef } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Download, Upload } from "lucide-react";

type SchemaType = "products" | "categories" | "types";

interface ImportExportProps {
  type: SchemaType;
}

export function ImportExport({ type }: ImportExportProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Queries for export
  const productsExport = useQuery(api.products.exportData);
  const categoriesExport = useQuery(api.categories.exportData);
  const typesExport = useQuery(api.types.exportData);

  // Mutations for import
  const importProducts = useMutation(api.products.bulkImport);
  const importCategories = useMutation(api.categories.bulkImport);
  const importTypes = useMutation(api.types.bulkImport);

  const getExportData = () => {
    switch (type) {
      case "products":
        return productsExport;
      case "categories":
        return categoriesExport;
      case "types":
        return typesExport;
    }
  };

  const handleExport = () => {
    const data = getExportData();
    if (!data || data.length === 0) {
      alert(`No ${type} to export`);
      return;
    }

    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${type}-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const data = JSON.parse(text);

      if (!Array.isArray(data)) {
        alert("Invalid JSON format. Expected an array of items.");
        return;
      }

      let result;
      switch (type) {
        case "products":
          result = await importProducts({ products: data });
          break;
        case "categories":
          result = await importCategories({ categories: data });
          break;
        case "types":
          result = await importTypes({ types: data });
          break;
      }

      alert(
        `Successfully imported ${result.length} ${type}!`
      );

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Import error:", error);
      if (error instanceof Error) {
        alert(`Failed to import ${type}: ${error.message}`);
      } else {
        alert(`Failed to import ${type}. Please check the JSON format.`);
      }
    }
  };

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={handleExport}
        className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
      >
        <Download className="h-4 w-4" />
        Export JSON
      </button>
      <label className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors cursor-pointer">
        <Upload className="h-4 w-4" />
        Import JSON
        <input
          ref={fileInputRef}
          type="file"
          accept=".json,application/json"
          onChange={handleImport}
          className="hidden"
        />
      </label>
    </div>
  );
}
