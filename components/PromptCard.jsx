"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();
    const [copied, setCopied] = useState("");
    const [voted, setVoted] = useState(false); // Track whether the user has voted (first time vote)
    const [clientPost, setClientPost] = useState(post)

    const checkTheVotes = async () => {
        const alreadyVoted = clientPost.votedBy.includes(session?.user?.id)
        setVoted(alreadyVoted);
    }

    useEffect(() => {
        checkTheVotes();
    }, null);

    // votes
    // we should show buttons to upvote or downvote if the logged in user has not voted

    const handleUpvote = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/prompt/${post._id}/upvote`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: session?.user.id }),
            });
            const data = await response.json();
            if (response.ok) {
                // Upvote successful
                setVoted(true); // Mark the user as voted
                setClientPost(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleDownvote = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/prompt/${post._id}/downvote`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: session.user.id }),
            });
            const data = await response.json();
            if (response.ok) {
                // Downvote successful
                setVoted(true); // Mark the user as voted
                setClientPost(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // handle vote change
    const handleVoteChange = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/prompt/${post._id}/votechange`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: session.user.id }),
            });
            const data = await response.json();
            if (response.ok) {
                // Downvote successful
                setClientPost(data.prompt);
                setVoted(false); // Mark the user as unvoted
            }
        } catch (error) {
            console.log(error);
        }
    };

    // copy to clipboard
    const handleCopy = () => {
        setCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(() => setCopied(""), 3000);
    }

    // handle profile link
    const handleProfileClick = () => {
        console.log(post);

        if (post.creator_id === session?.user.id) return router.push("/profile");
        // route to dynamic profile page, pass the username along
        router.push(`/profile/${post.creator._id}?name=${post.creator.username}`)
    }

    return (
        <div className='prompt_card'>
            <div className="flex flex-wrap justify-between items-start gap-5">
                <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer' onClick={handleProfileClick}>
                    <Image
                        src={post.creator.image}
                        alt='user-image'
                        width={40}
                        height={40}
                        className='rounded-full object-contain'
                    />

                    <div className="flex flex-col">
                        <h3 className='font-satoshi font-semibold text-gray-900'>{post.creator.username}</h3>
                    </div>
                </div>
                <div className="copy_btn" onClick={handleCopy}>
                    <Image
                        src={copied === post.prompt ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
                        alt='copy-to-clipboard'
                        width={12}
                        height={12}
                    />
                </div>
            </div>
            <p className='my-4 font-satoshi text-medium text-gray-700'>{post.prompt}</p>
            <p className='font-inter text-sm blue_gradient cursor-pointer' onClick={() => handleTagClick && handleTagClick(post.tag)}>#{post.tag}</p>
            <div className="flex items-end justify-around mt-2 gap-5">
                <div className="flex justify-center gap-3">
                    <Image
                        src='/assets/icons/upvote.svg'
                        alt='upvotes'
                        width={22}
                        height={22}
                        className="object-contain"
                        style={{ width: "auto" }}
                    />
                    <span className='font-satoshi font-semibold text-gray-500'>{clientPost.upvotes}</span>
                </div>
                <div className="flex justify-center gap-3">
                    <Image
                        src='/assets/icons/downvote.svg'
                        alt='downvotes'
                        width={22}
                        height={22}
                        className="object-contain"
                        style={{ width: "auto" }}
                    />
                    <span className='font-satoshi font-semibold text-gray-500'>{clientPost.downvotes}</span>
                </div>
            </div>
            {/* if user is logged, give them voting functionality */}
            {session && !voted ? (<div className="flex items-center justify-around mt-2 gap-5">
                <button disabled={!session} className="text-white bg-gradient-to-br from-green-400 via-blue-500 to-cyan-600 hover:bg-gradient-to-bl focus:outline-none font-small rounded-full text-sm px-3 py-1 text-center" onClick={handleUpvote}>Upvote</button>
                <button disabled={!session} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:outline-none  font-small rounded-full text-sm px-3 py-1 text-center" onClick={handleDownvote}>Downvote</button>
            </div>) :
                session && (
                    <div className="flex items-center justify-around mt-2 gap-5">
                        <button disabled={!session} type="button" className="change_btn border-none" onClick={handleVoteChange}>
                            Change My Vote!
                        </button>
                    </div>
                )
            }
            {/* check to see if current user is creator of the post and if they are on profile page, show edit and delete */}
            {session?.user.id === post.creator._id && pathName === '/profile' && (
                <div className="mt-5 flex-center gap-4 border-t border-gray-200 pt-3">
                    <p className="font-inter font-semibold text-sm custom_gradient cursor-pointer" onClick={handleEdit}>Edit</p>
                    <p className="font-inter font-semibold text-sm custom_gradient_2 cursor-pointer" onClick={handleDelete}>Delete</p>
                </div>
            )}
        </div>
    )
}

export default PromptCard
