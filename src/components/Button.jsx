import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ title, className, link }) => {
  return (
    <Link to={link}>
      <button
        className={`h-[50px] hover:scale-[.9] duration-200 px-4 py-2 rounded-[4px]  ${className}`}
      >
        {title}
      </button>
    </Link>
  );
};

export default Button;
