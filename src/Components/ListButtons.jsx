import Buttons from "./Buttons"
function ListButtons(){
    const styles = {
        display : "flex"
    }
    return(
        <div style={styles}>
            <div>
                <Buttons type="join" title="JOIN US"/>
                <Buttons type="login" title="LOGIN"/>
                <Buttons type="search" title="SEARCH"/>
                <Buttons type="home" title="HOME"/>
            </div>
            <div>
                <Buttons type="settings" title="SETTINGS"/>
                <Buttons type="contact" title="CONTACT US"/>
                <Buttons type="help" title="HELP"/>
                <Buttons type="download" title="DOWNLOAD"/>
            </div>
        </div>
    )
}
export default ListButtons