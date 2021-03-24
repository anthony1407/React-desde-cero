import React from 'react'
import ReactDOM from 'react-dom'
import App from "./components/App"


// import App from './App'
const root=document.getElementById("root")
// const elemento=React.createElement(componente, propiedades, hijos)
// const elemento=React.createElement("h1", {className: "saludo"}, "Hola mundo")
// const elemento=(
//   <h1 className="saludo">
//       Hola
//   </h1>
// )

// ReactDOM.render(<h1 className="saludo">Hola mundo</h1>, root)

ReactDOM.render(<App />, root)