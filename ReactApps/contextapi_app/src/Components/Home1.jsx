import { createContext } from "react";
import Prod2 from "./Prod2";
import Cat1 from "./Cat1";
import Navbar from "./Navbar";
export const ThemeContext = createContext();

export default function Home1()
{
    const theme = "light";   // theme :  light | dark
    return(
        <>
            <div style={{textAlign:"center"}}>
                <h1>Home-1 Component</h1>
                <ThemeContext.Provider  value={theme}>
                    <Prod2 />
                    <Navbar />
                </ThemeContext.Provider>
                
            </div>
        </>
    );
}