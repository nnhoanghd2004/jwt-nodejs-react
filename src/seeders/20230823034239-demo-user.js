'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('users',
      [
        {
          email: "Hoang",
          password: "Hoang",
          username: "Hoang",
        },
        {
          email: "Hoang",
          password: "Hoang",
          username: "Hoang",
        },
        {
          email: "Hoang",
          password: "Hoang",
          username: "Hoang",
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
