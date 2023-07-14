"use client";
import { useState, useEffect } from 'react';
// import { useSession } from 'next-auth/react';

import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
    // need to update feed to show votes and hughest votes count first
    return (
        <div className='mt-16 prompt_layout'>
            {data.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    )
}

const Feed = () => {
    // const { data: session } = useSession();

    // search states 
    // searchText will be used to display the search params to client
    const [searchText, setSearchText] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState([]);
    // all posts
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch('/api/prompt');
        const data = await response.json();
        setPosts(data);
    };

    // fetch post data when page loads
    useEffect(() => {
        fetchPosts();
    }, []);

    // filter the prompts with the search params
    const filterPrompts = (searchInput) => {
        const regex = new RegExp(searchInput, "i"); // the "i" flag is for case-insensitive search
        console.log(regex);
        // use direct return on filter func
        return posts.filter((ele) => (
            regex.test(ele.creator.username) ||
            regex.test(ele.tag) ||
            regex.test(ele.prompt)
        ));
    };

    // update search params
    const handleSearchChange = (e) => {
        // clear prev timeout to prevent unnecessary or overlapping function calls
        clearTimeout(searchTimeout);
        // set the new search input
        setSearchText(e.target.value);

        // debounce method
        setSearchTimeout(
            setTimeout(() => {
                const searchResult = filterPrompts(e.target.value);
                setSearchedResults(searchResult);
            }, 500)
        );
    }
    // By using the setTimeout function and the clearTimeout function together, the code implements a debounce mechanism.
    // When the user types in the search input field, the debounce mechanism delays the execution of the filtering process. 
    // If the user continues typing within 500 milliseconds (specified in the setTimeout delay), 
    // the previous timeout is cleared and a new timeout is set. 
    // This way, the filtering process is only triggered once the user pauses typing for 500 milliseconds, 
    // reducing unnecessary computation and providing a smoother user experience.

    // handle tag click
    const handleTagClick = (tagname) => {
        setSearchText(tagname);

        const searchResult = filterPrompts(tagname);
        setSearchedResults(searchResult);
    };

    return (
        <section className='feed'>
            <form className='relative w-full flex-center'>
                <input
                    type='text'
                    placeholder='Search for a tag or a username'
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className='search_input peer'
                />
            </form>
            {/* adds here maybe?????? */}
            {/* Search prompts or all prompts on feed */}
            <PromptCardList
                data={searchText ? searchedResults : posts}
                handleTagClick={handleTagClick}
            />
        </section>
    )
}

export default Feed
