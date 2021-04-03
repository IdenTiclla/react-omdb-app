import React, { Component, Fragment } from "react";

import Card from '../components/Card/Card'

const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=c2b38e1'

class List extends Component {

    constructor() {
        super()
        this.state = {
            data: [],
            searchTerm: '',
            error: ''
        }
    }

    async componentDidMount() {
        //const res = await fetch('../../assets/data.json')
        const res = await fetch(`${API}&S=batman`)
        const resJSON = await res.json()

        this.setState({
            data: resJSON.Search
        })
    }

    async handleSubmit(e) {
        e.preventDefault()
        if (!this.state.searchTerm) {
            return this.setState({
                error: 'Please write a valid text.'
            })
        }
        console.log('enviando')
        
        const res = await fetch(`${API}&s=${this.state.searchTerm}`)
        const data = await res.json()
        this.setState({
            data:data.Search
        })

    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-4 offset-md-4 p-4">
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                onChange={e => this.setState({searchTerm: e.target.value})}
                                autoFocus/>

    
                        </form>
                        <p className="text-white">{this.state.error ? this.state.error : ''}</p>
                    </div>
                </div>
                <div className="row">
                    {this.state.data.map(movie => (
                        <Card movie={movie}></Card>
                    ))}
                </div>
            </Fragment>
        )
    }
}

export default List