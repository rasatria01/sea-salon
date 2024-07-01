
import { Inter } from "next/font/google";
import "./globals.css";
import NavItem from "@/components/navbar/navitem";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  const links = [
    { label: 'Home', path: '/' },
    { label: 'Service', path: '/service' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Login', path: '#' },
  ]
  return (
    <html lang="en">
      <body className={inter.className }>
        <NavBar navData={links} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
