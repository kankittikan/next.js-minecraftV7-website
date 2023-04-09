import Head from 'next/head';

export default function home() {
    return (
        <>
            <Head>
                <title>MC | Welcome</title>
                <link rel='icon' href='/favicon.ico' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            
            <main className='bg-pack min-h-screen'>
                <div className='flex justify-center'>
                    <h1 className='text-2xl py-10 font-burtons'>Doksakura Minecraft Server</h1>
                </div>
                <div className='flex justify-center'>
                    <h1 className=''>Development Media</h1>
                </div>
                <section className='flex justify-center p-2'>
                    <div className='rounded-xl overflow-hidden'>
                        <iframe width="800px" height="500px" src="https://www.youtube.com/embed/-Hu1i8w5ZXo" title="Doksakura V7 | Development" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </section>
                <div className='flex justify-center p-5'>
                    <ul className='flex items-center'>
                        <li><a href='/m' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' >Enter Page</a></li>
                    </ul>
                </div>

            </main>
        </>
    )
}