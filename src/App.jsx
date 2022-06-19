
import { Header } from './components/Header';
import {Post} from './Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {

  return (
    <div>
      <Header />

      
      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
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
        </main>
      </div>
      
    </div>
  )
}

