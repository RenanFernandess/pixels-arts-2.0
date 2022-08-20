class StateControl {
  constructor() {
    this.state = {};
  }

  getSavedState() { this.state = getItemSessionStorage('state') || {}; }

  setState(object, callback) {
    this.state = Object.assign(this.state, object);
    console.log('state: ', this.state);
    saveItemSessionStorage('state', this.state);
    callback();
  }
}

if (typeof module !== 'undefined') {
  module.exports = { StateControl };
}
