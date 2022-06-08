import Head from "next/head";
import Header from "../components/Header"
import Feed from "../components/Feed/Feed"
import { getSession } from 'next-auth/react'
import Login from "../pages/login"
import ModalQ from "../components/ModalQ";


// https://spotify-nextoza.vercel.app

export default function Home({session}) {
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-50 overflow-y-scroll tailwind-scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Modal/> */}
      
      <Header />
      <Feed/>
      <ModalQ />
      
    </div>
  );
}



export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}
