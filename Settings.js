function token_setting_options() {
	return [
		{
			name: 'tokenStyleSelect',
			label: 'Token Style',
			type: 'dropdown',
			options: [
				{ value: "circle", label: "Circle", description: `The token is round and is contained within the border. We set "Ignore Aspect Ratio" to true and "Square" to false. Great for tokens with a portrait art style!` },
				{ value: "square", label: "Square", description: `The token is square and is contained within the border. We set "Ignore Aspect Ratio" to true and "Square" to true. Great for tokens with a portrait art style!` },
				{ value: "virtualMiniCircle", label: "Virtual Mini w/ Round Base", description: `The token looks like a physical mini with a round base. The image will show up as it is naturally with the largest side being equal to the token size, we set "Ignore Aspect Ratio" to false and "Square" to true. We also add a virtual token base to this Style with Borders and Health Aura on the base of the token. Great for tokens with a top-down art style!` },
				{ value: "virtualMiniSquare", label: "Virtual Mini w/ Square Base", description: `The token looks like a physical mini with a round base. The image will show up as it is naturally with The largest side being equal to the token size, we set "Ignore Aspect Ratio" to false and "Square" to true. We also add a virtual token base to this Style with Borders and Health Aura on the base of the token. Great for tokens with a top-down art style!` },
				{ value: "noConstraint", label: "No Constraint", description: `The token will show up as it is naturally largest side being equal to token size, we set "Ignore Aspect Ratio" to false and "Square to true. Borders and Health Aura are drawn as a drop shadow to fit the shape of the token.` },
				{ value: "definitelyNotAToken", label: "Definitely Not a Token", description: `This token will have the shape of no contraints and be made too appear as a object tile` }
			
			],
			defaultValue: "circle"
		},
		{
			name: 'tokenBaseStyleSelect',
			label: 'Token Base Style',
			type: 'dropdown',
			options: [
				{ value: "default", label: "Default", description: "A default dark semi-opaque plastic base." },
				{ value: "border-color", label: "Match Border Color", description: "A base that matches the border color of the token." },
				{ value: "grass", label: "Grass", description: "A grass covered base.." },
				{ value: "tile", label: "Tile", description: "A tile base." },
				{ value: "sand", label: "Sand", description: "A sand covered base." },
				{ value: "rock", label: "Rock", description: "A rock base." },
				{ value: "water", label: "Water", description: "A water base." }
			],
			defaultValue: "default"
		},
		{
			name: "healthauratype",
			label: "Health Visual",
			type: 'dropdown',
			options: [
				{ value: "aura", label: "Aura", description: "Tokens will have a colored aura" },
				{ value: "bar", label: "Bar", description: "How this bar is displayed depends on token type. Color blind alternative to auras." },
				{ value: "none", label: "None", description: "Tokens will not have a health visual" }
			],
			defaultValue: "aura"
      },
      {
			name: 'lockRestrictDrop',
			label: 'Token Lock',
			type: 'dropdown',
			options: [
				{ value: "none", label: "None", description: "Token is freely moveable by all players and the DM." },
				{ value: "restrict", label: "Restrict player access", description: "Players will not be able to move this token unless it is thier owned PC Token. Will not be added to Players group selections." },
				{ value: "lock", label: "Lock", description: "Locks token for both DM and Players. Will not be added to group selections." },
			],
			defaultValue: "none"
		},
		{
			name: 'hidden',
			label: 'Hide',
			type: 'toggle',
			options: [
				{ value: true, label: "Hidden", description: "The token is hidden to players." },
				{ value: false, label: "Visible", description: "The token is visible to players." }
			],
			defaultValue: false
		},
		{
			name: 'square',
			label: 'Square Token',
			type: 'toggle',
			options: [
				{ value: true, label: "Square", description: "The token is square." },
				{ value: false, label: "Round", description: "The token is clipped to fit within a circle." }
			],
			defaultValue: false,
			hiddenSetting: true
		},
		{
			name: 'locked',
			label: 'Disable All Interaction',
			type: 'toggle',
			options: [
				{ value: true, label: "Interaction Disabled", description: "The token can not be interacted with in any way. Not movable, not selectable by players, no hp/ac displayed, no border displayed, no nothing. Players shouldn't even know it's a token." },
				{ value: false, label: "Interaction Allowed", description: "The token can be interacted with." }
			],
			defaultValue: false,
			hiddenSetting: true
		},
		{
			name: 'restrictPlayerMove',
			label: 'Restrict Player Movement',
			type: 'toggle',
			options: [
				{ value: true, label: "Restricted", description: "Players can not move the token unless it is their token." },
				{ value: false, label: "Unrestricted", description: "Players can move the token." }
			],
			defaultValue: false,
			hiddenSetting: true
		},
		{
			name: 'revealInFog',
			label: 'Reveal in Fog',
			type: 'toggle',
			options: [
				{ value: true, label: "Revealed in Fog", description: "The token will not be hidden by fog." },
				{ value: false, label: "Hidden in Fog", description: "The token will be hidden if in fog" }
			],
			defaultValue: false
		},
		{
			name: 'disablestat',
			label: 'Remove HP/AC',
			type: 'toggle',
			options: [
				{ value: true, label: "Removed", description: "The token does not have HP/AC shown to either the DM or the players." },
				{ value: false, label: "Visible to DM", description: "The token has HP/AC shown to only the DM." }
			],
			defaultValue: false
		},
		{
			name: 'hidestat',
			label: 'Hide Player HP/AC',
			type: 'toggle',
			options: [
				{ value: true, label: "Hidden", description: "Each player can see their own HP/AC, but can't see the HP/AC of other players." },
				{ value: false, label: "Visible", description: "Each player can see their own HP/AC as well as the HP/AC of other players." }
			],
			defaultValue: false
		},
		{
			name: 'hidehpbar',
			label: 'Only show HP values on hover',
			type: 'toggle',
			options: [
				{ value: true, label: "On Hover", description: "HP values are only shown when you hover or select the token. The 'Disable HP/AC' option overrides this one." },
				{ value: false, label: "Always", description: "HP values are always displayed on the token. The 'Disable HP/AC' option overrides this one." }
			],
			defaultValue: false
		},
		{
			name: 'disableborder',
			label: 'Disable Border',
			type: 'toggle',
			options: [
				{ value: true, label: 'No Border', description: "The token does not have a border around it." },
				{ value: false, label: 'Border', description: "The token has a border around it." }
			],
			defaultValue: false
		},
		{
			name: 'disableaura',
			label: 'Disable Health Aura',
			type: 'toggle',
			options: [
				{ value: true, label: 'No Aura', description: "The token does not have an aura representing its current health." },
				{ value: false, label: 'Health Aura', description: "The token has an aura representing current health around it." }
			],
			defaultValue: false,
			hiddenSetting: true
		},
		{
			name: 'enablepercenthpbar',
			label: 'Enable Token HP% Bar',
			type: 'toggle',
			options: [
				{ value: true, label: 'Health Bar', description: "The token has a traditional visual hp% bar below it" },
				{ value: false, label: 'No Bar', description: "The token does not have a traditional visual hp% bar below it" }
			],
			defaultValue: false,
			hiddenSetting: true
		},
		{
			name: 'revealname',
			label: 'Show name to players',
			type: 'toggle',
			options: [
				{ value: true, label: 'Visible', description: "The token's name is visible to players" },
				{ value: false, label: 'Hidden', description: "The token's name is hidden from players" }
			],
			defaultValue: false
		},
		{
			name: 'legacyaspectratio',
			label: 'Ignore Image Aspect Ratio',
			type: 'toggle',
			options: [
				{ value: true, label: 'Stretch', description: "The token's image will stretch to fill the token space" },
				{ value: false, label: 'Maintain', description: "New token's image will respect the aspect ratio of the image provided" }
			],
			defaultValue: false,
			hiddenSetting: true
		},
		{
			name: "player_owned",
			label: "Player Accessible Stats",
			type: 'toggle',
			options: [
				{ value: true, label: 'Player & DM', description: "The token's stat block is accessible to players via the token context menu. Players can also alter the HP/AC of this token." },
				{ value: false, label: 'DM only', description: "The token's stat block is not accessible to players via the token context menu. Players can not alter the HP/AC of this token." }
			],
			defaultValue: false
		},
		{
			name: "defaultmaxhptype",
			label: "Max HP Calculation",
			type: 'dropdown',
			options: [
				{ value: "average", label: "Average", description: "Monster Max HP will be set to the average value." },
				{ value: "roll", label: "Roll", description: "Monster Max HP will be individually rolled." },
				{ value: "max", label: "Max", description: "Monster Max HP will be set to the maximum value." }
			],
			defaultValue: "average"
		}
	];
}

