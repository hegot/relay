import React from "react";
import NavbarFilterSingle from "./NavbarFilterSingle";
import { IndexLink, Link } from "react-router";
import Relay from 'react-relay';

const mapped_a_z ='';
const mapped_services ='';

    /*drupalSettings.people_search.slice(0, 1).map((filter) => {
    return <NavbarFilterSingle key={filter.id} type="people_search" {...filter }/>;
});
var navbar_sliced = drupalSettings.people_search.slice(1);
const mapped_people_search = navbar_sliced.map((filter) => {
    return <NavbarFilterSingle key={filter.id} type="people_search" {...filter }/>;
});

const mapped_services = drupalSettings.services.map((filter) => {
    return <NavbarFilterSingle key={filter.id} type="services" {...filter }/>;
});

     */




class Navbar extends React.Component {
    render() {
        console.log(this.props.viewer);
        var getUrl = window.location.pathname;
        if(getUrl == '/'){
            var nav_class = 'white container';
        }else{
            var nav_class = 'black container';
        }
        return (
            <div>
                <header id="header" className="header Fixed" role="header">
                    <div className={ nav_class }>
                        <nav className="navbar navbar-head" role="navigation">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <Link className="navbar-logo" to="/">Chadbourne</Link>

                            </div>
                            <div className="collapse navbar-collapse" id="navbar-collapse">

                                <ul id="secondary-menu" className="nav nav-stacked navbar-right">
                                    <li className="menu-14844 first"><a href="/about-us" title="">About Us</a></li>
                                    <li className="menu-14843"><a href="/news">News</a></li>
                                    <li className="menu-15171 last"><a href="/careers">Careers</a></li>
                                </ul>
                                <div className="main-menu-cnt chadbourne-nav-processed">
                                    <ul id="main-menu" className="menu nav navbar-nav navbar-right">
                                        <li className="first leaf menu-link-people">
                                            <a className="nolink main_link">People</a>
                                            <div className="tab-people" data-target="menu-link-people">
                                                <div className="form-item form-type-textfield form-item-s form-group">
                                                    <span className="twitter-typeahead">
                                                      <input placeholder="Search People" className="typeahead-enabled people_search" id="edit-term" name="s" value="" type="text" />
                                                    </span>
                                                </div>
                                                <div className="row-2">
                                                    <div className="filter-az-cnt">
                                                        <div id="edit-filter-az" className="form-wrapper">
                                                            <ul>{  mapped_a_z }</ul>
                                                        </div>
                                                    </div>
                                                    <div className="filter-types-cnt">
                                                        <div id="edit-filter-types" className="form-wrapper">
                                                            <ul>
                                                                <NavbarFilterSingle key="1" type="people_search" values = {this.props.viewer.language.edges } title="Languages" machine_name="language" type ="people_search"/>
                                                                <NavbarFilterSingle key="2" type="people_search" values = {this.props.viewer.schools.edges } title="Schools" machine_name="schools" type ="people_search"/>
                                                                <NavbarFilterSingle key="3" type="people_search" values = {this.props.viewer.title.edges } title="Titles" machine_name="title" type ="people_search"/>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li className="leaf menu-link-services">
                                            <a className="nolink main_link">Services</a>
                                            <div className="tab-services" data-target="menu-link-people">
                                                <div className="row-2">
                                                    <div className="filter-types-cnt">
                                                        <div id="edit-filter-types" className="form-wrapper">
                                                            <ul>
                                                                { mapped_services }
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li className="leaf menu-link-reach"><a className="main_link" href="/reach">Reach</a></li>
                                        <li className="leaf menu-link-insight"><a className="main_link" href="/insight">Insight</a></li>
                                        <li className="last leaf menu-link-search"><a className="main_link">Search</a></li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}
export default Relay.createContainer(Navbar, {
    fragments: {
        viewer: () => Relay.QL`
            fragment on User {
                language: terms(vid: 6, first:1000) {
                    edges {
                        node {
                            tid,
                            name,
                        },
                    },
                },
                title: terms(vid: 3, first:1000) {
                    edges {
                        node {
                            tid,
                            name,
                        },
                    },
                },
                schools: terms(vid: 7, first:1000) {
                    edges {
                        node {
                            tid,
                            name,
                        },
                    },
                },
            }
        `,
    },
});