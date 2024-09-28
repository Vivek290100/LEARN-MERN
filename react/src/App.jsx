import React from 'react'
import "./index.css";
import CounterApp from './components/CounterApp'
import Props from './components/props'
import Counter from "./pages/Counter"
import ListandKeys from './pages/ListandKeys'
import UseEffectHook from "./pages/UseEffectHook"
import InfiniteScrollList from './pages/InfiniteScrollList'
import MyButton from './pages/UseRef'
import ErrorBoundary from './components/ErrorBoundary'
import InfiniteScrollwithLazy from './components/InfiniteScrollwithlazy'
import ReactMemo from "./pages/ReactMemo"
import UseMemo from "./pages/UseMemo"
import UseCallback from "./pages/UseCallback"
import UseRef from "./pages/UseRef"
import ChildToParent from './components/ChildToParent';
import Upload from './pages/Upload'

const App = () => {
  return (
    <div>
      <h2>this is home page </h2>
      {/* <ErrorBoundary> */}
      {/* <CounterApp/>
      <Props/> */}
      {/* <Counter/> */}
      {/* <ListandKeys/> */}
      {/* <UseEffectHook/> */}
      {/* <InfiniteScrollList/> */}
      {/* <InfiniteScrollwithLazy/> */}
      {/* <MyButton/> */}
      {/* </ErrorBoundary> */}
      {/* <ReactMemo/> */}
      {/* <UseMemo/> */}
      {/* <UseCallback/> */}
      {/* <UseRef/> */}
      {/* <ChildToParent/> */}
      <Upload/>
    </div>
  )
}

export default App