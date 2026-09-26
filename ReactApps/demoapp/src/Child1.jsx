import './Child1.css';
function Child1(props)
{
    return(
        <>
            <h1 className='textalign'> Child Component</h1>
            <h2 className='textalign'> Person name : {props.pname}</h2>
            <h2 className='textalign'> Person Age : {props.age} years</h2>
            <h2 className='textalign'> Person Location : {props.location}</h2>
        </>
    );
}

export default Child1;