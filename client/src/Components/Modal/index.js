import React, { Component } from 'react';
import moment from 'moment';

// import Drawer from Ant Design
import { Drawer, DatePicker } from 'antd';

// importing stylesheet
import './style.css';

let activityArr = [];

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filtered: false
        }
    }

    dateChange = (date, dateString) => {
        activityArr = [];
        this.setState({ filtered: true, filterDate: dateString })
    }

    render() {

        if (this.props.visible) {
            return (
                <Drawer
                    width={window.innerWidth > 900 ? '50%' : '95%'}
                    // title={this.props.user.real_name}
                    placement="right"
                    // closable={true}
                    onClose={() => {
                        activityArr = [];
                        this.setState({ filtered: false })
                        this.props.onClose(this.props.user)
                    }}
                    visible={this.props.visible}
                >

                    {
                        !this.props.user
                            ? ""
                            : <>
                                <p className="modalHeader">
                                    {this.props.user.real_name}
                                </p>
                                <p className="modalId">
                                    ID: {this.props.user.id}
                                </p>
                                <hr />

                                <div className="row">
                                    <div className="col-6 mt-2">
                                        <p className="activityHeading">Activity Logs:</p>
                                    </div>
                                    <div className="col-6 text-right">
                                        <DatePicker size="large" 
                                            className="w-100" 
                                            placeholder="Activity Date" 
                                            onChange={this.dateChange}
                                        />  
                                    </div>
                                </div>

                                {
                                    this.state.filtered
                                    ? !this.props.user.activity_periods ? ""
                                    : this.props.user.activity_periods.filter(ent => {
                                        return moment(ent.start_time, "MMM DD YYYY hh:mmA").format("YYYY-MM-DD") === moment(this.state.filterDate, 'YYYY-MM-DD').format("YYYY-MM-DD")
                                    }).map(activity => {
                                        let date = moment(activity.start_time, "MMM DD YYYY hh:mmA").format("MMMM DD, YYYY")

                                        if (activityArr.includes(date)) {
                                            return null
                                        }
                                        else {
                                            activityArr.push(date);
                                            return (
                                                <div className="mb-3">
                                                    <p className="modalDate mb-1">
                                                        Date: {date}
                                                    </p>
                                                    <table>

                                                        {
                                                            this.props.user.activity_periods.filter(activity => {
                                                                return moment(activity.start_time, "MMM DD YYYY hh:mm A").format("MMMM DD, YYYY") === date
                                                            }).map((entry, index) => {
                                                                activityArr.push(entry);
                                                                if (index === 0) {
                                                                    return (<>
                                                                        <tr>
                                                                            <th>Start Time</th>
                                                                            <th>End Time</th>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>{moment(entry.start_time, "MMM DD YYYY hh:mm A").format("hh:mmA")}</td>
                                                                            <td>{moment(entry.end_time, "MMM DD YYYY hh:mm A").format("hh:mmA")}</td>
                                                                        </tr>
                                                                    </>)
                                                                }
                                                                else {
                                                                    return (<>
                                                                        <tr>
                                                                            <td>{moment(entry.start_time, "MMM DD YYYY hh:mm A").format("hh:mmA")}</td>
                                                                            <td>{moment(entry.end_time, "MMM DD YYYY hh:mm A").format("hh:mmA")}</td>
                                                                        </tr>
                                                                    </>)
                                                                }
                                                            })
                                                        }

                                                    </table>
                                                </div>
                                            )
                                        }
                                    })
                                    
                                    : !this.props.user.activity_periods ? ""
                                        : this.props.user.activity_periods.map(activity => {
                                            let date = moment(activity.start_time, "MMM DD YYYY hh:mm A").format("MMMM DD, YYYY")

                                            if (activityArr.includes(date)) {
                                                return null
                                            }
                                            else {
                                                activityArr.push(date);
                                                return (
                                                    <div className="mb-3">
                                                        <p className="modalDate mb-1">
                                                            Date: {date}
                                                        </p>
                                                        <table>

                                                            {
                                                                this.props.user.activity_periods.filter(activity => {
                                                                    return moment(activity.start_time, "MMM DD YYYY hh:mm A").format("MMMM DD, YYYY") === date
                                                                }).map((entry, index) => {
                                                                    activityArr.push(entry);
                                                                    if (index === 0) {
                                                                        return (<>
                                                                            <tr>
                                                                                <th>Start Time</th>
                                                                                <th>End Time</th>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>{moment(entry.start_time, "MMM DD YYYY hh:mm A").format("hh:mmA")}</td>
                                                                                <td>{moment(entry.end_time, "MMM DD YYYY hh:mm A").format("hh:mmA")}</td>
                                                                            </tr>
                                                                        </>)
                                                                    }
                                                                    else {
                                                                        return (<>
                                                                            <tr>
                                                                                <td>{moment(entry.start_time, "MMM DD YYYY hh:mm A").format("hh:mmA")}</td>
                                                                                <td>{moment(entry.end_time, "MMM DD YYYY hh:mm A").format("hh:mmA")}</td>
                                                                            </tr>
                                                                        </>)
                                                                    }
                                                                })
                                                            }

                                                        </table>
                                                    </div>
                                                )
                                            }
                                        })

                                }</>

                    }

                </Drawer>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
}

export default Modal;