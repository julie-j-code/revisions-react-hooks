import React, { useState } from 'react';
// simple fonction qui retourne du jsx
const Like = () => {
    // pour gérer l'état
    const [nbIfLikes, setNbOfLikes] = useState(0);
    return ( 
        <div>
            {nbIfLikes}
            <button onClick={()=>setNbOfLikes(nbIfLikes+1)}>Like</button>
        </div>
     );
}
 
export default Like;