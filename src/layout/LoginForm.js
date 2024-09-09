import React from 'react'
import COVER_IMAGE from 'C:/Users/This PC/cartrack/src/Components/Assets/pwa-192x192.png';
import { Checkbox } from '@chakra-ui/react';

const LoginForm = () => {
    return (
        <div className='w-full h-screen flex items-start'>
           <div className='relative w-1/2 min-h-screen bg-sky-300 flex items-center justify-center'>
                <div className='flex items-center space-x-3'>
                    <img src={COVER_IMAGE} className='w-28 h-28 object-contain'/>
                    <h1 className='text-3xl text-white font-bold text-left'>Hệ thống giám sát và điều phối vận tải 2.0</h1>
                </div>
            </div>

            <div className='w-2/3 h-full bg-[#f5f5f5] p-40 py-60 flex flex-col'>
                <input 
                    type='email' 
                    placeholder='Email*'
                    className='w-full py-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none'
                    required   
                />

                <input 
                    type='password' 
                    placeholder='Mật khẩu*'
                    className='w-full py-4 my-4 bg-transparent border-b border-black outline-none focus:outline-none'
                    required
                />

                <div className='w-full flex items-center justify-between'>
                    <div className='w-full flex items-center'>
                        <input type="checkbox" className='w-4 h-4 mr-2'/>
                        <p className='text-sm'>Ghi nhớ đăng nhập</p>
                    </div>

                    <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-3'>Quên mật khẩu?</p>
                </div>

                <div className='w-full flex flex-col my-4'>
                    <button className='mt-4 px-6 py-2 bg-black text-white rounded-md'>Đăng nhập</button>
                    <button className='mt-4 px-6 py-2 bg-white border-2 border-black text-black rounded-md'>Đăng ký</button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm

