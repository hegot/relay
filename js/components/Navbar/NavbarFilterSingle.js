import React from "react";
import NavbarFilterRow from "./NavbarFilterRow";

export default class NavbarFilterSingle extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        const { values, title, machine_name } = this.props;
        var type = this.props.type;
        const mappedprops = values.map((value) => {
            return <NavbarFilterRow type={ type } key={value.node.tid} tid={ value.node.tid } name={ value.node.name } filter={machine_name} />;
        });
        
        var id = "edit-filter-type-" + machine_name;
        var id2 = "edit-filter-" + machine_name;
        if(machine_name != 'a_z'){
            var link_title = title;
            var href = '/nav-ajax/filter-type/' + machine_name;
            var class_name = 'use-ajax ajax-processed chadbourne-nav-processed';
        }else{
            var link_title = '';
            var href = '';
            var class_name = 'hidden';
        }
        return (
            <li>
                <a href={ href } className={ class_name } id={ id }>{ title }</a>
                <div className="filter-title form-wrapper filter" id={ id2 }>
                    { mappedprops }
                </div>
            </li>
        )
    }
}
