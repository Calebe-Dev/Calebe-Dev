
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/solicitar-projeto"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1636, hash: '5cbc976d90e15a931ab01f47b246686498c76d09cdccae23b3abb5be63104fb7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1214, hash: 'e3092b59f5b35cc5f10cabd69be36fd99e017eafa4ef03f1a2c387c10bca865b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'solicitar-projeto/index.html': {size: 32544, hash: '3c310c328e89b7c61c68a8731a87a304ae8d64f863b551e5d0f16f7359ba8426', text: () => import('./assets-chunks/solicitar-projeto_index_html.mjs').then(m => m.default)},
    'index.html': {size: 75168, hash: '673a9e12b8824b8a79523162f70243b1cd84eff3855299d23102d23494216a8f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6KXNLAY5.css': {size: 993, hash: 'pED733b47bY', text: () => import('./assets-chunks/styles-6KXNLAY5_css.mjs').then(m => m.default)}
  },
};
