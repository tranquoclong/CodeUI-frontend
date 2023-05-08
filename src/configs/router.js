import All from "../pages/main/All";
import Button from "../pages/main/Button";
import Card from "../pages/main/Card";
import Checkbox from "../pages/main/Checkbox";
import Create from "../pages/main/Create";
import Creators from "../pages/main/Creators";
import Detail from "../pages/main/Detail";
import Err from "../pages/main/Err";
import Home from "../pages/main/Home";
import Input from "../pages/main/Input";
import Loader from "../pages/main/Loader";
import Profile from "../pages/main/Profile";
import Switch from "../pages/main/Switch";

export const mainRouter = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/creators",
    exact: true,
    Component: Creators,
  },
  {
    path: "/create",
    exact: true,
    Component: Create,
  },
  //   {
  //     path: "/myCarRegisterMode",
  //     exact: true,
  //     Component: MyCarRegisterMode,
  //   },
  //   {
  //     path: "/howItWork",
  //     exact: true,
  //     Component: HowItWork,
  //   },
  //   {
  //     path: "/city/:code",
  //     exact: true,
  //     Component: CityCode,
  //   },
  //   {
  //     path: "/car-detail/:carId",
  //     exact: true,
  //     Component: CarDetail,
  //   },
  //   {
  //     path: "/book-detail/:bookId",
  //     exact: true,
  //     Component: CarDetailBook,
  //   },
  //   {
  //     path: "/carSeting/:carId",
  //     exact: true,
  //     Component: CarSetting,
  //   },
  //   {
  //     path: "/search",
  //     exact: true,
  //     Component: Search,
  //   },
  //   {
  //     path: "/voucher/",
  //     exact: true,
  //     Component: VouCher,
  //   },
  //   {
  //     path: "/car-book",
  //     exact: true,
  //     Component: CarBook,
  //   },
  //   {
  //     path: "/car-like",
  //     exact: true,
  //     Component: CarLike,
  //   },
];

export const allRouter = [
  {
    path: "/all",
    exact: true,
    Component: All,
  },
  {
    path: "/button",
    exact: true,
    Component: Button,
  },
  {
    path: "/checkbox",
    exact: true,
    Component: Checkbox,
  },
  {
    path: "/switch",
    exact: true,
    Component: Switch,
  },
  {
    path: "/card",
    exact: true,
    Component: Card,
  },
  {
    path: "/spinner",
    exact: true,
    Component: Loader,
  },
  {
    path: "/input",
    exact: true,
    Component: Input,
  },
  {
    path: "/profile/:login",
    exact: true,
    Component: Profile,
  },
  {
    path: "/detail/:postId",
    exact: true,
    Component: Detail,
  },
  {
    Component: Err,
  },
];

export const adminRouter = [
  //   {
  //     path: "/dashboard",
  //     exact: true,
  //     Component: Dashboard,
  //   },
];
