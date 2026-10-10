import Prod1 from "./Prod1";

export default function Cat({theme})
{
    return(
        <>
            <div style={{textAlign:"center"}}>
                <h1>Category Component</h1>
                <h2>theme val in Category : {theme}</h2>
                <Prod1 theme={theme} />
            </div>
        </>
    );
}
