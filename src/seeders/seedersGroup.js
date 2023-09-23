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
            'Group',
            [
                {
                    name: 'Customer',
                    desc: 'Customer',
                },
                {
                    name: 'Developers',
                    desc: 'Developers',
                },
                {
                    name: 'Leader',
                    desc: 'Leader',
                },
                {
                    name: 'Project Manager',
                    desc: 'Project Manager',
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
