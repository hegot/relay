import React from "react";
import { connect } from "react-redux";
import { fetchNode } from "../../actions/nodeActions";
import ServiceNodeTabs from "./ServiceNodeTabs/ServiceNodeTabs";
import { fetchLawyers } from "../../actions/lawyersActions";
import Lawyer_row from "../PeopleSearch/Lawyer_row";
import { Link } from "react-router";

class ServiceNode extends React.Component {

    constructor(props) {
        super();
        this.state = {
            routePath: '',
        };
    }

    componentDidMount() {
        var newPath = this.props.location.pathname;
        this.getServiceNode(newPath);
        this.populateTeamTab();
        this.setState({
            routePath: newPath,
        });
    }

    populateTeamTab(){
        var type = this.props.location.query.type;
        var serviceId = this.props.params.serviceId;
        var query = {[type]: serviceId};
        this.props.dispatch(fetchLawyers(query))
    }

    getServiceNode(newPath){
        var serviceId = this.props.params.serviceId;
        this.props.dispatch(fetchNode('/service_node', serviceId));
    }

    componentDidUpdate() {
        var newPath = this.props.location.pathname;
        if (this.state.routePath !== newPath) {
            this.getServiceNode();
            this.populateTeamTab();
            this.setState({
                routePath: newPath,
            });
        }
    }

    render_related_data(str_value, nids, type){
        if(str_value){
            var arr = str_value.split('|');
            var nids_arr = nids.split('|');
            const mappedvalue = arr.map((value, index) => {
                var url = '/service/' + nids_arr[index];
                return <li key={value}>
                   <Link to={{ pathname: url, query: {type: type} }}>{value}</Link>
                </li>
            });
            return mappedvalue;
        }
    }



    render() {
        const { node, lawyers } = this.props;
        var service_data = node[0];

        if(service_data && lawyers.length > 0){
            const mappedpractices = this.render_related_data(service_data.field_related_practice, service_data.field_related_practice_1, 'practice');
            const mappedindustries = this.render_related_data(service_data.field_related_industry, service_data.field_related_industry_1, 'industry');
            const mappedregions = this.render_related_data(service_data.field_related_region, service_data.field_related_region_1, 'region');
            function render_related_items(item, title){
                if(item){
                    return(
                        <div className="related_data_row">
                            <h3 class="related_data_label">{ title }</h3>
                            <ul> { item } </ul>
                        </div>
                    );
                }
            }

            var overview = {
                id: 'overview',
                label: 'Overview',
                content: service_data.body,
            }

            if(service_data.field_primary_experience && service_data.field_related_experience){
                var experiencecontent =  service_data.field_primary_experience + service_data.field_related_experience
            }else{
                var experiencecontent = service_data.field_primary_experience;
            }
            var experience = {
                id: 'experience',
                label: 'Experience',
                content: experiencecontent,
            }

            const mappedLawyers = lawyers.map((lawyer, index) => {
                return <Lawyer_row key={index} {...lawyer}/>;
            });
            var team = {
                id: 'team',
                label: 'Team',
                content: mappedLawyers,
            }

            const tabs = [overview, experience, team];
            return (
                <div className="lawyer_node container-fluid">
                    <div className="row">
                            <h1 className="title">
                                { service_data.title }
                            </h1>
                    </div>
                    <div className="row">
                        <div className="col-md-9">
                            <ServiceNodeTabs tabs={ tabs } />
                        </div>
                        <div className="col-md-3 lawyer_related_data">
                            { render_related_items(mappedpractices, 'Practice') }
                            { render_related_items(mappedindustries, 'Industries') }
                            { render_related_items(mappedregions, 'Regions') }
                        </div>
                    </div>
                </div>
            );
        }else{
            return(
                <div>
                </div>
            );
        }

    }
}


function mapStateToProps(state) {
    return {
        node: state.node.node,
        lawyers: state.lawyers.lawyers
    };
}

export default connect(mapStateToProps)(ServiceNode);