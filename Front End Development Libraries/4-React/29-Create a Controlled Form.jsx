class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    handleSubmit(event) {
        // Change code below this line
        event.preventDefault();
        this.setState({
            submit: this.state.input
        });
        // Change code above this line
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* Change code below this line */}
                    <input value={this.state.input} onChange={this.handleChange} placeholder="Type here..." />
                    {/* Change code above this line */}
                    <button type='submit'>Submit!</button>
                </form>
                {/* Change code below this line */}
                <h1>{this.state.submit}</h1>
                {/* Change code above this line */}
            </div>
        );
    }
}