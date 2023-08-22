'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('Users',
      [
        {
          email: 'John Doe',
          password: '123',
          username: 'f1',
        },
        {
          email: 'John Doe1',
          password: '123',
          username: 'f2',
        },
        {
          email: 'John Doe2',
          password: '123',
          username: 'f3',
        },
      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
