'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      menteeId: {
        type: Sequelize.INTEGER
      },
      mentorId: {
        type: Sequelize.INTEGER
      },
      start: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM,
        allowNull: false,
        defaultValue: 'InProcess',
        values: ['InProcess', 'Booked', 'Cancelled']
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookings');
  }
};