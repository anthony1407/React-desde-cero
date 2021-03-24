import React from "react"
import CourseCard from "../Molecules/CourseCard"

const courses = [
  {
    id: 1,
    title: "React desde cero",
    image: "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    professor: "Beto Quiroga",
    price: 50,
    imageTwo: "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg"
  },
  {
    id: 2,
    title: "Html desde cero",
    image: "https://edteam-media.s3.amazonaws.com/courses/original/26557907-0555-427e-a40c-6ff207f98d72.png",
    professor: "Alvaro Felipe",
    price: 30,
    imageTwo: "https://edteam-media.s3.amazonaws.com/courses/original/26557907-0555-427e-a40c-6ff207f98d72.png"
  },
  {
    id: 3,
    title: "CSS desde cero",
    image: "https://edteam-media.s3.amazonaws.com/courses/original/daa72e4e-c5d0-406e-9f6d-01e646bf719b.png",
    professor: "Alvaro Felipe",
    price: 40,
    imageTwo: "https://edteam-media.s3.amazonaws.com/courses/original/daa72e4e-c5d0-406e-9f6d-01e646bf719b.png"
  },
  {
    id: 4,
    title: "Animaciones CSS desde cero",
    image: "https://i.ytimg.com/vi/rbqVgBH0Wtg/maxresdefault.jpg",
    professor: "Alvaro Felipe",
    price: 40,
    imageTwo: "https://i.ytimg.com/vi/rbqVgBH0Wtg/maxresdefault.jpg"
  },
  {
    id: 5,
    title: "Sass desde cero",
    image: "https://i.ytimg.com/vi/3uFjh2ew86E/maxresdefault.jpg",
    professor: "Alvaro Felipe",
    price: 40,
    imageTwo: "https://i.ytimg.com/vi/3uFjh2ew86E/maxresdefault.jpg"
  },
  {
    id: 6,
    title: "RWD desde cero",
    image: "https://edteam-media.s3.amazonaws.com/courses/original/adf98e70-ade6-465e-b32c-2544b0bbded2.png",
    professor: "Alvaro Felipe",
    price: 20,
    imageTwo: "https://edteam-media.s3.amazonaws.com/courses/original/adf98e70-ade6-465e-b32c-2544b0bbded2.png"
  },
  {
    id: 7,
    title: "Javascript desde cero",
    image: "https://i.ytimg.com/vi/j9oy_rMRfAc/maxresdefault.jpg",
    professor: "Alvaro Felipe",
    price: 20,
    imageTwo: "https://i.ytimg.com/vi/j9oy_rMRfAc/maxresdefault.jpg"
  },

]
const CoursesGrid = () => (
  <div className="ed-grid m-grid-3">
    {
      courses.map(course => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          image={course.image}
          professor={course.professor}
          price={course.price}
          imageTwo={course.imageTwo}
        />))
    }
  </div>
)

export default CoursesGrid