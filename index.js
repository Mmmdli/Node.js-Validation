const express = require("express");
const app = express();
const {db} = require("./config/db");
const categoryRoutes = require('./routes/categoryRoutes');
app.use(express.json());
app.use('/api/categories',categoryRoutes);

app.listen(8080, () => {
    console.log("Server is runnig...");
});