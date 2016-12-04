import React, { Component, PropTypes } from 'react';
import { Picker, PickerGroup, CityPicker } from '../components/picker';
import cnCity from '../constants/cnCity';

class MsbuUi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city_show: false,
      city_value: ''
    };
  }

  render() {
    return (
      <div>
        <button onClick={(e) => {this.setState({city_show: true})}}>选择选择</button>
        <h2>{this.state.city_value}</h2>
        <CityPicker
            data={cnCity}
            onCancel={e=>this.setState({city_show: false})}
            onChange={text=>this.setState({city_value: text, city_show: false})}
            show={this.state.city_show}
        />
      </div>
    )
  }
}

export default MsbuUi;
