import "./style.scss";

const Calculator = () => {
    const [exp, setExp] = React.useState("");
    const [io, setIO] = React.useState("0");
    const [isSolved, setIsSolved] = React.useState(false);
    const operators = ["/", "*", "+", "-"];

    const clear = () => {
        setExp("");
        setIO("0");
    };

    const operator = (o) => {
        let tempExp = exp;

        if (isSolved) {
            tempExp = io;
            setIsSolved(false);
        }

        if (o !== "-") {
            tempExp = tempExp.replace(/[*\/+-]+$/, "");
        }
        else if (o === "-" && tempExp.endsWith("-")) {
            return;
        }

        setExp(tempExp + o);
        setIO(o);
    };

    const input = (i) => {
        let tempExp = exp;
        let tempIO = io;

        if (i === "0" && tempExp === "0") {
            return;
        }

        if (isSolved) {
            tempExp = "";
            tempIO = "";
            setIsSolved(false);
        }

        if (operators.includes(io)) {
            tempIO = "";
        }

        if (tempIO === "0") {
            tempIO = "";
        }

        if (i === ".") {
            if (tempIO.includes(".")) {
                return;
            }
            if (tempIO === "") {
                tempIO = "0";
            }
            if (tempExp === "" || /[*\/+-]$/.test(tempExp)) {
                tempExp += "0";
            }
        }

        setExp(tempExp + i);
        setIO(tempIO + i);
    };

    const solve = () => {
        let tempExp = exp;

        tempExp = tempExp.replace(/[*\/+-]+$/, "");

        if (!isSolved) {
            const answer = eval(tempExp).toString();
            setExp(tempExp + "=" + answer);
            setIO(answer);
            setIsSolved(true);
        }
    };

    return (
        <div className="calculator">
            <div className="exp">{exp}</div>
            <div className="io" id="display">{io}</div>
            <div className="ac"><button id="clear" onClick={clear}>AC</button></div>
            <div className="d"><button id="divide" onClick={() => operator("/")}>/</button></div>
            <div className="m"><button id="multiply" onClick={() => operator("*")}>x</button></div>
            <div className="n7"><button id="seven" onClick={() => input("7")}>7</button></div>
            <div className="n8"><button id="eight" onClick={() => input("8")}>8</button></div>
            <div className="n9"><button id="nine" onClick={() => input("9")}>9</button></div>
            <div className="s"><button id="subtract" onClick={() => operator("-")}>-</button></div>
            <div className="n4"><button id="four" onClick={() => input("4")}>4</button></div>
            <div className="n5"><button id="five" onClick={() => input("5")}>5</button></div>
            <div className="n6"><button id="six" onClick={() => input("6")}>6</button></div>
            <div className="a"><button id="add" onClick={() => operator("+")}>+</button></div>
            <div className="n1"><button id="one" onClick={() => input("1")}>1</button></div>
            <div className="n2"><button id="two" onClick={() => input("2")}>2</button></div>
            <div className="n3"><button id="three" onClick={() => input("3")}>3</button></div>
            <div className="eq"><button id="equals" onClick={solve}>=</button></div>
            <div className="n0"><button id="zero" onClick={() => input("0")}>0</button></div>
            <div className="dec"><button id="decimal" onClick={() => input(".")}>.</button></div>
        </div>
    );
};

const App = () => {

    return (
        <div>
            <Calculator />
            <br />
            <div className="credit">
                <p>Designed and Coded By</p>
                <a href="https://shubhamlal.is-a.dev" target="_blank">Shubham Lal</a>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));