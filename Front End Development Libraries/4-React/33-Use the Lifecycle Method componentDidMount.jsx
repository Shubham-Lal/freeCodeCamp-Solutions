class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUsers: null
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                activeUsers: 1273
            });
        }, 2500);
    }
    render() {
        return (
            <div>
                {/* Change code below this line */}
                <h1>Active Users: {this.state.activeUsers}</h1>
                {/* Change code above this line */}
            </div>
        );
    }
}