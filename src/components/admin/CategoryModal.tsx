import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import { Modal } from "./Modal";

interface CategoryForm {
  id?: Id<"categories">;
  label: string;
  imageUrl: string;
}

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  categoryForm: CategoryForm;
  setCategoryForm: (form: CategoryForm) => void;
}

export function CategoryModal({
  isOpen,
  onClose,
  categoryForm,
  setCategoryForm,
}: CategoryModalProps) {
  const createCategory = useMutation(api.categories.create);
  const updateCategory = useMutation(api.categories.update);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (categoryForm.id) {
        await updateCategory({
          id: categoryForm.id,
          label: categoryForm.label,
          imageUrl: categoryForm.imageUrl,
        });
      } else {
        await createCategory({
          label: categoryForm.label,
          imageUrl: categoryForm.imageUrl,
        });
      }
      onClose();
      setCategoryForm({ label: "", imageUrl: "" });
    } catch (error) {
      console.error("Error saving category:", error);
      alert("Failed to save category");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={categoryForm.id ? "Edit Category" : "Add Category"}
    >
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="category-label" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Label
            </label>
            <input
              id="category-label"
              type="text"
              required
              value={categoryForm.label}
              onChange={(e) =>
                setCategoryForm({ ...categoryForm, label: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-1 focus:ring-black dark:focus:ring-white focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="category-image" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Image URL
            </label>
            <input
              id="category-image"
              type="url"
              required
              value={categoryForm.imageUrl}
              onChange={(e) =>
                setCategoryForm({
                  ...categoryForm,
                  imageUrl: e.target.value,
                })
              }
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-1 focus:ring-black dark:focus:ring-white focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 -mx-4 -mb-4 px-4 py-3 mt-6 sm:flex sm:flex-row-reverse gap-2">
          <button
            type="submit"
            className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            {categoryForm.id ? "Update" : "Create"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="mt-3 sm:mt-0 w-full sm:w-auto bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
