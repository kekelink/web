import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Box,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'
import SignUp from './SignUp'
import SignIn from './SignIn'
import ChakraUILight from '../assets/images/chakra-ui-light.png'
import ChakraUIDark from '../assets/images/chakra-ui-dark.png'

export default function Form () {
  const bgColor = useColorModeValue('gray.200', 'gray.700')
  const ChakraUI = useColorModeValue(ChakraUILight, ChakraUIDark)
  return (
    <Box bg={bgColor} p={3} w="100%" boxShadow="lg" borderRadius="lg">
      <Image src={ChakraUI} width="250px" mx="auto" mt="2" mb="6"/>
      <Tabs isFitted>
        <TabList>
          <Tab _focus={{boxShadow: null}}>注册</Tab>
          <Tab _focus={{boxShadow: null}}>登录</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SignUp/>
          </TabPanel>
          <TabPanel>
            <SignIn/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}