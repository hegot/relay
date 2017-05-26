import Sequelize from 'sequelize';

const body_props = {
    entity_type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bundle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    deleted: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    entity_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        defaultValue: 0
    },
    revision_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    language: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'und'
    },
    delta:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    body_value: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    body_summary: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    body_format: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'wysiwyg_text'
    }
};

export default body_props;
