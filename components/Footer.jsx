const Footer = () => {
    return (
        <footer className="w-full bg-transparent pt-1 pb-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">

                <div className="text-gray-800 text-center md:text-left ">
                    <p className="text-lg font-semibold">Random Ads</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="text-gray-800 text-center mt-4 md:mt-0">
                    <p className="text-lg font-semibold">Developer: Mohammad H. Rizwan</p>
                    <p className="text-sm">© 2023 RizzyPrompts. All rights reserved.</p>
                </div>

                <div className="text-gray-800 text-center mt-4 md:mt-0">
                    <p className="text-lg font-semibold">Connect with me:</p>
                    <div className="flex justify-center md:justify-end mt-2">
                        <a
                            href="https://github.com/mrizwan83"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            GitHub
                        </a>
                        <span className="text-gray-500 mx-2">|</span>
                        <a
                            href="https://mrizwan83.github.io/mrizwan83/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            Portfolio
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
