import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Router>
                <Header />
                <main className="main">
                    <Switch>
                        <Route path="/">Home</Route>
                    </Switch>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
