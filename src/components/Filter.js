function Filter({SetFilter}) {

    return (
    <div className="Filter">
        <h2>
        Filter:{" "}
        <select name="Filter" onChange={(e) => {SetFilter(e.target.options.selectedIndex)}}>
            <option value="AZ">from A to Z</option>
            <option value="ZA">from Z to A</option>
            <option value="LH"> from lowest rate to highest</option>
            <option value="HL">from highest rate to lowest</option>
        </select>
        </h2>
    </div>
    );
}

export default Filter;