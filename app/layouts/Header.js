import styles from "./Header.module.css";
export default function Header() {
    return(
        <header className={styles.navBar}>
            <div className={styles.logoBlock}>
                <img src="./assets/plant_logo.svg" alt=""/>
                <h2>Planto.</h2>
            </div>
            <nav className="flex gap-8 justify-center items-center font-medium">
                <a href="">Home</a>
                <div>
                <a href="">Plants Type (down)</a>
                    <ul>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                    </ul>
                </div>
                <a href="">More</a>
                <a href="">Contact</a>
            </nav>
            <div className="flex gap-12 justify-end items-center">
                <img width="26" className="w-[26px] h-[26px]" src="./assets/search-icon.svg" alt=""/>
                <img width="26" className="w-[26px] h-[26px]" src="./assets/bag-icon.svg" alt=""/>
                <img width="26" className="w-[26px] h-[26px]" src="./assets/menu-icon.svg" alt=""/>
            </div>
        </header>
    )
}