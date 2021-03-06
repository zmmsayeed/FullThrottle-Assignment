import React from 'react';

// importing components
import Loader from './Components/Loader';
import Navbar from './Components/Navbar';
import EmployeeList from './Components/EmployeeList';
import Modal from './Components/Modal';

// importing stylesheet
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      modalVisible: false,
      modalData: ""
    }
  }

  componentDidMount() {
    // setTimeout to show loader, thats it
    setTimeout(() => {
      // fetch("https://v6i50yvege.execute-api.ap-south-1.amazonaws.com/test/")
      fetch("http://localhost:3001/")
        .then(res => res.json())
        .then(
          (result) => {
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
    }, 2000)
  }

  modalVisiblity = (data) => {
    let visible = this.state.modalVisible
    visible
    ? this.setState({ modalVisible: false, modalData: "" })
    : this.setState({ modalVisible: true, modalData: data })
  }

  render() {
    if (this.state.loading) {
      return <Loader />
    }
    else {
      return (
        <div className="pb-5">
          <Navbar />

          <EmployeeList 
            users={this.state.users.data} 
            onClick={this.modalVisiblity}
          />

          <Modal 
            visible={this.state.modalVisible} 
            onClose={this.modalVisiblity}
            user={this.state.modalData}
          />

        </div>
      );
    }
  }
}

export default App;
