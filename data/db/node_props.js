import Sequelize from 'sequelize';

const node_props = {
    nid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    vid: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    type:{
        type: Sequelize.STRING,
        allowNull: false
    },
    language: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    uid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    created: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    changed: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    comment: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    promote: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    sticky: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    tnid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    translate: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    uuid: {
        type: Sequelize.STRING,
        allowNull: true
    },
}
export default node_props;
