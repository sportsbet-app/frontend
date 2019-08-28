import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from "./Utils/authZero"

import config from "./auth_config.json"
import reducer from './Reducers'
import App from './App'
import './index.css'

// A function that routes the user to the right place
// after login

const onRedirectCallback = appState => {
    window.history.replaceState(
        {},
        document.title,
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    )
}

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Auth0Provider
                domain={config.domain}
                client_id={config.clientId}
                redirect_uri={window.location.origin}
                onRedirectCallback={onRedirectCallback}
            >
                <App />
            </Auth0Provider>
        </Router>
    </Provider>,
    document.getElementById('root')
)
