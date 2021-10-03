import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import selectors from "../../redux/selectors";

export default function PrivateRoute({
  children,
  redirected = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(selectors.getLoggedIn);
  const shouldRedirect = isLoggedIn && redirected;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
}
