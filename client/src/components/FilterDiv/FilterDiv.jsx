import "./FilterDiv.css"

export default function FilterDiv({open}) {
    if (!open) {
        return (<div></div>);
    }

    return (
        <div className="filter-div">
            <h1 className="filters-title">Filters</h1>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                <label class="form-check-label" for="exampleRadios1">
                    Show all pets
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                <label class="form-check-label" for="exampleRadios2">
                    Show only lost pets
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                <label class="form-check-label" for="exampleRadios3">
                    Show only seen pets
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                <label class="form-check-label" for="exampleRadios1">
                    Show my posts
                </label>
            </div>
        </div>
    )
}