import React from 'react';
import { Slider, StyleSheet, Text, View } from 'react-native';
import { gray } from '../utils/colors';

const UdaciSlider = ({ max, unit, step, value, onChange }) => {
  return (
    <View style={styles.row}>
      <Slider
        style={{ flex: 1 }}
        step={step}
        value={value}
        minimumValue={0}
        maximumValue={max}
        onValueChange={onChange}
      />
      <View style={styles.metricCounter}>
        <Text style={{ fontSize: 24 }}>{value}</Text>
        <Text style={{ fontSize: 18, color: gray }}>{unit}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  metricCounter: {
    width: 85,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default UdaciSlider;
