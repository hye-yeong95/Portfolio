import Image from "next/image";
import redLine from "../../public/red.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import styles from "../../styles/fonts.module.css";

function Section({ title, children }) {
  return (
    <div className="p-10">
      <div className="flex justify-center items-center my-10">
        <Image src={redLine} alt="redLine" className="w-[220px] md:w-[300px]" />
        <h1 className={`absolute text-4xl md:text-5xl mb-6 ${styles.font1}`}>
          {title}
        </h1>
      </div>
      {children}
    </div>
  );
}

function SkillIcons({ icons }) {
  return (
    <div className="flex gap-4 md:gap-12 pt-6">
      {icons.map((icon, index) => (
        <Image
          key={index}
          src={icon.src}
          alt={icon.alt}
          width={64}
          height={64}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const skills = [
    { src: "/html5.png", alt: "html" },
    { src: "/css3.png", alt: "css3" },
    { src: "/javascript.png", alt: "js" },
    { src: "/react.png", alt: "react" },
    { src: "/next.png", alt: "next-js" },
    { src: "/tailwind.png", alt: "tailwind" },
    { src: "/redux.png", alt: "redux" },
  ];

  return (
    <main className="flex flex-col items-center text-center text-lg md:text-xl lg:text-2xl">
      <Section title="Profile">
        <div
          className={`flex flex-col gap-3 items-center pt-4 ${styles.font2}`}
        >
          <p>이름 : 김혜영</p>
          <p>나이 : 28세</p>
          <p>생년월일 : 95.07.31</p>
          <p>학력 : 한경대학교 식물생명환경과학과(학사)</p>
        </div>
      </Section>

      <Section title="Skills">
        <SkillIcons icons={skills.slice(0.3)} />
      </Section>
      <Section title="Contact">
        <div
          className={`flex flex-col items-center gap-2 pt-2 ${styles.font2}`}
        >
          <AiOutlineMail />
          <p>ghdwls69@naver.com</p>
          <BsFillTelephoneFill />
          <p>010 - 2629 - 9655</p>
        </div>
      </Section>
    </main>
  );
}
