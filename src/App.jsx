import "./App.css";
import React from "react";
import Parent from "./Components/Parent";
import Child from "./Components/Child";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import FromParent from "./Components/Qs-4/From-Parent";

function App() {
  return (
    <div className="App">
      <center>
        <h1>React Interview Prep Day-2</h1>
      </center>
      <h2>
        1- What is the Difference between react and react native? Which one is
        library or framework?
      </h2>
      <p>
        ReactJS and React Native are both Facebook natives that offer unmatched
        power to mobile app and web development. The differences between the two
        come down to their functionality and critical purposes. Today, the
        differences between React Native and ReactJS are noticeable on websites
        that are popular all over the world. These two powerful technologies are
        the foundation of many popular websites and mobile applications. The
        conversation examining ReactJS vs. React Native is a common one in the
        app development field. However, even seasoned developers can be unclear
        on the nuances in the React vs React Native argument.
      </p>
      <h3>library or framework</h3>
      <p>
        Developers often use the terms “library” and “framework” as if they were
        the same. But there is a difference. Both libraries and frameworks are
        reusable code written by someone else. Their purpose is to help you
        solve common problems in easier ways. We can use a house as a metaphor
        to explain the difference between these concepts. A library is like
        building your home from scratch, you have the choice to make your house
        as you wish, with any architecture you like, you can sort your rooms in
        the way you like..
      </p>

      <h2>2- What is the package name you are using for routing</h2>
      <p>
        React Router is a standard library system built on top of the React and
        used to create routing in the React application using React Router
        Package.In this Browser Router as Router, Routes and Route and NavLink
        get imported from react-router-dom. React Router DOM enables you to
        implement dynamic routing in a web app. Unlike the traditional routing
        architecture in which the routing is handled in a configuration outside
        of a running app, React Router DOM facilitates component-based routing
        according to the needs of the app and platform.
      </p>

      <h2>3- Routing Implementation ?? </h2>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Parent />} />
          <Route path="/child" element={<Child />} />
        </Routes>
      </BrowserRouter>
      <br />

      <h2>4- How do you pass data from parent to child ?</h2>
      <FromParent />
      <br />

      <h2>5- What is lazy loading in react ?</h2>
      <p>
        Lazy loading is a design pattern for optimizing web and mobile apps. The
        concept of lazy loading is simple: initialize objects that are critical
        to the user interface first and quietly render noncritical items later.{" "}
        <br />
        When you visit a website or use an app, it’s very likely you’re not
        seeing all the available content. Depending on how you navigate and use
        the app, you may never encounter the need for certain components, and
        loading unneeded items costs time and computing resources. Lazy loading
        enables you to render elements on demand, making your app more efficient
        and improving the user experience.
      </p>

      <h2>6- Difference b/w Stateful and stateless Component</h2>
      <h4>Stateless-</h4>
      <p>
        If the behaviour is independent of its state then it can be a stateless
        component. You can use either a function or a class for creating
        stateless components. But unless we need to use a lifecycle hook in your
        components, we should go for function components. There are a lot of
        benefits if you decide to use function components here; they are easy to
        write, understand, and test, a little faster, and you can avoid the this
        keyword altogether.
      </p>

      <h4>Stateful--</h4>
      <p>
        If the behaviour of a component is dependent on the state of the
        component then it can be termed as stateful component. These stateful
        components are always class components and have a state that gets
        initialized in the constructor.
      </p>

      <h4>
        7- How do you switch one component to another, Conditional Rendering
      </h4>
      <big>6. Way to Switch/Navigate from one page to another page</big>
      <p>
        <li>Link</li>
        <li>NavLink</li>
        <li>Redirect Component</li>
        <li>history.push</li>
        <li>history.replace</li>
        <li>
          Link is used to manage the navigation and it worked as an anchor tag.
          Check below code for the demonstration. <br />
          import 'Link' from
          'react-router-dom';
          <br />
        </li>
      </p>
    </div>
  );
}

export default App;
