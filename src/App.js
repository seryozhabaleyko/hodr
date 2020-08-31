import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import routes from './routes';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';

import AuthProvider from './components/Auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import Header from './components/Header';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Games, { GamesCreatePage } from './pages/Games';
import Game from './pages/Game';
import News, { NewsCreate } from './pages/News';
import Articles from './pages/Articles';
import Reviews from './pages/Reviews';
import User from './pages/User';
import UserEdit from './pages/UserEdit';
import NewsSingle from './pages/NewsSingle';

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

                        <PrivateRoute
                            path={['/user/:username', '/profile/:username']}
                            component={User}
                            exact
                        />
                        <PrivateRoute path="/user/:username/edit" component={UserEdit} exact />

                        <Route path="/news" component={News} exact />
                        <Route path="/news/create" component={NewsCreate} exact />
                        <Route path="/news/:slug" component={NewsSingle} exact />

                        {routes.map((route, index) => (
                            <RouteWithSubRoutes {...route} key={index} />
                        ))}

                        <PublicRoute path="/signup" component={SignUp} />
                        <PublicRoute path="/login" component={Login} />

                        <Route path="/games" exact>
                            <Redirect to="/games/popular" />
                        </Route>
                        <Route path="/games/:something" exact>
                            <Games />
                        </Route>
                        <Route path="/games/create" component={GamesCreatePage} exact />

                        <Route path="/game/:slug" component={Game} />

                        <Route
                            path={['/articles', '/articles/:category']}
                            component={Articles}
                            exact
                        />

                        <Route path="/reviews" component={Reviews} exact />

                        <Route path="*" component={NoMatch} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;
