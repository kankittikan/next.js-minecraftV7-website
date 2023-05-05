import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>MC | Version 7</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40'>
        <section>
          <nav className='py-10 mb-12 flex justify-between'>
            <a href=''>
              <h1 className='text-md font-burtons'>Minecraft Version 7</h1>
            </a>
            <ul className='flex items-center animate-bounce'>
              <li><a href='/getip' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' >Server IP</a></li>
            </ul>
          </nav>

          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden'>
            <img className='mx-auto' src='/assets/images/minecraft_logo.png' />
          </div>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>All In One Minecraft Server</h2>
            <h3 className='text-2xl py-2 text-yellow-500 animate-pulse'>Status: Opening on 7 May at 20.00 pm</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              A Minecraft server perform with java plugins and node.js. We provide the automatic start and stop depent on players join and left.
            </p>
          </div>
        </section>

        <section className='lg:flex gap-10 justify-center'>
          <div className='text-center shadow-lg p-10 rounded-xl'>
            <img className='mx-auto' src="/assets/images/code.png" width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Auto Start and Stop</h3>
            <p className='py-5'>
              On stand by mode, you can start a minecraft server with your click
            </p>
            <p>
              On empty, minecraft server will be stoped within 15 minutes
            </p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl'>
            <img className='mx-auto' src="/assets/images/design.png" width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Variety of Minigames</h3>
            <p>
              We provide the well-known minigames from worldwide
            </p>
          </div>
        </section>
        <section className='flex justify-center'>
          <div className='text-center'>
            <h3 className='text-3xl py-1 mt-5'>Contact Me</h3>
            <h4>nongkan195@gmail.com</h4>
          </div>
        </section>
      </main>
    </>
  )
}
