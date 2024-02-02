import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { OrbitControls } from '@react-three/drei'

import ThreeCanvas from '@/src/components/3D/ThreeCanvas'
import Poster from '@/src/components/Poster'
import Office from '@/src/components/office'
import { config, SiteDetails } from '@/src/config/config'


export default function DynamicPage() {

    const siteDetails: SiteDetails = config.siteDetails;
    const router = useRouter()
    const { id } = router.query
    const [imgUrl, setImgUrl] = useState('')

    useEffect(() => {
        if (id) {
            fetch(`/api/getPoster?id=${id}`)
                .then(response => response.json())
                .then(data => setImgUrl(data.poster))
        }
    }, [id])

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
                    {imgUrl && <Poster imgUrl={imgUrl} />}
                    <OrbitControls />
                </ThreeCanvas>
            </main>
        </>
    );
}