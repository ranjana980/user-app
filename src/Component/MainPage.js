import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { data } from './UserData'
export default function MainPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleView = (item) => {
        dispatch({ type: 'userData', payload: item })
        navigate('/UserPage')

    }
    useEffect(() => {
        console.log(data, 'usersss')

    }, [])
    return (
        <div className='bg-gradient-to-b from-indigo-500'>
            <div className=" rounded w-full container flex justify-center    ">
                <div className="'h-auto rounded-[20px] bg-gray-100 w-2/5   shadow-2xl mt-5">
                    <div className=" text-xl mb-2 p-3 text-center">Select an account</div>
                    <div className='h-3/4 overflow-y-scroll overflow-x-hidden bg-white'>
                        {data.users.map((item) => (
                            <>
                                <div className='flex justify-start p-1 bg-white cursor-pointer' onClick={() => handleView(item)}>
                                    <img src={item.profilepicture} className="h-12 w-12 rounded-full" />
                                    <h6 className='p-2'>{item.username}</h6>
                                </div>
                                <hr></hr></>
                        ))}
                    </div>

                </div>

            </div>
        </div>

    )
}
