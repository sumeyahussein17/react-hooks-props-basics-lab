import React from "react";
import Home from "./Home";
import About from "./About";

function App() {
  const user = {
    name: "John Doe",
    city: "New York",
    bio: "Full-stack developer who loves React!",
    github: "https://github.com/johndoe",
    linkedin: "https://www.linkedin.com/in/johndoe/"
  };

  return (
    <div>
      <Home name={user.name} city={user.city} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;
