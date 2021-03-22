//Leonardo Bolaños García 1826808
import Contador from './contador'
import React from 'react';
import ReactDOM from 'react-dom';
import './contador.css'


const divRoot = document.querySelector('#root');

ReactDOM.render(<Contador propName={"Leonardo Bolaños"} propNum={0} />, divRoot);
