const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser");
const corsOption = require("./config/corsOption");
const UserRoutes = require("./Routes/routes")
const EmployeeRoutes = require("./Routes/Employee")
const app = express();
const cron = require("./Controllers/cron")
const dbconnection = require("./dbconnection")
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
dbconnection();

app.use("/users", UserRoutes)
app.use("/employee", EmployeeRoutes)
app.use("/cron", cron)


app.listen(8081, () => {
    console.log("listening...");
})

