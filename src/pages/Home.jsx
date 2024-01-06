import { useState,useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading] = useState(false);
  const [posts,setPosts] = useState([]);
  //posts array for holding data

  async function fetchProductData(){

    console.log("Fetching:");
    setLoading(true);
    
    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      // console.log(data);
      setLoading(false);
      setPosts(data);
      console.log(posts);
    }
    catch(error){
      console.log("Error detected");
      setPosts([]);
    }
    console.log(posts);
    

  }

  useEffect(()=>{
    fetchProductData();
  },[])

  return <div>
    {
      loading ? <Spinner/>:
      // if there are any posts available
      posts.length > 0 ?
      (<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 p-5">
        {
          posts.map((post)=>{
            return <Product key={post.id} post={post}/>
          })
      // remember to write under {}
        }
      </div>):
      <div>
        <p>No data found</p>
      </div>
    }
  </div>;
};

export default Home;

