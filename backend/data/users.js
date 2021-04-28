import bcrypt from 'bcryptjs'
const users = [
    {
        name:'Admin User', 
        email:'admin@example.com', 
        password: bcrypt.hashSync('123456', 10), 
        isAdmin:true
    },
    {
        name:'John Doe', 
        email:'johnd@example.com', 
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name:'John Smith', 
        email:'johns@example.com', 
        password: bcrypt.hashSync('123456', 10)
    },
]

export default users 