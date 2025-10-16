import Image from "next/image";
import HeroSection from './components/heroSection'
import Cart from '@/components/ui/card'

export default function Home() {
  return (
   <main>
    <HeroSection/>
    <Cart/>
   
   </main>
   
  );
}
