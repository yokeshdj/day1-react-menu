import ContactUs from "./ContactUs";
import Download from "./Download";
import Help from "./Help";
import Home from "./Home";
import JoinUs from "./JoinUs";
import Login from "./Login";
import Search from "./Search";
import Settings from "./Settings";
function ButtonContainer(){
    const styles = {
        display : "flex"
    }
    return(
        <>
        <div style={styles}>
            <div>
                <JoinUs/>
                <Login/>
                <Search/>
                <Home/>
            </div>
            <div>
                <Settings/>
                <ContactUs/>
                <Help/>
                <Download/>
            </div>
        </div>
        </>
    )
}
export default ButtonContainer