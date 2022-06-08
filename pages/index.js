import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import Recipe from './recipes'
import styles from "./index.module.css";

const Home = () => {
  const user = useUser()

  return (
    <Layout>
      <main className={styles.main}>
      <img src="/chef.png" className={styles.icon} />
      <h3>Ingredia</h3>
      <p>GPT-3 powered generic recipes</p>
      {user ?         
        <>
          <Recipe />
        </>:
        <>
          <ol>
            <li>Click Login and enter an email.</li>
            <li>
              You'll be redirected to Home where you can use GPT-3 to generate recipes.
            </li>
          </ol>

          <p>
            To learn more about Magic, visit their{' '}
            <a
              href="https://docs.magic.link/"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>
            .
          </p>
          <p>
            To learn more about OpenAI API, visit their{' '}
            <a
              href="https://beta.openai.com/docs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>
            .
          </p>
        </>}


      {/* {user && (
        <>
          <Recipe />
        </>
      )} */}
      </main>
      <style jsx>{`
        li {
          margin-bottom: 0.5rem;
        }
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </Layout>
  )
}

export default Home
