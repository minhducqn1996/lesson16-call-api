import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

    const showContentMennu = (routers) => {
        let result = null;
        if (routers.length > 0) {
            result = routers.map((route, index) => {
                
                return (
                    <Route 
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        component={route.main}
                    />
                )
            })
        }
        return <Switch>{result}</Switch>
    }

    return (
        <Router>
            <div>
                <Menu />
                <div className="container">
                    <div className="row">
                       
                        {showContentMennu(routes)}
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
