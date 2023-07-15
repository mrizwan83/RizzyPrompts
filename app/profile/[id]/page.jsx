"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import Profile from '@components/Profile';

const ProfilePage = ({ params }) => {
    // get the name from the params
    const searchParams = useSearchParams();
    const userName = searchParams.get("name");
    const [loaderVisible, setLoaderVisible] = useState(false);

    const [posts, setPosts] = useState([]);
    // fetch data when page loads
    useEffect(() => {
        const fetchPosts = async () => {
            setLoaderVisible(true);
            const response = await fetch(`/api/users/${params?.id}/posts`);
            const data = await response.json();
            setPosts(data);
            setLoaderVisible(false);
        }
        if (params?.id) fetchPosts();
    }, [params.id]);

    return (
        <Profile
            name={userName}
            desc={`Welcome to ${userName}'s personalized profile page. Immerse yourself in ${userName}'s imaginative world and discover a collection of inspiring prompts that will ignite your creativity.`}
            data={posts}
            loaderVisible={loaderVisible}
        />
    )
}

export default ProfilePage;
