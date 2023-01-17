import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SideNav() {
    const navigate = useNavigate()
    const handleView = (path) => {
        navigate(path)

    }
    return (
        <div className='bg-blue-500 w-60 ml-10 mt-5 mb-5  rounded-lg'>
            <div className='pt-56 pl-5 pr-5 pb-56 text-white text-left'>
                <div className='p-2 cursor-pointer' onClick={() => handleView('/UserPage')}>
                    <h6 >Profile</h6>
                    <hr ></hr>
                </div>
                <div className='p-2 cursor-pointer' onClick={() => handleView('/Post')}>
                    <h6 >Post</h6>
                    <hr ></hr>
                </div>
                <div className='p-2 cursor-pointer' onClick={() => handleView('/Gallery')} >
                    <h6 >Gallery</h6>
                    <hr ></hr>
                </div>
                <div className='p-2 cursor-pointer' onClick={() => handleView('/ToDo')}>
                    <h6 >ToDo</h6>
                    <hr ></hr>
                </div>
            </div>

        </div>
    )
}
