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


       


        return (
            <div>
                 <div key={this.props.card.id}>
                        <h3>{this.props.card.title}</h3>
                        <p>Até {this.props.card.dueDate} por {this.props.card.price}</p>
                        
                        {/* <button onClick={() => this.props.addACarrinho(this.props.card.id)} >Add a Carrinho</button> */}
                    </div>
                {/* {mapeamento} */}
            </div>
        )
    }
}