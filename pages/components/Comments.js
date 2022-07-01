import timeago from "lib/timeago";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { AiOutlineReddit } from "react-icons/ai";

const Comment = ({ comment , sendVote , votes , vote}) => {
  return (
    <div className=" mt-6">
      <div className="flex space-x-6 relative">

      <div className="w-0.5 h-0.5 text-black  relative top-1 border   relative bottom-1   rounded-full">
        <AiOutlineReddit />
      </div>
     
      <div className="">
      <p className="font-light flex flex-row items-center">
        {comment.author.name} <span>.</span> {timeago.format(new Date(comment.createdAt))}
      </p>
      <p>{comment.content}</p>
      </div>
     
      </div>
     

      <div className="post-x capitalize font-light text-small flex items-center text-gray-500 space-x-2 py-4">
        <div
          className="side-icons text-gray-300 cursor-pointer"
          onClick={()=> sendVote(true)}
        >
           {vote?.up ? '⬆' : '↑'}
          {/* <ImArrowUp /> */}
        </div>

        <div className="side-icons text-gray-300">
          <span className=" text-black">{votes}</span>
        </div>

        <div
          className="side-icons text-gray-300 cursor-pointer"
          onClick={()=> sendVote(false)}
        >
           {!vote ? '↓' : vote?.up ? '↓' : '⬇'}
          {/* <ImArrowDown /> */}
        </div>

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
          <span>reply</span>
        </div>

        <div className="share flex ">
          <span>share</span>
        </div>

        <div className="save flex">
          <span>give award</span>
        </div>

        <div className="">report</div>
        <div className="">save</div>
        <div className="">follow</div>
      </div>
    </div>
  );
};

export default function Comments({ comments , sendVote , votes , vote }) {
  if (!comments) return null;

  return (
    <>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} sendVote={sendVote} votes={votes} vote={vote}/>
      ))}
    </>
  );
}
