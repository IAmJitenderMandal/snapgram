import React, { useContext, useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.styles.scss";
import Layout from "./components/layout/Layout.component";

import appReducer from "./context/appReducer";
import AppContext from "./context/appContext";

function App() {
  let initState = { userId: null, userEmail: null, all_posts: [] };
  let [state, dispatch] = useReducer(appReducer, initState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <Router>
        <div className="app">
          <Layout />
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
