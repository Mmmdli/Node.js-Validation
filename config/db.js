const { default: mongoose } = require("mongoose");
const env = require('dotenv').config()

const db = {
    connect: async () => {

        try {
            await mongoose.connect(process.env.connection)
            console.log('Mongoose connected!!');
        } catch (error) {
            console.log('Mongoose Error', error);
        }
    }
}
module.export = { db };