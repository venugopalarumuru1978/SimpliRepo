import { useMemo } from 'react';

/**
 * Custom hook to calculate the square of a number.
 * @param {number} number - The input number to square.
 * @returns {number} The squared value.
 */
export const useSquare = (number) => {
  const squaredValue = useMemo(() => {
    // Ensure the input is a valid number; defaults to 0 if not.
    const num = Number(number);
    if (isNaN(num)) return 0;
    
    return num * num;
  }, [number]);

  return squaredValue;
};