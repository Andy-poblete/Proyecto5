const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB).then(() => console.log('ok!') )
.catch((error)=> console.error("este es un error D:"+ error))