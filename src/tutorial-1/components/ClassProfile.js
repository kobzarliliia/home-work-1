import React from "react";

class ClassProfile extends React.Component {

    constructor(props) {
        super(props);
        this.date = this.props.registredAt.split('.');
    }

    monthToStr(month) {
        return month > 12 || month < 1
            ? null
            : 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[
                month - 1
            ];
    }

    render() {
        return(
            <div className="profile">
                <p>Привет, {this.props.name}!</p>
                <p>Дата регистрации: {`${this.date[0]} ${this.monthToStr(Number(this.date[1]) - 1)} ${this.date[2]}`}</p>
                <span>* я классовый компонент</span>
            </div>
        );
    }
}

export default ClassProfile;