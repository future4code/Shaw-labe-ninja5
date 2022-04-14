import React from "react";
import Cards from "./Cards";
import DetailsCard from "./DetailsCard";
import axios from "axios";
import { Headers, BASE_URL } from "../const/Consts";



export default class ContratarUmNinja extends React.Component {
    state = {
        SCRdetails: false, 
        cards: [],
        id: ""
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
    
    screenSelect = (id) =>{
        this.setState ({SCRdetails: !this.state.SCRdetails, id: id})
    }
    
    

    selectPage = () => {
        switch (this.state.SCRdetails){
            case true:
                return <DetailsCard screenSelect={this.screenSelect} id={this.state.id}  />
                case false:
                    return <Cards screenSelect={this.screenSelect} cards={this.state.cards} />
                    default:
                        return <Cards screenSelect={this.screenSelect}/>
                    }
                }
                
    render() {

        return (
            <div>
                <h1>ContratarUmNinja</h1>
                {this.selectPage()}
            </div>
        )
    }
}