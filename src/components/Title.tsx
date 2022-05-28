import React from 'react';
import { twMerge } from 'tailwind-merge';

const Title: React.FC<{ className?: string; level: 1 | 2 | 3 | 4 | 5 | 6 }> = ({ children, className, level }) => {
  const BASE_CLASS = "font-bold mb-1 mt-8 first:mt-0"
  const GRADIENT_CLASS = "w-fit text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500"

  switch (level) {
    case 1:
      return <h1 className={twMerge("text-3xl", BASE_CLASS, GRADIENT_CLASS, className)}>{children}</h1>
    case 2:
      return <h2 className={twMerge("text-2xl", BASE_CLASS, GRADIENT_CLASS, className)}>{children}</h2>
    case 3:
      return <h3 className={twMerge("text-xl", BASE_CLASS, GRADIENT_CLASS, className)}>{children}</h3>
    case 4:
      return <h4 className={twMerge("text-lg", BASE_CLASS, className)}>{children}</h4>
    case 5:
      return <h5 className={twMerge("text-sm", BASE_CLASS, className)}>{children}</h5>
    case 6:
      return <h6 className={twMerge("text-xs", BASE_CLASS, className)}>{children}</h6>
    default:
      throw new Error('Tried to make Title component without level')
      break;
  }
}

export default Title