import React from "react";
import './App.css';
import api from "./libs/api";
import { Context } from "./libs/context";

// Components
import ExtendedMenu from "./components/Menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Views
import Dashboard from "./views/Dashboard";
import ViewUser from "./views/ViewUser";
import NotFound from "./views/NotFound";
import Posts from "./views/Posts";
import AddPost from "./views/AddPost";
import ModifyPost from "./views/ModifyPost"

// Assets
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  static contextType = Context;

  componentDidMount() {
		const { updateUsers, updatePosts } = this.context;
		api.get("/users").then(response => {
			updateUsers(response.data);
    })
    
    api.get("/posts").then(res => {
      updatePosts(res.data);
    });
	}

  render() {
    return (
      <div className="App">
        <Router>
          <ExtendedMenu />
          <div className="page">
              <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/user" component={ViewUser} />
                <Route exact path="/user/:id" component={ViewUser} />
                <Route exact path="/posts" component={Posts} />
                <Route exact path="/posts/create" component={AddPost} />
                <Route exact path="/posts/modify/:postId" component={ModifyPost} />
                <Route exact path="/not-found" component={NotFound} />
                <Redirect exact from="/" to="/dashboard" />
                <Redirect from="*" to="/not-found" />
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
