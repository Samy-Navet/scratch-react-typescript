import React from 'react'
import ReactDOM from 'react-dom'

import './main.scss';
import styles from './app.scss';
import image from '../public/assets/logo-webpack.png';

const App = () => {
    const imgStyle = { width: '100px' };
    return (
        <>
        <div className={styles.randomClass} >
            index
        </div>
        <img src={'assets/webpack-icon.svg'} alt="" style={imgStyle} />
        <img src ={image} alt="" style={imgStyle} />
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));