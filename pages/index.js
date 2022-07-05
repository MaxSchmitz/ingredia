import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import Recipe from './recipes'
import Login from './login'



// import styles from "./index.module.css";

const Home = () => {
  const user = useUser()

  return (
    <Layout>
      <div className="text-center">
        {/* <img src="/chef.png" className="rounded-full w-16 mb-4 mx-auto"/> */}
        <h1 className="text-6xl font-bold mt-8">Ingredia</h1>
        <p className="text-gray-500 mb-6">GPT-3 powered generic recipes</p>
      </div>
      {user ?         
        <>
          <Recipe />
        </>:
        <div className="place-self-center">
          <Login />
            <p>Enter your email and Click Login.</p>
            <p>You'll be redirected to Home where you can use GPT-3 to generate recipes.</p>

        </div>}
    </Layout>
  )
}

export default Home
