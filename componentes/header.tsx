import { Image, StyleSheet, Text, View } from "react-native"

export function Header(){
    return (
        <View style={styles.header}>
                    <View>
                      <Text style={styles.Title}>Açaí Prime</Text>
                      <Text style={styles.headerSub}>O sabor puro da Amazônia</Text>
                    </View>
        
                    <Image
                      source={require('../assets/mulher.jpg')}
                      style={styles.image}
                    />
                  </View>
    )
}


const styles = StyleSheet.create ( {
    header: {
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
    Title: {
    fontSize: 22,
    color: '#2C1B30',
    fontWeight: '800',
  },
  headerSub: {
    fontSize: 14,
    color: '#644D6A',
    marginTop: 4,
  },
  image: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
});