import logo from '../assets/mnnit_.png'

function Header() {
  const style='p-2 text-sm cursor-pointer  hover:bg-cyan-400 rounded-md uppercase font-semibold'
  return <div className='flex h-24 justify-around bg-[#fff] shadow-xl'>
   <div className='flex'> <img src={logo} alt="" /></div>
   <div className='flex justify-center items-center'>
    <ul className='flex justify-evenly'>
      <li className= {style}>Home</li>
      <li className={style} >Community & Interest</li>
      <li className={style} >Volunteer</li>
      <li className={style} >Event</li>
      <li className={style} >Benefit</li>
      <li className={style} >Giving</li>
      <li className={style} >Stories</li>
      

    </ul>

   </div>
    
  </div>;
}

export default Header;
