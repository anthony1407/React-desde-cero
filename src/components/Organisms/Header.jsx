import React from "react"
import Logo from "../Molecules/Logo"
import Nav from "../Molecules/Nav"

const MainMenu = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <Logo />
            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end">
                <Nav />
                <div className="main-menu-toggle to-l">
                </div>
            </div>
        </div>
    </header>
)
export default MainMenu