import { StatusBar } from 'expo-status-bar';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View, CustomButton } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={30}>
        <ScrollView style={styles.container}>

          <View style={styles.header}>
            <View>
              <Text style={styles.Title}>Açaí Prime</Text>
              <Text style={styles.headerSub}>O sabor puro da Amazônia</Text>
            </View>

            <Image 
              source={require('./assets/mulher.jpg')} 
              style={styles.image} 
            />
          </View>

          <View style = {styles.content}>
            <View style = {styles.saudacao}>
              <Text style =  {styles.conteudoTitle}>Refreque seu dia!</Text>
              <Text style = {styles.conteudoSub}>Escolha seu açai favorito!</Text>
            </View>
          </View>

          <View style = {styles.Bigcard}>
            <View style = {styles.feature}>
              <Image 
              source={require('./assets/acai.jpg')} 
              style={styles.imageAcai} 
            ></Image>
            <View style = {styles.lineCard}>
              <Text style = {styles.cardTitle}>Açaí Turbinado 500ml</Text>
              <Text style = {styles.pedidos}>MAIS PEDIDO!</Text>
            </View>
            <Text style = {styles.cardDescription}>Açaí puro batido com morango, banana, leite condensado e granola crocante</Text>
            <View style = {styles.lineCard}>
            <Text style= {styles.cardPrice}>R$ 22,90</Text>
            <CustomButton title = "Adicionar "></CustomButton>
            </View>
            </View>
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
    color: "#2C1B30",
    fontWeight: "800"
  },
  headerSub: {
    fontSize: 14,
    color: "#644D6A",
    marginTop: 4
  },
  image: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  content : {
    paddingHorizontal: 24
  },
  saudacao: {
    marginTop: 5,
    marginBottom: 24,
  },
  conteudoTitle : {
    fontSize: 32,
    color: "#2C1B30",
    fontWeight: "800"
  },
  conteudoSub : {
    fontSize: 16,
    color: "#644D6A",
    marginTop: 8
  },
  Bigcard : {

  },
  feature: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginBottom: 32
  },
  imageAcai :{
    width: "100%",
    height: 180,
    marginBottom: 16,
    borderRadius: 16
  },
  lineCard : {
    flexDirection: 'row',      
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  cardTitle : {
    fontSize: 20,
    fontWeight: "800",
    color: "#2C1B30"
  },
  cardDescription: {
    color: "#644D6A",
    fontSize: 14,
    marginTop: 4
  },
  pedidos : {
    color: "#7B1FA2",
    backgroundColor : "#F3E5F5",
    borderRadius: 4,
    fontWeight: "bold"
  },
  cardPrice : {
    color: "#7B1FA2",
    fontSize: 25,
    fontWeight: "bold"
  },
  cardAdd : {
    backgroundColor: "#7B1FA2",
    color: "#ffff"
  }
});
