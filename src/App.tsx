import React, {useState} from 'react';
import './app.css';
import TodosScreen from "./components/Screens/TodosScreen";
import Menu from "./components/Menu/Menu";

function App() {
  return (
      <>
          <TodosScreen/>
          <Menu/>
      </>
  )
}

export default App;
