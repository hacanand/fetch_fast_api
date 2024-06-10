 
const axios = require("axios")
export async function fetchData() {
    const options = {
      method: "GET",
      url: "https://youtube-search-and-download.p.rapidapi.com/trending",
    //   caches: "force-cache",
      //   , {
      //   cache: "force-cache", // static rendering
      //cache:"no-store", // server side rendering
      //next:{
      //  revalidate: 10,}//ISR revalidate every 10 sec
      // }
      params: {
        type: "mu",
         hl: "en",
        gl: "IN",
      },
      headers: {
        "x-rapidapi-key": "f790f87593msh7fc75facc5e80cdp12dff0jsnd051cac37375",
        "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
      },
    };

    try {
        const response = await axios.request(options);
        // const data = await response.json()
        //  console.log(response.data.contents)
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
