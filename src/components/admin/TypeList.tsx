"use client";

import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import { Edit2, Trash2, Layers } from "lucide-react";
import { DataTable } from "./DataTable";
import type { ColumnDef } from "@tanstack/react-table";

interface Type {
  _id: Id<"types">;
  label: string;
  imageUrl: string;
}

interface TypeListProps {
  types: Type[] | undefined;
  onEdit: (type: Type) => void;
}

export function TypeList({ types, onEdit }: TypeListProps) {
  const deleteType = useMutation(api.types.remove);

  const handleDelete = async (id: Id<"types">) => {
    if (confirm("Are you sure you want to delete this type?")) {
      await deleteType({ id });
    }
  };

  const columns: ColumnDef<Type>[] = [
    {
      accessorKey: "imageUrl",
      header: "Image",
      cell: ({ row }) => (
        <div className="w-16 h-16 overflow-hidden rounded-md bg-gray-100">
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
        <div className="font-medium text-gray-900">{row.original.label}</div>
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
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            <Edit2 className="h-3 w-3" />
            Edit
          </button>
          <button
            type="button"
            onClick={() => handleDelete(row.original._id)}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-600 rounded text-sm font-medium hover:bg-red-100 transition-colors"
          >
            <Trash2 className="h-3 w-3" />
            Delete
          </button>
        </div>
      ),
      enableSorting: false,
    },
  ];

  if (!types || types.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
        <Layers className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">
          No types
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Get started by creating a new type.
        </p>
      </div>
    );
  }

  return (
    <DataTable
      columns={columns}
      data={types}
      searchPlaceholder="Search types..."
    />
  );
}
