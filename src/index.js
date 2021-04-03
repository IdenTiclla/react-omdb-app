import React from 'react'
import ReactDOM from 'react-dom'

import List from './containers/List'

import 'bootswatch/dist/lux/bootstrap.min.css'


const App = () => {
    return (
        <main className="bg-dark">
            <div className="container">
                <List></List>
            </div>
        </main>
    )
}

ReactDOM.render(<App></App>, document.getElementById('root'))