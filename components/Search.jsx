import { useEffect, useRef, useState } from "react";
import ActiveLink from "./ActiveLink";

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
    <div className="absolute w-full pt-20 px-5 lg:px-48">
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

function SearchBar({ setResults, articles, setShowDropdown, input, setInput }) {
  const fetchData = (value) => {
    const results = articles.filter((article) => {
      var post = article.post.toLowerCase().split(" ");
      post = post.filter((c, index) => post.indexOf(c) === index);
      String.prototype.cleanup = function () {
        return this.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
      };
      post.forEach((el, id) => {
        el = el.cleanup();
        el = el.trim();
      });

      let checkSubset = (parent, subset) =>
        subset.every((el) => parent.includes(el));

      return (
        value &&
        article &&
        article.title &&
        article.title.toLowerCase().includes(value.toLowerCase()) ||
        checkSubset(post, value.toLowerCase().split(" "))
      );
    });
    setResults(results);
  };

  const handleChange = (value) => {
    setShowDropdown(true);
    setInput(value);
    fetchData(value);
  };

  const enterBTN = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setShowDropdown(true);
    }
  };

  return (
    <div className="w-full">
      <input
        type="search"
        placeholder="Search the keywords of an article..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={enterBTN}
        className="inline-block w-full py-2 pl-4 pr-10 2xl:text-xl rounded-full focus:outline-none border-2 border-secondary text-main focus:border-main bg-secondary"
      />
    </div>
  );
}

function SearchResult({ result }) {
  return (
    <ActiveLink
      className="text-[#222831] flex py-3 px-3 hover:text-main transition duration-300"
      href={`/blog/${result.link}`}
    >
      <span className="max-w-xs truncate">{result.title} </span>
      <span className="text-main text-sm px-1 truncate max-w-xs">
        - {`/blog/${result.link}`}
      </span>
    </ActiveLink>
  );
}

function SearchResultsList({ results, showDropdown, dropdown, input }) {
  return (
    <>
      {showDropdown && (
        <div className="w-full bg-secondary flex flex-col rounded-[10px] mt-4 max-h-96 overflow-y-auto overflow-x-hidden relative z-[999]">
          <div ref={dropdown}>
            <h1 className="font-bold text-sm px-3 py-2 opacity-50">
              Results for keyword <span className="text-main">{`"${input}"`}</span>
            </h1>
            <ul className="">
              {results.map((result, id) => {
                return <SearchResult result={result} key={id} />;
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
