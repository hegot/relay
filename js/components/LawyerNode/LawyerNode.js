import React from "react";
import { connect } from "react-redux";
import { fetchNode } from "../../actions/nodeActions";
import LawyerNodeTabs from "./LawyerNodeTabs/LawyerNodeTabs";
import { Link } from "react-router";

class LawyerNode extends React.Component {

    componentDidMount() {
        var lawyerId = this.props.params.lawyerId;
        this.props.dispatch(fetchNode('/lawyer_node', lawyerId))
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
        const { node } = this.props;
        var lawyer_data = node[0];

        if(lawyer_data){
            const mappedpractices = this.render_related_data(lawyer_data.field_related_practice, lawyer_data.field_related_practice_1, 'practice');
            const mappedindustries = this.render_related_data(lawyer_data.field_related_industry, lawyer_data.field_related_industry_1, 'industry');
            const mappedregions = this.render_related_data(lawyer_data.field_related_region, lawyer_data.field_related_region_1, 'region');
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

            var mailto = 'mailto:' + lawyer_data.field_lawyer_email;

            var overview = {
                id: 'overview',
                label: 'Overview',
                content: lawyer_data.body,
            }
            var experience = {
                id: 'experience',
                label: 'Experience',
                content: lawyer_data.field_other_distinctions,
            }
            if(lawyer_data.field_activities_affiliations && lawyer_data.field_professional_backgroun){
                var credentialscontent =  lawyer_data.field_activities_affiliations + lawyer_data.field_professional_background
            }else{
                var credentialscontent = lawyer_data.field_professional_background;
            }
            var credentials = {
                id: 'credentials',
                label: 'Credentials',
                content: credentialscontent,
            }
            const tabs = [overview, experience, credentials];

            return (
                <div className="lawyer_node container-fluid">
                    <div className="row">
                        <div className="col-md-3 lawyer_photo">
                           <img src={ lawyer_data.field_lawyer_image } />
                        </div>
                        <div className="col-md-6 lawyer_top_center">
                            <h1 className="title">
                                { lawyer_data.title }
                            </h1>
                            <div className="lawyer_title">
                                { lawyer_data.field_title }
                            </div>
                            <div className="lawyer_email">
                                <a href={ mailto }>{ lawyer_data.field_lawyer_email }</a>
                            </div>
                            <div className="address-row">
                                <div className="office-name">
                                    { lawyer_data.field_related_offices }
                                </div>
                                <div className="phone">
                                    { lawyer_data.field_lawyer_phone }
                                </div>
                                <div className="phone">
                                    { lawyer_data.field_lawyer_address }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="lawyer_top_tabs">
                                <div className="lawyer_top_tab">
                                    <label>Education</label>
                                    <div className="lawyer_top_tab_hide" dangerouslySetInnerHTML={{ __html: lawyer_data.field_lawyer_education }}></div>
                                </div>
                                <div className="lawyer_top_tab">
                                    <label>Admissions</label>
                                    <div className="lawyer_top_tab_hide" dangerouslySetInnerHTML={{ __html: lawyer_data.field_admissions }}></div>
                                </div>
                                <div className="lawyer_top_tab">
                                    <label>Languages</label>
                                    <div className="lawyer_top_tab_hide">{ lawyer_data.field_lawyer_languages } </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9">
                            <LawyerNodeTabs tabs={ tabs } />
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
        node: state.node.node
    };
}

export default connect(mapStateToProps)(LawyerNode);