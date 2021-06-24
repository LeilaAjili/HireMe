const mongoose = require('mongoose');
const express = require('express');

const config = require('config');





const app = express();

app.use(express.json());
////////////////////////////////////


////////////////////////////////////

const db = config.get('mongoURI');

mongoose.connect(db,
    { useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true  })
.then(() => console.log('MONGODB CONNECTED...'))
.catch(err => console.log(err));

//ROUTES
app.use('/api/annonce', require('./routes/api/annonce'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

app.use('/api/candidature', require('./routes/api/candidature'));
app.use('/api/candidat', require('./routes/api/candidat'));
//app.use('/api/candidature/cand', require('./routes/api/candidat'));


app.listen(5001, () => console.log('LIVE ON 5000...'));

////////////////////////////////////
//INIT gfs



// "mongoURI":"mongodb+srv://leila:password9@cluster0-ceqq3.mongodb.net/test?retryWrites=true&w=majority",