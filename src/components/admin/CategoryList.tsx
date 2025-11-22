"use client";

import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import { Edit2, Trash2, Tag } from "lucide-react";
import { DataTable } from "./DataTable";
import type { ColumnDef } from "@tanstack/react-table";

interface Category {
  _id: Id<"categories">;
  label: string;
  imageUrl: string;
}

interface CategoryListProps {
  categories: Category[] | undefined;
  onEdit: (category: Category) => void;
}

export function CategoryList({ categories, onEdit }: CategoryListProps) {
  const deleteCategory = useMutation(api.categories.remove);

  const handleDelete = async (id: Id<"categories">) => {
    if (confirm("Are you sure you want to delete this category?")) {
      await deleteCategory({ id });
    }
  };

  const columns: ColumnDef<Category>[] = [
    {
      accessorKey: "imageUrl",
      header: "Image",
      cell: ({ row }) => (
        <div className="w-16 h-16 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
          <img
            src={row.original.imageUrl}
            alt={row.original.label}
            className="w-full h-full object-cover"
          />
        </div>
      ),
      enableSorting: false,
    },
    {
      accessorKey: "label",
      header: "Label",
      cell: ({ row }) => (
        <div className="font-medium text-gray-900 dark:text-white">{row.original.label}</div>
      ),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onEdit(row.original)}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Edit2 className="h-3 w-3" />
            Edit
          </button>
          <button
            type="button"
            onClick={() => handleDelete(row.original._id)}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded text-sm font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
          >
            <Trash2 className="h-3 w-3" />
            Delete
          </button>
        </div>
      ),
      enableSorting: false,
    },
  ];

  if (!categories || categories.length === 0) {
    return (
      <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
        <Tag className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
        <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
          No categories
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Get started by creating a new category.
        </p>
      </div>
    );
  }

  return (
    <DataTable
      columns={columns}
      data={categories}
      searchPlaceholder="Search categories..."
    />
  );
}
