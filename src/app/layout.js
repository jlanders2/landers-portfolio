import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Roboto_Mono } from 'next/font/google';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

export const metadata = {
  title: 'Cole Landers Portfolio',
  description: 'Generated by create next app',
}


const font = Roboto_Mono({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} d-flex flex-column min-vh-100 diagonal-background`}>
        <header>
          <Navbar />
        </header>
        <div className="d-flex justify-content-center">
          <hr className="w-75"/>
        </div>
        <content>
          <div className="mt-5 pb-5">{children}
          </div>
        </content>
        <footer className="mt-auto">
          <Footer />
        </footer>
        
      </body>
    </html>
  )
}
