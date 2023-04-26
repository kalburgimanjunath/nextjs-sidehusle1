import Link from 'next/link';
export default function Navbar() {
  return (
    <div className="navbar-top">
      <div className="navbar-start">
        <Link href="/">Sidehustle</Link>
      </div>
      <div className="navbar-end">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/ideas">Popular Ideas</Link>
          </li>
          <li>
            <Link href="/contribute">Contribute your Ideas</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
