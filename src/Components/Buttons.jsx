import styles from "./Buttons.module.css";
function bgColor(type){
    switch(type){
        case "join":
            return "blue"
        case "login":
            return "rgb(246,150,33)"
        case "search":
            return "green"
        case "home":
            return "pink"
        case "settings":
            return "rgb(107,152,162)"
        case "contact":
            return "rgb(173,40,48)"
        case "help":
            return "rgb(74,67,125)"
        case "download":
            return "rgb(161,128,65)"
        default:
            return "blue"
    }
}
function Buttons({title,type}){
    const background = {
        backgroundColor : bgColor(type)
    }
    console.log(background);
    return(
        <div>
            <button className={styles.button} style={background}>{title}</button>
        </div>
    )
}
export default Buttons