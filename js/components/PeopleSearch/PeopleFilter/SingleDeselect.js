import React from "react";
import {IndexLink, Link} from "react-router";
class SingleDeselect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {selected: {}};
    }

    render() {
        const {filter, filter_label} = this.props;
        var deselect = this.props.handleDeselect;
        const mapped_filters = Object.keys(filter).map(function(item, index) {
            return <div className="deselect_filter" key={ index }  onClick = {deselect.bind(this, item, filter_label)}><i></i>{ filter[item] }</div>;
        });
        return (
            <div className='filter-deselect'>
                { mapped_filters }
            </div>
        );
    }
}



export default SingleDeselect;