'use strict';

/**
 * chronicle-index service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chronicle-index.chronicle-index');
