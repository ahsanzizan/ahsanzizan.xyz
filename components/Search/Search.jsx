import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";

export default function Search({ setResults, results, articles}) {
    return (
        <div className="items-center w-full pt-20 px-10">
            <SearchBar setResults={setResults} articles={articles} />
            {results && results.length > 0 && <SearchResultsList results={results} />}
        </div>
    )
}