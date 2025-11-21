import { getStorageUrl } from "@/lib/storage-utils";

interface Category {
  _id: string;
  label: string;
  imageUrl?: string;
  storageId?: string;
}

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
  categories: Category[];
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onCategoryChange,
  categories,
}) => {
  // Add "all" category at the beginning with storage ID
  const allCategories = [
    {
      _id: "all",
      label: "All",
      imageUrl: getStorageUrl("kg2baczn6bvksv3wk2he0v9ps97vvqan")
    },
    ...categories,
  ];

  return (
    <div className="w-full overflow-x-auto no-scrollbar pb-4 pt-2">
      <div className="flex space-x-6 md:justify-center px-4 min-w-max">
        {allCategories.map((category) => (
          <button
            type="button"
            key={category._id}
            onClick={() => onCategoryChange(category._id)}
            className="flex flex-col items-center gap-3 group focus:outline-none"
          >
            <div
              className={`
              relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 transition-all duration-300
              ${
                activeCategory === category._id
                  ? "border-black p-1"
                  : "border-transparent group-hover:scale-105"
              }
            `}
            >
              <div className="w-full h-full rounded-full overflow-hidden relative bg-gray-100">
                <img
                  src={category.imageUrl || "/placeholder.jpg"}
                  alt={category.label}
                  className="w-full h-full object-cover object-center"
                />
                {activeCategory !== category._id && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                )}
              </div>
            </div>
            <span
              className={`
              text-xs md:text-sm font-medium transition-colors
              ${activeCategory === category._id ? "text-black" : "text-gray-500 group-hover:text-gray-800"}
            `}
            >
              {category.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
