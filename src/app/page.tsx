import Image from 'next/image'
import { TypographyH1 } from '../../components/hero/hero'
import Navbar from '../../components/hero/Navbar';
import Promote from '../../components/hero/Promote';
import Products from '../../components/hero/Products';
import Features from '../../components/hero/Features';
import Newletter from '../../components/hero/Newletter';
import Footer from '../../components/hero/Footer';

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <TypographyH1 />
      <Promote />
      <Products />
      <Features />
      <Newletter />
      <Footer />
    </main>
  )
}
