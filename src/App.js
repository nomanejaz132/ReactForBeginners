import React from 'react';
import FunctionalComponent from './components/FunctionalComponent';
import ArrowFunctionalComponent from './components/ArrowFunctionalComponent';
import ClassComponent from './components/ClassComponent';
import PropsInFunctionalComponent from './components/PropsInFunctionalComponent';
import PropsInClassComponent from './components/PropsInClassComponent';
import StateInClassComponent from './components/StateInClassComponent';




function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <ArrowFunctionalComponent />
      <ClassComponent />
      <PropsInFunctionalComponent value="This Value is from Props in Functional Component."/>
      <PropsInClassComponent value="This Value is from Props in Class Component." />
      <StateInClassComponent />
    </div>
  );
}

export default App;
