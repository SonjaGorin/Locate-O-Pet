import "./FilterDiv.css"

export default function FilterDiv({open}) {
    if (!open) {
        return (<div></div>);
    }
    
    return (
        <div className="filter-div">
            <h1>hello</h1>
        </div>
    )
}