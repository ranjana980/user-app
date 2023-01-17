import React from 'react'
import SideNav from './SideNav'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Post() {
    const navigate=useNavigate()
    const { Formlist } = useSelector((state) => state.FormDataReducer);
    const [display, setDisplay] = useState(false)
    const handleLogout=()=>{
        navigate('/')
        
    }
    const handleProfile=()=>{
        navigate('/UserPage')
      
      }
    return (
        <div>
            <div className='flex'>
                <SideNav />
                <div className='w-11/12 p-5 '>
                    <div className='flex justify-between w-11/12 p-3 cursor-pointer' onClick={() => setDisplay(!display)}>
                        <span className='text-lg'>Post</span>
                        <div className='flex ' >
                            <img src={Formlist.profilepicture} className="h-12 w-12 rounded-full" />
                            <h5 className='p-2'>{Formlist.username}</h5>
                            {display ? <div className='absolute flex justify-center top-20 right-0 z-10 mt-2 w-[20vw]  rounded-md bg-white shadow-2xl ml-3'>
                                <div className=''>
                                    <div >
                                        <div className=''>
                                            <img src={Formlist.profilepicture} className="h-32 w-32 rounded-full" />
                                            <p>{Formlist.name}</p>
                                            <p className='text-sm text-gray-400'>{Formlist.email}</p>
                                        </div>
                                    </div>
                                    <div className='flex w-56 border-b-2 border-t-2 border-gray-300 ' onClick={handleProfile}>
                                        <img src={Formlist.profilepicture} className="h-10 w-10 rounded-full" />
                                        <p>{Formlist.name}</p>
                                    </div>
                                    <div className='flex justify-center mb-2 mt-2'>
                                        <button className='bg-orange-400 text-white text-md rounded-md p-1' onClick={handleLogout}>SignOut</button>
                                    </div>
                                </div>
                            </div> : ""}
                        </div>
                    </div>
                    <hr></hr>
                    <div className='flex justify-center p-44'>
                        <h1 className='text-5xl text-gray-300'>Comming Soon</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
