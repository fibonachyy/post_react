import React, { Component } from 'react';

class Specifections extends Component {
    state = {}
    render() {
        return (
            <div className='header animated fadeIn'>
                <h2>Specifications:</h2>
                <span className='title_row'><label>Supervisor:</label> <span>Dr. Hasani</span></span>
                <span className='title_row'><label>Collector:</label><span> zahra beigi</span></span>
                <span className='title_row'><label>Developer:</label> <span>Mahdi Ashouri</span></span>
                <span className='title_row'><label>University:</label> <span>University of Science and Culture</span></span>
            </div>
        );
    }
}

export default Specifections;