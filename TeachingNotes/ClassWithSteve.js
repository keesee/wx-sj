// Class objective:
// 1review component creations

// 1. Re-enforce Component creation.  Review by having them create a component that calculates force  (m*a).   
        // Have them write the function to briefly review functions.
        // introduce 
        const calcArea = function(w,h) { 
            //  Make sure we atleast have a width
            if (!w) {
                return false // this could be an error but using false for the time being.
            }

            const width = w
            const height = h || w // if no height use the width (its a square)

            return width*height
        }




// 2.  Write it as a component
        class AreaCalc extends React.Component {
            render() {

                // sure we have a width and a height
                // if we don't render an error
                if (!this.props.width) {
                    return <div> Error.  Width is Required </div>
                }

                const squareWidth = this.props.width
                const squareHeight = this.props.height || this.props.width // if no height, use the width (its a square)
                const squareArea = squareWidth * squareHeight

                // make sure we have Mass and accerlation 
                return <div>
                    <div>
                        <span> The are of this square is:  </span>
                        <span> The are of this square is:  </span>
                    </div>
                </div>
            }
        }



