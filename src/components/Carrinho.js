import React from "react";
import axios from "axios"
import { BASE_URL } from "../const/Consts"
import { Headers } from "../const/Consts";

export default class Carrinho extends React.Component {
    state = {
        allJobs: [],
        carrinho: []
    }

    componentDidMount() {
        this.getAllJobs()
    }

    getAllJobs = () => {
        axios
            .get(`${BASE_URL}/jobs`, Headers)
            .then((res) => this.setState({ allJobs: res.data.jobs}))
            .catch((err) => console.log(err.response))
    }
    adicionaAoCarrinho = (job) => {
        console.log(job);
        this.setState({carrinho: [job]})
    }

    render() {
        console.log("alljobs: ", this.state.allJobs)
        const jobs = this.state.allJobs.map((job) => {
            return <p key={job.id} onClick={() => this.adicionaAoCarrinho(job)}>{job.title}</p>
        })
        const items = this.state.carrinho.map((item) => {
            return <p key={item.id}>{item.title}</p>
        })
        console.log("carrinho", this.state.carrinho)
        return (<div>
            <h1>Lista</h1>
            {jobs}
            <h1>Carrinho</h1>
            {items}
        </div>)
    }
}