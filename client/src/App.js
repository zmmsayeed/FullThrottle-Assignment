import React from 'react';

// importing components
import Loader from './Components/Loader';
import Navbar from './Components/Navbar';
import EmployeeList from './Components/EmployeeList';

// importing stylesheet
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    // setTimeout to show loader, thats it
    // setTimeout(() => {
      fetch("http://localhost:3001/getUsers")
        .then(res => res.json())
        .then(
          (result) => {
            console.log("Second Result: ", JSON.stringify(result))
            this.setState({
              loading: false,
              users: result
            });
          },
          (error) => {
            this.setState({
              loading: false,
              error
            });
          }
        )
        .catch(error => {
          this.setState({
            loading: false,
            error
          });
        })
        .catch(error => {
          this.setState({
            loading: false,
            error
          });
        })
    // }, 2000)
  }

  render() {
    if (this.state.loading) {
      return <Loader />
    }
    else {
      return (
        <div className="App">
          <Navbar />

          <EmployeeList users={this.state.users.data} />

          {/* {
            !this.state.users ? ""
              : !this.state.users.data ? "No data could be fetched"
                : this.state.users.data.map(user => (
                  <div className="container pt-5">
                    <Card> Mohammad Zimam Sayeed </Card>
                    <OutlineCard>
                      <div className="text-center">View All Activities</div>
                    </OutlineCard>
                  </div>
                ))
          } */}

        </div>
      );
    }
  }
}

export default App;
