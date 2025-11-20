import './stories.scss'
import person2 from '../../assets/person2.jpg'
// import person3 from '../../assets/person3.jpg'
import person4 from '../../assets/person4.jpg'
import person5 from '../../assets/person5.jpg'
import person6 from '../../assets/person6.jpg'
// import person7 from '../../assets/person7.jpg'
const Stories = () => {

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
            {stories.map(story => (

                <div className="story">
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>

            ))}
        </div>
    )
}

export default Stories