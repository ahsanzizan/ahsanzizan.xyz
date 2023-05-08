import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="w-full bg-secondary flex flex-col rounded-[10px] mt-4 max-h-96 overflow-y-auto overflow-x-hidden relative z-[999]">
      <h1 className="font-bold text-sm px-3 py-2 opacity-50">Results (click the x button on the right to close)</h1>
      <ul className="divide-y divide-[#222831]">
        {results.map((result, id) => {
          return <SearchResult result={result} key={id} />;
        })}
      </ul>
    </div>
  );
};