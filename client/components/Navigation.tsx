import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="rounded p-2 m-2 flex flex-row justify-between items-center">
      <div className="text-2xl font-semibold">
        <Link href="/">Interior Designer.AI</Link>
      </div>
      <ul className="space-x-4">
        <li>
          <a href="https://github.com/kevingil/interior-designer">Github</a>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Navigation;
