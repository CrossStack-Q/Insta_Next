import React from "react";
import Head from "next/head";
import { getProviders, signIn,signOut } from "next-auth/react";

function Login({ providers }) {
  return (
    <main>
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen flex bg-gray-200 h-screen">
        <div className="flex  flex-grow justify-center">
          <div className="hidden md:flex md:basis-1/2 md:justify-end m-auto">
            <img
              src="https://raw.githubusercontent.com/Piko-Quiloo/Extra-Files/main/insta0q.png"
              alt=""
              width="430rem"
              height="auto"
            />
          </div>

          <div className="flex flex-col basis-1/2 justify-center md:items-start items-center m-auto">
            <div className="bg-white p-7 md:ml-10 md:mr-10 rounded-md">
              <div className="flex justify-center items-center">
                <img
                  src="https://raw.githubusercontent.com/Piko-Quiloo/Extra-Files/main/instagram.png"
                  alt=""
                  className="w-10 h-10 m-2 md:w-12 md:h-12"
                />
                <img
                  className="w-30 h-15 md:w-45 md:h-30 m-3"
                  src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                  alt=""
                />
              </div>
              <div className="mt-14 flex justify-center m-7 bg-white">
                <div className="flex-grow">
                  <input
                    type="text"
                    className="p-1 outline-none bg-gray-200 border border-gray-300"
                    placeholder="Username or email"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="m-7 flex justify-center bg-white">
                <div className="flex-grow">
                  <input
                    type="text"
                    className="p-1 outline-none bg-gray-200 border border-gray-300"
                    placeholder="Password"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="flex justify-center items-center m-7">
                <button className="flex-grow rounded-md p-2 bg-red-500">
                  Log In
                </button>
              </div>
              <hr />
              <div className="flex justify-center items-center mt-4 m-10 -mb-4">
                <button
                  onClick={signIn}
                  className="flex-grow rounded-md p-2 text-lg text-blue-700 bg-white"
                >
                  Log in with Google
                </button>
              </div>
              <div className="flex justify-center items-center mt-2">
                <button className="flex-grow rounded-md p-2 text-sm text-blue-700 bg-white">
                  Forgot password?
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center bg-white p-12 pt-3 pb-3 md:ml-10 md:mr-10 rounded-md mt-3">
              <p className="flex-grow">
                Don't have an account?{" "}
                <span className="text-blue-500 cursor-pointer">Sign up</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
