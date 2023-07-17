"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { useRouter } from "next/navigation";

const Nav = () => {
    const router = useRouter();


    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, settoggleDropdown] = useState(false);

    const logout = async (e) => {
        e.preventDefault();
        await signOut({
            callbackUrl: "/",
            onSuccess: () => {
                router.push("/");
            },
        });
    };





    // fetch the providers from nextauth, and useEffect hook to call only once at start
    useEffect(() => {
        const fetchProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }
        fetchProviders();
    }, []);



    return (
        // justify content -space between
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center">
                <Image
                    src="/assets/images/logo.svg"
                    alt="RizzyPrompts Logo"
                    width={30}
                    height={30}
                    className="object-contain"
                />
                <p className="logo_text"><span className="custom_gradient">Rizzy</span><span className="custom_gradient_2">Prompts</span></p>
            </Link>

            {/* Desktop Navigation  once it crosses small size display flex otherwise hidden on small screens*/}
            <div className="sm:flex hidden">
                {session?.user ? (
                    // gap3 normally, after crossing md then gap-5
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompt" className="black_btn">
                            Create Post
                        </Link>

                        <button type="button" onClick={logout} className="outline_btn">
                            Sign Out
                        </button>

                        <Link href="/profile" >
                            <Image
                                src={session?.user.image}
                                alt="profile"
                                width={37}
                                height={37}
                                className="rounded-full"
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers &&

                            <button type="button" onClick={signIn} className="black_btn">
                                Sign In
                            </button>

                        }
                    </>
                )}
            </div>
            {/* mobile navigation once it crosses small size then hidden, otherwise flex*/}
            <div className="sm:hidden flex relative">
                {/* if logged in display profile image, othwerwise show the providers to login */}
                {session?.user ? (
                    <div className="flex">
                        <Image
                            src={session?.user.image}
                            alt="profile"
                            width={37}
                            height={37}
                            className="rounded-full"
                            onClick={() => settoggleDropdown((prev) => !prev)}
                        />
                        {/* check globals.css for styles for dropdown (abosolute min-w-[210px] ) */}
                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link
                                    href="/profile"
                                    className="dropdown_link"
                                    onClick={() => settoggleDropdown(false)}
                                >
                                    My Profile
                                </Link>
                                <Link
                                    href="/create-prompt"
                                    className="dropdown_link"
                                    onClick={() => settoggleDropdown(false)}
                                >
                                    Create Prompt
                                </Link>
                                <button
                                    type="button"
                                    onClick={logout}
                                    className="mt-5 w-full black_btn"
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (<>
                    {providers &&


                        <button type="button" onClick={signIn} className="black_btn">
                            Sign In
                        </button>
                    }
                </>)}
            </div>

        </nav>
    )
}

export default Nav
