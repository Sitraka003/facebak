import React, {useContext, useEffect} from 'react'
import {Box, Flex} from "@chakra-ui/react";
import PostCard from "../PostCard/PostCard";
import {PostContext} from "../../Home";
import {getAllPosts} from "../../../../services/fetcher";

const NewsFeed = () => {
    const {posts, setPosts} = useContext(PostContext);
    useEffect(() => {
        getAllPosts().then((data) => {
            if(posts.length === 0 && data) {
                setPosts(data.data);
                console.log(posts);
                console.log("data fetched");
            }
        })
    }, []);
    return (
        <Flex
            border={"2px"}
            height={"100%"}
            w={"75%"}
            flexDir={"column"}
            overflow={"auto"}
            alignItems={"center"}
        >
            {
                posts ?
                    posts.map((e, i) => (
                        <PostCard
                            author={e.userId}
                            content={e.content}
                            date={e.updatedAt}
                            key={i}
                            isLoaded
                        />
                    )) : <PostCard/>
            }
        </Flex>
    )
}
export default NewsFeed
