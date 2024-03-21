import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export function Lanchedobom({ name, price, items, propOnPress }) {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={propOnPress}>
      <View style={styles.container}> 
        <Text style={[styles.name, styles.bold]}>{name}</Text>
        <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
        <Text>{items.join(', ')}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#F6A700',
    fontWeight: 'BOLD',
    borderRadius:20
  },

  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  bold: {
    fontWeight: 'bold'
  },

  price: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: 'bold'
    
  }
})
