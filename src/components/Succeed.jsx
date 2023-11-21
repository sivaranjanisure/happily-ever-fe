import React from 'react';
import { useSelector } from 'react-redux';


const Succeed = () => {
    const name = useSelector((state) => state.app.name);
    const age = useSelector((state) => state.app.age);
  return (
    <div className='flex flex-col justify-center items-center mt-[50%] text-blue10'>
        <span className='font-bold text-3xl text-center'>
            Your name <span className='text-blue'>{name}</span> aged <span className='text-blue'>{age}</span> has been added to student system. You may now exit.
        </span>    
    </div>
  );
};

export default Succeed;