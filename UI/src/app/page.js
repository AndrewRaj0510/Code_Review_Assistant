'use client'

import Background from '@/components/Background'
import Navbar from '@/components/Navbar'
import Headline from '@/components/Headline'
import CodeViewer from '@/components/CodeViewer'

export default function Home() {
  return (
  <Background>
    <Navbar />
    <Headline />
    <CodeViewer />
  </Background>
  )
}