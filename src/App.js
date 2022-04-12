import React from 'react'
import {BASE_URL} from "./const/Consts"
import Header from "./components/Header.js"
import SerUmNinja from "./components/SerUmNinja.js"
import ContratarUmNinja from './components/ContratarUmNinja.js'
import Home from './components/Home.js'
import Carrinho from './components/Carrinho.js'

export default class App extends React.Component {
	state = {
		currentScreen: "home"
	}
	
	goToHome = () => {
		this.setState({currentScreen: "home"})
	}
	goToSerUmNinja = () => {
		this.setState({currentScreen: "serUmNinja"})
	}
	goToContratarUmNinja = () => {
		this.setState({currentScreen: "contratarUmNinja"})
	}
	goToCart = () => {
		this.setState({currentScreen: "cart"})
	}	

	selectPage = () => {
		switch (this.state.currentScreen){
			case "serUmNinja":
				return <SerUmNinja/>
			case "contratarUmNinja":
				return <ContratarUmNinja/>
			case "home":
				return <Home goToSerUmNinja={this.goToSerUmNinja} goToContratarUmNinja={this.goToContratarUmNinja}/>
			case "cart":
				return <Carrinho/>
			default:
				return <Home/>
		}
	}

	render() {
		return (
			<div>
				<Header goToCart={this.goToCart} goToHome={this.goToHome}  />
				{this.selectPage()}
			</div>
		)
	}
}
 
