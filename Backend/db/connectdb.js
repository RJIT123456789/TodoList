const mongoose = require("mongoose");

const connectDb = () => {

    

    return mongoose.connect(process.env.LOCAL_URL)


    .then(() => {
        console.log("Connect successfully")
    })
    .catch((error) => {
        console.log(error)
    })
};

module.exports = connectDb;

