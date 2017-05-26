import Sequelize from 'sequelize';
import node_props from './node_props';
import body_props from './body_props';
import term_props from './term_props';

const Conn = new Sequelize(
  'chadbourne_stg3',
  'root',
  '3110asd',
  {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        freezeTableName: true,
        timestamps: false
    }
  }
);


const Node = Conn.define('node', node_props,
    {
        tableName: 'node',
    }
);

const Body = Conn.define('body', body_props, {
    tableName: 'field_data_body'
});

const Term = Conn.define('term', term_props, {
    tableName: 'taxonomy_term_data'
});



export default Conn;
