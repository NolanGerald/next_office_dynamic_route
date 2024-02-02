

import Head from 'next/head'
import { OrbitControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

import ThreeCanvas from '@/src/components/3D/ThreeCanvas'
import Poster from '@/src/components/Poster'
import Office from '@/src/components/office'
import { config, SiteDetails } from '@/src/config/config'

export default function Home() {
  const siteDetails: SiteDetails = config.siteDetails;

  return (
    <>
      <Head>
        <title>{siteDetails.title}</title>
        <meta name="description" content="Office" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} lang='en'>
        <ThreeCanvas>
          <Office />
          <OrbitControls />
          <Poster imgUrl="./img/ooks.jpg" />
        </ThreeCanvas>
      </main>
    </>
  )
}
