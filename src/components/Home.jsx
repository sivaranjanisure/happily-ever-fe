import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center mt-[50%] text-blue10 text-center'>
        <span className='font-bold text-3xl text-center'>Enter into Student Info System</span>
        <button className='bg-blue01 p-3 mt-10 rounded' onClick={() => navigate('/chat')}>Enroll Now!</button>
    </div>
  );
};

export default Home;