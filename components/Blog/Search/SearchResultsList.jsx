import Link from "next/link";

function SearchResult({ result }) {
    return (
      <Link
        className="text-black flex py-3 px-3 hover:bg-[#c8c8c8fc] transition duration-300"
        href={`/blog/view/${result.link}`}
      >
        <span className="max-w-xs truncate font-bold">{result.title} </span>
        <span className="px-1 truncate max-w-xs">
          - {`/blog/view/${result.link}`}
        </span>
      </Link>
    );
  }

export default function SearchResultsList({ results, showDropdown, dropdown, input }) {
    return (
      <>
        {showDropdown && (
          <div className="w-full bg-white flex flex-col border-2 border-black mt-4 max-h-96 overflow-y-auto overflow-x-hidden relative z-[999]">
            <div>
              <div className="flex justify-between">
                <h3 className="font-bold text-sm px-3 py-2 text-black">
                  Results for {'"'}<span className="text-main">{`${input}`}</span>{'"'}
                </h3>
              </div>
              <ul className="divide-y-2 divide-[#c8c8c8fc] py-3">
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