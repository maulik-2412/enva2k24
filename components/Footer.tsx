import React from 'react'
import { Icons } from '@/assets/icons/icons'
import SocialIcons from './ui/SocialIcons'
const Footer = () => {
  return (
    <div className='fixed sm:left-7 sm:top-60 bottom-0 right-20 w-20'>
       <SocialIcons Icons={Icons} />
    </div>
  )
}

export default Footer