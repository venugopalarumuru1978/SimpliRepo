import useToggle from "./Hooks/toogle-hook";

export default function DemoHook()
{
    //const tgl = useToggle(false);
    const [isOpen, toggleModal] = useToggle(false);
    return(
        <>
            <button onClick={toggleModal}>{isOpen ? 'Close Modal' : 'Open Modal'}</button>
            {isOpen && <div style={{backgroundColor:"yellow"}}>Hello! I am a Modal.</div>}
        </>
    );
}
