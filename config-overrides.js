module.exports = function override(config, env) {
  if (process.env.ELECTRON_ENABLED) {
    config.target = 'electron-renderer';
  };
  return config;
};
