console.log("Load.js is executing");

if (window.location.search.includes("abovevtt=true")) {
	let loadingOverlay = document.createElement('div');
	loadingOverlay.setAttribute("id", "loading_overlay");
	loadingOverlay.setAttribute("style", "position: fixed; top: -2%; left: -2%; width: 104%; height: 104%; z-index: 70000; background-color: #26282a;");
	(document.body || document.documentElement).appendChild(loadingOverlay);
}

console.log("chrome.runtime.getURL", chrome.runtime.getURL("/"))
console.log("chrome.runtime.getManifest().version_name", chrome.runtime.getManifest().version_name)

var l = document.createElement('div');
l.setAttribute("style", "display:none;");
l.setAttribute("id", "extensionpath");
l.setAttribute("data-path", chrome.runtime.getURL("/"));
(document.body || document.documentElement).appendChild(l);

var avttVersion = document.createElement('div');
avttVersion.setAttribute("style", "display:none;");
avttVersion.setAttribute("id", "avttversion");
avttVersion.setAttribute("data-version", chrome.runtime.getManifest().version);
(document.body || document.documentElement).appendChild(avttVersion);

// load stylesheets
[
	"abovevtt.css",
	"jquery-ui.min.css",
	"jquery.ui.theme.min.css",
	"jquery.contextMenu.css",
	"color-picker.min.css",
	"spectrum-2.0.8.min.css",
	"magnific-popup.css",
	"DiceContextMenu/DiceContextMenu.css"
].forEach(function(value, index, array) {
	let l = document.createElement('link');
	l.href = chrome.runtime.getURL(value);
	l.rel = "stylesheet";
	console.log(`attempting to append ${value}`);
	(document.head || document.documentElement).appendChild(l);
});


// load scripts
window.scripts = [
	// External Dependencies
	{ src: "libs/jquery-3.6.0.min.js" },
	{ src: "libs/jquery-ui.min.js" },
	//{ src: "jquery.ui.widget.min.js" },
	//{ src: "jquery.ui.mouse.min.js" },
	{ src: "libs/jquery.ui.touch-punch.js" },
	{ src: "libs/jquery.contextMenu.js" },
	{ src: "libs/jquery.magnific-popup.min.js" },
	{ src: "libs/spectrum-2.0.8.min.js" },
	// { src: "jquery.ajax.queue.js" },
	{ src: "libs/purify.min.js" },
	{ src: "libs/jitsi_external_api.js" },
	{ src: "libs/rpg-dice-roller.bundle.min.js" },
	{ src: "libs/color-picker.js" },
	{ src: "libs/mousetrap.1.6.5.min.js" },
	{ src: "libs/peerjs.min.js" },
	// AboveVTT Files
	{ src: "CoreFunctions.js" },
	{ src: "AOETemplates.js" },
	{ src: "Text.js" },
	{ src: "CombatTracker.js" },
	{ src: "DnDBeyond/DDBCharacterData.js" },
	{ src: "EncounterHandler.js" },
	{ src: "Fog.js" },
	{ src: "Jitsi.js" },
	{ src: "Journal.js" },
	{ src: "KeypressHandler.js" },
	{ src: "MessageBroker.js" },
	{ src: "MonsterDice.js" },
	{ src: "PlayerPanel.js" },
	{ src: "SceneData.js" },
	{ src: "ScenesHandler.js" },
	{ src: "ScenesPanel.js" },
	{ src: "Settings.js" },
	{ src: "SidebarPanel.js" },
	{ src: "SoundPad.js" },
	{ src: "StatHandler.js" },
	{ src: "Token.js" },
	{ src: "TokenMenu.js" },
	{ src: "ChatObserver.js" },
	{ src: "DiceContextMenu/DiceContextMenu.js" },
	{ src: "TokensPanel.js" },
	{ src: "TokenCustomization.js" },
	{ src: "built-in-tokens.js" },
	{ src: "PeerManager.js" },
	{ src: "PeerCommunication.js" },
	// Files that execute when loaded
	{ src: "ajaxQueue/ajaxQueueIndex.js", type: "module" },
	{ src: "DiceRoller.js" },
	{ src: "CharactersPage.js" },
	{ src: "Main.js" },
	{ src: "MonsterStatBlock.js" }
]

// Too many of our scripts depend on each other. 
// This ensures that they are loaded sequentially to avoid any race conditions.
function injectScript() {
	if (scripts.length === 0) {
		delete window.scripts;
		return;
	}
	let nextScript = window.scripts.shift();
	let s = document.createElement('script');
	s.src = chrome.runtime.getURL(nextScript.src);
	if (nextScript.type !== undefined) {
		s.setAttribute('type', nextScript.type);
	}
	console.log(`attempting to append ${nextScript.src}`);
	s.onload = function() {
		console.log(`finished injecting ${nextScript.src}`);
		injectScript();
	};
	(document.head || document.documentElement).appendChild(s);
}

injectScript();
