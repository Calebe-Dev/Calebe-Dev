
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Calebe-Dev/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Calebe-Dev"
  }
],
  assets: {
    'index.csr.html': {size: 2253, hash: 'e54c3c6c28be336ca4de2c61bd364b0cbe52b7adabffd4162b5d8daafd886341', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2494, hash: 'd1f7f94be9d45444f7fc2800e251f5909958e00a566b659fc1137fd0a8c8f248', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 46379, hash: 'a313d9dcc00aa1914938d4e8babacdd214a5db2f0bec082aad66987c6dfdd1e5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-POGJEEUU.css': {size: 147, hash: 'GwDkYLz/hM4', text: () => import('./assets-chunks/styles-POGJEEUU_css.mjs').then(m => m.default)}
  },
};
