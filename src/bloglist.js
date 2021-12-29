const BlogList = ({blogs, title, handleDelete}) => {

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            { blogs.map( blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <i>Written by: { blog.author }</i>
                    <div><button onClick={() => handleDelete(blog.id)}>delete blog</button></div>
                </div>
                ))}
        </div>
    );
}
 
export default BlogList;