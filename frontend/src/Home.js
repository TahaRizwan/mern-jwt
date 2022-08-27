import React, { useEffect, useState } from 'react'

const Home = () => {
  const [workouts, setWorkouts] = useState([])
  useEffect(() => {
    const fetchAllWorkout = async () => {
      const response = await fetch(
        `https://mern-jwt-app.herokuapp.com/api/workouts`
      )
      const data = await response.json()
      setWorkouts(data)
      console.log(data) 
    }
    fetchAllWorkout()
  }, [])
  return (
    <div className='home'>
      <div className='workouts'>
        {workouts &&
          workouts.map((workout) => <p key={workout._id}>{workout.title}</p>)}
      </div>
    </div>
  )
}

export default Home
