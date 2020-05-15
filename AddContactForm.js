import React from 'react';
import { TextInput, Button, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import PropTypes from 'prop-types';

export default class AddContactForm extends React.Component {
  static propTypes = {
    //submit funciton
    addContact: PropTypes.func,
  };

  state = {
    name: '',
    phone: '',
    isFormValid: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.phone !== prevState.phone ||
      this.state.name !== prevState.name
    ) {
      this.validateForm();
    }
  }

  getHandler = key => {
    return val => {
      this.setState({ [key]: val });
    };
  };

  validateForm = () => {
    if (
      +this.state.phone >= 0 &&
      this.state.phone.length === 10 &&
      this.state.name.length >= 3
    ) {
      this.setState({ isFormValid: true });
    } else {
      this.setState({ isFormValid: false });
    }
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.getHandler('name')}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.getHandler('phone')}
          placeholder="Phone"
          keyboardType="numeric"
        />
        <Button
          title="Submit"
          onPress={this.handleSubmit}
          disabled={!this.state.isFormValid}
        />
      </View>
    ); //end return
  } //end render

  test = () => {
    console.log('hi');
  };
} //end class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F5',
    paddingTop: Constants.statusBarHeight,
  },

  input: {
    borderWidth: 1,
    borderColor: 'grey',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
});
