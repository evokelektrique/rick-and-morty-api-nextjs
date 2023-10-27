import { Inter } from 'next/font/google'
import './globals.scss'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Wubba-lubba-dub-dub!',
    description: 'Wubba-lubba-dub-dub!',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className='dark'>
            <body className={inter.className}>
                <div className='mb-5'>
                    <Navbar />
                </div>

                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}
