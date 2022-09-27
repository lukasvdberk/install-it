'use strict';

/**
 * operating-system router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::operating-system.operating-system');
