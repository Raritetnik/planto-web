import Image from "next/image";
import styles from "./main.module.css";
import Button from "@/app/components/Button";
import SectionBanner from "@/app/components/Sections/SectionBanner";
import SectionTrendy from "@/app/components/Sections/SectionTrendy";
import SectionCatalogue from "@/app/components/Sections/SectionCatalogue";

export default function Home() {
  return (
    <main className={styles.main}>
      <SectionBanner/>
      <SectionTrendy/>
      <SectionCatalogue/>
    </main>
  );
}
