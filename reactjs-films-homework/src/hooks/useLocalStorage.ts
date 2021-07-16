import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, defaultValue: any) => {
  const stored = localStorage.getItem(key);

  const initialValue = stored ? JSON.parse(stored) : defaultValue;
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export default useLocalStorage;
