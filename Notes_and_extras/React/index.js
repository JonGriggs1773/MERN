
class ExampleButton extends React.Component {
    constructor(props) {
        super(props);
            this.state = { isClicked: false };
        }
        render() {
            if (this.state.isClicked) {
                return 'You clicked this';
            }
            return React.createElement(
                'button',
                {onClick: () => this.setState({ isClicked: true })},
                'Click me!'
            );
        }
    }


// Selecting root div by the id
const domContainer = document.querySelector('#root');
// Creating the root of React dom
const root = ReactDOM.createRoot(domContainer);
// Render what we see
root.render(React.createElement(ExampleButton));