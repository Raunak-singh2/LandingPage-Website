import React from "react";

const Home = () => {
  return (
    <div className="alert alert-primary" role="alert">
      <h1>Home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        ullam cumque aut, minus asperiores tenetur minima omnis explicabo, error
        saepe quo eligendi expedita ut! Voluptate, perferendis tempore veniam
        odio facilis modi earum sint quidem quod, vitae similique suscipit quam
        in eaque! Quos ratione voluptatibus doloribus cupiditate quisquam harum
        est eos!
      </p>
      <div
        className="card"
        style={{
          marginTop: "10px",
          width: "50%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img src="" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card" style={{ marginTop: "10px", width: "50%" }}>
        <img src="lap.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
