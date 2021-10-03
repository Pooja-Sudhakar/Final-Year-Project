import React, {Component} from 'react';
// import Geolocation from 'react-native-geolocation-service';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Axios from 'axios';

export default class Home extends Component {
  state = {
    // eid: null,
    // id: 'b32ce6ab77e14591aac2646405775cdf',
  };

  handleRoute = val => {
    this.props.navigation.navigate(val, {val: false /*,eid: this.state.eid*/});
  };

  handleRoute2 = (val, d) => {
    this.props.navigation.navigate(val, {val: false, dependent: d});
  };

  render() {
    return (
      <View style={styles.body}>
        {/* <View>
          <Text style={styles.head}>Speaker Identification</Text>
        </View> */}
        {/* <View style={styles.line} /> */}
        {/* <View style={styles.uid}>
          <TextInput
            style={styles.searchbox}
            placeholder="Enter uid"
            placeholderTextColor="#ff6347"
            onChangeText={text => this.setState({eid: text})}
            // value={this.state.uid}
          />
        </View> */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Choice', {})}>
            <Image style={styles.back} source={require('../assets/back.png')} />
          </TouchableOpacity>
          <View style={{marginLeft: 10, width: '50%'}}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: 'beige',
                width: 400
              }}>
              Voice recognition
            </Text>
          </View>
        </View>
        <View style={styles.buts}>
        <View style={styles.login}>
          <TouchableOpacity
            onPress={() => this.handleRoute2('Adduser', this.props.navigation.state.params.dependent)}
            style={styles.addbutton1}>
            <Text
              style={{
                color: '#ff6347',
                fontFamily: 'Roboto',
                fontWeight: 'bold',
              }}>
              Add user
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.login}>
          <TouchableOpacity
            onPress={() => this.handleRoute2('Audiorec', this.props.navigation.state.params.dependent)}
            style={styles.addbutton1}>
            <Text
              style={{
                color: '#ff6347',
                fontFamily: 'Roboto',
                fontWeight: 'bold',
              }}>
              Identify user
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.login}>
          <TouchableOpacity
            onPress={() => this.handleRoute2('Attendance', this.props.navigation.state.params.dependent)}
            style={styles.addbutton1}>
            <Text
              style={{
                color: '#ff6347',
                fontFamily: 'Roboto',
                fontWeight: 'bold',
              }}>
              Remove user
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    );
  }
}

const styles = {
  body: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'black',
  },
  head: {
    color: '#ff6347',
    fontSize: 30,
    width: 200,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buts:{
    marginTop:'30%'
  },
  uid: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '50%',
  },
  login: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '15%',
  },
  searchbox: {
    width: Dimensions.get('window').width * 0.65,
    height: 60,
    backgroundColor: '#383838',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    // borderRadius
    // borderWidth:1,
    // shadowColor:'#000',
    // shadowOffset: {width: 0, height: 3},
    // shadowOpacity: 0.3,
    // elevation: 1,
    borderRadius: 30,
    color: '#ff6347',
    textAlign: 'center',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 60,
    // borderWidth:1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.9,
    elevation: 6,
    backgroundColor: '#383838',
  },
 
  back: {
    marginLeft: 5,
    height: 35,
    width: 35,
  },
  addbutton1: {
    width: Dimensions.get('window').width * 0.3,
    height: 60,
    backgroundColor: '#383838',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff6347',
    marginLeft: 3,
  },
  line: {
    width: Dimensions.get('window').width * 0.6,
    height: 2,
    borderTopWidth: 1,
    borderColor: '#ff6347',
  },
};
