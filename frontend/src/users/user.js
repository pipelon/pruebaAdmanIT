import React from 'react';

class User extends React.Component {

    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        //OBTIENE EL PARAMETRO DEL ID DEL USUARIO
        const {match: {params}} = this.props;
        //CONSUMO SERVICIO WEB DE NODEJS
        fetch('http://localhost:3000/user/' + params.userId)
                .then(res => res.json())
                .then(users => {
                    let data = {
                        name: users.data.first_name + ' ' + users.data.last_name,
                        email: users.data.email,
                        avatar: users.data.avatar,
                    }
                    this.setState({users: this.state.users.concat([data])});
                })
                .catch(err => {
                    console.log(err);
                });
    }

    render() {

        return (
                <div className="AppUsers">
                    <h3>Usuario</h3>
                    <table className="table table-bordered table-striped">
                        {
                            this.state.users.map(user =>
                                <tr>
                                    <th> 
                                        Avatar 
                                    </th>
                                    <td> 
                                        <img src={user.avatar} />
                                    </td>
                                    <th> 
                                        Nombre 
                                    </th>
                                    <td> 
                                        {user.name} 
                                    </td>
                                    <th> 
                                        Email
                                    </th>
                                    <td> 
                                        {user.email} 
                                    </td>
                                </tr>
                            )
                        }
                
                    </table>
                </div>);
    }
}
export default User