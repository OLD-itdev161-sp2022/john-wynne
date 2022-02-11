<<<<<<< HEAD
import express, { Router } from 'express';
import connectDatabase from './config/db';
import {check, validationResult} from 'express-validator';
=======
import express from 'express';
import connectDatabase from './config/db';

>>>>>>> main

//initialize express application//
const app = express();

//connect database
connectDatabase ();

<<<<<<< HEAD
//config middleware//
app.use(express.json({ extended: false}));

//API endpoints
/** 
 * @route Get /
 * @desc Test endpoint
 */


=======
//API endpoints//
>>>>>>> main
app.get('/', (req,res) =>
res.send('http get request sent to root api endpoint')
);

<<<<<<< HEAD
/** 
 * @route POST api/users
 * @desc Register user
 */
app.post(
    '/api/users',
    [
check ( 'name', 'please enter your name').not().isEmpty(),
check ( 'email', 'Please enter a valid email').isEmail(),
check ('password', 'Please enter a password with 6 or more characters').isLength({ min:6 })


    ],
    (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array ()});
    } else {
     return res.send(req.body);
    }
}
);

=======
>>>>>>> main
//connection listener
app.listen(3000, () => console.log('Express server running on port 3000'));