function avtt_settings() {
	return [
		{
			name: 'allowTokenMeasurement',
			label: 'Measure while dragging tokens',
			type: 'toggle',
			options: [
				{ value: true, label: "Measure", description: `When you drag a token, the distance dragged will automatically be measured. Dropping the token and picking it back up will create a waypoint in the measurement. Clicking anywhere else, or dragging another token will stop the measurement.` },
				{ value: false, label: "Not Measuring", description: `Enable this to automatically measure the distance that you drag a token. When enabled, dropping the token and picking it back up will create a waypoint in the measurement. Clicking anywhere else, or dragging another token will stop the measurement.` }
			],
			defaultValue: false
		},
		{
			name: 'streamDiceRolls',
			label: 'Stream Dice Rolls',
			type: 'toggle',
			options: [
				{ value: true, label: "Streaming", description: `When you roll DDB dice (to Everyone), all players who also enable this feature will see your rolls and you will see theirs. Disclaimer: the dice will start small then grow to normal size after a few rolls. They will be contained to the smaller of your window or the sending screen size.` },
				{ value: false, label: "Not Streaming", description: `When you enable this, DDB dice rolls will be visible to you and all other players who also enable this. Disclaimer: the dice will start small then grow to normal size after a few rolls. They will be contained to the smaller of your window or the sending screen size.` }
			],
			defaultValue: false
		},
		{
			name: 'iframeStatBlocks',
			label: 'Fetch Monster Stat Blocks',
			type: 'toggle',
			options: [
				{ value: true, label: "Load from DDB", description: `Monster details pages are being fetched and shown as Stat Blocks. Disabling this will build monster stat blocks locally instead. Disabling this will improve performance and reduce network data usage. Enabling this is not recommended unless you are experiencing issues with the default stat blocks.` },
				{ value: false, label: "Build Locally", description: `Monster stat blocks are currently being built locally by AboveVTT. Enabling this will fetch and load monster details pages rather than building stat blocks locally. Enabling this will impact performance and will use a lot more network data. Enabling this is not recommended unless you are experiencing issues with the default stat blocks.` }
			],
			defaultValue: false
		}
	]
}

function get_avtt_setting_default_value(name) {
	return avtt_settings().find(s => s.name === name)?.defaultValue;
}
function get_avtt_setting_value(name) {
	switch (name) {
		case "iframeStatBlocks": return should_use_iframes_for_monsters();
		default:
			const setValue = window.EXPERIMENTAL_SETTINGS[name];
			if (setValue !== undefined) {
				return setValue;
			}
			return get_avtt_setting_default_value(name);
	}
}
function set_avtt_setting_value(name, newValue) {
	console.log(`set_avtt_setting_value ${name} is now ${newValue}`);
	switch (name) {
		case "iframeStatBlocks":
			if (newValue === true) {
				use_iframes_for_monsters();
			} else {
				stop_using_iframes_for_monsters();
			}
			break;
		case "streamDiceRolls":
			if (newValue === true || newValue === false) {
				window.JOINTHEDICESTREAM = newValue;
				enable_dice_streaming_feature(newValue)
			} else {
				const defaultValue = get_avtt_setting_default_value(name);
				window.JOINTHEDICESTREAM = defaultValue;
				enable_dice_streaming_feature(defaultValue);
			}
			break;
		default:
			window.EXPERIMENTAL_SETTINGS[name] = newValue;
			persist_experimental_settings(window.EXPERIMENTAL_SETTINGS);
			break;
	}
}

