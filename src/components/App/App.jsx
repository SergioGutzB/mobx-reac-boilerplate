import React from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

@observer
export default class App extends React.Component {


  render () {
    return (
      <div>
        <h1>{this.props.store.message}</h1>
        <input type="text" key={1} onChange={this.props.store.handleMessage} value={this.props.store.message}/>
        <button onClick={this.props.store.setMessage}>Resetear</button>
        <DevTools />
      </div>
    )
  }
  
}
