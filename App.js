// App.js
import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import WebViewScreen from './src/webViewScreen'
import { View, Text, StyleSheet } from 'react-native'

const Stack = createStackNavigator()

const CustomHeader = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
)

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WebView"
        screenOptions={({ route }) => ({
          header: () => <CustomHeader />,
        })}
      >
        <Stack.Screen name="WebView" component={WebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1b1b1b',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default App
