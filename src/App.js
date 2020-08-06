import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { auth } from './services/firebase';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import Header from './components/Header';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Games from './pages/Games';
import GamesPopular from './pages/GamesPopular';
import Game from './pages/Game';
import News from './pages/News';
import Articles from './pages/Articles';
import Reviews from './pages/Reviews';
import Admin from './pages/Admin';

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

                        <PrivateRoute
                            path="/admin"
                            authenticated={this.state.authenticated}
                            component={Admin}
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
                        <Route path="/games/popular">
                            <GamesPopular />
                        </Route>

                        <Route path="/game/:slug" component={Game} exact />

                        <Route path="/news">
                            <News />
                        </Route>
                        <Route path="/articles">
                            <Articles />
                        </Route>
                        <Route path="/reviews">
                            <Reviews />
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
