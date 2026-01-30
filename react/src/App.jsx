import React, { useState } from 'react'
import "./index.css";
import CounterApp from './components/CounterApp'
import Props from './components/props'
import Counter from "./pages/Counter"
import ListandKeys from './pages/ListandKeys'
import UseEffectHook from "./pages/UseEffectHook"
import InfiniteScrollList from './pages/InfiniteScrollList'
import ErrorBoundary from './components/ErrorBoundary'
import InfiniteScrollwithLazy from './components/InfiniteScrollwithlazy'
import Upload from './pages/Upload'
import ReduxCounter from './pages/ReduxCounter';
import Toggle from './pages/Toggle'
import SearchComponent from './pages/SearchComponent';
import ForwardRef from './pages/ForwardRef'
// import Context from './context/Context'
import Cchild from './customHook/UseCustomHook'
import Cparent from './customHook/CustomHook'
import Customparent from "./customHook/UseCustomHook"
import UseMemoHook from './UseMemoHook/UseMemoHook';
import RMParent from './ReactMemoHOC/RMParent';
import UCParent from './useCallbackHook/UCParent';
import CPParent from './ChildToParent/CPParent';
import UseRef from "./UseRef/UseRef"
import HocApp from './HOC/HocApp'
import Form from './form/Form';
import UseEffect from './UseEffect/UseEffect'
import RenderPropsChild from './renderProps/RenderPropsChild'
import CRParent from './conditionalRendering/CRParent';

const App = () => {

  return (
    <div>
      <h1>This is the home page</h1>
      {/* <CounterApp/>
      <Props/> */}
      {/* <Counter/> */}
      {/* <ListandKeys/> */}
      {/* <UseEffectHook/> */}
      {/* <InfiniteScrollList/> */}
      {/* <InfiniteScrollwithLazy/> */}
      {/* </ErrorBoundary> */}
      {/* <Upload/> */}
      {/* <Toggle/> */}
      {/* <SearchComponent/> */}
      {/* <ReduxCounter/> */}
      {/* <ForwardRef/> */}
      {/* <Context/> */}
      {/* <Cchild/>
      <Cparent/> */}
      {/* <Customparent/> */}
      <RMParent/>
      {/* <UseMemoHook/> */}
      {/* <UCParent/> */}
      {/* <UseRef/> */}
      {/* <CPParent/> */}
      {/* <HocApp/> */}
      {/* <Form/> */}
      {/* <UseEffect/> */}
      {/* <RenderPropsChild/> */}
      {/* <CRParent/> */}

    </div>
  )
}

export default App