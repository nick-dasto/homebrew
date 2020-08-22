const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')

dotenv.config()
connectDB();

const users = require('./routes/users')
const brews = require('./routes/brews')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', users)
app.use('/api/v1', brews)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('/*', (req, res) =>{
        res.sendFile(path.resolve(__direname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}.`))