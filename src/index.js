import React from "react";
import ReactDOM from "react-dom";

class Table extends React.Component {
  state = {
    measurements: []
  }



  componentDidMount() {
      console.log("here");

    fetch('http://localhost:3000/getMeasurements')
      .then(response => response.json())
      .then(response => this.setState({measurements: response}))
      .catch(err => console.error(err))


      console.log(this.state.measurements);
  }
 
  render() {
    return (
        <React.Fragment>
        <h1>Contact Management</h1>
        <table border='1' width='100%' >
        <tr>
            <th>Unit ID</th>
            <th>Temperature</th>
            <th>Unix Stamp</th>    
        </tr>

        {this.state.measurements.map((measurement) => (
            <tbody>
            <tr>
                <td>{ measurement.unit_id }</td>
                <td>{ measurement.temperature }</td>
                <td>{ measurement.unix_stamp }</td>
            </tr>
            </tbody>
        ))}
        </table>
        </React.Fragment>
    );
  }

  

}

ReactDOM.render(<Table />, document.getElementById('index'));