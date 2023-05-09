import { useEffect, useRef, useState } from "react";
import ActiveLink from "./ActiveLink";

export default function Search({ setResults, results, articles }) {
    const [showDropdown, setShowDropdown] = useState(false);
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
        <div className="items-center w-full pt-20 px-10">
            <SearchBar setResults={setResults} articles={articles} setShowDropdown={setShowDropdown} />
            {results && results.length > 0 && <SearchResultsList results={results} showDropdown={showDropdown} dropdown={dropdown} />}
        </div>
    )
}

function SearchBar ({ setResults, articles, setShowDropdown }) {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        const results = articles.filter((article) => {
            return (
            value &&
            article &&
            article.title &&
            article.title.toLowerCase().includes(value.toLowerCase()),
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
        if (e.keyCode == 13) {
            e.preventDefault();
            setShowDropdown(true);
        }
    }

    return (
        <div className="w-full">
            <input
                type="search"
                placeholder="Search the title of an article..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                onKeyDown={enterBTN}
                className="inline-block w-full py-2 pl-4 pr-10 2xl:text-xl rounded-full focus:outline-none border-2 border-secondary bg-secondary text-main"
            />
        </div>
    );
}

function SearchResult({ result }) {
    return (
      <ActiveLink className="text-[#222831] flex py-3 px-3 cursor-pointer hover:text-4B70EA" href={`/blog/${result.link}`}>
          {result.title} - <span className="text-main text-sm px-1">{`/blog/${result.link}`}</span>
      </ActiveLink>
    );
}
  
function normalizePreviewText(textToNormalize) {
    let temp = textToNormalize;
    temp = temp.replace(/<style([\s\S]*?)<\/style>/gi, '');
    temp = temp.replace(/<script([\s\S]*?)<\/script>/gi, '');
    temp = temp.replace(/<\/div>/ig, '\n');
    temp = temp.replace(/<\/li>/ig, '\n');
    temp = temp.replace(/<li>/ig, '  *  ');
    temp = temp.replace(/<\/ul>/ig, '\n');
    temp = temp.replace(/<\/oembed>/ig, '');
    temp = temp.replace(/<\/p>/ig, '\n');
    temp = temp.replace(/<br\s*[\/]?>/gi, "\n");
    temp = temp.replace(/<[^>]+>/ig, '');
    return temp;
}

function SearchResultsList({ results, showDropdown, dropdown }) {
    return (
        <>
            {showDropdown && (
                <div ref={dropdown} className="w-full bg-secondary flex flex-col rounded-[10px] mt-4 max-h-96 overflow-y-auto overflow-x-hidden relative z-[999]">
                    <h1 className="font-bold text-sm px-3 py-2 opacity-50">Results</h1>
                    <ul className="divide-y divide-[#222831]">
                        {results.map((result, id) => {
                            return <SearchResult result={result} key={id} />
                        })}
                    </ul>
                </div>
            )}
        </>
    )
}