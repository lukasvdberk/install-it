'use strict';

/**
 * A set of functions called "actions" for `generate-script`
 */

module.exports = {
  generateScript: async (ctx, next) => {
    try {
      const operathingSystem = ctx.request.query.operathingSystem
      const packagesToGenerateScriptFor = ctx.request.query.packages

      const availablePackages = await strapi.entityService.findMany(
        "api::package.package",
        {
          fields: ["id", "command"],
          filters: {
            $and: [{
                operating_systems: {
                  name: operathingSystem,
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
        singleCommand += availablePackage.command
      }

      console.log(availablePackages)
      console.log(singleCommand)
      ctx.body = singleCommand
    } catch (err) {
      console.log(err)
      ctx.body = err
    }
  }
};
