import Head from 'next/head'

export default function Home() {
  return (<>
      
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="container">
          <img src="/level-up.png" />
        </div>
      </header>

      

      <section className="hero">
        <div className="container">
          <h1>Boa tarde, Carol</h1>
          <a href="#" className="btn btn-default">Jogue de graça</a>


          <div>
            <p>Jogue de graça</p>
          </div>

          <div>
            <p>Downloads</p>
          </div>

          <div>
            <p>Criar conta</p>
          </div>

          <div>
            <p>Comprar créditos</p>
          </div>

        </div>
      </section>

      
    </>
  )
}
