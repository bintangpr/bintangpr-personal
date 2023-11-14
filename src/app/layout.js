import './globals.css'
import { Inter } from 'next/font/google'
import AnimatedCursor from "react-animated-cursor"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Personal Website of Bintangpr',
  description: 'Glimpse of Bintangpr',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedCursor 
        outerSize={48}
        outerScale={1.5}
        innerStyle={{
          backgroundColor: '#FB0149'
        }}
        outerStyle={{
          backgroundColor: 'transparent',
          border: '3px solid #fff'
        }}/>
        <div className='hidden md:block'>
          {children}
        </div>
        <div className="md:hidden w-full h-screen bg-dark flex justify-center items-center">
          <div className='flex flex-col gap-y-4 text-center'>
            <h1 className='text-3xl font-bold text-white'>Coming Soon for Mobile</h1>
            <h2 className='text-xl font-medium text-white'>Please access it from PC/Laptop</h2>
          </div>
        </div>
      </body>
      
    </html>
  )
}
