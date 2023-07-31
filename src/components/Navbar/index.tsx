import DiscoverIcon from '@/lib/icon/DiscoverIcon'
import HomeIcon from '@/lib/icon/HomeIcon'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-zinc-900 h-screen sticky flex flex-col space-y-6 px-3'>
      <div className='h-16'>Logo</div>
      <span className='p-2 hover:bg-primary/10 rounded-xl transition duration-300 ease-in-out'>
        <HomeIcon/>
      </span>
      <span className='p-2 hover:bg-primary/10 rounded-xl transition duration-300 ease-in-out'>
        <DiscoverIcon/>
      </span>


    </div>
  )
}

export default Navbar