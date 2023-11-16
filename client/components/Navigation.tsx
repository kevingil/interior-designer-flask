import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="rounded p-2 mx-auto mt-2 mb-12 flex flex-row justify-between items-center max-w-[900px]">
      <div className="text-2xl font-semibold home_title">
        <Link href="/">Interior Designer.AI</Link>
      </div>
        <div className="space-x-4 flex gap-4 text-white">
        <a href="https://github.com/kevingil/interior-designer">Github</a>
        </div>
    </nav>
  );
};

export default Navigation;
