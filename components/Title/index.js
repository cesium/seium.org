import styles from "./style.module.css"; 

function Title({ description, title }) {
    return (
        <>
            <p className={styles.description}> {description} </p>
            <h1 className={styles.title}> {title} </h1>
        </>
    );
}

export default Title;
