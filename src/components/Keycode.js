import React, { useEffect, useState } from 'react';


const KeyCode = () => {
    // on a besoin de stocker le keycode qu'on devra afficher
    const [keyCode, setKeyCode] = useState('');
    // pour garder une trace de la key pressée
    const [key, setKey] = useState('');
    const getKeycode = (e)=>{
        console.log("ma clée", e);
        setKeyCode(e.keyCode);
        setKey(e.key);
    }
    // on veut ajouter un eventlistener sur tout le document
    useEffect(() => {
        document.addEventListener('keyup', getKeycode);
    return()=> document.removeEventListener('keyup');
// utilisation d'un tableau vide en deuxième argument
// qui équivault à ne s'abonner à l'éventlistner uniquement lorsque le component vient d'être monté
    }, []);
    return (
        <>
          <input type="text" />
          {
            key.length === 0 ? (
              <div>press any keyboard key</div>
            ) :(
              <div>Key is "{key}"</div>
            )
          }
          <div className="key-code">{keyCode}</div>
        </>
      );
    }
    
    export default KeyCode;