function is_valid_token_option_value(tokenOptionName, value) {
	return token_setting_options().find(o => o.name === tokenOptionName)?.options?.map(value).includes(value);
}

function convert_option_to_override_dropdown(tokenOption) {
	// Note: Spread syntax effectively goes one level deep while copying an array/object. Therefore, it may be unsuitable for copying multidimensional arrays or objects
	// we are explicitly not using the spread operator at this level because we need to deep copy the object
	let converted = {
		name: tokenOption.name,
		label: tokenOption.label,
		type: 'dropdown',
		options: tokenOption.options.map(option => { return {...option} }),
		defaultValue: undefined
	};
	converted.options.push({ value: undefined, label: "Not Overridden", description: "Changing this setting will override the default settings" });
	return converted;
}

function b64EncodeUnicode(str) {
        // first we use encodeURIComponent to get percent-encoded UTF-8,
        // then we convert the percent encodings into raw bytes which
        // can be fed into btoa.
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes(match, p1) {
                return String.fromCharCode('0x' + p1);
        }));
    }

function b64DecodeUnicode(str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }



function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}


function cloud_migration(scenedata=null){
	let http_api_gw="https://services.abovevtt.net";
	let searchParams = new URLSearchParams(window.location.search);
	if(searchParams.has("dev")){
		http_api_gw="https://jiv5p31gj3.execute-api.eu-west-1.amazonaws.com";
	}
	let gameid = find_game_id();

	if(scenedata==null)
		scenedata=localStorage.getItem("ScenesHandler"+gameid);
	$.ajax({
		url:http_api_gw+"/services?action=migrate&campaign="+window.CAMPAIGN_SECRET,
		type:"POST",
		contentType:'application/json',
		data: scenedata,
		success:function(data){
			localStorage.setItem("Migrated"+gameid,"1");
			$(".import-loading-indicator .loading-status-indicator__subtext").addClass("complete");
			$(".import-loading-indicator .loading-status-indicator__subtext").text("Import complete. Please rejoin AboveVTT");
			alert("Migration (hopefully) completed. You need to Re-Join AboveVTT");
			location.reload();
		}
	});
}

function init_settings() {

	let body = settingsPanel.body;

	if (window.DM) {

		if((!window.CLOUD) && (!window.FORCED_DM)){
			body.append(`
			<h5 class="token-image-modal-footer-title">MIGRATE YOUR SCENES TO THE CLOUD</h5>
			<div class="sidebar-panel-header-explanation">
				<p>Your data is currently stored on your browser's cache. Press migrate to move your data into the AboveVTT cloud (<b>WARNING. YOU RISK LOOSING YOU DATA</b>) </p>
				<button onclick='cloud_migration();' class="sidebar-panel-footer-button sidebar-hover-text" data-hover="This will migrate your data to the cloud. Be careful or you may loose your scenes">MIGRATE</button>
			</div>
			`)
		}
		else if(window.CLOUD){
			body.append('<b>Your scenes are stored in the "cloud"</b>');
		}

		body.append(`
			<h5 class="token-image-modal-footer-title">Import / Export</h5>
			<div class="sidebar-panel-header-explanation">
				<p><b>WARNING</b>: The import / export feature is expirimental. Use at your own risk. A future version will include an import/export wizard.</p>
				<p>Export will download a file containing all of your scenes, custom tokens, and soundpads.
				Import will allow you to upload an exported file. Scenes from that file will be added to the scenes in this campaign.</p>
				<div class="sidebar-panel-footer-horizontal-wrapper">
				<button onclick='import_openfile();' class="sidebar-panel-footer-button sidebar-hover-text" data-hover="Upload a file containing scenes, custom tokens, and soundpads. This will not overwrite your existing scenes. Any scenes found in the uploaded file will be added to your current list scenes">IMPORT</button>
				<button onclick='export_file();' class="sidebar-panel-footer-button sidebar-hover-text" data-hover="Download a file containing all of your scenes, custom tokens, and soundpads">EXPORT</button>
					<input accept='.abovevtt' id='input_file' type='file' style='display: none' />
			</div>
		`);

		$("#input_file").change(import_readfile);

		body.append(`
			<br />
			<h5 class="token-image-modal-footer-title">Default Options when placing tokens</h5>
			<div class="sidebar-panel-header-explanation">Every time you place a token on the scene, these settings will be used. You can override these settings on a per-token basis by clicking the gear on a specific token row in the tokens tab.</div>
		`);

		let tokenOptionsButton = $(`<button class="sidebar-panel-footer-button">Change The Default Token Options</button>`);
		tokenOptionsButton.on("click", function (clickEvent) {
			build_and_display_sidebar_flyout(clickEvent.clientY, function (flyout) {
				let optionsContainer = build_sidebar_token_options_flyout(token_setting_options(), window.TOKEN_SETTINGS, function (name, value) {
					if (value === true || value === false || typeof value === 'string') {
						window.TOKEN_SETTINGS[name] = value;
					} else {
						delete window.TOKEN_SETTINGS[name];
					}
				}, function() {
					persist_token_settings(window.TOKEN_SETTINGS);
					redraw_settings_panel_token_examples();
				});
				optionsContainer.prepend(`<div class="sidebar-panel-header-explanation">Every time you place a token on the scene, these settings will be used. You can override these settings on a per-token basis by clicking the gear on a specific token row in the tokens tab.</div>`);
				flyout.append(optionsContainer);
				position_flyout_left_of(body, flyout);
			});
		});
		body.append(tokenOptionsButton);

		const clearAllOverridesWarning = `This will remove ALL overridden token options from every player, monster, custom token, and folder in the Tokens Panel. This shouldn't remove any custom images from those tokens. This will not update any tokens that have been placed on a scene. This cannot be undone.`;
		let clearAllTokenOverrides = $(`<button class='token-image-modal-remove-all-button sidebar-hover-text' data-hover="${clearAllOverridesWarning}" style="width:100%;padding:8px;margin:10px 0px;">Clear All Token Option Overrides</button>`);
		clearAllTokenOverrides.on("click", function() {
			if (confirm(clearAllOverridesWarning)) {
				window.TOKEN_CUSTOMIZATIONS.forEach(tc => tc.clearTokenOptions());
				persist_all_token_customizations(window.TOKEN_CUSTOMIZATIONS);
			}
		});
		body.append(clearAllTokenOverrides);


		body.append(`<br />`);

	}

	const experimental_features = avtt_settings();

	body.append(`
		<br />
		<h5 class="token-image-modal-footer-title" >Above VTT Settings</h5>
		<div class="sidebar-panel-header-explanation">These are settings for AboveVTT. Some of them are experimental, and some of them are temporary. These may change or go away at any time so we recommend using the defaults values... (Except the dice streaming. You should probably enable that because that's just awesome!)</div>
	`);
	for(let i = 0; i < experimental_features.length; i++) {
		let setting = experimental_features[i];
		if (setting.dmOnly === true && !window.DM) {
			continue;
		}
		let currentValue = get_avtt_setting_value(setting.name);
		let inputWrapper = build_toggle_input(setting, currentValue, function(name, newValue) {
			set_avtt_setting_value(name, newValue);
		});
		body.append(inputWrapper);
	}
	let optOutOfAll = $(`<button class="token-image-modal-remove-all-button" title="Reset to defaults." style="width:100%;padding:8px;margin:10px 0px 30px 0px;">Reset to Defaults</button>`);
	optOutOfAll.click(function () {
		for (let i = 0; i < experimental_features.length; i++) {
			let setting = experimental_features[i];
			let toggle = body.find(`button[name=${setting.name}]`);
			toggle.removeClass("rc-switch-checked").removeClass("rc-switch-unknown");
			if (setting.defaultValue === true) {
				toggle.addClass("rc-switch-checked");
			}
			set_avtt_setting_value(setting.name, setting.defaultValue);
		}
	});
	body.append(optOutOfAll);

	redraw_settings_panel_token_examples();
}

