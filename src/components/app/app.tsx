import React, {FunctionComponent} from 'react';

import appStyles from './app.module.css';

import {Header} from '../header/header';
import {Hero} from '../hero/hero';

const App: FunctionComponent = () => {
  return (
    <div className={appStyles.content}>
      <Header/>
      <main>
        <Hero/>
      </main>
    </div>
  )
}

export default App;