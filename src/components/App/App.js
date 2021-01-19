import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
function App(props) {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/saved-news'>
                    <SavedNews
                    />
                </Route>
                <Route path='/'>
                    <Main
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
