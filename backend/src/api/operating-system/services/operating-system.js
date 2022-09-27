'use strict';

/**
 * operating-system service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::operating-system.operating-system');
