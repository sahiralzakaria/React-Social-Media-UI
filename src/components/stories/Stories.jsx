import './stories.scss'
import person2 from '../../assets/person2.jpg'
import person3 from '../../assets/person3.jpg'
import person4 from '../../assets/person4.jpg'
const Stories = () => {

    //TEMPORARY
    const stories = [

        {
            id: 1,
            name: 'Ahmed Saleh',
            img: person2
        },
        {
            id: 2,
            name: 'Ali Wael',
            img: person3
        },
        {
            id: 3,
            name: 'Hamza Sami',
            img: person4
        },


    ]
    return (
        <div>{stories.map((story) => {
            <div className="story">
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        })}</div>
    )
}

export default Stories