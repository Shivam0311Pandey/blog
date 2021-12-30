import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const submitBlog = (event) =>{
        event.preventDefault();
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title, body, author})
        })
        .then(() => {
            setIsPending(false);
            console.log('new blog added');
            history.push('/');
        });

    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={submitBlog}>
                <label>Blog title:</label>
                <input type="text" value={ title } onChange={e => setTitle(e.target.value)} required />
                <label>Blog body:</label>
                <textarea value={ body } onChange={e => setBody(e.target.value)} required></textarea>
                <label>Blog author:</label>
                <input type="text" value={ author } onChange={e => setAuthor(e.target.value)} required />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding...</button>}
            </form>
        </div>
    );
}
 
export default Create;