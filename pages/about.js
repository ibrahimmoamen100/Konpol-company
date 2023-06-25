import Blog from "app/componnets/Blog";
import Slider from "app/componnets/Slider";
import Topnavbar from "app/componnets/Topnavbar";
import Head from "next/head";
import Navbar from "../app/componnets/Navbar";
import "../app/styles/globals.css";


export default function About({posts}) {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Topnavbar />
      <Navbar />
      {/* <Slider /> */}
      <Blog posts={posts}/>
      <div className="container">
      </div>
    </div>
  );
}




export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const posts = await res.json()
  console.log(posts)
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

