/**
 * EduPrima — Aplikasi E-Learning Kampus
 * UAS Praktikum Pemrograman Mobile · Expo SDK 54
 *
 * Entry point aplikasi. Hanya berisi provider (SafeArea, Auth) dan
 * NavigationContainer. Seluruh screen, komponen, service, dan navigasi
 * dipisah ke folder src/ agar terstruktur.
 */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthProvider>
      <StatusBar style="dark" />
    </SafeAreaProvider>
  );
}
