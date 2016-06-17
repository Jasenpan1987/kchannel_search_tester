import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultList extends Component {

    renderTable(){
        console.log(Object.keys(this.props.results.songs).length === 0)
        if(this.props.results.songs){
            return this.props.results.songs.map((item)=>{
                return (
                    <tr key={item.song_id}>
                        <td key={`${item.song_id}_title`}><strong>{item.title}</strong></td>
                        <td key={`${item.song_id}_artist`}>{item.artist}</td>
                    </tr>
                )
            })
        }
    }

    renderResultText(){
        if(Object.keys(this.props.results.songs).length != 0){
            return (
                <h3>{this.props.results.songs.length} has fund</h3>
            )
        }
    }

    render(){
        return (
            <div>
                <div>
                    {this.renderResultText()}
                </div>
                <table className="table table-striped result-list">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        results: state.searchResult,
    }
}

export default connect(mapStateToProps)(ResultList);