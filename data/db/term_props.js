import Sequelize from 'sequelize';

const term_props = {
    tid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    vid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    format: {
        type: Sequelize.STRING,
        allowNull: false
    },
    weight: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    uuid: {
        type: Sequelize.STRING,
        allowNull: false
    },
    language: {
        type: Sequelize.STRING,
        allowNull: false
    },
    i18n_tsid: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    rh_action: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    rh_redirect: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rh_redirect_response: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
}
export default term_props;
