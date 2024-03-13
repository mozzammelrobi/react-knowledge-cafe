import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks]= useState([])
  const [readingTime, setReadingTime]= useState(0)

  const handleAddBookmard = title =>{
    const newTitle = [...bookmarks, title]
    setBookmarks(newTitle)
  }

  const hadleMarkAsRead = (time)=>{
    setReadingTime(readingTime + time)
    // console.log('handle mark as read',time)
  }

  // console.log(bookmarks)
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs 
          handleAddBookmard = {handleAddBookmard}
          hadleMarkAsRead ={hadleMarkAsRead}
        ></Blogs>
        <Bookmarks 
          bookmarks={bookmarks}
          readingTime ={readingTime}
        ></Bookmarks>
      </div>
    </>
  )
}

export default App
