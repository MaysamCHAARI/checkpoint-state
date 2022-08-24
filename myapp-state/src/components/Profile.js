import React, { Component } from "react";

class Profile extends Component {
  render() {
    const { name, Biographie, Profession, Image } = this.props;
    return (
      <div>
        <h1 style={{ fontFamily: "cursive" }}>Name: {name}</h1>
        <img src={Image}></img>
        <h2 style={{ fontFamily: "cursive" }}>Biographie:{Biographie}</h2>
        <h3 style={{ fontFamily: "cursive" }}> Profession:{Profession}</h3>
      </div>
    );
  }
}

export default Profile;
