import React from 'react';
import { AppDiv } from "./Styles";
import { Route, Switch } from 'react-router-dom';
import { useGet } from '../Hooks';

function App() {
    const [test, setTest] = useGet<{message:string}>('/test');
    console.log(test);
    return (
    <AppDiv>
      <Switch>
        <Route exact path={'/'}>
                {test && test.message}
        </Route>
      </Switch>
    </AppDiv>
  );
}

export default App;
