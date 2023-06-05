export default function SearchBar({ setResults, articles, setShowDropdown, input, setInput }) {
    const fetchData = (value) => {
      const results = articles.filter((article) => {
        let checkSubset = (parent, subset) =>
          subset.every((el) => parent.includes(el));
        
        return (
          value &&
          article &&
          article.title &&
          checkSubset(article.title.toLowerCase().split(" "), value.toLowerCase().split(" ")) ||
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
          placeholder="&#xF002; Search the title or tag of an article..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={enterBTN}
          className="inline-block w-full py-2 pl-4 pr-10 2xl:text-xl rounded-full focus:outline-none border-2 border-secondary text-main focus:border-main bg-secondary"
          style={{ fontFamily: "Poppins, FontAwesome" }}
        />
      </div>
    );
  }