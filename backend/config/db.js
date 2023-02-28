const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGO_URI, () => {
            console.log('MongoDB connected')
        })
    }catch (error) {
        console.log(error);
        process.exit()
    }
}

//*Toujours faire un module export pour pouvoir l'utiliser de partout dans le projet
module.exports = connectDB