import { SafeAreaView, View, Text, StyleSheet, Pressable, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Lanchedobom } from './components/Lanchedobom.js'

export default function App() {

  function handlePressIn() {
    console.log('Clicou o PRESS')
  }

  function handlePressOut() {
    console.log('Soltou o PRESS')
  }


  function handleLongPress() {
    console.log('Segurou o PRESS')
  }

  return (
      <SafeAreaView style={styles.fundo}> 
      <Text style={styles.title}>Lanches do Bom</Text>
      <Text style={styles.subtitle}>Hambúrgueres</Text>

       <Lanchedobom
        name={'X-TUDO'}
        price={18}
        items={['Chedder, Tomate, Cebola, Bacon, Ovo, Batata frita e Molho especial']}
        propOnPress={handlePressOut}
      />
      
        <Lanchedobom 
        name={'X-BACON'}
        price={15}
        items={['Chedder, Bacon, Alface, Tomate, Batata frita e Molho especial']}
        propOnPress={handlePressIn}
      />

        <Lanchedobom 
        name={'X-DO BOM'}
        price={20}
        items={['Chedder, Bacon, Tomate, Cebola, Tomate, Duas carnes, Molho especial, Ketchup e Batata frita']}
        propOnPress={handleLongPress}
      />
       <Lanchedobom
       name= {'X-SALADA'}
       price={20}
       items= {['Hambúrguer caseiro, Queijo, Bacon, Presunto, Tomate e Alface']}
       propOnPress= {handleLongPress}
       />
      <Text style={styles.subtitle}>Pastéis</Text>
        <Lanchedobom 
        name={'Carne do sol'}
        price={15}
        items={['Carne do sol, Queijo, Orégano']}
        propOnPress={handleLongPress}
      />
        <Lanchedobom 
        name={'Pizza'}
        price={10}
        items={['Queijo, Orégano, Tomate, Milho, Presunto']}
        propOnPress={handleLongPress}
      />
        <Lanchedobom 
        name={'Frango'}
        price={10}
        items={['Frango, Tomate, Orégano, Milho']}
        propOnPress={handleLongPress}
      />
    </SafeAreaView>
  ) 
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#F6A700',
    textAlign: 'center',
    borderRadius:10,
    fontWeight: 'bold'
  },

  subtitle: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  fundo: {
    backgroundColor:'#000000'
  },
})
