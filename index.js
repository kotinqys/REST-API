import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

const PORT = process.env.PORT || 3000
const DB_URL =`mongodb+srv://user:user@cluster0.gy1pg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use('/api',router)

async function appStart(){
    try {
        await mongoose.connect(DB_URL,{useUnifiedTopology:true,useNewUrlParser:true})
        app.listen(PORT, () => {
            console.log(`Сервер запущен на порту ${PORT}`);
        }) 
    }catch(e){
        console.log(e)
    }
}


appStart()