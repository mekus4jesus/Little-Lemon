import { FaStar } from "react-icons/fa6"

export const UserComponenet = ({userList}) => {
  return (
    <div className="testimonial">
      {userList && (
        <>
        <div className="userdataName">
        <p>{userList.name.first} {userList.name.last}</p>
        <div className="userRate">
          <div className="userImg">
          <img src={userList.picture.medium} alt="User" />
          </div>
          <div className="rate">
            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
          </div>
        </div>
        <div className="review">
          Review
        </div>
        </div>
          
          
          
          {/* Add more user data as needed */}
        </>
      )}
    </div>
  )
}

