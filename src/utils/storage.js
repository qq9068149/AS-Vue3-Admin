const STORAGE = window.localStorage

const storage = {
  set: (key, val) => {
    if (typeof val !== 'string') {
      val = JSON.stringify(val)
    }
    STORAGE.setItem(key, val)
  },
  get: key => {
    return STORAGE.getItem(key)
  },
  remove: key => {
    STORAGE.removeItem(key)
  },
  clear: () => {
    STORAGE.clear()
  }
}

export default storage
