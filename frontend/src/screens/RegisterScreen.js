import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Row, Button, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux' 
import Message from '../componenets/Message' 
import Loader from '../componenets/Loader' 
import {register} from '../actions/userAction'
import FormContainer from '../componenets/FormContainer'

const RegisterScreen = ({location, history}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const [confirmPassword, setConfirmPassword] = useState('') 
    const [message, setMessage] = useState(null) 

    const redirect = location.search ? location.search.split('=')[1] : '/'
    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userRegister)
    const {loading, error, userInfo} = userRegister
    useEffect(()=>{
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])
    const submitHandler = (e) =>{
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage('Password doesnot match')
        }else{
            dispatch(register(name, email, password))
        }
        
    }
    return (
        <FormContainer>
            <h1>Sign Up</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='Name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='Name' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter confirm password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Register</Button>
              </Form>
              <Row className='py-3'>
                  <Col>Have account?<Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Sign In</Link></Col>
              </Row>
        </FormContainer>
    )
}

export default RegisterScreen
