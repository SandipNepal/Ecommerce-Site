import React, { useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
// import Axios from "axios";
function Form() {
  // const url = "http://localhost:3001/api";
  const [data, setData] = useState({
    fname: "",
    lname: "",
    address: "",
    contact: "",
    email: "",
  });
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  
  function validate() {
    
  }

  // function submit(e) {
  //   e.preventDefault();
  //   Axios.post(url, {
  //     fname: data.fname,
  //     lname: data.lname,
  //     address: data.address,
  //     contact: data.contact,
  //     email: data.email,
  //   }).then((res) => {
  //     console.log(res.data);
  //   });
  // }
  return (
    <div>
      <Nav />
      <form className="form" method="post" action="/api">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          auctor velit in mauris gravida, vel tristique neque sollicitudin.
          Quisque at bibendum purus, sit amet pulvinar turpis. Donec rhoncus
          ante mollis, condimentum felis eu, fermentum tellus. Fusce suscipit
          dignissim ligula quis tempor. Nulla nec placerat nisi. Etiam mi nunc,
          posuere a quam et, tempus tempor turpis. Etiam sit amet elit vel nisi
          convallis egestas. Nunc mi ligula, suscipit vel metus eu, laoreet
          scelerisque nunc.
        </p>
        <label for="fname">First name:</label>
        <br />
        <input
          onChange={(e) => handle(e)}
          id="fname"
          value={data.fname}
          type="text"
          name="firstName"
        ></input>
        <br />
        <br />
        <label for="lname">Last name:</label>
        <br />
        <input
          onChange={(e) => handle(e)}
          id="lname"
          value={data.lname}
          type="text"
          name="lastName"
        ></input>
        <br />
        <br />
        <label for="address">Address:</label>
        <br />
        <input
          type="text"
          onChange={(e) => handle(e)}
          id="address"
          value={data.address}
          name="address"
        ></input>
        <br />
        <br />
        <label for="contact">Contact:</label>
        <br />
        <input
          type="text"
          onChange={(e) => handle(e)}
          id="contact"
          value={data.contact}
          name="contact"
        ></input>
        <br />
        <br />
        <label for="email">Email:</label>
        <br />
        <input
          type="email"
          onChange={(e) => handle(e)}
          id="email"
          value={data.email}
          name="email"
        ></input>
        <br />
        <br />
        <button className="pageButton" type="submit" onSubmit={validate()}>
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default Form;
