import TitleSection from "@/app/components/TitleSection";
import styles from "@/app/components/Sections/SectionBanner.module.css";
import Button from "@/app/components/Button";
import {CartBox} from "@/app/components/CartBox";

export default function SectionCatalogue() {
    const listeOBJ = [
        {
            type: "Trendy House Plant",
            title: "Calathea plant",
            price: "Rs. 309/-",
            imgURL: "./assets/Rose_Gold_Feminine_Calligraphy_Monogram.png"
        },
        {
            type: "Trendy House Plant",
            title: "Calathea plant",
            price: "Rs. 309/-",
            imgURL: "./assets/Rose_Gold_Feminine_Calligraphy_Monogram.png"
        },
        {
            type: "Trendy House Plant",
            title: "Calathea plant",
            price: "Rs. 309/-",
            imgURL: "./assets/Rose_Gold_Feminine_Calligraphy_Monogram.png"
        },
        {
            type: "Trendy House Plant",
            title: "Calathea plant",
            price: "Rs. 309/-",
            imgURL: "./assets/Rose_Gold_Feminine_Calligraphy_Monogram.png"
        },
        {
            type: "Trendy House Plant",
            title: "Calathea plant",
            price: "Rs. 309/-",
            imgURL: "./assets/Rose_Gold_Feminine_Calligraphy_Monogram.png"
        },
        {
            type: "Trendy House Plant",
            title: "Calathea plant",
            price: "Rs. 309/-",
            imgURL: "./assets/Rose_Gold_Feminine_Calligraphy_Monogram.png"
        },
    ]

    return(
        <section className="flex flex-col items-center">
            <TitleSection>Our Top Selling</TitleSection>
            <div className="grid grid-cols-3 gap-x-20 gap-y-32 py-8">
                {listeOBJ.map( (plant, i) => {
                    return(
                    <CartBox key={i} p_style={styles.sideCard}>
                        <div className="relative h-[300px] w-[450px] mb-10">
                            <img className="h-[500px] w-[450px] absolute bottom-0 " src={plant.imgURL} alt="Plant"/>
                        </div>
                        <div className="w-full flex flex-col
                     gap-6 items-start">
                            <h3 className="text-[24px]">{plant.type}</h3>
                            <h2 className="text-[38px]">{plant.title}</h2>
                            <Button>Buy Now</Button>
                        </div>
                        <span className="border-dashed border-4 w-[50px] h-[5px] mt-4"></span>
                    </CartBox>
                    )})
                }
            </div>
        </section>
    )
}