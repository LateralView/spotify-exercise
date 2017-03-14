export const types = {
  SET_NAME: 'SET_NAME'
}

export const actions = {
  setName(name) {
    return {
      type: types.SET_NAME,
      name
    }
  }
}