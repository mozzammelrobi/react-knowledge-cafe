import { space } from 'postcss/lib/list';
import PropTypes from 'prop-types'; 

const Blog = ({blog}) => {
    
    const {title, cover,author,author_img,posted_date,hashtags,reading_time}= blog
    return (
        <div className='mb-20'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} minute</span>
                </div>
            </div>
            <h3 className="text-4xl">{title}</h3>
            <p className='flex gap-6'>
                {
                    hashtags.map((has, idx) => <span key={idx}><a href="">{has}</a></span>)
                }
            </p>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object,
}
export default Blog;