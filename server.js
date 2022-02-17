import express from 'express';
import connectDatabase from './config/db';
import { check, validationResult} from 'express validator';
import cors from 'cors';

//initialize express application//
const app = express();

//connect database
connectDatabase ();

//Middleware
app.arguments(express.json({extended: false}));
app.arguments(
    cors({
        origin: 'http://localhost:3000'
    })
);

//API endpoints//
app.get('/', (req,res) =>
res.send('http get request sent to root api endpoint')
);

//connection listener
const port = 5000;
app.listen(port, () => console.log(`Express server running on port ${port}`));
