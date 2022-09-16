import React from 'react';
import { Link , useHistory} from 'react-router-dom';

const Post = (props) => {
    const {title , id} = props.post;
    const history = useHistory()


    const handelClick = () => {
        history.push(`/post/${id}`)
    }
    return (
        <div>
            <h2>{title}</h2>
            <Link to={`/post/${id}`}> post info</Link>
            <br/>
            <button onClick={handelClick}>click to see detail</button>
        </div>
    );
};

export default Post;