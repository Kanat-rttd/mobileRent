import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { useState, useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { SearchContext } from "../context/SearchContext";

// Страницы
import MainPage from './screens/main_page';
import Profile from "./screens/Profile";
import Favourites from "./screens/Favourites";
import AddPost from "./screens/AddPost";
import MyPosts from './screens/MyPosts';
import ItemDetails from "../components/[ItemDetails]";

// Названия страниц
const mainName = 'Main';
const profileName = 'Profile';
const favouritesName = 'Favourites';
const addPostName = 'Add Post';
const myPostsName = 'My Posts';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function MainNavContainer() {
    const [showBackButton, setShowBackButton] = useState(false);
    const { favorites } = useContext(FavoritesContext);
    const { searchText, setSearchText } = useContext(SearchContext);

    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName={mainName}
                screenOptions={({ route, navigation }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
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
                        } else if (routeName === myPostsName) {
                            iconName = focused ? "folder-open" : "folder-open-outline"
                        }


                        // Отображаем иконку с индикатором, если на экране избранных элементов
                        return (
                            <View>
                                <Ionicons name={iconName} size={size} color={color} />
                                {routeName === favouritesName && (
                                    <View style={{
                                        position: 'absolute',
                                        top: -4,
                                        right: -10,
                                        backgroundColor: 'red',
                                        borderRadius: 10,
                                        width: 18,
                                        height: 18,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                                            {favorites.length}
                                        </Text>
                                    </View>
                                )}
                            </View>
                        );
                    },

                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'grey',
                    tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                    tabBarStyle: { height: 60, padding: 10 }
                })}
            >

                <Tab.Screen
                    name={mainName}
                    children={() => <MainPageStack setShowBackButton={setShowBackButton} />}
                    options={{
                        header: ({ route, navigation }) => {
                            return (
                                <SafeAreaView>
                                    <View style={{ backgroundColor: 'white', padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        {
                                            showBackButton && (
                                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                                    <Ionicons name="chevron-back" size={24} color="black" />
                                                </TouchableOpacity>
                                            )
                                        }
                                        <View style={{ flex: 1, position: 'relative', marginLeft: 10, marginRight: 10 }}>
                                            <Ionicons
                                                name="search"
                                                size={20}
                                                color="gray"
                                                style={{ position: 'absolute', top: '50%', left: 10, transform: [{ translateY: -10 }] }}
                                            />
                                            <TextInput
                                                placeholder="Поиск товаров..."
                                                // value={searchText}
                                                onChangeText={text => setSearchText(text)}
                                                style={{
                                                    paddingLeft: 40,
                                                    borderWidth: 1,
                                                    borderColor: 'gray',
                                                    borderRadius: 10,
                                                    paddingVertical: 5
                                                }}
                                            />
                                        </View>
                                        <TouchableOpacity onPress={() => { }}>
                                            <Ionicons name="notifications" size={24} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                </SafeAreaView>
                            );
                        },
                    }}
                />
                <Tab.Screen name={favouritesName} component={Favourites} options={{ headerShown: true }} />
                <Tab.Screen name={addPostName} component={AddPost} options={{ headerShown: true }} />
                <Tab.Screen name={myPostsName} component={MyPosts} options={{ headerShown: true }} />
                <Tab.Screen name={profileName} component={Profile} options={{ headerShown: true }} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

function MainPageStack({ setShowBackButton }) {


    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainPageScreen"
                component={MainPage}
                options={{
                    headerShown: false,
                }}
                listeners={({ navigation }) => ({
                    state: (e) => {
                        setShowBackButton(false); // Скрыть стрелку на MainPage
                    },
                })}
            />
            <Stack.Screen
                name="[ItemDetails]"
                component={ItemDetails}
                options={{
                    headerShown: false,
                }}
                listeners={({ navigation }) => ({
                    state: (e) => {
                        setShowBackButton(true); // Показать стрелку на ItemDetails
                    },
                })}
            />
        </Stack.Navigator>
    );
}