import Link from "next/link";

function SearchResult({ result }) {
    return (
      <Link
        className="text-[#222831] flex py-3 px-3 hover:text-main transition duration-300"
        href={`/blog/view/${result.link}`}
      >
        <span className="max-w-xs truncate">{result.title} </span>
        <span className="text-main text-sm px-1 truncate max-w-xs">
          - {`/blog/view/${result.link}`}
        </span>
      </Link>
    );
  }

export default function SearchResultsList({ results, showDropdown, dropdown, input }) {
    return (
      <>
        {showDropdown && (
          <div className="w-full bg-secondary flex flex-col rounded-[10px] mt-4 max-h-96 overflow-y-auto overflow-x-hidden relative z-[999]">
            <div ref={dropdown}>
              <div className="flex justify-between">
                <h3 className="font-bold text-sm px-3 py-2 opacity-50 text-black">
                  Results for keyword {'"'}<span className="text-main">{`${input}`}</span>{'"'}
                </h3>
              </div>
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