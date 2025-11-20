import { useContext } from 'react';
import './comments.scss';
import { AuthContext } from '../../context/authContext';

const Comments = () => {

    const { currentUser } = useContext(AuthContext);
    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Autem neque aspernatur ul",
            name: "Oliver Smith",
            userId: 1,
            profilePicture: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb",
        },
        {
            id: 2,
            desc: "Exploring ideas, building meaningful connections, and constantly learning from every experience. Passionate about creativity, technology, and the small details that make a big difference. Believes in staying curious, challenging limits, and turning thoughts into something real and impactful.",
            name: "Sophia Davis",
            userId: 2,
            profilePicture: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb",
        },
        {
            id: 3,
            desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            name: "Mason Taylor",
            userId: 3,
            profilePicture: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb",
        },
    ];


    return (
        <div className='comments'>
            <div className="write">
                <img src={currentUser.profilePicture} alt="" />
                <input type="text" placeholder='write a comment' />
                <button>Send</button>
            </div>
            {comments.map(comment => (
                <div className="comment">
                    <img src={comment.profilePicture} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))
            }</div>
    )
}

export default Comments