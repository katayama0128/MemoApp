import { Redirect, router } from "expo-router"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from 'react'
import { auth } from '../config'

// このファイルが最初に読み込まれる
const Index = () => {
  //既にログイン済ならリスト画面に遷移
  //react HOOKを利用する
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        router.replace('/memo/list')
      }
    })
  }, [])

  return <Redirect href='auth/log_in' />
}

export default Index
