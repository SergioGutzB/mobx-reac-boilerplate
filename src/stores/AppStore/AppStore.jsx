import { observable, action } from 'mobx'

class AppStore {
  @observable message = ""

  constructor() {
    this.message = "Hello Word with ReactJS"
  }

  @action handleMessage = (message) => {
    this.message = message.target.value
  }

  setMessage = () => {
    this.message = "Hello Word with ReactJS"
  }
}

export let appStore = new AppStore
