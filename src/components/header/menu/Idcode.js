
import React from 'react'
import {getInputProps ,useNumberInput ,HStack ,Button ,Input} from '@chakra-ui/react'
const Idcode = () => {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 0.01,
      defaultValue: 1.53,
      min: 1,
      max: 6,
      precision: 2,
    })
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()
  return (
    <div> <HStack maxW='320px'>
    <Button {...inc}>+</Button>
    <Input {...input} />
    <Button {...dec}>-</Button>
  </HStack></div>
  )
}

export default Idcode