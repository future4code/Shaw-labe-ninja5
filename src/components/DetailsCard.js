import axios from "axios";
import React from "react";
import { Headers, BASE_URL } from "../const/Consts";


export default class DetailsCard extends React.Component {
    state = {
        job: "",
    }

    componentDidMount() {
        this.getJobByID()
    }

    getJobByID = async () => {
       await axios
            .get(BASE_URL + `/jobs/${this.props.id}`, Headers)
            .then((res) => {
                this.setState({ job: res.data });
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }

    render() {
        console.log (this.state.job.paymentMethods)
        return (
            <div>
                <div>
                    <h2>{this.state.job.title}</h2>
                    <p>{this.state.job.description}</p>
                    {this.state.job.paymentMethods &&  this.state.job.paymentMethods.map((pay)=>{ return <p>{pay}</p> })}
                    <p>Até {this.state.job.dueDate} por {this.state.job.price}</p>
                </div>
                <button onClick={this.props.screenSelect}>Voltar</button>
            </div>
        )
    }
}