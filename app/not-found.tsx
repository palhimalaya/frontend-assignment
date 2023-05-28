import Link from "next/link";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold">No results found</h1>
      <p className="text-xl">
        Go back to{" "}
        <Link href="/" className="underline">
          Home 🏠
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
