import { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";

export default function Search({ setResults, results, articles }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [input, setInput] = useState("");
    const dropdown = useRef(null);
  
    useEffect(() => {
      if (!showDropdown) return;
  
      function handleClick(e) {
        if (dropdown.current && !dropdown.current.contains(e.target)) {
          setShowDropdown(false);
        }
      }
  
      window.addEventListener("click", handleClick);
      return () => window.removeEventListener("click", handleClick);
    }, [showDropdown]);
  
    return (
      <div className="absolute w-full pt-20 px-5 lg:px-32">
        <SearchBar
          setResults={setResults}
          articles={articles}
          setShowDropdown={setShowDropdown}
          input={input}
          setInput={setInput}
        />
        {results && results.length > 0 && (
          <SearchResultsList
            results={results}
            showDropdown={showDropdown}
            dropdown={dropdown}
            input={input}
          />
        )}
      </div>
    );
  }