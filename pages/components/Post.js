import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { AiOutlineReddit } from "react-icons/ai";
import timeago from "lib/timeago";
import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div className=" px-8 mt-4">
      <div className="flex  px-4  bg-white rounded">
        <div className="side-icons text-gray-400 px-4 py-4  bg-gray-50">
          <ImArrowUp />
          <span className="font-bold text-black">7.4k</span>
          <ImArrowDown />
        </div>

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
                  <Link href={`/r/${post.subredditName}/comments/${post.id}`}>
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
              <p className="tracking-wide px-6 py-4">{post.content}</p>

              {post.image && (
                <img
                  className="flex-shrink text-base font-normal color-primary width-auto mt-2"
                  src={post.image}
                />
              )}
            </div>
          </div>

          <div className="post-x flex text-gray-500 space-x-6 py-4">
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
        </div>
      </div>
    </div>
  );
};

export default Post;
