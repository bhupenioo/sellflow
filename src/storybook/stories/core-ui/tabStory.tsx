import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import { TabView } from '../../../core-ui';
import { TabRoute } from '../../../core-ui/TabView';
import { useDimensions } from '../../../helpers/dimensions';

function TabStory() {
  let { width } = useDimensions();

  const FirstRoute = () => (
    <View
      style={[styles.tabBoxContainer, { backgroundColor: '#ff4081', width }]}
    />
  );

  const SecondRoute = () => (
    <View
      style={[styles.tabBoxContainer, { backgroundColor: '#673ab7', width }]}
    />
  );
  const ThirdRoute = () => (
    <View
      style={[styles.tabBoxContainer, { backgroundColor: 'green', width }]}
    />
  );

  const routes: Array<TabRoute> = [
    { key: 'first', title: 'Descriptions', scene: FirstRoute },
    { key: 'second', title: 'This is a Title', scene: SecondRoute },
    { key: 'third', title: 'this is a third screen', scene: ThirdRoute },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TabView routes={routes} containerStyle={styles.tabContainerStyle} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabBoxContainer: {
    height: 100,
  },
  tabContainerStyle: {
    maxHeight: 200,
    minHeight: 100,
    backgroundColor: 'red',
  },
});

export default () => {
  return storiesOf('TabView', module).add('TabView', () => <TabStory />);
};