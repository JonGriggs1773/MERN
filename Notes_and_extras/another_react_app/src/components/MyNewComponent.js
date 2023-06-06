//? Giving this file access to the ability to make a component through import
import React, {Component} from 'react'

// All components must:
// 1. Have a name starting with a capital letter
// 2. Extend the Component functionality coming in through line 2
// 3. Have a render() method that returns a react element like JSX (As seen below), or .createElement()
class MyNewComponent extends Component {
    render(){
        return(
            <div>
                {this.props.someText}
            </div>
        )
    }
}

export default MyNewComponent