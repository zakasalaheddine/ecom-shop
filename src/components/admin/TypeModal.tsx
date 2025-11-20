import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import { Modal } from "./Modal";

interface TypeForm {
  id?: Id<"types">;
  label: string;
  imageUrl: string;
}

interface TypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  typeForm: TypeForm;
  setTypeForm: (form: TypeForm) => void;
}

export function TypeModal({
  isOpen,
  onClose,
  typeForm,
  setTypeForm,
}: TypeModalProps) {
  const createType = useMutation(api.types.create);
  const updateType = useMutation(api.types.update);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (typeForm.id) {
        await updateType({
          id: typeForm.id,
          label: typeForm.label,
          imageUrl: typeForm.imageUrl,
        });
      } else {
        await createType({
          label: typeForm.label,
          imageUrl: typeForm.imageUrl,
        });
      }
      onClose();
      setTypeForm({ label: "", imageUrl: "" });
    } catch (error) {
      console.error("Error saving type:", error);
      alert("Failed to save type");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={typeForm.id ? "Edit Type" : "Add Type"}
    >
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="type-label" className="block text-sm font-medium text-gray-700 mb-1">
              Label
            </label>
            <input
              id="type-label"
              type="text"
              required
              value={typeForm.label}
              onChange={(e) =>
                setTypeForm({ ...typeForm, label: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="type-image" className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              id="type-image"
              type="url"
              required
              value={typeForm.imageUrl}
              onChange={(e) =>
                setTypeForm({ ...typeForm, imageUrl: e.target.value })
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
            {typeForm.id ? "Update" : "Create"}
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
