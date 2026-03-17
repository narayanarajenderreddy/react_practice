import {useContext} from "react";
import {ThemeContext} from "./themecontext";

function Child() {
    const theme = useContext(ThemeContext);
    console.log("child component rendered with theme:",theme);
    return(
        <h1>context_theme value:{theme}</h1>
    );
}


export default Child;