
"use client"
import Footer from "@/components/layout/footer";
import Navbar from "../components/Navbar";
import FloatingFacebook from '@/components/ui/FloatingFacebook' 
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Define which paths should hide layout
  const hideLayoutPaths = ['/admin', '/adminlogin'];
  const shouldHideLayout = hideLayoutPaths.includes(pathname);

  return (
    <>
      {/* Show Navbar & Footer only when not on admin pages */}
      {!shouldHideLayout && <Navbar />}

      {children}

      {!shouldHideLayout && (
        <>
          <Footer />
          <FloatingFacebook />
        </>
      )}
    </>
  );
}