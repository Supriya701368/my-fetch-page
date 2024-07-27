
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/header/header";
import { Footer} from "@/footer/footer";
import { Section} from "@/section/section";
import 'bootstrap/dist/css/bootstrap.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="all">
      <Header/>
      <Section/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}