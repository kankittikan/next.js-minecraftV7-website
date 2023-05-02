import Head from 'next/head'

export default function Home() {
  const ipDev = 'hnoonnahoh.trueddns.com:30811';

  return (
    <>
      <Head>
        <title>MC | Get Server IP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <a href='/m'>
              <h1 className='text-md font-burtons'>Minecraft Version 7</h1>
            </a>
          </nav>

          <div className='text-center shadow-lg p-10 rounded-xl'>
            <img className='mx-auto' src="/assets/images/minecraft_logo.png" width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Development Server 24-hour Online</h3>
            <p>
              {ipDev}
            </p>
          </div>

          <div className='text-center'>
            <h3 className='text-3xl py-1 mt-5'>Contact Me</h3>
            <h4>nongkan195@gmail.com</h4>
          </div>
        </section>

      </main>
    </>
  )
}