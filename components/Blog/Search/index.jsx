import { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";

export default function Search({ setResults, results, articles }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [input, setInput] = useState("");
    const searchBar = useRef(null);
  
    useEffect(() => {
      if (!showDropdown) return;
  
      function handleClick(e) {
        if ((searchBar.current && !searchBar.current.contains(e.target))) {
          setInput("");
          setShowDropdown(false);
        }
      }
  
      window.addEventListener("click", handleClick);
      return () => window.removeEventListener("click", handleClick);
    }, [showDropdown]);
  
    return (
      <div className="absolute w-full pt-56 px-5 md:px-24">
        <SearchBar
          setResults={setResults}
          articles={articles}
          setShowDropdown={setShowDropdown}
          input={input}
          setInput={setInput}
          searchBar={searchBar}
        />
        {results && results.length > 0 && (
          <SearchResultsList
            results={results}
            showDropdown={showDropdown}
            input={input}
          />
        )}
      </div>
    );
  }