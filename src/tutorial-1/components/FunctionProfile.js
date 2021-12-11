import React from "react";

function FunctionProfile ({ name, registredAt }) {

    const date = registredAt.split('.');

    function monthToStr(month) {
        return month > 12 || month < 1
            ? null
            : 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[
                month - 1
            ];
    }

    return(
        <div className="profile">
            <p>Привет, {name}!</p>
            <p>Дата регистрации: {`${date[0]} ${monthToStr(Number(date[1]) - 1)} ${date[2]}`}</p>
            <span>* я функциональный компонент</span>
        </div>
    )
}

export default FunctionProfile;