
import { Search } from "lucide-react";
import { useState } from "react";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we'll implement search functionality later
    console.log("Searching for:", searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
      <div 
        className={`
          relative transition-all duration-300
          ${focused ? 'scale-[1.02]' : 'scale-100'}
        `}
      >
        <div className="relative flex items-center">
          <Search 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" 
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Search for AI agents..."
            className="w-full pl-12 pr-4 py-4 text-lg bg-white/50 backdrop-blur-sm 
                     border border-gray-200 rounded-xl shadow-sm 
                     placeholder:text-gray-400 focus:outline-none focus:ring-2 
                     focus:ring-gray-200/20 focus:border-transparent 
                     transition-all duration-200"
          />
        </div>
      </div>
    </form>
  );
};
