
//函数定义最简单的组件
function Welcome(props) {
    return <h1> hello {props.name}</h1>;
}

// ES6 Class创建组建
class Welcome extends React.Comment{
    render(){
        return <h1>Hello {this.props.name}</h1>
    }
}

const  welcome = <Welcome name="HH">

