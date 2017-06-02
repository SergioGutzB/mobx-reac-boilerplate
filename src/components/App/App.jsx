import React from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import main from '../../styles/main.scss'

import styles from './App.scss'

@observer
export default class App extends React.Component {


  render () {
    return (
      <div>
        <h1 className={styles.message}>{this.props.store.message}</h1>
        <input className={styles.input} type="text" key={1} onChange={this.props.store.handleMessage} value={this.props.store.message}/>
        <button className={main.btn} onClick={this.props.store.setMessage}>Resetear</button>
        <DevTools />
      </div>
    )
  }
  
}
