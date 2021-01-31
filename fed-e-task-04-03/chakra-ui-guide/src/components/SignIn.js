import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  FormHelperText,
  Stack, 
  Button,
  FormControl} from '@chakra-ui/react'
import { FaUserAlt, FaLock, FaCheck } from "react-icons/fa";

export default function SignIn () {
  return (
    <form>
      <Stack spacing={2}>
        <FormControl isInvalid>
          <InputGroup>
            <InputLeftAddon children={<FaUserAlt/>}/>
            <Input placeholder="请输入用户名" />
          </InputGroup>
          <FormHelperText>用户名是必填项</FormHelperText>
        </FormControl>
        <InputGroup>
          <InputLeftAddon children={<FaLock/>} />
          <Input type="password" placeholder="请输入密码"/>
          <InputRightAddon children={<FaCheck/>} />
        </InputGroup>
        <Button colorScheme="teal" _hover={{bgColor: 'tomato'}}>
          登录
        </Button>
      </Stack>
    </form>
  )
}