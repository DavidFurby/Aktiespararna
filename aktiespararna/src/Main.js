import React from "react";
import "./App.css";
import Login from "./LoginMenu/Login/Login";
import Registrering from "./LoginMenu/Registrering/Registrering";
import GlömtLösenord from "./LoginMenu/Glömt lösenord/GlömtLösenord"
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./HeadMenu/Hem/Home";
import Portfolio from "./HeadMenu/Min Portfolio/Portfolio";
import Settings from "./HeadMenu/UserSettings/Settings";
import Sidebar from "./HeadMenu/Components/SideBar";
import Mainmenu from "./HeadMenu/HeadMenu"



const LoginPaths = () => {
  return (
    <div id="loginMenu">
      <Route path="/login" component={Login} />
        <Route path="/registration" component={Registrering}/>
        <Route path="/forgotpassword" component={GlömtLösenord}/>
        </div>
        );
      };
      const MenuPaths = () => {
        return (
          <div id="headMenu">
            <Route path="/mainmenu" component={Mainmenu} />
          </div>
        );
      };

const Main = () => {
  return (
    <BrowserRouter>
    <Switch>
    <div className="App">
    <LoginPaths/>
    <MenuPaths/>
    </div>
    </Switch>
    </BrowserRouter>

  );
};

export default Main;
