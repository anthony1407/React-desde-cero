import React, { Component } from "react"
import axios from "axios"
import UserCard from "../Molecules/UserCard"


class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users', { method: 'get'})
    //     .then(response=> response.json())
    //     .then(response2=>{
    //         this.setState({
    //             users: response2
    //         })
    //     })
    // }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(resp =>
                this.setState({
                    users: resp.data

                })
            )
    }
    render() {
        const { users } = this.state
        return (
            <div className="ed-grid">
                <h1>Usuarios</h1>
                <div className="ed-grid s-grid-2 m-grid-3 lg-grid-4">
                    {
                        users.map(user => (
                            <UserCard
                                key={user.id}
                                name={user.name}
                                username={user.username}
                                email={user.email}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default Users