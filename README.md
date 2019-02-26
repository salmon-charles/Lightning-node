# Lightning (node)

This module is a node port for the [Lightning](https://github.com/WebPlatformForEmbedded/Lightning) framework.

## Installation

### Node.js
This module depends on node-canvas for image loading and text creation, and node-wpe-webgl for providing a WebGL interface to the native hardware. Install the dependencies and follow the installation instructions of node-canvas (https://github.com/Automattic/node-canvas) and node-wpe-webgl (https://github.com/WebPlatformForEmbedded/node-wpe-webgl).

The module uses ESM module imports, but provides a rollup export. When require-ing this module, the rollup is included. To use the ESM mechanism, use `import lng from 'wpe-lightning/src/lightning-node'`.
