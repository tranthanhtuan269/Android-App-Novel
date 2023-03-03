/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const HomeComponent = () => {
  return (
    <View style={styles.HomeComponentContainer}>
      <View style={styles.HomeComponentTop}>
        <View style={styles.HomeComponentTitle}>
            <Text style={styles.HomeComponentTitleText}>Truyện HOT</Text>
        </View>
        <View style={styles.HomeComponentMore}>
            <Text style={styles.HomeComponentTitleMore}>Thêm &gt;</Text>
        </View>
      </View>
      
      <View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  HomeComponentContainer: {
    width: '100%',
    height: 200
  },
  HomeComponentTop: {
    flex: 1,
    flexDirection: 'row',
    margin: 5
  },
  HomeComponentTitle: {
    flex: 1
  },
  HomeComponentMore: {
    flex: 1,
    alignItems: 'flex-end',
    paddingEnd: 3
  },
  HomeComponentTitleText: {
    fontFamily: 'TiltNeon-Regular',
    fontSize: 16,
    fontWeight: 'bold'
  },
  HomeComponentTitleMore: {
    fontFamily: 'TiltNeon-Regular',
    fontSize: 16
  }
});

export default HomeComponent;
