import styles from "@/app/components/Sections/SectionBanner.module.css";
import Button from "@/app/components/Button";
import {CartBox} from "@/app/components/CartBox";

export default function SectionBanner() {
    return (
        <section className={styles.banner}>
            <div className="relative">
                <div className={styles.bannerText}>
                    <h1>Breath Natureal</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.</p>
                    <span className=" flex gap-6">
                    <Button>Explore</Button>
                    <button className="flex items-center gap-4">
                        <img src="./assets/play-icon.svg" alt="Play"/>
                        <h3 className="text-[24px]">Live demo...</h3>
                    </button>
                </span>
                </div>
                <div className="">
                    <CartBox p_style={styles.bannerCart}>
                        <div className="flex gap-6">
                            <img className="w-[64px] h-[64px]" src="./assets/unsplash_3TLl_97HNJo.png" alt=""/>
                            <span>
                            <h3 className="text-[24px]">alena Patel</h3>
                            <span className={styles.stars}>
                                <b>★</b>
                                <b>★</b>
                                <b>★</b>
                                <b>★</b>
                                <b>✰</b>
                            </span>
                        </span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt...</p>
                    </CartBox>
                </div>
            </div>
            <div className="flex justify-end items-start">
                <CartBox p_style={styles.sideCard}>
                    <div className="relative h-[300px] w-[450px] mb-10">
                        <img className="h-[500px] w-[450px] absolute bottom-0 " src="./assets/Rose_Gold_Feminine_Calligraphy_Monogram.png" alt=""/>
                    </div>
                    <div className="w-full flex flex-col
                 gap-6 items-start">
                        <h3 className="text-[24px]">Trendy House Plant</h3>
                        <h2 className="text-[38px]">Calathea plant</h2>
                        <Button>Buy Now</Button>
                    </div>
                    <span className="border-dashed border-4 w-[50px] h-[5px] mt-4"></span>
                </CartBox>
            </div>
        </section>
    )
}