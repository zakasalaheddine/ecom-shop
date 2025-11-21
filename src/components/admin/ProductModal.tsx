import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import { Modal } from "./Modal";

interface ProductForm {
  id?: Id<"products">;
  title: string;
  price: string;
  categories: string[];
  type: string;
  images: string;
  description: string;
  tags: string;
  listing_url: string;
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
    if (productForm.categories.length === 0 || !productForm.type) {
      alert("Please select at least one category and a type");
      return;
    }

    // Parse comma-separated strings into arrays
    const imagesArray = productForm.images
      .split(",")
      .map((url) => url.trim())
      .filter((url) => url.length > 0);
    const tagsArray = productForm.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    if (imagesArray.length === 0) {
      alert("Please provide at least one image URL");
      return;
    }

    try {
      if (productForm.id) {
        await updateProduct({
          id: productForm.id,
          title: productForm.title,
          price: parseFloat(productForm.price),
          categories: productForm.categories as Id<"categories">[],
          type: productForm.type as Id<"types">,
          images: imagesArray,
          description: productForm.description,
          tags: tagsArray,
          listing_url: productForm.listing_url || undefined,
        });
      } else {
        await createProduct({
          title: productForm.title,
          price: parseFloat(productForm.price),
          categories: productForm.categories as Id<"categories">[],
          type: productForm.type as Id<"types">,
          images: imagesArray,
          description: productForm.description,
          tags: tagsArray,
          listing_url: productForm.listing_url || undefined,
        });
      }
      onClose();
      setProductForm({
        title: "",
        price: "",
        categories: [],
        type: "",
        images: "",
        description: "",
        tags: "",
        listing_url: "",
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categories (select at least one)
            </label>
            <div className="space-y-2 max-h-48 overflow-y-auto border border-gray-300 rounded-md p-3">
              {categories?.map((cat) => (
                <label
                  key={cat._id}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded"
                >
                  <input
                    type="checkbox"
                    checked={productForm.categories.includes(cat._id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setProductForm({
                          ...productForm,
                          categories: [...productForm.categories, cat._id],
                        });
                      } else {
                        setProductForm({
                          ...productForm,
                          categories: productForm.categories.filter(
                            (id) => id !== cat._id
                          ),
                        });
                      }
                    }}
                    className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">{cat.label}</span>
                </label>
              ))}
            </div>
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
            <label htmlFor="product-images" className="block text-sm font-medium text-gray-700 mb-1">
              Image URLs (comma-separated)
            </label>
            <textarea
              id="product-images"
              required
              rows={3}
              value={productForm.images}
              onChange={(e) =>
                setProductForm({ ...productForm, images: e.target.value })
              }
              placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="product-description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="product-description"
              required
              rows={4}
              value={productForm.description}
              onChange={(e) =>
                setProductForm({ ...productForm, description: e.target.value })
              }
              placeholder="Product description..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="product-tags" className="block text-sm font-medium text-gray-700 mb-1">
              Tags (comma-separated)
            </label>
            <input
              id="product-tags"
              type="text"
              required
              value={productForm.tags}
              onChange={(e) =>
                setProductForm({ ...productForm, tags: e.target.value })
              }
              placeholder="tag1, tag2, tag3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="product-listing-url" className="block text-sm font-medium text-gray-700 mb-1">
              Listing URL (optional)
            </label>
            <input
              id="product-listing-url"
              type="text"
              value={productForm.listing_url}
              onChange={(e) =>
                setProductForm({ ...productForm, listing_url: e.target.value })
              }
              placeholder="https://www.etsy.com/listing/12345678"
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
