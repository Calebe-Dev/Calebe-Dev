
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 2227, hash: 'a0df42116dfd9ac5d8ffb38d341df6d83439c177b5d881067d2def0d52278c02', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2468, hash: '56c4552717f829481a561b2730eba6f75655b7dbc78e28cde9eabedde1a29948', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 46353, hash: 'e5be96cb083eb27ee765dd4de790c92aa5f9d6d1664f46ddeb73478f11a3b9fa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-POGJEEUU.css': {size: 147, hash: 'GwDkYLz/hM4', text: () => import('./assets-chunks/styles-POGJEEUU_css.mjs').then(m => m.default)}
  },
};
