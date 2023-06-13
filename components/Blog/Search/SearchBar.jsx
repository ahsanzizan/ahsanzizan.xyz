export default function SearchBar({ setResults, articles, setShowDropdown, input, setInput, searchBar }) {
    const fetchData = (value) => {
      const results = articles.filter((article) => {
        let checkSubset = (parent, subset) =>
          subset.every((el) => parent.includes(el));
        
        return (
          value &&
          article &&
          article.title &&
          checkSubset(article.title.toLowerCase(), value.toLowerCase().split(" ")) ||
          article.tags.includes(value.toLowerCase())
        );
      });
      setResults(results);
    };
  
    const handleChange = (value) => {
      setShowDropdown(true);
      setInput(value);
      fetchData(value);
    };
  
    return (
      <div className="w-full" ref={searchBar}>
        <input
          type="search"
          placeholder="Search the title or tag of a blog..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          className="inline-block w-full py-2 pl-4 pr-10 2xl:text-xl focus:outline-none border-2 border-black text-main"
        />
      </div>
    );
  }