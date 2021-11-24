import styles from './style.module.css';

export default function Day(props)
{
    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Oct", "Nov", "Dec" ];
    let date = props.date.split("/");
    let date_string = date[2] + " " + months[date[1] - 1];
    let date_descriptor = "Today";  //TODO

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.leftArrow} ${styles.arrowWrapper}`}>
                <button className={`${styles.prev} ${styles.arrow}`} onClick={props.previousDay}></button>
            </div>

            <div className={`-mt-10 ${styles.dateWrapper}`}>
                <h5 className="text-3xl text-blue-500 font-bold"> { date_string } </h5>
                <h2 className="font-bold text-8xl text-white"> { date_descriptor } </h2>
            </div>
            
            <div className={`${styles.rightArrow} ${styles.arrowWrapper}`}>
                <button className={`${styles.next} ${styles.arrow}`} onClick={props.nextDay}></button>
            </div>
        </div>
    );
}