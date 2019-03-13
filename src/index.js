const check = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
let before = () => {}
let after = () => {}
if (check) {
  before = (state = {}, action = {}) => {
    console.group('Context action:', action.type)
    console.log('State before action:', state)
    console.log('Full action:', action)
  }

  after = (state = {}) => {
    console.log('State after action:', state)
    console.groupEnd()
  }
}

export default {
  before,
  after,
}
