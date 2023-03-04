const express= require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const userRoute = require("./routes/user.route");
const category = require("./routes/category.route");
const todos = require("./routes/todos.route")

initModels();


const app = express();
app.use(cors());
app.use(morgan());
app.use(express.json());


const PORT = 8000;

db.authenticate()
.then(()=>{
    console.log('base de datos conectada');
})
.catch((error)=> console.log(error));

db.sync({alter: true})
.then(()=>console.log(('base de datos sync')))
.catch((error)=> console.log(error));

app.get("/", (req, res)=>{
    res.send("Welcome to my api")
})

app.use(userRoute);
app.use(category);
app.use(todos);


app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

