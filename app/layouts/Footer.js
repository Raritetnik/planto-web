import styles from "./Footer.module.css";
import InputForm from "@/app/components/InputForm";
export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.seperation}>
                <article className="flex flex-col gap-6">
                    <span className="flex items-center gap-2">
                        <img width="94" src="./assets/plant_logo.svg" alt=""/>
                        <h2 className="text-[58px] font-bold">Planto.</h2>
                    </span>
                    <p className="text-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </article>
                <article>
                    <h3 className="text-[28px] font-bold pb-3">Quick Link’s</h3>
                    <ul className="flex flex-col gap-2 text-[24px]">
                        <li><a href="">Home</a></li>
                        <li><a href="">Type’s Of plant’s</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Privacy</a></li>
                    </ul>
                </article>
                <article>
                    <h3 className="text-[28px] font-bold pb-3">For Every Update.</h3>
                    <InputForm pHold="Enter Email" btnText="subscribe"/>
                </article>
            </div>
            <div className={styles.lowerSep}>
                <div className="flex gap-8">
                    <a href="" className="text-[28px] font-bold">FB</a>
                    <a href="" className="text-[28px] font-bold">TW</a>
                    <a href="" className="text-[28px] font-bold">LI</a>
                </div>
                <h4 className="text-[24px] text-white">planto © all right reserve</h4>
            </div>
        </footer>
    )
}