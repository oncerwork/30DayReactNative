import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function Apps() {
    return(
        <div>
            <Welcome name="HH"/>
            <Welcome name="HY"/>
            <Welcome name="ZZ"/>
        </div>
    );
}

function tick() {
    const  element = (
        <div>
            <h1>Hello world</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    return element;
}

class Clock extends  React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    //生命周期-挂载
    componentDidMount(){
        this.timeID = setInterval(
            ()=>this.tick(),
            1000
        );
    }




    //生命周期-卸载
    componentWillUnmount(){
        clearInterval(this.timerID);
    }


    render(){
        return(
            <div>
                <h1>Hello HH</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>

        );
    }
}


class Toggle extends  React.Component{
    constructor(props){
        super(props);
        this.state = {isToggle: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(){
        this.setState(prevState => ({
            isToggle: !prevState.isToggle
        }));
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggle? '关闭':'打开'}
            </button>
        );
    }
}


function UserGreeting(props) {
    return <h1>Welcome back !</h1>
}

function GuestGreeting(props) {
    return <h1>Please Login!</h1>
}

function Greeting(props) {
    const isLogin = props.isLogin;
    if(isLogin){
        return <UserGreeting/>
    }else{
        return <GuestGreeting/>
    }
}

//列表
const numbers = [1,2,3,4,5];
const listitem = numbers.map((number)=><li>{number}</li>);


function ListItem(props) {
    // 对啦！这里不需要指定key:
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // 又对啦！key应该在数组的上下文中被指定
        <ListItem key={number.toString()}
                  value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}


//受控组件
class NameForm extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            isGoing:true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked: target.value;
        const name = target.name;
        this.setState({[name]:value});
    }


    // handleChange(event){
    //     this.setState({value:event.target.value});
    // }
    //
    // handleSubmit(event){
    //     alert("A name is submmited "+ this.state.value);
    //     event.preventDefault();
    // }


    render(){
        return(
            <form>
                <label>Is ging:
                    <input
                        name="isGoing"
                        type= "checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>Number of guest:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange}
                    />

                    {/*<textarea value={this.state.value} onChange={this.handleChange}/>*/}
                    {/*<select>*/}
                        {/*<option value="grapefruit">Grapefruit</option>*/}
                        {/*<option value="lime">Lime</option>*/}
                        {/*<option value="coconut">Coconut</option>*/}
                        {/*<option value="mango">Mango</option>*/}
                    {/*</select>*/}
                </label>
            </form>
        );
    }
}



//状态提升
function BoilingVerdict(props) {
    if (props.celsius >=100){
        return <p>水开</p>
    }
    else{
        return <p>水没开</p>
    }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
    return (fahrenheit -32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 /5 )+32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}


class  TemperatureInput extends  React.Component{
    constructor(props){
        super(props);
        // this.state = {temperature:""};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        // this.setState({temperature:e.target.value})
        this.props.onTemperatureChange(e.target.value);
    }

    render(){
        const  temp = this.props.temperature;
        const  scale = this.props.scale;
        return(
            <fieldset>
                <legend>输入一个摄氏度{scaleNames[scale]}</legend>
                <input
                    value={temp}
                    onChange={this.handleChange}
                />
                {/*<BoilingVerdict*/}
                    {/*celsius = {parseFloat(temp)}*/}
                {/*/>*/}
            </fieldset>
        )
    }
}

class  Calculator extends  React.Component{
    constructor(props){
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale:'c'};
    }

    handleCelsiusChange(temperature){
        this.setState({scale:'c', temperature});
    }
    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }


    render(){

        const  scale = this.state.scale;
        const  temperature = this.state.temperature;
        const  celsius = scale==='f'? tryConvert(temperature, toCelsius):temperature;
        const  fahrenheit = scale==='c'? tryConvert(temperature, toFahrenheit):temperature;

        return(
            <div>
                <TemperatureInput
                    scale="c"
                    temperature = {celsius}
                    onTemperatureChange = {this.handleCelsiusChange}
                />,
                <TemperatureInput
                    scale="f"
                    temperature = {fahrenheit}
                    onTemperatureChange = {this.handleFahrenheitChange}
                />

                <BoilingVerdict
                    celsius={parseFloat(celsius)}
                />
            </div>
        )
    }
}



{/*<App />,*/}
{/*<Greeting isLogin={false}/>,*/}
{/*<NameForm/>,*/}
ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);



registerServiceWorker();
