import Image from "next/image";
import HeroSection from './components/heroSection'
import Cart from '@/components/ui/card'
import Popularcourses from "@/components/section/popularcourses";
import FeedbackSection from "@/components/section/FeedbackSection";
import Form from '@/components/section/Form'
import Faq from '@/components/section/Faq'
import Ins from '@/components/section/ins'

export default function Home() {
  return (
   <main>
    <HeroSection/>
    <Popularcourses/>
    <FeedbackSection/>
    <Form/>
    <Ins/>
    <Faq/>
    

    
    
    
   
   </main>
   
  );
}
