import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack >
      <Stack.Screen name="slotIssue/header" options={{title: 'SlotIssue'}} />
    </Stack>
  )
}