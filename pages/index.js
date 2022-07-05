import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import prisma from "lib/prisma";
import { getVideos } from "lib/data";
import Head from "next/head";

export default function Home({videos}) {
  return (
    <div className="bg-black text-white relative h-full">
       <Head>
        <title>YouTube Clone</title>
        <meta name='description' content='A great YouTube Clone' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className="navigation-bar shadow">
        <Navbar />
      </div>

      <div className="section flex  relative">
        <div className="sidebar-section">
          <SideBar />
        </div>

        <div className="header-section">
          <Header videos={videos} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  let videos = await getVideos({}, prisma);
  videos = JSON.parse(JSON.stringify(videos));

  return {
    props: {
      videos,
    },
  };
}
