import timeago from "lib/timeago";
import Link from "next/link";
import Image from "next/image";

export default function Video({ video }) {
  return (
    <div className="px-4">
      <div className="thumbnail-minutes">
        <div className="">
          {video.thumbnail && (
            <Link href={'/video/${video.id}'}><Image src={video.thumbnail} width="450" height="300" /></Link>
          )}
        </div>
        <div className="minutes w-10 bg-black">
          <span>
            {Math.floor(video.length / 60)
              .toString()
              .padStart(2, "0")}
            :{(video.length % 60).toString().padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="attributes relative bottom-6 flex space-x-6">
        <div className="author">
         
          {video.author.image && (
            <img src={video.author.image} className="w-10 h-10 rounded-full" />
          )}
        </div>

        <div className="title-name-views-timeago text-gray-400">
        <Link href={'/video/${video.id}'}><h5 className="text-xl text-white">{video.title}</h5></Link>
          <Link href={'/video/${video.author.username}'}><p className="hover:border-b border-gray-400 w-24">{video.author.name}</p></Link>
          <p>{video.views} Views·<span>{timeago.format(new Date(video.createdAt)) }</span></p>
        </div>


      </div>
    </div>
  );
}
