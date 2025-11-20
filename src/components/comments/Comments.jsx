import './comments.scss';

const Comments = () => {

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
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Autem neque aspernatur ul",
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