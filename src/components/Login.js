import React, { useEffect, useRef, useState } from 'react';

const Login = () => {
    // qui permettra d'enregistrer un login, donc un userRef
    const [login, setLogin] = useState('');
    // pour l'affichage du message quand l'utilisateur aura appuyé sur la touche enter
    const [messageLogin, setMessageLogin] = useState('');
    // constante qui retournera un objet qui a une propriété current
    const loginRef = useRef();
    // qui nous retourne quand le component est monté
    // ce à quoi correspont loginRef
    useEffect(() => {
        console.log(loginRef);
        // on a le contrôle sur un élément du DOM programmatiquement !
        loginRef.current.focus();
    }, []);
    const handleChange = (e) => {
        setLogin(e.target.value);
    }
    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            setMessageLogin(`Trying to login as ${login}`)
        }
    }
    return (
        <>
            <input type="text" ref={loginRef} value={login} onChange={handleChange} onKeyUp={handleKeyUp} placeholder="your login" />
            {/* puisqu'on a un morceau d'état chargé d'afficher notre message, on peut l'utiliser ici pour recracher notre message */}
            {messageLogin}
        </>
    );
}

export default Login;