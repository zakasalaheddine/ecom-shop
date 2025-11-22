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
  categories: Id<"categories">[];
  type: Id<"types">;
  images: string[];
  description: string;
  tags: string[];
  listing_url?: string;
  categoryLabels: string[];
  typeLabel: string;
}

interface Category {
  _id: Id<"categories">;
  label: string;
  imageUrl: string;
}

interface Type {
  _id: Id<"types">;
  label: string;
  imageUrl: string;
}

interface ProductListProps {
  products: Product[] | undefined;
  categories: Category[] | undefined;
  types: Type[] | undefined;
  onEdit: (product: Product) => void;
}

export function ProductList({ products, categories, types, onEdit }: ProductListProps) {
  const deleteProduct = useMutation(api.products.remove);

  const handleDelete = async (id: Id<"products">) => {
    if (confirm("Are you sure you want to delete this product?")) {
      await deleteProduct({ id });
    }
  };

  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: "images",
      header: "Image",
      cell: ({ row }) => (
        <div className="w-16 h-16 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
          <img
            src={row.original.images[0]}
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
        <div className="font-medium text-gray-900 dark:text-white max-w-md break-words whitespace-normal">
          {row.original.title}
        </div>
      ),
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => (
        <div className="text-gray-900 dark:text-white whitespace-nowrap">
          ${row.original.price.toFixed(2)}
        </div>
      ),
    },
    {
      accessorKey: "categoryLabels",
      header: "Categories",
      cell: ({ row }) => (
        <div className="flex flex-wrap gap-1">
          {row.original.categoryLabels.map((label, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 whitespace-nowrap"
            >
              {label}
            </span>
          ))}
        </div>
      ),
      filterFn: (row, columnId, filterValue) => {
        const categoryLabels = row.getValue(columnId) as string[];
        return categoryLabels.includes(filterValue);
      },
    },
    {
      accessorKey: "typeLabel",
      header: "Type",
      cell: ({ row }) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 whitespace-nowrap">
          {row.original.typeLabel}
        </span>
      ),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-2 whitespace-nowrap">
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

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
        <Package className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
        <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
          No products
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Get started by creating a new product.
        </p>
      </div>
    );
  }

  // Prepare filter options
  const categoryOptions = categories?.map((cat) => ({
    label: cat.label,
    value: cat.label,
  })) || [];

  const typeOptions = types?.map((type) => ({
    label: type.label,
    value: type.label,
  })) || [];

  const filters = [
    {
      columnId: "categoryLabels",
      label: "Category",
      options: categoryOptions,
    },
    {
      columnId: "typeLabel",
      label: "Type",
      options: typeOptions,
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={products}
      searchPlaceholder="Search products..."
      filters={filters}
    />
  );
}
