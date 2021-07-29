import React from 'react';
import LevelB from './LevelB';

const LevelA = () => {
    return ( 
        <div className="level-a">
            <h2 >Level A</h2>
            <p>Utilise le component : </p>
            <LevelB/>
        </div>
     );
}
 
export default LevelA;