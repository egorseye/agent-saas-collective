
import { Search } from "lucide-react";
import { useState } from "react";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we'll implement search functionality later
    console.log("Searching for:", searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for AI agents..."
          className="w-full px-6 py-4 text-lg bg-white border border-gray-200 rounded-full shadow-sm 
                   placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 
                   focus:border-transparent transition-all duration-200"
        />
        <button
          type="submit"
          className="absolute right-3 p-2 text-gray-400 hover:text-gray-600 
                   focus:outline-none transition-colors duration-200"
        >
          <Search size={24} />
        </button>
      </div>
    </form>
  );
};
