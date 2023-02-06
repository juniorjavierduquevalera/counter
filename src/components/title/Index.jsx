import React  from 'react'
import { SiCounterstrike } from "react-icons/si";

const Title = () => {
  return (
    <dev className='flex justify-center items-center gap-2 m-4'>
        <SiCounterstrike className='w-12 h-full text-success' />
        <h1 className='text-3xl text-success'>Counter</h1>
    </dev>
  )
}
export default Title
