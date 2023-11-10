import { FormEvent } from "react";

function CategoryForm({ category }) {
    
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
    }

    return (
        <form className="add-skill-form" action="">
            <input id={category} name={category}></input>
            <button type="submit" onClick={handleSubmit}>+</button>
        </form>
    )
}

export { CategoryForm }