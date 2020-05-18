import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import login from './screens/login';
import dashboard from './screens/dashboard.js';
import signup from './screens/register.js';
import plan1 from './bookrequest/plan1.js';
import plan2 from './bookrequest/plan2.js';
import plan3 from './bookrequest/plan3.js';
import history from './bookrequest/history.js';

const App = createStackNavigator({
  login: {screen: login},
  signup:{screen:signup},
  dashboard: {screen: dashboard},
  plan1:{screen:plan1},
  plan2:{screen:plan2},
  plan3:{screen:plan3},
  history:{screen:history}
},
  {
    initialRouteParams: 'login',
  }
);

export default createAppContainer(App);

