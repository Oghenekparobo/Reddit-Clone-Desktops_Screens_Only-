import MiniNav from "./MiniNav";
import Video from "./Video";

export default function Header({ videos }) {
  if (!videos) return "no videos";
  return (
    <div className="header">
      <MiniNav />
      <div className="">
        {videos.length === 0 && (
          <p className="flex justify-center mt-20">No videos found!</p>
        )}

        <div className="grid grid-cols-3 p-4">
          {videos.map((video, index) => (
            <Video video={video} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
