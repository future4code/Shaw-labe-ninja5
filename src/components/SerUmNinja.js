import React from "react";
import axios from 'axios'
import { BASE_URL, Headers } from '../const/Consts'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class SerUmNinja extends React.Component {
    state = {
        inputTitle: '',
        inputDescription: '',
        inputPrice: '',
        inputDate: "2022-05-01",
        checkboxPayment: [],
    }

    updateInputTitle = (event) => {
        this.setState({ inputTitle: event.target.value })
    }
    updateInputDescription = (event) => {
        this.setState({ inputDescription: event.target.value })
    }
    updateInputPrice = (event) => {
        this.setState({ inputPrice: Number(event.target.value) })
    }
    updateInputDate = (event) => {
        this.setState({ inputDate: event.target.value })
    }
    updateCheckbox = (value) => {
        const novoArray = [...this.state.checkboxPayment]
        if (this.state.checkboxPayment.includes(value)) {
            const index = novoArray.findIndex(e => e === value)
            novoArray.splice(index, 1)
        } else {
            novoArray.push(value)
        }
        this.setState({ checkboxPayment: novoArray })
    }

    createJob = () => {
        const body = {
            "title": this.state.inputTitle,
            "description": this.state.inputDescription,
            "price": this.state.inputPrice,
            "paymentMethods": this.state.checkboxPayment,
            "dueDate": this.state.inputDate
        }
        axios.post(BASE_URL + '/jobs', body, Headers)
            .then((res) => {
                alert(res.data.message)
                this.setState({
                    inputTitle: '',
                    inputDescription: '',
                    inputPrice: '',
                    inputDate: "2022-05-01"
                })
            })
            .catch((err) => {
                alert('Erro ao criar Job')
                console.log(err.response.data.message, err.response.data.errors);
            })
    }

    render() {
        return (
            <Grid container direction='column'>
                <h1>Cadastre seu serviço</h1>
                <TextField value={this.state.inputTitle} onChange={this.updateInputTitle} placeholder="Título" />
                <TextField value={this.state.inputDescription} onChange={this.updateInputDescription} placeholder="Descrição" />
                <TextField value={this.state.inputPrice} onChange={this.updateInputPrice} placeholder="Preço" type='number' />

                <FormControl component="fieldset">
                    <FormLabel component="legend">Formas de Pagamento</FormLabel>
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                            value="credit"
                            control={<Checkbox color="primary" />}
                            label="Cartão de Crédito"
                            labelPlacement="bottom"
                            onChange={() => this.updateCheckbox("credit")}
                        />
                        <FormControlLabel
                            value="debit"
                            control={<Checkbox color="primary" />}
                            label="Cartão de Débito"
                            labelPlacement="bottom"
                            onChange={() => this.updateCheckbox("debit")}
                        />
                        <FormControlLabel
                            value="paypal"
                            control={<Checkbox color="primary" />}
                            label="PayPal"
                            labelPlacement="bottom"
                            onChange={() => this.updateCheckbox("paypal")}
                        />
                        <FormControlLabel
                            value="boleto"
                            control={<Checkbox color="primary" />}
                            label="Boleto"
                            labelPlacement="bottom"
                            onChange={() => this.updateCheckbox("boleto")}
                        />
                        <FormControlLabel
                            value="pix"
                            control={<Checkbox color="primary" />}
                            label="Pix"
                            labelPlacement="bottom"
                            onChange={() => this.updateCheckbox("pix")}
                        />
                    </FormGroup>
                </FormControl>
                <TextField
                    id="date"
                    label="Prazo de Entrega"
                    type="date"
                    value={this.state.inputDate}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={this.updateInputDate}
                />

                <Button variant="contained" color="primary" onClick={() => this.createJob()}>
                    Criar Job
                </Button>
            </Grid>
        )
    }
}