import { useState } from 'react'

function App() {
  const [color, setColor] = useState('#d6d6d6')

  return (
    <div className='w-full h-screen' 
    style={{backgroundColor: color}}>
      <div className='flex flex-wrap fixed justify-center bottom-10 inset-x-0 gap-4'>
        <button onClick={()=> setColor('red')} className='bg-red-600 p-4 w-24 rounded-md'>Red</button>
        <button onClick={()=> setColor('green')} className='bg-green-600 p-4 w-24 rounded-md'>Green</button>
        <button onClick={()=> setColor('yellow')} className='bg-yellow-400 p-4 w-24 rounded-md'>Yellow</button>
        <button onClick={()=> setColor('blue')} className='bg-blue-400 p-4 w-24 rounded-md'>Blue</button>
        <button onClick={()=> setColor('orange')} className='bg-orange-600 p-4 w-24 rounded-md'>Orange</button>
      </div>
    </div>
  )
}

export default App
