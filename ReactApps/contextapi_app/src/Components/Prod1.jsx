export default function Prod1({theme})
{
    return(
        <>
            <div style={{textAlign:"center"}}>
                <h1>Prod-1 Component</h1>
                <h2>Theme val in Product-1 : {theme}</h2>
                <button  style={{border: theme==="light" ? "3px solid red":"none", backgroundColor:"yellow"}}>Add To Cart</button>
            </div>
        </>
    );
}
