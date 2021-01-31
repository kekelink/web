const LaGouButton = {
  baseStyle: {
    borderRadius: 'lg'
  },
  sizes: {
    sm: {
      px: '3', // padding-left/padding-right
      py: '1', // padding-right/padding-bottom
      fontSize: '12px'
    },
    md: {
      px: '4',
      py: '2',
      fontSize: '14px'
    }
  },
  variants: { // 风格化样式
    primary: {
      bgColor: 'blue.500',
      color: 'white'
    },
    danger: {
      bgColor: 'red.500',
      color: 'white'
    }
  },
  defaultProps: {
    size: 'sm',
    variant: 'primary'
  }
}

export default LaGouButton