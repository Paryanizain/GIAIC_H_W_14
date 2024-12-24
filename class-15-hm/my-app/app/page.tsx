import Link from "next/link";

export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/todos");
  const res = await url.json();
  return (
    <div>
      <h1 className="text-3xl text-center font-bold">Using JSON Placeholder API</h1>
      {res.map((todo: any) => (
        <Link href={`${todo.id}`}>
        <div>{todo.title}&nbsp;&nbsp;{todo.id}<br/><br/><br/></div>
        </Link>
      ))}
    </div>
  );
}
