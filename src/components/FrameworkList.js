import React, { useState } from 'react';
const FrameworkList = () => {
    const [frameworks, setFrameworks] = useState([
        {
            id:1,
            name:"Symfony"
        },
        {
            id:2,
            name:"React"
        },
        {
            id:3,
            name:"Angular"
        }
    ]);

    // un autre morceau d'état pour gérer la valeur du champ text
    const [frameworkName, setFrameworkName] = useState("");

    const addFramework = (e) =>{
        e.preventDefault();
        setFrameworks([ ...frameworks, {
            id:Date.now(),
            name:frameworkName
        }])


    }
    return ( 
        <div>
            <form onSubmit={addFramework}>
                <input type="text" name="frameworkName"
                // comme toujours avec react
                // on a une value et un onChange
                value={frameworkName} 
                onChange={ e =>setFrameworkName(e.target.value)} />
                <button type="submit">add</button>
            </form>

            <div>
                {
                    (frameworks.length===0)?(
                        <h2>No framweworks</h2>
                    ):(
                        <ul>{
                            frameworks.map(framework=> <li key={frameworks.id}>{framework.name}</li>)   
                        }

                        </ul>
                        )
                            
                    
                }
            </div>
        </div>
     );
}
 
export default FrameworkList;