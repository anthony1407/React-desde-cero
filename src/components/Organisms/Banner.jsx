import React from "react"

const Banner = () => (
    <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
                <img className="main-banner__img" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" alt="Banner" />
                <div className="main-banner__data s-center">
                    <p className="t2 s-mb-0">Título del banner</p>
                    <p> Subtítulo del banner</p>
                    <a href="https://ed.team/" className="button">Botón del banner</a>
                </div>
            </div>
        </div>
    </div>
)
export default Banner