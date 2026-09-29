import { StyleSheet, Text } from "react-native";

export function Footer(){
    return(          
        <Text style = {styles.footer}>Açai Prime • O sabor autêntico da Amazônia</Text>
                  
    )
}

const styles = StyleSheet.create ({
  footer : {
    color: "#6C757D",
    textAlign: 'center',
    marginTop: 2
  }
})