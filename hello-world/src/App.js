import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeeting from "./components/UserGreeeting";
import NameList from "./components/NameList";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FrangmentDemo from "./components/FrangmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";

class App extends Component {
  render() {
    return (
      <div className="App">


        <ParentComp></ParentComp>
        {/* <Table></Table> */}

        {/* <FrangmentDemo></FrangmentDemo> */}
        {/* <LifecycleA></LifecycleA> */}
        {/* <Form></Form> */}
        {/* <NameList/> */}

        {/* <UserGreeeting></UserGreeeting> */}

        {/* <ParentComponent/> */}

        {/* <EventBind></EventBind> */}
        {/* <FunctionClick/> */}
        {/* <ClassClick/> */}

        {/* <Counter/> */}

        {/* <Message/> */}

        {/* <Greet name="Raj" heroName="Batman">
          <p>This is Children porps</p>
        </Greet> */}

        {/* <Greet name="Yagnik" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Chirag" heroName="Ironman" /> */}

        {/* <Welcome name="Raj" heroName="Batman"></Welcome> */}
        {/* <Welcome name="Yagnik" heroName="Superman"></Welcome>
        <Welcome name="Chirag" heroName="Ironman"></Welcome>  */}
      </div>
    );
  }
}

export default App;
