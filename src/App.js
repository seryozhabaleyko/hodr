import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './routes';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';

import AuthProvider from './components/Auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import Header from './components/Header';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';

import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Games from './pages/Games';
import GamesPopular from './pages/GamesPopular';
import Game from './pages/Game';
import News, { NewsCreate } from './pages/News';
import Articles from './pages/Articles';
import Reviews from './pages/Reviews';
// import Admin from './pages/Admin';
import User from './pages/User';
import UserEdit from './pages/UserEdit';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <main className="main">
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>

                        <PrivateRoute path="/profile" component={Profile} />

                        <PrivateRoute path="/user/:userId" component={User} exact />
                        <PrivateRoute path="/user/:userId/edit" component={UserEdit} />

                        {/* <PrivateRoute path="/admin" component={Admin} /> */}

                        <Route path="/news" component={News} exact />
                        <Route path="/news/create" component={NewsCreate} exact />

                        {routes.map((route, index) => (
                            <RouteWithSubRoutes {...route} key={index} />
                        ))}

                        <PublicRoute path="/signup" component={SignUp} />
                        <PublicRoute path="/login" component={Login} />

                        <Route path="/games" component={Games} exact />
                        <Route path="/games/popular" component={GamesPopular} />

                        <Route path="/game/:slug" component={Game} />

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
        </AuthProvider>
    );
}

export default App;
