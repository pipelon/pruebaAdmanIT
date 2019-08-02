import React from 'react';

class Users extends React.Component {

    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        //CONSUMO SERVICIO WEB DE NODEJS
        fetch('http://localhost:3000/users')
                .then(res => res.json())
                .then(users => {
                    users.data.forEach(user => {
                        let data = {
                            id: user.id,
                            name: user.first_name + ' ' + user.last_name,
                            email: user.email,
                            avatar: user.avatar,
                        }
                        this.setState({users: this.state.users.concat([data])});
                    });

                })
                .catch(err => {
                    console.log(err);
                });
    }

    render() {
        return (
                <div className="AppUsers">
                    <h3>Usuarios</h3>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Avatar</th>
                                <th>Nombre</th>
                                <th>Ver</th>
                            </tr>
                        </thead>
                        <tbody>
                
                            {
                                this.state.users.map(
                                        user =>
                                <tr>
                                    <td>
                                        <img src={user.avatar} />
                                    </td>
                                    <td> 
                                        {user.name} 
                                    </td>
                                    <td> 
                                        <a href={`/user/${user.id}`}>Ver m&aacute;s </a>
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>);
    }
}
export default Users