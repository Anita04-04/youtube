import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-flow-col shadow-lg p-2 m-2'>
      <div className='flex col-span-1'>
        <img alt="menu" className='h-12'
        src='https://tse2.mm.bing.net/th/id/OIP.ezRfx7t9eV5QMl1WvMbA9AHaHa?pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3'/>
        <img alt="logo" className='h-12 ml-4'
         src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg" />
        </div>
        <div className='col-span-10 px-20'>
            <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type="text"/>
            <button className='border border-gray-400 p-2 rounded-r-full px-6'>🔍</button>
        </div>
        <div className='col-span-1'>
            <img className='h-10'
            src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg" alt="user" />
        </div>
    </div>
  )
}

export default Header;
