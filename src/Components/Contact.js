import React,{ Component} from 'react';
import axios from 'axios';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:[]
        }
    }

    componentDidMount(){
        axios.get('https://run.mocky.io/v3/619850c8-8785-408f-8690-bdfb678e006e').then(
            res => this.setState({user:res.data.data})
        )
        
    }

    render(){
        
        return(
        <div>
            <h1>Hey iam Contact</h1>
            <ul>
                {this.state.user.map((user) =>{
                    return <li key={user.id}>{ user.email}</li>
                })}
            </ul>
        </div>
    )
}}

export default Contact;