const mongoose = require('mongoose');
const dbName = "pets";

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`Connected to the ${dbName} database!`)
    })
    .catch((err) => {
        console.log(`Error connecting to the ${dbName} database`);
        console.log(err)
    })