function redraw_settings_panel_token_examples(settings) {
	console.log("redraw_settings_panel_token_examples", settings);
	let mergedSettings = {...window.TOKEN_SETTINGS};
	if (settings !== undefined) {
		mergedSettings = {...mergedSettings, ...settings};
	}
	delete mergedSettings.imageSize;
	let items = $(".example-tokens-wrapper .example-token");
	for (let i = 0; i < items.length; i++) {
		let item = $(items[i]);
		mergedSettings.imgsrc = item.find("img.token-image").attr("src");
		item.replaceWith(build_example_token(mergedSettings));
	}
}

function build_example_token(options) {
	let mergedOptions = {...default_options(), ...window.TOKEN_SETTINGS, ...options};
	let hpnum;
	switch (mergedOptions['defaultmaxhptype']) {
		case 'max':
			hpnum = 15;
			break;
		case 'roll':
			hpnum = 5 + Math.floor(Math.random() * 11); // Random 5-15
			break;
		case 'average':
		default:
			hpnum = 10;
			break;
	}
	mergedOptions.hp = hpnum;
	mergedOptions.max_hp = hpnum;
	mergedOptions.id = `exampleToken-${uuid()}`;
	mergedOptions.size = 90;
	// mergedOptions.gridHeight = 1;
	// mergedOptions.gridWidth = 1;
	mergedOptions.ac = 10;

	// TODO: this is horribly inneficient. Clean up token.place and then update this
	let token = new Token(mergedOptions);
	token.place(0);
	let html = $(`#tokens div[data-id='${mergedOptions.id}']`).clone();
	token.delete(false, false);

	html.addClass("example-token");
	// html.css({
	// 	float: "left",
	// 	width: 90,
	// 	height: 90,
	// 	position: "relative",
	// 	opacity: 1,
	// 	top: 0,
	// 	left: 0,
	// 	padding: "3px 0px"
	// });
	return html;
}

// used for settings tab, and tokens tab configuration modals. For placed tokens, see `build_options_flyout_menu`
// updateValue: function(name, newValue) {} // only update the data here
// didChange: function() {} // do ui things here
function build_sidebar_token_options_flyout(availableOptions, setValues, updateValue, didChange) {
	if (typeof updateValue !== 'function') {
		updateValue = function(name, newValue){
			console.warn("build_sidebar_token_options_flyout was not given an updateValue function so we can't set ", name, "to", value);
		};
	}
	if (typeof didChange !== 'function') {
		didChange = function(){
			console.log("build_sidebar_token_options_flyout was not given adidChange function");
		};
	}

	let container = $(`<div class="sidebar-token-options-flyout-container prevent-sidebar-modal-close"></div>`);

	// const updateValue = function(name, newValue) {
	// 	if (is_valid_token_option_value(name, newValue)) {
	// 		setValues[name] = newValue;
	// 	} else {
	// 		delete setValues[name];
	// 	}
	// };

	availableOptions.forEach(option => {
		if(option.hiddenSetting == true)
			return;
		const currentValue = setValues[option.name];
		if (option.type === "dropdown") {
			let inputWrapper = build_dropdown_input(option, currentValue, function(name, newValue) {
				updateValue(name, newValue);
				didChange();
			});
			container.append(inputWrapper);
		} else if (option.type === "toggle") {
			let inputWrapper = build_toggle_input(option, currentValue, function (name, newValue) {
				updateValue(name, newValue);
				didChange();
			});
			container.append(inputWrapper)
		} else {
			console.warn("build_sidebar_token_options_flyout failed to handle token setting option with type", option.type);
		}
	});
	update_token_base_visibility(container);


	// Build example tokens to show the settings changes
	container.append(`<h5 class="token-image-modal-footer-title" style="margin-top:15px;">Example Tokens</h5>`);
	let tokenExamplesWrapper = $(`<div class="example-tokens-wrapper"></div>`);
	container.append(tokenExamplesWrapper);
	// not square image to show aspect ratio
	tokenExamplesWrapper.append(build_example_token({imgsrc: "https://www.dndbeyond.com/avatars/thumbnails/6/359/420/618/636272697874197438.png"}));
	// perfectly square image
	tokenExamplesWrapper.append(build_example_token({imgsrc: "https://www.dndbeyond.com/avatars/8/441/636306375308314493.jpeg"}));
	// idk, something else I guess
	tokenExamplesWrapper.append(build_example_token({imgsrc: "https://i.imgur.com/2Lglcip.png"}));

	let resetToDefaults = $(`<button class='token-image-modal-remove-all-button' title="Reset all token settings back to their default values." style="width:100%;padding:8px;margin:10px 0px;">Reset Token Settings to Defaults</button>`);
	resetToDefaults.on("click", function (clickEvent) {

		let tokenOptionsFlyoutContainer = $(clickEvent.currentTarget).parent();

		// disable all toggle switches
		tokenOptionsFlyoutContainer
			.find(".rc-switch")
			.removeClass("rc-switch-checked")
			.removeClass("rc-switch-unknown");

		// set all dropdowns to their default values
		tokenOptionsFlyoutContainer
			.find("select")
			.each(function () {
				let el = $(this);
				let matchingOption = availableOptions.find(o => o.name === el.attr("name"));
				el.find(`option[value=${matchingOption.defaultValue}]`).attr('selected','selected');
			});

		// This is why we want multiple callback functions.
		// We're about to call updateValue a bunch of times and only need to update the UI (or do anything else really) one time
		availableOptions.forEach(option => updateValue(option.name, undefined));
		didChange();
	});
	container.append(resetToDefaults);

	observe_hover_text(container);

	return container;
}

