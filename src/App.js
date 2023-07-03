import { BrowserRouter, Switch } from "react-router-dom";
import { mainRouter, adminRouter, allRouter } from "./configs/router";
import RouterMainTemplate from "./templates/main";
import RouterAdminTemplate from "./templates/admin";
import { ModalContainer } from "./components/Modal";
import RouterAllTemplate from "./templates/All";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const renderMainRouter = () => {
    return mainRouter.map(({ path, exact, Component }, index) => {
      return (
        <RouterMainTemplate
          path={path}
          exact={exact}
          Component={Component}
          key={index}
        ></RouterMainTemplate>
      );
    });
  };
  const renderAllRouter = () => {
    return allRouter.map(({ path, exact, Component }, index) => {
      return (
        <RouterAllTemplate
          path={path}
          exact={exact}
          Component={Component}
          key={index}
        ></RouterAllTemplate>
      );
    });
  };
  const renderAdminRouter = () => {
    return adminRouter.map(({ path, exact, Component }, index) => {
      return (
        <RouterAdminTemplate
          path={path}
          exact={exact}
          Component={Component}
          key={index}
        ></RouterAdminTemplate>
      );
    });
  };
  return (
    <div className="main-container dark">
      <BrowserRouter>
        <Switch>
          {renderAdminRouter()}
          {renderMainRouter()}
          {renderAllRouter()}
        </Switch>
        <ModalContainer />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
