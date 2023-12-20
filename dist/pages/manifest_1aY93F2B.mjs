import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_lBqGi7pO.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/html/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/examples/register-v2","type":"page","pattern":"^\\/examples\\/register-v2\\/?$","segments":[[{"content":"examples","dynamic":false,"spread":false}],[{"content":"register-v2","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/examples/register-v2.astro","pathname":"/examples/register-v2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/examples/lockscreen","type":"page","pattern":"^\\/examples\\/lockscreen\\/?$","segments":[[{"content":"examples","dynamic":false,"spread":false}],[{"content":"lockscreen","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/examples/lockscreen.astro","pathname":"/examples/lockscreen","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/examples/login-v2","type":"page","pattern":"^\\/examples\\/login-v2\\/?$","segments":[[{"content":"examples","dynamic":false,"spread":false}],[{"content":"login-v2","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/examples/login-v2.astro","pathname":"/examples/login-v2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/examples/register","type":"page","pattern":"^\\/examples\\/register\\/?$","segments":[[{"content":"examples","dynamic":false,"spread":false}],[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/examples/register.astro","pathname":"/examples/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/examples/login","type":"page","pattern":"^\\/examples\\/login\\/?$","segments":[[{"content":"examples","dynamic":false,"spread":false}],[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/examples/login.astro","pathname":"/examples/login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/widgets/small-box","type":"page","pattern":"^\\/widgets\\/small-box\\/?$","segments":[[{"content":"widgets","dynamic":false,"spread":false}],[{"content":"small-box","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/widgets/small-box.astro","pathname":"/widgets/small-box","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/widgets/info-box","type":"page","pattern":"^\\/widgets\\/info-box\\/?$","segments":[[{"content":"widgets","dynamic":false,"spread":false}],[{"content":"info-box","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/widgets/info-box.astro","pathname":"/widgets/info-box","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/widgets/cards","type":"page","pattern":"^\\/widgets\\/cards\\/?$","segments":[[{"content":"widgets","dynamic":false,"spread":false}],[{"content":"cards","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/widgets/cards.astro","pathname":"/widgets/cards","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/index2","type":"page","pattern":"^\\/index2\\/?$","segments":[[{"content":"index2","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/index2.astro","pathname":"/index2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/index3","type":"page","pattern":"^\\/index3\\/?$","segments":[[{"content":"index3","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/index3.astro","pathname":"/index3","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/layout/collapsed-sidebar","type":"page","pattern":"^\\/layout\\/collapsed-sidebar\\/?$","segments":[[{"content":"layout","dynamic":false,"spread":false}],[{"content":"collapsed-sidebar","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/layout/collapsed-sidebar.astro","pathname":"/layout/collapsed-sidebar","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/layout/unfixed-sidebar","type":"page","pattern":"^\\/layout\\/unfixed-sidebar\\/?$","segments":[[{"content":"layout","dynamic":false,"spread":false}],[{"content":"unfixed-sidebar","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/layout/unfixed-sidebar.astro","pathname":"/layout/unfixed-sidebar","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/layout/fixed-complete","type":"page","pattern":"^\\/layout\\/fixed-complete\\/?$","segments":[[{"content":"layout","dynamic":false,"spread":false}],[{"content":"fixed-complete","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/layout/fixed-complete.astro","pathname":"/layout/fixed-complete","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/layout/fixed-sidebar","type":"page","pattern":"^\\/layout\\/fixed-sidebar\\/?$","segments":[[{"content":"layout","dynamic":false,"spread":false}],[{"content":"fixed-sidebar","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/layout/fixed-sidebar.astro","pathname":"/layout/fixed-sidebar","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/layout/sidebar-mini","type":"page","pattern":"^\\/layout\\/sidebar-mini\\/?$","segments":[[{"content":"layout","dynamic":false,"spread":false}],[{"content":"sidebar-mini","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/layout/sidebar-mini.astro","pathname":"/layout/sidebar-mini","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/layout/logo-switch","type":"page","pattern":"^\\/layout\\/logo-switch\\/?$","segments":[[{"content":"layout","dynamic":false,"spread":false}],[{"content":"logo-switch","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/layout/logo-switch.astro","pathname":"/layout/logo-switch","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/layout/layout-rtl","type":"page","pattern":"^\\/layout\\/layout-rtl\\/?$","segments":[[{"content":"layout","dynamic":false,"spread":false}],[{"content":"layout-rtl","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/layout/layout-rtl.astro","pathname":"/layout/layout-rtl","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tables/simple","type":"page","pattern":"^\\/tables\\/simple\\/?$","segments":[[{"content":"tables","dynamic":false,"spread":false}],[{"content":"simple","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/tables/simple.astro","pathname":"/tables/simple","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/forms/general","type":"page","pattern":"^\\/forms\\/general\\/?$","segments":[[{"content":"forms","dynamic":false,"spread":false}],[{"content":"general","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/forms/general.astro","pathname":"/forms/general","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/docs/how-to-contribute","type":"page","pattern":"^\\/docs\\/how-to-contribute\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"how-to-contribute","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/docs/how-to-contribute.astro","pathname":"/docs/how-to-contribute","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/docs/browser-support","type":"page","pattern":"^\\/docs\\/browser-support\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"browser-support","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/docs/browser-support.astro","pathname":"/docs/browser-support","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/docs/introduction","type":"page","pattern":"^\\/docs\\/introduction\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"introduction","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/docs/introduction.astro","pathname":"/docs/introduction","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/docs/color-mode","type":"page","pattern":"^\\/docs\\/color-mode\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"color-mode","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/docs/color-mode.astro","pathname":"/docs/color-mode","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/docs/components/main-sidebar","type":"page","pattern":"^\\/docs\\/components\\/main-sidebar\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"components","dynamic":false,"spread":false}],[{"content":"main-sidebar","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/docs/components/main-sidebar.astro","pathname":"/docs/components/main-sidebar","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/docs/components/main-header","type":"page","pattern":"^\\/docs\\/components\\/main-header\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"components","dynamic":false,"spread":false}],[{"content":"main-header","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/docs/components/main-header.astro","pathname":"/docs/components/main-header","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/docs/javascript/treeview","type":"page","pattern":"^\\/docs\\/javascript\\/treeview\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"javascript","dynamic":false,"spread":false}],[{"content":"treeview","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/docs/javascript/treeview.astro","pathname":"/docs/javascript/treeview","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/docs/license","type":"page","pattern":"^\\/docs\\/license\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"license","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/docs/license.astro","pathname":"/docs/license","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/docs/layout","type":"page","pattern":"^\\/docs\\/layout\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"layout","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/docs/layout.astro","pathname":"/docs/layout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/docs/faq","type":"page","pattern":"^\\/docs\\/faq\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}],[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/docs/faq.astro","pathname":"/docs/faq","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ui/timeline","type":"page","pattern":"^\\/UI\\/timeline\\/?$","segments":[[{"content":"UI","dynamic":false,"spread":false}],[{"content":"timeline","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/UI/timeline.astro","pathname":"/UI/timeline","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ui/general","type":"page","pattern":"^\\/UI\\/general\\/?$","segments":[[{"content":"UI","dynamic":false,"spread":false}],[{"content":"general","dynamic":false,"spread":false}]],"params":[],"component":"src/html/pages/UI/general.astro","pathname":"/UI/general","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/docs/browser-support.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/widgets/cards.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/layout/collapsed-sidebar.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/docs/color-mode.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/docs/faq.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/layout/fixed-complete.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/layout/fixed-sidebar.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/forms/general.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/UI/general.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/docs/how-to-contribute.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/index2.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/index3.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/widgets/info-box.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/docs/introduction.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/layout/layout-rtl.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/docs/layout.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/docs/license.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/examples/lockscreen.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/examples/login-v2.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/examples/login.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/layout/logo-switch.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/docs/components/main-header.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/docs/components/main-sidebar.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/examples/register-v2.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/examples/register.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/layout/sidebar-mini.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/tables/simple.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/widgets/small-box.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/UI/timeline.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/docs/javascript/treeview.astro",{"propagation":"none","containsHead":true}],["/home/runner/work/adminlte4/adminlte4/AdminLTE/src/html/pages/layout/unfixed-sidebar.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/html/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/html/pages/examples/register-v2@_@astro":"pages/examples/register-v2.astro.mjs","\u0000@astro-page:src/html/pages/examples/lockscreen@_@astro":"pages/examples/lockscreen.astro.mjs","\u0000@astro-page:src/html/pages/examples/login-v2@_@astro":"pages/examples/login-v2.astro.mjs","\u0000@astro-page:src/html/pages/examples/register@_@astro":"pages/examples/register.astro.mjs","\u0000@astro-page:src/html/pages/examples/login@_@astro":"pages/examples/login.astro.mjs","\u0000@astro-page:src/html/pages/widgets/small-box@_@astro":"pages/widgets/small-box.astro.mjs","\u0000@astro-page:src/html/pages/widgets/info-box@_@astro":"pages/widgets/info-box.astro.mjs","\u0000@astro-page:src/html/pages/widgets/cards@_@astro":"pages/widgets/cards.astro.mjs","\u0000@astro-page:src/html/pages/index2@_@astro":"pages/index2.astro.mjs","\u0000@astro-page:src/html/pages/index3@_@astro":"pages/index3.astro.mjs","\u0000@astro-page:src/html/pages/layout/collapsed-sidebar@_@astro":"pages/layout/collapsed-sidebar.astro.mjs","\u0000@astro-page:src/html/pages/layout/unfixed-sidebar@_@astro":"pages/layout/unfixed-sidebar.astro.mjs","\u0000@astro-page:src/html/pages/layout/fixed-complete@_@astro":"pages/layout/fixed-complete.astro.mjs","\u0000@astro-page:src/html/pages/layout/fixed-sidebar@_@astro":"pages/layout/fixed-sidebar.astro.mjs","\u0000@astro-page:src/html/pages/layout/sidebar-mini@_@astro":"pages/layout/sidebar-mini.astro.mjs","\u0000@astro-page:src/html/pages/layout/logo-switch@_@astro":"pages/layout/logo-switch.astro.mjs","\u0000@astro-page:src/html/pages/layout/layout-rtl@_@astro":"pages/layout/layout-rtl.astro.mjs","\u0000@astro-page:src/html/pages/tables/simple@_@astro":"pages/tables/simple.astro.mjs","\u0000@astro-page:src/html/pages/forms/general@_@astro":"pages/forms/general.astro.mjs","\u0000@astro-page:src/html/pages/docs/how-to-contribute@_@astro":"pages/docs/how-to-contribute.astro.mjs","\u0000@astro-page:src/html/pages/docs/browser-support@_@astro":"pages/docs/browser-support.astro.mjs","\u0000@astro-page:src/html/pages/docs/introduction@_@astro":"pages/docs/introduction.astro.mjs","\u0000@astro-page:src/html/pages/docs/color-mode@_@astro":"pages/docs/color-mode.astro.mjs","\u0000@astro-page:src/html/pages/docs/components/main-sidebar@_@astro":"pages/docs/components/main-sidebar.astro.mjs","\u0000@astro-page:src/html/pages/docs/components/main-header@_@astro":"pages/docs/components/main-header.astro.mjs","\u0000@astro-page:src/html/pages/docs/javascript/treeview@_@astro":"pages/docs/javascript/treeview.astro.mjs","\u0000@astro-page:src/html/pages/docs/license@_@astro":"pages/docs/license.astro.mjs","\u0000@astro-page:src/html/pages/docs/layout@_@astro":"pages/docs/layout.astro.mjs","\u0000@astro-page:src/html/pages/docs/faq@_@astro":"pages/docs/faq.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","\u0000@astro-page:src/html/pages/UI/timeline@_@astro":"pages/ui/timeline.astro.mjs","\u0000@astro-page:src/html/pages/UI/general@_@astro":"pages/ui/general.astro.mjs","/src/html/pages/widgets/cards.astro":"chunks/pages/cards_lml7M7J5.mjs","/src/html/pages/layout/collapsed-sidebar.astro":"chunks/pages/collapsed-sidebar_LOqF2PMC.mjs","/src/html/pages/docs/color-mode.astro":"chunks/pages/color-mode_vBDwCTCH.mjs","/src/html/pages/docs/faq.astro":"chunks/pages/faq_ftPj5GXL.mjs","/src/html/pages/layout/fixed-complete.astro":"chunks/pages/fixed-complete_8RI-VDEg.mjs","/src/html/pages/layout/fixed-sidebar.astro":"chunks/pages/fixed-sidebar_XwGs0LDU.mjs","/src/html/pages/docs/how-to-contribute.astro":"chunks/pages/how-to-contribute_4qkTBjQq.mjs","/src/html/pages/index.astro":"chunks/pages/index_NJsKzsrV.mjs","/src/html/pages/index2.astro":"chunks/pages/index2_oYDUd6ur.mjs","/src/html/pages/index3.astro":"chunks/pages/index3_iXxIcoy1.mjs","/src/html/pages/widgets/info-box.astro":"chunks/pages/info-box_sIx7F8Tv.mjs","/src/html/pages/docs/introduction.astro":"chunks/pages/introduction_lTevZqfg.mjs","/src/html/pages/layout/layout-rtl.astro":"chunks/pages/layout-rtl_UL6_axeZ.mjs","/src/html/pages/docs/layout.astro":"chunks/pages/layout_MlOS-LaS.mjs","/src/html/pages/docs/license.astro":"chunks/pages/license_MaKKMh9h.mjs","/src/html/pages/examples/lockscreen.astro":"chunks/pages/lockscreen_hPUlJGxI.mjs","/src/html/pages/examples/login-v2.astro":"chunks/pages/login-v2_yLem31MU.mjs","/src/html/pages/examples/login.astro":"chunks/pages/login_idbvtYiS.mjs","/src/html/pages/layout/logo-switch.astro":"chunks/pages/logo-switch_JLj3n24M.mjs","/src/html/pages/docs/components/main-header.astro":"chunks/pages/main-header_iUU9tSzy.mjs","/src/html/pages/docs/components/main-sidebar.astro":"chunks/pages/main-sidebar_bjvixWM3.mjs","/src/html/pages/examples/register-v2.astro":"chunks/pages/register-v2_tIb8_Xnz.mjs","/src/html/pages/examples/register.astro":"chunks/pages/register_IMj-ThHm.mjs","/src/html/pages/layout/sidebar-mini.astro":"chunks/pages/sidebar-mini_0JhEWIMk.mjs","/src/html/pages/tables/simple.astro":"chunks/pages/simple_-Y1SBSD7.mjs","/src/html/pages/widgets/small-box.astro":"chunks/pages/small-box_qDuHImj9.mjs","/src/html/pages/UI/timeline.astro":"chunks/pages/timeline_QsUt2A34.mjs","/src/html/pages/docs/javascript/treeview.astro":"chunks/pages/treeview_FGWi4XUz.mjs","/src/html/pages/layout/unfixed-sidebar.astro":"chunks/pages/unfixed-sidebar_QgnEzTt4.mjs","\u0000@astrojs-manifest":"manifest_1aY93F2B.mjs","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
