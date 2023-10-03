import { Fragment, useState } from 'react'
import Item from './components/Item'

function App() {
  const [count, setCount] = useState(0)
  const imageArray = [
    "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]
  return (
    <Fragment className='flex'>
      <h1 className='bg-red-900 rounded p-5 border cursor-pointer text-center text-white'>Tailwind CSS</h1>
      <Item name="Bag" stock="stock out" price="$150" image={imageArray[0]}/>
      <Item name="Shoe" stock="stock out" price="$120" image={imageArray[1]}/>
    </Fragment>
  )
}

export default App
