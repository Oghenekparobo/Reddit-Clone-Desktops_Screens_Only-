import prisma from "lib/prisma";
import { getSubreddit, getPostsFromSubreddit } from "lib/data";
import Post from "pages/components/Post";
import Link from 'next/link'

export default function Subreddits({ subreddit, posts }) {
  if (!subreddit) {
    return <p className="text-center p-5">Subreddit does not exist 😞</p>;
  }

  return (
    <div className="">
         <Link href={`/`}>
        <a className='text-center p-5 underline block'>
          🔙 back to the homepage
        </a>
      </Link>
      <p className='text-center p-5'>/r/{subreddit.name}</p>
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
