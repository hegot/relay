import React from "react";
import { Link } from 'react-router';
import { stringify } from 'qs';

export default class NavbarFilterRow extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        const { tid, name, filter } = this.props;
        var type = this.props.type;
        if(type == 'people_search'){
            var pathname = '/people_search';
            var query = { [filter] : tid, name : [name] }
        }
        if(type == 'services'){
            var pathname = '/service/' + tid;
            var query = { type: filter }
        }
        return (
            <Link  to={ pathname } query={ query } >{ name }</Link>
        )
    }
}
