const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDatabase = require("./config/database");
const app = express();

dotenv.config();

connectDatabase();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const user = require("./routes/userRoutes")

app.use("/api/v1", user);

app.listen(process.env.PORT, () => {
    console.log(`Server is Listening on port ${process.env.PORT}`);
});