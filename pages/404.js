import Link from "next/link";

export default function Custom404() {
  return (
    <main>
      <h1>404 - Page not found</h1>
      <iframe
        src="https://giphy.com/embed/Ta3v3I4GI1gH7Rqek6"
        width="480"
        height="264"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/nfl-lost-the-weeknd-maze-Ta3v3I4GI1gH7Rqek6"></a>
      </p>
      <Link href="/">
        <button className="btn btn-success btn-lg mt-2">Go home</button>
      </Link>
    </main>
  );
}
