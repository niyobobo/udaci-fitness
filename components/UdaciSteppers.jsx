import { Entypo, FontAwesome } from '@expo/vector-icons';
import React, { Fragment } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { gray, purple, white } from '../utils/colors';

const UdaciSteppers = ({ unit, value, onIncrement, onDecrement }) => {
  return (
    <View style={[styles.row, { justifyContent: 'space-between' }]}>
      <View style={{ flexDirection: 'row' }}>
        {Platform.OS === 'ios' ? (
          <Fragment>
            <TouchableOpacity
              style={[
                styles.iosBtn,
                { borderTopRightRadius: 0, borderBottomRightRadius: 0 }
              ]}
              onPress={onDecrement}
            >
              <Entypo name="minus" size={30} color={purple} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.iosBtn,
                {
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0
                }
              ]}
              onPress={onIncrement}
            >
              <Entypo name="plus" size={30} color={purple} />
            </TouchableOpacity>
          </Fragment>
        ) : (
          <Fragment>
            <TouchableOpacity
              style={[
                styles.androidBtn,
                { borderTopRightRadius: 0, borderBottomRightRadius: 0 }
              ]}
              onPress={onDecrement}
            >
              <FontAwesome name="minus" size={30} color={white} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.androidBtn,
                {
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0
                }
              ]}
              onPress={onIncrement}
            >
              <FontAwesome name="plus" size={30} color={white} />
            </TouchableOpacity>
          </Fragment>
        )}
      </View>
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
  iosBtn: {
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    paddingRight: 25,
    paddingLeft: 25
  },
  androidBtn: {
    margin: 5,
    backgroundColor: purple,
    padding: 10,
    borderRadius: 2
  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default UdaciSteppers;
