import {CartBox} from "@/app/components/CartBox";
import Button from "@/app/components/Button";
import styles from "@/app/components/Sections/SectionTrendy.module.css"
import TitleSection from "@/app/components/TitleSection";

export default function SectionTrendy() {
    return(
        <section className="flex flex-col items-center">
            <TitleSection>Our Trendy plants</TitleSection>
            <div className="flex flex-col gap-32">
            <CartBox p_style={styles.trendyCard}>
                <div className="h-[250px] mb-10 flex justify-center items-center">
                    <img className="h-[600px] w-[450px] absolute -bottom-6" src="./assets/Flower_2.png" alt=""/>
                </div>
                <div>
                    <h2 className="text-[38px]">For Small Decs Ai Plat</h2>
                    <p className="text-[24px]">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <h2 className="text-[38px]">Rs. 599/-</h2>
                    <span className="flex gap-4">
                        <Button>Explore</Button>
                        <Button>
                            <img src="./assets/bag-icon.svg" alt="Buy bag"/>
                        </Button>
                    </span>
                </div>
            </CartBox>

            <CartBox p_style={styles.trendyCard}>
                <div>
                    <h2 className="text-[38px]">For Small Decs Ai Plat</h2>
                    <p className="text-[24px]">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <h2 className="text-[38px]">Rs. 579/-</h2>
                    <span className="flex gap-4">
                        <Button>Explore</Button>
                        <Button>
                            <img src="./assets/bag-icon.svg" alt="Buy bag"/>
                        </Button>
                    </span>
                </div>
                <div className="h-[250px] mb-10 flex justify-center items-center">
                    <img className="h-[600px] w-[600px] absolute" src="./assets/Flower_3.png" alt=""/>
                </div>
            </CartBox>
            </div>
        </section>
    )
}