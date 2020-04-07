import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

// import SignIn from "./views/SignIn";
import Home from "./views/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

const App = () => (
  <Router>
    <Home />
  </Router>
);

export default App;

// {routes.map(
//   ({ path, exact, layout: Layout, component: Component }, index) => {
//     return (
//       <Router>
//    <Switch>
//       <Route>
//        <Layout>
//          <Home />
//        </Layout>
//       </Route>
//     </Switch>
//     </Router>

// import React from "react";
// import "./App.css";

// import Home from "./views/Home";

// const App = () => <Home />;

// export default App;

// <Router>
//   <Switch>
//     {routes.map(
//       ({ path, exact, layout: Layout, component: Component }, index) => {
//         return (
//           <Route
//             key={index}
//             path={path}
//             exact={exact}
//             render={() => (
//               <Layout>
//                 <Component />
//               </Layoutż
//             )}
//           />
//         );
//       }
//     )}
//   </Switch>
// </Router>
