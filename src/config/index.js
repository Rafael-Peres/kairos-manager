const defaultConfig = {
  host: 'localhost',
};

exports.development = defaultConfig;

exports.staging = {
  ...defaultConfig,
  host: 'kairos-manager.qa.com.br',
};

exports.production = {
  ...defaultConfig,
  host: 'kairos-manager.com.br',
};
