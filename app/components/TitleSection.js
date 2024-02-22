import styles from "@/app/components/TitleSection.module.css"
export default function TitleSection({children}) {
    return(
        <div className={styles.titleBox}>
            <h2 className="text-[55px] text-white font-bold">
                {children}
            </h2>
        </div>
    )
}