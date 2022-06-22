import "./App.css";

import LayoutForm from "./components/Layout/LayoutForm.tsx";
import DirectoriesTree from "./components/Folders/DirectoriesTree.tsx";
import PageNotFound from "./components/Layout/PageNotFound.tsx";

import { Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <LayoutForm />
        </Route>
        <Route path="/directories">
          <DirectoriesTree />
        </Route>
        <Route path="/*">
          <PageNotFound />
        </Route>
      </Switch>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
