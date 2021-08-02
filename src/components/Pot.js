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
    // pour l'état de la case à cocher qui permet d'afficher le total
    const [showDetails, setShowDetails] = useState(false);
    const [total, setTotal] = useState(0);
    // on veut un useEffect qui aura  pour dépendance users
    useEffect(() => {
        // on utilise la méthode reduce qui est dans le  prototype de array
        const total = users.reduce(
            (acc,current)=> acc = acc+current.amount,0)
        setTotal(total);
    }, [users]);
    const userSingularPlurial = users.length > 1? ("user") : ("user");
    const toggleDetails = e => setShowDetails(!showDetails);
    return (
        <>
            <h2>Votes</h2>
            <div>Total : {total} € ( de {users.length} {userSingularPlurial})</div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={firstname} ref={firstnameRef} placeholder="votre prénom" onChange={handleFirstname} />
                <input type="text" value={lastname} placeholder="votre nom" onChange={handleLastname} />
                <input type="text" value={amount} placeholder="montant ajouté" onChange={handleAmount} />
                <button type="submit">Valider</button>
            </form>
            
            <label htmlFor="details">
                <input type="checkbox" name="details" onChange={toggleDetails} />
                Voir les détails
            </label>

            {users.length > 0 ? (
                users.map(
                    // user => <div key={user.id}>{user.firstname} added {user.amount}</div>
                    user => showDetails ? (<div key={user.id}>{user.firstname} added {user.amount}</div>)
                    :(<div key={user.id}>{user.firstname} a participé</div>)
                )
            ) : (<h3>
                Aucun participant n'a pour le moment ajouté de montant au pot de départ
            </h3>

            )}
        </>
    );
}

export default Pot;