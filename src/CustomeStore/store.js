class Store {
  state;

  rootReducer;

  subscribers = {};

  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = this.rootReducer();
  }

  subscribe(key, callback) {
    if (typeof callback === "function") {
      this.subscribers[key] = callback;
      this.subscribers[key](this.state);

      const unsubscribe = () => delete this.subscribers[key];

      return unsubscribe.bind(this);
    }
  }

  dispatch(action) {
    this.state = this.rootReducer(this.state, action);

    Object.values(this.subscribers).forEach((callback) => callback(this.state));
  }
}

export const createStore = (() => {
  let store;
  return (rootReducer) => {
    if (!store) {
      store = new Store(rootReducer);
    }

    return store;
  };
})();
