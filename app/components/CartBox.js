import styles from "@/app/components/CartBox.module.css";

export function CartBox({children, p_style}) {
    return(
        <article className={`${styles.cart} ${p_style}`}>
            {children}
        </article>
    );
}