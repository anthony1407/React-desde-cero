import React, { Component } from "react"

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            date: new Date().toLocaleTimeString()
        }
        // this.setState({})
        this.changeName = this.changeName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeDate = this.changeDate.bind(this)
    }
    changeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    changeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    changeDate() {
        this.setState({
            date: new Date().toLocaleTimeString()
        })
    }


    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario {this.props.name}</h1>
                <h2>{this.state.date}</h2>
                <form id="form-element">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre completo</label>
                            <input
                                type="text"
                                onChange={this.changeName}

                            />
                        </div>
                        <div className=" form__item">
                            <label>Correo electrónico</label>
                            <input type="email"
                                onChange={this.changeEmail}
                            />
                        </div>
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.name}`}</h2>
                    <span>{`Tu email es: ${this.state.email}`}</span>
                </div>
            </div>
        )
    }
    componentDidMount() {
        const element = document.getElementById("form-element")
        console.log(element)
        this.IntervalDate = setInterval(() => {
            this.changeDate()
        }, 1000)



    }
    componentDidUpdate(prevProps, prevState) {
        // console.log(prevProps, prevState)
    }
    componentWillUnmount() {
        clearInterval(this.IntervalDate)
    }
}
export default Form