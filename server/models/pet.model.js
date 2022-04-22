const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A pet's name is required!"],
        unique: [true, "This name is already taken!"],
        minlength: [3, "The pet's name must be at least 3 characters long!"]
    },
    type: {
        type: String,
        required: [true, "A pet's type is required!"],
        minlength: [3, "The pet's type must be at least 3 characters long!"]
    },
    description: {
        type: String,
        required: [true, "A description of the pet is required!"],
        minlength: [3, "The pet's description must be at least 3 characters long!"]
    },
    skillOne: { type: String },
    skillTwo: { type: String },
    skillThree: { type: String }
}, { timestamps: true })

PetSchema.plugin(uniqueValidator, { message: 'This name is already in our list!' });

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;