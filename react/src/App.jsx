import React, { useState } from 'react'
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
import UseCallback from "./pages/UseCallback"
import UseRef from "./pages/UseRef"
import ChildToParent from './components/ChildToParent';
import Upload from './pages/Upload'
import ReduxCounter from './pages/ReduxCounter';
import Toggle from './pages/Toggle'
import SearchComponent from './pages/SearchComponent';
import CustomHook from './pages/CustomHook';
import Test from './pages/Ztest'
import ForwardRef from './pages/ForwardRef'
// import Context from './context/Context'
import Cchild from './customHook/UseCustomHook'
import Cparent from './customHook/CustomHook'
import Customparent from "./customHook/UseCustomHook"
// import RMParent from './ReactMemo/RMParent';
import Parent from "./UseMemoHook/Parent"

const App = () => {

  return (
    <div>
      <h1 
      // className="text-center text-3xl text-yellow-300"
      >This is the home page</h1>
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
      {/* <UseCallback/> */}
      {/* <UseRef/> */}
      {/* <ChildToParent/> */}
      {/* <Upload/> */}
      {/* <ReduxCounter/> */}
      {/* <Toggle/> */}
      {/* <SearchComponent/> */}
      {/* <CustomHook/> */}
      {/* <ReduxCounter/> */}
      {/* <ForwardRef/> */}
      {/* <Test/> */}
      {/* <Context/> */}
      {/* <Cchild/>
      <Cparent/> */}
      {/* <Customparent/> */}
      {/* <RMParent/> */}

      <Parent/>
      
      

    </div>
  )
}

export default App