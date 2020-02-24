import Head from 'next/head'
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="title">Welcome to Next.js!</h1>

      <Button color="danger">Pass på!!</Button>
    </div>

  </div>
)

export default Home
