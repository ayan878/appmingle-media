import { useState } from "react";

function Searchbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    if (searchQuery === "") {
      setIsExpanded(false);
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="search"
        className={`py-2 px-2 text-white bg-transparent focus:outline-none transition-all duration-300 ${
          isExpanded ? "w-64" : "w-16"
        }`}
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default Searchbar;
