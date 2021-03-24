import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// const mayorEdad=(edad)=> edad > 18
// const personas={"nombre": "Anthony", "apellido": "Agelvis", "edad": 20}
// const curso={
//   "title": "React desde cero",
//   "image": "https://miro.medium.com/max/3840/0*oZLL-N4dGNlBe4Oh.png",
//   "profesor": 'Beto Quiroga',
//   "price": "50usd"
// }
// const Cursos=(props)=>(
//     <article className="card">
//     <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
//       <img src={`${props.image}`} alt={props.title}/>
//     </div>
//     <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
//         <h3></h3>

//       <div className="s-mb-2 s-main-center">
//         <div className="card__teacher s-cross-center">
//           <div className="card__avatar s-mr-1">
//             <div className="circle img-container">
//               <img src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
//             </div>
//           </div>
//           <span className="small">{props.profesor}</span>
//         </div>
//       </div>
//       <div className="s-main-center">
//         <a className="button--ghost-alert button--tiny" href="#">{`$ ${props.price}`}</a>
//       </div>
//     </div>
//   </article>
// )
const CourseCard = ({ id, image, imageTwo, title, professor, price }) => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl" id={title}>
      <Link to={`/cursos/${id}`}>
        <img src={image} alt={title} />
      </Link>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="center">{title}</h3>

      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src={imageTwo} alt={professor} />
            </div>
          </div>
          <span className="small">{professor}</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://ed.team/">{`$ ${price}`}</a>
      </div>
    </div>
  </article>
)
CourseCard.prototype = {
  title: PropTypes.string,
  image: PropTypes.string,
  imageTwo: PropTypes.string,
  professor: PropTypes.string,
  price: PropTypes.number
}
CourseCard.defaultProps = {
  title: "No hay titulo",
  image: "https://concepto.de/wp-content/uploads/2018/08/Londres-e1533855310803.jpg",
  imageTwo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Taipei_Skyline_2015.jpg",
  professor: "",
  price: "--"
}

export default CourseCard