import { Box, Button, Checkbox, CheckboxGroup, IconButton, Input, Radio, RadioGroup, Stack, Text, Textarea} from '@chakra-ui/react'
import React, {useState} from 'react'
import { CgTrashEmpty } from 'react-icons/cg'
const TodoAdd = () => {
    const [task, setTask] = useState({})
    const handleChange = (e) => {
        const {id, value}  = e.target;
        console.log(id ,value)
    }
    const handleSubmit = () => {

    }
  return (
    <>
    <Box display='flex' m={5} justifyContent='space-between'>
        <Box >
            <Input type='text'placeholder='Title'id="title" onChange={handleChange}/>
            <Textarea type='text'mt={10} id="discription" placeholder='Description' onChange={handleChange}/>
            <Box>
                <RadioGroup  colorScheme='green' id="radioBtn" onChange={()=>handleChange} >
                    <Stack mt={10} spacing={[1,4]} direction='column'>
                        <Radio  value='todo' >
                            Todo
                        </Radio>
                        <Radio value='progress' id="radioBtn">
                            In Progress
                        </Radio>
                        <Radio  value='done' id="radioBtn" >
                            Done
                        </Radio>
                    </Stack>
                </RadioGroup>
                <CheckboxGroup  colorScheme='green' id="checkbox" defaultValue={'office'} onChange={handleChange}>
                    <Stack mt={10} spacing={[1, 5]} direction={['column', 'column']}>
                        <Text>
                            tag(multiple possible)
                        </Text>
                        <Checkbox value='office'>Office</Checkbox>
                        <Checkbox value='personal'>Personal</Checkbox>
                        <Checkbox value='others'>Others</Checkbox>
                    </Stack>
                </CheckboxGroup>
            </Box>
        </Box>
        
        <Stack spacing={5} ml={4}>
                <Input type="text" id="task" placeholder="enter Task" onChange={handleChange}/>

                <Box  p={[1 ,2]} w='full' display='flex' justifyContent='space-between'>
                    <Checkbox colorScheme='green'id="sub task" onChange={handleChange}>
                        sub Task
                    </Checkbox>
                    <IconButton variant="outline"   colorScheme='green' isRound={true}>
                        <CgTrashEmpty/>
                    </IconButton>
                </Box>
                <Box  p={[1 ,2]} w='full'  display='flex' justifyContent='space-between'>
                    <Checkbox colorScheme='green' id="sub task" onChange={handleChange}>
                        sub Task
                    </Checkbox>
                    <IconButton colorScheme='green' variant="outline" isRound={true}>
                        <CgTrashEmpty/>
                    </IconButton>
                </Box>
        </Stack>

        <Box ml={4}>
            <Button>
                Add
            </Button>
        </Box>
        <Box ml={10}>
            <form action="">
                <Input type ='date' id="date" size="md" onChange={handleChange}/>

                <Input type="submit" mt={10} value="CREATE A NEW TASK" onChange={handleSubmit}/>
            </form>
        </Box>
    </Box>
    </>
  )
}

export default TodoAdd