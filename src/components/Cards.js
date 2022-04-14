import React from "react";
import axios from "axios";
import DetailsCard from "./DetailsCard";
import { Headers, BASE_URL } from "../const/Consts";



export default class Cards extends React.Component {
    state = {
        cards: [],
    }


    componentDidMount = () => {
        this.getAllJobs()
    }


    getAllJobs = () => {
        const url = "https://labeninjas.herokuapp.com/jobs"
        axios
            .get(BASE_URL + "/jobs", Headers)
            .then((res) => {
                this.setState({ cards: res.data.jobs });
            })
            .catch((err) => {
                alert(err.response.data.message)
            })

    }



    render() {


        let mapeamento
        if (this.state.cards.length > 0) {
            mapeamento = this.state.cards.map((card) => {
                return (
                    <div key={card.id}>
                        <h3>{card.title}</h3>
                        <p>Até {card.dueDate} por {card.price}</p>
                        <p onClick={this.props.screenSelect}>
                            Ver detalhes
                        </p>
                        <button onClick={() => this.props.addACarrinho(card.id)} >Add a Carrinho</button>
                    </div>
                )
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