function update_token_base_visibility(container) {
	const selectedStyle = container.find("select[name=tokenStyleSelect]").val();
	const findOtherOption = function(optionName) {
		return container.find(`.token-image-modal-footer-select-wrapper[data-option-name=${optionName}]`);
	}
	let styleSubSelect = findOtherOption("tokenBaseStyleSelect");
	if(selectedStyle === "virtualMiniCircle" || selectedStyle === "virtualMiniSquare"){
		styleSubSelect.show();
	} 
	else{
		styleSubSelect.hide();
	}
	if (selectedStyle === "noConstraint") {
		findOtherOption("square").show();
		findOtherOption("legacyaspectratio").show();
	} else {
		findOtherOption("square").hide();
		findOtherOption("legacyaspectratio").hide();
	}
	if(selectedStyle == "definitelyNotAToken"){
		findOtherOption("restrictPlayerMove").hide();
		findOtherOption("disablestat").hide();
		findOtherOption("disableborder").hide();
		findOtherOption("disableaura").hide();
		findOtherOption("hidehpbar").hide();
		findOtherOption("enablepercenthpbar").hide();
		findOtherOption("player_owned").hide();
		findOtherOption("hidestat").hide();
	} 
	else{
		findOtherOption("restrictPlayerMove").show();
		findOtherOption("disablestat").show();
		findOtherOption("disableborder").show();
		findOtherOption("disableaura").show();
		findOtherOption("hidehpbar").show();
		findOtherOption("enablepercenthpbar").show();
		findOtherOption("player_owned").show();
		findOtherOption("hidestat").show();
	}
}

function enable_dice_streaming_feature(enabled){
	if(enabled)
	{
		if($(".stream-dice-button").length>0)
			return;
		$(".glc-game-log>[class*='Container-Flex']").append($(`<div  id="stream_dice"><div class='stream-dice-button'>Dice Stream Disabled</div></div>`));
		update_dice_streaming_feature(window.JOINTHEDICESTREAM);
		$(".stream-dice-button").off().on("click", function(){
			if(window.JOINTHEDICESTREAM){
				update_dice_streaming_feature(false);
			}
			else {
				update_dice_streaming_feature(true);
			}
		})
	}
	else{
		$(".stream-dice-button").remove();
		window.JOINTHEDICESTREAM = false;
		$("[id^='streamer-']").remove();
		for (let peer in window.STREAMPEERS) {
			window.STREAMPEERS[peer].close();
			delete window.STREAMPEERS[peer]
		}
	}
}

function update_dice_streaming_feature(enabled, sendToText=gamelog_send_to_text()) {

	if (enabled == true) {
		// STREAMING STUFF
		window.JOINTHEDICESTREAM = true;
		$('.stream-dice-button').html("Dice Stream Enabled");
		$('.stream-dice-button').toggleClass("enabled", true);
		$("[role='presentation'] [role='menuitem']").each(function(){
			$(this).off().on("click", function(){
				if($(this).text() == "Everyone") {
					window.MB.sendMessage("custom/myVTT/revealmydicestream",{
						streamid: window.MYSTREAMID
					});
				}
				else if($(this).text() == "Dungeon Master"){
					window.MB.sendMessage("custom/myVTT/showonlytodmdicestream",{
						streamid: window.MYSTREAMID
					});
				}
				else{
					window.MB.sendMessage("custom/myVTT/hidemydicestream",{
						streamid: window.MYSTREAMID
					});
				}
			});
		});


		// DICE STREAMING ?!?!
		let diceRollPanel = $(".dice-rolling-panel__container");
		if (diceRollPanel.length > 0) {
			window.MYMEDIASTREAM = diceRollPanel[0].captureStream(30);
		}
		if (window.JOINTHEDICESTREAM) {

			for (let i in window.STREAMPEERS) {
				console.log("replacing the track")
				window.STREAMPEERS[i].getSenders()[0].replaceTrack(window.MYMEDIASTREAM.getVideoTracks()[0]);
			}
			setTimeout(function(){
				if(sendToText == "Dungeon Master"){
					window.MB.sendMessage("custom/myVTT/showonlytodmdicestream",{
						streamid: window.MYSTREAMID
					});
				}
				else{
					window.MB.sendMessage("custom/myVTT/hidemydicestream",{
						streamid: window.MYSTREAMID
					});
				}
			}, 1000)
			setTimeout(function(){
				window.MB.sendMessage("custom/myVTT/wannaseemydicecollection", {
					from: window.MYSTREAMID
				})
			}, 500);
		}
	}
	else {
		$(`.stream-dice-button`).html("Dice Stream Disabled");
		window.JOINTHEDICESTREAM = false;
		$('.stream-dice-button').toggleClass("enabled", false);
		$("[id^='streamer-']").remove();
		window.MB.sendMessage("custom/myVTT/turnoffsingledicestream", {
			to: "everyone",
			from: window.MYSTREAMID
		})
		for (let peer in window.STREAMPEERS) {
			window.STREAMPEERS[peer].close();
			delete window.STREAMPEERS[peer]
		}
	}

}

