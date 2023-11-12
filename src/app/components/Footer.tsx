export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-5xl items-center justify-between p-5">
      <a
        href="mailto:ahsanaz461@gmail.com"
        className="btn-stype group border-primary bg-primary text-2xl text-theme opacity-100 hover:opacity-70"
      >
        Get in touch{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 24 24"
          className="inline-block h-8 w-8 flex-shrink-0 translate-x-0 select-none fill-current transition-transform duration-300 group-hover:translate-x-2"
        >
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
        </svg>
      </a>
      <p className="text-lg font-medium">&#169; Ahsan Azizan 2023</p>
    </footer>
  );
}
