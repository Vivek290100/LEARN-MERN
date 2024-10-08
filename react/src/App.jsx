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
import ReduxCounter from './pages/ReduxCounter';
import Toggle from './pages/Toggle'
import SearchComponent from './pages/SearchComponent';
import CustomHook from './pages/CustomHook';

const App = () => {
  return (
    <div>
      <h1 className="text-center text-3xl text-yellow-300">This is the home page</h1>
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
      {/* <Upload/> */}
      {/* <ReduxCounter/> */}
      {/* <Toggle/> */}
      {/* <SearchComponent/> */}
      <CustomHook/>
      

    </div>
  )
}

export default App