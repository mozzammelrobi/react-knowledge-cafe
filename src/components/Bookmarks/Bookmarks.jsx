

const Bookmarks = ({ bookmarks, readingTime }) => {

    return (
        <div className="md:w-1/3 p-6">
            <div className="p-4">
               <div className="bg-[#6047EC1A] mb-6">
                 <h1 className="text-4xl text-[#6047EC] py-5">Spen time on read {readingTime}</h1>
               </div>
                <div className="bg-[#1111110D] p-4">
                    <h2 className="text-4xl mb-8">bookmark blog:  {bookmarks.length}</h2>
                    <div className="  flex flex-col gap-8">
                        <h3 className="text-xl mb-24 bg-[#FFFFFF]">{bookmarks}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Bookmarks;