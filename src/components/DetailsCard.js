import React from "react";
import Cards from "./Cards";


export default class DetailsCard extends React.Component {
    


    render() {

        return (
            <div>
                <button onClick={this.props.screenSelect}>Voltar</button>
            </div>
        )
    }
}