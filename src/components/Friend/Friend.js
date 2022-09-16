import React from 'react';
import { Link , useHistory} from 'react-router-dom';

const Friend = (props) => {
    const {name, phone, website, address, id} = props.friend
    const history = useHistory();
    const friendStyle={
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'
    }
    const url =`/friend/${id}`;
    const handelFriendClick =()=> {
        history.push(url)
    }

    return (
        <div style={friendStyle}>
            <h2>This is {name} {id}</h2>
            <h6>call me : {phone}</h6>
            <p>visit me: {website}</p>
            <p><small>i live in {address.city}</small></p>
            <Link to={url}>visit me</Link>
            <br/>
            <Link to={url}>
               <button>Visit me</button>
            </Link>
            <br/>
            <button onClick={handelFriendClick}> visited me </button>
        </div>
    );
};

export default Friend;