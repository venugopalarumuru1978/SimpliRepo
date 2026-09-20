import './Test.css'
function Test1()
{
    // read only data
    let x = 10;
    let str = 'React Application';
    let y = 12.45;
    let cities = ["Hyderbad", "Mumbai", "Amaravathi", "Bangalore", "Pune"];
    return(
        <>
            <h1 className='textcolor'>Hello World - React with Vite </h1>
            <h1>X value is {x}</h1>
            <h1>Float Value {y}</h1>
            <h1>String value {str}</h1>
            <h1>Addition Value is : {x+y}</h1>
            <h2>City Names using  Ordered List</h2>
            <ol type="A" style={{textAlign:"left"}}>
                {
                    cities.map((ct)=>(
                        <li>{ct}</li>
                    ))
                }
            </ol>
        </>
    );
}

export default Test1;