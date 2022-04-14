
import React from 'react'
import Cards from './Cards'
import DetailsCard from './DetailsCard'
import axios from 'axios'
import { Headers, BASE_URL } from "../const/Consts";



export default class ContratarUmNinja extends React.Component {
  state = {
    SCRdetails: false,
    cards: [],
    precoMinimo: '',
    precoMaximo: '',
    filtroBuscaPorNome: ''
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


  updateQuery = (e) => {
    this.setState({ filtroBuscaPorNome: e.target.value })
  }

  updateMinimo = (e) => {
    this.setState({ precoMinimo: e.target.value })
  }
  updateMaximo = (e) => {
    this.setState({ precoMaximo: e.target.value })
  }

  render() {

    return (
      <div>
        <h1>ContratarUmNinja</h1>
        <input
          placeholder="Pesquisar"
          value={this.state.filtroBuscaPorNome}
          onChange={this.updateQuery}
        />
        <input
          type="number"
          placeholder="Preço mínimo"
          value={this.state.precoMinimo}
          onChange={this.updateMinimo}
        />
        <input
          type="number"
          placeholder="Preço Máximmo"
          value={this.state.precoMaximo}
          onChange={this.updateMaximo}
        />
        <div>

          {this.state.cards
            .filter((card) => {
              return card.title
                .toLowerCase()
                .includes(this.state.filtroBuscaPorNome.toLocaleLowerCase())
            })
            .filter((card) => {
              return (
                this.state.precoMinimo === "" ||
                card.price >= this.state.precoMinimo
              )
            })
            .filter((card) => {
              return (
                this.state.precoMaximo === "" ||
                card.price <= this.state.precoMaximo
              )
            })
            .map((card) => {
              return <Cards key={card.id} card={card} goToDetailsJob={this.props.goToDetailsJob} />
            })
          }
        </div>

      </div>
    )
  }
}

