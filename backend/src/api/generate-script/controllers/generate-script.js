'use strict';

/**
 * A set of functions called "actions" for `generate-script`
 */

module.exports = {
  generateScript: async (ctx, next) => {
    try {
      const operatingSystem = ctx.request.query.operatingSystem
      const packagesToGenerateScriptFor = ctx.request.query.packages

      const availablePackages = await strapi.entityService.findMany(
        "api::package.package",
        {
          fields: ["id", "command"],
          filters: {
            $and: [{
                operating_systems: {
                  name: operatingSystem,
                },
                name: { $in: packagesToGenerateScriptFor }
              }
            ]
          },
          populate: '*'
        }
      );

      let singleCommand = ''
      for (const availablePackage of availablePackages) {
        singleCommand += availablePackage.command + '\n'
      }

      ctx.body = singleCommand
    } catch (err) {
      ctx.body = err
    }
  }
};
