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
                    <h1>LIST</h1>
                    <List name='Надя'/>
                    <List name='Надя'/>
                    <List name='Надя'/>
                    <List name='Надя'/>
                </div>
            </div>
        )
    }
}

class List extends React.Component {
    render() {
        return(
            <ul>
                <li>
                    {this.props.name}
                </li>
            </ul>
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
    document.getElementById('root')
)