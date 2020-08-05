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
                    <h1>CONTENT</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis nibh at nibh elementum, eu vestibulum lacus tempor. Morbi euismod ultricies eros, ac aliquam justo consectetur vel. Quisque sed sem non urna consectetur facilisis. Suspendisse pretium lobortis congue. Nam ultrices pulvinar enim, sollicitudin tincidunt arcu fermentum sed. Duis ornare ullamcorper erat, a facilisis lectus sodales vel.</p>
                    <p>In mattis pellentesque sem, sed scelerisque quam euismod ac. Praesent ultrices ullamcorper velit, iaculis luctus ex feugiat eu. Sed tincidunt justo augue, ac laoreet risus feugiat accumsan. Phasellus mattis libero non libero consequat faucibus. Maecenas tempus nec magna et finibus. Phasellus finibus sollicitudin tellus ac sollicitudin. Vivamus maximus consequat felis, non venenatis massa gravida quis. Pellentesque laoreet at metus vel consectetur.</p>
                    <a href="http://lipsum.com" className='link'>lipsum.com</a>
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


ReactDOM.render(
    <App />,
    document.getElementById('root')
)