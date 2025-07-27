import { SearchIcon } from "lucide-react";
interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}
export const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <SearchIcon size={18} className="text-gray-400 dark:text-gray-500" />
      </div>
      <input
        type="text"
        placeholder="Search posts by title, content, or category..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 dark:text-gray-100 transition-colors duration-200"
      />
      {searchTerm && (
        <button
          className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          onClick={() => setSearchTerm("")}
        >
          Clear
        </button>
      )}
    </div>
  );
};
