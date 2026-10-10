import { ThemeContext } from "./Home1";
export default function Navbar()
{
    return(
        <>
            <div style={{textAlign:"center"}}>
                <h1>Navbar Component</h1>
                <ThemeContext.Consumer>
                    {
                        (theme)=>{
                            return(
                                <>
                                <h2>Theme val in Navbar : {theme}</h2>                                
                                </>
                            )
                        }
                    }
                </ThemeContext.Consumer>
            </div>
        </>
    );
}
