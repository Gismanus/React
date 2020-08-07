import React from 'react';
import ReactDOM from 'react-dom';

class Links extends React.Component {
    render(props) {
        return(
            <ul>
                <a href='./index.html' className='link button'>
                    {this.props.name1}
                </a>
                <a href='./page2.html' className='link button'>
                    {this.props.name2}
                </a>
                <a href='page3.html' className='link button'>
                    {this.props.name3}
                </a>
                <a href='page4.html' className='link button'>
                    {this.props.name4}
                </a>
            </ul>
        )
    }
}

class Header extends React.Component {
    render(){
        return(
            <div className='header'>
                <div className="header__container container">
                    <div className='headerName'>HEADER</div>
                    <Links name1='Страница 1' name2='Страница 2' name3='Страница 3' name4='Страница 4'/>
                </div>
            </div>
        );
    }
}

class Content extends React.Component {
    render(){
        return(
            <div className='content'>
                <div className="container">
                    <h1>COUNTER</h1>
                    <Counter />
                    <br/>
                    <a href="https://ru.reactjs.org/"  target='_blank'><img src='img/react.png'/></a>
                </div>
            </div>
        )
    }
}

class App extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0}
        /*this.myClickHandler = this.myClickHandler.bind(this)*/
    }
   componentDidMount() {
       this.timer = setInterval(() => {
           this.setState({count: this.state.count + 1})
       }, 1000);
   }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    /*myClickHandler = function(){ /!* call, apply, bind *!/
        this.setState({count: 0})
    }*/

    myClickHandler = () => {
        this.setState({count: 0})
    }

    render(){
        if (this.state.count < 5) {
            return (
                <div className='counter'>
                    Count is {this.state.count}
                </div>
            )
        } else {
            return (
                <div className='counter'>
                    Count is {this.state.count}. Count is bigger than 5
                    <button type="reset" className='button_count' onClick={this.myClickHandler}>Reset</button>
                </div>
            )
        }
    }

}

class Footer extends React.Component {
    render(){
        return(
            <div className='footer'>
                <div className="container">
                    <h1>FOOTER</h1>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
