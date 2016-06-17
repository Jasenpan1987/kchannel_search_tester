
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchSongs } from '../../actions/index';
let timer;
class SearchBar extends Component{

    handleChangeFunc(e){
        let value = e.target.value;
        if(timer){
            clearTimeout(timer);
        }

        timer = setTimeout(()=> {
            this.props.searchSongs(value);
        },1000);
    }

    render(){
        //console.log(this.props.searchResult);
        return (
            <div className="row">
                <div className="input-group col-md-12">
                    <span className="input-group-btn">
                        <button className="btn btn-danger" type="button">
                            <span className=" glyphicon glyphicon-search" />
                        </button>
                    </span>
                    <input type="text" className="  search-query form-control" placeholder="Search"
                           onChange={this.handleChangeFunc.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        searchResult: state.searchResult,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        searchSongs
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);