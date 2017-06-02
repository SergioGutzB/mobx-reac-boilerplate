import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App/App'
import { appStore } from './stores/AppStore/AppStore'


ReactDOM.render(
  <AppContainer>
    <App store={appStore} />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./components/App/App.jsx', function() {
    ReactDOM.render(
      <AppContainer>
        <App store={appStore} />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
