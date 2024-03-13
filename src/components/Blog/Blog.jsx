import { space } from 'postcss/lib/list';
import PropTypes from 'prop-types';
import { IoIosBookmark } from "react-icons/io"; 

const Blog = ({blog, handleAddBookmard, hadleMarkAsRead}) => {
    
    const {title, cover,author,author_img,posted_date,hashtags,reading_time}= blog
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <span>{reading_time} min read</span>
                    <button 
                        onClick={()=>handleAddBookmard(title)}
                        className='ml-3 text-2xl'
                    ><IoIosBookmark /></button>
                </div>
            </div>
            <h3 className="text-4xl mb-4">{title}</h3>
            <p className='flex gap-6'>
                {
                    hashtags.map((has, idx) => <span key={idx}><a href="">{has}</a></span>)
                }
            </p>
            <button 
                onClick={() => hadleMarkAsRead(reading_time)} 
                className='text-blue-600 font-bold underline'
             >mark as read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object,
    handleAddBookmard: PropTypes.func
   
}
export default Blog;