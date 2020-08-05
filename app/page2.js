import React from 'react';
import ReactDOM from 'react-dom';

class Links extends React.Component {
    render(props) {
        return(
            <ul>
                <a href='index.html' className='link button'>
                    {this.props.name1}
                </a>
                <a href='page2.html' className='link button'>
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

let count = 0;
class Counter extends React.Component {
    render(props){
        if (count < 5) {
            return (
                <div className='counter'>
                    Count is {count}
                </div>
            )
        } else {
            return (
                <div className='counter'>
                    Count is {count}. Count is bigger than 5
                    <button type="reset" className='button_count' onClick={this.myClickHandler}>Reset</button>
                </div>
            )
        }
    }
    myClickHandler(){
        count = 0;
    }
}

function counter(){
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
    count++;
}
setInterval(counter, 1000)
