import { View, StyleSheet } from 'react-native'
import Header from '../components/Header'
import MemoListItem from '../components/MemoListItem'
import CircleButton from '../components/CircleButton'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>

      <Header />
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton>+</CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //画面全体に広げる設定
    backgroundColor: '#ffffffff'
  }
})

export default Index
