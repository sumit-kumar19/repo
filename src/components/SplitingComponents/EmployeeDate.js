const EmployeeDate = (props) => {
    return (
        <div className='div-date'>
            <div>{props.empDate.toDateString()}</div>          
        </div>
    );
}

export default EmployeeDate;