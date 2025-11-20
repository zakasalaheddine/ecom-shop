"use client";

import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import { Edit2, Trash2, Package } from "lucide-react";
import { DataTable } from "./DataTable";
import type { ColumnDef } from "@tanstack/react-table";

interface Product {
  _id: Id<"products">;
  title: string;
  price: number;
  category: Id<"categories">;
  type: Id<"types">;
  imageUrl: string;
  listingUrl: string;
  categoryLabel: string;
  typeLabel: string;
}

interface ProductListProps {
  products: Product[] | undefined;
  onEdit: (product: Product) => void;
}

export function ProductList({ products, onEdit }: ProductListProps) {
  const deleteProduct = useMutation(api.products.remove);

  const handleDelete = async (id: Id<"products">) => {
    if (confirm("Are you sure you want to delete this product?")) {
      await deleteProduct({ id });
    }
  };

  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: "imageUrl",
      header: "Image",
      cell: ({ row }) => (
        <div className="w-16 h-16 overflow-hidden rounded-md bg-gray-100">
          <img
            src={row.original.imageUrl}
            alt={row.original.title}
            className="w-full h-full object-cover"
          />
        </div>
      ),
      enableSorting: false,
    },
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => (
        <div className="font-medium text-gray-900">{row.original.title}</div>
      ),
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => (
        <div className="text-gray-900">
          ${row.original.price.toFixed(2)}
        </div>
      ),
    },
    {
      accessorKey: "categoryLabel",
      header: "Category",
      cell: ({ row }) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {row.original.categoryLabel}
        </span>
      ),
    },
    {
      accessorKey: "typeLabel",
      header: "Type",
      cell: ({ row }) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          {row.original.typeLabel}
        </span>
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

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
        <Package className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">
          No products
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Get started by creating a new product.
        </p>
      </div>
    );
  }

  return (
    <DataTable
      columns={columns}
      data={products}
      searchPlaceholder="Search products..."
    />
  );
}
