import { Badge, Box, Image, Stack, Text, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import ChakraUI from '../assets/images/chakra-ui.png'
import { AiFillStar } from 'react-icons/ai'

export default function Card () {
  const bgColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.700', 'gray.100')
  return (
    <Box w={2/3} borderRadius="lg" boxShadow="lg" bg={bgColor} overflow="hidden">
      <Image src={ChakraUI} />
      <Box p={3}>
        <Stack direction="row" alignItems="center">
          <Badge variant="solid" colorScheme="teal" borderRadius="full" px="2">New</Badge>
          <Badge variant="solid" colorScheme="teal" borderRadius="full" px="2">Chakra-UI</Badge>
          <Badge variant="solid" colorScheme="teal" borderRadius="full" px="2">React</Badge>
          <Text color={textColor}>拉勾出品 必属精品</Text>
        </Stack>
        <Text as="h3" fontWeight="semibold" pt="3" pb="2" fontSize="xl" color="gray.500">Chakra UI 框架专题课程</Text>
        <Text fontWeight="light" fontSize="sm" lineHeight="tail">
          Chakra UI 是一个简单的，模块化的易于理解的UI组件库.提供了丰富的构建React应用所需的U|组件.
          文档: https://next.chakra-ui.com/docs/getting-started
          1. Chakra UI内置Emotion,是CSS-IN-JS解决方案的集大成者
          2. 基于Styled-Systems https://styled-system.com/
          3. 支持开箱即用的主题功能
          4. 默认支持白天和黑夜两种模式
          5. 拥有大量功能丰富且非常有用的组件
          6. 使响应式设计变得轻而易举
          7. 文档清晰而全面.查找API更加容易
          8. 适用于构建用于展示的给用户的界面
          9. 框架正在变得越来越完善
        </Text>
        <Flex alignItems="center" mt="2">
          <Flex color="teal.500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </Flex>
          <AiFillStar />
          <Text ml="2">100 评论</Text>
        </Flex>
      </Box>
      <Button w="100%" colorScheme="teal">登录</Button>
    </Box>
  )
}