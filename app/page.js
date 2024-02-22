import Image from "next/image";
import styles from "./main.module.css";
import Button from "@/app/components/Button";
import SectionBanner from "@/app/components/Sections/SectionBanner";
import SectionTrendy from "@/app/components/Sections/SectionTrendy";

export default function Home() {
  return (
    <main className={styles.main}>
      <SectionBanner/>
      <SectionTrendy/>
    </main>
  );
}
