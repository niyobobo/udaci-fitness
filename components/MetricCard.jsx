import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DateHeader from './DateHeader';
import { getMetricMetaInfo } from '../utils/helpers';
import { gray } from '../utils/colors';

const MetricCard = ({ date, metrics }) => {
  return (
    <View>
      {date && <DateHeader date={date} />}
      {Object.keys(metrics).map(metric => {
        const { getIcon, display, unit } = getMetricMetaInfo(metric);
        return (
          <View key={metric} style={styles.metric}>
            {getIcon()}
            <View>
              <Text style={{ fontSize: 20 }}>{display}</Text>
              <Text style={{ fontSize: 16, color: gray }}>
                {metrics[metric]} {unit}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  metric: {
    flexDirection: 'row',
    marginTop: 12
  }
});

export default MetricCard;
