import { CATEGORIES } from "@/lib/constants";

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar pb-4 pt-2">
      <div className="flex space-x-6 md:justify-center px-4 min-w-max">
        {CATEGORIES.map((category) => (
          <button
            type="button"
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className="flex flex-col items-center gap-3 group focus:outline-none"
          >
            <div
              className={`
              relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 transition-all duration-300
              ${
                activeCategory === category.id
                  ? "border-black p-1"
                  : "border-transparent group-hover:scale-105"
              }
            `}
            >
              <div className="w-full h-full rounded-full overflow-hidden relative bg-gray-100">
                <img
                  src={category.imageUrl}
                  alt={category.label}
                  className="w-full h-full object-cover object-center"
                />
                {activeCategory !== category.id && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                )}
              </div>
            </div>
            <span
              className={`
              text-xs md:text-sm font-medium transition-colors
              ${activeCategory === category.id ? "text-black" : "text-gray-500 group-hover:text-gray-800"}
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
