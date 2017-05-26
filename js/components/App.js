import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {

  render() {//console.log(this.props.viewer);
    return (
      <div>
        <h1>Widget list</h1>
        <ul>
          {this.props.viewer.nodes.edges.map(edge =>
            <li key={edge.node.id}> {edge.node.title} (ID: {edge.node.status}) </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        nodes( first: 10) {
          edges {
            node {
              id,
              title,
              status,
            },
          },
        },
      }
    `,
  },
});
