import prisma from "lib/prisma";
import { getSubreddit, getPostsFromSubreddit } from "lib/data";
import Post from "pages/components/Post";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function Subreddits({ subreddit, posts }) {
  const{data:session, status} = useSession()
  if (!subreddit) {
    return <p className="text-center p-5">Subreddit does not exist 😞</p>;
  }
  const router = useRouter();
  return (
    <div className="">
      <Link href={`/`}>
        <a className="text-center p-5 underline block">
          🔙 back to the homepage
        </a>
      </Link>
      <div className="border border-3 border-black p-10  mx-20 my-10">
        {session && (
          <input
            placeholder="Create post"
            className="border-gray-800 border-2 p-4 w-full"
            onClick={() => {
              router.push(`/r/${subreddit.name}/submit`);
            }}
          ></input>
        )}
      </div>
      <p className="text-center p-5">/r/{subreddit.name}</p>
      {posts.map((post, index) => {
        <Post post={post} key={index} />;
      })}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  let subreddit = await getSubreddit(params.subreddit, prisma);
  subreddit = JSON.parse(JSON.stringify(subreddit));

  let posts = await getPostsFromSubreddit(params.subreddit, prisma);
  posts = JSON.parse(JSON.stringify(posts));

  return {
    props: {
      subreddit,
      posts,
    },
  };
}
