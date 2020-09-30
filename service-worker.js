if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"5418ebcf648cf69ccfa456d409a63faa","url":"923af9e784f157bb7da7.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"9cae5fd74cc88f669522b19673097f16","url":"index.html"},{"revision":"e58902e28b80b1d7590b74ce746883ba","url":"precache-manifest.e58902e28b80b1d7590b74ce746883ba.js"},{"revision":"f1633fbfd131a3d0729326867d23eab9","url":"static/css/15.2f84a444.chunk.css"},{"revision":"7d4e1e17bdf366f877b4d150879e4be7","url":"static/js/0.4e9d56d0.chunk.js"},{"revision":"3e7ad831f0c9c379f544b05052fb7322","url":"static/js/1.f4961621.chunk.js"},{"revision":"ffc3f774e24b2e16ca837845e0005931","url":"static/js/10.316052dd.chunk.js"},{"revision":"8cfc05e5fa2102af08fef93f8052cd9a","url":"static/js/11.a14aafca.chunk.js"},{"revision":"eec4ffb6db7b2b2628796d5d632e9185","url":"static/js/12.e99c7606.chunk.js"},{"revision":"096fee898e0b50ec5b4485ef2cdd4737","url":"static/js/13.96ce3f32.chunk.js"},{"revision":"76d82e06d92bd666f6ae53ca3d75124f","url":"static/js/14.88c74e9b.chunk.js"},{"revision":"46e7e6e828f0c9569d0489a88c863889","url":"static/js/15.b6f28c75.chunk.js"},{"revision":"ae195d8d323ef267b9510cbb260b0e6c","url":"static/js/16.001b9b4a.chunk.js"},{"revision":"b3776b54f6f6603f88914d42c00caeeb","url":"static/js/17.1becda0e.chunk.js"},{"revision":"ac2fb09a1a344a73f23b2bbc7c5ceeb2","url":"static/js/18.440dcb7f.chunk.js"},{"revision":"cc6cc1af065cde69c59baab689f4ae52","url":"static/js/19.e036a738.chunk.js"},{"revision":"22a0ea3abb6535a17d1d2ae3bbadffe7","url":"static/js/2.852d72c6.chunk.js"},{"revision":"47ba72393061d1da4a999485efb414af","url":"static/js/20.dd22d548.chunk.js"},{"revision":"b06a8f482e27e6700cb982d9505d06a2","url":"static/js/21.0941bf20.chunk.js"},{"revision":"e60c36cc1f844c45192e42d96f18b27f","url":"static/js/22.b9a592e5.chunk.js"},{"revision":"b370f6834ffa660627024ed3d372bb1f","url":"static/js/23.06afb16a.chunk.js"},{"revision":"136c2834aca3c214804024fa42f71e5a","url":"static/js/24.fddf7266.chunk.js"},{"revision":"48f6c0a7b66d5583292d123916c6bcab","url":"static/js/25.bb64025f.chunk.js"},{"revision":"c08ce9fb57715c508b3a1d2960ab958b","url":"static/js/26.72485679.chunk.js"},{"revision":"5786b0fbe82a13459891cf32abb351a7","url":"static/js/27.9968acef.chunk.js"},{"revision":"da14a08bdcaa3086fc0eebf8aa7ee8eb","url":"static/js/28.2a4ce27f.chunk.js"},{"revision":"11a3a8e2702fc75b5ce45dcf0774ab36","url":"static/js/29.bf273d4f.chunk.js"},{"revision":"a0ac6d90f855433940989d7fbf6d851f","url":"static/js/3.6fe98d4a.chunk.js"},{"revision":"9d2e0a7c8f5e2d46d15ab37b25053dee","url":"static/js/30.a274bd95.chunk.js"},{"revision":"0fed23e6802ff990b30f049c0d21acd4","url":"static/js/31.e89f5f0f.chunk.js"},{"revision":"c8c006e2105c0adc8bbc7b40be5f7e61","url":"static/js/32.635cfbe3.chunk.js"},{"revision":"3d503e0ebf34765103817884ba9f6e78","url":"static/js/33.3bd7b26c.chunk.js"},{"revision":"02507495851d6e39fdc889213a4afc1a","url":"static/js/34.7a955b9f.chunk.js"},{"revision":"787fdfe1b7fe209375ca57d5508faf56","url":"static/js/35.70c22041.chunk.js"},{"revision":"8977dc1199bacc104be8a144169b69d5","url":"static/js/36.d3e43d81.chunk.js"},{"revision":"b14616e5e282d44f2ba3581eb4633128","url":"static/js/37.e517f828.chunk.js"},{"revision":"f0aa87e5ffeb32e3a6bb290e7f9f3ef9","url":"static/js/4.9d1e464d.chunk.js"},{"revision":"a2dd7702cc8797a5895a81e8cc53f551","url":"static/js/5.518f6213.chunk.js"},{"revision":"1010570435f06351a7498e65ebf924b0","url":"static/js/6.b84ac5cc.chunk.js"},{"revision":"60cacf274598be1a9c048e5c56283f52","url":"static/js/9.1a56720d.chunk.js"},{"revision":"2cdf1584bb7174fabf32998aba237e74","url":"static/js/main.e1c7d6a0.chunk.js"},{"revision":"a29d1bbff6a2de745fe6aff531df12a3","url":"static/js/runtime-main.99462688.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
