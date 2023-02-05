import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { ShareImage } from './ShareImage';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headStyle}>
        Bienvenue sur notre f
        </Text>
        <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: 'https://images.unsplash.com/photo-1675430427294-8aee1da3f5b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' }}
      />
      <ShareImage imageUrl='ttt'/>
      <StatusBar style="auto" />
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
  headStyle: { 
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  }
});
