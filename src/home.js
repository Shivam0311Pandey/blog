import { useState } from "react";
import BlogList from "./bloglist";

const Home = () => {

   const[blogs, setBlogs] = useState([
       { title: "My new website", body: 'Content of blog...', author: 'Hinata', id: 1},
       { title: "Welcome party!", body: 'Content of blog...', author: 'Saitama', id: 2},
       { title: "Web dev tips", body: 'Content of blog...', author: 'Negi', id: 3}
   ]);


   const handleDelete = (id) => {
        setBlogs(blogs.filter(blog => blog.id !== id));
    }

    return (
        <div className="home">
           < BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>           
        </div>
    );
}
 
export default Home;