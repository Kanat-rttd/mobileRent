import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Страницы
import MainPage from './screens/main_page';
import Profile from "./screens/Profile";
import Favourites from "./screens/Favourites";
import AddPost from "./screens/AddPost";

// Названия страниц
const mainName = 'Main';
const profileName = 'Profile';
const favouritesName = 'Favourites';
const addPostName = 'Add Post';

const Tab = createBottomTabNavigator();

export default function MainNavContainer() {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName={mainName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let routeName = route.name;

                        if (routeName === mainName) {
                            iconName = focused ? "home" : "home-outline"
                        } else if (routeName === profileName) {
                            iconName = focused ? "person" : "person-outline"
                        } else if (routeName === favouritesName) {
                            iconName = focused ? "heart" : "heart-outline"
                        } else if (routeName === addPostName) {
                            iconName = focused ? "add-circle" : "add-circle-outline"
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    },

                    tabBarActiveTintColor: 'skyblue',
                    tabBarInactiveTintColor: 'grey',
                    tabBarLabelStyle: {paddingBottom: 10, fontSize: 10},
                    tabBarStyle: {height: 60, padding: 10}
                })}
            >

                <Tab.Screen name={mainName} component={MainPage}/>    
                <Tab.Screen name={favouritesName} component={Favourites}/>
                <Tab.Screen name={addPostName} component={AddPost}/>
                <Tab.Screen name={profileName} component={Profile}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}