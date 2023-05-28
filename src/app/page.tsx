import Image from 'next/image'
import { TypographyH1 } from '../../components/hero/hero'
import Navbar from '../../components/hero/Navbar';
import Promote from '../../components/hero/Promote';



export default function Home() {
  return (
    <main className="">
      <Navbar />
      <TypographyH1 />
      <Promote />
    </main>
  )
}
