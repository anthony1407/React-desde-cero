import React from 'react';
import "./styles/style.scss";
import Cursos from "./Cursos";

const cursos=[
  {
    title: "React desde cero",
    image: "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    profesor: "Beto Quiroga",
    price: 50,
    imageTwo: "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg"
  },
  {
    title: "Html desde cero",
    image: "https://edteam-media.s3.amazonaws.com/courses/original/26557907-0555-427e-a40c-6ff207f98d72.png",
    profesor: "Alvaro Felipe",
    price: 30,
    imageTwo: "https://edteam-media.s3.amazonaws.com/courses/original/26557907-0555-427e-a40c-6ff207f98d72.png"
  },
  {
    title: "CSS desde cero",
    image: "https://edteam-media.s3.amazonaws.com/courses/original/daa72e4e-c5d0-406e-9f6d-01e646bf719b.png",
    profesor: "Alvaro Felipe",
    price: 40,
    imageTwo: "https://edteam-media.s3.amazonaws.com/courses/original/daa72e4e-c5d0-406e-9f6d-01e646bf719b.png"
  },{
    title: "Animaciones CSS desde cero",
    image: "https://i.ytimg.com/vi/rbqVgBH0Wtg/maxresdefault.jpg",
    profesor: "Alvaro Felipe",
    price: 40,
    imageTwo: "https://i.ytimg.com/vi/rbqVgBH0Wtg/maxresdefault.jpg"
  },{
    title: "Sass desde cero",
    image: "https://i.ytimg.com/vi/3uFjh2ew86E/maxresdefault.jpg",
    profesor: "Alvaro Felipe",
    price: 40,
    imageTwo: "https://i.ytimg.com/vi/3uFjh2ew86E/maxresdefault.jpg"
  },{
    title: "RWD desde cero",
    image: "https://edteam-media.s3.amazonaws.com/courses/original/adf98e70-ade6-465e-b32c-2544b0bbded2.png",
    profesor: "Alvaro Felipe",
    price: 20,
    imageTwo: "https://edteam-media.s3.amazonaws.com/courses/original/adf98e70-ade6-465e-b32c-2544b0bbded2.png"
  },{
    title: "Javascript desde cero",
    image: "https://i.ytimg.com/vi/j9oy_rMRfAc/maxresdefault.jpg",
    profesor: "Alvaro Felipe",
    price: 20,
    imageTwo: "https://i.ytimg.com/vi/j9oy_rMRfAc/maxresdefault.jpg"
  },
  
]
const App=()=> (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" alt="Banner"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Título del banner</p>
        <p> Subtítulo del banner</p>
        <a href="" className="button">Botón del banner</a>
      </div>
    </div>
  </div>
</div>
  <div className="ed-grid m-grid-3">
    {
      cursos.map(curso=> <Cursos title={curso.title} image={curso.image} profesor={curso.profesor}
        imageTwo={curso.imageTwo} price={curso.price}
      />)
    }
  </div>
  </>
)


export default App;
