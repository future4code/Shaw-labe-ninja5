import React from "react";
import axios from "axios";
import DetailsCard from "./DetailsCard";
import { Headers, BASE_URL } from "../const/Consts";



export default class Cards extends React.Component {

    render() {
        let mapeamento
        if (this.props.cards.length > 0) {
            mapeamento = this.props.cards.map((card) => {
                return (
                    <div key={card.id}>
                        <h3>{card.title}</h3>
                        <p>Até {card.dueDate} por {card.price}</p>
                        <p
                            onClick={()=> this.props.screenSelect(card.id)}>
                            Ver detalhes
                        </p>
                        <button onClick={this.props.addACarrinho} >Add a Carrinho</button>
                    </div>
                );
                console.log(card)
            })
        } else {
            mapeamento = <p> Carregando... </p>
        }
        return (
            <div>
                {mapeamento}
            </div>
        )
    }
}