import './globals.css'
import { Roboto_Mono } from 'next/font/google';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const font = Roboto_Mono({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <section>
          <Navbar />
        </section>
        <section>
          <main>
            <div className="mt-5 pb-5">{children}
            </div>
          </main>
        </section>
        <section>
          <Footer />
        </section>
      </body>
    </html>
  )
}
