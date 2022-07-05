import MiniNav from "./MiniNav";
import Video from "./Video";

export default function Header({videos}) {
  return (
    <div className="header">
      <MiniNav />
      <div className="">

          {videos.length === 0 && ( 
               <p className='flex justify-center mt-20'>No videos found!</p>
          )}



         {videos.map((video , index)=>( 
             <Video video={video}/>
         ))}

      </div>
    </div>
  );
}
