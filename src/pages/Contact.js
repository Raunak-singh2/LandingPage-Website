import React from "react";

const Contact = () => {
  return (
    <div className="alert alert-primary" role="alert">
      <h1>Contact page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        ullam cumque aut, minus asperiores tenetur minima omnis explicabo, error
        saepe quo eligendi expedita ut! Voluptate, perferendis tempore veniam
        odio facilis modi earum sint quidem quod, vitae similique suscipit quam
        in eaque! Quos ratione voluptatibus doloribus cupiditate quisquam harum
        est eos!
      </p>
      <div  className="mb-3">
        <label for="exampleFormControlInput1"  className="form-label">
          Email address
        </label>
        <input
          type="email"
           className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div  className="mb-3">
        <label for="exampleFormControlTextarea1"  className="form-label">
          Example textarea
        </label>
        <textarea
           className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
};
export default Contact;
