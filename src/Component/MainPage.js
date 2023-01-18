import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { data } from './UserData'
export default function MainPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleView = (item) => {
        dispatch({ type: 'userData', payload: item })
        data.users.forEach((item1) => {
            if (item.id != item1.id) {
                dispatch({ type: 'userList', payload: item1 })
            }

        })
        navigate('/UserPage')
    }
    useEffect(() => {

    }, [])
    return (
        <div className=''>
            <div className='flex gap-0'>
                <div className=' h-[15rem] w-[37rem]  rounded-br-[200px] bg-indigo-500 border-b-[20px]  border-br-indigo-500'></div>
                <div className=' h-96 w-[34rem]  bg-indigo-500 '></div>
                <div className=' h-96 w-[55rem] rounded-bl-[150px] bg-indigo-500 border-b-[20px]  border-br-indigo-500'></div>
            </div>
            <div className="absolute top-0 rounded w-full container flex justify-center    ">
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
