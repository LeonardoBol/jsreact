import react, { useState } from 'react'
import PropTypes from 'prop-types'

const Contador = ({propNum, propName}) => {
    const [cuenta, setCuenta] = useState(propNum);

    return (
        <div className= "contador">
        <h2>{cuenta}</h2>
        <h3>Hecho por: {propName}</h3>
        <button onClick={( () => setCuenta(cuenta + 1))} >¡Más!</button>
        <button onClick={( () => setCuenta(cuenta - 1))} >¡Menos!</button>
        <br/>
        <br/>
        <button onClick={( () => setCuenta(propNum))} > ¡Reset!</button>
       
        </ div>
    )
}

Contador.propTypes = {
    propNum: PropTypes.number.isRequired
}

Contador.propTypes = {
    propName: PropTypes.string.isRequired
}

export default Contador;