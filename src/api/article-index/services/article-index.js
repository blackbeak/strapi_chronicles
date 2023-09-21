'use strict';

/**
 * article-index service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article-index.article-index');
