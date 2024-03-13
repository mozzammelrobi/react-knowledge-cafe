import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks]= useState([])

  const handleAddBookmard = blog =>{
    console.log('add book mark')
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs 
          handleAddBookmard = {handleAddBookmard}
        ></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
