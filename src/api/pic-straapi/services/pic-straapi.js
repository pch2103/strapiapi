'use strict';

/**
 * pic-straapi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pic-straapi.pic-straapi');
