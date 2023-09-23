'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         */
        await queryInterface.bulkInsert(
            'Role',
            [
                {
                    url: '/user/read',
                    desc: 'read user',
                },
                {
                    url: '/user/update',
                    desc: 'update user',
                },
                {
                    url: 'user/delete',
                    desc: 'delete user',
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
