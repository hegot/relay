import React from "react";

class LawyerNodeTabs extends React.Component {
    constructor(props) {
        super();
        this.state = {selected_tab: 'overview'};
    }
    clickHandler(id, event) {
        this.setState({
            selected_tab: id
        });
    }

    _renderTab() {
        function render_item(tab) {
            let activeClass = (this.state.selected_tab === tab.id ? 'single-tab active' : 'single-tab not-active');
            return (
                <div key={ tab.id } className={ activeClass } onClick={this.clickHandler.bind(this, tab.id)} >
                    <div className="tab_header">
                        { tab.label }
                    </div>
                    <div className="tab_content" dangerouslySetInnerHTML={{ __html: tab.content }}>
                    </div>
                </div>
               
            );
        }

        const { tabs } = this.props
        return (
            <div className="tabs">
                <div class="line"></div>
                { tabs.map(render_item.bind(this)) }
            </div>
        );
    }


  render() {
    return (
      <div className="lawyer_description">
          {this._renderTab()}
      </div>
    );
  }

}


export default LawyerNodeTabs;