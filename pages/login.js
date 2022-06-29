import Head from "next/head";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { useState } from "react";

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const loading = status === "loading";
  const [name, setName] = useState("");

  if (loading)  return null

  if ( session.user && session.user.name) {
    router.push("/");

  }

  if(!session || !session.user){ 
      router.push('/')

  }

 

  return (
    <div className="">
      <div className="">
        <Head>
          <title>Reddit Clone</title>
          <meta name="description" content="A great social network!" />
          <link rel="stylesheet" href="/styles/globals.css" />
        </Head>
      </div>
      <div className="wrapper flex h-screen">
        <div className="w-1/6 bg"></div>
        <div className="login-section w-5/6 p-10 ">
          <div className="header flex flex-col space-y-10 pt-16">
            <div className="">
              <h3 className="font-semi-bold text-2xl">Log in</h3>
              <p className="text-sm font-semi-bold">
                By continuing, you agree to our
                <span className="text-blue-500">User Agreement </span> and
                <span className="text-blue-500">Privacy Policy.</span>
              </p>
            </div>

            <div className="">
              <div className="flex items-center hover:bg-blue-500 space-x-6 px-8 py-6  rounded w-80 tracking-wide text-sm border border-blue-500 text-blue-500 hover:text-white transition font-bold ">
                <span className="hover:bg-white hover:p-2 text-xl rounded">
                  <span>
                    <FcGoogle />
                  </span>
                </span>
                <span className="uppercase">continue with google</span>
              </div>

              <div className="flex items-center hover:bg-blue-500 space-x-6 px-8 py-6 mt-2 mr-4 rounded w-80 tracking-wide text-sm border border-blue-500 text-black transition font-bold ">
                <span className="hover:bg-white  hover:p-2 text-xl rounded">
                  <span>
                    <BsApple />
                  </span>
                </span>
                <span className="uppercase">continue with apple</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="border-b border-gray-100 w-28"></span>
              <span className="text-gray-400">OR</span>
              <span className="border-b border-gray-100 w-28"></span>
            </div>

            <div className="">
              <form
                 onSubmit={(e) => {
                    e.preventDefault()
                     fetch('/api/setup', {
                      body: JSON.stringify({
                        name,
                      }),
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      method: 'POST',
                    })
                    session.user.name = name
                    router.push('/')
                  }}
              >
                <div className="flex flex-col w-64 space-y-4">
                  <div className="">
                    <input
                      type="text"
                      className=" border border-gray-200 px-16 py-4 rounded outline-none"
                      value={name}
                      required
                      pattern="\w*"
                      title="Numbers or letters or _ only"
                      placeholder="Numbers or letters or _ only"
                      minlength="5"
                      onChange={(e) => setName(e.target.value) }
                    />
                  </div>

                  <button
                    className="bg-blue-500 text-white py-2 font-bold text-sm w-80 rounded"
                    value="LOG IN"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <p className="font-italics text-gray-300 pl-4 text-capitalize italic font-light">
              Stephen's Reddit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
