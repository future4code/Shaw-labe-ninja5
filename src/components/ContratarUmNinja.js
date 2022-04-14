import React from "react";
import Cards from "./Cards";
import DetailsCard from "./DetailsCard";



export default class ContratarUmNinja extends React.Component {
    state = {
        SCRdetails: false, 
    }



    screenSelect = () =>{
        this.setState ({SCRdetails: !this.state.SCRdetails})
    }
    
    
    selectPage = () => {
        switch (this.state.SCRdetails){
            case true:
                return <DetailsCard screenSelect={this.screenSelect}/>
            case false:
                return <Cards screenSelect={this.screenSelect}/>
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