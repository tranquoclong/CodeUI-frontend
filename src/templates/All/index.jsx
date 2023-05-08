import React from "react";
import { Route } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../core/Sidebar";

function AllTemplate(props) {
  return (
    <>
      <Header />
      <div className="root-container root-container--with-navigation">
        <Sidebar history={props.path} />
        <div className="outlet-wrapper">{props.children}</div>
      </div>
      <Footer />
    </>
  );
}

const RouterAllTemplate = ({ path, exact, Component }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={() => (
        <AllTemplate path={path}>
          <Component />
        </AllTemplate>
      )}
    />
  );
};

export default RouterAllTemplate;
