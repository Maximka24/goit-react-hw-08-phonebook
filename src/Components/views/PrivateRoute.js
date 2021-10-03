import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import selectors from "../../redux/selectors";

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(selectors.getLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="/entry" />}
    </Route>
  );
}
