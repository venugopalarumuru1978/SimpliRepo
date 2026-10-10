import Cat from "./Cat";

export default function Home()
{
    const theme = "dark";   // theme :  light | dark
    return(
        <>
            <div style={{textAlign:"center"}}>
                <h1>Home Component</h1>
                <Cat theme={theme} />
            </div>
        </>
    );
}