import Footer from "@/components/Footer";
import Header from "@/components/Header"
import Main from "@/components/Main";

import './page.css'

export default function Home() {
  return (
    <div className="container-home">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
