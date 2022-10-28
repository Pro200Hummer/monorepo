import { StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from "react";
import {requests} from "core/api";
//test commit
export default function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    requests.getTodos().then(res => setTodos(res.data))
  }, [])
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>
        {
          JSON.stringify(todos)
        }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
