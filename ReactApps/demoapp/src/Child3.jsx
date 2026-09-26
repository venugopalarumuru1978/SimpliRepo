import './Child1.css';
function Child3({btnAction})
{
    return(
        <>
            <h1 className='textalign'> Child -3 Component - Passing function as props arg</h1>
            <div className='textalign'>
                <input type="button"  value="Click Me" onClick={btnAction} />
            </div>
        </>
    );
}

export default Child3;