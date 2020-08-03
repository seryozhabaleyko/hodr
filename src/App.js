import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';

import GamePage from './components/GamePage';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Games from './pages/Games';
import News from './pages/News';
import Articles from './pages/Articles';
import ReviewsPage from './components/ReviewsPage';

import { auth } from './services/firebase';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) =>
                authenticated === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }
        />
    );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) =>
                authenticated === false ? <Component {...props} /> : <Redirect to="/profile" />
            }
        />
    );
}

class App extends Component {
    constructor() {
        super();

        this.state = {
            authenticated: false,
            loading: true,
        };
    }

    componentDidMount() {
        auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authenticated: true,
                    loading: false,
                });
            } else {
                this.setState({
                    authenticated: false,
                    loading: false,
                });
            }
        });
    }

    render() {
        return this.state.loading === true ? (
            <h2>Loading...</h2>
        ) : (
            <Router>
                <Header />
                <main className="main">
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>

                        <PrivateRoute
                            path="/profile"
                            authenticated={this.state.authenticated}
                            component={Profile}
                        />

                        <PublicRoute
                            path="/signup"
                            authenticated={this.state.authenticated}
                            component={Signup}
                        />

                        <PublicRoute
                            path="/login"
                            authenticated={this.state.authenticated}
                            component={Login}
                        />

                        <Route path="/games" exact>
                            <Games />
                        </Route>
                        <Route path="/game/:slug" exact>
                            <GamePage />
                        </Route>
                        <Route path="/news">
                            <News />
                        </Route>
                        <Route path="/articles">
                            <Articles />
                        </Route>
                        <Route path="/reviews">
                            <ReviewsPage />
                        </Route>
                        <Route path="*" component={NoMatch} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        );
    }
}

export default App;
