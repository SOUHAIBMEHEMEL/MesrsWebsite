
import React from 'react';
import mobiscroll from '@mobiscroll/react';

import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import mock from './data'

const data=mock.eventsList;

export default class Agenda extends React.Component {
    constructor(props) {
        super(props);
        this.preventSet = false;
        this.state = {
            myEvents: []
        };
        
    }

    componentDidMount() {
        this.setState({myEvents:data})
      }

    
    onPageChange = (event, inst) => {
        this.preventSet = true;
        this.navigate(this.refs.monthCal.instance, event.firstDay);
    }
    
    onSetDate = (event, inst) => {
         if (!this.preventSet && this.refs.dayCal != undefined) {
            this.navigate(this.refs.dayCal.instance, event.date);
         }
        this.preventSet = false;
    }
    
    navigate = (inst, val) => {
        if (inst) {
            inst.navigate(val);
        }
    }

    render () {
        return (
            <div className="mbsc-grid md-demo-synchronized-views">
                <div className="mbsc-row" style={{backgroundColor:'#eee', padding:'30px'}}>
                    <div className="mbsc-col-md-12 mbsc-col-12 md-col-right" style={{height:'120px',paddingTop:'30px'}}>
                        <h3 style={{width:'100%', textAlign:'center'}}>Ecoles Superieures</h3>
                    </div>
                    <div className="mbsc-col-md-8 mbsc-col-12 md-col-right">
                        <mobiscroll.Eventcalendar
                            theme="ios" 
                            themeVariant="light"
                            ref="dayCal"
                            display="inline"
                            view={{
                                eventList: { type: 'day' }
                            }}
                            data={this.state.myEvents}
                            onPageChange={this.onPageChange}
                            
                        />
                    </div>
                    <div className="mbsc-col-md-4 mbsc-col-12">
                        <mobiscroll.Eventcalendar
                            theme="ios" 
                            themeVariant="light"
                            ref="monthCal"
                            display="inline"
                            view={{
                                calendar: { type: 'month' }
                            }}
                            data={this.state.myEvents}
                            onSetDate={this.onSetDate}
                        />
                    </div>
                </div>
            </div>
        );
    }    
}

