module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/generate-script',
     handler: 'generate-script.generateScript',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
