import "./FilterDiv.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default function FilterDiv({open}) {
    if (!open) {
        return (<div></div>);
    }
    console.log("Reloading FilterDiv");
    return (
        <div className="filter-div">
            <h1 className="filters-title">Filters</h1>
            <div class="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault"  id="flexRadioDefault1" defaultChecked/>
                <label className="form-check-label" for="flexRadioDefault1" >
                    Show all pets
                </label>
            </div>
            <div class="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault"  id="flexRadioDefault2" />
                <label className="form-check-label" for="flexRadioDefault2" >
                    Show only lost pets
                </label>
            </div>
            <div class="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault"  id="flexRadioDefault3" />
                <label className="form-check-label" for="flexRadioDefault3" >
                    Show only seen pets
                </label>
            </div>
            <div class="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault"  id="flexRadioDefault4" />
                <label className="form-check-label" for="flexRadioDefault4" >
                    Show my posts
                </label>
            </div>
        </div>
    )
}