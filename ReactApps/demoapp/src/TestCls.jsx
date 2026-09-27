import React from "react";

class TestCls extends React.Component
{
     // 1. Constructor (Optional in modern JS, used to initialize state)
        constructor(props) {
            super(props); // Required to bind 'this' and pass down props
            this.state = {
                count: 0,
                x : 100
            };
        }

        // 2. Custom Method / Event Handler
        increment = () => {
            // Always use this.setState to modify state so React knows to re-render
            this.setState({ count: this.state.count + 1 });
        }

    render()
    {
        return(
            <>
                <h1>Hello World - Class Components</h1>
                <h2>Count Value : {this.state.count}</h2>
                <h2>X value is : {this.state.x}</h2>
                <input type="button"  value="Click Me" onClick={this.increment} />
            </>
        );
    }
}

export default TestCls;