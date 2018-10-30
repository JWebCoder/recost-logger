const check = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
let before = () => {}
let after = () => {}
if (check) {
  before = (state = {}, action = {}) => {
    console.log('State before action:', state)
    console.log('Full action:', action)
  }

  after = (state = {}) => {
    console.log('State after action:', state)
  }
}

export default {
  before,
  after,
}