function persist_token_settings(settings){
	const gameid = find_game_id();
	localStorage.setItem("TokenSettings" + gameid, JSON.stringify(settings));
}


function persist_experimental_settings(settings) {
	const gameid = find_game_id();
	localStorage.setItem("ExperimentalSettings" + gameid, JSON.stringify(settings));
}

function export_scenes(callback){
	if(window.CLOUD){
		let http_api_gw="https://services.abovevtt.net";
		let searchParams = new URLSearchParams(window.location.search);
		if(searchParams.has("dev")){
			http_api_gw="https://jiv5p31gj3.execute-api.eu-west-1.amazonaws.com";
		}

		$.ajax({
			url:http_api_gw+"/services?action=export_scenes&campaign="+window.CAMPAIGN_SECRET,
			success: function(data){
				callback(JSON.parse(data))
			}
		})
	}
	else{
		let scenes=[];
		for(i=0;i<window.ScenesHandler.scenes.length;i++){
			var scene=Object.assign({}, window.ScenesHandler.scenes[i]);
			scenes.push(scene);
		}
		callback(scenes);
	}
}

function export_file(){
	let DataFile={
		version: 2,
		scenes:[],
		soundpads:{},
		tokendata:{},
		notes:{},
		journalchapters:[],
		};

	export_scenes(
		(scenes)=>{
			DataFile.scenes=scenes;
			DataFile.tokencustomizations=window.TOKEN_CUSTOMIZATIONS;
			DataFile.notes=window.JOURNAL.notes;
			DataFile.journalchapters=window.JOURNAL.chapters;
			DataFile.soundpads=window.SOUNDPADS;
			download(b64EncodeUnicode(JSON.stringify(DataFile,null,"\t")),"DataFile.abovevtt","text/plain");
		}
	);

};

