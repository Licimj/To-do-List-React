/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from "react";
import './Main.css';
import Form from './Form/index';
//Tarefas
import Tarefas from "./Tarefas";

export default class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [],
        index: -1,
    }

    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'))

        if (!tarefas) return

        this.setState({ tarefas })
    }

    componentDidUpdate(prevProps, prevSate) {
        const { tarefas } = this.state

        if (tarefas === prevSate.tarefas) return

        localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }

    handleSubmit = (e) => {
        e.preventDefault() // não atuliazar a pagina 
        const { tarefas, index } = this.state
        let { novaTarefa } = this.state
        novaTarefa = novaTarefa.trim()

        if (tarefas.indexOf(novaTarefa) !== -1) return

        const novasTarefas = [...tarefas]

        if (index === -1) {
            this.setState({
                tarefas: [...novasTarefas, novaTarefa],
                novaTarefa: '',
            })
        } else {
            novasTarefas[index] = novaTarefa

            this.setState({
                tarefas: [...novasTarefas],
                index: -1
            })
        }

    }

    handleChange = (e) => {
        this.setState({
            novaTarefa: e.target.value,

        })

    }

    handleEdit = (e, index) => {
        const { tarefas } = this.state
        this.setState({
            index,
            novaTarefa: tarefas[index]
        })

    }

    handleDelete = (e, index) => {
        const { tarefas } = this.state
        const novasTarefas = [...tarefas]
        novasTarefas.splice(index, 1)

        this.setState({
            tarefas: [...novasTarefas]
        })


    }


    render() {

        const { novaTarefa, tarefas } = this.state;
        return (
            <div className="main">
                <h1> Lista de Tarefas  </h1>
                <Form handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    novaTarefa={novaTarefa} />

                <Tarefas 
                tarefas ={tarefas}
                handleEdit ={this.handleEdit}
                handleDelete ={this.handleDelete}
                />
            </div>

        )

    }
}