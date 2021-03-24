import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "../styles/style.scss"

import CoursesGrid from './Organisms/CoursesGrid'
import Course from "./Pages/Course"
import MainMenu from './Organisms/Header'
import History from './Pages/History'
import Form from './Pages/Form'
import Home from './Pages/Home'


const App = () => (
  <>
    {/* <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" alt="Banner"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Título del banner</p>
        <p> Subtítulo del banner</p>
        <a href="https://ed.team/" className="button">Botón del banner</a>
      </div>
    </div>
  </div>
</div> */}
    {/* <div className="ed-grid m-grid-3">
    {
      cursos.map(curso=> <Cursos title={curso.title} image={curso.image} profesor={curso.profesor}
        imageTwo={curso.imageTwo} price={curso.price}
      />)
    }
  </div> */}

    {/* Estado de componentes */}
    {/* <Banner /> */}
    {/* <Formulario name="Registro" /> */}
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cursos/:id" component={Course} />
        <Route path="/historial/:valor" component={History} />
        <Route path="/historial" component={History} />
        <Route path="/cursos" component={CoursesGrid} />
        <Route path="/formulario" exact component={() => <Form name="Registro" />} />
        <Route component={() => (
          <div
            className="ed-grid">
            <h2>404 Pagina no encontrada</h2>
          </div>
        )} />
      </Switch>
    </Router>
  </>
)


export default App
