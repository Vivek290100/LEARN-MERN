import React from 'react'
import CounterApp from './components/CounterApp'
import Props from './components/props'
import Counter from "./pages/Counter"
import ListandKeys from './pages/ListandKeys'
import UseEffectHook from "./pages/UseEffectHook"
import InfiniteScrollList from './pages/InfiniteScrollList'
import MyButton from './pages/UseRef'
import ErrorBoundary from './components/ErrorBoundary'
import InfiniteScrollwithLazy from './components/InfiniteScrollwithlazy'
import New  from "./pages/new" 
const App = () => {
  return (
    <div>
      <h1>this is home page </h1>
      {/* <ErrorBoundary> */}
      {/* <CounterApp/>
      <Props/> */}
      <Counter/>
      {/* <ListandKeys/> */}
      {/* <UseEffectHook/> */}
      {/* <InfiniteScrollList/> */}
      {/* <InfiniteScrollwithLazy/> */}
      {/* <New/> */}
      {/* <MyButton/> */}
      {/* </ErrorBoundary> */}
    </div>
  )
}

export default App