'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
        */
        await queryInterface.bulkInsert('GroupRole',
            [
                {
                    groupId: 1,
                    roleId: 1,
                },
                {
                    groupId: 1,
                    roleId: 2,
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
