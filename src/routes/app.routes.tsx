import { createStackNavigator } from '@react-navigation/stack';

import Home from '@screens/Home';
import DietDetails from '@screens/DietDetails';
import Registration from '@screens/Registration';
import InfoMeal from '@screens/InfoMeal';
import Edition from '@screens/Edition';

const { Navigator, Screen } = createStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="DietDetails" component={DietDetails} />
      <Screen name="Registration" component={Registration} />
      <Screen name="InfoMeal" component={InfoMeal} />
      <Screen name="Edition" component={Edition} />
    </Navigator>
  );
}
