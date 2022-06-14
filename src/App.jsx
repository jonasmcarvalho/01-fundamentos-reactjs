
import { Header } from './components/Header'
import {Post} from './Post'

import './global.css'

export function App() {

  return (
    <div>
      <Header />

      <Post 
        author='Jonas Carvalho'
        content= 'loren ipsom dolor'
      />

      <Post 
        author='Gabriel Alberto'
        content= 'loren ipsom dolor maluo'
      />

      <Post 
        author='Lucas Antunes'
        content= 'loren ipsom dolor maluo'
      />
      
    </div>
  )
}

