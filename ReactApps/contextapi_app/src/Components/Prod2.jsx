import { useContext } from "react";
import { ThemeContext } from "./Home1";

/*export default function Prod2()
{
    return(
        <>
            <div style={{textAlign:"center"}}>
            <h1>Product-2 Component</h1>
                <ThemeContext.Consumer>
                    {
                        (theme)=>{
                            return(
                                <>
                                <h2>Theme val in Product-2 : {theme}</h2>
                                <button  style={{border: theme==="light" ? "3px solid red":"none", backgroundColor:"yellow"}}>Add To Cart</button>
                                </>
                            )
                        }
                    }
                </ThemeContext.Consumer>                
            </div>
        </>
    );
}
*/
export default function Prod2()
{
    const theme = useContext(ThemeContext);
    return(
        <>
            <div style={{textAlign:"center"}}>
            <h1>Product-2 Component</h1>
            <h2>Theme val in Product-2 : {theme}</h2>
            <button  style={{border: theme==="light" ? "3px solid red":"none", backgroundColor:"yellow"}}>Add To Cart</button>
            </div>
        </>
    );
}
