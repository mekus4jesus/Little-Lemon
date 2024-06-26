import React, { useEffect } from 'react'
import { UserComponenet } from './UserComponenet'
import { useState } from 'react'
// import axios from 'axios'

export const Testimonal = () => {
  const [userList, setUserList] = useState([])

  // useEffect(() => {
  //   const fetchUserList  = async () => {
  //     try{
  //       const response = await axios.get("https://randomuser.me/api/?results=4")
  //       setUserList(response.data.results)
  //     }
  //     catch (error){
  //       console.log('Error fetching user data:', error)
  //     }
  //   }
  //   fetchUserList()
  // },[] )

  const fetchUserList = () => {
    fetch("https://randomuser.me/api/?results=4")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Assuming the data structure from the API is data.results
        setUserList(data.results);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  };
  

  useEffect(() => {
    fetchUserList()
  }, [])

  return (
    <section className="Testimonial">
      <article className="TestimonialUsers grid-adjustable-columns ">
        <div className="TestimonialHead">
          <h2>Testimonial</h2>
        </div>
        <div className="userData">
         {
          userList.map((user,index) =>(
            <UserComponenet
            key={index}
            userList={user}
             />
          ) )
         }
        </div>
      </article>
    </section>
  )
}


