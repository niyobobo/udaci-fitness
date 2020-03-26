import React from 'react';
import { Slider, View, Text } from 'react-native';

const UdaciSlider = ({ max, unit, step, value, onChange }) => {
  return (
    <View>
      <Slider
        step={step}
        value={value}
        minimumValue={0}
        maximumValue={max}
        onValueChange={onChange}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  );
};

export default UdaciSlider;
