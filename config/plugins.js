module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: 'jackalytics',
          api_key: '961594817943944',
          api_secret: 'LYG0Oi3ZdT2YoQHzEaVMcLYh7mA',
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });