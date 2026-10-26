import { View, Text, Button, StyleSheet } from 'react-native';

export default function PracticeTracker({ solved, onSolve, onReset }) {
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Solved: {solved}</Text>
      
      <View style={styles.buttonRow}>
        <Button title="Solve +1" onPress={onSolve} />
        <Button title="Reset" onPress={onReset} color="red" />
      </View>

      {/* Conditional rendering for "Great job!" */}
      {solved >= 5 && (
        <Text style={styles.successText}>Great job!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginBottom: 30 },
  counterText: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  buttonRow: { flexDirection: 'row', gap: 20, marginBottom: 10 },
  successText: { fontSize: 20, color: 'green', fontWeight: 'bold', marginTop: 10 },
});