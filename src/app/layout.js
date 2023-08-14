import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import footer from "../../public/footer.jpeg";
import sky from "../../public/sky.jpeg";
import styles from "../../styles/fonts.module.css";

export const metadata = {
  title: "KHY portfolio",
  description: "KHY portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html className="flex flex-col items-center">
      <body className="max-w-screen-2xl">
        <div
          className={`flex justify-center items-center text-center ${styles.font1}`}
        >
          <Image src={sky} alt="sky" className="w-full -z-10 " />
          <ol className="absolute top-5 right-4 md:right-14 flex gap-8">
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/products">Projects</Link>
            </li>
          </ol>
          <div className="absolute mt-4 md:mt-20 lg:mt-20">
            <p className="text-2xl md:text-4xl lg:text-6xl font-thin">
              portfolio
            </p>
            <p className="text-4xl md:text-6xl lg:text-8xl font-semibold md:my-1 lg:my-6 ">
              Frontend Developer
            </p>
            <p className="text-lg md:text-2xl lg:text-4xl font-thin ">
              Kim hye yeong
            </p>
            <p
              className={`hidden md:block md:mt-12 lg:mt-24 lg:text-xl  leading-loose ${styles.font2}`}
            >
              안녕하세요. 프론트엔드 개발자 김혜영입니다. <br />
              HTML, CSS, Javascript 그리고 React.js를 이용하여 베베 프로젝트를
              개발하고 배포한 경험이 있습니다.
              <br />
              또한 현제 프론트엔드 개발에서 매우 중요한 기술인 Next.js와
              Typescript를 공부하고 있습니다.
              <br />
              사용자들에게 더 나은 접근성과 그들의 니즈를 위해 지속적으로 새로운
              기술과 도수를 끊임없이 탐구하겠습니다.
            </p>
          </div>
        </div>
        {children}
        <Image src={footer} alt="footer" className="w-full mt-16 " />
      </body>
    </html>
  );
}
