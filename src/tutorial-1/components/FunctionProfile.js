import React from "react";

function FunctionProfile ({ name, surname, registredAt }) {
    return(
        <div className="profile">
            <p>Привет, {name} {surname}!</p>
            <p>Дата регистрации: {registredAt}</p>
            <span>* я функциональный компонент</span>
        </div>
    )
}

export default FunctionProfile;