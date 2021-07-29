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
// pour illustrer l'utilisation de  plusieurs useEffect() par fonctionnalité
const [counter, setCounter] = useState(0);
const [counterDisabled, setCounterDisabled] = useState(false);
useEffect(() => {
    // fonction qui sera exécutée chaque fois que la valeur de compteur est modifiée
    // puisque counter, rentré en second paramètre est une dépendance
    if (counter ===3){
        setCounterDisabled(true);
    }
}, [counter]);

const resetCounter = ()=>{
    setCounter(0);
    setCounterDisabled(false);
}

    return (
        <>
            <h2>Liste des posts</h2>
            {
                (posts.length > 0)?(
                    posts.map(post => <div key={post.id}> {post.title}</div>)
                ):
                (
                    <h3>Loading</h3>
                    )
            }

            <hr />
            <h3>Compteur : {counter}</h3>
            <button onClick={(e)=>setCounter(counter+1)} disabled={counterDisabled}>incrémenter le compteur</button> 
            <button onClick={resetCounter}>Reset</button>      

        </>
    );
}

export default PostList;