import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroImage,
  ViroTrackingStateConstants,
  ViroTrackingReason,
} from "@reactvision/react-viro";
import React, { useState } from "react";

const MySceen = () => {
  return (
    <ViroARScene>
      <ViroImage 
        height={0.5}
        width={0.5}
        position={[0, 0, -1]}
        source={require("./assets/cikaDraza.jpg")}
      />
    </ViroARScene>
  )
}

export default function App() {
  return (
    <ViroARSceneNavigator 
      autofocus={true}
      initialScene={{
        scene: MySceen
      }}
      style={{
        flex: 1,
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
