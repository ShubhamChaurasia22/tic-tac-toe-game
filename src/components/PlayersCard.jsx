import { useState } from "react";

export default function PlayesCard({ initialName, playerSign, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(editing => !editing);
        if (isEditing) {
            onChangeName(playerSign, playerName);
        }
    }

    function handleChangeName(e) {
        setPlayerName(e.target.value);
    }

    return (
        <>
            <li id="playerBox" className={isActive ? 'active' : undefined}>
                {!isEditing ? 
                (<>
                    <span className="playerDetails">
                        <span>{playerName}</span>
                        <span>{playerSign}</span>
                    </span>
                </>) : <input className="playerInput" type="text" onChange={handleChangeName} placeholder={playerName} required/>}
                <button className="btn" onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </li>
        </>
    );
} 