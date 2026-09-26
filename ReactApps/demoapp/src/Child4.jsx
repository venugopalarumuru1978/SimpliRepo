import './Child1.css';
function Child4({children })
{
    return(
        <>
            <h1 className='textalign'> Child -4 Component -  HTML UI as Prop</h1>
            <div>{children}</div>
        </>
    );
}

export default Child4;