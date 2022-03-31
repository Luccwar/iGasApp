import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import Routes from '../../routes';

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <StatusBar style="auto"/>
    <Routes />
  </ApplicationProvider>
);
