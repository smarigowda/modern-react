// Counter: useState
// 🐨 you'll need to add {useState} to this import statement
import React, { useState } from 'react'

// 💰 the `useState` hook allows you to use state
// from within function components in react:
// const [name, setName] = useState('Angela')

function Counter() {
  // 🐨 you'll call useState here to get count and setCount
  const [counter, setCounter] = useState(0);
  // 🐨 render the count here and add an onClick handler that increments the count
  const incrementCounter = () => {
    setCounter(counter + 1);
  }
  return <button onClick={ incrementCounter }>{ counter }</button>
}



// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: useState'

export default Usage
