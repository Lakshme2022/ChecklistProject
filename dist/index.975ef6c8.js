// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"igKGj":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _dataJson = require("./data.json");
var _dataJsonDefault = parcelHelpers.interopDefault(_dataJson);
var _styleScss = require("./style.scss");
let global_title = "";
let count = 0;
const container = document.querySelector(".container");
const arrKeyData = Object.keys((0, _dataJsonDefault.default));
function createFirstPage() {
    //Отрисовка первой страницы
    global_title = "first";
    const content = document.getElementById("content");
    content.innerHTML = "";
    const formHTML = `
            <div class="indent">Мы подготовили чек-лист, с помощью которого ты сможешь определить свой уровень знаний и готовность стать
                Junior Frontend разработчицей</div>
            <div class="pinkText indent">Оцени свои Hard Skills по 5 бальной шкале, где 5 - знаю отлично, а 1 - не знаю ничего</div>

        <div class="form indent">
            <input class="inputField inputName" type="text" placeholder="Твое имя и фамилия" >
            <input class="inputField inputGroup" type="text" placeholder="Твоя группа" >
        </div>
        <div class="btnField indent">
            <button id="firstButton">Начать</button>
        </div>`;
    content.insertAdjacentHTML("beforeend", formHTML);
    const firstButton = document.querySelector("#firstButton");
    // Подслушка на кнопку, вызов второй страницы и сохранение внесенных пользователем данных
    firstButton.addEventListener("click", ()=>{
        if (checkEmpty()) {
            setDataUser();
            count = 0;
            renderCards();
        }
    });
}
//Проверка заполнения инпутов + Uppercase для первой буквы имени
function checkEmpty() {
    const name = document.querySelector(".inputName");
    const group = document.querySelector(".inputGroup");
    if (name.value === "" || group.value === "") {
        if (!document.querySelector("#alert_div")) {
            const alert = document.createElement("div");
            alert.id = "alert_div";
            const btnField = document.querySelector(".btnField");
            alert.innerHTML = '<h3 class="center pinkText">* Необходимо заполнить все поля</h3>';
            btnField.before(alert);
        }
        return false;
    } else name.value = name.value[0].toUpperCase() + name.value.substring(1).toLowerCase();
    return true;
}
//Отправка данных в локал сторедж введенных пользователем
const glObj = {
    userName: null,
    groupNum: null
};
function setDataUser() {
    const inpName = document.querySelector(".inputName");
    const inpGroup = document.querySelector(".inputGroup");
    glObj.userName = inpName.value;
    glObj.groupNum = inpGroup.value;
}
function createCards(title, arrQuestion, section_key) {
    global_title = section_key;
    container.innerHTML = "";
    const createDivContainerCard = document.querySelector("div");
    createDivContainerCard.insertAdjacentHTML("beforeend", `<h2 class="indent pinkText">${title}</h2>`);
    arrQuestion.forEach((item)=>{
        const divQuestion = createQuestion(item);
        container.appendChild(divQuestion);
    });
    container.insertAdjacentHTML("beforeend", `
        <div class="cardButtons">
            <button class='prevCardsBtn' >Назад</button>
            <button class='nextCardsBtn' >Вперед</button>
        </div>`);
}
function range() {
    return '<div class="input indent"><input type="range" min="1" max="5" class="slider" value="1"><div class="numbers"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div></div></div>';
}
function createQuestion(question) {
    const div = document.createElement("div");
    div.classList.add("item");
    const template = `
                    <div class="wrapperContent">
                    <div class="question indent">${question}</div>
                    <div class="range indent">${range()}</div>
                    </div>`;
    div.insertAdjacentHTML("beforeend", template);
    return div;
}
//Слайдер из страниц (вопросы + бегунки + кнопки)
function renderCards() {
    const arrKeyData = Object.keys((0, _dataJsonDefault.default));
    createCards((0, _dataJsonDefault.default)[arrKeyData[count]].title, (0, _dataJsonDefault.default)[arrKeyData[count]].question, arrKeyData[count]);
}
container.addEventListener("click", (e)=>{
    if (e.target.classList.contains("nextCardsBtn")) {
        saveObjectLocalStorage(global_title);
        createNextCard();
    } else if (e.target.classList.contains("prevCardsBtn")) {
        saveObjectLocalStorage(global_title);
        createPrevCard();
    }
});
function createNextCard() {
    if (count + 1 === arrKeyData.length) createLastPage();
    else {
        count += 1;
        createCards((0, _dataJsonDefault.default)[arrKeyData[count]].title, (0, _dataJsonDefault.default)[arrKeyData[count]].question, arrKeyData[count]);
    }
}
function createPrevCard() {
    if (count === 0) createFirstPage();
    else {
        count -= 1;
        createCards((0, _dataJsonDefault.default)[arrKeyData[count]].title, (0, _dataJsonDefault.default)[arrKeyData[count]].question, arrKeyData[count]);
    }
}
// Сохранение в локал сторедж
function saveObjectLocalStorage(title) {
    const setOfQuestions = (0, _dataJsonDefault.default)[arrKeyData[count]].question;
    const currentRangeValues = Array.from(container.querySelectorAll(".slider")).map((input)=>input.value);
    const userData = {
        setOfQuestions,
        currentRangeValues
    };
    glObj[title] = userData;
    localStorage.setItem("userData", JSON.stringify(glObj));
}
//создание последней страницы
function createLastPage() {
    //получение всех ключей объекта
    const arrKeyData = Object.keys(JSON.parse(localStorage.getItem("userData")));
    //удаление ключей, которые не нужны для расчета
    const newArrKeyData = arrKeyData.filter((e)=>e !== "userName" && e !== "groupNum");
    //подсчет суммы результатов
    let result = 0;
    const answer = JSON.parse(localStorage.getItem("userData"));
    newArrKeyData.forEach((item)=>{
        let resultAnswer = answer[item].currentRangeValues;
        let res = resultAnswer.reduce((a, b)=>Number(a) + Number(b));
        result += res;
    });
    //перевод результата в проценты
    const percentResult = result * 100 / 100;
    //определение уровня
    function level() {
        if (percentResult <= 59) return '"Новичок"';
        else if (percentResult >= 60 && percentResult < 80) return '"Стажёр"';
        else return '"Младший разработчик"';
    }
    // рекомендации по результату 
    function conclusion() {
        if (percentResult <= 59) return `<h2>Ты можешь смело искать предложения по стажировке, но повтори перед этим следующие темы, находящиеся по ссылкам ниже:</h2>`;
        else if (percentResult >= 60 && percentResult < 80) return `<h2>Перед составлением резюме рекомендую сходить по нижеприведенным ссылкам и повторить темы:</h2>`;
        else return `<h2 class="pinkText">Можешь приступать к подготовке к собеседованию!</h2>` + `<iframe src="https://www.youtube.com/embed/cyfaOAH-CF0"></iframe>`;
    }
    //отрисовка последней страницы
    const content = document.getElementById("content");
    content.innerHTML = `<h2 class="pinkText">Отличная работа, поздравляю!</h2>` + `<div class="grid"><h3>Твой результат:</h3><h3 class="pinkText">${percentResult}%</h3></div>` + `<div class="grid"><h3>что соответсвтвует уровню:</h3><h3 class="pinkText">` + level() + `</h3></div>` + `<div>` + conclusion() + `</div>`;
    //создание кнопки для перехода в начало
    const btnStart = document.createElement("button");
    btnStart.textContent = "В начало";
    content.append(btnStart);
    //переход на первую страницу    
    btnStart.addEventListener("click", (e)=>{
        content.innerHTML = "";
        createFirstPage();
        btnStart.style.display = "none";
    });
    if (percentResult >= 80) return "";
    // генерация рекомендаций, если ответ на вопрос был <=3
    newArrKeyData.forEach((key, index)=>{
        console.log(key);
        let resultAnswers = answer[key].currentRangeValues;
        resultAnswers.forEach((score, i)=>{
            console.log(i);
            if (score <= 3) {
                console.log(score);
                console.log((0, _dataJsonDefault.default)[key]["suggestion"][i]);
                btnStart.insertAdjacentHTML("beforebegin", `<h3 class="pinkTekst">${(0, _dataJsonDefault.default)[key]["suggestion"][i]}</h3>`);
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", function() {
    createFirstPage();
});

},{"./data.json":"aLYkf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./style.scss":"81Z0h"}],"aLYkf":[function(require,module,exports) {
module.exports = JSON.parse("{\"beginner\":{\"title\":\"Первый уровень: Beginner (Новичок)\",\"question\":[\"Что такое TCP/IP, из каких уровней состоят и какие протоколы содержит. (В частности Ethernet, IP, TCP)\",\"Что такое HTML. Базовые элементы разметки. Семантика SEO-оптимизация и доступность\",\"Что такое CSS. Базовые свойства стилизации. Позиционирование элементов макета. Flexbox. Grid. Адаптивность посредством составления @media запросов. Псевдоэлементы и псевдоклассы. Методология БЭМ\",\"Основы языка программирования JavaScript. Типы данных. Циклы, Условия, Работа с объектами. Функции. Прототипы и наследование. Работа с объектами. Методы массивов\",\"Умеешь ли ты пользоваться программными средствами, аналогичными Slack, для организации коммуникации и совместной работы\",\"Имеешь ли ты практический опыт и навыки работы с инструментами, подобными Trello, для организации рабочих процессов и управления задачами\"],\"suggestion\":[\"<a href='https://itgirlschool.notion.site/19-API-f022a1d855f84556822792ae865ccc01' target='_blank'>Неделя 19. Асинхронность и работа с API</a>\",\"<a href='https://itgirlschool.notion.site/1-HTML-db0c955498d94cef9962f9734c5b0ed2' target='_blank'>Неделя 1. Основы HTML.</a> <a href='https://itgirlschool.notion.site/2-c980fca3150f4b7890748c6cad913114' target='_blank'>Неделя 2. Семантическая вёрстка и разметка</a>\",\"<a href='https://itgirlschool.notion.site/4-CSS-44e1f287a10e4e9793c48ef83f0e60b9' target='_blank'>Неделя 4. Стилизация и CSS-свойства.</a> <a href='https://itgirlschool.notion.site/5-4ef98d6af6664eae8dfeaa9da51076ba' target='_blank'>Неделя 5. Позиционирование элементов.</a> <a href='https://itgirlschool.notion.site/6-CSS-Grid-9d2ab375ed5e4f0a828631427dcdd6d4' target='_blank'>Неделя 6. CSS Grid.</a> <a href='https://itgirlschool.notion.site/7-d538acf66018487ea0b5b12167679fc9' target='_blank'>Неделя 7. Адаптивность верстка.</a> <a href='https://www.youtube.com/watch?v=tbj4gvq7dHY' target='_blank'>Методология БЭМ</a>\",\"<a href='https://itgirlschool.notion.site/9-JavaScript-0eb849b1efbc46af934b541b107451f5' target='_blank'>Неделя 9. Знакомство с JavaScript.</a> <a href='https://itgirlschool.notion.site/10-88692713b2924009bf8b5e2b82a5c175' target='_blank'>Неделя 10. Функции.</a> <a href='https://itgirlschool.notion.site/14-4b65e02f71c7413783798409499f834c' target='_blank'>Неделя 14. Массивы.</a> <a href='https://itgirlschool.notion.site/15-a205da7b5d7c40fca503b00bd7be0602' target='_blank'>Неделя 15. Циклы.</a> <a href='https://itgirlschool.notion.site/17-f8b2f0ebcd794c2ca7de152460bf94ef' target='_blank'>Неделя 17. Объекты и классы</a>\",\"<a href='https://itgirlschool.notion.site/1-HTML-db0c955498d94cef9962f9734c5b0ed2' target='_blank'>Неделя 1. Основы HTML. Обзор инструментов</a>\",\"<a href='https://www.youtube.com/watch?v=qDGTiwonZJE' target='_blank'>Недели 9-10. Командная работа по Agile</a>\"]},\"trainee\":{\"title\":\"Второй уровень: Trainee (Стажёр)\",\"question\":[\"Умеешь работать с браузерным окружением и DOM (Document Object Model). Браузерные события. Обработка ошибок (Try/Catch). Пользовательские ошибки. Модульная система. Экспорт и импорт. Web API\",\"Что делает JavaScript — асинхронным. Промисы. Fetch API. Синтаксический сахар — Async и Await\",\"Cross-Origin Resource Sharing (CORS). Request & Response Headers (это была тема для самостоятельного изучения)\",\"Что такое линтеры. Pre-commit Check\",\"Как работает система управления версиями (Git). Регистрация на GitHub. Коммиты. Репозитории. Merge Requests. Checkout. Ветки\",\"Что такое Node.js. Как работает менеджер пакетов Npm. package.json и package-lock.json. npm install, npm uninstall\",\"Что такое препроцессор. SASS и SCSS. Переменные. Импорты. Вложенность. Модули. Миксины\",\"Обладаешь ли ты навыками работы с редактором Figma или аналогичными инструментами в сфере дизайна или прототипирования\",\"Каков уровень вашего знакомства и опыта использования фреймворка Bootstrap и других подобных для разработки веб-интерфейсов\"],\"suggestion\":[\"<a href='https://itgirlschool.notion.site/11-DOM-15fa90dcbc574814bf6cec66a18f7ddd' target='_blank'>Неделя 11. Знакомство с DOM.</a> <a href='https://itgirlschool.notion.site/20-Node-js-npm-9bf799eb0f77485a8ef7841a61b3b60c' target='_blank'>Неделя 20. Обработка ошибок. Node.js и npm.</a> <a href='https://itgirlschool.notion.site/19-API-f022a1d855f84556822792ae865ccc01' target='_blank'>Неделя 19. Асинхронность и работа с API</a>\",\"<a href='https://itgirlschool.notion.site/19-API-f022a1d855f84556822792ae865ccc01' target='_blank'>Неделя 19. Асинхронность и работа с API</a>\",\"Cross-Origin Resource Sharing (CORS). Request & Response Headers (это была тема для самостоятельного изучения)\",\"Что такое линтеры. Pre-commit Check (это была тема для самостоятельного изучения)\",\"Неделя 10. Командная работа в одной ветке Git (это был вебинар с наставницей)\",\"<a href='https://itgirlschool.notion.site/20-Node-js-npm-9bf799eb0f77485a8ef7841a61b3b60c' target='_blank'>Неделя 20. Обработка ошибок. Node.js и npm</a>\",\"<a href='https://itgirlschool.notion.site/7-d538acf66018487ea0b5b12167679fc9' target='_blank'>Неделя 7. Адаптивная вёрстка. Препроцессоры</a>\",\"<a href='https://itgirlschool.notion.site/3-41c44a7f3b684a09bc4a26030e87eed5' target='_blank'>Неделя 3. Графика. Figma</a>\",\"<a href='https://itgirlschool.notion.site/8-CSS-29091cbc3bd4481fb9b06e09f369783e' target='_blank'>Неделя 8. СSS Фреймворки</a>\"]},\"junior\":{\"title\":\"Третий уровень: Junior (Младший разработчик)\",\"question\":[\"Что такое сборщик модулей. Babel. Настройка Webpack. Правила. Модули. Плагины. DevServer. Переход к Vite\",\"Что такое React и какие проблемы он решает. Жизненный цикл компонентов. Особенности виртуального DOM-дерева. React компоненты. Базовые хуки. React Refs. JSX синтаксис. Props & State\",\"Особенности FLUX архитектуры. Reducers. Actions. Хук useContext. Redux и Redux Toolkit. Redux Thunk. RTK Query. (По желанию можно изучить MobX и/или Zustand)\",\"Что такое роут. Из чего состоит объект Location. Библиотека React Router\",\"Как повысить эффективность стилизации. Что такое UI библиотека. MaterialUI\"],\"suggestion\":[\"Что такое сборщик модулей. Babel. Настройка Webpack. Правила. Модули. Плагины. DevServer. Переход к Vite (это был вебинар с наставницей)\",\"<a href='https://itgirlschool.notion.site/21-React-e44288ea389a4c3cb7bb2d6a1658fbc0' target='_blank'>Неделя 21. Введение в React.</a> <a href='https://itgirlschool.notion.site/22-c559af92ea8b468f9eb3ca6f01495b5b' target='_blank'>Неделя 22. Компоненты.</a> <a href='https://itgirlschool.notion.site/23-CSS-React-d4b0b61bb697459aacb1681ba2764440' target='_blank'>Неделя 23. CSS в React.</a> <a href='https://itgirlschool.notion.site/24-Props-State-e85c9dbc72b8400484b7fa8dbcef3b79' target='_blank'>Неделя 24. Props & State.</a> <a href='https://itgirlschool.notion.site/25-e45f5c4b3f7f4c0aa1097fdc36df362c' target='_blank'>Неделя 25. Жизненный цикл компонента</a>\",\"<a href='https://itgirlschool.notion.site/29-Context-26ce7fd605f342adb66195ecebb18e86' target='_blank'>Неделя 29. Context</a> + Библиотеки (это была тема для самостоятельного изучения)\",\"<a href='https://itgirlschool.notion.site/26-f67d3134cbf54844831a5d899db00b36' target='_blank'>Неделя 26. Роутинг.</a>\",\"Как повысить эффективность стилизации. Что такое UI библиотека. MaterialUI (это была тема для самостоятельного изучения)\"]}}");

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"81Z0h":[function() {},{}]},["igKGj","8lqZg"], "8lqZg", "parcelRequire9e9a")

//# sourceMappingURL=index.975ef6c8.js.map
