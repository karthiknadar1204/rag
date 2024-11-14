import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Header = () => {
  return (
    <div className='p-7 flex justify-end shadow-sm'>
        <UserButton/>
    </div>
  )
}

export default Header