function build_import_loading_indicator(){
	let loadingIndicator = $(`
		<div class="import-loading-indicator">
			<div class="loading-status-indicator__subtext">Loading Import File</div>
			<svg class="beholder-dm-screen loading-status-indicator__svg animate" viewBox="0 0 285 176" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow:overlay;width:100%;position:relative;padding:0 10%;"><defs><path id="beholder-eye-move-path" d="M0 0 a 15 5 0 0 0 15 0 a 15 5 0 0 1 -15 0 z"></path><clipPath id="beholder-eye-socket-clip-path"><path id="eye-socket" fill-rule="evenodd" clip-rule="evenodd" d="M145.5 76c-8.562 0-15.5-7.027-15.5-15.694 0-8.663 6.938-1.575 15.5-1.575 8.562 0 15.5-7.088 15.5 1.575C161 68.973 154.062 76 145.5 76z"></path></clipPath></defs><g class="beholder-dm-screen__beholder"><path fill-rule="evenodd" clip-rule="evenodd" d="M145.313 77.36c-10.2 0-18.466-8.27-18.466-18.47 0-10.197 8.266-1.855 18.466-1.855 10.199 0 18.465-8.342 18.465 1.855 0 10.2-8.266 18.47-18.465 18.47m59.557 4.296l-.083-.057c-.704-.5-1.367-1.03-1.965-1.59a12.643 12.643 0 0 1-1.57-1.801c-.909-1.268-1.51-2.653-1.859-4.175-.355-1.521-.461-3.179-.442-4.977.007-.897.049-1.835.087-2.827.038-.995.079-2.032.053-3.194-.031-1.158-.11-2.445-.519-3.97a10.494 10.494 0 0 0-1.014-2.43 8.978 8.978 0 0 0-1.938-2.32 9.64 9.64 0 0 0-2.468-1.54l-.314-.137-.299-.114-.609-.212c-.382-.105-.787-.227-1.151-.298-1.495-.315-2.819-.383-4.065-.39-1.248-.004-2.407.087-3.534.2a56.971 56.971 0 0 0-3.18.44c-6.271.646-12.648 1.559-13.689-.837-1.079-2.487-3.35-8.058 3.115-12.19 4.076.154 8.141.347 12.179.62 1.461.098 2.914.212 4.36.34-4.614.924-9.314 1.7-14.019 2.43h-.015a2.845 2.845 0 0 0-2.388 3.066 2.84 2.84 0 0 0 3.088 2.574c5.125-.462 10.25-.973 15.416-1.696 2.592-.378 5.17-.776 7.88-1.42a29.7 29.7 0 0 0 2.108-.59c.181-.06.363-.117.56-.193.197-.072.378-.136.594-.227.208-.09.405-.17.643-.291l.345-.174.394-.235c.064-.042.124-.076.196-.125l.235-.174.235-.174.117-.099.148-.136c.098-.094.189-.189.283-.287l.137-.152a3.44 3.44 0 0 0 .166-.22c.114-.154.224-.317.318-.484l.072-.125.038-.064.042-.09a5.06 5.06 0 0 0 .367-1.154c.045-.308.06-.63.045-.944a4.322 4.322 0 0 0-.042-.458 5.19 5.19 0 0 0-.386-1.207 5.356 5.356 0 0 0-.499-.799l-.091-.117-.072-.083a5.828 5.828 0 0 0-.303-.318l-.155-.151-.083-.076-.057-.05a9.998 9.998 0 0 0-.503-.382c-.152-.102-.28-.178-.424-.265l-.205-.124-.181-.091-.36-.186a18.713 18.713 0 0 0-.643-.28l-.591-.23c-1.521-.538-2.853-.856-4.197-1.159a83.606 83.606 0 0 0-3.951-.772c-2.604-.45-5.185-.829-7.763-1.166-4.273-.564-8.531-1.029-12.785-1.46 0-.004-.004-.004-.004-.004a38.55 38.55 0 0 0-4.81-3.1v-.004c.397-.223.965-.424 1.688-.549 1.135-.208 2.551-.242 4.05-.185 3.024.11 6.366.59 10.022.662 1.832.02 3.781-.056 5.84-.56a12.415 12.415 0 0 0 3.081-1.188 10.429 10.429 0 0 0 2.702-2.135 2.841 2.841 0 0 0-3.774-4.205l-.208.152c-.825.594-1.76.87-2.956.942-1.188.068-2.566-.09-4.004-.367-2.907-.553-6.003-1.556-9.5-2.32-1.763-.371-3.644-.7-5.802-.73a16.984 16.984 0 0 0-3.455.298 13.236 13.236 0 0 0-3.774 1.333 13.065 13.065 0 0 0-3.376 2.615 14.67 14.67 0 0 0-1.646 2.154h-.004a41.49 41.49 0 0 0-8.436-.863c-1.518 0-3.017.079-4.489.238-1.79-1.563-3.444-3.198-4.833-4.913a21.527 21.527 0 0 1-1.4-1.903 15.588 15.588 0 0 1-1.094-1.893c-.606-1.241-.905-2.422-.893-3.22a3.38 3.38 0 0 1 .038-.55c.034-.155.06-.31.121-.446.106-.273.276-.534.571-.776.579-.496 1.681-.81 2.884-.689 1.207.114 2.487.629 3.615 1.476 1.135.848 2.111 2.044 2.868 3.444l.038.076a2.848 2.848 0 0 0 3.471 1.329 2.843 2.843 0 0 0 1.714-3.641c-.768-2.135-1.96-4.235-3.675-6.003-1.71-1.76-3.924-3.18-6.502-3.872a12.604 12.604 0 0 0-4.076-.416 11.248 11.248 0 0 0-4.284 1.128 10.405 10.405 0 0 0-3.702 3.054c-.499.655-.901 1.37-1.237 2.104-.318.73-.568 1.488-.731 2.237-.337 1.503-.356 2.96-.238 4.315.125 1.362.405 2.63.764 3.822.36 1.196.803 2.317 1.298 3.373a31.9 31.9 0 0 0 1.605 3.043c.458.768.935 1.506 1.427 2.233h-.004a39.13 39.13 0 0 0-4.515 2.384c-3.111-.344-6.2-.76-9.242-1.294-2.033-.364-4.043-.769-6.007-1.26-1.96-.485-3.876-1.045-5.662-1.726a24.74 24.74 0 0 1-2.528-1.102c-.772-.393-1.48-.829-1.987-1.234a4.916 4.916 0 0 1-.56-.507c-.02-.015-.03-.03-.046-.045.288-.28.761-.621 1.314-.905.719-.382 1.566-.711 2.456-.984 1.79-.556 3.762-.9 5.76-1.098l.046-.007a2.843 2.843 0 0 0 2.547-2.805 2.846 2.846 0 0 0-2.824-2.868c-2.301-.02-4.628.11-7.028.567-1.2.231-2.418.538-3.671 1.022-.628.246-1.26.526-1.911.901a10.12 10.12 0 0 0-1.96 1.446c-.648.62-1.307 1.438-1.757 2.524-.114.261-.197.56-.284.844a7.996 7.996 0 0 0-.166.909c-.061.609-.05 1.237.049 1.809.189 1.162.632 2.12 1.109 2.891a11.265 11.265 0 0 0 1.529 1.942c1.056 1.082 2.127 1.88 3.194 2.6a33.287 33.287 0 0 0 3.21 1.855c2.142 1.093 4.284 1.979 6.434 2.774a98.121 98.121 0 0 0 6.464 2.112c.511.147 1.018.291 1.529.435a36.8 36.8 0 0 0-4.458 7.089v.004c-1.908-2.014-3.876-3.997-6.022-5.931a52.386 52.386 0 0 0-3.471-2.888 31.347 31.347 0 0 0-2.028-1.408 17.575 17.575 0 0 0-2.574-1.378 11.177 11.177 0 0 0-1.888-.616c-.761-.16-1.73-.31-3.02-.107a6.543 6.543 0 0 0-1.007.254 6.508 6.508 0 0 0-2.79 1.84 6.7 6.7 0 0 0-.594.783c-.083.129-.174.269-.238.39a7.248 7.248 0 0 0-.681 1.692 9.383 9.383 0 0 0-.3 2.02c-.022.584 0 1.09.038 1.568.084.953.231 1.786.401 2.577l.39 1.764c.027.14.065.268.087.408l.057.428.121.855.065.428.033.443.072.886c.061.586.061 1.196.076 1.801.05 2.426-.11 4.92-.435 7.407a50.6 50.6 0 0 1-1.503 7.35c-.17.594-.367 1.17-.548 1.76a55.283 55.283 0 0 1-.632 1.684l-.352.791c-.061.129-.114.276-.178.39l-.193.356-.186.355c-.064.121-.129.246-.193.326-.129.185-.257.375-.378.575l-.303.485a2.813 2.813 0 0 0 4.462 3.387c.295-.322.59-.655.878-.988.155-.17.265-.333.382-.496l.349-.488.344-.492c.117-.166.2-.325.303-.492l.583-.98a53.92 53.92 0 0 0 1.018-1.964c.295-.659.61-1.321.89-1.984a58.231 58.231 0 0 0 2.69-8.114 58.405 58.405 0 0 0 1.51-8.493c.068-.73.152-1.454.167-2.203l.045-1.12.02-.56-.012-.568-.004-.205c.167.186.333.371.496.557 1.608 1.84 3.179 3.838 4.708 5.889a181.94 181.94 0 0 1 4.481 6.328c.14.2.311.428.477.617.284.33.594.62.924.874 0 .216.003.424.015.636-2.661 2.861-5.265 5.821-7.748 9.034-1.567 2.06-3.096 4.19-4.485 6.715-.685 1.267-1.347 2.645-1.854 4.363-.246.879-.454 1.851-.496 3.02l-.007.44.022.473c.012.159.02.314.038.477.023.166.05.337.076.503.113.666.333 1.385.65 2.07.16.337.356.67.557.992.212.299.44.613.681.878a8.075 8.075 0 0 0 1.54 1.328c1.05.697 2.04 1.06 2.938 1.31 1.79.466 3.292.519 4.723.507 2.842-.053 5.367-.48 7.853-.98 4.943-1.022 9.618-2.434 14.243-3.948a2.845 2.845 0 0 0 1.911-3.236 2.842 2.842 0 0 0-3.323-2.267h-.015c-4.648.878-9.322 1.635-13.864 1.965-2.252.155-4.511.208-6.46-.027a10.954 10.954 0 0 1-1.685-.322c.004-.015.012-.026.015-.037.133-.273.322-.606.534-.954.235-.36.477-.73.768-1.117 1.14-1.548 2.619-3.164 4.183-4.723a83.551 83.551 0 0 1 2.585-2.468 35.897 35.897 0 0 0 2.312 4.16c.125.2.261.405.397.602 3.747-.413 7.415-1.06 10.356-1.617l.037-.007a7.47 7.47 0 0 1 8.702 5.957 7.491 7.491 0 0 1-4.724 8.38C132.172 94.372 138.542 96 145.313 96c20.358 0 37.087-14.708 38.994-33.514.193-.05.386-.098.576-.144a23.261 23.261 0 0 1 2.354-.458c.726-.102 1.393-.14 1.847-.125.125-.004.193.015.299.012.03.003.064.007.098.007h.053c.008.004.015.004.027.004.106 0 .094-.019.09-.068-.007-.05-.022-.125.019-.117.038.007.125.083.216.26.087.19.186.443.269.761.079.33.159.69.219 1.102.129.806.216 1.745.307 2.725.091.984.178 2.02.306 3.1.262 2.138.682 4.435 1.533 6.683.837 2.245 2.154 4.406 3.812 6.15.825.871 1.725 1.655 2.66 2.336.943.677 1.919 1.26 2.911 1.782a2.848 2.848 0 0 0 3.641-.874 2.848 2.848 0 0 0-.674-3.966" fill="#0398F3"></path><g clip-path="url(#beholder-eye-socket-clip-path)"><circle cx="137.5" cy="60" r="7" fill="#1B9AF0"><animateMotion dur="2.3s" repeatCount="indefinite"><mpath xlink:href="#beholder-eye-move-path"></mpath></animateMotion></circle></g></g><g class="beholder-dm-screen__screen"><path fill="#EAEEF0" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" d="M76 76h136v97H76z"></path><path d="M218 170.926V74.282l64-35.208v96.644l-64 35.208zM70 171.026V74.318L3 38.974v96.708l67 35.344z" fill="#F3F6F9" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
		</div>
	`);
	$("body").append(loadingIndicator);
}

