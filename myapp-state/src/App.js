import React, { Component } from "react";
import Profile from "./components/Profile";
import imgprofile from "./imgprofile.jpg";
export default class App extends Component {
  constructor(Profile) {
    super(Profile);
    this.state = {
      fullName: "Chaari Maysam",
      ppic: imgprofile,
      Bio: "Age:26 Interest:design,coding",
      Profession: "Student ",
      show: true,
    };
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleShow}>
          {this.state.show ? "HIDE" : "SHOW"}
        </button>

        {this.state.show ? (
          <Profile
            name={this.state.fullName}
            Biographie={this.state.Bio}
            Profession={this.state.Profession}
            Image={this.state.ppic}
          />
        ) : (
          "n'affiche rien"
        )}
      </div>
    );
  }
}
