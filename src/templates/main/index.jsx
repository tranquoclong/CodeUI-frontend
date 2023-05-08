import React from "react";
import { Route } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function MainTemplate(props) {
  return (
    <>
      <Header />
      <div className="root-container false">
        <div className="outlet-wrapper">{props.children}</div>
      </div>
      <Footer />
    </>
  );
}

const RouterMainTemplate = ({ path, exact, Component }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={() => (
        <MainTemplate>
          <Component />
        </MainTemplate>
      )}
    />
  );
};

export default RouterMainTemplate;
