import Image from 'next/image'
import styles from './page.module.css'
import { prefix } from '../utils/prefix.js'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Page under&nbsp;
          <code className={styles.code}>construction</code>
        </p>
      </div>

      <div className={styles.center}>

      </div>

      <div className={styles.grid}>
        <a
          href="/#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
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
          <h2>
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
          <h2>
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
          <h2>
            Project4 <span>-&gt;</span>
          </h2>
          <p>Faucibus dignissim neque interdum scelerisque</p>
        </a>

      </div>
      <Footer />
    </main>
  )
}
