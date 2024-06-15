import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img 
          className='w-full h-[400px] object-cover' 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/2fb278df-d99a-4f5b-a2e3-d4256cf3e64a/NG-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
          alt="/" 
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]">
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
          </div>
        </div>
      </div>
      <SavedShows/>
    </>
  )
}

export default Account