import { Link } from "./ui/button";

export default function PaginatedNavigator({
  segment,
  page,
  maxPage,
}: Readonly<{
  segment: "blog" | "works";
  page: number;
  maxPage: number;
}>) {
  return (
    <div className="flex items-center gap-4">
      <Link
        href={`/${segment}?page=${page - 1}`}
        className={`${
          page > 1 ? "opacity-100" : "pointer-events-none opacity-50"
        }`}
      >
        {"<"}
      </Link>
      <p>
        {page} / {maxPage}
      </p>
      <Link
        href={`/${segment}?page=${page + 1}`}
        className={`${
          page < maxPage ? "opacity-100" : "pointer-events-none opacity-50"
        }`}
      >
        {">"}
      </Link>
    </div>
  );
}
