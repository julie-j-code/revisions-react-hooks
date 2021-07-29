import React, { useEffect, useState } from 'react';
import axios from 'axios';


const PostList = () => {

    const [posts, setPosts] = useState([]);
    // grâce au second évènement le useEffect ne sera utilisé qu'une fois
    // pour éviter les boucles infinies
    useEffect(() => {
        // requête ajax à l'aide d'axios
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(result => {
                setPosts(result.data);
            })
    }, []);
    return (
        <>
            <h2>Liste des posts</h2>
            {
                posts.length > 0 && posts.map(post => <div key={post.id}> {post.title}</div>)
            }

        </>
    );
}

export default PostList;