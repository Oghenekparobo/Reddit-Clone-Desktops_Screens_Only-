import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { AiOutlineReddit } from "react-icons/ai";
import timeago from "lib/timeago";
import Link from "next/link";
import { getSubreddit, getPost } from "lib/data.js";
import prisma from "lib/prisma";
import { useSession, getSession } from 'next-auth/react'
import Popular from "/pages/components/Popular";
import NewComment from "pages/components/NewComment";
import Comments from "pages/components/Comments";
import { useRouter } from "next/router";
import { getVote, getVotes } from "lib/data.js";

export default function Post({ subreddit, post, votes, vote }) {
  if (!post) return <p className="text-center p-5">Post does not exist 😞</p>;
  const { data: session, status } = useSession();
  const router = useRouter();

  const loading = status == "loading";

  if(loading) return null

  const sendVote = async (up) => {
    await fetch("/api/vote", {
      body: JSON.stringify({
        post: post.id,
        up,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    router.reload(window.location.pathname);
  };

  if (loading) return null;

  return (
    <div className=" px-8 mt-4 bg-sky-200">
      <div className="navigational-bar relative my-4 bg-white">
        <div className="navbar flex items-center justify-between shadow p-2 ">
          <div className="nav-logo flex items-center mx-4 pr-4">
            <div className="text-red-500 text-4xl font-bold">
              <AiOutlineReddit />
            </div>
            <h6 className="text-xl font-bold px-2">Reddit</h6>
          </div>

          <div className="flex-1">
            <div className="searchbar flex">
              <input
                type="search"
                name=""
                id=""
                className="text-xl bg-gray-100 outline-none w-70 p-1 flex-1 mx-2"
                placeholder="Search Reddit"
              />
            </div>
          </div>
          <div className="">
            {session ? (
              <div className="signins flex ">
                <p className="font-bold">{session.user.name}</p>

                <a
                  href="/api/auth/signout"
                  className="text-red-500 pl-4 font-bold"
                >
                  Home
                </a>
              </div>
            ) : (
              <div className="signins flex ">
                <a
                  href="/api/auth/signin"
                  className="login bg-transparent text-blue-500 border mx-4 border-blue-500 px-4 py-2 px-10 rounded-full font-bold"
                >
                  Log In
                </a>
                <a
                  href="#"
                  className="login bg-blue-500 text-white border mx-4 border-blue-500 px-4 py-2 px-10 rounded-full font-bold"
                >
                  Sign Up
                </a>
              </div>
            )}
          </div>

          <div className="user flex mx-4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <Link href={`/`}>
        <a className="text-center p-5 underline block">
          🔙 back to the homepage
        </a>
      </Link>
      <Link href={`/r/${subreddit.name}`}>
        <a className="text-center p-5 underline block">
          🔙 back to /r/{subreddit.name}
        </a>
      </Link>

      <div className="flex  px-4  bg-white h-96 rounded border">
        <div className="side-icons text-gray-400 px-4 py-4  bg-gray-100">
          <ImArrowUp />
          <span className="font-bold text-black">7.4k</span>
          <ImArrowDown />
        </div>

        <div className="grid grid-cols-3 gap-24">
          <div className="col-span-2">
            <div className="post-contents flex flex-col px-2 py-4">
              <div className="post-content_tops flex space-x-48 ">
                <div className="flex justify-center items-center">
                  <div className="w-0.5 h-0.5  relative bottom-1   rounded-full">
                    <AiOutlineReddit />
                  </div>

                  <div className="">
                    <Link href={`/r/${post.subredditName}`}>
                      <a className="mr-2 underline pr-2 pl-4 small font-bold">
                        /r/{post.subredditName}
                      </a>
                    </Link>
                    <span className="small text-gray-400 font-light">
                      posted by u/{post.author.name}
                      <Link
                        href={`/r/${post.subredditName}/comments/${post.id}`}
                      >
                        <a className="underline">
                          {timeago.format(new Date(post.createdAt))}
                        </a>
                      </Link>
                    </span>
                  </div>
                </div>

                <div className="join-c">
                  <a
                    href="#"
                    className="bg-blue-500 text-white py-1 px-6 rounded-full"
                  >
                    Join
                  </a>
                </div>
              </div>

              <div className="post-content">
                <div className=" font-bold">
                  <Link href={`/r/${post.subredditName}/comments/${post.id}`}>
                    <h1 className="tracking-wide cursor text-xl px-6 py-4">
                      {post.title}
                    </h1>
                  </Link>
                  <p className="tracking-wide px-6 py-2">{post.content}</p>

                  <div className="pb-6">
                    <img
                      src="/public/img/pawel-czerwinski-XQqd6JKDkSM-unsplash.jpg"
                      alt=""
                      className="w-80 h-48"
                    />
                  </div>
                </div>
              </div>

              <div className="post-x flex text-gray-500 space-x-6 pb-6">
                <div className="comments flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  <span>comments</span>
                </div>

                <div className="share flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  <span>share</span>
                </div>

                <div className="save flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                  <span>save</span>
                </div>

                <div className="dot">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </div>
              </div>

              <NewComment post={post} />
              <div className="w-full border border-gray-100 mt-4"></div>
              <Comments comments={post.comments} sendVote={sendVote} votes={votes} vote={vote} />
            </div>
          </div>

          <div className="p-4 bg-red-500">
            <Popular />
          </div>
        </div>
      </div>
    </div>
  );
}





export async function getServerSideProps(context) {
  const session = await getSession(context)

  const subreddit = await getSubreddit(context.params.subreddit, prisma)
  let post = await getPost(parseInt(context.params.id), prisma)
	post = JSON.parse(JSON.stringify(post))

  let votes = await getVotes(parseInt(context.params.id), prisma)
	votes = JSON.parse(JSON.stringify(votes))

  let vote = await getVote(
    parseInt(context.params.id),
    session?.user.id,
    prisma
  )
	vote = JSON.parse(JSON.stringify(vote))

  return {
    props: {
      subreddit,
      post,
      votes,
      vote,
    },
  }
}