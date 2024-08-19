import React, {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumber: '',
            secondNumber: '',
            result: '0',
            operation: ''
        };
    }

    handleInputChange = (event, input) => {
        this.setState({ [input]: event.target.value });
    };

    handleOperationChange = (operation) => {
        this.setState({ operation });
    };
    handleCalculation = () => {
        const { firstNumber, secondNumber, operation } = this.state;
        const num1 = parseInt(firstNumber, 10);
        const num2 = parseInt(secondNumber, 10);

        let result;
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case 'x':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }
        this.setState({ result });
    };

    render() {
        const { firstNumber, secondNumber, result } = this.state;

        return (
            <div style={{ padding: '20px' }}>
                <h2>Calculator</h2>
                <input
                    type="text"
                    value={firstNumber}
                    onChange={(e) => this.handleInputChange(e, 'firstNumber')}
                    placeholder="Nhập số thứ nhất:"
                    style={{ marginRight: '10px' }}
                />
                <input
                    type="text"
                    value={secondNumber}
                    onChange={(e) => this.handleInputChange(e, 'secondNumber')}
                    placeholder="Nhập số thứ hai:"
                    style={{ marginRight: '10px' }}
                />
                <div>
                    <button onClick={() => this.handleOperationChange('+')}>+</button>
                    <button onClick={() => this.handleOperationChange('-')}>-</button>
                    <button onClick={() => this.handleOperationChange('x')}>x</button>
                    <button onClick={() => this.handleOperationChange('/')}>/</button>
                </div>
                <button onClick={this.handleCalculation} style={{ marginTop: '10px' }}>Calculator</button>
                <div style={{ marginTop: '10px' }}>
                    <h3>Result: {result}</h3>
                </div>
            </div>
        );
    }
}

export default App;