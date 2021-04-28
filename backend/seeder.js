import mongoose from 'mongoose' 
import dotenv from 'dotenv' 
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js' 
import Order from './models/orderModel.js'
import connectDB from './config/db.js'
import Product from './models/productModel.js'

dotenv.config() ; 

connectDB() 

const importData = async () => {
    try {
       await Order.deleteMany()
       await Product.deleteMany() 
       await User.deleteMany() 

       const createdUsers = await User.insertMany(users) 
       const adminUser = createdUsers[0]._id 
       const sampleProducts = products.map(product => {
           return {
           ...product, user:adminUser
           }
       })

       await Product.insertMany(sampleProducts)
       console.log('Data Imported!')
    } catch (error) {
        console.error(`Error while importing data ${error.message}`)
    }
}

const destroyData = async () => {
    try {
       await Order.deleteMany()
       await Product.deleteMany() 
       await User.deleteMany() 
       console.log('Data Destroyed!')
    } catch (error) {
        console.error(`Error while Destroying data ${error.message}`)
    }
}

if(process.argv[2] === '-d'){
    destroyData() 
}else{
    importData()
}

