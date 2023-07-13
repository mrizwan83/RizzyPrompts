"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import Profile from '@components/Profile';

const ProfilePage = ({ params }) => {
    // get the name from the params
    const searchParams = useSearchParams();
    const userName = searchParams.get("name");

    const [posts, setPosts] = useState([]);
    // fetch data when page loads
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params?.id}/posts`);
            const data = await response.json();
            setPosts(data);
        }
        if (params?.id) fetchPosts();
    }, [params.id]);

    return (
        <Profile
            name={userName}
            desc={`Welcome to ${userName}'s personalized profile page. Immerse yourself in ${userName}'s imaginative world and discover a collection of inspiring prompts that will ignite your creativity.`}
            data={posts}
        />
    )
}

export default ProfilePage;
