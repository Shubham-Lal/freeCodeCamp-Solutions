const CurrentDate = (props) => {
    return (
        <div>
            { /* Change code below this line */}
            <p>The current date is: {props.date}</p>
            { /* Change code above this line */}
        </div>
    );
};

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>What date is it?</h3>
                { /* Change code below this line */}
                <CurrentDate date={Date()} />
                { /* Change code above this line */}
            </div>
        );
    }
};