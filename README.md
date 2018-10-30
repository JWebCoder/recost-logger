# recost-logger
Recost middleware to log all state changes when on development mode

## Instalation

`npm install --save recost-logger`

## Usage

```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import initContext, { Provider } from 'recost'
import logger from 'recost-logger'
import reducer from './reducer'

// define the initial state for the application
const initialState = {
  // ...
}

initContext(state, reducer, [logger])

// and just render :)
ReactDOM.render(
  <Provider>
    <App/>
  </Provider>,
  document.getElementById('root')
);
```
