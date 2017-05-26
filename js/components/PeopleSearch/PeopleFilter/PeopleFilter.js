import React from "react";
import ReactDOM from 'react-dom';
import SingleFilter from "./SingleFilter";
import SingleDeselect from "./SingleDeselect";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchLawyers } from "../../../actions/lawyersActions";
import update from 'react-addons-update';

const filter_arr = drupalSettings.people_search;

class PeopleFilter extends React.Component {
    constructor(props) {
        super();
        this.state = {
            selected_filter: 0,
            filters: {},
            routePath: '',
        };
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    addQueryToFilters(){
        var query = this.props.query;
        if(query && query['name']){
            for(var p in query){
                if (query[p] && p != 'name') {
                    var value = query[p];
                    var key = p;
                }
            }
            var name = query['name'];
            var filters = { [key]: {[value] : name}};
            this.setState({
                filters: filters
            });
        }
    }

    componentDidMount() {
        this.addQueryToFilters();
        this.setState({
            routePath: this.props.search,
        });
    }

    componentDidUpdate() {
        var newPath = this.props.search;
        if (this.state.routePath !== newPath) {
            this.addQueryToFilters();
            this.setState({
                routePath: newPath,
            });
        }
    }

    componentWillMount() {
        document.body.addEventListener('click', this.handleClickOutside, false);
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.handleClickOutside, false);
    }

    handleClickOutside(event) {
        if(!ReactDOM.findDOMNode(this).contains(event.target)) {
            this.setState({
                selected_filter: 0
            });
        }
    }

    submitHandler(filter){
        var update_filters = update(this.state.filters, { $merge: filter} );
        this.setState({
            selected_filter: 0,
            filters:update_filters
        });
        this.props.fetchLawyers(update_filters);
    }


    handleDeselect(item_id, filter_label, event){
        var update_filters = this.state.filters;
        delete update_filters[filter_label][item_id];
        var if_empty = Object.getOwnPropertyNames(update_filters[filter_label]).length;
        if(if_empty == 0){
            delete update_filters[filter_label];
        }
        this.setState({
            filters: update_filters
        });
        this.props.fetchLawyers(update_filters);
    }



    clickHandler(index) {
        this.setState({
            selected_filter: index
        });
    }

    _renderFilter() {
        function render_item(filter) {
            let activeClass = (this.state.selected_filter === filter.id ? 'single-filter active' : 'single-filter not-active');
            return (
               <SingleFilter {...filter } key={filter.id} classvariable={activeClass}  clickHandler={this.clickHandler.bind(this)} submitHandler={this.submitHandler.bind(this)}/>              
            );
        }
        var filters = this.state.filters;
        function render_deselect(filters, item_id) {
            return (
                <SingleDeselect key={item_id } filter_label={ item_id } filter={filters[item_id]}  handleDeselect={this.handleDeselect.bind(this)}/>
            );
        }
        return (
            <div>
                <div className="filters">
                    {filter_arr.map(render_item.bind(this))}
                </div>
                <div className="filters_deselect">
                    <div className="res_title">Results for:</div>
                    {  Object.keys(filters).map(render_deselect.bind(this, filters)) }
                </div>
            </div>
        );
    }


  render() {
    return (
      <div className="people-search-form">
          <div className="filter-by">Filter by:</div>
          {this._renderFilter()}
      </div>
    );
  }

}

function mapStateToProps(state) {
    return { };
}


function matchDispatchToProps(dispatch){

    return bindActionCreators({fetchLawyers: fetchLawyers}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(PeopleFilter);
