'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Plans', [{
      IdProfile: 6,
      Description: 'Diamond',
      Visible: true,
      LifespanBegin: new Date(),
      LifespanEnd: new Date(),
      Version: '2.0.0',
      Status: true,
      updatedAt:new Date(),
      createdAt:new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete('Plans', null, {});
  }
};