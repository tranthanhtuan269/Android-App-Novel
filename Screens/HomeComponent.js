/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

const HomeComponent = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [test, setTest] = useState(0);
  const [selectedId, setSelectedId] = useState();

  const getNovels = async () => {
    try {
      const response = await fetch(props.link);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNovels();
  }, []);

  function actionOnRow(item) {
    setTest(item.id + 1)
  }

  return (
    <View style={styles.HomeComponentContainer}>
      <View style={styles.HomeComponentTop}>
        <View style={styles.HomeComponentTitle}>
            <Text style={styles.HomeComponentTitleText}>{props.title} {test}</Text>
        </View>
        <View style={styles.HomeComponentMore}>
          <View>
            <Text style={styles.HomeComponentTitleMore}>Thêm &gt;</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.HomeComponentContent}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
                  <View>
                     <Image source={{uri: item.image}} style={styles.HomeComponentFlatListItemImage}/>
                     <Text>{item.name}</Text>
                  </View>
             </TouchableWithoutFeedback>
            )}
            extraData={selectedId}
            horizontal={false}
            numColumns={3}
            style={{ flexDirection: 'column' }}
            columnWrapperStyle={{justifyContent: 'space-between'}}
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  HomeComponentContainer: {
    width: '100%',
    height: 400
  },
  HomeComponentTop: {
    width: '100%',
    flexDirection: 'row',
    margin: 5
  },
  HomeComponentContent: {
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
    paddingEnd: 16,
  },
  HomeComponentTitleText: {
    fontFamily: 'TiltNeon-Regular',
    fontSize: 16,
    fontWeight: 'bold'
  },
  HomeComponentTitleMore: {
    fontFamily: 'TiltNeon-Regular',
    fontSize: 16,
  },
  HomeComponentFlatList: {
    flexDirection: 'column'
  },
  HomeComponentFlatListItem: {
    width:'33%',
    alignItems:'center',
    justifyContent:'center'
  },
  HomeComponentFlatListItemImage: {
    width: 120,
    height: 150,
    borderRadius: 6
  },
  HomeComponentFlatListItemLabel: {
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'TiltNeon-Regular',
    fontSize: 12
  }
});

export default HomeComponent;
