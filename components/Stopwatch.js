import { View, Text, StyleSheet } from 'react-native';

export default function Stopwatch({ seconds, isRunning }) {
  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{formatTime(seconds)}</Text>
      
      <Text style={isRunning ? styles.running : styles.paused}>
        {isRunning ? 'Running...' : 'Paused'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginBottom: 30 },
  timeText: { fontSize: 48, fontWeight: 'bold', fontVariant: ['tabular-nums'] },
  running: { fontSize: 18, color: 'blue', fontWeight: 'bold' },
  paused: { fontSize: 18, color: 'gray', fontWeight: 'bold' },
});