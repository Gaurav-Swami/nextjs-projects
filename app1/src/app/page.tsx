import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="bg-blue-600">Welcome Home</h1>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/products"}>Products</Link>
    </>
  );
}
