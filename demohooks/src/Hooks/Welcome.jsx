import { useContext } from "react";
import { user_emp_name } from "../Login";

export default function Welcome()
{
    const uname = useContext(user_emp_name);
    return(
        <>
        <h1>Welcome page {uname}</h1>
        </>
    );
}
