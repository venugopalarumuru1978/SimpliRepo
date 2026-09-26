import './Child1.css';
function Child2({author, bookname, isSelling, status="Active"})
{
    return(
        <>
            <h1 className='textalign'> Child-2 Component</h1>
            <h2 className='textalign'>Book Name : {bookname}</h2>
            <h2 className='textalign'>Book Author : {author}</h2>
            <h2 className='textalign'>{isSelling?'Book sales is Live':'Book sales not live'}</h2>
            <h2 className='textalign'>Book Status is : {status}</h2>

        </>
    );
}

export default Child2;