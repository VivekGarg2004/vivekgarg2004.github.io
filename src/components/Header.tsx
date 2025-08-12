import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between">
        <div className="text-lg font-bold">My Portfolio</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link href="/experience" className="hover:text-gray-400">Experience</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-gray-400">Projects</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;