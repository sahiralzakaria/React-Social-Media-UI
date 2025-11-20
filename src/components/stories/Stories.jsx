import './stories.scss'
import person2 from '../../assets/person2.png'
// import person3 from '../../assets/person3.png'
import person4 from '../../assets/person4.png'
import person5 from '../../assets/person5.png'
import person6 from '../../assets/person6.png'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
// import person7 from '../../assets/person7.png'

const Stories = () => {

    const { currentUser } = useContext(AuthContext);

    //TEMPORARY
    const stories = [

        {
            id: 1,
            name: 'Ahmed Saleh',
            img: person2
        },
        // {
        //     id: 2,
        //     name: 'Ali Wael',
        //     img: person3
        // },
        {
            id: 3,
            name: 'Hamza Sami',
            img: person4
        },
        {
            id: 4,
            name: 'Hamza Sami',
            img: person5
        },
        {
            id: 5,
            name: 'Hamza Sami',
            img: person6
        },
        // {
        //     id: 6,
        //     name: 'Hamza Sami',
        //     img: person7
        // },


    ]
    return (
        <div className='stories'>
            <div className="story">
                <img src={currentUser.profilePicture} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story => (

                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>

            ))}
        </div>
    )
}

export default Stories