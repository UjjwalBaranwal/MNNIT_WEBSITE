
import image from '../../assets/mnnit.webp'
import logo from '../../assets/mnnit_.png'
import Button from '../../component/Button'
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function LoginPage() {
  return (
    <div className="grid md:grid-cols-7 grid-row-2  h-screen w-full ">
    <img src={image} className=' h-full col-span-4 rounded-tl-lg opacity-95 ' alt="" />
        
        <div className='col-span-3 h-screen shadow-lg shadow-black rounded-tr-2xl rounded-br-2xl'>
            <div className='grid grid-rows-5 justify-items-center items-center gap-2 h-screen' >
            <img src={logo} alt="" className='h-3/4 row-span-1 ' />
            
            <div className='flex flex-col row-span-3 p-2 w-[90%]  overflow-hidden'>
            <h1 className='text-2xl font-semibold text-center p-2'>MNNIT ALLAHABAD ALUMA WORLD</h1>
            <div className='grid grid-cols-2 gap-2 p-4' >
                <div className='flex flex-row justify-center items-center p-6 '>
                   <div className='py-3 px-3 text-center bg-red-500 text-white'>
                   <FaGoogle/>
                   </div>
                    <h1 className='text-center bg-red-700 hover:bg-red-600 transition-all delay-300 cursor-pointer py-2 px-8 text-white' >Gmail</h1>
                </div>
                <div className='flex flex-row justify-center items-center p-6 '>
                   <div className='py-3 px-3 text-center bg-blue-400  text-white '>
                   <FaLinkedin/>
                   </div>
                    <h1 className='text-center  bg-[#0077B5] cursor-pointer py-2 px-7 text-white hover:bg-blue-500 transition-all delay-300' >Linkedin</h1>
                </div>
            </div>
            <h1 className='text-xl text-gray-400 text-center p-2'>Or Login With Email Id and Password</h1>
            <form action="" className='flex flex-col p-4'>
        
                <input type="text" className='p-1 px-2 text-xl border-2 border-gray-300  focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-1 rounded-md m-2' placeholder='username/email'/>
               
                <input type="text" className='p-1 px-2 text-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-1 rounded-md m-2' placeholder='password'/>
                <Button primary className='w-full text-xl uppercase items-center text-center'>Log in</Button>
            </form>
            </div>
            </div>
        </div>
    

    </div>
  )
}

export default LoginPage