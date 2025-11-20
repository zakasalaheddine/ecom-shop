import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import { Modal } from "./Modal";

interface ProductForm {
  id?: Id<"products">;
  title: string;
  price: string;
  category: string;
  type: string;
  imageUrl: string;
  listingUrl: string;
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  productForm: ProductForm;
  setProductForm: (form: ProductForm) => void;
  categories: Array<{ _id: Id<"categories">; label: string; imageUrl: string }> | undefined;
  types: Array<{ _id: Id<"types">; label: string; imageUrl: string }> | undefined;
}

export function ProductModal({
  isOpen,
  onClose,
  productForm,
  setProductForm,
  categories,
  types,
}: ProductModalProps) {
  const createProduct = useMutation(api.products.create);
  const updateProduct = useMutation(api.products.update);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productForm.category || !productForm.type) {
      alert("Please select both category and type");
      return;
    }

    try {
      if (productForm.id) {
        await updateProduct({
          id: productForm.id,
          title: productForm.title,
          price: parseFloat(productForm.price),
          category: productForm.category as Id<"categories">,
          type: productForm.type as Id<"types">,
          imageUrl: productForm.imageUrl,
          listingUrl: productForm.listingUrl,
        });
      } else {
        await createProduct({
          title: productForm.title,
          price: parseFloat(productForm.price),
          category: productForm.category as Id<"categories">,
          type: productForm.type as Id<"types">,
          imageUrl: productForm.imageUrl,
          listingUrl: productForm.listingUrl,
        });
      }
      onClose();
      setProductForm({
        title: "",
        price: "",
        category: "",
        type: "",
        imageUrl: "",
        listingUrl: "",
      });
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Failed to save product");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={productForm.id ? "Edit Product" : "Add Product"}
    >
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="product-title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              id="product-title"
              type="text"
              required
              value={productForm.title}
              onChange={(e) =>
                setProductForm({ ...productForm, title: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="product-price" className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              id="product-price"
              type="number"
              step="0.01"
              required
              value={productForm.price}
              onChange={(e) =>
                setProductForm({ ...productForm, price: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="product-category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="product-category"
              required
              value={productForm.category}
              onChange={(e) =>
                setProductForm({ ...productForm, category: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black focus:outline-none"
            >
              <option value="">Select a category</option>
              {categories?.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="product-type" className="block text-sm font-medium text-gray-700 mb-1">
              Type
            </label>
            <select
              id="product-type"
              required
              value={productForm.type}
              onChange={(e) =>
                setProductForm({ ...productForm, type: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black focus:outline-none"
            >
              <option value="">Select a type</option>
              {types?.map((type) => (
                <option key={type._id} value={type._id}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="product-image" className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              id="product-image"
              type="url"
              required
              value={productForm.imageUrl}
              onChange={(e) =>
                setProductForm({ ...productForm, imageUrl: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="product-listing" className="block text-sm font-medium text-gray-700 mb-1">
              Listing URL
            </label>
            <input
              id="product-listing"
              type="url"
              required
              value={productForm.listingUrl}
              onChange={(e) =>
                setProductForm({
                  ...productForm,
                  listingUrl: e.target.value,
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>
        </div>

        <div className="bg-gray-50 -mx-4 -mb-4 px-4 py-3 mt-6 sm:flex sm:flex-row-reverse gap-2">
          <button
            type="submit"
            className="w-full sm:w-auto bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            {productForm.id ? "Update" : "Create"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="mt-3 sm:mt-0 w-full sm:w-auto bg-white text-gray-700 px-4 py-2 rounded-md font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
