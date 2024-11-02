// page.tsx 
"use client"
import Main  from "./components/Main"
import ImageCarousel from"./components/ImageCarousel"
import InfoSection from "./components/InfoSection"
export default function Home() {
  return (
   
    <div className="min-h-screen flex flex-col">
    <main className="flex-grow">
      <Main/>
      <ImageCarousel /> 
      <InfoSection/>  
    </main>
    
    
  </div>
  );
}
