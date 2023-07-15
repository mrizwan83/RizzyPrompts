"use client";
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


import Profile from '@components/Profile';

const ProfilePage = () => {

    const [loaderVisible, setLoaderVisible] = useState(false);

    const { data: session } = useSession();
    const router = useRouter();
    const [posts, setPosts] = useState([]);
    // fetch data when page loads
    useEffect(() => {
        const fetchPosts = async () => {
            setLoaderVisible(true);
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();
            setPosts(data);
            setLoaderVisible(false);

        }
        if (session?.user.id) fetchPosts();
    }, []);

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`);
    }

    const handleDelete = async (post) => {
        const hasConfirmed = confirm("Are you sure you want to delete this prompt?");

        if (hasConfirmed) {
            try {
                await fetch(`/api/prompt/${post._id.toString()}`, {
                    method: 'DELETE'
                });
                // remove the deleted post from frontend
                const filteredPosts = posts.filter((p) => p._id !== post._id);
                setPosts(filteredPosts);
            } catch (error) {
                console.log(error);
            }
        }
    }


    return (
        <Profile
            name="My"
            desc="Welcome to your personalized profile page"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            loaderVisible={loaderVisible}
        />
    )
}

export default ProfilePage
