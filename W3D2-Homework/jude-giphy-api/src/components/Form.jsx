import React from "react";
import { useState } from 'react';

function Form(props) {
    const [formData, setFormData] = useState({
        searchTerm: ""
    })
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    // handles an event and allows target event(submission) to populate and save info to state

    const handleSubmit = (e) => {
        e.preventDefault()
        props.gifSearch(formData.searchTerm)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <input placeholder="Enter Name" type="text" name="searchTerm" onChange={handleChange} value={formData.searchTerm} />
                <input id="sub" type="submit" value="Search" />
            </form>
        </>
    );
}

export default Form;