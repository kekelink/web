import { useState } from 'react'
import axios from 'axios'
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Divider,
  Stack, 
  Button,
  Checkbox,
  HStack,
  useToast
  } from '@chakra-ui/react'
import { FaUserAlt, FaLock, FaWeibo, FaWeixin, FaQq } from "react-icons/fa";

export default function SignIn () {
  const toast = useToast()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSignIn = async () => {
    try {
      const {data} = await axios.post('https://conduit.productionready.io/users/login', {
        user: {
          email,
          password
        }
      })

      console.log(data)
      toast({
        title: "登录成功",
        description: "登录成功",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
    } catch (e) {
      toast({
        title: "登录失败",
        description: "登录失败",
        status: "error",
        duration: 3000,
        isClosable: true,
      })
      console.log(e)
    }
  }

  return (
    <form>
      <Stack spacing={8}>
        <Stack>
          <InputGroup>
            <InputLeftAddon children={<FaUserAlt/>}/>
            <Input placeholder="手机号或邮箱" value={email} onChange={e => setEmail(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={<FaLock/>} />
            <Input type="password" placeholder="密码" value={password} onChange={e => setPassword(e.target.value)} />
          </InputGroup>
        </Stack>
        <Stack direction="row" justify="space-between" color="gray.500">
          <Checkbox defaultIsChecked>记住我</Checkbox>
          <Text>登录遇到问题？</Text>
        </Stack>
        <Button color="white" bgColor="#3194d0" _hover={{bgColor: '#187cb7'}} borderRadius="30px" onClick={handleSignIn} >
          登录
        </Button>
        <HStack justifyContent="space-between">
          <Divider w={1/4} />
          <Text color="gray.500" fontSize="12px">社交帐号登录</Text>
          <Divider w={1/4} />
        </HStack>
        <HStack fontSize="2xl" justifyContent="center" spacing="5">
          <FaWeibo color="#e05244"/>
          <FaWeixin color="#00bb29"/>
          <FaQq color="#498ad5"/>
        </HStack>
      </Stack>
    </form>
  )
}