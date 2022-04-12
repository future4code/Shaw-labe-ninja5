import React from "react";


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h3>Quem nós Somos</h3>
                </div>
                <div>
                    <button onClick={this.props.goToSerUmNinja}>Quero Ser um Ninja</button>
                    <button onClick={this.props.goToContratarUmNinja}>Quero Contratar um Ninja</button>
                </div>
            </div>
        )
    }
}