

const Footer = () => {
    return (
        <nav className="rounded mx-auto max-w-[800px]">
            <div className="h-36 mt-6 flex flex-row justify-between items-center">
                <div className="text-2xl font-semibold ">
                    <a href="https://github.com/kevingil/interior-designer">Github</a>
                </div>
                <ul className="space-x-4 flex gap-4">
                    <li>
                        <p>Made with ❤️ in SF</p>
                    </li>

                </ul>
            </div>

        </nav>
    );
};

export default Footer;