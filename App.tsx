import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Image,KeyboardAvoidingView,ScrollView,StyleSheet,Text,View,TouchableOpacity,Platform,TextInput,} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleOrder = () => {
    if (name.trim() === '') {
      setMessage('Por favor, digite seu nome para fazer o pedido!');
      return;
    }
    setMessage(`Obrigado, ${name}! Seu pedido foi realizado com sucesso.`);
  };

  const handleAddToCart = (productName) => {
    console.log(`Item "${productName}" adicionado ao carrinho!`);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={30}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          
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

          <View style={styles.content}>
            
            <View style={styles.saudacao}>
              <Text style={styles.conteudoTitle}>Refresque seu dia!</Text>
              <Text style={styles.conteudoSub}>
                Escolha seu açaí favorito!
              </Text>
            </View>

            
            <View style={styles.Bigcard}>
              <View style={styles.feature}>
                <Image
                  source={require('./assets/acai.jpg')}
                  style={styles.imageAcai}
                />

                <View style={styles.lineCard}>
                  <Text style={styles.cardTitle}>
                    Açaí Turbinado 500ml
                  </Text>
                  <Text style={styles.pedidos}>MAIS PEDIDO!</Text>
                </View>

                <Text style={styles.cardDescription}>
                  Açaí puro batido com morango, banana, leite condensado e
                  granola crocante
                </Text>

                <View style={[styles.lineCard, { marginTop: 16 }]}>
                  <Text style={styles.cardPrice}>R$ 22,90</Text>

                  <TouchableOpacity
                    style={styles.cardAddButton}
                    onPress={() => handleAddToCart('Açaí Turbinado 500ml')}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.cardAddText}>Adicionar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

      
            <Text style={styles.subtitle}>Nossos Copos & Tigelas</Text>

            <View style={styles.productsContainer}>
              
              <View style={styles.cardProduct}>
                <Image
                  source={require('./assets/acaicard1.jpg')}
                  style={styles.imageCards}
                />
                <Text style={styles.nameProduct}>Açaí Tradicional</Text>
                <Text style={styles.descriptionProduct}>
                  Açaí cremoso com banana e granola tradicional
                </Text>

                <View style={styles.productBottom}>
                  <Text style={styles.priceProduct}>R$ 14,00</Text>
                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => handleAddToCart('Açaí Tradicional')}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.addButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              
              <View style={styles.cardProduct}>
                <Image
                  source={require('./assets/acaicard2.jpg')}
                  style={styles.imageCards}
                />
                <Text style={styles.nameProduct}>Copo Tropical</Text>
                <Text style={styles.descriptionProduct}>
                  Camadas de açaí, morango, kiwi e leite em pó
                </Text>

                <View style={styles.productBottom}>
                  <Text style={styles.priceProduct}>R$ 18,50</Text>
                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => handleAddToCart('Copo Tropical')}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.addButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              
              <View style={styles.cardProduct}>
                <Image
                  source={require('./assets/acaicard3.jpg')}
                  style={styles.imageCards}
                />
                <Text style={styles.nameProduct}>Vitamina de Açaí</Text>
                <Text style={styles.descriptionProduct}>
                  Bebida energética batida com guaraná e aveia
                </Text>

                <View style={styles.productBottom}>
                  <Text style={styles.priceProduct}>R$ 12,00</Text>
                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => handleAddToCart('Vitamina de Açaí')}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.addButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              
              <View style={styles.cardProduct}>
                <Image
                  source={require('./assets/acaicard4.jpg')}
                  style={styles.imageCards}
                />
                <Text style={styles.nameProduct}>Açaí Fit Zero</Text>
                <Text style={styles.descriptionProduct}>
                  Zero adição de açúcar, com chia e castanhas
                </Text>

                <View style={styles.productBottom}>
                  <Text style={styles.priceProduct}>R$ 16,90</Text>
                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => handleAddToCart('Açaí Fit Zero')}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.addButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            
            <View style={styles.orderSection}>
              <Text style={styles.question}>Qual é seu nome?</Text>

              <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={name}
                onChangeText={setName}
              />

              <TouchableOpacity
                style={styles.button}
                onPress={handleOrder}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Fazer meu pedido</Text>
              </TouchableOpacity  >

              {message !== '' && (
                <Text style={styles.messageText}>{message}</Text>
              )}
            </View>

            <Text style = {styles.footer}>Açai Prime • O sabor autêntico da Amazônia</Text>
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
  content: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  saudacao: {
    marginTop: 5,
    marginBottom: 24,
  },
  conteudoTitle: {
    fontSize: 32,
    color: '#2C1B30',
    fontWeight: '800',
  },
  conteudoSub: {
    fontSize: 16,
    color: '#644D6A',
    marginTop: 8,
  },
  Bigcard: {
    marginBottom: 24,
  },
  feature: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },
  imageAcai: {
    width: '100%',
    height: 180,
    marginBottom: 16,
    borderRadius: 16,
  },
  lineCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#2C1B30',
    flex: 1,
  },
  cardDescription: {
    color: '#644D6A',
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
  },
  pedidos: {
    color: '#7B1FA2',
    backgroundColor: '#F3E5F5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    fontWeight: 'bold',
    fontSize: 10,
    overflow: 'hidden',
  },
  cardPrice: {
    color: '#7B1FA2',
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardAddButton: {
    backgroundColor: '#7B1FA2',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
  },
  cardAddText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  subtitle: {
    fontWeight: '800',
    fontSize: 22,
    color: '#2f2d2c',
    marginBottom: 16,
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardProduct: {
    width: '48%',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 16,
  },
  imageCards: {
    width: '100%',
    height: 110,
    borderRadius: 12,
    resizeMode: 'cover',
    marginBottom: 12,
  },
  nameProduct: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2f2d2c',
  },
  descriptionProduct: {
    fontSize: 12,
    marginTop: 4,
    color: '#9b9b9b',
  },
  productBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  priceProduct: {
    fontSize: 16,
    fontWeight: '800',
    color: '#7B1FA2',
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#7B1FA2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  orderSection: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginTop: 10,
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: '800',
    color: '#2f2d2c',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 56,
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  button: {
    width: '100%',
    backgroundColor: '#7B1FA2',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginTop: 20,
    elevation: 4,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '700',
  },
  messageText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2E7D32',
    backgroundColor: "#E8F5E9",
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 20,
  },
  footer : {
    color: "#6C757D",
    textAlign: 'center',
    marginTop: 2
  }
});