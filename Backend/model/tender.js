const mongoose = require("mongoose");
const TenderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },

        email: {
            type: String,
            require: true,
        },

        
    },
    { timestamps: true }
);

const TenderModel = mongoose.model("tender", TenderSchema);
module.exports = TenderModel;
