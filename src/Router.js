import React, { Component } from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import { Home } from "./Components/Home";
import { Dashboard } from "./Components/Dashboard";
import { Login, Register } from "./Components/Authorization";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="Home">
          <Scene key="HomePage" component={Home} title="Ana Sayfa" initial />
          <Scene key="Login" component={Login} title="Oturum Aç" />
          <Scene key="Register" component={Register} title="Kayıt Ol" />
        </Scene>
        <Scene key="Dashboard">
          <Scene rightTitle=" Oturumu Kapat"
            onRight={() => Actions.Home()} 
            key="DashboardPage" 
            component={Dashboard} 
            title="Hoşgeldiniz :)" 
            initial
            />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
