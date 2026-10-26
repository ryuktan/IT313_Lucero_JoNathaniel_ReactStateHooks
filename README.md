# IT313 React State & Hooks – Lab Timer & Practice Tracker

## Problem
Build an Expo/React Native screen to track practice problems solved and time spent. It uses `useState` for counters and a toggle, a custom `useStopwatch` hook utilizing `useEffect` for the timer logic, and implements "lifting state up" so the timer and the counter stay in sync through a shared parent component.

## Approach
- **State Management:** `LabScreen` acts as the parent holding `solved` and `isRunning` state.
- **Custom Hook:** `useStopwatch` isolates the `setInterval` logic. It uses a `useEffect` with an `isRunning` dependency. The cleanup function (`clearInterval`) ensures no memory leaks or timer double-speeding when stopped.
- **Lifting State Up:** `LabScreen` passes `solved` and handlers to `PracticeTracker`, and passes `seconds` and `isRunning` to `Stopwatch`. This keeps the sibling components perfectly in sync.
- **Event Handlers:** All handlers (e.g., `handleSolve`) are passed as function references (e.g., `onPress={onSolve}`) to avoid immediate execution.

## How to run
1. Install dependencies: `npm install`
2. Start Expo: `npx expo start`
3. Open in Expo Go.