import React from "react";

class ClassProfile extends React.Component {
    render() {
        return(
            <div className="profile">
                <p>Привет, {this.props.name} {this.props.surname}!</p>
                <p>Дата регистрации: {this.props.registredAt}</p>
                <span>* я классовый компонент</span>
            </div>
        );
    }
}

export default ClassProfile;