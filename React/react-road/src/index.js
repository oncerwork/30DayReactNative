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




{/*<App />,*/}
{/*<Greeting isLogin={false}/>,*/}

ReactDOM.render(
    <NumberList numberlist={numbers} />,
    document.getElementById('root')
);



registerServiceWorker();
