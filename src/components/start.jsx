import { Link } from "react-router-dom";

export function Start() {
    return(
        <div className="start">
            <h1>We Are Readers</h1>
            <label>publish, buy, read, sell, resell</label><br />
            <button className="starter"><Link to="/reader">I am a reader</Link></button>
            <button className="starter"><Link to="/publisher">I am a publisher</Link></button>
        </div>
    )
}