function import_openfile(){
	$("#input_file").trigger("click");
}

function import_readfile() {
	build_import_loading_indicator();
	var reader = new FileReader();
	reader.onload = function() {
		// DECODE
		var DataFile=null;
		try{
			DataFile=$.parseJSON(b64DecodeUnicode(reader.result));
		}
		catch{

		}
		if(!DataFile){ // pre version 2
			DataFile=$.parseJSON(atob(reader.result));
		}

		for(k in DataFile.soundpads){
			window.SOUNDPADS[k]=DataFile.soundpads[k];
		}
		$("#sounds-panel").remove();
		persist_soundpad();

		let customizations = window.TOKEN_CUSTOMIZATIONS;
		if (DataFile.tokencustomizations !== undefined) {
			DataFile.tokencustomizations.forEach(json => {
				try {
					let importedCustomization = TokenCustomization.fromJson(json);
					let existing = customizations.find(tc => tc.tokenType === importedCustomization.tokenType && tc.id === importedCustomization.id);
					if (existing) {
						existing.alternativeImages().forEach(img => importedCustomization.addAlternativeImage(img));
					} else {
						customizations.push(importedCustomization);
					}
				} catch (error) {
					console.error("Failed to parse TokenCustomization from json", json);
				}
			});
		}

		if (DataFile.mytokens !== undefined) {
			let importedFolders = [];
			if (DataFile.mytokensfolders !== undefined) {
				importedFolders = DataFile.mytokensfolders;
			}
			const importedMytokens = DataFile.mytokens;
			let migratedCustomizations = migrate_convert_mytokens_to_customizations(importedFolders, importedMytokens);
			migratedCustomizations.forEach(migratedTC => {
				let existing = customizations.find(existingTC => existingTC.tokenType === migratedTC.tokenType && existingTC.id === migratedTC.id);
				if (!existing) {
					customizations.push(migratedTC);
				}
			});
		}

		if (DataFile.tokendata) {
			if (!tokendata) {
				tokendata = {folders: {}, tokens: {}};
			}
			if (!tokendata.folders) {
				tokendata.folders = {};
			}
			if(!tokendata.tokens){
				tokendata.tokens={};
			}
			if (DataFile.tokendata.folders) {
				for(k in DataFile.tokendata.folders){
					tokendata.folders[k]=DataFile.tokendata.folders[k];
				}
			}
			if (DataFile.tokendata.tokens) {
				for(k in DataFile.tokendata.tokens){
					tokendata.tokens[k]=DataFile.tokendata.tokens[k];
				}
			}
			let migratedFromTokenData = migrate_tokendata();
			migratedFromTokenData.forEach(migratedTC => {
				let existing = customizations.find(existingTC => existingTC.tokenType === migratedTC.tokenType && existingTC.id === migratedTC.id);
				if (!existing) {
					console.log("adding migrated from tokendata", migratedTC);
					customizations.push(migratedTC);
				} else {
					console.log("NOT adding migrated from tokendata", migratedTC, existing);
				}
			});
		}

		persist_all_token_customizations(customizations, function () {
			if(DataFile.notes){
				window.JOURNAL.notes=DataFile.notes;
				window.JOURNAL.chapters=DataFile.journalchapters;
				window.JOURNAL.persist();
				window.JOURNAL.build_journal();
			} else {
				alert('Loading completed. Data merged');
			}
			if(window.CLOUD){
				cloud_migration(JSON.stringify(DataFile.scenes));
			}
			else{
				for(i=0;i<DataFile.scenes.length;i++){
					window.ScenesHandler.scenes.push(DataFile.scenes[i]);
				}
			}
		});
	};
	reader.readAsText($("#input_file").get(0).files[0]);
}
