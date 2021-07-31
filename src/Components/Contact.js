import React, { Component } from "react";
import axios from "axios";
import './Contact.scss';
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://run.mocky.io/v3/619850c8-8785-408f-8690-bdfb678e006e")
      .then((res) => this.setState({ user: res.data.data }));
  }

  render() {
    return (
      <div>
        <h1>These are Contact Details</h1>
        <ol>
          {this.state.user.map((user) => {
            return (
              <div>
                <div className="user_details">
                  <li key={user.id}>
                    {user.email} <br />
                    {user.first_name} <br />
                    {user.last_name}
                  </li>                  
                  <img src={user.avatar} alt={user.first_name} />
                </div>
                <hr/>
              </div>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Contact;
