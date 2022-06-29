import Nav from "./components/Navbar";
import Popular from "./components/Popular";
import PostHeader from "./components/PostHeader";
import Trending from "./components/Trending";
import { getPosts } from "lib/data";
import prisma from "lib/prisma";
import Head from "next/head";
import Post from "./components/Post";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function Home({posts}) {

  const{data:session , status} = useSession()
  const router = useRouter()

  const loading = status === ' loading'

  if(loading) return null

  if(
    session && !session.user.name) {
    router.push('/login')

   } 
  return (
    <div className="">
      <div className="">
        <Head>
        <title>Reddit Clone</title>
        <meta name='description' content='A great social network!' />
        <link rel='icon' href='/favicon.ico' />

        </Head>
      </div>
      <div className="navigational-bar relative w-">
        <Nav />
      </div>
      <div className="h-full bg-gray-300 px-32">
        <Trending />
        <h4 className="relative top-10">Popular posts</h4>
        <div className="py-20">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <PostHeader posts/>
             {posts.map((post , index) =>( 
               <Post post ={post} />

               
             ))}
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

export async function getServerSideProps() {
  let posts = await getPosts(prisma)
  posts = JSON.parse(JSON.stringify(posts))


  return {
    props: {
      posts: posts,
    },
  }
}