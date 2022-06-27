import Nav from "./components/Navbar";
import Popular from "./components/Popular";
import Posts from "./components/Posts";
import Trending from "./components/Trending";

export default function Home() {
  return (
    <div className="">
      <div className="navigational-bar">
        <Nav />
      </div>

      <div className="h-full bg-gray-300 px-32">
        <Trending />

        <div className="">
          <h4 className="py-4">Popular posts</h4>
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <Posts />
            </div>
            <div className="">
              <Popular />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
