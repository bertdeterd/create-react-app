import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  ShellBar,
  ThemeProvider
} from '@ui5/webcomponents-react';

import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Home from './Home'

const App = () => {
  const { t } = useTranslation();
  return (

    <ThemeProvider>
      <ShellBar primaryTitle={t('title')} />
      <FlexBox
        style={{ width: '100%', height: '100vh' }}
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Center} >

        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>

      </FlexBox>
    </ThemeProvider>

  );
}

export default App;


