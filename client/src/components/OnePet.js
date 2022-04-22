import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const OnePet = (props) => {

    const [pet, setPet] = useState({});

    const {id} = useParams();

    const navigate = useNavigate();

    const deletePet = () => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then((res => {
                console.log(res);
                console.log(res.data);
                setPet(res.data);
            }))
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const actionLinkStyle = {
        color: '#135695'
    }

    return(
        <div id="container">
            <header>
                <h1>Pet Shelter</h1>
                <Link style={actionLinkStyle} to={"/"}>back to home</Link>
            </header>
            <div id="subheader">
            <h2>Details about: {pet.name}</h2>
            <button id="adoptButton" onClick={deletePet}>Adopt {pet.name}</button>
            </div>
            <div id="outerBox">
                <div id="columnOne">
                    <p class="bold">Pet Type:</p>
                    <p class="bold">Description:</p>
                    <p class="bold">Skills:</p>
                </div>
                <div>
                    <p>{pet.type}</p> 
                    <p>{pet.description}</p>
                    <ul>
                        <li>{pet.skillOne}</li>
                        <li>{pet.skillTwo}</li>
                        <li>{pet.skillThree}</li>
                    </ul>
                </div>
            
            
            
            </div>
        </div>
    )
}

export default OnePet;
