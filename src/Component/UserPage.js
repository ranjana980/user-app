
import { useState } from 'react';
import { useSelector } from 'react-redux';
import SideNav from './SideNav';
import { useNavigate } from 'react-router-dom';
export default function UserPage() {
  const { Formlist } = useSelector((state) => state.FormDataReducer);
  const [display, setDisplay] = useState(false)
  const navigate=useNavigate()
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
          <div className='flex justify-between w-11/12 p-3 cursor-pointer ' onClick={() => setDisplay(!display)}>
            <span className='text-lg'>Profile</span>
            <div >
              <div className='flex ' ><img src={Formlist.profilepicture} className="h-12 w-12 rounded-full" />
                <h5 className='p-2'>{Formlist.username}</h5></div>
              {display ? <div className='absolute flex justify-center right-0 z-10 mt-2 w-[20vw]  rounded-md bg-white shadow-2xl ml-3'>
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
          <div className='flex '>
            <div className='flex-col p-5 mt-3 border-r border-gray-300'>
              <div >
                <div className='flex justify-center'>
                  <img src={Formlist.profilepicture} className="h-48 w-48 rounded-full" />
                </div>
                <div className=''>
                  <div className='flex justify-center  '>
                    <p>{Formlist.name}</p>
                  </div>
                  <div className='flex justify-center  '>
                    <p className='text-gray-500 '>UserName: </p>
                    <p className='ml-2'>{Formlist.username}</p>
                  </div>
                  <div className='flex justify-center p-2 text-center'>
                    <p className='text-gray-500 '>email: </p>
                    <p className='ml-2'>{Formlist.email}</p>
                  </div>
                  <div className='flex justify-center p-2 text-center'>
                    <p className='text-gray-500 '>phoneNumber: </p>
                    <p className='ml-2'>{Formlist.phone}</p>
                  </div>
                  <div className='flex justify-center p-2 text-center'>
                    <p className='text-gray-500 '>website: </p>
                    <p className='ml-2'>{Formlist.website}</p>
                  </div>
                  <hr></hr>
                  <div className='flex justify-center p-2 text-center'>
                    <p className='text-gray-500 '>Company Name: </p>
                    <p className='ml-2'>{Formlist.company.name}</p>
                  </div>
                  <div className='flex justify-center p-2 text-center'>
                    <p className='text-gray-500 '>catchPhrase: </p>
                    <p className='ml-2'>{Formlist.company.catchPhrase}</p>
                  </div>
                  <div className='flex justify-center p-2 text-center'>
                    <p className='text-gray-500 '>bs: </p>
                    <p className='ml-2'>{Formlist.company.bs}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex-col p-5'>
              <div>
                <p className='text-gray-500 '>Address: </p>
                <div className='ml-2'>
                  <div className='flex justify-start   text-center'>
                    <p className='text-gray-500 '>Street: </p>
                    <p className='ml-2'>{Formlist.address.street}</p>
                  </div>
                  <div className='flex justify-start  text-center'>
                    <p className='text-gray-500 '>Suite: </p>
                    <p className='ml-2'>{Formlist.address.suite}</p>
                  </div>
                  <div className='flex justify-start  text-center'>
                    <p className='text-gray-500 '>City: </p>
                    <p className='ml-2'>{Formlist.address.city}</p>
                  </div>
                  <div className='flex justify-start  text-center'>
                    <p className='text-gray-500 '>Zipcode: </p>
                    <p className='ml-2'>{Formlist.address.zipcode}</p>
                  </div>
                </div>
                <img src="https://user-images.githubusercontent.com/107462720/210083129-f7d59313-06e0-4e39-bffd-107793a6da12.jpg" className='mt-5 p-5' />
                <div className='flex justify-end'>
                  <div className='flex text-sm'>
                    <p className='text-gray-500 '>Long: </p>
                    <p className='ml-1'>{Formlist.address.geo.lng}</p>
                  </div>
                  <div className='flex ml-2 text-sm '>
                    <p className='text-gray-500 '>Lat: </p>
                    <p className='ml-1'>{Formlist.address.geo.lat}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
