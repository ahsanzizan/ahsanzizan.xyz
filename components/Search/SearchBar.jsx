import { useState } from "react";

export const SearchBar = ({ setResults, articles }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    const results = articles.filter((article) => {
        return (
        value &&
        article &&
        article.title &&
        article.title.toLowerCase().includes(value.toLowerCase())
        );
    });
    setResults(results);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="w-full">
        <input
        type="search"
        placeholder="Search the title of an article..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        className="inline-block w-full py-2 pl-4 pr-10 2xl:text-xl rounded-full focus:outline-none border-2 border-secondary bg-secondary text-main"
        />
    </div>
  );
};