import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';

// import Drawer from Ant Design
import { Drawer } from 'antd';

// importing stylesheet
import './style.css';

let activityArr = [];

class Modal extends Component {
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

                                <p className="activityHeading">Activity Logs:</p>

                                {

                                    !this.props.user.activity_periods ? ""
                                        : this.props.user.activity_periods.map(activity => {
                                            let date = moment(activity.start_time, "MMM DD YYYY hh:mm A").format("MMMM DD, YYYY")

                                            if (activityArr.includes(date)) {

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
                                                                    return <p>Start Time: {entry.start_time} - End Time: {entry.end_time}</p>
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


                                        // this.props.user.activity_periods.filter(activity => {
                                        //     return moment(activity.start_time, "MMM DD YYYY hh:mm A").format("MMMM DD, YYYY") === date
                                        // }).map(entry => {
                                        //     return <p>Start Time: {entry.start_time} - End Time: {entry.end_time}</p>
                                        // })