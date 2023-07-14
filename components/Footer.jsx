import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    return (
        <footer className="w-full bg-transparent pt-1 pb-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
                <div className="text-gray-800 text-center md:text-left p-3">
                    <p className="text-lg font-semibold">Developer: Mohammad H. Rizwan</p>
                    <p className="text-sm">Professional Web Developer | AI Enthusiast</p>
                    <p className="text-sm">© 2023 RizzyPrompts. All rights reserved.</p>
                </div>

                <div className="text-gray-800 text-center mt-4 md:mt-0 p-3">
                    <p className="text-lg font-semibold">About RizzyPrompts</p>
                    <p className="text-sm">RizzyPrompts is a platform dedicated to the AI community, providing a space to discover, share, and collaborate on prompts for artificial intelligence projects.</p>
                    <p className="text-sm">Join our community of innovators and leverage the power of collective creativity to inspire and drive AI advancements.</p>
                    <p className="text-sm">Rules and Conduct: To foster a positive and inclusive environment, please refrain from using explicit terms in prompts.</p>
                </div>

                <div className="text-gray-800 text-center mt-4 md:mt-0 p-3">
                    <p className="text-lg font-semibold">Connect with me:</p>
                    <div className="flex justify-center md:justify-end mt-2 gap-2">
                        <Link href="https://www.linkedin.com/in/mohammad-h-rizwan/" target="_blank" className="flex gap-1 flex-center text-gray-600 transition-all duration-300 hover:text-gray-900 hover:scale-110 ">
                            <Image
                                src="/assets/images/linkedIn.svg"
                                alt="RizzyPrompts Logo"
                                width={15}
                                height={15}
                                className="object-contain"
                            />
                            LinkedIn
                        </Link>
                        <span className="text-gray-500 mx-2">|</span>

                        <Link href="https://www.github.com/mrizwan83" target="_blank" className="flex gap-1 flex-center text-gray-600 transition-all duration-300 hover:text-gray-900 hover:scale-110 ">
                            <Image
                                src="/assets/images/github.svg"
                                alt="RizzyPrompts Logo"
                                width={15}
                                height={15}
                                className="object-contain"
                            />
                            Github
                        </Link>
                        <span className="text-gray-500 mx-2">|</span>
                        <Link href="https://mrizwan83.github.io/mrizwan83/" target="_blank" className="flex gap-1 flex-center text-gray-600 transition-all duration-300 hover:text-gray-900 hover:scale-110 ">
                            <Image
                                src="/assets/images/portfolio.svg"
                                alt="RizzyPrompts Logo"
                                width={15}
                                height={15}
                                className="object-contain"
                            />
                            Portfolio
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
