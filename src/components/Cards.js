import React from "react";
import axios from "axios";
import DetailsCard from "./DetailsCard";
import { Headers, BASE_URL } from "../const/Consts";



export default class Cards extends React.Component {

    render() {

        return (
            <div>
                 <div key={this.props.card.id}>
                        <h3>{this.props.card.title}</h3>
                        <p>Até {this.props.card.dueDate} por {this.props.card.price}</p>
                         <p onClick={()=> this.props.screenSelect(card.id)}>
                            Ver detalhes
                        </p>
                        {/* <button onClick={() => this.props.addACarrinho(this.props.card.id)} >Add a Carrinho</button> */}
                    </div>
            </div>
        )
    }
}