import React from "react";
import {FaPlus} from 'react-icons/fa' // Botão vira icon + 
import  PropTypes from "prop-types";
import './form.css'

export default function Form({handleChange, handleSubmit, novaTarefa}) {
    return (
        <form onSubmit={handleSubmit} action="#" className="form">
            <input onChange={handleChange} type="text" value={novaTarefa}></input>
            <button type="submit">
                <FaPlus />
            </button>
        </form>
    )

}


Form.propTypes ={
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
}