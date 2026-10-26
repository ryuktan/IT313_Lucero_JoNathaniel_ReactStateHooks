import { SafeAreaView } from 'react-native-safe-area-context';
import LabScreen from './screens/LabScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <LabScreen />
    </SafeAreaView>
  );
}