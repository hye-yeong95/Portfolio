import Image from "next/image";
import login from "../../../../public/mall/login.jpg";
import styles from "../../../../styles/fonts.module.css";

export default function Mall() {
  return (
    <div
      className={`flex flex-col xl:flex-row p-2 xl:py-10 gap-2 xl:gap-10 ${styles.font2}`}
    >
      <h1 className="text-2xl text-center mt-4">mall 상세페이지</h1>
      <div className="md:w-[500px] py-4 lg:py-2 px-4 text-center xl:text-start">
        <Image
          src={login}
          alt="login"
          className="md:w-[500px] border-2 border-gray-300 rounded-lg "
        />
        <h1></h1>
      </div>
    </div>
  );
}
