import express  from 'express' 
import  dotenv  from 'dotenv'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import prodcutRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
dotenv.config()

connectDB()

const app = express() 

app.use(express.json())


app.get('/' , (req, res)=>{
    res.send('API is Running')
})

app.use('/api/products', prodcutRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server runninng in ${process.env.NODE_ENV} on port ${PORT}`)
})
