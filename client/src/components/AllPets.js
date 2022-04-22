import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllPets = (props) => {

    const [petList, setPetList] = useState([]);

    const deletePet = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/pets/${idFromBelow}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setPetList(petList.filter(pet => pet._id !== idFromBelow));
            })
            .catch((err) => {
                console.log(err);
            })
    }


    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setPetList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const linkStyle = {
        color: 'black',
        textDecoration: "none"
    }

    const actionLinkStyle = {
        color: '#135695'
    }

    return(
        <div id="container">
            <header>
                <h1>Pet Shelter</h1>
                <Link style={actionLinkStyle} to={"/new"}>add a pet to the shelter</Link>
            </header>
            <h2>These pets are looking for a good home</h2>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            {
                petList.map((pet, index) => (
                    
                    <tr id="PetInList" key={pet._id}>
                        
                    <td>
                    <Link style={linkStyle} to={`/pet/${pet._id}`}>{pet.name}</Link>
                    </td>
                    <td>{pet.type}</td>
                    <td id="actions">
                    <Link style={actionLinkStyle} to={`/pet/${pet._id}`}>details</Link>
                    <p> &nbsp; | &nbsp; </p>
                    <Link style={actionLinkStyle} to={`/pet/edit/${pet._id}`}>edit</Link>
                    
                    </td>
                
            </tr>
                    
                ))
            }
            </table>
            
        </div>
    )
}

export default AllPets;


