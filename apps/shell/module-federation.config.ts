import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'shell',
  remotes: ['shop', 'cart', 'auth'],
  shared: (name, config) => {
    if (name === '@org/psyhub-ui') {
      return {
        ...config,
        singleton: true,
        strictVersion: false,
        requiredVersion: false,
      };
    }

    return config;
  },
};

export default config;
