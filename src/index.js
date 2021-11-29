import React from 'react'
import ReactDOM from 'react-dom'

import './main.css';
import styles from './app.css';

const App = () => {
    return (
        <div className={styles.randomClass} >
            index
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));