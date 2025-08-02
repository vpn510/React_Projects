import React, { useState, useCallback, useEffect, useRef } from 'react';

const App = () => {
  const [password, setPassword] = useState('');
  const [allowedNumber, setAllowedNumber] = useState(false);
  const [allowedCharacter, setAllowedCharacter] = useState(false);
  const [length, setLength] = useState(8);

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (allowedNumber) str += '0123456789';
    if (allowedCharacter) str += '!@#$%^&*()';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex];
    }
    setPassword(pass);
  }, [length, allowedNumber, allowedCharacter, setPassword]);

  // Function to copy the generated password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, allowedNumber, allowedCharacter, passwordGenerator]);

  return (
    <div className='h-screen w-full bg-slate-900 text-white flex justify-center items-center p-4'>
      <div className='w-full max-w-xl mx-auto shadow-lg rounded-xl px-6 py-8 bg-slate-800'>
        <h1 className='text-3xl font-bold text-center text-cyan-400 mb-6'>
          Password Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-6'>
          <input
            type='text'
            value={password}
            readOnly
            placeholder='Password'
            className='outline-none w-full py-2 px-4 bg-slate-700'
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-600 text-white px-4 py-2 shrink-0 hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200'
          >
            Copy
          </button>
        </div>
        <div className='flex flex-col sm:flex-row text-sm gap-y-4 sm:gap-x-6'>
          <div className='flex items-center gap-x-2'>
            <input
              type='range'
              value={length}
              onChange={(e) => setLength(e.target.value)}
              min={6}
              max={100}
              id='length'
              className='cursor-pointer accent-blue-500'
            />
            <label htmlFor='length'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={allowedNumber}
              id='numberInput'
              onChange={() => {
                setAllowedNumber((prev) => !prev);
              }}
              className='accent-blue-500'
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={allowedCharacter}
              id='characterInput'
              onChange={() => {
                setAllowedCharacter((prev) => !prev);
              }}
              className='accent-blue-500'
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;