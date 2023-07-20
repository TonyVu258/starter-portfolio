import './globals.css'
import Theme from '../styles/theme';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Theme>
        <body className=''>{children}</body>
      </Theme>
    </html>
  )
}
