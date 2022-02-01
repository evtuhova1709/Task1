
import React from 'react';
import classes from './App.module.css'
import { Route, Routes } from "react-router-dom";
import Users from './Users'




const App = (props) => {
  return (

    <div className={classes.app}>

      <Routes>

        <Route path="/users" element={<Users />} />
      </Routes>





    </div>

  );
}


export default App;
