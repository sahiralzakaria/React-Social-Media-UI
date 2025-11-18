import './rightBar.scss'
import personImg from '../../assets/person.jpg';
const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={personImg} alt="" />
              <span>Ahmed Ali</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={personImg} alt="" />
              <span>Ahmed Ali</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={personImg} alt="" />
              <span>Ahmed Ali</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={personImg} alt="" />
              <span>Ahmed Ali</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={personImg} alt="" />
              <p>
                <span>Ahmed Ali</span> changed their cover picture
              </p>

            </div>
            <span>1 minute ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={personImg} alt="" />
              <p>
                <span>Ahmed Ali</span> changed their cover picture
              </p>

            </div>
            <span>1 minute ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={personImg} alt="" />
              <p>
                <span>Ahmed Ali</span> changed their cover picture
              </p>

            </div>
            <span>1 minute ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={personImg} alt="" />
              <p>
                <span>Ahmed Ali</span> changed their cover picture
              </p>

            </div>
            <span>1 minute ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={personImg} alt="" />
              <p>
                <span>Ahmed Ali</span> changed their cover picture
              </p>

            </div>
            <span>1 minute ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar