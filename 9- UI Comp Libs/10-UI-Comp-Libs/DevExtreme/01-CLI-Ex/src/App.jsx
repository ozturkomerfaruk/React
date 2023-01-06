import 'devextreme/dist/css/dx.light.css'; 
import React from 'react';
import MyChart from './MyChart'
import MyPieChart from './MyPieChart'
import Table from './Table'
import Button from 'devextreme-react/button';

class App extends React.Component {
    render() {
        return (
          <div style={{padding: '0 25%', margin: 'auto'}}>

            {/* Chart example */}
            <MyChart/>
            <br/> <br/>

            {/* PieChart example */}
            <MyPieChart />
            <br/> <br/>

            {/* Table example */}
            <Table />              
            <br/> <br/>

            {/* Button example */}
            <Button
                text="Click me"
                onClick={this.sayHelloWorld}
            />

          </div>            
        );
    }
 
    sayHelloWorld() {
        alert('Hello world!')
    }
}
 
export default App;