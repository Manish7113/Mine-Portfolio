import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/app.scss';
import '../style/fontStyle.scss';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manish Kumawat",
  description: "Manish kumawat Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
