import React, {FunctionComponent} from 'react';

import appStyles from './app.module.css';
import {Header} from '../header/header';

const App: FunctionComponent = () => {
  return (
    <div className={appStyles.content}>
      {/*<Header/>*/}
    </div>
  )
}

export default App;