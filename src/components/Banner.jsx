import React from 'react';
import { AiFillFacebook , AiFillGithub   , AiFillInstagram} from "react-icons/ai";
import Avatar from '../assets/avatar.jpg'





const Banner = () => {

   const renderListIcon = () => {
       return (
        <ul className='w-[700px] flex items-center justify-evenly'>
        <li className='icon-link'>
            <a className='inline-block' href="https://www.facebook.com/hoafngsown/"><AiFillFacebook fontSize={30}/></a>
        </li>
        <li className='icon-link'>
            <a className='inline-block' href="https://github.com/HwangSoon14"><AiFillGithub fontSize={30}/></a>
        </li>
        <li className='icon-link'>
            <a className='inline-block' href="https://www.instagram.com/hoafng.sown/"><AiFillInstagram fontSize={30}/></a>
        </li>
        
        </ul>
       )
   }
    
    return (
        <div className='w-screen h-[100vh] absolute z-10 bg-transparent text-white'>
            <div className='flex items-center justify-center m-8 p-4'>
                <span className='text-white text-6xl font-bold inline-block'>Hi , I'm Sown</span>
                <div className='w-14 h-14 ml-6'>
                    <img src={Avatar} alt="avatar" className='w-full h-full object-cover rounded-[50%]'/>
                </div>
            </div>
            {/* <span className='inline-block text-red-300 ml-2'>Son</span> */}
            <div className='flex items-center justify-center text-4xl font-bold bg-black'>
                <div className='static-txt'>I'm</div>
                <div className='dynamic-txt ml-4'>
                    <span className='dynamic-txt-span'>Frontend Developer</span>
                </div>
            </div>
            <div className='flex items-center justify-center mt-20'>
            <p className='max-w-[700px] text-center font-medium text-lg  leading-9'>
               I'm currently 2nd student at University of Science and Technology - The University of Da Nang.
               I'm a friendly , cutie guy who love to learn new Stuff and Technology , especially about Frontend.
            </p>
            </div>
            <div className='flex items-center justify-center mt-10'>
                {renderListIcon()}
            </div>
        </div>
    );
};

export default Banner;