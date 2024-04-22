import './App.css';
import Counters1 from './Components/HigherOrderComponent/Counters1';
import Counters2 from './Components/HigherOrderComponent/Counters2';
// import ErrorBoundry from './Components/Errorhandlephase/ErrorBoundry';
// import Product from './Components/Errorhandlephase/Product';

// import Counter1 from './Components/CustomHook/Counter1';
// import Counter2 from './Components/CustomHook/Counter2';

// import Portal from './Components/React Portal/Portal';

// import Click1 from './Hooks/Click1';
// import Click2 from './Hooks/Click2';

// import Reducer from './Components/Task/Reducer';
// import CallBackParent from './Components/UseCallback/CallBackParent';

// import Memo from './Components/UseMemo/Memo'
// import Ref from './Components/UseRef/Ref'

// import React, {  useReducer } from 'react';

// import State from './Components/State';
// import UseEffect from './Components/UseEffect';
// import SetTimeOut from './Components/SetTimeOut';
// import Toggle from './Components/Toggle';
// import Dependency from './Components/Dependency';
// import Mounting from './Components/Mounting';
// import Handlecreate from'./Components/Handlecreate'
// import Reducer from './Components/Reducer';

// import C from './Components/UseContext/C'
// export const userContext=React.createContext()
// export const passwordContext=React.createContext()

// import A from './Components/UseReducer+UseContext/A'
// import B from'./Components/UseReducer+UseContext/B'
// import C from'./Components/UseReducer+UseContext/C'


// export const CounterContext=React.createContext()



function App() {
  // const initialState=0
  // const reducer=(state,action)=>{
  //   switch(action){
  //     case'inc':return state+1
  //     case'dec':return state-1
  //     case'reset':return initialState
  //     default: return state
  //   }
  // }
  // const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div className="App">
     
     {/* <Mounting/> */}

     {/* <Dependency/> */}

     {/* <Toggle/> */}

     {/* <SetTimeOut/> */}

{/* <UseEffect/> */}

{/* <State/> */}

{/* <Handlecreate/> */}

{/* <Reducer/> */}

{/* <userContext.Provider value={{"name":"saji","age":20}}>
<passwordContext.Provider value={'saji@123'}>
  <C/>
</passwordContext.Provider>
</userContext.Provider> */}
{/* {count}
<CounterContext.Provider value={{count:count,dispatch:dispatch}}>
<A/>
<B/>
<C/>
</CounterContext.Provider> */}

  {/* <State/> */}

{/* <CallBackParent/> */}

{/* <Memo/> */}


{/* <Ref/> */}

{/* <Reducer/> */}

{/* <Click1/>
<Click2/> */}

{/* <Counter1/>
<Counter2/> */}

{/* <Portal/> */}

{/* <ErrorBoundry>
<Product name="Samsung"/></ErrorBoundry>
<ErrorBoundry>
<Product name="Nokia"/></ErrorBoundry>
<ErrorBoundry>
<Product name="Iphone"/></ErrorBoundry> */}


<Counters1 name='adam'/>
<Counters2/>




    </div>
  );
}

export default App;
