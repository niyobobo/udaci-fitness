import { AsyncStorage } from 'react-native';
import { CALENDAR_STORAGE_KEY, formatCalendarResults } from './_calendar';

export const fetchCalendarResults = async () => {
  const results = await AsyncStorage.getItem(CALENDAR_STORAGE_KEY);
  return formatCalendarResults(results);
}

export const submitEntry = ({ entry, key }) => {
  return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }));
}

export const removeEntry = async (key) => {
  const results = await AsyncStorage.getItem(CALENDAR_STORAGE_KEY);
  const data = JSON.parse(results);
  data[key] = undefined;
  delete data[key];
  AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
}