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
      <body>
        <div
          className={`relative flex justify-center items-center text-center ${styles.font1}`}
        >
          <Image src={sky} alt="sky" className="w-full -z-10 " />
          <ol className="absolute flex top-2 md:top-4 right-2 md:right-12 gap-3 md:gap-8 md:text-2xl">
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
              안녕하세요 프론트엔드 개발자 김혜영입니다.
              <br /> HTML, CSS, Javascript 그리고 React.js를 활용하여 배포한
              경험을 가지고 있습니다.
              <br /> 베베 프로젝트에서는 기획과 프론트엔드 개발을 담당하여
              웹사이트를 구축하였습니다.
              <br /> 디자이너와 피그마를 활용한 소통을 하였고 백엔드 개발자와는
              포스트맨을 활용하여 API를 연동하고 베베컴퍼니, 베베몰,
              베베다이어리 웹사이트를 구현하였습니다.
              <br /> Next.js와 TypeScript에 대한 관심이 있어 학습을 하고
              있습니다.
            </p>
          </div>
        </div>
        {children}
        <Image src={footer} alt="footer" className="w-full0 mt-10" />
      </body>
    </html>
  );
}
