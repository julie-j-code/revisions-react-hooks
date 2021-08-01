import React, { useEffect, useRef, useState } from 'react';





const Pot = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [amount, setAmount] = useState('');
    // pour garder une trace de tous les utilisateurs
    const [users, setUsers] = useState([]);
    // quand notre component sera monté on veut pouvoir mettre le focus sur firstname
    // donc utiliser une référence à firstname qui est un objet qui a pour unique propriété current
    const firstnameRef = useRef();
    // référence au 
    useEffect(() => {
        console.log(firstnameRef);
        firstnameRef.current.focus();
    }, []);
    const handleFirstname = e => {
        setFirstname(e.target.value);
    }

    const handleLastname = e => {
        setLastname(e.target.value);
    }
    const handleAmount = e => {
        setAmount(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newUser = {
            id: Date.now(),
            // firstname : firstname,
            // lastname : lastname,
            firstname,
            lastname,
            amount: Number(amount)
        }
        setUsers([newUser, ...users]);
        // pour le reset
        setFirstname('');
        setLastname('');
        setAmount(0.0);
        firstnameRef.current.focus();
    }
    return (
        <>
            <h2>Votes</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={firstname} ref={firstnameRef} placeholder="votre prénom" onChange={handleFirstname} />
                <input type="text" value={lastname} placeholder="votre nom" onChange={handleLastname} />
                <input type="text" value={amount} placeholder="montant ajouté" onChange={handleAmount} />
                <button type="submit">Valider</button>
            </form>
        </>
    );
}

export default Pot;