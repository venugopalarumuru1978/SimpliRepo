import { useState } from 'react';

export default function useToggle(initialValue = false) {
  
    const [value, setValue] = useState(initialValue);

    const toggle = () => setValue((prev) => !prev);

  // You can return an array (like useState) or an object
  return [value, toggle];
}