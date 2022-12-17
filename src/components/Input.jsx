import React from 'react';

const Input = ({ value, placeholder, title, id, required, onChange, type }) => {
  return (
    <div className='flex flex-col gap-1'>
      <p>
        {title}
        {required && <span className='text-red-600'>*</span>}
      </p>
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        onChange={onChange}
        className='w-full h-[50px] rounded-[4px] px-4 py-2 border-[1px] border-green-600 focus:outline-none'
      />
    </div>
  );
};

export default Input;
