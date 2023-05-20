class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'CamperBot'
        }
    }
    render() {
        return (
            <div>
                {/* Change code below this line */}
                <Navbar name={this.state.name} />
                {/* Change code above this line */}
            </div>
        );
    }
};

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {/* Change code below this line */}
                <h1>Hello, my name is: {this.props.name}</h1>
                {/* Change code above this line */}
            </div>
        );
    }
};