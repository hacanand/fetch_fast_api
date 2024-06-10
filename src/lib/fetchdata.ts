 
import axios from "axios";
export async function fetchData() {
    const options = {
      method: "GET",
      url: "https://youtube-search-and-download.p.rapidapi.com/trending",
      caches: "force-cache", //for static site rendering

      //   cache: "force-cache", // static site rendering
      //cache:"no-store", // server side rendering
      //next:{
      //  revalidate: 10,}//ISR revalidate every 10 sec

      params: {
        type: "mu",
        hl: "en",
        gl: "IN",
      },
      headers: {
        "x-rapidapi-key": process.env.NEXT_RAPID_API_KEY,
        //process.env.RAPIDAPI_KEY, can be used
        "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
        //process.env.RAPIDAPI_HOST, can be used
      },
    };

    try {
        const response = await axios.request(options);
        return response?.data?.contents;
    } catch (error) {
        console.error(error);
    }
}


// Fetch data from an API, database, or file system
// used in nextjs < 13


// export async function getStaticProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();
// console.log(posts)
//   return {
//     props: {
//       posts,
//     },
//   };
// }
