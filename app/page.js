import { Inter } from 'next/font/google'
import Image from 'next/image'
import styles from './page.module.css'
import { prefix } from '../utils/prefix.js'
import Footer from './components/Footer'
import { Fragment } from 'react'
import ToggleDN from './components/ToggleDN'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <Fragment>
      <div className={styles.gridContainer}>
        <div className={styles.description}>
          <p>
            Page under&nbsp;
            <code className={styles.code}>construction</code>
          </p>
        </div>
        <ToggleDN/>
        <div className={styles.greetHead}>
          <div className={styles.title1}>Desarrollador Web Frontend</div>
          <div className={styles.name}>Marlon Vargas</div>
        </div>
        <div className={styles.greetSpeech}>
          <div className={styles.title1}>Bienvenido a mi portafolio</div>
          <div>Creando sitios web que muestren al mundo las ideas que deseas potenciar.</div>
        </div>

        <div className={styles.projectsCards}>
          <a
            href="/#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Project1 <span>-&gt;</span>
            </h2>
            <p>Lorem ipsum</p>
          </a>

          <a
            href="/#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Project2 <span>-&gt;</span>
            </h2>
            <p>Sit amet, consectetur adipiscing elit.</p>
          </a>

          <a
            href="/#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Project3 <span>-&gt;</span>
            </h2>
            <p>Nulla congue porta velit</p>
          </a>

          <a
            href="/#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Project4 <span>-&gt;</span>
            </h2>
            <p>Faucibus dignissim neque interdum scelerisque</p>
          </a>

        </div>
      </div>
      <Footer />
    </Fragment>
  )
}
