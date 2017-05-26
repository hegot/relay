import React from "react";
import {IndexLink, Link} from "react-router";
class SingleFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: {}
        };
    }

    handleClick(index, filter_name, filter_label, event) {
        var selected = this.state.selected;
        if (selected[index]) {
            delete selected[index];
        } else {
            selected[index] = filter_label;
        }
        this.setState({
            selected: selected,
            key: filter_name,
        });
    }

    _renderCheckboxes() {
        const {values, machine_name} = this.props;
        const filter_wrap_class = machine_name + ' ' + 'filter-values';

        function render_item(checkbox) {
            let selected = this.state.selected[checkbox.id];
            var classvar = 'form-item-checkbox';
            if (selected) {
                classvar = classvar + ' remove';
            }
            return (
                <div key={checkbox.id} className={ classvar }
                     onClick={this.handleClick.bind(this, checkbox.id, checkbox.filter, checkbox.name)}>
                    { checkbox.name }
                    <i></i>
                </div>
            );
        }

        return (
            <div className={filter_wrap_class}>
                {values.map(render_item.bind(this))}
            </div>
        );
    }

    applyFilters(id, filter) {
        var key = this.state.key;
        var filter = { [key] : this.state.selected }
        this.props.submitHandler(filter);
    }

    isEmptyObject(obj) {
        for (var name in obj) {
            return false;
        }
        return true;
    }

    _renderApplyButton(id) {
        var selected = this.isEmptyObject(this.state.selected);
        if (!selected) {
            var text = 'Apply Filters';
            var apply_class = 'filter-apply-btn apply'
        } else {
            var text = 'Choose Filters';
            var apply_class = 'filter-apply-btn choose'
        }
        return (
                <div className={ apply_class }
                     onClick={this.applyFilters.bind(this, id)}>
                    { text }
                </div>
        );
    }
    

    handleOpen(id){
        this.props.clickHandler(id);
    }

    render() {
        const {id, title, values, classvariable} = this.props;

        return (
            <div className={ classvariable }>
                <div class="filter-btn" onClick = {this.handleOpen.bind(this, id)}>
                    <span>{ title }</span>
                </div>
                <div className="filter_container">
                    {this._renderApplyButton(id)}
                    {this._renderCheckboxes()}
                </div>
            </div>
        )
    }
}



export default SingleFilter;