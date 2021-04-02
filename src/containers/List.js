import React, { Component  } from "react";

import Card from '../components/Card/Card'



class List extends Component {

    async componentDidMount() {
        const res = await fetch('../../assets/data.json')
        const resJSON = await res.json()
        console.log(resJSON)
    }
    render() {
        return (
            <h1>List</h1>
        )
    }
}

export default List