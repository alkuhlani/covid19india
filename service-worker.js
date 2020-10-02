if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"e404e992e83faf13e0d635fd8b14b246","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"cf71c27339ac2427f8521fe55c62ee14","url":"index.html"},{"revision":"217c5f21badb65cb4150d9d96cd08e44","url":"precache-manifest.217c5f21badb65cb4150d9d96cd08e44.js"},{"revision":"f1633fbfd131a3d0729326867d23eab9","url":"static/css/15.2f84a444.chunk.css"},{"revision":"46a122c927da0e2a871e2edb3d2a55ed","url":"static/js/0.7357bcad.chunk.js"},{"revision":"08083263b269f8bc3698d1d5bb2d92aa","url":"static/js/1.540e247f.chunk.js"},{"revision":"55bc58a93253da2caed46776c6b5f1b1","url":"static/js/10.63cf6898.chunk.js"},{"revision":"256d0a98f5a6f5acba4e4f9302db5ae2","url":"static/js/11.37fd961c.chunk.js"},{"revision":"2c101b3fa2a7fe598fe69e52a36a667d","url":"static/js/12.a0f03461.chunk.js"},{"revision":"2dfbd6c070c328d2b176d29f112d0c50","url":"static/js/13.cdad4ab7.chunk.js"},{"revision":"b91e47b09cca246d0072e0a0aae737af","url":"static/js/14.556f7796.chunk.js"},{"revision":"01b13e00c7c745ec179f7c67c49c9815","url":"static/js/15.db4d5ea4.chunk.js"},{"revision":"19d83c77186d4a4e99c43d944231f317","url":"static/js/16.5b9b840d.chunk.js"},{"revision":"bbfc2c370db6b3f7aeb4201769a3c54a","url":"static/js/17.2102baec.chunk.js"},{"revision":"fd8208477ddb0ab1b6a1558f0431732b","url":"static/js/18.4523e4eb.chunk.js"},{"revision":"083fe69e8b729eaeea2d40c5007cf2d0","url":"static/js/19.51ae0e10.chunk.js"},{"revision":"326744c0e3800f2bf2b9d178d5d40c28","url":"static/js/2.cff6b7c3.chunk.js"},{"revision":"be11080d6ea10c5d32a91774717e3759","url":"static/js/20.9880b3b2.chunk.js"},{"revision":"2eba4612641a155e3f2b89610ea7ced1","url":"static/js/21.923738a8.chunk.js"},{"revision":"8351667725648bae55cbb50c04f4d98b","url":"static/js/22.c1a090ce.chunk.js"},{"revision":"7eefa15dc49c8f13f22b3497493dd36b","url":"static/js/23.0311387d.chunk.js"},{"revision":"e87d7d3a13001ad2717b93e003ae4ae1","url":"static/js/24.5d398ade.chunk.js"},{"revision":"d49936560158f3e07fda455795636547","url":"static/js/25.aee2a018.chunk.js"},{"revision":"8b07a870c591ef678dd0b4952e78b251","url":"static/js/26.666b60ef.chunk.js"},{"revision":"fa09a405d2a143563d4fc966267c5c8b","url":"static/js/27.df0bf21b.chunk.js"},{"revision":"450a5ef7aa2d4dfae61922adba3ef27c","url":"static/js/28.d99fc784.chunk.js"},{"revision":"8e9e0676fd90e34fb4aac6aa56aaab71","url":"static/js/29.ed9a6a74.chunk.js"},{"revision":"d26071d538900d735402d6f479e636ca","url":"static/js/3.cfe9138b.chunk.js"},{"revision":"649db9a122975308b2bffcc8f4042d61","url":"static/js/30.d3097b33.chunk.js"},{"revision":"72652632c075836d5a9407bcff28bc0c","url":"static/js/31.c15302f4.chunk.js"},{"revision":"4bad7c9dbb0cff2983b88e8832707263","url":"static/js/32.bc212e02.chunk.js"},{"revision":"b8cfd8094e4f0c41810058b43edc2f14","url":"static/js/33.e40f9b4c.chunk.js"},{"revision":"b559d9da4aecc61d48ea0bbb2a9250d6","url":"static/js/34.9b5abed6.chunk.js"},{"revision":"db5f7c081c70e46e6296d3d0663d6388","url":"static/js/35.325f0c9b.chunk.js"},{"revision":"d72cb3b56f1213f51c1a6eb716ccdd52","url":"static/js/36.76b5955d.chunk.js"},{"revision":"48c07472d48c5275e6bee0d2f0eec0f4","url":"static/js/37.bc9b4845.chunk.js"},{"revision":"5e82e7959c30e27e585fa20b86509378","url":"static/js/4.1b072309.chunk.js"},{"revision":"156d03dfc84916e89e302aa8ad137027","url":"static/js/5.b917f1ce.chunk.js"},{"revision":"56e4f8218d238d3315a4ae0437c75954","url":"static/js/6.68bae3c4.chunk.js"},{"revision":"076fe1d1af9a9c8a85ab11ecaebd973b","url":"static/js/9.dee25ae1.chunk.js"},{"revision":"aef58c7ebc8cf3a606d606a7673ef022","url":"static/js/main.5128bdd3.chunk.js"},{"revision":"8e044c938aff6911d5dd78bbe35d6820","url":"static/js/runtime-main.1d85dd9d.js"}]);

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
