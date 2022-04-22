import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditPet = (props) => {

    const [pet, setPet] = useState({});
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const {id} = useParams();

    const actionLinkStyle = {
        color: '#135695'
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

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setPet(res.data);
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkillOne(res.data.skillOne);
                setSkillTwo(res.data.skillTwo);
                setSkillThree(res.data.skillThree);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${id}`, 
        {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        }
        )
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/")
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.error.errors)
        })
    }

    return(
        <div id="container">
            <header>
                <h1>Add a New Pet!</h1>
                <Link style={actionLinkStyle} to={"/"}>back to home</Link>
            </header>
            <h2>Edit {pet.name}</h2>
            
            <form onSubmit={submitHandler}>
            <div id="newOuterBox">
                <div id="newColumnOne">
                    <div>
                        <label className="label">Name:</label>
                        <br/>
                        <input className="input" value={name} type="text" onChange={(e) => setName(e.target.value)}></input>
                        { errors.name && <p className="error">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="label">Type:</label>
                        <br />
                        <input className="input" value={type} type="text" onChange={(e) => setType(e.target.value)}></input>
                        { errors.type && <p className="error">{errors.type.message}</p>}
                    </div>

                    <div>
                        <label className="label">Description:</label>
                        <br />
                        <input className="input" value={description} type="text" onChange={(e) => setDescription(e.target.value)}></input>
                        { errors.description && <p className="error">{errors.description.message}</p>}
                    </div>
                    <button className="blueButton">Edit Pet</button>
                </div>
                
                <div id="newColumnTwo">
                    <p className="skillsLabel">Skills (optional): </p>
                    <div>
                        <div>
                        <label className="label">Skill 1:</label>
                        <br />
                        <input className="input" value={skillOne} type="text" onChange={(e) => setSkillOne(e.target.value)}></input>
                        </div>
                        <div>
                        <label className="label"l>Skill 2:</label>
                        <br />
                        <input className="input" value={skillTwo} type="text" onChange={(e) => setSkillTwo(e.target.value)}></input>
                        </div>
                        <div>
                        <label className="label">Skill 3:</label>
                        <br />
                        <input className="input" value={skillThree} type="text" onChange={(e) => setSkillThree(e.target.value)}></input>
                        </div>
                    </div>
                </div>
                    
                    <br />

                </div>
            </form>
            
        </div>
    )
}

export default EditPet;

