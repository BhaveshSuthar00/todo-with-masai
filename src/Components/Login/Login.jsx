import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  useToast,
  Container,
  Button,
  Heading
} from '@chakra-ui/react'
const Login = () => {
  const [signin, setSignin] = useState({});
  const navigate = useNavigate()
  const toast = useToast()
  const handleSubmit = (e) => {
    // e.preventDefault();
    // axios.post("https://sunday-server.herokuapp.com/user/login", signin).then((res)=> {
    //   toast({
    //     title: 'Login successfully.',
    //     status: 'success',
    //     duration: 3000,
    //     isClosable: true,
    //   })
    //   localStorage.setItem('signin', JSON.stringify(res.data.user));
    //   navigate('/')
    // }).catch((err)=> {
    //   toast({
    //     title: 'Login failed.',
    //     discription : "Invalid email or password.",
    //     status: 'error',
    //     duration: 3000,
    //     isClosable: true,
    //   })
      
    // });
  }
  const handleChange = (e) => {
    const { id, value} = e.target;
    setSignin({...signin, [id] : value})
  }
  return (
    <>
      <Container >
        <Heading align="center" mb={4}>
          Login in
        </Heading>
        <form action="" onSubmit={(e)=> handleSubmit(e)}>
        <FormControl isRequired mb={5}>
          <FormLabel htmlFor='firstName'>First Name</FormLabel>
          <Input id='firstName' type='text' onChange={handleChange} />
        </FormControl>
        <FormControl isRequired mb={5}>
          <FormLabel htmlFor='lastName'>Last Name</FormLabel>
          <Input id='lastName' type='text'  onChange={handleChange}/>
        </FormControl>
        <FormControl isRequired mb={5}>
          <FormLabel htmlFor='email'>Email address</FormLabel>
          <Input id='email' type='email' onChange={handleChange}/>
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl isRequired mb={5}>
          <FormLabel htmlFor='password'>Pasword</FormLabel>
          <Input id='password' type='password' placeholder='Enter Password' onChange={handleChange}/>
        </FormControl>
        <Button
            mt={4}
            w="full"
            colorScheme='gray'
            type='submit'
          >
            Login
          </Button>
          </form>
      </Container>
    </>
  )
}

export default Login