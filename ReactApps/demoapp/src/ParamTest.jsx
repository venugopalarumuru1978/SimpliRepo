import { useParams } from "react-router-dom";

function ParamTest()
{
    const {loc, ph} = useParams();
    //const {ph} = useParams();
    return(
        <>
        <h1>ur Location is  :{loc}</h1>
        <h1>ur Phone is  : {ph}</h1>
        </>
    );
}

export default ParamTest;