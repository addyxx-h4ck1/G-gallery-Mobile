// src/screens/WebViewScreen.js
import React, { useRef } from 'react'
import { StyleSheet, View, BackHandler } from 'react-native'
import { WebView } from 'react-native-webview'
import { useFocusEffect } from '@react-navigation/native'

const WebViewScreen = () => {
  const webviewRef = useRef(null)

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (webviewRef.current && webviewRef.current.canGoBack) {
          webviewRef.current.goBack()
          return true
        }
        return false
      }

      BackHandler.addEventListener('hardwareBackPress', onBackPress)

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }, [])
  )

  return (
    <View style={styles.container}>
      <WebView
        ref={webviewRef}
        source={{ uri: 'https://mygallery0.onrender.com/' }}
        onNavigationStateChange={(navState) => {
          webviewRef.current.canGoBack = navState.canGoBack
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default WebViewScreen
