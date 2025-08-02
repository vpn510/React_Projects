import React, { useState } from 'react';

const App = () => {
  const [password, setPassword] = useState("")
  const [allowedNumber, setAllowedNumber] = useState(false)
  const [allowedCharater, setAllowedCharater] = useState(false)

  const passwordGenerator = () => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (allowedNumber) {
      str += '0123456789'
    }
    if (allowedCharater) {
      str += '!@#$%^&*()'
    }
  return (
    <div className='h-screen w-full bg-gray-800 text-white flex justify-center items-center'>
      <div className='max-w-[550px] text-center bg-gray-500 rounded-sm p-3'>
        <h1 className='text-4xl'>Password Generator</h1>
        <div className='mt-5 flex'>
          <input
            type="text"
            value={password}
            readOnly
            placeholder='Password will appear here'
            className='w-full py-2 rounded-sm bg-gray-700 text-white outline-none '
          />
          <button className='px-3 bg-blue-600 rounded-sm mt-3 hover:bg-blue-700' >Copy</button>
        </div>
        <div className=''>
          <input
            type='checkbox'
            defaultChecked={allowedNumber}
            id='number'
            className='mr-2'
            onClick={() => setAllowedNumber(!allowedNumber)}
          />
          <label htmlFor="number">Numbers</label>
          <input type="checkbox"
            defaultChecked={allowedCharater}
            id='char'
            className='mr-2'
            onClick={() => setAllowedCharater(!allowedCharater)}
          />
          <label htmlFor="char">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
