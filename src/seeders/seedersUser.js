'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('User',
      [
        {
          email: "Hoang",
          password: "Hoang",
          username: "Hoang",
          address: "Hoang",
          sex: "Hoang",
          phone: "Hoang",
          groupId: 1,
        },
        {
          email: "Hoang",
          password: "Hoang",
          username: "Hoang",
          address: "Hoang",
          sex: "Hoang",
          phone: "Hoang",
          groupId: 1,
        },
        {
          email: "Hoang",
          password: "Hoang",
          username: "Hoang",
          address: "Hoang",
          sex: "Hoang",
          phone: "Hoang",
          groupId: 1,
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
