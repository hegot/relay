import React from "react";
import { connect } from "react-redux";
import Lawyer_row from "./Lawyer_row";
import { fetchLawyers } from "../../actions/lawyersActions";
import PeopleFilter from "./PeopleFilter/PeopleFilter";

class PeopleSearch extends React.Component {
    constructor(props) {
        super();
        this.state = {
            routePath: '',
        };
    }

    componentDidMount() {
        var query = this.props.location.query;
        console.log(query)
        this.props.dispatch(fetchLawyers(query))
        this.setState({
            routePath: this.props.location.search,
        });
    }

    componentDidUpdate() {
        var newPath = this.props.location.search;

        if (this.state.routePath !== newPath) {
            var query = this.props.location.query;
            this.props.dispatch(fetchLawyers(query))
            this.setState({
                routePath: newPath,
            });
        }
    }

    render() {
        const { lawyers } = this.props;
        const mappedLawyers = lawyers.map((lawyer, index) => {
            return <Lawyer_row key={index} {...lawyer}/>;
        });
        return (
            <div>
                <h1>People Search</h1>
                <PeopleFilter query={this.props.location.query} search={this.props.location.search}/>
                {mappedLawyers}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        lawyers: state.lawyers.lawyers
    };
}

export default connect(mapStateToProps)(PeopleSearch);