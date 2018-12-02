// Counter: useEffect
// 🐨 2. you'll also want useEffect here!
import React, { useState, useEffect } from 'react'

// We moved things back to within the Counter component for the exercise.

// 👇
// this function which is a react component is run every time state is updated/ changed.
function Counter() {
  // 🐨 1. initialize the state to the value from localStorage
  // 💰 Number(window.localStorage.getItem('count') || 0)
  const [count, setCount] = useState(Number(window.localStorage.getItem('count') || 0));
  // 👇
  console.log('read from local storage...this happens every time the state is updated/ changed.');
  // 👇
  // state is updated, when the user clicks on the button
  const incrementCount = () => setCount(count + 1);
  // 3. 🐨 Here's where you'll use `useEffect`.
  // The callback should set the `count` in localStorage.
  useEffect(() => {
    // 👇
    console.log('useEffect is run. This happens every time the component is rendered.')
    console.log('A component is rendered when state changes or when parent is rendered');
    window.localStorage.setItem('count', count);
  })
  return <button onClick={ incrementCount }>{ count }</button>
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: useEffect'

export default Usage
