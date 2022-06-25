export function Rating(props) {
    if(props.book.averageRating) {
        return (
            <div key={props.i} className="stars">
                {props.book.averageRating} / 5 stars                 
            </div>
            )
        } else {
            return (
                <div key={props.i} className="stars">
                    no rating
                </div>
                )
            }
        }