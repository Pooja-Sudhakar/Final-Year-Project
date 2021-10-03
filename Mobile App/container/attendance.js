import React, {Component} from 'react';
// import Geolocation from 'react-native-geolocation-service';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';
import Modal from 'react-native-modal';

export default class Attendance extends Component {
  state = {
    eid: null,
    attended: null,
    vis: false,
    res: 'hello',
  };

  renderAttended = () => {
    return (
      <View style={styles.attend}>
        <Image style={styles.tick} source={require('../assets/correct.png')} />
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            width: '100%',
            textAlign: 'center',
          }}>
          {' '}
          Speaker Verified{' '}
        </Text>
      </View>
    );
  };

  handleRoute = val => {
    this.props.navigation.navigate(val, {
      eid: this.state.eid,
    });
  };

  removeUser = () => {
    console.log(this.state.eid, 'Req sent');
    // this.setState({vis: true});

    axios
      .post('http://192.168.1.8:2000/removeUser', {eid: this.state.eid})
      .then(res => {
        this.setState({res: res.data['data']});
        this.setState({vis: true});
        // console.log(res.data);
      })
      .catch(e => console.log(e));
  };

  renderToAttend = () => {
    return (
      <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
        <View style={styles.uid}>
          <TextInput
            style={styles.searchbox}
            placeholder="Enter uid"
            placeholderTextColor="#ff6347"
            onChangeText={text => this.setState({eid: text})}
            value={this.state.eid}
          />
        </View>
        <View style={styles.voicebtn}>
          <TouchableOpacity onPress={this.removeUser} style={styles.addbutton1}>
            <Text style={{color: '#ff6347'}}>Proceed</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Modal
            // style={styles.dialog}
            // coverScreen={false}
            onBackButtonPress={() => {
              this.setState({vis: false});
            }}
            onBackdropPress={() => {
              this.setState({vis: false});
            }}
            isVisible={this.state.vis}>
            <View style={styles.content}>
              <Text style={styles.contentTitle}>{this.state.res}</Text>
              <TouchableOpacity
                style={styles.dialog}
                title="Close"
                onPress={() => {
                  this.setState({vis: false});
                }}>
                <Text style={{color: '#ff6347'}}>Close</Text>
              </TouchableOpacity>
            </View>
            {/* <View style={styles.content}>
                <Text style={styles.contentTitle}>Hi 👋!</Text>
                <Button title="Close" />
              </View> */}
          </Modal>
        </View>
        {/* <View style={styles.line} /> */}
        {/* <View style={styles.facebtn}>
          <TouchableOpacity
            onPress={() => this.handleRoute('Pic')}
            style={styles.addbutton1}>
            <Text style={{color: '#ff6347'}}>Face</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  };

  componentDidMount() {
    if (this.props.navigation.state) {
      let obj = this.props.navigation.state;
      this.setState({attended: obj.params.val});
    }
  }
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home', {dependent: this.props.navigation.state.params.dependent})}>
            <Image style={styles.back} source={require('../assets/back.png')} />
          </TouchableOpacity>
          <View style={{marginLeft: 10, width: '50%'}}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'beige'}}>
              Remove user
            </Text>
          </View>
        </View>
        {this.state.attended ? this.renderAttended() : this.renderToAttend()}
      </View>
    );
  }
}

const styles = {
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  content: {
    backgroundColor: 'whitesmoke',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    color: '#ff6347',
    fontSize: 20,
    marginBottom: 12,
  },
  dialog: {
    width: Dimensions.get('window').width * 0.4,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: 3,
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    // elevation: 5,
    shadowRadius: 6,
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
    // elevation: 6,
    backgroundColor: '#383838',
    color: 'beige',
  },
  back: {
    marginLeft: 5,
    height: 35,
    width: 35,
  },
  tick: {
    height: 60,
    width: 60,
    marginBottom: 10,
  },
  uid: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    alignItems: 'center',
    // marginTop: '50%',
  },
  attend: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: 'red',
    textAlign: 'center',
  },
  voicebtn: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '8%',
    marginTop: '20%',
  },
  facebtn: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '15%',
  },
  addbutton1: {
    width: Dimensions.get('window').width * 0.4,
    height: 50,
    backgroundColor: '#383838',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3,
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 6,

    width: Dimensions.get('window').width * 0.65,
    height: 60,
    backgroundColor: '#383838',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    borderRadius: 10,
    color: '#ff6347',
    textAlign: 'center',
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
  line: {
    width: Dimensions.get('window').width * 0.6,
    height: 2,
    borderTopWidth: 1,
    borderColor: '#ff6347',
  },
};
