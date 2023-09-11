import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import footer from "../../public/bg2.png";
import moon3 from "../../public/bg1.png";
import styles from "../../styles/fonts.module.css";

export const metadata = {
  title: "KHY portfolio",
  description: "KHY portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html className="flex flex-col items-center">
      <body className="">
        <div
          className={`relative flex justify-center items-center text-center ${styles.font1}`}
        >
          <Image src={moon3} alt="moon3" />
          <div className="absolute text-white">
            <p className="text-2xl md:text-3xl lg:text-5xl font-thin">
              portfolio
            </p>
            <p className=" text-4xl md:text-6xl lg:text-8xl font-semibold ">
              Frontend Developer
            </p>
          </div>
        </div>
        {children}
        <Image src={footer} alt="footer" className="mt-10 md:mt-32" />
      </body>
    </html>
  );
}
