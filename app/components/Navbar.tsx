import Link from "next/link";
import Search from "./Search";

export default function Navbar() {
  return (
    <nav className=" bg-cyan-50 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl z-50">
      <h1 className="text-3xl font-bold text-black grid place-content-center mb-2 md:mb-0 md:ml-12">
        <Link href="/">Music World</Link>
      </h1>
      <Search />
    </nav>
  );
}
