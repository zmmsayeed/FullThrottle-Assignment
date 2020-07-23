import React, { Component } from 'react'

// Importing List component from Ant Design
import { List } from 'antd';

// importing Components
import Card from '../Card';
import OutlineCard from '../OutlineCard';

// importing stylesheet
import './style.css';

class EmployeeList extends Component {
    render() {
        return (
            <div className="container ">

                <List
                    grid={{ xs: 1, sm: 1, md: 1, lg: 3, xl: 3, xxl: 3 }}
                    pagination={{
                        pageSize: 6,
                    }}
                    dataSource={this.props.users}
                    renderItem={user => {
                        return (
                            <div className="m-3 cardContain">
                                <Card>
                                    <p className="name">
                                        {user.real_name}
                                    </p>
                                    <p className="user_id">
                                        User ID: {user.id}
                                    </p>
                                    <hr />
                                    <p className="logHeading">Last Activity:</p>
                                    
                                    {/* Display the last activity */}
                                    <p className="date">
                                        {
                                            user.activity_periods.length > 0
                                            ? user.activity_periods[user.activity_periods.length - 1].start_time + " - " + user.activity_periods[user.activity_periods.length - 1].end_time
                                            : ""
                                        }
                                    </p>
                                </Card>
                                <OutlineCard>
                                    <div className="text-center">
                                        <span className="link" onClick={() => this.props.onClick(user)}>
                                            View All Activities
                                        </span>
                                    </div>
                                </OutlineCard>
                            </div>
                        )
                    }}
                />
            </div>
        )
    }
}


export default EmployeeList
