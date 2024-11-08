import Link from "next/link";
export default function Navbar() {
  return (
    <header className="bg-black sticky top-0 z-10  ">
      <nav className="flex flex-col gap-4items-center sm:flex-row sm:justify-between text-white font-bold p-4 max-w-6xl mx-auto">
        <h1 className="whitespace-nowrap text-2xl sm:text-3xl text-center">
          <Link href="/">Awesome Image Gallery</Link>
        </h1>
      </nav>
    </header>
  );
}
