import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={30}>
      <ScrollView style={styles.container}>

      <View>
        <Text style = {styles.Title}>Açaí Prime</Text>
        <Text style = {styles.headerSub}>O sabor puro da Amazônia</Text>
      </View>
      
      </ScrollView>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Title :{

  },
  headerSub: {
    
  }
});
