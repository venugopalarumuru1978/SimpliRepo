function StdInfo()
{
    // read only data
    let sinfo = [
        {"rno":101, "sname":"Pavan", "course":"java", "fees":15000.00},
        {"rno":102, "sname":"Karan", "course":"java", "fees":15000.00},
        {"rno":103, "sname":"Kiran", "course":"java", "fees":15000.00},
        {"rno":104, "sname":"Pavani", "course":"java", "fees":15000.00},
        {"rno":105, "sname":"Pavan Kumar", "course":"java", "fees":15000.00}
    ];

    return(
        <>
        <h1>Students Information</h1>
        <hr />
        <table width="100%" border="1">
            <thead>
                <tr>
                    <th>Roll Number</th>
                    <th>Student Name</th>
                    <th>Course</th>
                    <th>Fees</th>
                </tr>
            </thead>
            <tbody>
            {
                sinfo.map((std)=>{
                    return(
                    <tr>
                        <td>{std.rno}</td>
                        <td>{std.sname}</td>
                        <td>{std.course}</td>
                        <td>{std.fees}</td>
                    </tr>)
                })
            }
            </tbody>
        </table>
        </>
    );
}

export default StdInfo;