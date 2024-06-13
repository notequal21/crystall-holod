(() => {
    var __webpack_modules__ = {
        19: module => {
            /*! choices.js v10.2.0 | © 2022 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
            (function webpackUniversalModuleDefinition(root, factory) {
                if (true) module.exports = factory();
            })(window, (function() {
                return function() {
                    "use strict";
                    var __webpack_modules__ = {
                        282: function(__unused_webpack_module, exports, __nested_webpack_require_632__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.clearChoices = exports.activateChoices = exports.filterChoices = exports.addChoice = void 0;
                            var constants_1 = __nested_webpack_require_632__(883);
                            var addChoice = function(_a) {
                                var value = _a.value, label = _a.label, id = _a.id, groupId = _a.groupId, disabled = _a.disabled, elementId = _a.elementId, customProperties = _a.customProperties, placeholder = _a.placeholder, keyCode = _a.keyCode;
                                return {
                                    type: constants_1.ACTION_TYPES.ADD_CHOICE,
                                    value,
                                    label,
                                    id,
                                    groupId,
                                    disabled,
                                    elementId,
                                    customProperties,
                                    placeholder,
                                    keyCode
                                };
                            };
                            exports.addChoice = addChoice;
                            var filterChoices = function(results) {
                                return {
                                    type: constants_1.ACTION_TYPES.FILTER_CHOICES,
                                    results
                                };
                            };
                            exports.filterChoices = filterChoices;
                            var activateChoices = function(active) {
                                if (active === void 0) active = true;
                                return {
                                    type: constants_1.ACTION_TYPES.ACTIVATE_CHOICES,
                                    active
                                };
                            };
                            exports.activateChoices = activateChoices;
                            var clearChoices = function() {
                                return {
                                    type: constants_1.ACTION_TYPES.CLEAR_CHOICES
                                };
                            };
                            exports.clearChoices = clearChoices;
                        },
                        783: function(__unused_webpack_module, exports, __nested_webpack_require_2068__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.addGroup = void 0;
                            var constants_1 = __nested_webpack_require_2068__(883);
                            var addGroup = function(_a) {
                                var value = _a.value, id = _a.id, active = _a.active, disabled = _a.disabled;
                                return {
                                    type: constants_1.ACTION_TYPES.ADD_GROUP,
                                    value,
                                    id,
                                    active,
                                    disabled
                                };
                            };
                            exports.addGroup = addGroup;
                        },
                        464: function(__unused_webpack_module, exports, __nested_webpack_require_2595__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.highlightItem = exports.removeItem = exports.addItem = void 0;
                            var constants_1 = __nested_webpack_require_2595__(883);
                            var addItem = function(_a) {
                                var value = _a.value, label = _a.label, id = _a.id, choiceId = _a.choiceId, groupId = _a.groupId, customProperties = _a.customProperties, placeholder = _a.placeholder, keyCode = _a.keyCode;
                                return {
                                    type: constants_1.ACTION_TYPES.ADD_ITEM,
                                    value,
                                    label,
                                    id,
                                    choiceId,
                                    groupId,
                                    customProperties,
                                    placeholder,
                                    keyCode
                                };
                            };
                            exports.addItem = addItem;
                            var removeItem = function(id, choiceId) {
                                return {
                                    type: constants_1.ACTION_TYPES.REMOVE_ITEM,
                                    id,
                                    choiceId
                                };
                            };
                            exports.removeItem = removeItem;
                            var highlightItem = function(id, highlighted) {
                                return {
                                    type: constants_1.ACTION_TYPES.HIGHLIGHT_ITEM,
                                    id,
                                    highlighted
                                };
                            };
                            exports.highlightItem = highlightItem;
                        },
                        137: function(__unused_webpack_module, exports, __nested_webpack_require_3779__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.setIsLoading = exports.resetTo = exports.clearAll = void 0;
                            var constants_1 = __nested_webpack_require_3779__(883);
                            var clearAll = function() {
                                return {
                                    type: constants_1.ACTION_TYPES.CLEAR_ALL
                                };
                            };
                            exports.clearAll = clearAll;
                            var resetTo = function(state) {
                                return {
                                    type: constants_1.ACTION_TYPES.RESET_TO,
                                    state
                                };
                            };
                            exports.resetTo = resetTo;
                            var setIsLoading = function(isLoading) {
                                return {
                                    type: constants_1.ACTION_TYPES.SET_IS_LOADING,
                                    isLoading
                                };
                            };
                            exports.setIsLoading = setIsLoading;
                        },
                        373: function(__unused_webpack_module, exports, __nested_webpack_require_4494__) {
                            var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                                if (pack || arguments.length === 2) for (var ar, i = 0, l = from.length; i < l; i++) if (ar || !(i in from)) {
                                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                    ar[i] = from[i];
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var deepmerge_1 = __importDefault(__nested_webpack_require_4494__(996));
                            var fuse_js_1 = __importDefault(__nested_webpack_require_4494__(221));
                            var choices_1 = __nested_webpack_require_4494__(282);
                            var groups_1 = __nested_webpack_require_4494__(783);
                            var items_1 = __nested_webpack_require_4494__(464);
                            var misc_1 = __nested_webpack_require_4494__(137);
                            var components_1 = __nested_webpack_require_4494__(520);
                            var constants_1 = __nested_webpack_require_4494__(883);
                            var defaults_1 = __nested_webpack_require_4494__(789);
                            var utils_1 = __nested_webpack_require_4494__(799);
                            var reducers_1 = __nested_webpack_require_4494__(655);
                            var store_1 = __importDefault(__nested_webpack_require_4494__(744));
                            var templates_1 = __importDefault(__nested_webpack_require_4494__(686));
                            var IS_IE11 = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
                            var USER_DEFAULTS = {};
                            var Choices = function() {
                                function Choices(element, userConfig) {
                                    if (element === void 0) element = "[data-choice]";
                                    if (userConfig === void 0) userConfig = {};
                                    var _this = this;
                                    if (userConfig.allowHTML === void 0) console.warn("Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message.");
                                    this.config = deepmerge_1.default.all([ defaults_1.DEFAULT_CONFIG, Choices.defaults.options, userConfig ], {
                                        arrayMerge: function(_, sourceArray) {
                                            return __spreadArray([], sourceArray, true);
                                        }
                                    });
                                    var invalidConfigOptions = (0, utils_1.diff)(this.config, defaults_1.DEFAULT_CONFIG);
                                    if (invalidConfigOptions.length) console.warn("Unknown config option(s) passed", invalidConfigOptions.join(", "));
                                    var passedElement = typeof element === "string" ? document.querySelector(element) : element;
                                    if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) throw TypeError("Expected one of the following types text|select-one|select-multiple");
                                    this._isTextElement = passedElement.type === constants_1.TEXT_TYPE;
                                    this._isSelectOneElement = passedElement.type === constants_1.SELECT_ONE_TYPE;
                                    this._isSelectMultipleElement = passedElement.type === constants_1.SELECT_MULTIPLE_TYPE;
                                    this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
                                    this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;
                                    if (![ "auto", "always" ].includes("".concat(this.config.renderSelectedChoices))) this.config.renderSelectedChoices = "auto";
                                    if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== "function") {
                                        var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
                                        this.config.addItemFilter = re.test.bind(re);
                                    }
                                    if (this._isTextElement) this.passedElement = new components_1.WrappedInput({
                                        element: passedElement,
                                        classNames: this.config.classNames,
                                        delimiter: this.config.delimiter
                                    }); else this.passedElement = new components_1.WrappedSelect({
                                        element: passedElement,
                                        classNames: this.config.classNames,
                                        template: function(data) {
                                            return _this._templates.option(data);
                                        }
                                    });
                                    this.initialised = false;
                                    this._store = new store_1.default;
                                    this._initialState = reducers_1.defaultState;
                                    this._currentState = reducers_1.defaultState;
                                    this._prevState = reducers_1.defaultState;
                                    this._currentValue = "";
                                    this._canSearch = !!this.config.searchEnabled;
                                    this._isScrollingOnIe = false;
                                    this._highlightPosition = 0;
                                    this._wasTap = true;
                                    this._placeholderValue = this._generatePlaceholderValue();
                                    this._baseId = (0, utils_1.generateId)(this.passedElement.element, "choices-");
                                    this._direction = this.passedElement.dir;
                                    if (!this._direction) {
                                        var elementDirection = window.getComputedStyle(this.passedElement.element).direction;
                                        var documentDirection = window.getComputedStyle(document.documentElement).direction;
                                        if (elementDirection !== documentDirection) this._direction = elementDirection;
                                    }
                                    this._idNames = {
                                        itemChoice: "item-choice"
                                    };
                                    if (this._isSelectElement) {
                                        this._presetGroups = this.passedElement.optionGroups;
                                        this._presetOptions = this.passedElement.options;
                                    }
                                    this._presetChoices = this.config.choices;
                                    this._presetItems = this.config.items;
                                    if (this.passedElement.value && this._isTextElement) {
                                        var splitValues = this.passedElement.value.split(this.config.delimiter);
                                        this._presetItems = this._presetItems.concat(splitValues);
                                    }
                                    if (this.passedElement.options) this.passedElement.options.forEach((function(option) {
                                        _this._presetChoices.push({
                                            value: option.value,
                                            label: option.innerHTML,
                                            selected: !!option.selected,
                                            disabled: option.disabled || option.parentNode.disabled,
                                            placeholder: option.value === "" || option.hasAttribute("placeholder"),
                                            customProperties: (0, utils_1.parseCustomProperties)(option.dataset.customProperties)
                                        });
                                    }));
                                    this._render = this._render.bind(this);
                                    this._onFocus = this._onFocus.bind(this);
                                    this._onBlur = this._onBlur.bind(this);
                                    this._onKeyUp = this._onKeyUp.bind(this);
                                    this._onKeyDown = this._onKeyDown.bind(this);
                                    this._onClick = this._onClick.bind(this);
                                    this._onTouchMove = this._onTouchMove.bind(this);
                                    this._onTouchEnd = this._onTouchEnd.bind(this);
                                    this._onMouseDown = this._onMouseDown.bind(this);
                                    this._onMouseOver = this._onMouseOver.bind(this);
                                    this._onFormReset = this._onFormReset.bind(this);
                                    this._onSelectKey = this._onSelectKey.bind(this);
                                    this._onEnterKey = this._onEnterKey.bind(this);
                                    this._onEscapeKey = this._onEscapeKey.bind(this);
                                    this._onDirectionKey = this._onDirectionKey.bind(this);
                                    this._onDeleteKey = this._onDeleteKey.bind(this);
                                    if (this.passedElement.isActive) {
                                        if (!this.config.silent) console.warn("Trying to initialise Choices on element already initialised", {
                                            element
                                        });
                                        this.initialised = true;
                                        return;
                                    }
                                    this.init();
                                }
                                Object.defineProperty(Choices, "defaults", {
                                    get: function() {
                                        return Object.preventExtensions({
                                            get options() {
                                                return USER_DEFAULTS;
                                            },
                                            get templates() {
                                                return templates_1.default;
                                            }
                                        });
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Choices.prototype.init = function() {
                                    if (this.initialised) return;
                                    this._createTemplates();
                                    this._createElements();
                                    this._createStructure();
                                    this._store.subscribe(this._render);
                                    this._render();
                                    this._addEventListeners();
                                    var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute("disabled");
                                    if (shouldDisable) this.disable();
                                    this.initialised = true;
                                    var callbackOnInit = this.config.callbackOnInit;
                                    if (callbackOnInit && typeof callbackOnInit === "function") callbackOnInit.call(this);
                                };
                                Choices.prototype.destroy = function() {
                                    if (!this.initialised) return;
                                    this._removeEventListeners();
                                    this.passedElement.reveal();
                                    this.containerOuter.unwrap(this.passedElement.element);
                                    this.clearStore();
                                    if (this._isSelectElement) this.passedElement.options = this._presetOptions;
                                    this._templates = templates_1.default;
                                    this.initialised = false;
                                };
                                Choices.prototype.enable = function() {
                                    if (this.passedElement.isDisabled) this.passedElement.enable();
                                    if (this.containerOuter.isDisabled) {
                                        this._addEventListeners();
                                        this.input.enable();
                                        this.containerOuter.enable();
                                    }
                                    return this;
                                };
                                Choices.prototype.disable = function() {
                                    if (!this.passedElement.isDisabled) this.passedElement.disable();
                                    if (!this.containerOuter.isDisabled) {
                                        this._removeEventListeners();
                                        this.input.disable();
                                        this.containerOuter.disable();
                                    }
                                    return this;
                                };
                                Choices.prototype.highlightItem = function(item, runEvent) {
                                    if (runEvent === void 0) runEvent = true;
                                    if (!item || !item.id) return this;
                                    var id = item.id, _a = item.groupId, groupId = _a === void 0 ? -1 : _a, _b = item.value, value = _b === void 0 ? "" : _b, _c = item.label, label = _c === void 0 ? "" : _c;
                                    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                                    this._store.dispatch((0, items_1.highlightItem)(id, true));
                                    if (runEvent) this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                                        id,
                                        value,
                                        label,
                                        groupValue: group && group.value ? group.value : null
                                    });
                                    return this;
                                };
                                Choices.prototype.unhighlightItem = function(item) {
                                    if (!item || !item.id) return this;
                                    var id = item.id, _a = item.groupId, groupId = _a === void 0 ? -1 : _a, _b = item.value, value = _b === void 0 ? "" : _b, _c = item.label, label = _c === void 0 ? "" : _c;
                                    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                                    this._store.dispatch((0, items_1.highlightItem)(id, false));
                                    this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                                        id,
                                        value,
                                        label,
                                        groupValue: group && group.value ? group.value : null
                                    });
                                    return this;
                                };
                                Choices.prototype.highlightAll = function() {
                                    var _this = this;
                                    this._store.items.forEach((function(item) {
                                        return _this.highlightItem(item);
                                    }));
                                    return this;
                                };
                                Choices.prototype.unhighlightAll = function() {
                                    var _this = this;
                                    this._store.items.forEach((function(item) {
                                        return _this.unhighlightItem(item);
                                    }));
                                    return this;
                                };
                                Choices.prototype.removeActiveItemsByValue = function(value) {
                                    var _this = this;
                                    this._store.activeItems.filter((function(item) {
                                        return item.value === value;
                                    })).forEach((function(item) {
                                        return _this._removeItem(item);
                                    }));
                                    return this;
                                };
                                Choices.prototype.removeActiveItems = function(excludedId) {
                                    var _this = this;
                                    this._store.activeItems.filter((function(_a) {
                                        var id = _a.id;
                                        return id !== excludedId;
                                    })).forEach((function(item) {
                                        return _this._removeItem(item);
                                    }));
                                    return this;
                                };
                                Choices.prototype.removeHighlightedItems = function(runEvent) {
                                    var _this = this;
                                    if (runEvent === void 0) runEvent = false;
                                    this._store.highlightedActiveItems.forEach((function(item) {
                                        _this._removeItem(item);
                                        if (runEvent) _this._triggerChange(item.value);
                                    }));
                                    return this;
                                };
                                Choices.prototype.showDropdown = function(preventInputFocus) {
                                    var _this = this;
                                    if (this.dropdown.isActive) return this;
                                    requestAnimationFrame((function() {
                                        _this.dropdown.show();
                                        _this.containerOuter.open(_this.dropdown.distanceFromTopWindow);
                                        if (!preventInputFocus && _this._canSearch) _this.input.focus();
                                        _this.passedElement.triggerEvent(constants_1.EVENTS.showDropdown, {});
                                    }));
                                    return this;
                                };
                                Choices.prototype.hideDropdown = function(preventInputBlur) {
                                    var _this = this;
                                    if (!this.dropdown.isActive) return this;
                                    requestAnimationFrame((function() {
                                        _this.dropdown.hide();
                                        _this.containerOuter.close();
                                        if (!preventInputBlur && _this._canSearch) {
                                            _this.input.removeActiveDescendant();
                                            _this.input.blur();
                                        }
                                        _this.passedElement.triggerEvent(constants_1.EVENTS.hideDropdown, {});
                                    }));
                                    return this;
                                };
                                Choices.prototype.getValue = function(valueOnly) {
                                    if (valueOnly === void 0) valueOnly = false;
                                    var values = this._store.activeItems.reduce((function(selectedItems, item) {
                                        var itemValue = valueOnly ? item.value : item;
                                        selectedItems.push(itemValue);
                                        return selectedItems;
                                    }), []);
                                    return this._isSelectOneElement ? values[0] : values;
                                };
                                Choices.prototype.setValue = function(items) {
                                    var _this = this;
                                    if (!this.initialised) return this;
                                    items.forEach((function(value) {
                                        return _this._setChoiceOrItem(value);
                                    }));
                                    return this;
                                };
                                Choices.prototype.setChoiceByValue = function(value) {
                                    var _this = this;
                                    if (!this.initialised || this._isTextElement) return this;
                                    var choiceValue = Array.isArray(value) ? value : [ value ];
                                    choiceValue.forEach((function(val) {
                                        return _this._findAndSelectChoiceByValue(val);
                                    }));
                                    return this;
                                };
                                Choices.prototype.setChoices = function(choicesArrayOrFetcher, value, label, replaceChoices) {
                                    var _this = this;
                                    if (choicesArrayOrFetcher === void 0) choicesArrayOrFetcher = [];
                                    if (value === void 0) value = "value";
                                    if (label === void 0) label = "label";
                                    if (replaceChoices === void 0) replaceChoices = false;
                                    if (!this.initialised) throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
                                    if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices");
                                    if (typeof value !== "string" || !value) throw new TypeError("value parameter must be a name of 'value' field in passed objects");
                                    if (replaceChoices) this.clearChoices();
                                    if (typeof choicesArrayOrFetcher === "function") {
                                        var fetcher_1 = choicesArrayOrFetcher(this);
                                        if (typeof Promise === "function" && fetcher_1 instanceof Promise) return new Promise((function(resolve) {
                                            return requestAnimationFrame(resolve);
                                        })).then((function() {
                                            return _this._handleLoadingState(true);
                                        })).then((function() {
                                            return fetcher_1;
                                        })).then((function(data) {
                                            return _this.setChoices(data, value, label, replaceChoices);
                                        })).catch((function(err) {
                                            if (!_this.config.silent) console.error(err);
                                        })).then((function() {
                                            return _this._handleLoadingState(false);
                                        })).then((function() {
                                            return _this;
                                        }));
                                        if (!Array.isArray(fetcher_1)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof fetcher_1));
                                        return this.setChoices(fetcher_1, value, label, false);
                                    }
                                    if (!Array.isArray(choicesArrayOrFetcher)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
                                    this.containerOuter.removeLoadingState();
                                    this._startLoading();
                                    choicesArrayOrFetcher.forEach((function(groupOrChoice) {
                                        if (groupOrChoice.choices) _this._addGroup({
                                            id: groupOrChoice.id ? parseInt("".concat(groupOrChoice.id), 10) : null,
                                            group: groupOrChoice,
                                            valueKey: value,
                                            labelKey: label
                                        }); else {
                                            var choice = groupOrChoice;
                                            _this._addChoice({
                                                value: choice[value],
                                                label: choice[label],
                                                isSelected: !!choice.selected,
                                                isDisabled: !!choice.disabled,
                                                placeholder: !!choice.placeholder,
                                                customProperties: choice.customProperties
                                            });
                                        }
                                    }));
                                    this._stopLoading();
                                    return this;
                                };
                                Choices.prototype.clearChoices = function() {
                                    this._store.dispatch((0, choices_1.clearChoices)());
                                    return this;
                                };
                                Choices.prototype.clearStore = function() {
                                    this._store.dispatch((0, misc_1.clearAll)());
                                    return this;
                                };
                                Choices.prototype.clearInput = function() {
                                    var shouldSetInputWidth = !this._isSelectOneElement;
                                    this.input.clear(shouldSetInputWidth);
                                    if (!this._isTextElement && this._canSearch) {
                                        this._isSearching = false;
                                        this._store.dispatch((0, choices_1.activateChoices)(true));
                                    }
                                    return this;
                                };
                                Choices.prototype._render = function() {
                                    if (this._store.isLoading()) return;
                                    this._currentState = this._store.state;
                                    var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
                                    var shouldRenderChoices = this._isSelectElement;
                                    var shouldRenderItems = this._currentState.items !== this._prevState.items;
                                    if (!stateChanged) return;
                                    if (shouldRenderChoices) this._renderChoices();
                                    if (shouldRenderItems) this._renderItems();
                                    this._prevState = this._currentState;
                                };
                                Choices.prototype._renderChoices = function() {
                                    var _this = this;
                                    var _a = this._store, activeGroups = _a.activeGroups, activeChoices = _a.activeChoices;
                                    var choiceListFragment = document.createDocumentFragment();
                                    this.choiceList.clear();
                                    if (this.config.resetScrollPosition) requestAnimationFrame((function() {
                                        return _this.choiceList.scrollToTop();
                                    }));
                                    if (activeGroups.length >= 1 && !this._isSearching) {
                                        var activePlaceholders = activeChoices.filter((function(activeChoice) {
                                            return activeChoice.placeholder === true && activeChoice.groupId === -1;
                                        }));
                                        if (activePlaceholders.length >= 1) choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
                                        choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
                                    } else if (activeChoices.length >= 1) choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
                                    if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
                                        var activeItems = this._store.activeItems;
                                        var canAddItem = this._canAddItem(activeItems, this.input.value);
                                        if (canAddItem.response) {
                                            this.choiceList.append(choiceListFragment);
                                            this._highlightChoice();
                                        } else {
                                            var notice = this._getTemplate("notice", canAddItem.notice);
                                            this.choiceList.append(notice);
                                        }
                                    } else {
                                        var dropdownItem = void 0;
                                        notice = void 0;
                                        if (this._isSearching) {
                                            notice = typeof this.config.noResultsText === "function" ? this.config.noResultsText() : this.config.noResultsText;
                                            dropdownItem = this._getTemplate("notice", notice, "no-results");
                                        } else {
                                            notice = typeof this.config.noChoicesText === "function" ? this.config.noChoicesText() : this.config.noChoicesText;
                                            dropdownItem = this._getTemplate("notice", notice, "no-choices");
                                        }
                                        this.choiceList.append(dropdownItem);
                                    }
                                };
                                Choices.prototype._renderItems = function() {
                                    var activeItems = this._store.activeItems || [];
                                    this.itemList.clear();
                                    var itemListFragment = this._createItemsFragment(activeItems);
                                    if (itemListFragment.childNodes) this.itemList.append(itemListFragment);
                                };
                                Choices.prototype._createGroupsFragment = function(groups, choices, fragment) {
                                    var _this = this;
                                    if (fragment === void 0) fragment = document.createDocumentFragment();
                                    var getGroupChoices = function(group) {
                                        return choices.filter((function(choice) {
                                            if (_this._isSelectOneElement) return choice.groupId === group.id;
                                            return choice.groupId === group.id && (_this.config.renderSelectedChoices === "always" || !choice.selected);
                                        }));
                                    };
                                    if (this.config.shouldSort) groups.sort(this.config.sorter);
                                    groups.forEach((function(group) {
                                        var groupChoices = getGroupChoices(group);
                                        if (groupChoices.length >= 1) {
                                            var dropdownGroup = _this._getTemplate("choiceGroup", group);
                                            fragment.appendChild(dropdownGroup);
                                            _this._createChoicesFragment(groupChoices, fragment, true);
                                        }
                                    }));
                                    return fragment;
                                };
                                Choices.prototype._createChoicesFragment = function(choices, fragment, withinGroup) {
                                    var _this = this;
                                    if (fragment === void 0) fragment = document.createDocumentFragment();
                                    if (withinGroup === void 0) withinGroup = false;
                                    var _a = this.config, renderSelectedChoices = _a.renderSelectedChoices, searchResultLimit = _a.searchResultLimit, renderChoiceLimit = _a.renderChoiceLimit;
                                    var filter = this._isSearching ? utils_1.sortByScore : this.config.sorter;
                                    var appendChoice = function(choice) {
                                        var shouldRender = renderSelectedChoices === "auto" ? _this._isSelectOneElement || !choice.selected : true;
                                        if (shouldRender) {
                                            var dropdownItem = _this._getTemplate("choice", choice, _this.config.itemSelectText);
                                            fragment.appendChild(dropdownItem);
                                        }
                                    };
                                    var rendererableChoices = choices;
                                    if (renderSelectedChoices === "auto" && !this._isSelectOneElement) rendererableChoices = choices.filter((function(choice) {
                                        return !choice.selected;
                                    }));
                                    var _b = rendererableChoices.reduce((function(acc, choice) {
                                        if (choice.placeholder) acc.placeholderChoices.push(choice); else acc.normalChoices.push(choice);
                                        return acc;
                                    }), {
                                        placeholderChoices: [],
                                        normalChoices: []
                                    }), placeholderChoices = _b.placeholderChoices, normalChoices = _b.normalChoices;
                                    if (this.config.shouldSort || this._isSearching) normalChoices.sort(filter);
                                    var choiceLimit = rendererableChoices.length;
                                    var sortedChoices = this._isSelectOneElement ? __spreadArray(__spreadArray([], placeholderChoices, true), normalChoices, true) : normalChoices;
                                    if (this._isSearching) choiceLimit = searchResultLimit; else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) choiceLimit = renderChoiceLimit;
                                    for (var i = 0; i < choiceLimit; i += 1) if (sortedChoices[i]) appendChoice(sortedChoices[i]);
                                    return fragment;
                                };
                                Choices.prototype._createItemsFragment = function(items, fragment) {
                                    var _this = this;
                                    if (fragment === void 0) fragment = document.createDocumentFragment();
                                    var _a = this.config, shouldSortItems = _a.shouldSortItems, sorter = _a.sorter, removeItemButton = _a.removeItemButton;
                                    if (shouldSortItems && !this._isSelectOneElement) items.sort(sorter);
                                    if (this._isTextElement) this.passedElement.value = items.map((function(_a) {
                                        var value = _a.value;
                                        return value;
                                    })).join(this.config.delimiter); else this.passedElement.options = items;
                                    var addItemToFragment = function(item) {
                                        var listItem = _this._getTemplate("item", item, removeItemButton);
                                        fragment.appendChild(listItem);
                                    };
                                    items.forEach(addItemToFragment);
                                    return fragment;
                                };
                                Choices.prototype._triggerChange = function(value) {
                                    if (value === void 0 || value === null) return;
                                    this.passedElement.triggerEvent(constants_1.EVENTS.change, {
                                        value
                                    });
                                };
                                Choices.prototype._selectPlaceholderChoice = function(placeholderChoice) {
                                    this._addItem({
                                        value: placeholderChoice.value,
                                        label: placeholderChoice.label,
                                        choiceId: placeholderChoice.id,
                                        groupId: placeholderChoice.groupId,
                                        placeholder: placeholderChoice.placeholder
                                    });
                                    this._triggerChange(placeholderChoice.value);
                                };
                                Choices.prototype._handleButtonAction = function(activeItems, element) {
                                    if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) return;
                                    var itemId = element.parentNode && element.parentNode.dataset.id;
                                    var itemToRemove = itemId && activeItems.find((function(item) {
                                        return item.id === parseInt(itemId, 10);
                                    }));
                                    if (!itemToRemove) return;
                                    this._removeItem(itemToRemove);
                                    this._triggerChange(itemToRemove.value);
                                    if (this._isSelectOneElement && this._store.placeholderChoice) this._selectPlaceholderChoice(this._store.placeholderChoice);
                                };
                                Choices.prototype._handleItemAction = function(activeItems, element, hasShiftKey) {
                                    var _this = this;
                                    if (hasShiftKey === void 0) hasShiftKey = false;
                                    if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) return;
                                    var passedId = element.dataset.id;
                                    activeItems.forEach((function(item) {
                                        if (item.id === parseInt("".concat(passedId), 10) && !item.highlighted) _this.highlightItem(item); else if (!hasShiftKey && item.highlighted) _this.unhighlightItem(item);
                                    }));
                                    this.input.focus();
                                };
                                Choices.prototype._handleChoiceAction = function(activeItems, element) {
                                    if (!activeItems || !element) return;
                                    var id = element.dataset.id;
                                    var choice = id && this._store.getChoiceById(id);
                                    if (!choice) return;
                                    var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : void 0;
                                    var hasActiveDropdown = this.dropdown.isActive;
                                    choice.keyCode = passedKeyCode;
                                    this.passedElement.triggerEvent(constants_1.EVENTS.choice, {
                                        choice
                                    });
                                    if (!choice.selected && !choice.disabled) {
                                        var canAddItem = this._canAddItem(activeItems, choice.value);
                                        if (canAddItem.response) {
                                            this._addItem({
                                                value: choice.value,
                                                label: choice.label,
                                                choiceId: choice.id,
                                                groupId: choice.groupId,
                                                customProperties: choice.customProperties,
                                                placeholder: choice.placeholder,
                                                keyCode: choice.keyCode
                                            });
                                            this._triggerChange(choice.value);
                                        }
                                    }
                                    this.clearInput();
                                    if (hasActiveDropdown && this._isSelectOneElement) {
                                        this.hideDropdown(true);
                                        this.containerOuter.focus();
                                    }
                                };
                                Choices.prototype._handleBackspace = function(activeItems) {
                                    if (!this.config.removeItems || !activeItems) return;
                                    var lastItem = activeItems[activeItems.length - 1];
                                    var hasHighlightedItems = activeItems.some((function(item) {
                                        return item.highlighted;
                                    }));
                                    if (this.config.editItems && !hasHighlightedItems && lastItem) {
                                        this.input.value = lastItem.value;
                                        this.input.setWidth();
                                        this._removeItem(lastItem);
                                        this._triggerChange(lastItem.value);
                                    } else {
                                        if (!hasHighlightedItems) this.highlightItem(lastItem, false);
                                        this.removeHighlightedItems(true);
                                    }
                                };
                                Choices.prototype._startLoading = function() {
                                    this._store.dispatch((0, misc_1.setIsLoading)(true));
                                };
                                Choices.prototype._stopLoading = function() {
                                    this._store.dispatch((0, misc_1.setIsLoading)(false));
                                };
                                Choices.prototype._handleLoadingState = function(setLoading) {
                                    if (setLoading === void 0) setLoading = true;
                                    var placeholderItem = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
                                    if (setLoading) {
                                        this.disable();
                                        this.containerOuter.addLoadingState();
                                        if (this._isSelectOneElement) if (!placeholderItem) {
                                            placeholderItem = this._getTemplate("placeholder", this.config.loadingText);
                                            if (placeholderItem) this.itemList.append(placeholderItem);
                                        } else placeholderItem.innerHTML = this.config.loadingText; else this.input.placeholder = this.config.loadingText;
                                    } else {
                                        this.enable();
                                        this.containerOuter.removeLoadingState();
                                        if (this._isSelectOneElement) {
                                            if (placeholderItem) placeholderItem.innerHTML = this._placeholderValue || "";
                                        } else this.input.placeholder = this._placeholderValue || "";
                                    }
                                };
                                Choices.prototype._handleSearch = function(value) {
                                    if (!this.input.isFocussed) return;
                                    var choices = this._store.choices;
                                    var _a = this.config, searchFloor = _a.searchFloor, searchChoices = _a.searchChoices;
                                    var hasUnactiveChoices = choices.some((function(option) {
                                        return !option.active;
                                    }));
                                    if (value !== null && typeof value !== "undefined" && value.length >= searchFloor) {
                                        var resultCount = searchChoices ? this._searchChoices(value) : 0;
                                        this.passedElement.triggerEvent(constants_1.EVENTS.search, {
                                            value,
                                            resultCount
                                        });
                                    } else if (hasUnactiveChoices) {
                                        this._isSearching = false;
                                        this._store.dispatch((0, choices_1.activateChoices)(true));
                                    }
                                };
                                Choices.prototype._canAddItem = function(activeItems, value) {
                                    var canAddItem = true;
                                    var notice = typeof this.config.addItemText === "function" ? this.config.addItemText(value) : this.config.addItemText;
                                    if (!this._isSelectOneElement) {
                                        var isDuplicateValue = (0, utils_1.existsInArray)(activeItems, value);
                                        if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
                                            canAddItem = false;
                                            notice = typeof this.config.maxItemText === "function" ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
                                        }
                                        if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
                                            canAddItem = false;
                                            notice = typeof this.config.uniqueItemText === "function" ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
                                        }
                                        if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === "function" && !this.config.addItemFilter(value)) {
                                            canAddItem = false;
                                            notice = typeof this.config.customAddItemText === "function" ? this.config.customAddItemText(value) : this.config.customAddItemText;
                                        }
                                    }
                                    return {
                                        response: canAddItem,
                                        notice
                                    };
                                };
                                Choices.prototype._searchChoices = function(value) {
                                    var newValue = typeof value === "string" ? value.trim() : value;
                                    var currentValue = typeof this._currentValue === "string" ? this._currentValue.trim() : this._currentValue;
                                    if (newValue.length < 1 && newValue === "".concat(currentValue, " ")) return 0;
                                    var haystack = this._store.searchableChoices;
                                    var needle = newValue;
                                    var options = Object.assign(this.config.fuseOptions, {
                                        keys: __spreadArray([], this.config.searchFields, true),
                                        includeMatches: true
                                    });
                                    var fuse = new fuse_js_1.default(haystack, options);
                                    var results = fuse.search(needle);
                                    this._currentValue = newValue;
                                    this._highlightPosition = 0;
                                    this._isSearching = true;
                                    this._store.dispatch((0, choices_1.filterChoices)(results));
                                    return results.length;
                                };
                                Choices.prototype._addEventListeners = function() {
                                    var documentElement = document.documentElement;
                                    documentElement.addEventListener("touchend", this._onTouchEnd, true);
                                    this.containerOuter.element.addEventListener("keydown", this._onKeyDown, true);
                                    this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, true);
                                    documentElement.addEventListener("click", this._onClick, {
                                        passive: true
                                    });
                                    documentElement.addEventListener("touchmove", this._onTouchMove, {
                                        passive: true
                                    });
                                    this.dropdown.element.addEventListener("mouseover", this._onMouseOver, {
                                        passive: true
                                    });
                                    if (this._isSelectOneElement) {
                                        this.containerOuter.element.addEventListener("focus", this._onFocus, {
                                            passive: true
                                        });
                                        this.containerOuter.element.addEventListener("blur", this._onBlur, {
                                            passive: true
                                        });
                                    }
                                    this.input.element.addEventListener("keyup", this._onKeyUp, {
                                        passive: true
                                    });
                                    this.input.element.addEventListener("focus", this._onFocus, {
                                        passive: true
                                    });
                                    this.input.element.addEventListener("blur", this._onBlur, {
                                        passive: true
                                    });
                                    if (this.input.element.form) this.input.element.form.addEventListener("reset", this._onFormReset, {
                                        passive: true
                                    });
                                    this.input.addEventListeners();
                                };
                                Choices.prototype._removeEventListeners = function() {
                                    var documentElement = document.documentElement;
                                    documentElement.removeEventListener("touchend", this._onTouchEnd, true);
                                    this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, true);
                                    this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, true);
                                    documentElement.removeEventListener("click", this._onClick);
                                    documentElement.removeEventListener("touchmove", this._onTouchMove);
                                    this.dropdown.element.removeEventListener("mouseover", this._onMouseOver);
                                    if (this._isSelectOneElement) {
                                        this.containerOuter.element.removeEventListener("focus", this._onFocus);
                                        this.containerOuter.element.removeEventListener("blur", this._onBlur);
                                    }
                                    this.input.element.removeEventListener("keyup", this._onKeyUp);
                                    this.input.element.removeEventListener("focus", this._onFocus);
                                    this.input.element.removeEventListener("blur", this._onBlur);
                                    if (this.input.element.form) this.input.element.form.removeEventListener("reset", this._onFormReset);
                                    this.input.removeEventListeners();
                                };
                                Choices.prototype._onKeyDown = function(event) {
                                    var keyCode = event.keyCode;
                                    var activeItems = this._store.activeItems;
                                    var hasFocusedInput = this.input.isFocussed;
                                    var hasActiveDropdown = this.dropdown.isActive;
                                    var hasItems = this.itemList.hasChildren();
                                    var keyString = String.fromCharCode(keyCode);
                                    var wasPrintableChar = /[^\x00-\x1F]/.test(keyString);
                                    var BACK_KEY = constants_1.KEY_CODES.BACK_KEY, DELETE_KEY = constants_1.KEY_CODES.DELETE_KEY, ENTER_KEY = constants_1.KEY_CODES.ENTER_KEY, A_KEY = constants_1.KEY_CODES.A_KEY, ESC_KEY = constants_1.KEY_CODES.ESC_KEY, UP_KEY = constants_1.KEY_CODES.UP_KEY, DOWN_KEY = constants_1.KEY_CODES.DOWN_KEY, PAGE_UP_KEY = constants_1.KEY_CODES.PAGE_UP_KEY, PAGE_DOWN_KEY = constants_1.KEY_CODES.PAGE_DOWN_KEY;
                                    if (!this._isTextElement && !hasActiveDropdown && wasPrintableChar) {
                                        this.showDropdown();
                                        if (!this.input.isFocussed) this.input.value += event.key.toLowerCase();
                                    }
                                    switch (keyCode) {
                                      case A_KEY:
                                        return this._onSelectKey(event, hasItems);

                                      case ENTER_KEY:
                                        return this._onEnterKey(event, activeItems, hasActiveDropdown);

                                      case ESC_KEY:
                                        return this._onEscapeKey(hasActiveDropdown);

                                      case UP_KEY:
                                      case PAGE_UP_KEY:
                                      case DOWN_KEY:
                                      case PAGE_DOWN_KEY:
                                        return this._onDirectionKey(event, hasActiveDropdown);

                                      case DELETE_KEY:
                                      case BACK_KEY:
                                        return this._onDeleteKey(event, activeItems, hasFocusedInput);

                                      default:
                                    }
                                };
                                Choices.prototype._onKeyUp = function(_a) {
                                    var target = _a.target, keyCode = _a.keyCode;
                                    var value = this.input.value;
                                    var activeItems = this._store.activeItems;
                                    var canAddItem = this._canAddItem(activeItems, value);
                                    var backKey = constants_1.KEY_CODES.BACK_KEY, deleteKey = constants_1.KEY_CODES.DELETE_KEY;
                                    if (this._isTextElement) {
                                        var canShowDropdownNotice = canAddItem.notice && value;
                                        if (canShowDropdownNotice) {
                                            var dropdownItem = this._getTemplate("notice", canAddItem.notice);
                                            this.dropdown.element.innerHTML = dropdownItem.outerHTML;
                                            this.showDropdown(true);
                                        } else this.hideDropdown(true);
                                    } else {
                                        var wasRemovalKeyCode = keyCode === backKey || keyCode === deleteKey;
                                        var userHasRemovedValue = wasRemovalKeyCode && target && !target.value;
                                        var canReactivateChoices = !this._isTextElement && this._isSearching;
                                        var canSearch = this._canSearch && canAddItem.response;
                                        if (userHasRemovedValue && canReactivateChoices) {
                                            this._isSearching = false;
                                            this._store.dispatch((0, choices_1.activateChoices)(true));
                                        } else if (canSearch) this._handleSearch(this.input.rawValue);
                                    }
                                    this._canSearch = this.config.searchEnabled;
                                };
                                Choices.prototype._onSelectKey = function(event, hasItems) {
                                    var ctrlKey = event.ctrlKey, metaKey = event.metaKey;
                                    var hasCtrlDownKeyPressed = ctrlKey || metaKey;
                                    if (hasCtrlDownKeyPressed && hasItems) {
                                        this._canSearch = false;
                                        var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;
                                        if (shouldHightlightAll) this.highlightAll();
                                    }
                                };
                                Choices.prototype._onEnterKey = function(event, activeItems, hasActiveDropdown) {
                                    var target = event.target;
                                    var enterKey = constants_1.KEY_CODES.ENTER_KEY;
                                    var targetWasButton = target && target.hasAttribute("data-button");
                                    if (this._isTextElement && target && target.value) {
                                        var value = this.input.value;
                                        var canAddItem = this._canAddItem(activeItems, value);
                                        if (canAddItem.response) {
                                            this.hideDropdown(true);
                                            this._addItem({
                                                value
                                            });
                                            this._triggerChange(value);
                                            this.clearInput();
                                        }
                                    }
                                    if (targetWasButton) {
                                        this._handleButtonAction(activeItems, target);
                                        event.preventDefault();
                                    }
                                    if (hasActiveDropdown) {
                                        var highlightedChoice = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
                                        if (highlightedChoice) {
                                            if (activeItems[0]) activeItems[0].keyCode = enterKey;
                                            this._handleChoiceAction(activeItems, highlightedChoice);
                                        }
                                        event.preventDefault();
                                    } else if (this._isSelectOneElement) {
                                        this.showDropdown();
                                        event.preventDefault();
                                    }
                                };
                                Choices.prototype._onEscapeKey = function(hasActiveDropdown) {
                                    if (hasActiveDropdown) {
                                        this.hideDropdown(true);
                                        this.containerOuter.focus();
                                    }
                                };
                                Choices.prototype._onDirectionKey = function(event, hasActiveDropdown) {
                                    var keyCode = event.keyCode, metaKey = event.metaKey;
                                    var downKey = constants_1.KEY_CODES.DOWN_KEY, pageUpKey = constants_1.KEY_CODES.PAGE_UP_KEY, pageDownKey = constants_1.KEY_CODES.PAGE_DOWN_KEY;
                                    if (hasActiveDropdown || this._isSelectOneElement) {
                                        this.showDropdown();
                                        this._canSearch = false;
                                        var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
                                        var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
                                        var selectableChoiceIdentifier = "[data-choice-selectable]";
                                        var nextEl = void 0;
                                        if (skipKey) if (directionInt > 0) nextEl = this.dropdown.element.querySelector("".concat(selectableChoiceIdentifier, ":last-of-type")); else nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier); else {
                                            var currentEl = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
                                            if (currentEl) nextEl = (0, utils_1.getAdjacentEl)(currentEl, selectableChoiceIdentifier, directionInt); else nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                                        }
                                        if (nextEl) {
                                            if (!(0, utils_1.isScrolledIntoView)(nextEl, this.choiceList.element, directionInt)) this.choiceList.scrollToChildElement(nextEl, directionInt);
                                            this._highlightChoice(nextEl);
                                        }
                                        event.preventDefault();
                                    }
                                };
                                Choices.prototype._onDeleteKey = function(event, activeItems, hasFocusedInput) {
                                    var target = event.target;
                                    if (!this._isSelectOneElement && !target.value && hasFocusedInput) {
                                        this._handleBackspace(activeItems);
                                        event.preventDefault();
                                    }
                                };
                                Choices.prototype._onTouchMove = function() {
                                    if (this._wasTap) this._wasTap = false;
                                };
                                Choices.prototype._onTouchEnd = function(event) {
                                    var target = (event || event.touches[0]).target;
                                    var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);
                                    if (touchWasWithinContainer) {
                                        var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;
                                        if (containerWasExactTarget) if (this._isTextElement) this.input.focus(); else if (this._isSelectMultipleElement) this.showDropdown();
                                        event.stopPropagation();
                                    }
                                    this._wasTap = true;
                                };
                                Choices.prototype._onMouseDown = function(event) {
                                    var target = event.target;
                                    if (!(target instanceof HTMLElement)) return;
                                    if (IS_IE11 && this.choiceList.element.contains(target)) {
                                        var firstChoice = this.choiceList.element.firstElementChild;
                                        var isOnScrollbar = this._direction === "ltr" ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
                                        this._isScrollingOnIe = isOnScrollbar;
                                    }
                                    if (target === this.input.element) return;
                                    var item = target.closest("[data-button],[data-item],[data-choice]");
                                    if (item instanceof HTMLElement) {
                                        var hasShiftKey = event.shiftKey;
                                        var activeItems = this._store.activeItems;
                                        var dataset = item.dataset;
                                        if ("button" in dataset) this._handleButtonAction(activeItems, item); else if ("item" in dataset) this._handleItemAction(activeItems, item, hasShiftKey); else if ("choice" in dataset) this._handleChoiceAction(activeItems, item);
                                    }
                                    event.preventDefault();
                                };
                                Choices.prototype._onMouseOver = function(_a) {
                                    var target = _a.target;
                                    if (target instanceof HTMLElement && "choice" in target.dataset) this._highlightChoice(target);
                                };
                                Choices.prototype._onClick = function(_a) {
                                    var target = _a.target;
                                    var clickWasWithinContainer = this.containerOuter.element.contains(target);
                                    if (clickWasWithinContainer) {
                                        if (!this.dropdown.isActive && !this.containerOuter.isDisabled) if (this._isTextElement) {
                                            if (document.activeElement !== this.input.element) this.input.focus();
                                        } else {
                                            this.showDropdown();
                                            this.containerOuter.focus();
                                        } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) this.hideDropdown();
                                    } else {
                                        var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;
                                        if (hasHighlightedItems) this.unhighlightAll();
                                        this.containerOuter.removeFocusState();
                                        this.hideDropdown(true);
                                    }
                                };
                                Choices.prototype._onFocus = function(_a) {
                                    var _b;
                                    var _this = this;
                                    var target = _a.target;
                                    var focusWasWithinContainer = target && this.containerOuter.element.contains(target);
                                    if (!focusWasWithinContainer) return;
                                    var focusActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function() {
                                        if (target === _this.input.element) _this.containerOuter.addFocusState();
                                    }, _b[constants_1.SELECT_ONE_TYPE] = function() {
                                        _this.containerOuter.addFocusState();
                                        if (target === _this.input.element) _this.showDropdown(true);
                                    }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function() {
                                        if (target === _this.input.element) {
                                            _this.showDropdown(true);
                                            _this.containerOuter.addFocusState();
                                        }
                                    }, _b);
                                    focusActions[this.passedElement.element.type]();
                                };
                                Choices.prototype._onBlur = function(_a) {
                                    var _b;
                                    var _this = this;
                                    var target = _a.target;
                                    var blurWasWithinContainer = target && this.containerOuter.element.contains(target);
                                    if (blurWasWithinContainer && !this._isScrollingOnIe) {
                                        var activeItems = this._store.activeItems;
                                        var hasHighlightedItems_1 = activeItems.some((function(item) {
                                            return item.highlighted;
                                        }));
                                        var blurActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function() {
                                            if (target === _this.input.element) {
                                                _this.containerOuter.removeFocusState();
                                                if (hasHighlightedItems_1) _this.unhighlightAll();
                                                _this.hideDropdown(true);
                                            }
                                        }, _b[constants_1.SELECT_ONE_TYPE] = function() {
                                            _this.containerOuter.removeFocusState();
                                            if (target === _this.input.element || target === _this.containerOuter.element && !_this._canSearch) _this.hideDropdown(true);
                                        }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function() {
                                            if (target === _this.input.element) {
                                                _this.containerOuter.removeFocusState();
                                                _this.hideDropdown(true);
                                                if (hasHighlightedItems_1) _this.unhighlightAll();
                                            }
                                        }, _b);
                                        blurActions[this.passedElement.element.type]();
                                    } else {
                                        this._isScrollingOnIe = false;
                                        this.input.element.focus();
                                    }
                                };
                                Choices.prototype._onFormReset = function() {
                                    this._store.dispatch((0, misc_1.resetTo)(this._initialState));
                                };
                                Choices.prototype._highlightChoice = function(el) {
                                    var _this = this;
                                    if (el === void 0) el = null;
                                    var choices = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));
                                    if (!choices.length) return;
                                    var passedEl = el;
                                    var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState)));
                                    highlightedChoices.forEach((function(choice) {
                                        choice.classList.remove(_this.config.classNames.highlightedState);
                                        choice.setAttribute("aria-selected", "false");
                                    }));
                                    if (passedEl) this._highlightPosition = choices.indexOf(passedEl); else {
                                        if (choices.length > this._highlightPosition) passedEl = choices[this._highlightPosition]; else passedEl = choices[choices.length - 1];
                                        if (!passedEl) passedEl = choices[0];
                                    }
                                    passedEl.classList.add(this.config.classNames.highlightedState);
                                    passedEl.setAttribute("aria-selected", "true");
                                    this.passedElement.triggerEvent(constants_1.EVENTS.highlightChoice, {
                                        el: passedEl
                                    });
                                    if (this.dropdown.isActive) {
                                        this.input.setActiveDescendant(passedEl.id);
                                        this.containerOuter.setActiveDescendant(passedEl.id);
                                    }
                                };
                                Choices.prototype._addItem = function(_a) {
                                    var value = _a.value, _b = _a.label, label = _b === void 0 ? null : _b, _c = _a.choiceId, choiceId = _c === void 0 ? -1 : _c, _d = _a.groupId, groupId = _d === void 0 ? -1 : _d, _e = _a.customProperties, customProperties = _e === void 0 ? {} : _e, _f = _a.placeholder, placeholder = _f === void 0 ? false : _f, _g = _a.keyCode, keyCode = _g === void 0 ? -1 : _g;
                                    var passedValue = typeof value === "string" ? value.trim() : value;
                                    var items = this._store.items;
                                    var passedLabel = label || passedValue;
                                    var passedOptionId = choiceId || -1;
                                    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                                    var id = items ? items.length + 1 : 1;
                                    if (this.config.prependValue) passedValue = this.config.prependValue + passedValue.toString();
                                    if (this.config.appendValue) passedValue += this.config.appendValue.toString();
                                    this._store.dispatch((0, items_1.addItem)({
                                        value: passedValue,
                                        label: passedLabel,
                                        id,
                                        choiceId: passedOptionId,
                                        groupId,
                                        customProperties,
                                        placeholder,
                                        keyCode
                                    }));
                                    if (this._isSelectOneElement) this.removeActiveItems(id);
                                    this.passedElement.triggerEvent(constants_1.EVENTS.addItem, {
                                        id,
                                        value: passedValue,
                                        label: passedLabel,
                                        customProperties,
                                        groupValue: group && group.value ? group.value : null,
                                        keyCode
                                    });
                                };
                                Choices.prototype._removeItem = function(item) {
                                    var id = item.id, value = item.value, label = item.label, customProperties = item.customProperties, choiceId = item.choiceId, groupId = item.groupId;
                                    var group = groupId && groupId >= 0 ? this._store.getGroupById(groupId) : null;
                                    if (!id || !choiceId) return;
                                    this._store.dispatch((0, items_1.removeItem)(id, choiceId));
                                    this.passedElement.triggerEvent(constants_1.EVENTS.removeItem, {
                                        id,
                                        value,
                                        label,
                                        customProperties,
                                        groupValue: group && group.value ? group.value : null
                                    });
                                };
                                Choices.prototype._addChoice = function(_a) {
                                    var value = _a.value, _b = _a.label, label = _b === void 0 ? null : _b, _c = _a.isSelected, isSelected = _c === void 0 ? false : _c, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d, _e = _a.groupId, groupId = _e === void 0 ? -1 : _e, _f = _a.customProperties, customProperties = _f === void 0 ? {} : _f, _g = _a.placeholder, placeholder = _g === void 0 ? false : _g, _h = _a.keyCode, keyCode = _h === void 0 ? -1 : _h;
                                    if (typeof value === "undefined" || value === null) return;
                                    var choices = this._store.choices;
                                    var choiceLabel = label || value;
                                    var choiceId = choices ? choices.length + 1 : 1;
                                    var choiceElementId = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(choiceId);
                                    this._store.dispatch((0, choices_1.addChoice)({
                                        id: choiceId,
                                        groupId,
                                        elementId: choiceElementId,
                                        value,
                                        label: choiceLabel,
                                        disabled: isDisabled,
                                        customProperties,
                                        placeholder,
                                        keyCode
                                    }));
                                    if (isSelected) this._addItem({
                                        value,
                                        label: choiceLabel,
                                        choiceId,
                                        customProperties,
                                        placeholder,
                                        keyCode
                                    });
                                };
                                Choices.prototype._addGroup = function(_a) {
                                    var _this = this;
                                    var group = _a.group, id = _a.id, _b = _a.valueKey, valueKey = _b === void 0 ? "value" : _b, _c = _a.labelKey, labelKey = _c === void 0 ? "label" : _c;
                                    var groupChoices = (0, utils_1.isType)("Object", group) ? group.choices : Array.from(group.getElementsByTagName("OPTION"));
                                    var groupId = id || Math.floor((new Date).valueOf() * Math.random());
                                    var isDisabled = group.disabled ? group.disabled : false;
                                    if (groupChoices) {
                                        this._store.dispatch((0, groups_1.addGroup)({
                                            value: group.label,
                                            id: groupId,
                                            active: true,
                                            disabled: isDisabled
                                        }));
                                        var addGroupChoices = function(choice) {
                                            var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;
                                            _this._addChoice({
                                                value: choice[valueKey],
                                                label: (0, utils_1.isType)("Object", choice) ? choice[labelKey] : choice.innerHTML,
                                                isSelected: choice.selected,
                                                isDisabled: isOptDisabled,
                                                groupId,
                                                customProperties: choice.customProperties,
                                                placeholder: choice.placeholder
                                            });
                                        };
                                        groupChoices.forEach(addGroupChoices);
                                    } else this._store.dispatch((0, groups_1.addGroup)({
                                        value: group.label,
                                        id: group.id,
                                        active: false,
                                        disabled: group.disabled
                                    }));
                                };
                                Choices.prototype._getTemplate = function(template) {
                                    var _a;
                                    var args = [];
                                    for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
                                    return (_a = this._templates[template]).call.apply(_a, __spreadArray([ this, this.config ], args, false));
                                };
                                Choices.prototype._createTemplates = function() {
                                    var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
                                    var userTemplates = {};
                                    if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === "function") userTemplates = callbackOnCreateTemplates.call(this, utils_1.strToEl);
                                    this._templates = (0, deepmerge_1.default)(templates_1.default, userTemplates);
                                };
                                Choices.prototype._createElements = function() {
                                    this.containerOuter = new components_1.Container({
                                        element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
                                        classNames: this.config.classNames,
                                        type: this.passedElement.element.type,
                                        position: this.config.position
                                    });
                                    this.containerInner = new components_1.Container({
                                        element: this._getTemplate("containerInner"),
                                        classNames: this.config.classNames,
                                        type: this.passedElement.element.type,
                                        position: this.config.position
                                    });
                                    this.input = new components_1.Input({
                                        element: this._getTemplate("input", this._placeholderValue),
                                        classNames: this.config.classNames,
                                        type: this.passedElement.element.type,
                                        preventPaste: !this.config.paste
                                    });
                                    this.choiceList = new components_1.List({
                                        element: this._getTemplate("choiceList", this._isSelectOneElement)
                                    });
                                    this.itemList = new components_1.List({
                                        element: this._getTemplate("itemList", this._isSelectOneElement)
                                    });
                                    this.dropdown = new components_1.Dropdown({
                                        element: this._getTemplate("dropdown"),
                                        classNames: this.config.classNames,
                                        type: this.passedElement.element.type
                                    });
                                };
                                Choices.prototype._createStructure = function() {
                                    this.passedElement.conceal();
                                    this.containerInner.wrap(this.passedElement.element);
                                    this.containerOuter.wrap(this.containerInner.element);
                                    if (this._isSelectOneElement) this.input.placeholder = this.config.searchPlaceholderValue || ""; else if (this._placeholderValue) {
                                        this.input.placeholder = this._placeholderValue;
                                        this.input.setWidth();
                                    }
                                    this.containerOuter.element.appendChild(this.containerInner.element);
                                    this.containerOuter.element.appendChild(this.dropdown.element);
                                    this.containerInner.element.appendChild(this.itemList.element);
                                    if (!this._isTextElement) this.dropdown.element.appendChild(this.choiceList.element);
                                    if (!this._isSelectOneElement) this.containerInner.element.appendChild(this.input.element); else if (this.config.searchEnabled) this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
                                    if (this._isSelectElement) {
                                        this._highlightPosition = 0;
                                        this._isSearching = false;
                                        this._startLoading();
                                        if (this._presetGroups.length) this._addPredefinedGroups(this._presetGroups); else this._addPredefinedChoices(this._presetChoices);
                                        this._stopLoading();
                                    }
                                    if (this._isTextElement) this._addPredefinedItems(this._presetItems);
                                };
                                Choices.prototype._addPredefinedGroups = function(groups) {
                                    var _this = this;
                                    var placeholderChoice = this.passedElement.placeholderOption;
                                    if (placeholderChoice && placeholderChoice.parentNode && placeholderChoice.parentNode.tagName === "SELECT") this._addChoice({
                                        value: placeholderChoice.value,
                                        label: placeholderChoice.innerHTML,
                                        isSelected: placeholderChoice.selected,
                                        isDisabled: placeholderChoice.disabled,
                                        placeholder: true
                                    });
                                    groups.forEach((function(group) {
                                        return _this._addGroup({
                                            group,
                                            id: group.id || null
                                        });
                                    }));
                                };
                                Choices.prototype._addPredefinedChoices = function(choices) {
                                    var _this = this;
                                    if (this.config.shouldSort) choices.sort(this.config.sorter);
                                    var hasSelectedChoice = choices.some((function(choice) {
                                        return choice.selected;
                                    }));
                                    var firstEnabledChoiceIndex = choices.findIndex((function(choice) {
                                        return choice.disabled === void 0 || !choice.disabled;
                                    }));
                                    choices.forEach((function(choice, index) {
                                        var _a = choice.value, value = _a === void 0 ? "" : _a, label = choice.label, customProperties = choice.customProperties, placeholder = choice.placeholder;
                                        if (_this._isSelectElement) if (choice.choices) _this._addGroup({
                                            group: choice,
                                            id: choice.id || null
                                        }); else {
                                            var shouldPreselect = _this._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
                                            var isSelected = shouldPreselect ? true : choice.selected;
                                            var isDisabled = choice.disabled;
                                            _this._addChoice({
                                                value,
                                                label,
                                                isSelected: !!isSelected,
                                                isDisabled: !!isDisabled,
                                                placeholder: !!placeholder,
                                                customProperties
                                            });
                                        } else _this._addChoice({
                                            value,
                                            label,
                                            isSelected: !!choice.selected,
                                            isDisabled: !!choice.disabled,
                                            placeholder: !!choice.placeholder,
                                            customProperties
                                        });
                                    }));
                                };
                                Choices.prototype._addPredefinedItems = function(items) {
                                    var _this = this;
                                    items.forEach((function(item) {
                                        if (typeof item === "object" && item.value) _this._addItem({
                                            value: item.value,
                                            label: item.label,
                                            choiceId: item.id,
                                            customProperties: item.customProperties,
                                            placeholder: item.placeholder
                                        });
                                        if (typeof item === "string") _this._addItem({
                                            value: item
                                        });
                                    }));
                                };
                                Choices.prototype._setChoiceOrItem = function(item) {
                                    var _this = this;
                                    var itemType = (0, utils_1.getType)(item).toLowerCase();
                                    var handleType = {
                                        object: function() {
                                            if (!item.value) return;
                                            if (!_this._isTextElement) _this._addChoice({
                                                value: item.value,
                                                label: item.label,
                                                isSelected: true,
                                                isDisabled: false,
                                                customProperties: item.customProperties,
                                                placeholder: item.placeholder
                                            }); else _this._addItem({
                                                value: item.value,
                                                label: item.label,
                                                choiceId: item.id,
                                                customProperties: item.customProperties,
                                                placeholder: item.placeholder
                                            });
                                        },
                                        string: function() {
                                            if (!_this._isTextElement) _this._addChoice({
                                                value: item,
                                                label: item,
                                                isSelected: true,
                                                isDisabled: false
                                            }); else _this._addItem({
                                                value: item
                                            });
                                        }
                                    };
                                    handleType[itemType]();
                                };
                                Choices.prototype._findAndSelectChoiceByValue = function(value) {
                                    var _this = this;
                                    var choices = this._store.choices;
                                    var foundChoice = choices.find((function(choice) {
                                        return _this.config.valueComparer(choice.value, value);
                                    }));
                                    if (foundChoice && !foundChoice.selected) this._addItem({
                                        value: foundChoice.value,
                                        label: foundChoice.label,
                                        choiceId: foundChoice.id,
                                        groupId: foundChoice.groupId,
                                        customProperties: foundChoice.customProperties,
                                        placeholder: foundChoice.placeholder,
                                        keyCode: foundChoice.keyCode
                                    });
                                };
                                Choices.prototype._generatePlaceholderValue = function() {
                                    if (this._isSelectElement && this.passedElement.placeholderOption) {
                                        var placeholderOption = this.passedElement.placeholderOption;
                                        return placeholderOption ? placeholderOption.text : null;
                                    }
                                    var _a = this.config, placeholder = _a.placeholder, placeholderValue = _a.placeholderValue;
                                    var dataset = this.passedElement.element.dataset;
                                    if (placeholder) {
                                        if (placeholderValue) return placeholderValue;
                                        if (dataset.placeholder) return dataset.placeholder;
                                    }
                                    return null;
                                };
                                return Choices;
                            }();
                            exports["default"] = Choices;
                        },
                        613: function(__unused_webpack_module, exports, __nested_webpack_require_74916__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var utils_1 = __nested_webpack_require_74916__(799);
                            var constants_1 = __nested_webpack_require_74916__(883);
                            var Container = function() {
                                function Container(_a) {
                                    var element = _a.element, type = _a.type, classNames = _a.classNames, position = _a.position;
                                    this.element = element;
                                    this.classNames = classNames;
                                    this.type = type;
                                    this.position = position;
                                    this.isOpen = false;
                                    this.isFlipped = false;
                                    this.isFocussed = false;
                                    this.isDisabled = false;
                                    this.isLoading = false;
                                    this._onFocus = this._onFocus.bind(this);
                                    this._onBlur = this._onBlur.bind(this);
                                }
                                Container.prototype.addEventListeners = function() {
                                    this.element.addEventListener("focus", this._onFocus);
                                    this.element.addEventListener("blur", this._onBlur);
                                };
                                Container.prototype.removeEventListeners = function() {
                                    this.element.removeEventListener("focus", this._onFocus);
                                    this.element.removeEventListener("blur", this._onBlur);
                                };
                                Container.prototype.shouldFlip = function(dropdownPos) {
                                    if (typeof dropdownPos !== "number") return false;
                                    var shouldFlip = false;
                                    if (this.position === "auto") shouldFlip = !window.matchMedia("(min-height: ".concat(dropdownPos + 1, "px)")).matches; else if (this.position === "top") shouldFlip = true;
                                    return shouldFlip;
                                };
                                Container.prototype.setActiveDescendant = function(activeDescendantID) {
                                    this.element.setAttribute("aria-activedescendant", activeDescendantID);
                                };
                                Container.prototype.removeActiveDescendant = function() {
                                    this.element.removeAttribute("aria-activedescendant");
                                };
                                Container.prototype.open = function(dropdownPos) {
                                    this.element.classList.add(this.classNames.openState);
                                    this.element.setAttribute("aria-expanded", "true");
                                    this.isOpen = true;
                                    if (this.shouldFlip(dropdownPos)) {
                                        this.element.classList.add(this.classNames.flippedState);
                                        this.isFlipped = true;
                                    }
                                };
                                Container.prototype.close = function() {
                                    this.element.classList.remove(this.classNames.openState);
                                    this.element.setAttribute("aria-expanded", "false");
                                    this.removeActiveDescendant();
                                    this.isOpen = false;
                                    if (this.isFlipped) {
                                        this.element.classList.remove(this.classNames.flippedState);
                                        this.isFlipped = false;
                                    }
                                };
                                Container.prototype.focus = function() {
                                    if (!this.isFocussed) this.element.focus();
                                };
                                Container.prototype.addFocusState = function() {
                                    this.element.classList.add(this.classNames.focusState);
                                };
                                Container.prototype.removeFocusState = function() {
                                    this.element.classList.remove(this.classNames.focusState);
                                };
                                Container.prototype.enable = function() {
                                    this.element.classList.remove(this.classNames.disabledState);
                                    this.element.removeAttribute("aria-disabled");
                                    if (this.type === constants_1.SELECT_ONE_TYPE) this.element.setAttribute("tabindex", "0");
                                    this.isDisabled = false;
                                };
                                Container.prototype.disable = function() {
                                    this.element.classList.add(this.classNames.disabledState);
                                    this.element.setAttribute("aria-disabled", "true");
                                    if (this.type === constants_1.SELECT_ONE_TYPE) this.element.setAttribute("tabindex", "-1");
                                    this.isDisabled = true;
                                };
                                Container.prototype.wrap = function(element) {
                                    (0, utils_1.wrap)(element, this.element);
                                };
                                Container.prototype.unwrap = function(element) {
                                    if (this.element.parentNode) {
                                        this.element.parentNode.insertBefore(element, this.element);
                                        this.element.parentNode.removeChild(this.element);
                                    }
                                };
                                Container.prototype.addLoadingState = function() {
                                    this.element.classList.add(this.classNames.loadingState);
                                    this.element.setAttribute("aria-busy", "true");
                                    this.isLoading = true;
                                };
                                Container.prototype.removeLoadingState = function() {
                                    this.element.classList.remove(this.classNames.loadingState);
                                    this.element.removeAttribute("aria-busy");
                                    this.isLoading = false;
                                };
                                Container.prototype._onFocus = function() {
                                    this.isFocussed = true;
                                };
                                Container.prototype._onBlur = function() {
                                    this.isFocussed = false;
                                };
                                return Container;
                            }();
                            exports["default"] = Container;
                        },
                        217: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var Dropdown = function() {
                                function Dropdown(_a) {
                                    var element = _a.element, type = _a.type, classNames = _a.classNames;
                                    this.element = element;
                                    this.classNames = classNames;
                                    this.type = type;
                                    this.isActive = false;
                                }
                                Object.defineProperty(Dropdown.prototype, "distanceFromTopWindow", {
                                    get: function() {
                                        return this.element.getBoundingClientRect().bottom;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Dropdown.prototype.getChild = function(selector) {
                                    return this.element.querySelector(selector);
                                };
                                Dropdown.prototype.show = function() {
                                    this.element.classList.add(this.classNames.activeState);
                                    this.element.setAttribute("aria-expanded", "true");
                                    this.isActive = true;
                                    return this;
                                };
                                Dropdown.prototype.hide = function() {
                                    this.element.classList.remove(this.classNames.activeState);
                                    this.element.setAttribute("aria-expanded", "false");
                                    this.isActive = false;
                                    return this;
                                };
                                return Dropdown;
                            }();
                            exports["default"] = Dropdown;
                        },
                        520: function(__unused_webpack_module, exports, __nested_webpack_require_81090__) {
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.WrappedSelect = exports.WrappedInput = exports.List = exports.Input = exports.Container = exports.Dropdown = void 0;
                            var dropdown_1 = __importDefault(__nested_webpack_require_81090__(217));
                            exports.Dropdown = dropdown_1.default;
                            var container_1 = __importDefault(__nested_webpack_require_81090__(613));
                            exports.Container = container_1.default;
                            var input_1 = __importDefault(__nested_webpack_require_81090__(11));
                            exports.Input = input_1.default;
                            var list_1 = __importDefault(__nested_webpack_require_81090__(624));
                            exports.List = list_1.default;
                            var wrapped_input_1 = __importDefault(__nested_webpack_require_81090__(541));
                            exports.WrappedInput = wrapped_input_1.default;
                            var wrapped_select_1 = __importDefault(__nested_webpack_require_81090__(982));
                            exports.WrappedSelect = wrapped_select_1.default;
                        },
                        11: function(__unused_webpack_module, exports, __nested_webpack_require_82125__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var utils_1 = __nested_webpack_require_82125__(799);
                            var constants_1 = __nested_webpack_require_82125__(883);
                            var Input = function() {
                                function Input(_a) {
                                    var element = _a.element, type = _a.type, classNames = _a.classNames, preventPaste = _a.preventPaste;
                                    this.element = element;
                                    this.type = type;
                                    this.classNames = classNames;
                                    this.preventPaste = preventPaste;
                                    this.isFocussed = this.element.isEqualNode(document.activeElement);
                                    this.isDisabled = element.disabled;
                                    this._onPaste = this._onPaste.bind(this);
                                    this._onInput = this._onInput.bind(this);
                                    this._onFocus = this._onFocus.bind(this);
                                    this._onBlur = this._onBlur.bind(this);
                                }
                                Object.defineProperty(Input.prototype, "placeholder", {
                                    set: function(placeholder) {
                                        this.element.placeholder = placeholder;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Input.prototype, "value", {
                                    get: function() {
                                        return (0, utils_1.sanitise)(this.element.value);
                                    },
                                    set: function(value) {
                                        this.element.value = value;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Input.prototype, "rawValue", {
                                    get: function() {
                                        return this.element.value;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Input.prototype.addEventListeners = function() {
                                    this.element.addEventListener("paste", this._onPaste);
                                    this.element.addEventListener("input", this._onInput, {
                                        passive: true
                                    });
                                    this.element.addEventListener("focus", this._onFocus, {
                                        passive: true
                                    });
                                    this.element.addEventListener("blur", this._onBlur, {
                                        passive: true
                                    });
                                };
                                Input.prototype.removeEventListeners = function() {
                                    this.element.removeEventListener("input", this._onInput);
                                    this.element.removeEventListener("paste", this._onPaste);
                                    this.element.removeEventListener("focus", this._onFocus);
                                    this.element.removeEventListener("blur", this._onBlur);
                                };
                                Input.prototype.enable = function() {
                                    this.element.removeAttribute("disabled");
                                    this.isDisabled = false;
                                };
                                Input.prototype.disable = function() {
                                    this.element.setAttribute("disabled", "");
                                    this.isDisabled = true;
                                };
                                Input.prototype.focus = function() {
                                    if (!this.isFocussed) this.element.focus();
                                };
                                Input.prototype.blur = function() {
                                    if (this.isFocussed) this.element.blur();
                                };
                                Input.prototype.clear = function(setWidth) {
                                    if (setWidth === void 0) setWidth = true;
                                    if (this.element.value) this.element.value = "";
                                    if (setWidth) this.setWidth();
                                    return this;
                                };
                                Input.prototype.setWidth = function() {
                                    var _a = this.element, style = _a.style, value = _a.value, placeholder = _a.placeholder;
                                    style.minWidth = "".concat(placeholder.length + 1, "ch");
                                    style.width = "".concat(value.length + 1, "ch");
                                };
                                Input.prototype.setActiveDescendant = function(activeDescendantID) {
                                    this.element.setAttribute("aria-activedescendant", activeDescendantID);
                                };
                                Input.prototype.removeActiveDescendant = function() {
                                    this.element.removeAttribute("aria-activedescendant");
                                };
                                Input.prototype._onInput = function() {
                                    if (this.type !== constants_1.SELECT_ONE_TYPE) this.setWidth();
                                };
                                Input.prototype._onPaste = function(event) {
                                    if (this.preventPaste) event.preventDefault();
                                };
                                Input.prototype._onFocus = function() {
                                    this.isFocussed = true;
                                };
                                Input.prototype._onBlur = function() {
                                    this.isFocussed = false;
                                };
                                return Input;
                            }();
                            exports["default"] = Input;
                        },
                        624: function(__unused_webpack_module, exports, __nested_webpack_require_86127__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var constants_1 = __nested_webpack_require_86127__(883);
                            var List = function() {
                                function List(_a) {
                                    var element = _a.element;
                                    this.element = element;
                                    this.scrollPos = this.element.scrollTop;
                                    this.height = this.element.offsetHeight;
                                }
                                List.prototype.clear = function() {
                                    this.element.innerHTML = "";
                                };
                                List.prototype.append = function(node) {
                                    this.element.appendChild(node);
                                };
                                List.prototype.getChild = function(selector) {
                                    return this.element.querySelector(selector);
                                };
                                List.prototype.hasChildren = function() {
                                    return this.element.hasChildNodes();
                                };
                                List.prototype.scrollToTop = function() {
                                    this.element.scrollTop = 0;
                                };
                                List.prototype.scrollToChildElement = function(element, direction) {
                                    var _this = this;
                                    if (!element) return;
                                    var listHeight = this.element.offsetHeight;
                                    var listScrollPosition = this.element.scrollTop + listHeight;
                                    var elementHeight = element.offsetHeight;
                                    var elementPos = element.offsetTop + elementHeight;
                                    var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
                                    requestAnimationFrame((function() {
                                        _this._animateScroll(destination, direction);
                                    }));
                                };
                                List.prototype._scrollDown = function(scrollPos, strength, destination) {
                                    var easing = (destination - scrollPos) / strength;
                                    var distance = easing > 1 ? easing : 1;
                                    this.element.scrollTop = scrollPos + distance;
                                };
                                List.prototype._scrollUp = function(scrollPos, strength, destination) {
                                    var easing = (scrollPos - destination) / strength;
                                    var distance = easing > 1 ? easing : 1;
                                    this.element.scrollTop = scrollPos - distance;
                                };
                                List.prototype._animateScroll = function(destination, direction) {
                                    var _this = this;
                                    var strength = constants_1.SCROLLING_SPEED;
                                    var choiceListScrollTop = this.element.scrollTop;
                                    var continueAnimation = false;
                                    if (direction > 0) {
                                        this._scrollDown(choiceListScrollTop, strength, destination);
                                        if (choiceListScrollTop < destination) continueAnimation = true;
                                    } else {
                                        this._scrollUp(choiceListScrollTop, strength, destination);
                                        if (choiceListScrollTop > destination) continueAnimation = true;
                                    }
                                    if (continueAnimation) requestAnimationFrame((function() {
                                        _this._animateScroll(destination, direction);
                                    }));
                                };
                                return List;
                            }();
                            exports["default"] = List;
                        },
                        730: function(__unused_webpack_module, exports, __nested_webpack_require_88948__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var utils_1 = __nested_webpack_require_88948__(799);
                            var WrappedElement = function() {
                                function WrappedElement(_a) {
                                    var element = _a.element, classNames = _a.classNames;
                                    this.element = element;
                                    this.classNames = classNames;
                                    if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) throw new TypeError("Invalid element passed");
                                    this.isDisabled = false;
                                }
                                Object.defineProperty(WrappedElement.prototype, "isActive", {
                                    get: function() {
                                        return this.element.dataset.choice === "active";
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(WrappedElement.prototype, "dir", {
                                    get: function() {
                                        return this.element.dir;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(WrappedElement.prototype, "value", {
                                    get: function() {
                                        return this.element.value;
                                    },
                                    set: function(value) {
                                        this.element.value = value;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                WrappedElement.prototype.conceal = function() {
                                    this.element.classList.add(this.classNames.input);
                                    this.element.hidden = true;
                                    this.element.tabIndex = -1;
                                    var origStyle = this.element.getAttribute("style");
                                    if (origStyle) this.element.setAttribute("data-choice-orig-style", origStyle);
                                    this.element.setAttribute("data-choice", "active");
                                };
                                WrappedElement.prototype.reveal = function() {
                                    this.element.classList.remove(this.classNames.input);
                                    this.element.hidden = false;
                                    this.element.removeAttribute("tabindex");
                                    var origStyle = this.element.getAttribute("data-choice-orig-style");
                                    if (origStyle) {
                                        this.element.removeAttribute("data-choice-orig-style");
                                        this.element.setAttribute("style", origStyle);
                                    } else this.element.removeAttribute("style");
                                    this.element.removeAttribute("data-choice");
                                    this.element.value = this.element.value;
                                };
                                WrappedElement.prototype.enable = function() {
                                    this.element.removeAttribute("disabled");
                                    this.element.disabled = false;
                                    this.isDisabled = false;
                                };
                                WrappedElement.prototype.disable = function() {
                                    this.element.setAttribute("disabled", "");
                                    this.element.disabled = true;
                                    this.isDisabled = true;
                                };
                                WrappedElement.prototype.triggerEvent = function(eventType, data) {
                                    (0, utils_1.dispatchEvent)(this.element, eventType, data);
                                };
                                return WrappedElement;
                            }();
                            exports["default"] = WrappedElement;
                        },
                        541: function(__unused_webpack_module, exports, __nested_webpack_require_92021__) {
                            var __extends = this && this.__extends || function() {
                                var extendStatics = function(d, b) {
                                    extendStatics = Object.setPrototypeOf || {
                                        __proto__: []
                                    } instanceof Array && function(d, b) {
                                        d.__proto__ = b;
                                    } || function(d, b) {
                                        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                                    };
                                    return extendStatics(d, b);
                                };
                                return function(d, b) {
                                    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                                    extendStatics(d, b);
                                    function __() {
                                        this.constructor = d;
                                    }
                                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
                                };
                            }();
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var wrapped_element_1 = __importDefault(__nested_webpack_require_92021__(730));
                            var WrappedInput = function(_super) {
                                __extends(WrappedInput, _super);
                                function WrappedInput(_a) {
                                    var element = _a.element, classNames = _a.classNames, delimiter = _a.delimiter;
                                    var _this = _super.call(this, {
                                        element,
                                        classNames
                                    }) || this;
                                    _this.delimiter = delimiter;
                                    return _this;
                                }
                                Object.defineProperty(WrappedInput.prototype, "value", {
                                    get: function() {
                                        return this.element.value;
                                    },
                                    set: function(value) {
                                        this.element.setAttribute("value", value);
                                        this.element.value = value;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                return WrappedInput;
                            }(wrapped_element_1.default);
                            exports["default"] = WrappedInput;
                        },
                        982: function(__unused_webpack_module, exports, __nested_webpack_require_93875__) {
                            var __extends = this && this.__extends || function() {
                                var extendStatics = function(d, b) {
                                    extendStatics = Object.setPrototypeOf || {
                                        __proto__: []
                                    } instanceof Array && function(d, b) {
                                        d.__proto__ = b;
                                    } || function(d, b) {
                                        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                                    };
                                    return extendStatics(d, b);
                                };
                                return function(d, b) {
                                    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                                    extendStatics(d, b);
                                    function __() {
                                        this.constructor = d;
                                    }
                                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __);
                                };
                            }();
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var wrapped_element_1 = __importDefault(__nested_webpack_require_93875__(730));
                            var WrappedSelect = function(_super) {
                                __extends(WrappedSelect, _super);
                                function WrappedSelect(_a) {
                                    var element = _a.element, classNames = _a.classNames, template = _a.template;
                                    var _this = _super.call(this, {
                                        element,
                                        classNames
                                    }) || this;
                                    _this.template = template;
                                    return _this;
                                }
                                Object.defineProperty(WrappedSelect.prototype, "placeholderOption", {
                                    get: function() {
                                        return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]");
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(WrappedSelect.prototype, "optionGroups", {
                                    get: function() {
                                        return Array.from(this.element.getElementsByTagName("OPTGROUP"));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(WrappedSelect.prototype, "options", {
                                    get: function() {
                                        return Array.from(this.element.options);
                                    },
                                    set: function(options) {
                                        var _this = this;
                                        var fragment = document.createDocumentFragment();
                                        var addOptionToFragment = function(data) {
                                            var option = _this.template(data);
                                            fragment.appendChild(option);
                                        };
                                        options.forEach((function(optionData) {
                                            return addOptionToFragment(optionData);
                                        }));
                                        this.appendDocFragment(fragment);
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                WrappedSelect.prototype.appendDocFragment = function(fragment) {
                                    this.element.innerHTML = "";
                                    this.element.appendChild(fragment);
                                };
                                return WrappedSelect;
                            }(wrapped_element_1.default);
                            exports["default"] = WrappedSelect;
                        },
                        883: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.SCROLLING_SPEED = exports.SELECT_MULTIPLE_TYPE = exports.SELECT_ONE_TYPE = exports.TEXT_TYPE = exports.KEY_CODES = exports.ACTION_TYPES = exports.EVENTS = void 0;
                            exports.EVENTS = {
                                showDropdown: "showDropdown",
                                hideDropdown: "hideDropdown",
                                change: "change",
                                choice: "choice",
                                search: "search",
                                addItem: "addItem",
                                removeItem: "removeItem",
                                highlightItem: "highlightItem",
                                highlightChoice: "highlightChoice",
                                unhighlightItem: "unhighlightItem"
                            };
                            exports.ACTION_TYPES = {
                                ADD_CHOICE: "ADD_CHOICE",
                                FILTER_CHOICES: "FILTER_CHOICES",
                                ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
                                CLEAR_CHOICES: "CLEAR_CHOICES",
                                ADD_GROUP: "ADD_GROUP",
                                ADD_ITEM: "ADD_ITEM",
                                REMOVE_ITEM: "REMOVE_ITEM",
                                HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM",
                                CLEAR_ALL: "CLEAR_ALL",
                                RESET_TO: "RESET_TO",
                                SET_IS_LOADING: "SET_IS_LOADING"
                            };
                            exports.KEY_CODES = {
                                BACK_KEY: 46,
                                DELETE_KEY: 8,
                                ENTER_KEY: 13,
                                A_KEY: 65,
                                ESC_KEY: 27,
                                UP_KEY: 38,
                                DOWN_KEY: 40,
                                PAGE_UP_KEY: 33,
                                PAGE_DOWN_KEY: 34
                            };
                            exports.TEXT_TYPE = "text";
                            exports.SELECT_ONE_TYPE = "select-one";
                            exports.SELECT_MULTIPLE_TYPE = "select-multiple";
                            exports.SCROLLING_SPEED = 4;
                        },
                        789: function(__unused_webpack_module, exports, __nested_webpack_require_98200__) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.DEFAULT_CONFIG = exports.DEFAULT_CLASSNAMES = void 0;
                            var utils_1 = __nested_webpack_require_98200__(799);
                            exports.DEFAULT_CLASSNAMES = {
                                containerOuter: "choices",
                                containerInner: "choices__inner",
                                input: "choices__input",
                                inputCloned: "choices__input--cloned",
                                list: "choices__list",
                                listItems: "choices__list--multiple",
                                listSingle: "choices__list--single",
                                listDropdown: "choices__list--dropdown",
                                item: "choices__item",
                                itemSelectable: "choices__item--selectable",
                                itemDisabled: "choices__item--disabled",
                                itemChoice: "choices__item--choice",
                                placeholder: "choices__placeholder",
                                group: "choices__group",
                                groupHeading: "choices__heading",
                                button: "choices__button",
                                activeState: "is-active",
                                focusState: "is-focused",
                                openState: "is-open",
                                disabledState: "is-disabled",
                                highlightedState: "is-highlighted",
                                selectedState: "is-selected",
                                flippedState: "is-flipped",
                                loadingState: "is-loading",
                                noResults: "has-no-results",
                                noChoices: "has-no-choices"
                            };
                            exports.DEFAULT_CONFIG = {
                                items: [],
                                choices: [],
                                silent: false,
                                renderChoiceLimit: -1,
                                maxItemCount: -1,
                                addItems: true,
                                addItemFilter: null,
                                removeItems: true,
                                removeItemButton: false,
                                editItems: false,
                                allowHTML: true,
                                duplicateItemsAllowed: true,
                                delimiter: ",",
                                paste: true,
                                searchEnabled: true,
                                searchChoices: true,
                                searchFloor: 1,
                                searchResultLimit: 4,
                                searchFields: [ "label", "value" ],
                                position: "auto",
                                resetScrollPosition: true,
                                shouldSort: true,
                                shouldSortItems: false,
                                sorter: utils_1.sortByAlpha,
                                placeholder: true,
                                placeholderValue: null,
                                searchPlaceholderValue: null,
                                prependValue: null,
                                appendValue: null,
                                renderSelectedChoices: "auto",
                                loadingText: "Loading...",
                                noResultsText: "No results found",
                                noChoicesText: "No choices to choose from",
                                itemSelectText: "Press to select",
                                uniqueItemText: "Only unique values can be added",
                                customAddItemText: "Only values matching specific conditions can be added",
                                addItemText: function(value) {
                                    return 'Press Enter to add <b>"'.concat((0, utils_1.sanitise)(value), '"</b>');
                                },
                                maxItemText: function(maxItemCount) {
                                    return "Only ".concat(maxItemCount, " values can be added");
                                },
                                valueComparer: function(value1, value2) {
                                    return value1 === value2;
                                },
                                fuseOptions: {
                                    includeScore: true
                                },
                                labelId: "",
                                callbackOnInit: null,
                                callbackOnCreateTemplates: null,
                                classNames: exports.DEFAULT_CLASSNAMES
                            };
                        },
                        18: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        978: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        948: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        359: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        285: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        533: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        187: function(__unused_webpack_module, exports, __nested_webpack_require_101824__) {
                            var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                                if (k2 === void 0) k2 = k;
                                var desc = Object.getOwnPropertyDescriptor(m, k);
                                if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
                                    enumerable: true,
                                    get: function() {
                                        return m[k];
                                    }
                                };
                                Object.defineProperty(o, k2, desc);
                            } : function(o, m, k, k2) {
                                if (k2 === void 0) k2 = k;
                                o[k2] = m[k];
                            });
                            var __exportStar = this && this.__exportStar || function(m, exports) {
                                for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            __exportStar(__nested_webpack_require_101824__(18), exports);
                            __exportStar(__nested_webpack_require_101824__(978), exports);
                            __exportStar(__nested_webpack_require_101824__(948), exports);
                            __exportStar(__nested_webpack_require_101824__(359), exports);
                            __exportStar(__nested_webpack_require_101824__(285), exports);
                            __exportStar(__nested_webpack_require_101824__(533), exports);
                            __exportStar(__nested_webpack_require_101824__(287), exports);
                            __exportStar(__nested_webpack_require_101824__(132), exports);
                            __exportStar(__nested_webpack_require_101824__(837), exports);
                            __exportStar(__nested_webpack_require_101824__(598), exports);
                            __exportStar(__nested_webpack_require_101824__(369), exports);
                            __exportStar(__nested_webpack_require_101824__(37), exports);
                            __exportStar(__nested_webpack_require_101824__(47), exports);
                            __exportStar(__nested_webpack_require_101824__(923), exports);
                            __exportStar(__nested_webpack_require_101824__(876), exports);
                        },
                        287: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        132: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        837: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        598: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        37: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        369: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        47: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        923: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        876: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        },
                        799: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.parseCustomProperties = exports.diff = exports.cloneObject = exports.existsInArray = exports.dispatchEvent = exports.sortByScore = exports.sortByAlpha = exports.strToEl = exports.sanitise = exports.isScrolledIntoView = exports.getAdjacentEl = exports.wrap = exports.isType = exports.getType = exports.generateId = exports.generateChars = exports.getRandomNumber = void 0;
                            var getRandomNumber = function(min, max) {
                                return Math.floor(Math.random() * (max - min) + min);
                            };
                            exports.getRandomNumber = getRandomNumber;
                            var generateChars = function(length) {
                                return Array.from({
                                    length
                                }, (function() {
                                    return (0, exports.getRandomNumber)(0, 36).toString(36);
                                })).join("");
                            };
                            exports.generateChars = generateChars;
                            var generateId = function(element, prefix) {
                                var id = element.id || element.name && "".concat(element.name, "-").concat((0, exports.generateChars)(2)) || (0, 
                                exports.generateChars)(4);
                                id = id.replace(/(:|\.|\[|\]|,)/g, "");
                                id = "".concat(prefix, "-").concat(id);
                                return id;
                            };
                            exports.generateId = generateId;
                            var getType = function(obj) {
                                return Object.prototype.toString.call(obj).slice(8, -1);
                            };
                            exports.getType = getType;
                            var isType = function(type, obj) {
                                return obj !== void 0 && obj !== null && (0, exports.getType)(obj) === type;
                            };
                            exports.isType = isType;
                            var wrap = function(element, wrapper) {
                                if (wrapper === void 0) wrapper = document.createElement("div");
                                if (element.parentNode) if (element.nextSibling) element.parentNode.insertBefore(wrapper, element.nextSibling); else element.parentNode.appendChild(wrapper);
                                return wrapper.appendChild(element);
                            };
                            exports.wrap = wrap;
                            var getAdjacentEl = function(startEl, selector, direction) {
                                if (direction === void 0) direction = 1;
                                var prop = "".concat(direction > 0 ? "next" : "previous", "ElementSibling");
                                var sibling = startEl[prop];
                                while (sibling) {
                                    if (sibling.matches(selector)) return sibling;
                                    sibling = sibling[prop];
                                }
                                return sibling;
                            };
                            exports.getAdjacentEl = getAdjacentEl;
                            var isScrolledIntoView = function(element, parent, direction) {
                                if (direction === void 0) direction = 1;
                                if (!element) return false;
                                var isVisible;
                                if (direction > 0) isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight; else isVisible = element.offsetTop >= parent.scrollTop;
                                return isVisible;
                            };
                            exports.isScrolledIntoView = isScrolledIntoView;
                            var sanitise = function(value) {
                                if (typeof value !== "string") return value;
                                return value.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
                            };
                            exports.sanitise = sanitise;
                            exports.strToEl = function() {
                                var tmpEl = document.createElement("div");
                                return function(str) {
                                    var cleanedInput = str.trim();
                                    tmpEl.innerHTML = cleanedInput;
                                    var firldChild = tmpEl.children[0];
                                    while (tmpEl.firstChild) tmpEl.removeChild(tmpEl.firstChild);
                                    return firldChild;
                                };
                            }();
                            var sortByAlpha = function(_a, _b) {
                                var value = _a.value, _c = _a.label, label = _c === void 0 ? value : _c;
                                var value2 = _b.value, _d = _b.label, label2 = _d === void 0 ? value2 : _d;
                                return label.localeCompare(label2, [], {
                                    sensitivity: "base",
                                    ignorePunctuation: true,
                                    numeric: true
                                });
                            };
                            exports.sortByAlpha = sortByAlpha;
                            var sortByScore = function(a, b) {
                                var _a = a.score, scoreA = _a === void 0 ? 0 : _a;
                                var _b = b.score, scoreB = _b === void 0 ? 0 : _b;
                                return scoreA - scoreB;
                            };
                            exports.sortByScore = sortByScore;
                            var dispatchEvent = function(element, type, customArgs) {
                                if (customArgs === void 0) customArgs = null;
                                var event = new CustomEvent(type, {
                                    detail: customArgs,
                                    bubbles: true,
                                    cancelable: true
                                });
                                return element.dispatchEvent(event);
                            };
                            exports.dispatchEvent = dispatchEvent;
                            var existsInArray = function(array, value, key) {
                                if (key === void 0) key = "value";
                                return array.some((function(item) {
                                    if (typeof value === "string") return item[key] === value.trim();
                                    return item[key] === value;
                                }));
                            };
                            exports.existsInArray = existsInArray;
                            var cloneObject = function(obj) {
                                return JSON.parse(JSON.stringify(obj));
                            };
                            exports.cloneObject = cloneObject;
                            var diff = function(a, b) {
                                var aKeys = Object.keys(a).sort();
                                var bKeys = Object.keys(b).sort();
                                return aKeys.filter((function(i) {
                                    return bKeys.indexOf(i) < 0;
                                }));
                            };
                            exports.diff = diff;
                            var parseCustomProperties = function(customProperties) {
                                if (typeof customProperties !== "undefined") try {
                                    return JSON.parse(customProperties);
                                } catch (e) {
                                    return customProperties;
                                }
                                return {};
                            };
                            exports.parseCustomProperties = parseCustomProperties;
                        },
                        273: function(__unused_webpack_module, exports) {
                            var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                                if (pack || arguments.length === 2) for (var ar, i = 0, l = from.length; i < l; i++) if (ar || !(i in from)) {
                                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                    ar[i] = from[i];
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.defaultState = void 0;
                            exports.defaultState = [];
                            function choices(state, action) {
                                if (state === void 0) state = exports.defaultState;
                                if (action === void 0) action = {};
                                switch (action.type) {
                                  case "ADD_CHOICE":
                                    var addChoiceAction = action;
                                    var choice = {
                                        id: addChoiceAction.id,
                                        elementId: addChoiceAction.elementId,
                                        groupId: addChoiceAction.groupId,
                                        value: addChoiceAction.value,
                                        label: addChoiceAction.label || addChoiceAction.value,
                                        disabled: addChoiceAction.disabled || false,
                                        selected: false,
                                        active: true,
                                        score: 9999,
                                        customProperties: addChoiceAction.customProperties,
                                        placeholder: addChoiceAction.placeholder || false
                                    };
                                    return __spreadArray(__spreadArray([], state, true), [ choice ], false);

                                  case "ADD_ITEM":
                                    var addItemAction_1 = action;
                                    if (addItemAction_1.choiceId > -1) return state.map((function(obj) {
                                        var choice = obj;
                                        if (choice.id === parseInt("".concat(addItemAction_1.choiceId), 10)) choice.selected = true;
                                        return choice;
                                    }));
                                    return state;

                                  case "REMOVE_ITEM":
                                    var removeItemAction_1 = action;
                                    if (removeItemAction_1.choiceId && removeItemAction_1.choiceId > -1) return state.map((function(obj) {
                                        var choice = obj;
                                        if (choice.id === parseInt("".concat(removeItemAction_1.choiceId), 10)) choice.selected = false;
                                        return choice;
                                    }));
                                    return state;

                                  case "FILTER_CHOICES":
                                    var filterChoicesAction_1 = action;
                                    return state.map((function(obj) {
                                        var choice = obj;
                                        choice.active = filterChoicesAction_1.results.some((function(_a) {
                                            var item = _a.item, score = _a.score;
                                            if (item.id === choice.id) {
                                                choice.score = score;
                                                return true;
                                            }
                                            return false;
                                        }));
                                        return choice;
                                    }));

                                  case "ACTIVATE_CHOICES":
                                    var activateChoicesAction_1 = action;
                                    return state.map((function(obj) {
                                        var choice = obj;
                                        choice.active = activateChoicesAction_1.active;
                                        return choice;
                                    }));

                                  case "CLEAR_CHOICES":
                                    return exports.defaultState;

                                  default:
                                    return state;
                                }
                            }
                            exports["default"] = choices;
                        },
                        871: function(__unused_webpack_module, exports) {
                            var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                                if (pack || arguments.length === 2) for (var ar, i = 0, l = from.length; i < l; i++) if (ar || !(i in from)) {
                                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                    ar[i] = from[i];
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.defaultState = void 0;
                            exports.defaultState = [];
                            function groups(state, action) {
                                if (state === void 0) state = exports.defaultState;
                                if (action === void 0) action = {};
                                switch (action.type) {
                                  case "ADD_GROUP":
                                    var addGroupAction = action;
                                    return __spreadArray(__spreadArray([], state, true), [ {
                                        id: addGroupAction.id,
                                        value: addGroupAction.value,
                                        active: addGroupAction.active,
                                        disabled: addGroupAction.disabled
                                    } ], false);

                                  case "CLEAR_CHOICES":
                                    return [];

                                  default:
                                    return state;
                                }
                            }
                            exports["default"] = groups;
                        },
                        655: function(__unused_webpack_module, exports, __nested_webpack_require_114916__) {
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.defaultState = void 0;
                            var redux_1 = __nested_webpack_require_114916__(791);
                            var items_1 = __importDefault(__nested_webpack_require_114916__(52));
                            var groups_1 = __importDefault(__nested_webpack_require_114916__(871));
                            var choices_1 = __importDefault(__nested_webpack_require_114916__(273));
                            var loading_1 = __importDefault(__nested_webpack_require_114916__(502));
                            var utils_1 = __nested_webpack_require_114916__(799);
                            exports.defaultState = {
                                groups: [],
                                items: [],
                                choices: [],
                                loading: false
                            };
                            var appReducer = (0, redux_1.combineReducers)({
                                items: items_1.default,
                                groups: groups_1.default,
                                choices: choices_1.default,
                                loading: loading_1.default
                            });
                            var rootReducer = function(passedState, action) {
                                var state = passedState;
                                if (action.type === "CLEAR_ALL") state = exports.defaultState; else if (action.type === "RESET_TO") return (0, 
                                utils_1.cloneObject)(action.state);
                                return appReducer(state, action);
                            };
                            exports["default"] = rootReducer;
                        },
                        52: function(__unused_webpack_module, exports) {
                            var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                                if (pack || arguments.length === 2) for (var ar, i = 0, l = from.length; i < l; i++) if (ar || !(i in from)) {
                                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                    ar[i] = from[i];
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.defaultState = void 0;
                            exports.defaultState = [];
                            function items(state, action) {
                                if (state === void 0) state = exports.defaultState;
                                if (action === void 0) action = {};
                                switch (action.type) {
                                  case "ADD_ITEM":
                                    var addItemAction = action;
                                    var newState = __spreadArray(__spreadArray([], state, true), [ {
                                        id: addItemAction.id,
                                        choiceId: addItemAction.choiceId,
                                        groupId: addItemAction.groupId,
                                        value: addItemAction.value,
                                        label: addItemAction.label,
                                        active: true,
                                        highlighted: false,
                                        customProperties: addItemAction.customProperties,
                                        placeholder: addItemAction.placeholder || false,
                                        keyCode: null
                                    } ], false);
                                    return newState.map((function(obj) {
                                        var item = obj;
                                        item.highlighted = false;
                                        return item;
                                    }));

                                  case "REMOVE_ITEM":
                                    return state.map((function(obj) {
                                        var item = obj;
                                        if (item.id === action.id) item.active = false;
                                        return item;
                                    }));

                                  case "HIGHLIGHT_ITEM":
                                    var highlightItemAction_1 = action;
                                    return state.map((function(obj) {
                                        var item = obj;
                                        if (item.id === highlightItemAction_1.id) item.highlighted = highlightItemAction_1.highlighted;
                                        return item;
                                    }));

                                  default:
                                    return state;
                                }
                            }
                            exports["default"] = items;
                        },
                        502: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.defaultState = void 0;
                            exports.defaultState = false;
                            var general = function(state, action) {
                                if (state === void 0) state = exports.defaultState;
                                if (action === void 0) action = {};
                                switch (action.type) {
                                  case "SET_IS_LOADING":
                                    return action.isLoading;

                                  default:
                                    return state;
                                }
                            };
                            exports["default"] = general;
                        },
                        744: function(__unused_webpack_module, exports, __nested_webpack_require_119022__) {
                            var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                                if (pack || arguments.length === 2) for (var ar, i = 0, l = from.length; i < l; i++) if (ar || !(i in from)) {
                                    if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                                    ar[i] = from[i];
                                }
                                return to.concat(ar || Array.prototype.slice.call(from));
                            };
                            var __importDefault = this && this.__importDefault || function(mod) {
                                return mod && mod.__esModule ? mod : {
                                    default: mod
                                };
                            };
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var redux_1 = __nested_webpack_require_119022__(791);
                            var index_1 = __importDefault(__nested_webpack_require_119022__(655));
                            var Store = function() {
                                function Store() {
                                    this._store = (0, redux_1.createStore)(index_1.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
                                }
                                Store.prototype.subscribe = function(onChange) {
                                    this._store.subscribe(onChange);
                                };
                                Store.prototype.dispatch = function(action) {
                                    this._store.dispatch(action);
                                };
                                Object.defineProperty(Store.prototype, "state", {
                                    get: function() {
                                        return this._store.getState();
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "items", {
                                    get: function() {
                                        return this.state.items;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "activeItems", {
                                    get: function() {
                                        return this.items.filter((function(item) {
                                            return item.active === true;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "highlightedActiveItems", {
                                    get: function() {
                                        return this.items.filter((function(item) {
                                            return item.active && item.highlighted;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "choices", {
                                    get: function() {
                                        return this.state.choices;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "activeChoices", {
                                    get: function() {
                                        return this.choices.filter((function(choice) {
                                            return choice.active === true;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "selectableChoices", {
                                    get: function() {
                                        return this.choices.filter((function(choice) {
                                            return choice.disabled !== true;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "searchableChoices", {
                                    get: function() {
                                        return this.selectableChoices.filter((function(choice) {
                                            return choice.placeholder !== true;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "placeholderChoice", {
                                    get: function() {
                                        return __spreadArray([], this.choices, true).reverse().find((function(choice) {
                                            return choice.placeholder === true;
                                        }));
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "groups", {
                                    get: function() {
                                        return this.state.groups;
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Object.defineProperty(Store.prototype, "activeGroups", {
                                    get: function() {
                                        var _a = this, groups = _a.groups, choices = _a.choices;
                                        return groups.filter((function(group) {
                                            var isActive = group.active === true && group.disabled === false;
                                            var hasActiveOptions = choices.some((function(choice) {
                                                return choice.active === true && choice.disabled === false;
                                            }));
                                            return isActive && hasActiveOptions;
                                        }), []);
                                    },
                                    enumerable: false,
                                    configurable: true
                                });
                                Store.prototype.isLoading = function() {
                                    return this.state.loading;
                                };
                                Store.prototype.getChoiceById = function(id) {
                                    return this.activeChoices.find((function(choice) {
                                        return choice.id === parseInt(id, 10);
                                    }));
                                };
                                Store.prototype.getGroupById = function(id) {
                                    return this.groups.find((function(group) {
                                        return group.id === id;
                                    }));
                                };
                                return Store;
                            }();
                            exports["default"] = Store;
                        },
                        686: function(__unused_webpack_module, exports) {
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var templates = {
                                containerOuter: function(_a, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType, labelId) {
                                    var containerOuter = _a.classNames.containerOuter;
                                    var div = Object.assign(document.createElement("div"), {
                                        className: containerOuter
                                    });
                                    div.dataset.type = passedElementType;
                                    if (dir) div.dir = dir;
                                    if (isSelectOneElement) div.tabIndex = 0;
                                    if (isSelectElement) {
                                        div.setAttribute("role", searchEnabled ? "combobox" : "listbox");
                                        if (searchEnabled) div.setAttribute("aria-autocomplete", "list");
                                    }
                                    div.setAttribute("aria-haspopup", "true");
                                    div.setAttribute("aria-expanded", "false");
                                    if (labelId) div.setAttribute("aria-labelledby", labelId);
                                    return div;
                                },
                                containerInner: function(_a) {
                                    var containerInner = _a.classNames.containerInner;
                                    return Object.assign(document.createElement("div"), {
                                        className: containerInner
                                    });
                                },
                                itemList: function(_a, isSelectOneElement) {
                                    var _b = _a.classNames, list = _b.list, listSingle = _b.listSingle, listItems = _b.listItems;
                                    return Object.assign(document.createElement("div"), {
                                        className: "".concat(list, " ").concat(isSelectOneElement ? listSingle : listItems)
                                    });
                                },
                                placeholder: function(_a, value) {
                                    var _b;
                                    var allowHTML = _a.allowHTML, placeholder = _a.classNames.placeholder;
                                    return Object.assign(document.createElement("div"), (_b = {
                                        className: placeholder
                                    }, _b[allowHTML ? "innerHTML" : "innerText"] = value, _b));
                                },
                                item: function(_a, _b, removeItemButton) {
                                    var _c, _d;
                                    var allowHTML = _a.allowHTML, _e = _a.classNames, item = _e.item, button = _e.button, highlightedState = _e.highlightedState, itemSelectable = _e.itemSelectable, placeholder = _e.placeholder;
                                    var id = _b.id, value = _b.value, label = _b.label, customProperties = _b.customProperties, active = _b.active, disabled = _b.disabled, highlighted = _b.highlighted, isPlaceholder = _b.placeholder;
                                    var div = Object.assign(document.createElement("div"), (_c = {
                                        className: item
                                    }, _c[allowHTML ? "innerHTML" : "innerText"] = label, _c));
                                    Object.assign(div.dataset, {
                                        item: "",
                                        id,
                                        value,
                                        customProperties
                                    });
                                    if (active) div.setAttribute("aria-selected", "true");
                                    if (disabled) div.setAttribute("aria-disabled", "true");
                                    if (isPlaceholder) div.classList.add(placeholder);
                                    div.classList.add(highlighted ? highlightedState : itemSelectable);
                                    if (removeItemButton) {
                                        if (disabled) div.classList.remove(itemSelectable);
                                        div.dataset.deletable = "";
                                        var REMOVE_ITEM_TEXT = "Remove item";
                                        var removeButton = Object.assign(document.createElement("button"), (_d = {
                                            type: "button",
                                            className: button
                                        }, _d[allowHTML ? "innerHTML" : "innerText"] = REMOVE_ITEM_TEXT, _d));
                                        removeButton.setAttribute("aria-label", "".concat(REMOVE_ITEM_TEXT, ": '").concat(value, "'"));
                                        removeButton.dataset.button = "";
                                        div.appendChild(removeButton);
                                    }
                                    return div;
                                },
                                choiceList: function(_a, isSelectOneElement) {
                                    var list = _a.classNames.list;
                                    var div = Object.assign(document.createElement("div"), {
                                        className: list
                                    });
                                    if (!isSelectOneElement) div.setAttribute("aria-multiselectable", "true");
                                    div.setAttribute("role", "listbox");
                                    return div;
                                },
                                choiceGroup: function(_a, _b) {
                                    var _c;
                                    var allowHTML = _a.allowHTML, _d = _a.classNames, group = _d.group, groupHeading = _d.groupHeading, itemDisabled = _d.itemDisabled;
                                    var id = _b.id, value = _b.value, disabled = _b.disabled;
                                    var div = Object.assign(document.createElement("div"), {
                                        className: "".concat(group, " ").concat(disabled ? itemDisabled : "")
                                    });
                                    div.setAttribute("role", "group");
                                    Object.assign(div.dataset, {
                                        group: "",
                                        id,
                                        value
                                    });
                                    if (disabled) div.setAttribute("aria-disabled", "true");
                                    div.appendChild(Object.assign(document.createElement("div"), (_c = {
                                        className: groupHeading
                                    }, _c[allowHTML ? "innerHTML" : "innerText"] = value, _c)));
                                    return div;
                                },
                                choice: function(_a, _b, selectText) {
                                    var _c;
                                    var allowHTML = _a.allowHTML, _d = _a.classNames, item = _d.item, itemChoice = _d.itemChoice, itemSelectable = _d.itemSelectable, selectedState = _d.selectedState, itemDisabled = _d.itemDisabled, placeholder = _d.placeholder;
                                    var id = _b.id, value = _b.value, label = _b.label, groupId = _b.groupId, elementId = _b.elementId, isDisabled = _b.disabled, isSelected = _b.selected, isPlaceholder = _b.placeholder;
                                    var div = Object.assign(document.createElement("div"), (_c = {
                                        id: elementId
                                    }, _c[allowHTML ? "innerHTML" : "innerText"] = label, _c.className = "".concat(item, " ").concat(itemChoice), 
                                    _c));
                                    if (isSelected) div.classList.add(selectedState);
                                    if (isPlaceholder) div.classList.add(placeholder);
                                    div.setAttribute("role", groupId && groupId > 0 ? "treeitem" : "option");
                                    Object.assign(div.dataset, {
                                        choice: "",
                                        id,
                                        value,
                                        selectText
                                    });
                                    if (isDisabled) {
                                        div.classList.add(itemDisabled);
                                        div.dataset.choiceDisabled = "";
                                        div.setAttribute("aria-disabled", "true");
                                    } else {
                                        div.classList.add(itemSelectable);
                                        div.dataset.choiceSelectable = "";
                                    }
                                    return div;
                                },
                                input: function(_a, placeholderValue) {
                                    var _b = _a.classNames, input = _b.input, inputCloned = _b.inputCloned;
                                    var inp = Object.assign(document.createElement("input"), {
                                        type: "search",
                                        name: "search_terms",
                                        className: "".concat(input, " ").concat(inputCloned),
                                        autocomplete: "off",
                                        autocapitalize: "off",
                                        spellcheck: false
                                    });
                                    inp.setAttribute("role", "textbox");
                                    inp.setAttribute("aria-autocomplete", "list");
                                    inp.setAttribute("aria-label", placeholderValue);
                                    return inp;
                                },
                                dropdown: function(_a) {
                                    var _b = _a.classNames, list = _b.list, listDropdown = _b.listDropdown;
                                    var div = document.createElement("div");
                                    div.classList.add(list, listDropdown);
                                    div.setAttribute("aria-expanded", "false");
                                    return div;
                                },
                                notice: function(_a, innerText, type) {
                                    var _b;
                                    var allowHTML = _a.allowHTML, _c = _a.classNames, item = _c.item, itemChoice = _c.itemChoice, noResults = _c.noResults, noChoices = _c.noChoices;
                                    if (type === void 0) type = "";
                                    var classes = [ item, itemChoice ];
                                    if (type === "no-choices") classes.push(noChoices); else if (type === "no-results") classes.push(noResults);
                                    return Object.assign(document.createElement("div"), (_b = {}, _b[allowHTML ? "innerHTML" : "innerText"] = innerText, 
                                    _b.className = classes.join(" "), _b));
                                },
                                option: function(_a) {
                                    var label = _a.label, value = _a.value, customProperties = _a.customProperties, active = _a.active, disabled = _a.disabled;
                                    var opt = new Option(label, value, false, active);
                                    if (customProperties) opt.dataset.customProperties = "".concat(customProperties);
                                    opt.disabled = !!disabled;
                                    return opt;
                                }
                            };
                            exports["default"] = templates;
                        },
                        996: function(module) {
                            var isMergeableObject = function isMergeableObject(value) {
                                return isNonNullObject(value) && !isSpecial(value);
                            };
                            function isNonNullObject(value) {
                                return !!value && typeof value === "object";
                            }
                            function isSpecial(value) {
                                var stringValue = Object.prototype.toString.call(value);
                                return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
                            }
                            var canUseSymbol = typeof Symbol === "function" && Symbol.for;
                            var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
                            function isReactElement(value) {
                                return value.$$typeof === REACT_ELEMENT_TYPE;
                            }
                            function emptyTarget(val) {
                                return Array.isArray(val) ? [] : {};
                            }
                            function cloneUnlessOtherwiseSpecified(value, options) {
                                return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
                            }
                            function defaultArrayMerge(target, source, options) {
                                return target.concat(source).map((function(element) {
                                    return cloneUnlessOtherwiseSpecified(element, options);
                                }));
                            }
                            function getMergeFunction(key, options) {
                                if (!options.customMerge) return deepmerge;
                                var customMerge = options.customMerge(key);
                                return typeof customMerge === "function" ? customMerge : deepmerge;
                            }
                            function getEnumerableOwnPropertySymbols(target) {
                                return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter((function(symbol) {
                                    return target.propertyIsEnumerable(symbol);
                                })) : [];
                            }
                            function getKeys(target) {
                                return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
                            }
                            function propertyIsOnObject(object, property) {
                                try {
                                    return property in object;
                                } catch (_) {
                                    return false;
                                }
                            }
                            function propertyIsUnsafe(target, key) {
                                return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
                            }
                            function mergeObject(target, source, options) {
                                var destination = {};
                                if (options.isMergeableObject(target)) getKeys(target).forEach((function(key) {
                                    destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
                                }));
                                getKeys(source).forEach((function(key) {
                                    if (propertyIsUnsafe(target, key)) return;
                                    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) destination[key] = getMergeFunction(key, options)(target[key], source[key], options); else destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
                                }));
                                return destination;
                            }
                            function deepmerge(target, source, options) {
                                options = options || {};
                                options.arrayMerge = options.arrayMerge || defaultArrayMerge;
                                options.isMergeableObject = options.isMergeableObject || isMergeableObject;
                                options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
                                var sourceIsArray = Array.isArray(source);
                                var targetIsArray = Array.isArray(target);
                                var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
                                if (!sourceAndTargetTypesMatch) return cloneUnlessOtherwiseSpecified(source, options); else if (sourceIsArray) return options.arrayMerge(target, source, options); else return mergeObject(target, source, options);
                            }
                            deepmerge.all = function deepmergeAll(array, options) {
                                if (!Array.isArray(array)) throw new Error("first argument should be an array");
                                return array.reduce((function(prev, next) {
                                    return deepmerge(prev, next, options);
                                }), {});
                            };
                            var deepmerge_1 = deepmerge;
                            module.exports = deepmerge_1;
                        },
                        221: function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_136441__) {
                            __nested_webpack_require_136441__.r(__nested_webpack_exports__);
                            __nested_webpack_require_136441__.d(__nested_webpack_exports__, {
                                default: function() {
                                    return Fuse;
                                }
                            });
                            function isArray(value) {
                                return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
                            }
                            const INFINITY = 1 / 0;
                            function baseToString(value) {
                                if (typeof value == "string") return value;
                                let result = value + "";
                                return result == "0" && 1 / value == -INFINITY ? "-0" : result;
                            }
                            function toString(value) {
                                return value == null ? "" : baseToString(value);
                            }
                            function isString(value) {
                                return typeof value === "string";
                            }
                            function isNumber(value) {
                                return typeof value === "number";
                            }
                            function isBoolean(value) {
                                return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
                            }
                            function isObject(value) {
                                return typeof value === "object";
                            }
                            function isObjectLike(value) {
                                return isObject(value) && value !== null;
                            }
                            function isDefined(value) {
                                return value !== void 0 && value !== null;
                            }
                            function isBlank(value) {
                                return !value.trim().length;
                            }
                            function getTag(value) {
                                return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
                            }
                            const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
                            const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = key => `Invalid value for key ${key}`;
                            const PATTERN_LENGTH_TOO_LARGE = max => `Pattern length exceeds max of ${max}.`;
                            const MISSING_KEY_PROPERTY = name => `Missing ${name} property in key`;
                            const INVALID_KEY_WEIGHT_VALUE = key => `Property 'weight' in key '${key}' must be a positive integer`;
                            const hasOwn = Object.prototype.hasOwnProperty;
                            class KeyStore {
                                constructor(keys) {
                                    this._keys = [];
                                    this._keyMap = {};
                                    let totalWeight = 0;
                                    keys.forEach((key => {
                                        let obj = createKey(key);
                                        totalWeight += obj.weight;
                                        this._keys.push(obj);
                                        this._keyMap[obj.id] = obj;
                                        totalWeight += obj.weight;
                                    }));
                                    this._keys.forEach((key => {
                                        key.weight /= totalWeight;
                                    }));
                                }
                                get(keyId) {
                                    return this._keyMap[keyId];
                                }
                                keys() {
                                    return this._keys;
                                }
                                toJSON() {
                                    return JSON.stringify(this._keys);
                                }
                            }
                            function createKey(key) {
                                let path = null;
                                let id = null;
                                let src = null;
                                let weight = 1;
                                let getFn = null;
                                if (isString(key) || isArray(key)) {
                                    src = key;
                                    path = createKeyPath(key);
                                    id = createKeyId(key);
                                } else {
                                    if (!hasOwn.call(key, "name")) throw new Error(MISSING_KEY_PROPERTY("name"));
                                    const name = key.name;
                                    src = name;
                                    if (hasOwn.call(key, "weight")) {
                                        weight = key.weight;
                                        if (weight <= 0) throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
                                    }
                                    path = createKeyPath(name);
                                    id = createKeyId(name);
                                    getFn = key.getFn;
                                }
                                return {
                                    path,
                                    id,
                                    weight,
                                    src,
                                    getFn
                                };
                            }
                            function createKeyPath(key) {
                                return isArray(key) ? key : key.split(".");
                            }
                            function createKeyId(key) {
                                return isArray(key) ? key.join(".") : key;
                            }
                            function get(obj, path) {
                                let list = [];
                                let arr = false;
                                const deepGet = (obj, path, index) => {
                                    if (!isDefined(obj)) return;
                                    if (!path[index]) list.push(obj); else {
                                        let key = path[index];
                                        const value = obj[key];
                                        if (!isDefined(value)) return;
                                        if (index === path.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) list.push(toString(value)); else if (isArray(value)) {
                                            arr = true;
                                            for (let i = 0, len = value.length; i < len; i += 1) deepGet(value[i], path, index + 1);
                                        } else if (path.length) deepGet(value, path, index + 1);
                                    }
                                };
                                deepGet(obj, isString(path) ? path.split(".") : path, 0);
                                return arr ? list : list[0];
                            }
                            const MatchOptions = {
                                includeMatches: false,
                                findAllMatches: false,
                                minMatchCharLength: 1
                            };
                            const BasicOptions = {
                                isCaseSensitive: false,
                                includeScore: false,
                                keys: [],
                                shouldSort: true,
                                sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
                            };
                            const FuzzyOptions = {
                                location: 0,
                                threshold: .6,
                                distance: 100
                            };
                            const AdvancedOptions = {
                                useExtendedSearch: false,
                                getFn: get,
                                ignoreLocation: false,
                                ignoreFieldNorm: false,
                                fieldNormWeight: 1
                            };
                            var Config = {
                                ...BasicOptions,
                                ...MatchOptions,
                                ...FuzzyOptions,
                                ...AdvancedOptions
                            };
                            const SPACE = /[^ ]+/g;
                            function norm(weight = 1, mantissa = 3) {
                                const cache = new Map;
                                const m = Math.pow(10, mantissa);
                                return {
                                    get(value) {
                                        const numTokens = value.match(SPACE).length;
                                        if (cache.has(numTokens)) return cache.get(numTokens);
                                        const norm = 1 / Math.pow(numTokens, .5 * weight);
                                        const n = parseFloat(Math.round(norm * m) / m);
                                        cache.set(numTokens, n);
                                        return n;
                                    },
                                    clear() {
                                        cache.clear();
                                    }
                                };
                            }
                            class FuseIndex {
                                constructor({getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight} = {}) {
                                    this.norm = norm(fieldNormWeight, 3);
                                    this.getFn = getFn;
                                    this.isCreated = false;
                                    this.setIndexRecords();
                                }
                                setSources(docs = []) {
                                    this.docs = docs;
                                }
                                setIndexRecords(records = []) {
                                    this.records = records;
                                }
                                setKeys(keys = []) {
                                    this.keys = keys;
                                    this._keysMap = {};
                                    keys.forEach(((key, idx) => {
                                        this._keysMap[key.id] = idx;
                                    }));
                                }
                                create() {
                                    if (this.isCreated || !this.docs.length) return;
                                    this.isCreated = true;
                                    if (isString(this.docs[0])) this.docs.forEach(((doc, docIndex) => {
                                        this._addString(doc, docIndex);
                                    })); else this.docs.forEach(((doc, docIndex) => {
                                        this._addObject(doc, docIndex);
                                    }));
                                    this.norm.clear();
                                }
                                add(doc) {
                                    const idx = this.size();
                                    if (isString(doc)) this._addString(doc, idx); else this._addObject(doc, idx);
                                }
                                removeAt(idx) {
                                    this.records.splice(idx, 1);
                                    for (let i = idx, len = this.size(); i < len; i += 1) this.records[i].i -= 1;
                                }
                                getValueForItemAtKeyId(item, keyId) {
                                    return item[this._keysMap[keyId]];
                                }
                                size() {
                                    return this.records.length;
                                }
                                _addString(doc, docIndex) {
                                    if (!isDefined(doc) || isBlank(doc)) return;
                                    let record = {
                                        v: doc,
                                        i: docIndex,
                                        n: this.norm.get(doc)
                                    };
                                    this.records.push(record);
                                }
                                _addObject(doc, docIndex) {
                                    let record = {
                                        i: docIndex,
                                        $: {}
                                    };
                                    this.keys.forEach(((key, keyIndex) => {
                                        let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
                                        if (!isDefined(value)) return;
                                        if (isArray(value)) {
                                            let subRecords = [];
                                            const stack = [ {
                                                nestedArrIndex: -1,
                                                value
                                            } ];
                                            while (stack.length) {
                                                const {nestedArrIndex, value} = stack.pop();
                                                if (!isDefined(value)) continue;
                                                if (isString(value) && !isBlank(value)) {
                                                    let subRecord = {
                                                        v: value,
                                                        i: nestedArrIndex,
                                                        n: this.norm.get(value)
                                                    };
                                                    subRecords.push(subRecord);
                                                } else if (isArray(value)) value.forEach(((item, k) => {
                                                    stack.push({
                                                        nestedArrIndex: k,
                                                        value: item
                                                    });
                                                }));
                                            }
                                            record.$[keyIndex] = subRecords;
                                        } else if (isString(value) && !isBlank(value)) {
                                            let subRecord = {
                                                v: value,
                                                n: this.norm.get(value)
                                            };
                                            record.$[keyIndex] = subRecord;
                                        }
                                    }));
                                    this.records.push(record);
                                }
                                toJSON() {
                                    return {
                                        keys: this.keys,
                                        records: this.records
                                    };
                                }
                            }
                            function createIndex(keys, docs, {getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight} = {}) {
                                const myIndex = new FuseIndex({
                                    getFn,
                                    fieldNormWeight
                                });
                                myIndex.setKeys(keys.map(createKey));
                                myIndex.setSources(docs);
                                myIndex.create();
                                return myIndex;
                            }
                            function parseIndex(data, {getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight} = {}) {
                                const {keys, records} = data;
                                const myIndex = new FuseIndex({
                                    getFn,
                                    fieldNormWeight
                                });
                                myIndex.setKeys(keys);
                                myIndex.setIndexRecords(records);
                                return myIndex;
                            }
                            function computeScore$1(pattern, {errors = 0, currentLocation = 0, expectedLocation = 0, distance = Config.distance, ignoreLocation = Config.ignoreLocation} = {}) {
                                const accuracy = errors / pattern.length;
                                if (ignoreLocation) return accuracy;
                                const proximity = Math.abs(expectedLocation - currentLocation);
                                if (!distance) return proximity ? 1 : accuracy;
                                return accuracy + proximity / distance;
                            }
                            function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
                                let indices = [];
                                let start = -1;
                                let end = -1;
                                let i = 0;
                                for (let len = matchmask.length; i < len; i += 1) {
                                    let match = matchmask[i];
                                    if (match && start === -1) start = i; else if (!match && start !== -1) {
                                        end = i - 1;
                                        if (end - start + 1 >= minMatchCharLength) indices.push([ start, end ]);
                                        start = -1;
                                    }
                                }
                                if (matchmask[i - 1] && i - start >= minMatchCharLength) indices.push([ start, i - 1 ]);
                                return indices;
                            }
                            const MAX_BITS = 32;
                            function search(text, pattern, patternAlphabet, {location = Config.location, distance = Config.distance, threshold = Config.threshold, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, includeMatches = Config.includeMatches, ignoreLocation = Config.ignoreLocation} = {}) {
                                if (pattern.length > MAX_BITS) throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
                                const patternLen = pattern.length;
                                const textLen = text.length;
                                const expectedLocation = Math.max(0, Math.min(location, textLen));
                                let currentThreshold = threshold;
                                let bestLocation = expectedLocation;
                                const computeMatches = minMatchCharLength > 1 || includeMatches;
                                const matchMask = computeMatches ? Array(textLen) : [];
                                let index;
                                while ((index = text.indexOf(pattern, bestLocation)) > -1) {
                                    let score = computeScore$1(pattern, {
                                        currentLocation: index,
                                        expectedLocation,
                                        distance,
                                        ignoreLocation
                                    });
                                    currentThreshold = Math.min(score, currentThreshold);
                                    bestLocation = index + patternLen;
                                    if (computeMatches) {
                                        let i = 0;
                                        while (i < patternLen) {
                                            matchMask[index + i] = 1;
                                            i += 1;
                                        }
                                    }
                                }
                                bestLocation = -1;
                                let lastBitArr = [];
                                let finalScore = 1;
                                let binMax = patternLen + textLen;
                                const mask = 1 << patternLen - 1;
                                for (let i = 0; i < patternLen; i += 1) {
                                    let binMin = 0;
                                    let binMid = binMax;
                                    while (binMin < binMid) {
                                        const score = computeScore$1(pattern, {
                                            errors: i,
                                            currentLocation: expectedLocation + binMid,
                                            expectedLocation,
                                            distance,
                                            ignoreLocation
                                        });
                                        if (score <= currentThreshold) binMin = binMid; else binMax = binMid;
                                        binMid = Math.floor((binMax - binMin) / 2 + binMin);
                                    }
                                    binMax = binMid;
                                    let start = Math.max(1, expectedLocation - binMid + 1);
                                    let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
                                    let bitArr = Array(finish + 2);
                                    bitArr[finish + 1] = (1 << i) - 1;
                                    for (let j = finish; j >= start; j -= 1) {
                                        let currentLocation = j - 1;
                                        let charMatch = patternAlphabet[text.charAt(currentLocation)];
                                        if (computeMatches) matchMask[currentLocation] = +!!charMatch;
                                        bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
                                        if (i) bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
                                        if (bitArr[j] & mask) {
                                            finalScore = computeScore$1(pattern, {
                                                errors: i,
                                                currentLocation,
                                                expectedLocation,
                                                distance,
                                                ignoreLocation
                                            });
                                            if (finalScore <= currentThreshold) {
                                                currentThreshold = finalScore;
                                                bestLocation = currentLocation;
                                                if (bestLocation <= expectedLocation) break;
                                                start = Math.max(1, 2 * expectedLocation - bestLocation);
                                            }
                                        }
                                    }
                                    const score = computeScore$1(pattern, {
                                        errors: i + 1,
                                        currentLocation: expectedLocation,
                                        expectedLocation,
                                        distance,
                                        ignoreLocation
                                    });
                                    if (score > currentThreshold) break;
                                    lastBitArr = bitArr;
                                }
                                const result = {
                                    isMatch: bestLocation >= 0,
                                    score: Math.max(.001, finalScore)
                                };
                                if (computeMatches) {
                                    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
                                    if (!indices.length) result.isMatch = false; else if (includeMatches) result.indices = indices;
                                }
                                return result;
                            }
                            function createPatternAlphabet(pattern) {
                                let mask = {};
                                for (let i = 0, len = pattern.length; i < len; i += 1) {
                                    const char = pattern.charAt(i);
                                    mask[char] = (mask[char] || 0) | 1 << len - i - 1;
                                }
                                return mask;
                            }
                            class BitapSearch {
                                constructor(pattern, {location = Config.location, threshold = Config.threshold, distance = Config.distance, includeMatches = Config.includeMatches, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, isCaseSensitive = Config.isCaseSensitive, ignoreLocation = Config.ignoreLocation} = {}) {
                                    this.options = {
                                        location,
                                        threshold,
                                        distance,
                                        includeMatches,
                                        findAllMatches,
                                        minMatchCharLength,
                                        isCaseSensitive,
                                        ignoreLocation
                                    };
                                    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
                                    this.chunks = [];
                                    if (!this.pattern.length) return;
                                    const addChunk = (pattern, startIndex) => {
                                        this.chunks.push({
                                            pattern,
                                            alphabet: createPatternAlphabet(pattern),
                                            startIndex
                                        });
                                    };
                                    const len = this.pattern.length;
                                    if (len > MAX_BITS) {
                                        let i = 0;
                                        const remainder = len % MAX_BITS;
                                        const end = len - remainder;
                                        while (i < end) {
                                            addChunk(this.pattern.substr(i, MAX_BITS), i);
                                            i += MAX_BITS;
                                        }
                                        if (remainder) {
                                            const startIndex = len - MAX_BITS;
                                            addChunk(this.pattern.substr(startIndex), startIndex);
                                        }
                                    } else addChunk(this.pattern, 0);
                                }
                                searchIn(text) {
                                    const {isCaseSensitive, includeMatches} = this.options;
                                    if (!isCaseSensitive) text = text.toLowerCase();
                                    if (this.pattern === text) {
                                        let result = {
                                            isMatch: true,
                                            score: 0
                                        };
                                        if (includeMatches) result.indices = [ [ 0, text.length - 1 ] ];
                                        return result;
                                    }
                                    const {location, distance, threshold, findAllMatches, minMatchCharLength, ignoreLocation} = this.options;
                                    let allIndices = [];
                                    let totalScore = 0;
                                    let hasMatches = false;
                                    this.chunks.forEach((({pattern, alphabet, startIndex}) => {
                                        const {isMatch, score, indices} = search(text, pattern, alphabet, {
                                            location: location + startIndex,
                                            distance,
                                            threshold,
                                            findAllMatches,
                                            minMatchCharLength,
                                            includeMatches,
                                            ignoreLocation
                                        });
                                        if (isMatch) hasMatches = true;
                                        totalScore += score;
                                        if (isMatch && indices) allIndices = [ ...allIndices, ...indices ];
                                    }));
                                    let result = {
                                        isMatch: hasMatches,
                                        score: hasMatches ? totalScore / this.chunks.length : 1
                                    };
                                    if (hasMatches && includeMatches) result.indices = allIndices;
                                    return result;
                                }
                            }
                            class BaseMatch {
                                constructor(pattern) {
                                    this.pattern = pattern;
                                }
                                static isMultiMatch(pattern) {
                                    return getMatch(pattern, this.multiRegex);
                                }
                                static isSingleMatch(pattern) {
                                    return getMatch(pattern, this.singleRegex);
                                }
                                search() {}
                            }
                            function getMatch(pattern, exp) {
                                const matches = pattern.match(exp);
                                return matches ? matches[1] : null;
                            }
                            class ExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "exact";
                                }
                                static get multiRegex() {
                                    return /^="(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^=(.*)$/;
                                }
                                search(text) {
                                    const isMatch = text === this.pattern;
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ 0, this.pattern.length - 1 ]
                                    };
                                }
                            }
                            class InverseExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "inverse-exact";
                                }
                                static get multiRegex() {
                                    return /^!"(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^!(.*)$/;
                                }
                                search(text) {
                                    const index = text.indexOf(this.pattern);
                                    const isMatch = index === -1;
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ 0, text.length - 1 ]
                                    };
                                }
                            }
                            class PrefixExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "prefix-exact";
                                }
                                static get multiRegex() {
                                    return /^\^"(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^\^(.*)$/;
                                }
                                search(text) {
                                    const isMatch = text.startsWith(this.pattern);
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ 0, this.pattern.length - 1 ]
                                    };
                                }
                            }
                            class InversePrefixExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "inverse-prefix-exact";
                                }
                                static get multiRegex() {
                                    return /^!\^"(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^!\^(.*)$/;
                                }
                                search(text) {
                                    const isMatch = !text.startsWith(this.pattern);
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ 0, text.length - 1 ]
                                    };
                                }
                            }
                            class SuffixExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "suffix-exact";
                                }
                                static get multiRegex() {
                                    return /^"(.*)"\$$/;
                                }
                                static get singleRegex() {
                                    return /^(.*)\$$/;
                                }
                                search(text) {
                                    const isMatch = text.endsWith(this.pattern);
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ text.length - this.pattern.length, text.length - 1 ]
                                    };
                                }
                            }
                            class InverseSuffixExactMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "inverse-suffix-exact";
                                }
                                static get multiRegex() {
                                    return /^!"(.*)"\$$/;
                                }
                                static get singleRegex() {
                                    return /^!(.*)\$$/;
                                }
                                search(text) {
                                    const isMatch = !text.endsWith(this.pattern);
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices: [ 0, text.length - 1 ]
                                    };
                                }
                            }
                            class FuzzyMatch extends BaseMatch {
                                constructor(pattern, {location = Config.location, threshold = Config.threshold, distance = Config.distance, includeMatches = Config.includeMatches, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, isCaseSensitive = Config.isCaseSensitive, ignoreLocation = Config.ignoreLocation} = {}) {
                                    super(pattern);
                                    this._bitapSearch = new BitapSearch(pattern, {
                                        location,
                                        threshold,
                                        distance,
                                        includeMatches,
                                        findAllMatches,
                                        minMatchCharLength,
                                        isCaseSensitive,
                                        ignoreLocation
                                    });
                                }
                                static get type() {
                                    return "fuzzy";
                                }
                                static get multiRegex() {
                                    return /^"(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^(.*)$/;
                                }
                                search(text) {
                                    return this._bitapSearch.searchIn(text);
                                }
                            }
                            class IncludeMatch extends BaseMatch {
                                constructor(pattern) {
                                    super(pattern);
                                }
                                static get type() {
                                    return "include";
                                }
                                static get multiRegex() {
                                    return /^'"(.*)"$/;
                                }
                                static get singleRegex() {
                                    return /^'(.*)$/;
                                }
                                search(text) {
                                    let location = 0;
                                    let index;
                                    const indices = [];
                                    const patternLen = this.pattern.length;
                                    while ((index = text.indexOf(this.pattern, location)) > -1) {
                                        location = index + patternLen;
                                        indices.push([ index, location - 1 ]);
                                    }
                                    const isMatch = !!indices.length;
                                    return {
                                        isMatch,
                                        score: isMatch ? 0 : 1,
                                        indices
                                    };
                                }
                            }
                            const searchers = [ ExactMatch, IncludeMatch, PrefixExactMatch, InversePrefixExactMatch, InverseSuffixExactMatch, SuffixExactMatch, InverseExactMatch, FuzzyMatch ];
                            const searchersLen = searchers.length;
                            const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
                            const OR_TOKEN = "|";
                            function parseQuery(pattern, options = {}) {
                                return pattern.split(OR_TOKEN).map((item => {
                                    let query = item.trim().split(SPACE_RE).filter((item => item && !!item.trim()));
                                    let results = [];
                                    for (let i = 0, len = query.length; i < len; i += 1) {
                                        const queryItem = query[i];
                                        let found = false;
                                        let idx = -1;
                                        while (!found && ++idx < searchersLen) {
                                            const searcher = searchers[idx];
                                            let token = searcher.isMultiMatch(queryItem);
                                            if (token) {
                                                results.push(new searcher(token, options));
                                                found = true;
                                            }
                                        }
                                        if (found) continue;
                                        idx = -1;
                                        while (++idx < searchersLen) {
                                            const searcher = searchers[idx];
                                            let token = searcher.isSingleMatch(queryItem);
                                            if (token) {
                                                results.push(new searcher(token, options));
                                                break;
                                            }
                                        }
                                    }
                                    return results;
                                }));
                            }
                            const MultiMatchSet = new Set([ FuzzyMatch.type, IncludeMatch.type ]);
                            class ExtendedSearch {
                                constructor(pattern, {isCaseSensitive = Config.isCaseSensitive, includeMatches = Config.includeMatches, minMatchCharLength = Config.minMatchCharLength, ignoreLocation = Config.ignoreLocation, findAllMatches = Config.findAllMatches, location = Config.location, threshold = Config.threshold, distance = Config.distance} = {}) {
                                    this.query = null;
                                    this.options = {
                                        isCaseSensitive,
                                        includeMatches,
                                        minMatchCharLength,
                                        findAllMatches,
                                        ignoreLocation,
                                        location,
                                        threshold,
                                        distance
                                    };
                                    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
                                    this.query = parseQuery(this.pattern, this.options);
                                }
                                static condition(_, options) {
                                    return options.useExtendedSearch;
                                }
                                searchIn(text) {
                                    const query = this.query;
                                    if (!query) return {
                                        isMatch: false,
                                        score: 1
                                    };
                                    const {includeMatches, isCaseSensitive} = this.options;
                                    text = isCaseSensitive ? text : text.toLowerCase();
                                    let numMatches = 0;
                                    let allIndices = [];
                                    let totalScore = 0;
                                    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
                                        const searchers = query[i];
                                        allIndices.length = 0;
                                        numMatches = 0;
                                        for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
                                            const searcher = searchers[j];
                                            const {isMatch, indices, score} = searcher.search(text);
                                            if (isMatch) {
                                                numMatches += 1;
                                                totalScore += score;
                                                if (includeMatches) {
                                                    const type = searcher.constructor.type;
                                                    if (MultiMatchSet.has(type)) allIndices = [ ...allIndices, ...indices ]; else allIndices.push(indices);
                                                }
                                            } else {
                                                totalScore = 0;
                                                numMatches = 0;
                                                allIndices.length = 0;
                                                break;
                                            }
                                        }
                                        if (numMatches) {
                                            let result = {
                                                isMatch: true,
                                                score: totalScore / numMatches
                                            };
                                            if (includeMatches) result.indices = allIndices;
                                            return result;
                                        }
                                    }
                                    return {
                                        isMatch: false,
                                        score: 1
                                    };
                                }
                            }
                            const registeredSearchers = [];
                            function register(...args) {
                                registeredSearchers.push(...args);
                            }
                            function createSearcher(pattern, options) {
                                for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
                                    let searcherClass = registeredSearchers[i];
                                    if (searcherClass.condition(pattern, options)) return new searcherClass(pattern, options);
                                }
                                return new BitapSearch(pattern, options);
                            }
                            const LogicalOperator = {
                                AND: "$and",
                                OR: "$or"
                            };
                            const KeyType = {
                                PATH: "$path",
                                PATTERN: "$val"
                            };
                            const isExpression = query => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
                            const isPath = query => !!query[KeyType.PATH];
                            const isLeaf = query => !isArray(query) && isObject(query) && !isExpression(query);
                            const convertToExplicit = query => ({
                                [LogicalOperator.AND]: Object.keys(query).map((key => ({
                                    [key]: query[key]
                                })))
                            });
                            function parse(query, options, {auto = true} = {}) {
                                const next = query => {
                                    let keys = Object.keys(query);
                                    const isQueryPath = isPath(query);
                                    if (!isQueryPath && keys.length > 1 && !isExpression(query)) return next(convertToExplicit(query));
                                    if (isLeaf(query)) {
                                        const key = isQueryPath ? query[KeyType.PATH] : keys[0];
                                        const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];
                                        if (!isString(pattern)) throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
                                        const obj = {
                                            keyId: createKeyId(key),
                                            pattern
                                        };
                                        if (auto) obj.searcher = createSearcher(pattern, options);
                                        return obj;
                                    }
                                    let node = {
                                        children: [],
                                        operator: keys[0]
                                    };
                                    keys.forEach((key => {
                                        const value = query[key];
                                        if (isArray(value)) value.forEach((item => {
                                            node.children.push(next(item));
                                        }));
                                    }));
                                    return node;
                                };
                                if (!isExpression(query)) query = convertToExplicit(query);
                                return next(query);
                            }
                            function computeScore(results, {ignoreFieldNorm = Config.ignoreFieldNorm}) {
                                results.forEach((result => {
                                    let totalScore = 1;
                                    result.matches.forEach((({key, norm, score}) => {
                                        const weight = key ? key.weight : null;
                                        totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm));
                                    }));
                                    result.score = totalScore;
                                }));
                            }
                            function transformMatches(result, data) {
                                const matches = result.matches;
                                data.matches = [];
                                if (!isDefined(matches)) return;
                                matches.forEach((match => {
                                    if (!isDefined(match.indices) || !match.indices.length) return;
                                    const {indices, value} = match;
                                    let obj = {
                                        indices,
                                        value
                                    };
                                    if (match.key) obj.key = match.key.src;
                                    if (match.idx > -1) obj.refIndex = match.idx;
                                    data.matches.push(obj);
                                }));
                            }
                            function transformScore(result, data) {
                                data.score = result.score;
                            }
                            function format(results, docs, {includeMatches = Config.includeMatches, includeScore = Config.includeScore} = {}) {
                                const transformers = [];
                                if (includeMatches) transformers.push(transformMatches);
                                if (includeScore) transformers.push(transformScore);
                                return results.map((result => {
                                    const {idx} = result;
                                    const data = {
                                        item: docs[idx],
                                        refIndex: idx
                                    };
                                    if (transformers.length) transformers.forEach((transformer => {
                                        transformer(result, data);
                                    }));
                                    return data;
                                }));
                            }
                            class Fuse {
                                constructor(docs, options = {}, index) {
                                    this.options = {
                                        ...Config,
                                        ...options
                                    };
                                    if (this.options.useExtendedSearch && !true) ;
                                    this._keyStore = new KeyStore(this.options.keys);
                                    this.setCollection(docs, index);
                                }
                                setCollection(docs, index) {
                                    this._docs = docs;
                                    if (index && !(index instanceof FuseIndex)) throw new Error(INCORRECT_INDEX_TYPE);
                                    this._myIndex = index || createIndex(this.options.keys, this._docs, {
                                        getFn: this.options.getFn,
                                        fieldNormWeight: this.options.fieldNormWeight
                                    });
                                }
                                add(doc) {
                                    if (!isDefined(doc)) return;
                                    this._docs.push(doc);
                                    this._myIndex.add(doc);
                                }
                                remove(predicate = (() => false)) {
                                    const results = [];
                                    for (let i = 0, len = this._docs.length; i < len; i += 1) {
                                        const doc = this._docs[i];
                                        if (predicate(doc, i)) {
                                            this.removeAt(i);
                                            i -= 1;
                                            len -= 1;
                                            results.push(doc);
                                        }
                                    }
                                    return results;
                                }
                                removeAt(idx) {
                                    this._docs.splice(idx, 1);
                                    this._myIndex.removeAt(idx);
                                }
                                getIndex() {
                                    return this._myIndex;
                                }
                                search(query, {limit = -1} = {}) {
                                    const {includeMatches, includeScore, shouldSort, sortFn, ignoreFieldNorm} = this.options;
                                    let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
                                    computeScore(results, {
                                        ignoreFieldNorm
                                    });
                                    if (shouldSort) results.sort(sortFn);
                                    if (isNumber(limit) && limit > -1) results = results.slice(0, limit);
                                    return format(results, this._docs, {
                                        includeMatches,
                                        includeScore
                                    });
                                }
                                _searchStringList(query) {
                                    const searcher = createSearcher(query, this.options);
                                    const {records} = this._myIndex;
                                    const results = [];
                                    records.forEach((({v: text, i: idx, n: norm}) => {
                                        if (!isDefined(text)) return;
                                        const {isMatch, score, indices} = searcher.searchIn(text);
                                        if (isMatch) results.push({
                                            item: text,
                                            idx,
                                            matches: [ {
                                                score,
                                                value: text,
                                                norm,
                                                indices
                                            } ]
                                        });
                                    }));
                                    return results;
                                }
                                _searchLogical(query) {
                                    const expression = parse(query, this.options);
                                    const evaluate = (node, item, idx) => {
                                        if (!node.children) {
                                            const {keyId, searcher} = node;
                                            const matches = this._findMatches({
                                                key: this._keyStore.get(keyId),
                                                value: this._myIndex.getValueForItemAtKeyId(item, keyId),
                                                searcher
                                            });
                                            if (matches && matches.length) return [ {
                                                idx,
                                                item,
                                                matches
                                            } ];
                                            return [];
                                        }
                                        const res = [];
                                        for (let i = 0, len = node.children.length; i < len; i += 1) {
                                            const child = node.children[i];
                                            const result = evaluate(child, item, idx);
                                            if (result.length) res.push(...result); else if (node.operator === LogicalOperator.AND) return [];
                                        }
                                        return res;
                                    };
                                    const records = this._myIndex.records;
                                    const resultMap = {};
                                    const results = [];
                                    records.forEach((({$: item, i: idx}) => {
                                        if (isDefined(item)) {
                                            let expResults = evaluate(expression, item, idx);
                                            if (expResults.length) {
                                                if (!resultMap[idx]) {
                                                    resultMap[idx] = {
                                                        idx,
                                                        item,
                                                        matches: []
                                                    };
                                                    results.push(resultMap[idx]);
                                                }
                                                expResults.forEach((({matches}) => {
                                                    resultMap[idx].matches.push(...matches);
                                                }));
                                            }
                                        }
                                    }));
                                    return results;
                                }
                                _searchObjectList(query) {
                                    const searcher = createSearcher(query, this.options);
                                    const {keys, records} = this._myIndex;
                                    const results = [];
                                    records.forEach((({$: item, i: idx}) => {
                                        if (!isDefined(item)) return;
                                        let matches = [];
                                        keys.forEach(((key, keyIndex) => {
                                            matches.push(...this._findMatches({
                                                key,
                                                value: item[keyIndex],
                                                searcher
                                            }));
                                        }));
                                        if (matches.length) results.push({
                                            idx,
                                            item,
                                            matches
                                        });
                                    }));
                                    return results;
                                }
                                _findMatches({key, value, searcher}) {
                                    if (!isDefined(value)) return [];
                                    let matches = [];
                                    if (isArray(value)) value.forEach((({v: text, i: idx, n: norm}) => {
                                        if (!isDefined(text)) return;
                                        const {isMatch, score, indices} = searcher.searchIn(text);
                                        if (isMatch) matches.push({
                                            score,
                                            key,
                                            value: text,
                                            idx,
                                            norm,
                                            indices
                                        });
                                    })); else {
                                        const {v: text, n: norm} = value;
                                        const {isMatch, score, indices} = searcher.searchIn(text);
                                        if (isMatch) matches.push({
                                            score,
                                            key,
                                            value: text,
                                            norm,
                                            indices
                                        });
                                    }
                                    return matches;
                                }
                            }
                            Fuse.version = "6.6.2";
                            Fuse.createIndex = createIndex;
                            Fuse.parseIndex = parseIndex;
                            Fuse.config = Config;
                            Fuse.parseQuery = parse;
                            register(ExtendedSearch);
                        },
                        791: function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_177999__) {
                            __nested_webpack_require_177999__.r(__nested_webpack_exports__);
                            __nested_webpack_require_177999__.d(__nested_webpack_exports__, {
                                __DO_NOT_USE__ActionTypes: function() {
                                    return ActionTypes;
                                },
                                applyMiddleware: function() {
                                    return applyMiddleware;
                                },
                                bindActionCreators: function() {
                                    return bindActionCreators;
                                },
                                combineReducers: function() {
                                    return combineReducers;
                                },
                                compose: function() {
                                    return compose;
                                },
                                createStore: function() {
                                    return createStore;
                                },
                                legacy_createStore: function() {
                                    return legacy_createStore;
                                }
                            });
                            function _typeof(obj) {
                                "@babel/helpers - typeof";
                                return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                                    return typeof obj;
                                } : function(obj) {
                                    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                }, _typeof(obj);
                            }
                            function _toPrimitive(input, hint) {
                                if (_typeof(input) !== "object" || input === null) return input;
                                var prim = input[Symbol.toPrimitive];
                                if (prim !== void 0) {
                                    var res = prim.call(input, hint || "default");
                                    if (_typeof(res) !== "object") return res;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return (hint === "string" ? String : Number)(input);
                            }
                            function _toPropertyKey(arg) {
                                var key = _toPrimitive(arg, "string");
                                return _typeof(key) === "symbol" ? key : String(key);
                            }
                            function _defineProperty(obj, key, value) {
                                key = _toPropertyKey(key);
                                if (key in obj) Object.defineProperty(obj, key, {
                                    value,
                                    enumerable: true,
                                    configurable: true,
                                    writable: true
                                }); else obj[key] = value;
                                return obj;
                            }
                            function ownKeys(object, enumerableOnly) {
                                var keys = Object.keys(object);
                                if (Object.getOwnPropertySymbols) {
                                    var symbols = Object.getOwnPropertySymbols(object);
                                    enumerableOnly && (symbols = symbols.filter((function(sym) {
                                        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                                    }))), keys.push.apply(keys, symbols);
                                }
                                return keys;
                            }
                            function _objectSpread2(target) {
                                for (var i = 1; i < arguments.length; i++) {
                                    var source = null != arguments[i] ? arguments[i] : {};
                                    i % 2 ? ownKeys(Object(source), !0).forEach((function(key) {
                                        _defineProperty(target, key, source[key]);
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach((function(key) {
                                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                                    }));
                                }
                                return target;
                            }
                            function formatProdErrorMessage(code) {
                                return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + "use the non-minified dev environment for full errors. ";
                            }
                            var $$observable = function() {
                                return typeof Symbol === "function" && Symbol.observable || "@@observable";
                            }();
                            var randomString = function randomString() {
                                return Math.random().toString(36).substring(7).split("").join(".");
                            };
                            var ActionTypes = {
                                INIT: "@@redux/INIT" + randomString(),
                                REPLACE: "@@redux/REPLACE" + randomString(),
                                PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
                                    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
                                }
                            };
                            function isPlainObject(obj) {
                                if (typeof obj !== "object" || obj === null) return false;
                                var proto = obj;
                                while (Object.getPrototypeOf(proto) !== null) proto = Object.getPrototypeOf(proto);
                                return Object.getPrototypeOf(obj) === proto;
                            }
                            function createStore(reducer, preloadedState, enhancer) {
                                var _ref2;
                                if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") throw new Error(true ? formatProdErrorMessage(0) : 0);
                                if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
                                    enhancer = preloadedState;
                                    preloadedState = void 0;
                                }
                                if (typeof enhancer !== "undefined") {
                                    if (typeof enhancer !== "function") throw new Error(true ? formatProdErrorMessage(1) : 0);
                                    return enhancer(createStore)(reducer, preloadedState);
                                }
                                if (typeof reducer !== "function") throw new Error(true ? formatProdErrorMessage(2) : 0);
                                var currentReducer = reducer;
                                var currentState = preloadedState;
                                var currentListeners = [];
                                var nextListeners = currentListeners;
                                var isDispatching = false;
                                function ensureCanMutateNextListeners() {
                                    if (nextListeners === currentListeners) nextListeners = currentListeners.slice();
                                }
                                function getState() {
                                    if (isDispatching) throw new Error(true ? formatProdErrorMessage(3) : 0);
                                    return currentState;
                                }
                                function subscribe(listener) {
                                    if (typeof listener !== "function") throw new Error(true ? formatProdErrorMessage(4) : 0);
                                    if (isDispatching) throw new Error(true ? formatProdErrorMessage(5) : 0);
                                    var isSubscribed = true;
                                    ensureCanMutateNextListeners();
                                    nextListeners.push(listener);
                                    return function unsubscribe() {
                                        if (!isSubscribed) return;
                                        if (isDispatching) throw new Error(true ? formatProdErrorMessage(6) : 0);
                                        isSubscribed = false;
                                        ensureCanMutateNextListeners();
                                        var index = nextListeners.indexOf(listener);
                                        nextListeners.splice(index, 1);
                                        currentListeners = null;
                                    };
                                }
                                function dispatch(action) {
                                    if (!isPlainObject(action)) throw new Error(true ? formatProdErrorMessage(7) : 0);
                                    if (typeof action.type === "undefined") throw new Error(true ? formatProdErrorMessage(8) : 0);
                                    if (isDispatching) throw new Error(true ? formatProdErrorMessage(9) : 0);
                                    try {
                                        isDispatching = true;
                                        currentState = currentReducer(currentState, action);
                                    } finally {
                                        isDispatching = false;
                                    }
                                    var listeners = currentListeners = nextListeners;
                                    for (var i = 0; i < listeners.length; i++) {
                                        var listener = listeners[i];
                                        listener();
                                    }
                                    return action;
                                }
                                function replaceReducer(nextReducer) {
                                    if (typeof nextReducer !== "function") throw new Error(true ? formatProdErrorMessage(10) : 0);
                                    currentReducer = nextReducer;
                                    dispatch({
                                        type: ActionTypes.REPLACE
                                    });
                                }
                                function observable() {
                                    var _ref;
                                    var outerSubscribe = subscribe;
                                    return _ref = {
                                        subscribe: function subscribe(observer) {
                                            if (typeof observer !== "object" || observer === null) throw new Error(true ? formatProdErrorMessage(11) : 0);
                                            function observeState() {
                                                if (observer.next) observer.next(getState());
                                            }
                                            observeState();
                                            var unsubscribe = outerSubscribe(observeState);
                                            return {
                                                unsubscribe
                                            };
                                        }
                                    }, _ref[$$observable] = function() {
                                        return this;
                                    }, _ref;
                                }
                                dispatch({
                                    type: ActionTypes.INIT
                                });
                                return _ref2 = {
                                    dispatch,
                                    subscribe,
                                    getState,
                                    replaceReducer
                                }, _ref2[$$observable] = observable, _ref2;
                            }
                            var legacy_createStore = createStore;
                            function assertReducerShape(reducers) {
                                Object.keys(reducers).forEach((function(key) {
                                    var reducer = reducers[key];
                                    var initialState = reducer(void 0, {
                                        type: ActionTypes.INIT
                                    });
                                    if (typeof initialState === "undefined") throw new Error(true ? formatProdErrorMessage(12) : 0);
                                    if (typeof reducer(void 0, {
                                        type: ActionTypes.PROBE_UNKNOWN_ACTION()
                                    }) === "undefined") throw new Error(true ? formatProdErrorMessage(13) : 0);
                                }));
                            }
                            function combineReducers(reducers) {
                                var reducerKeys = Object.keys(reducers);
                                var finalReducers = {};
                                for (var i = 0; i < reducerKeys.length; i++) {
                                    var key = reducerKeys[i];
                                    if (false) ;
                                    if (typeof reducers[key] === "function") finalReducers[key] = reducers[key];
                                }
                                var finalReducerKeys = Object.keys(finalReducers);
                                if (false) ;
                                var shapeAssertionError;
                                try {
                                    assertReducerShape(finalReducers);
                                } catch (e) {
                                    shapeAssertionError = e;
                                }
                                return function combination(state, action) {
                                    if (state === void 0) state = {};
                                    if (shapeAssertionError) throw shapeAssertionError;
                                    if (false) ;
                                    var hasChanged = false;
                                    var nextState = {};
                                    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
                                        var _key = finalReducerKeys[_i];
                                        var reducer = finalReducers[_key];
                                        var previousStateForKey = state[_key];
                                        var nextStateForKey = reducer(previousStateForKey, action);
                                        if (typeof nextStateForKey === "undefined") {
                                            action && action.type;
                                            throw new Error(true ? formatProdErrorMessage(14) : 0);
                                        }
                                        nextState[_key] = nextStateForKey;
                                        hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
                                    }
                                    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
                                    return hasChanged ? nextState : state;
                                };
                            }
                            function bindActionCreator(actionCreator, dispatch) {
                                return function() {
                                    return dispatch(actionCreator.apply(this, arguments));
                                };
                            }
                            function bindActionCreators(actionCreators, dispatch) {
                                if (typeof actionCreators === "function") return bindActionCreator(actionCreators, dispatch);
                                if (typeof actionCreators !== "object" || actionCreators === null) throw new Error(true ? formatProdErrorMessage(16) : 0);
                                var boundActionCreators = {};
                                for (var key in actionCreators) {
                                    var actionCreator = actionCreators[key];
                                    if (typeof actionCreator === "function") boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
                                }
                                return boundActionCreators;
                            }
                            function compose() {
                                for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) funcs[_key] = arguments[_key];
                                if (funcs.length === 0) return function(arg) {
                                    return arg;
                                };
                                if (funcs.length === 1) return funcs[0];
                                return funcs.reduce((function(a, b) {
                                    return function() {
                                        return a(b.apply(void 0, arguments));
                                    };
                                }));
                            }
                            function applyMiddleware() {
                                for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) middlewares[_key] = arguments[_key];
                                return function(createStore) {
                                    return function() {
                                        var store = createStore.apply(void 0, arguments);
                                        var _dispatch = function dispatch() {
                                            throw new Error(true ? formatProdErrorMessage(15) : 0);
                                        };
                                        var middlewareAPI = {
                                            getState: store.getState,
                                            dispatch: function dispatch() {
                                                return _dispatch.apply(void 0, arguments);
                                            }
                                        };
                                        var chain = middlewares.map((function(middleware) {
                                            return middleware(middlewareAPI);
                                        }));
                                        _dispatch = compose.apply(void 0, chain)(store.dispatch);
                                        return _objectSpread2(_objectSpread2({}, store), {}, {
                                            dispatch: _dispatch
                                        });
                                    };
                                };
                            }
                            if (false) ;
                        }
                    };
                    var __webpack_module_cache__ = {};
                    function __nested_webpack_require_204296__(moduleId) {
                        var cachedModule = __webpack_module_cache__[moduleId];
                        if (cachedModule !== void 0) return cachedModule.exports;
                        var module = __webpack_module_cache__[moduleId] = {
                            exports: {}
                        };
                        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_204296__);
                        return module.exports;
                    }
                    !function() {
                        __nested_webpack_require_204296__.n = function(module) {
                            var getter = module && module.__esModule ? function() {
                                return module["default"];
                            } : function() {
                                return module;
                            };
                            __nested_webpack_require_204296__.d(getter, {
                                a: getter
                            });
                            return getter;
                        };
                    }();
                    !function() {
                        __nested_webpack_require_204296__.d = function(exports, definition) {
                            for (var key in definition) if (__nested_webpack_require_204296__.o(definition, key) && !__nested_webpack_require_204296__.o(exports, key)) Object.defineProperty(exports, key, {
                                enumerable: true,
                                get: definition[key]
                            });
                        };
                    }();
                    !function() {
                        __nested_webpack_require_204296__.o = function(obj, prop) {
                            return Object.prototype.hasOwnProperty.call(obj, prop);
                        };
                    }();
                    !function() {
                        __nested_webpack_require_204296__.r = function(exports) {
                            if (typeof Symbol !== "undefined" && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
                                value: "Module"
                            });
                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                        };
                    }();
                    var __nested_webpack_exports__ = {};
                    !function() {
                        var _scripts_choices__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_204296__(373);
                        var _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default = __nested_webpack_require_204296__.n(_scripts_choices__WEBPACK_IMPORTED_MODULE_0__);
                        var _scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_204296__(187);
                        __nested_webpack_require_204296__.n(_scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__);
                        __nested_webpack_require_204296__(883);
                        __nested_webpack_require_204296__(789);
                        __nested_webpack_require_204296__(686);
                        __nested_webpack_exports__["default"] = _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default();
                    }();
                    __nested_webpack_exports__ = __nested_webpack_exports__["default"];
                    return __nested_webpack_exports__;
                }();
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let bodyLockStatus = true;
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        const Method = {
            GET: "GET",
            POST: "POST",
            PUT: "PUT",
            DELETE: "DELETE"
        };
        const headers = new Headers;
        headers.append("X-Requested-With", "XMLHttpRequest");
        new DOMParser;
        const checkStatus = response => {
            if (!response.ok) throw Error(response.statusText);
            return response;
        };
        const extractIn = (response, format = "json") => {
            const formats = {
                json: () => response.json(),
                text: () => response.text(),
                formData: () => response.formData(),
                blob: () => response.blob()
            };
            if (format in formats) return formats[format]();
            return console.error("there is no such format");
        };
        const showStatus = status => {
            const activeModal = document.querySelector(".popup_show");
            if (activeModal) {
                const closeBtn = activeModal.querySelector(".popup__close");
                const event = new Event("click");
                closeBtn.dispatchEvent(event);
            }
            flsModules.popup.open("#status-template");
        };
        const request = async ({url, body = null, method = Method.GET}, format, cb = showStatus) => {
            try {
                const response = await fetch(url, {
                    method,
                    body,
                    headers
                });
                if (response.redirected) {
                    window.location.href = response.url;
                    return;
                }
                const status = await checkStatus(response);
                const data = await extractIn(status, format);
                if (cb) return cb(data);
                return data;
            } catch (err) {
                showStatus(err);
                return console.error(err);
            }
        };
        const api = {
            load({url, format, cb}) {
                return request({
                    url
                }, format, cb);
            },
            upload({url, body, boolean, format, cb}) {
                if (!boolean) headers.append("Content-Type", "application/x-www-form-urlencoded");
                return request({
                    url,
                    method: Method.POST,
                    body,
                    headers
                }, format, cb);
            }
        };
        function formFieldsInit(options = {
            viewPass: false,
            autoHeight: false
        }) {
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                    targetElement.hasAttribute("data-validate") ? formValidate.removeError(targetElement) : null;
                }
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    targetElement.hasAttribute("data-validate") ? formValidate.validateInput(targetElement) : null;
                }
            }));
            if (options.viewPass) document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
            if (options.autoHeight) {
                const textareas = document.querySelectorAll("textarea[data-autoheight]");
                if (textareas.length) {
                    textareas.forEach((textarea => {
                        const startHeight = textarea.hasAttribute("data-autoheight-min") ? Number(textarea.dataset.autoheightMin) : Number(textarea.offsetHeight);
                        const maxHeight = textarea.hasAttribute("data-autoheight-max") ? Number(textarea.dataset.autoheightMax) : 1 / 0;
                        setHeight(textarea, Math.min(startHeight, maxHeight));
                        textarea.addEventListener("input", (() => {
                            if (textarea.scrollHeight > startHeight) {
                                textarea.style.height = `auto`;
                                setHeight(textarea, Math.min(Math.max(textarea.scrollHeight, startHeight), maxHeight));
                            }
                        }));
                    }));
                    function setHeight(textarea, height) {
                        textarea.style.height = `${height}px`;
                    }
                }
            }
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.required === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if (formRequiredItem.dataset.required === "tel") if (!this.phoneTest(formRequiredItem)) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem); else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            },
            phoneTest(formRequiredItem) {
                const phoneNumberPattern = /^\+7 \([1-9]\d{2}\) [1-9]\d{2}-[1-9]\d{3}$/;
                return phoneNumberPattern.test(formRequiredItem.value);
            }
        };
        function formSubmit() {
            document.addEventListener("submit", (function(e) {
                const form = e.target;
                formSubmitAction(form, e);
            }));
            document.addEventListener("reset", (function(e) {
                const form = e.target;
                formValidate.formClean(form);
            }));
            async function formSubmitAction(form, e) {
                const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                if (error === 0) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        e.preventDefault();
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        console.log(formMethod);
                        form.classList.add("_sending");
                        if (formMethod === "GET") api.load({
                            url: formAction,
                            method: formMethod,
                            format: "text",
                            cb: response => {
                                formSent(form, response);
                            }
                        }); else api.upload({
                            url: formAction,
                            method: formMethod,
                            body: formData,
                            cb: response => {
                                formSent(form, response);
                            }
                        });
                    }
                } else {
                    e.preventDefault();
                    if (form.querySelector("._form-error") && form.hasAttribute("data-goto-error")) {
                        form.dataset.gotoError && form.dataset.gotoError;
                    }
                }
            }
            function formSent(form, responseResult = ``) {
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (flsModules.popup) {
                        const popupSelector = form.dataset.popupMessage;
                        const activeModal = document.querySelector(".popup_show");
                        if (activeModal) flsModules.popup.close(activeModal, 100);
                        const popup = document.querySelector(popupSelector);
                        if (popup) flsModules.popup.open(popupSelector); else {
                            const parser = new DOMParser;
                            const response = parser.parseFromString(responseResult, "text/html");
                            const el = response.body.querySelector(popupSelector);
                            document.body.appendChild(el);
                            setTimeout((() => {
                                flsModules.popup.open(popupSelector);
                            }), 110);
                        }
                    }
                }), 0);
                formValidate.formClean(form);
            }
        }
        function isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target, src) {
            if (target === void 0) target = {};
            if (src === void 0) src = {};
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function utils_classesToTokens(classes) {
            if (classes === void 0) classes = "";
            return classes.trim().split(" ").filter((c => !!c.trim()));
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (delay === void 0) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (axis === void 0) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_elementChildren(element, selector) {
            if (selector === void 0) selector = "";
            return [ ...element.children ].filter((el => el.matches(selector)));
        }
        function showWarning(text) {
            try {
                console.warn(text);
                return;
            } catch (err) {}
        }
        function utils_createElement(tag, classes) {
            if (classes === void 0) classes = [];
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : utils_classesToTokens(classes));
            return el;
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        function utils_makeElementsArray(el) {
            return (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = _temp === void 0 ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (overrides === void 0) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            const device = getDevice();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
            const isSafariBrowser = isSafari();
            const need3dFix = isSafariBrowser || isWebView && device.ios;
            return {
                isSafari: needPerspectiveFix || isSafariBrowser,
                needPerspectiveFix,
                need3dFix,
                isWebView
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (options === void 0) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: typeof options.childList === "undefined" ? true : options.childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.hostEl);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.hostEl, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        var eventsEmitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slides); else if (swiper.grid) swiper.grid.unsetSlides();
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slides);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[swiper.getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? elementOuterSize(slide, "width", true) : elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap <= 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
                if (allSlidesSize + offsetSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            swiper.emit("slidesUpdated");
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
        const toggleSlideClasses$1 = (slideEl, condition, className) => {
            if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className); else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
        };
        function updateSlidesProgress(translate) {
            if (translate === void 0) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            let spaceBetween = params.spaceBetween;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                }
                toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
                toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndexByData(0);
                const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        const toggleSlideClasses = (slideEl, condition, className) => {
            if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className); else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
        };
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            let activeSlide;
            let prevSlide;
            let nextSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else if (gridEnabled) {
                activeSlide = slides.filter((slideEl => slideEl.column === activeIndex))[0];
                nextSlide = slides.filter((slideEl => slideEl.column === activeIndex + 1))[0];
                prevSlide = slides.filter((slideEl => slideEl.column === activeIndex - 1))[0];
            } else activeSlide = slides[activeIndex];
            if (activeSlide) if (!gridEnabled) {
                nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !nextSlide) nextSlide = slides[0];
                prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
            }
            slides.forEach((slideEl => {
                toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
                toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
                toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
            }));
            swiper.emitSlidesClasses();
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (!lazyEl && swiper.isElement) if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`); else requestAnimationFrame((() => {
                    if (slideEl.shadowRoot) {
                        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                        if (lazyEl) lazyEl.remove();
                    }
                }));
                if (lazyEl) lazyEl.remove();
            }
        };
        const unlazy = (swiper, index) => {
            if (!swiper.slides[index]) return;
            const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
            if (imageEl) imageEl.removeAttribute("loading");
        };
        const preload = swiper => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            let amount = swiper.params.lazyPreloadPrevNext;
            const len = swiper.slides.length;
            if (!len || !amount || amount < 0) return;
            amount = Math.min(amount, len);
            const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
            const activeIndex = swiper.activeIndex;
            if (swiper.params.grid && swiper.params.grid.rows > 1) {
                const activeColumn = activeIndex;
                const preloadColumns = [ activeColumn - amount ];
                preloadColumns.push(...Array.from({
                    length: amount
                }).map(((_, i) => activeColumn + slidesPerView + i)));
                swiper.slides.forEach(((slideEl, i) => {
                    if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
                }));
                return;
            }
            const slideIndexLastInView = activeIndex + slidesPerView - 1;
            if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
        };
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex && !swiper.params.loop) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
                swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (gridEnabled) {
                const firstSlideInColumn = swiper.slides.filter((slideEl => slideEl.column === activeIndex))[0];
                let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
                if (Number.isNaN(activeSlideIndex)) activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
                realIndex = Math.floor(activeSlideIndex / params.grid.rows);
            } else if (swiper.slides[activeIndex]) {
                const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
                if (slideIndex) realIndex = parseInt(slideIndex, 10); else realIndex = activeIndex;
            } else realIndex = activeIndex;
            Object.assign(swiper, {
                previousSnapIndex,
                snapIndex,
                previousRealIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            if (swiper.initialized) preload(swiper);
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) {
                if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
                swiper.emit("slideChange");
            }
        }
        function updateClickedSlide(el, path) {
            const swiper = this;
            const params = swiper.params;
            let slide = el.closest(`.${params.slideClass}, swiper-slide`);
            if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) [ ...path.slice(path.indexOf(el) + 1, path.length) ].forEach((pathEl => {
                if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide = pathEl;
            }));
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        var update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            currentTranslate += swiper.cssOverflowAdjustment();
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            }
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (translate === void 0) translate = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (translateBounds === void 0) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        swiper.animating = false;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        var translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) {
                swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
                swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
            }
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        var transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (index === void 0) index = 0;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) return false;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (index === void 0) index = 0;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            if (swiper.destroyed) return;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else {
                let targetSlideIndex;
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    targetSlideIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
                } else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
                const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
                const {centeredSlides} = swiper.params;
                let slidesPerView = swiper.params.slidesPerView;
                if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                    slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                    if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
                }
                let needLoopFix = cols - targetSlideIndex < slidesPerView;
                if (centeredSlides) needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
                if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) needLoopFix = false;
                if (needLoopFix) {
                    const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
                    swiper.loopFix({
                        direction,
                        slideTo: true,
                        activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                        slideRealIndex: direction === "next" ? swiper.realIndex : void 0
                    });
                }
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    newIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
                } else newIndex = swiper.getSlideIndexByData(newIndex);
            }
            requestAnimationFrame((() => {
                swiper.slideTo(newIndex, speed, runCallbacks, internal);
            }));
            return swiper;
        }
        function slideNext(speed, runCallbacks, internal) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled || swiper.destroyed) return swiper;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
                if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
                    requestAnimationFrame((() => {
                        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
                    }));
                    return true;
                }
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled || swiper.destroyed) return swiper;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
                requestAnimationFrame((() => {
                    swiper.slideTo(prevIndex, speed, runCallbacks, internal);
                }));
                return true;
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            if (swiper.destroyed) return;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (runCallbacks === void 0) runCallbacks = true;
            if (threshold === void 0) threshold = .5;
            const swiper = this;
            if (swiper.destroyed) return;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            if (swiper.destroyed) return;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        var slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const initSlides = () => {
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                slides.forEach(((el, index) => {
                    el.setAttribute("data-swiper-slide-index", index);
                }));
            };
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
            const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
            const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
            const addBlankSlides = amountOfSlides => {
                for (let i = 0; i < amountOfSlides; i += 1) {
                    const slideEl = swiper.isElement ? utils_createElement("swiper-slide", [ params.slideBlankClass ]) : utils_createElement("div", [ params.slideClass, params.slideBlankClass ]);
                    swiper.slidesEl.append(slideEl);
                }
            };
            if (shouldFillGroup) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else if (shouldFillGrid) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else initSlides();
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix(_temp) {
            let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            const {centeredSlides} = params;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            let slidesPerView = params.slidesPerView;
            if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
                if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
            }
            const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
            let loopedSlides = slidesPerGroup;
            if (loopedSlides % slidesPerGroup !== 0) loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
            loopedSlides += params.loopAdditionalSlides;
            swiper.loopedSlides = loopedSlides;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            if (slides.length < slidesPerView + loopedSlides) showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"); else if (gridEnabled && params.grid.fill === "row") showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
            const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
            const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === "undefined" ? -slidesPerView / 2 + .5 : 0);
            if (activeColIndexWithShift < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) {
                        const colIndexToPrepend = cols - index - 1;
                        for (let i = slides.length - 1; i >= 0; i -= 1) if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
                    } else prependSlidesIndexes.push(cols - index - 1);
                }
            } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
                slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) slides.forEach(((slide, slideIndex) => {
                        if (slide.column === index) appendSlidesIndexes.push(slideIndex);
                    })); else appendSlidesIndexes.push(index);
                }
            }
            swiper.__preventObserver__ = true;
            requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
            if (isPrev) prependSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides(); else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) swiper.slides.forEach(((slide, slideIndex) => {
                swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
            }));
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
                        if (setTranslate) {
                            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                        }
                    }
                } else if (setTranslate) {
                    const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                    swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                    swiper.touchEventsData.currentTranslate = swiper.translate;
                }
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else {
                const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix({
                        ...loopParams,
                        slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                    });
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
                    ...loopParams,
                    slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
                });
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        var loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        var grabCursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (base === void 0) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function preventEdgeSwipe(swiper, event, startX) {
            const window = ssr_window_esm_getWindow();
            const {params} = swiper;
            const edgeSwipeDetection = params.edgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
                if (edgeSwipeDetection === "prevent") {
                    event.preventDefault();
                    return true;
                }
                return false;
            }
            return true;
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            const data = swiper.touchEventsData;
            if (e.type === "pointerdown") {
                if (data.pointerId !== null && data.pointerId !== e.pointerId) return;
                data.pointerId = e.pointerId;
            } else if (e.type === "touchstart" && e.targetTouches.length === 1) data.touchId = e.targetTouches[0].identifier;
            if (e.type === "touchstart") {
                preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
                return;
            }
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = e.composedPath ? e.composedPath() : e.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            if (!preventEdgeSwipe(swiper, e, startX)) return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (e.type === "pointermove") {
                if (data.touchId !== null) return;
                const id = e.pointerId;
                if (id !== data.pointerId) return;
            }
            let targetTouch;
            if (e.type === "touchmove") {
                targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            } else targetTouch = e;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            touches.previousX = touches.currentX;
            touches.previousY = touches.currentY;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
            if (!data.isMoved) {
                if (isLoop && allowLoopFix) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true,
                        detail: {
                            bySwiperTouchMove: true
                        }
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            (new Date).getTime();
            if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
                Object.assign(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY,
                    startTranslate: data.currentTranslate
                });
                data.loopSwapReset = true;
                data.startTranslate = data.currentTranslate;
                return;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetTouch;
            const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
            if (!isTouchEvent) {
                if (data.touchId !== null) return;
                if (e.pointerId !== data.pointerId) return;
                targetTouch = e;
            } else {
                targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            }
            if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(e.type)) {
                const proceed = [ "pointercancel", "contextmenu" ].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            data.pointerId = null;
            data.touchId = null;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (swipeToLast || currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(swiper.autoplay.resizeTimeout);
                swiper.autoplay.resizeTimeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
            swiper.update();
        }
        function onDocumentTouchStart() {
            const swiper = this;
            if (swiper.documentTouchHandlerProceeded) return;
            swiper.documentTouchHandlerProceeded = true;
            if (swiper.params.touchReleaseOnEdges) swiper.el.style.touchAction = "auto";
        }
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            document[domMethod]("touchstart", swiper.onDocumentTouchStart, {
                passive: false,
                capture
            });
            el[domMethod]("touchstart", swiper.onTouchStart, {
                passive: false
            });
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("touchmove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("touchend", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("touchcancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("contextmenu", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        var events$1 = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasGrabCursor = swiper.params.grabCursor;
            const isGrabCursor = breakpointParams.grabCursor;
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            if (wasGrabCursor && !isGrabCursor) swiper.unsetGrabCursor(); else if (!wasGrabCursor && isGrabCursor) swiper.setGrabCursor();
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                if (typeof breakpointParams[prop] === "undefined") return;
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            const wasLoop = params.loop;
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            const hasLoop = swiper.params.loop;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (initialized) if (needsReLoop) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (!wasLoop && hasLoop) {
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (wasLoop && !hasLoop) swiper.loopDestroy();
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (base === void 0) base = "window";
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        var breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function swiper_core_addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function swiper_core_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        var classes = {
            addClasses: swiper_core_addClasses,
            removeClasses: swiper_core_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        var checkOverflow$1 = {
            checkOverflow
        };
        var defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            swiperElementNodeName: "SWIPER-CONTAINER",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            eventsPrefix: "swiper",
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopAddBlankSlides: true,
            loopAdditionalSlides: 0,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-blank",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideFullyVisibleClass: "swiper-slide-fully-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (obj === void 0) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
                if ([ "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor,
            events: events$1,
            breakpoints,
            checkOverflow: checkOverflow$1,
            classes
        };
        const extendedDefaults = {};
        class Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        pointerId: null,
                        touchId: null
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getDirectionLabel(property) {
                if (this.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = elementIndex(slides[0]);
                return elementIndex(slideEl) - firstSlideIndex;
            }
            getSlideIndexByData(index) {
                return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (view === void 0) view = "current";
                if (exact === void 0) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (typeof params.slidesPerView === "number") return params.slidesPerView;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += Math.ceil(slides[i].swiperSlideSize);
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                    setTranslate();
                    if (params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (needUpdate === void 0) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                    hostEl: swiper.isElement ? el.parentNode.host : el,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                const lazyElements = [ ...swiper.el.querySelectorAll('[loading="lazy"]') ];
                if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
                lazyElements.forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (deleteInstance === void 0) deleteInstance = true;
                if (cleanStyles === void 0) cleanStyles = true;
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    el.removeAttribute("style");
                    wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
                const modules = Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => Swiper.installModule(m)));
                    return Swiper;
                }
                Swiper.installModule(module);
                return Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        Swiper.use([ Resize, Observer ]);
        function Mousewheel(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            extendParams({
                mousewheel: {
                    enabled: false,
                    releaseOnEdges: false,
                    invert: false,
                    forceToAxis: false,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null,
                    noMousewheelClass: "swiper-no-mousewheel"
                }
            });
            swiper.mousewheel = {
                enabled: false
            };
            let timeout;
            let lastScrollTime = utils_now();
            let lastEventBeforeSnap;
            const recentWheelEvents = [];
            function normalize(e) {
                const PIXEL_STEP = 10;
                const LINE_HEIGHT = 40;
                const PAGE_HEIGHT = 800;
                let sX = 0;
                let sY = 0;
                let pX = 0;
                let pY = 0;
                if ("detail" in e) sY = e.detail;
                if ("wheelDelta" in e) sY = -e.wheelDelta / 120;
                if ("wheelDeltaY" in e) sY = -e.wheelDeltaY / 120;
                if ("wheelDeltaX" in e) sX = -e.wheelDeltaX / 120;
                if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
                    sX = sY;
                    sY = 0;
                }
                pX = sX * PIXEL_STEP;
                pY = sY * PIXEL_STEP;
                if ("deltaY" in e) pY = e.deltaY;
                if ("deltaX" in e) pX = e.deltaX;
                if (e.shiftKey && !pX) {
                    pX = pY;
                    pY = 0;
                }
                if ((pX || pY) && e.deltaMode) if (e.deltaMode === 1) {
                    pX *= LINE_HEIGHT;
                    pY *= LINE_HEIGHT;
                } else {
                    pX *= PAGE_HEIGHT;
                    pY *= PAGE_HEIGHT;
                }
                if (pX && !sX) sX = pX < 1 ? -1 : 1;
                if (pY && !sY) sY = pY < 1 ? -1 : 1;
                return {
                    spinX: sX,
                    spinY: sY,
                    pixelX: pX,
                    pixelY: pY
                };
            }
            function handleMouseEnter() {
                if (!swiper.enabled) return;
                swiper.mouseEntered = true;
            }
            function handleMouseLeave() {
                if (!swiper.enabled) return;
                swiper.mouseEntered = false;
            }
            function animateSlider(newEvent) {
                if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) return false;
                if (swiper.params.mousewheel.thresholdTime && utils_now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) return false;
                if (newEvent.delta >= 6 && utils_now() - lastScrollTime < 60) return true;
                if (newEvent.direction < 0) {
                    if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                        swiper.slideNext();
                        emit("scroll", newEvent.raw);
                    }
                } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                    swiper.slidePrev();
                    emit("scroll", newEvent.raw);
                }
                lastScrollTime = (new window.Date).getTime();
                return false;
            }
            function releaseScroll(newEvent) {
                const params = swiper.params.mousewheel;
                if (newEvent.direction < 0) {
                    if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) return true;
                } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) return true;
                return false;
            }
            function handle(event) {
                let e = event;
                let disableParentSwiper = true;
                if (!swiper.enabled) return;
                if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
                const params = swiper.params.mousewheel;
                if (swiper.params.cssMode) e.preventDefault();
                let targetEl = swiper.el;
                if (swiper.params.mousewheel.eventsTarget !== "container") targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
                const targetElContainsTarget = targetEl && targetEl.contains(e.target);
                if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
                if (e.originalEvent) e = e.originalEvent;
                let delta = 0;
                const rtlFactor = swiper.rtlTranslate ? -1 : 1;
                const data = normalize(e);
                if (params.forceToAxis) if (swiper.isHorizontal()) if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor; else return true; else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY; else return true; else delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
                if (delta === 0) return true;
                if (params.invert) delta = -delta;
                let positions = swiper.getTranslate() + delta * params.sensitivity;
                if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
                if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
                disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
                if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
                if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
                    const newEvent = {
                        time: utils_now(),
                        delta: Math.abs(delta),
                        direction: Math.sign(delta),
                        raw: event
                    };
                    if (recentWheelEvents.length >= 2) recentWheelEvents.shift();
                    const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
                    recentWheelEvents.push(newEvent);
                    if (prevEvent) {
                        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) animateSlider(newEvent);
                    } else animateSlider(newEvent);
                    if (releaseScroll(newEvent)) return true;
                } else {
                    const newEvent = {
                        time: utils_now(),
                        delta: Math.abs(delta),
                        direction: Math.sign(delta)
                    };
                    const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
                    if (!ignoreWheelEvents) {
                        lastEventBeforeSnap = void 0;
                        let position = swiper.getTranslate() + delta * params.sensitivity;
                        const wasBeginning = swiper.isBeginning;
                        const wasEnd = swiper.isEnd;
                        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                        swiper.setTransition(0);
                        swiper.setTranslate(position);
                        swiper.updateProgress();
                        swiper.updateActiveIndex();
                        swiper.updateSlidesClasses();
                        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) swiper.updateSlidesClasses();
                        if (swiper.params.loop) swiper.loopFix({
                            direction: newEvent.direction < 0 ? "next" : "prev",
                            byMousewheel: true
                        });
                        if (swiper.params.freeMode.sticky) {
                            clearTimeout(timeout);
                            timeout = void 0;
                            if (recentWheelEvents.length >= 15) recentWheelEvents.shift();
                            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
                            const firstEvent = recentWheelEvents[0];
                            recentWheelEvents.push(newEvent);
                            if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) recentWheelEvents.splice(0); else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                                const snapToThreshold = delta > 0 ? .8 : .2;
                                lastEventBeforeSnap = newEvent;
                                recentWheelEvents.splice(0);
                                timeout = utils_nextTick((() => {
                                    swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
                                }), 0);
                            }
                            if (!timeout) timeout = utils_nextTick((() => {
                                const snapToThreshold = .5;
                                lastEventBeforeSnap = newEvent;
                                recentWheelEvents.splice(0);
                                swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
                            }), 500);
                        }
                        if (!ignoreWheelEvents) emit("scroll", e);
                        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
                        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) return true;
                    }
                }
                if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
                return false;
            }
            function events(method) {
                let targetEl = swiper.el;
                if (swiper.params.mousewheel.eventsTarget !== "container") targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
                targetEl[method]("mouseenter", handleMouseEnter);
                targetEl[method]("mouseleave", handleMouseLeave);
                targetEl[method]("wheel", handle);
            }
            function enable() {
                if (swiper.params.cssMode) {
                    swiper.wrapperEl.removeEventListener("wheel", handle);
                    return true;
                }
                if (swiper.mousewheel.enabled) return false;
                events("addEventListener");
                swiper.mousewheel.enabled = true;
                return true;
            }
            function disable() {
                if (swiper.params.cssMode) {
                    swiper.wrapperEl.addEventListener(event, handle);
                    return true;
                }
                if (!swiper.mousewheel.enabled) return false;
                events("removeEventListener");
                swiper.mousewheel.enabled = false;
                return true;
            }
            on("init", (() => {
                if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) disable();
                if (swiper.params.mousewheel.enabled) enable();
            }));
            on("destroy", (() => {
                if (swiper.params.cssMode) enable();
                if (swiper.mousewheel.enabled) disable();
            }));
            Object.assign(swiper.mousewheel, {
                enable,
                disable
            });
        }
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                prevEl: null
            };
            function getEl(el) {
                let res;
                if (el && typeof el === "string" && swiper.isElement) {
                    res = swiper.el.querySelector(el);
                    if (res) return res;
                }
                if (el) {
                    if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                    if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el); else if (res && res.length === 1) res = res[0];
                }
                if (el && !res) return el;
                return res;
            }
            function toggleEl(el, disabled) {
                const params = swiper.params.navigation;
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    if (subEl) {
                        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }));
            }
            function update() {
                const {nextEl, prevEl} = swiper.navigation;
                if (swiper.params.loop) {
                    toggleEl(prevEl, false);
                    toggleEl(nextEl, false);
                    return;
                }
                toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                let nextEl = getEl(params.nextEl);
                let prevEl = getEl(params.prevEl);
                Object.assign(swiper.navigation, {
                    nextEl,
                    prevEl
                });
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const initButton = (el, dir) => {
                    if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                };
                nextEl.forEach((el => initButton(el, "next")));
                prevEl.forEach((el => initButton(el, "prev")));
            }
            function destroy() {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const destroyButton = (el, dir) => {
                    el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                };
                nextEl.forEach((el => destroyButton(el, "next")));
                prevEl.forEach((el => destroyButton(el, "prev")));
            }
            on("init", (() => {
                if (swiper.params.navigation.enabled === false) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                if (swiper.enabled) {
                    update();
                    return;
                }
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.add(swiper.params.navigation.lockClass)));
            }));
            on("click", ((_s, e) => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                init();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function classes_to_selector_classesToSelector(classes) {
            if (classes === void 0) classes = "";
            return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                    paginationDisabledClass: `${pfx}-disabled`
                }
            });
            swiper.pagination = {
                el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
            }
            function setSideBullets(bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                if (!bulletEl) return;
                bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                if (bulletEl) {
                    bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                    if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
                }
            }
            function onBulletClick(e) {
                const bulletEl = e.target.closest(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass));
                if (!bulletEl) return;
                e.preventDefault();
                const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
                if (swiper.params.loop) {
                    if (swiper.realIndex === index) return;
                    swiper.slideToLoop(index);
                } else swiper.slideTo(index);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                el = utils_makeElementsArray(el);
                let current;
                let previousIndex;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    previousIndex = swiper.previousRealIndex || 0;
                    current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
                } else if (typeof swiper.snapIndex !== "undefined") {
                    current = swiper.snapIndex;
                    previousIndex = swiper.previousSnapIndex;
                } else {
                    previousIndex = swiper.previousIndex || 0;
                    current = swiper.activeIndex || 0;
                }
                if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                        el.forEach((subEl => {
                            subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                        }));
                        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
                            dynamicBulletIndex += current - (previousIndex || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.forEach((bulletEl => {
                        const classesToRemove = [ ...[ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)) ].map((s => typeof s === "string" && s.includes(" ") ? s.split(" ") : s)).flat();
                        bulletEl.classList.remove(...classesToRemove);
                    }));
                    if (el.length > 1) bullets.forEach((bullet => {
                        const bulletIndex = elementIndex(bullet);
                        if (bulletIndex === current) bullet.classList.add(...params.bulletActiveClass.split(" ")); else if (swiper.isElement) bullet.setAttribute("part", "bullet");
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            if (bulletIndex === firstIndex) setSideBullets(bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets(bullet, "next");
                        }
                    })); else {
                        const bullet = bullets[current];
                        if (bullet) bullet.classList.add(...params.bulletActiveClass.split(" "));
                        if (swiper.isElement) bullets.forEach(((bulletEl, bulletIndex) => {
                            bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
                        }));
                        if (params.dynamicBullets) {
                            const firstDisplayedBullet = bullets[firstIndex];
                            const lastDisplayedBullet = bullets[lastIndex];
                            for (let i = firstIndex; i <= lastIndex; i += 1) if (bullets[i]) bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            setSideBullets(firstDisplayedBullet, "prev");
                            setSideBullets(lastDisplayedBullet, "next");
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.forEach((bullet => {
                            bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                        }));
                    }
                }
                el.forEach(((subEl, subElIndex) => {
                    if (params.type === "fraction") {
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.currentClass)).forEach((fractionEl => {
                            fractionEl.textContent = params.formatFractionCurrent(current + 1);
                        }));
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.totalClass)).forEach((totalEl => {
                            totalEl.textContent = params.formatFractionTotal(total);
                        }));
                    }
                    if (params.type === "progressbar") {
                        let progressbarDirection;
                        if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                        const scale = (current + 1) / total;
                        let scaleX = 1;
                        let scaleY = 1;
                        if (progressbarDirection === "horizontal") scaleX = scale; else scaleY = scale;
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.progressbarFillClass)).forEach((progressEl => {
                            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                            progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                        }));
                    }
                    if (params.type === "custom" && params.renderCustom) {
                        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                        if (subElIndex === 0) emit("paginationRender", subEl);
                    } else {
                        if (subElIndex === 0) emit("paginationRender", subEl);
                        emit("paginationUpdate", subEl);
                    }
                    if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                }));
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
                let el = swiper.pagination.el;
                el = utils_makeElementsArray(el);
                let paginationHTML = "";
                if (params.type === "bullets") {
                    let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
                }
                if (params.type === "fraction") if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                if (params.type === "progressbar") if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                swiper.pagination.bullets = [];
                el.forEach((subEl => {
                    if (params.type !== "custom") subEl.innerHTML = paginationHTML || "";
                    if (params.type === "bullets") swiper.pagination.bullets.push(...subEl.querySelectorAll(classes_to_selector_classesToSelector(params.bulletClass)));
                }));
                if (params.type !== "custom") emit("paginationRender", el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let el;
                if (typeof params.el === "string" && swiper.isElement) el = swiper.el.querySelector(params.el);
                if (!el && typeof params.el === "string") el = [ ...document.querySelectorAll(params.el) ];
                if (!el) el = params.el;
                if (!el || el.length === 0) return;
                if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
                    el = [ ...swiper.el.querySelectorAll(params.el) ];
                    if (el.length > 1) el = el.filter((subEl => {
                        if (utils_elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
                        return true;
                    }))[0];
                }
                if (Array.isArray(el) && el.length === 1) el = el[0];
                Object.assign(swiper.pagination, {
                    el
                });
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    if (params.type === "bullets" && params.clickable) subEl.classList.add(...(params.clickableClass || "").split(" "));
                    subEl.classList.add(params.modifierClass + params.type);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    if (params.type === "bullets" && params.dynamicBullets) {
                        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                        dynamicBulletIndex = 0;
                        if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                    }
                    if (params.type === "progressbar" && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
                    if (params.clickable) subEl.addEventListener("click", onBulletClick);
                    if (!swiper.enabled) subEl.classList.add(params.lockClass);
                }));
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.classList.remove(params.hiddenClass);
                        subEl.classList.remove(params.modifierClass + params.type);
                        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                        if (params.clickable) {
                            subEl.classList.remove(...(params.clickableClass || "").split(" "));
                            subEl.removeEventListener("click", onBulletClick);
                        }
                    }));
                }
                if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl => subEl.classList.remove(...params.bulletActiveClass.split(" "))));
            }
            on("changeDirection", (() => {
                if (!swiper.pagination || !swiper.pagination.el) return;
                const params = swiper.params.pagination;
                let {el} = swiper.pagination;
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.classList.remove(params.horizontalClass, params.verticalClass);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                }));
            }));
            on("init", (() => {
                if (swiper.params.pagination.enabled === false) disable(); else {
                    init();
                    render();
                    update();
                }
            }));
            on("activeIndexChange", (() => {
                if (typeof swiper.snapIndex === "undefined") update();
            }));
            on("snapIndexChange", (() => {
                update();
            }));
            on("snapGridLengthChange", (() => {
                render();
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {el} = swiper.pagination;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass)));
                }
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                const el = utils_makeElementsArray(swiper.pagination.el);
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                    if (isHidden === true) emit("paginationShow"); else emit("paginationHide");
                    el.forEach((subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass)));
                }
                init();
                render();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = utils_makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass)));
                }
                destroy();
            };
            Object.assign(swiper.pagination, {
                enable,
                disable,
                render,
                update,
                init,
                destroy
            });
        }
        function A11y(_ref) {
            let {swiper, extendParams, on} = _ref;
            extendParams({
                a11y: {
                    enabled: true,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group",
                    id: null
                }
            });
            swiper.a11y = {
                clicked: false
            };
            let liveRegion = null;
            let preventFocusHandler;
            let focusTargetSlideEl;
            let visibilityChangedTimestamp = (new Date).getTime();
            function notify(message) {
                const notification = liveRegion;
                if (notification.length === 0) return;
                notification.innerHTML = "";
                notification.innerHTML = message;
            }
            function getRandomNumber(size) {
                if (size === void 0) size = 16;
                const randomChar = () => Math.round(16 * Math.random()).toString(16);
                return "x".repeat(size).replace(/x/g, randomChar);
            }
            function makeElFocusable(el) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.setAttribute("tabIndex", "0");
                }));
            }
            function makeElNotFocusable(el) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.setAttribute("tabIndex", "-1");
                }));
            }
            function addElRole(el, role) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.setAttribute("role", role);
                }));
            }
            function addElRoleDescription(el, description) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.setAttribute("aria-roledescription", description);
                }));
            }
            function addElControls(el, controls) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.setAttribute("aria-controls", controls);
                }));
            }
            function addElLabel(el, label) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.setAttribute("aria-label", label);
                }));
            }
            function addElId(el, id) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.setAttribute("id", id);
                }));
            }
            function addElLive(el, live) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.setAttribute("aria-live", live);
                }));
            }
            function disableEl(el) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.setAttribute("aria-disabled", true);
                }));
            }
            function enableEl(el) {
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.setAttribute("aria-disabled", false);
                }));
            }
            function onEnterOrSpaceKey(e) {
                if (e.keyCode !== 13 && e.keyCode !== 32) return;
                const params = swiper.params.a11y;
                const targetEl = e.target;
                if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) if (!e.target.matches(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass))) return;
                if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
                    const prevEls = utils_makeElementsArray(swiper.navigation.prevEl);
                    const nextEls = utils_makeElementsArray(swiper.navigation.nextEl);
                    if (nextEls.includes(targetEl)) {
                        if (!(swiper.isEnd && !swiper.params.loop)) swiper.slideNext();
                        if (swiper.isEnd) notify(params.lastSlideMessage); else notify(params.nextSlideMessage);
                    }
                    if (prevEls.includes(targetEl)) {
                        if (!(swiper.isBeginning && !swiper.params.loop)) swiper.slidePrev();
                        if (swiper.isBeginning) notify(params.firstSlideMessage); else notify(params.prevSlideMessage);
                    }
                }
                if (swiper.pagination && targetEl.matches(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass))) targetEl.click();
            }
            function updateNavigation() {
                if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
                const {nextEl, prevEl} = swiper.navigation;
                if (prevEl) if (swiper.isBeginning) {
                    disableEl(prevEl);
                    makeElNotFocusable(prevEl);
                } else {
                    enableEl(prevEl);
                    makeElFocusable(prevEl);
                }
                if (nextEl) if (swiper.isEnd) {
                    disableEl(nextEl);
                    makeElNotFocusable(nextEl);
                } else {
                    enableEl(nextEl);
                    makeElFocusable(nextEl);
                }
            }
            function hasPagination() {
                return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
            }
            function hasClickablePagination() {
                return hasPagination() && swiper.params.pagination.clickable;
            }
            function updatePagination() {
                const params = swiper.params.a11y;
                if (!hasPagination()) return;
                swiper.pagination.bullets.forEach((bulletEl => {
                    if (swiper.params.pagination.clickable) {
                        makeElFocusable(bulletEl);
                        if (!swiper.params.pagination.renderBullet) {
                            addElRole(bulletEl, "button");
                            addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
                        }
                    }
                    if (bulletEl.matches(classes_to_selector_classesToSelector(swiper.params.pagination.bulletActiveClass))) bulletEl.setAttribute("aria-current", "true"); else bulletEl.removeAttribute("aria-current");
                }));
            }
            const initNavEl = (el, wrapperId, message) => {
                makeElFocusable(el);
                if (el.tagName !== "BUTTON") {
                    addElRole(el, "button");
                    el.addEventListener("keydown", onEnterOrSpaceKey);
                }
                addElLabel(el, message);
                addElControls(el, wrapperId);
            };
            const handlePointerDown = e => {
                if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) preventFocusHandler = true;
                swiper.a11y.clicked = true;
            };
            const handlePointerUp = () => {
                preventFocusHandler = false;
                requestAnimationFrame((() => {
                    requestAnimationFrame((() => {
                        if (!swiper.destroyed) swiper.a11y.clicked = false;
                    }));
                }));
            };
            const onVisibilityChange = e => {
                visibilityChangedTimestamp = (new Date).getTime();
            };
            const handleFocus = e => {
                if (swiper.a11y.clicked) return;
                if ((new Date).getTime() - visibilityChangedTimestamp < 100) return;
                const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
                if (!slideEl || !swiper.slides.includes(slideEl)) return;
                focusTargetSlideEl = slideEl;
                const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
                const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
                if (isActive || isVisible) return;
                if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
                if (swiper.isHorizontal()) swiper.el.scrollLeft = 0; else swiper.el.scrollTop = 0;
                requestAnimationFrame((() => {
                    if (preventFocusHandler) return;
                    swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
                    preventFocusHandler = false;
                }));
            };
            const initSlides = () => {
                const params = swiper.params.a11y;
                if (params.itemRoleDescriptionMessage) addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
                if (params.slideRole) addElRole(swiper.slides, params.slideRole);
                const slidesLength = swiper.slides.length;
                if (params.slideLabelMessage) swiper.slides.forEach(((slideEl, index) => {
                    const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10) : index;
                    const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
                    addElLabel(slideEl, ariaLabelMessage);
                }));
            };
            const init = () => {
                const params = swiper.params.a11y;
                swiper.el.append(liveRegion);
                const containerEl = swiper.el;
                if (params.containerRoleDescriptionMessage) addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
                if (params.containerMessage) addElLabel(containerEl, params.containerMessage);
                const wrapperEl = swiper.wrapperEl;
                const wrapperId = params.id || wrapperEl.getAttribute("id") || `swiper-wrapper-${getRandomNumber(16)}`;
                const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
                addElId(wrapperEl, wrapperId);
                addElLive(wrapperEl, live);
                initSlides();
                let {nextEl, prevEl} = swiper.navigation ? swiper.navigation : {};
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                if (nextEl) nextEl.forEach((el => initNavEl(el, wrapperId, params.nextSlideMessage)));
                if (prevEl) prevEl.forEach((el => initNavEl(el, wrapperId, params.prevSlideMessage)));
                if (hasClickablePagination()) {
                    const paginationEl = utils_makeElementsArray(swiper.pagination.el);
                    paginationEl.forEach((el => {
                        el.addEventListener("keydown", onEnterOrSpaceKey);
                    }));
                }
                const document = ssr_window_esm_getDocument();
                document.addEventListener("visibilitychange", onVisibilityChange);
                swiper.el.addEventListener("focus", handleFocus, true);
                swiper.el.addEventListener("focus", handleFocus, true);
                swiper.el.addEventListener("pointerdown", handlePointerDown, true);
                swiper.el.addEventListener("pointerup", handlePointerUp, true);
            };
            function destroy() {
                if (liveRegion) liveRegion.remove();
                let {nextEl, prevEl} = swiper.navigation ? swiper.navigation : {};
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                if (nextEl) nextEl.forEach((el => el.removeEventListener("keydown", onEnterOrSpaceKey)));
                if (prevEl) prevEl.forEach((el => el.removeEventListener("keydown", onEnterOrSpaceKey)));
                if (hasClickablePagination()) {
                    const paginationEl = utils_makeElementsArray(swiper.pagination.el);
                    paginationEl.forEach((el => {
                        el.removeEventListener("keydown", onEnterOrSpaceKey);
                    }));
                }
                const document = ssr_window_esm_getDocument();
                document.removeEventListener("visibilitychange", onVisibilityChange);
                swiper.el.removeEventListener("focus", handleFocus, true);
                swiper.el.removeEventListener("pointerdown", handlePointerDown, true);
                swiper.el.removeEventListener("pointerup", handlePointerUp, true);
            }
            on("beforeInit", (() => {
                liveRegion = utils_createElement("span", swiper.params.a11y.notificationClass);
                liveRegion.setAttribute("aria-live", "assertive");
                liveRegion.setAttribute("aria-atomic", "true");
            }));
            on("afterInit", (() => {
                if (!swiper.params.a11y.enabled) return;
                init();
            }));
            on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
                if (!swiper.params.a11y.enabled) return;
                initSlides();
            }));
            on("fromEdge toEdge afterInit lock unlock", (() => {
                if (!swiper.params.a11y.enabled) return;
                updateNavigation();
            }));
            on("paginationUpdate", (() => {
                if (!swiper.params.a11y.enabled) return;
                updatePagination();
            }));
            on("destroy", (() => {
                if (!swiper.params.a11y.enabled) return;
                destroy();
            }));
        }
        function Thumb(_ref) {
            let {swiper, extendParams, on} = _ref;
            extendParams({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: true,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-thumbs"
                }
            });
            let initialized = false;
            let swiperCreated = false;
            swiper.thumbs = {
                swiper: null
            };
            function onThumbClick() {
                const thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper || thumbsSwiper.destroyed) return;
                const clickedIndex = thumbsSwiper.clickedIndex;
                const clickedSlide = thumbsSwiper.clickedSlide;
                if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
                if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
                let slideToIndex;
                if (thumbsSwiper.params.loop) slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10); else slideToIndex = clickedIndex;
                if (swiper.params.loop) swiper.slideToLoop(slideToIndex); else swiper.slideTo(slideToIndex);
            }
            function init() {
                const {thumbs: thumbsParams} = swiper.params;
                if (initialized) return false;
                initialized = true;
                const SwiperClass = swiper.constructor;
                if (thumbsParams.swiper instanceof SwiperClass) {
                    swiper.thumbs.swiper = thumbsParams.swiper;
                    Object.assign(swiper.thumbs.swiper.originalParams, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    });
                    Object.assign(swiper.thumbs.swiper.params, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    });
                    swiper.thumbs.swiper.update();
                } else if (utils_isObject(thumbsParams.swiper)) {
                    const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
                    Object.assign(thumbsSwiperParams, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    });
                    swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
                    swiperCreated = true;
                }
                swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
                swiper.thumbs.swiper.on("tap", onThumbClick);
                return true;
            }
            function update(initial) {
                const thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper || thumbsSwiper.destroyed) return;
                const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
                let thumbsToActivate = 1;
                const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
                if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) thumbsToActivate = swiper.params.slidesPerView;
                if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
                thumbsToActivate = Math.floor(thumbsToActivate);
                thumbsSwiper.slides.forEach((slideEl => slideEl.classList.remove(thumbActiveClass)));
                if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) for (let i = 0; i < thumbsToActivate; i += 1) utils_elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach((slideEl => {
                    slideEl.classList.add(thumbActiveClass);
                })); else for (let i = 0; i < thumbsToActivate; i += 1) if (thumbsSwiper.slides[swiper.realIndex + i]) thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
                const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
                const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
                if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
                    const currentThumbsIndex = thumbsSwiper.activeIndex;
                    let newThumbsIndex;
                    let direction;
                    if (thumbsSwiper.params.loop) {
                        const newThumbsSlide = thumbsSwiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") === `${swiper.realIndex}`))[0];
                        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
                        direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
                    } else {
                        newThumbsIndex = swiper.realIndex;
                        direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
                    }
                    if (useOffset) newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
                    if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                        if (thumbsSwiper.params.centeredSlides) if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1; else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1; else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
                        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : void 0);
                    }
                }
            }
            on("beforeInit", (() => {
                const {thumbs} = swiper.params;
                if (!thumbs || !thumbs.swiper) return;
                if (typeof thumbs.swiper === "string" || thumbs.swiper instanceof HTMLElement) {
                    const document = ssr_window_esm_getDocument();
                    const getThumbsElementAndInit = () => {
                        const thumbsElement = typeof thumbs.swiper === "string" ? document.querySelector(thumbs.swiper) : thumbs.swiper;
                        if (thumbsElement && thumbsElement.swiper) {
                            thumbs.swiper = thumbsElement.swiper;
                            init();
                            update(true);
                        } else if (thumbsElement) {
                            const onThumbsSwiper = e => {
                                thumbs.swiper = e.detail[0];
                                thumbsElement.removeEventListener("init", onThumbsSwiper);
                                init();
                                update(true);
                                thumbs.swiper.update();
                                swiper.update();
                            };
                            thumbsElement.addEventListener("init", onThumbsSwiper);
                        }
                        return thumbsElement;
                    };
                    const watchForThumbsToAppear = () => {
                        if (swiper.destroyed) return;
                        const thumbsElement = getThumbsElementAndInit();
                        if (!thumbsElement) requestAnimationFrame(watchForThumbsToAppear);
                    };
                    requestAnimationFrame(watchForThumbsToAppear);
                } else {
                    init();
                    update(true);
                }
            }));
            on("slideChange update resize observerUpdate", (() => {
                update();
            }));
            on("setTransition", ((_s, duration) => {
                const thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper || thumbsSwiper.destroyed) return;
                thumbsSwiper.setTransition(duration);
            }));
            on("beforeDestroy", (() => {
                const thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper || thumbsSwiper.destroyed) return;
                if (swiperCreated) thumbsSwiper.destroy();
            }));
            Object.assign(swiper.thumbs, {
                init,
                update
            });
        }
        const createSlider = (el, options) => {
            let mergedOptions;
            const defaultOptions = {
                modules: [ A11y ],
                slidesPerView: "auto",
                speed: 800,
                a11y: true
            };
            if (options && typeof options === "object") {
                mergedOptions = {
                    ...defaultOptions,
                    ...options
                };
                if (options.modules) mergedOptions.modules = [ ...new Set([ ...defaultOptions.modules, ...options.modules ]) ];
            }
            sliders.push([ el, mergedOptions || defaultOptions ]);
        };
        const sliders = [];
        function initSliders() {
            console.log(sliders);
            sliders.forEach((element => {
                new Swiper(element[0], element[1]);
            }));
        }
        window.addEventListener("load", (function(e) {
            const catalogItemSliderMin = new Swiper(".detail-main__slider-thumb", {
                modules: [ Pagination, Thumb, Mousewheel ],
                slidesPerView: 4,
                watchSlidesProgress: true,
                spaceBetween: 19,
                direction: "horizontal",
                mousewheel: true,
                breakpoints: {
                    767: {
                        spaceBetween: 24
                    },
                    1441: {
                        spaceBetween: 24,
                        direction: "vertical"
                    }
                }
            });
            new Swiper(".detail-main__slider-big", {
                modules: [ Pagination, Thumb, Navigation ],
                slidesPerView: 1,
                thumbs: {
                    swiper: catalogItemSliderMin
                },
                pagination: {
                    el: "._slider_pagination",
                    clickable: true
                },
                navigation: {
                    prevEl: "._slider_nav._prev",
                    nextEl: "._slider_nav._next"
                }
            });
            createSlider("._slider", {
                modules: [ Pagination, Navigation ],
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: true,
                pagination: {
                    el: "._slider__pagination",
                    clickable: true
                },
                navigation: {
                    prevEl: "._slider__nav._prev",
                    nextEl: "._slider__nav._next"
                }
            });
            createSlider(".fast_view-body__slider", {
                modules: [ Pagination, Navigation ],
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: true,
                pagination: {
                    el: "._slider_pagination",
                    clickable: true
                },
                navigation: {
                    prevEl: "._slider_nav._prev",
                    nextEl: "._slider_nav._next"
                }
            });
            createSlider(".fast_view-body__slider", {
                modules: [ Pagination, Navigation ],
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: true,
                pagination: {
                    el: "._slider_pagination",
                    clickable: true
                },
                navigation: {
                    prevEl: "._slider_nav._prev",
                    nextEl: "._slider_nav._next"
                }
            });
            const companySliderList = document.querySelectorAll("._company-slider");
            companySliderList.forEach((item => {
                createSlider(item.querySelector("._company-slider__content"), {
                    modules: [ Navigation ],
                    slidesPerView: "auto",
                    spaceBetween: 12,
                    navigation: {
                        prevEl: "._company-slider__nav._prev",
                        nextEl: "._company-slider__nav._next"
                    }
                });
            }));
            const examplesSliderList = document.querySelectorAll("._examples-slider");
            examplesSliderList.forEach((item => {
                createSlider(item.querySelector("._examples-slider__item"), {
                    modules: [ Navigation ],
                    slidesPerView: "auto",
                    spaceBetween: 12,
                    navigation: {
                        prevEl: "._examples-slider__nav._prev",
                        nextEl: "._examples-slider__nav._next"
                    }
                });
            }));
            createSlider(".stock-body__slider-item", {
                modules: [ Navigation ],
                slidesPerView: "auto",
                spaceBetween: 16,
                navigation: {
                    prevEl: ".stock-body__slider-nav._prev",
                    nextEl: ".stock-body__slider-nav._next"
                }
            });
            createSlider(".range-slider", {
                modules: [ Navigation ],
                slidesPerView: 1,
                spaceBetween: 24,
                navigation: {
                    prevEl: ".range-slider__nav._prev",
                    nextEl: ".range-slider__nav._next"
                },
                breakpoints: {
                    991: {
                        slidesPerView: "auto"
                    }
                }
            });
            createSlider(".hits-slider", {
                slidesPerView: "auto",
                spaceBetween: 20,
                breakpoints: {
                    991: {
                        slidesPerView: 5
                    }
                }
            });
            createSlider(".brands-slider", {
                modules: [ Navigation ],
                slidesPerView: "auto",
                spaceBetween: 16,
                navigation: {
                    prevEl: ".brands-slider__nav._prev",
                    nextEl: ".brands-slider__nav._next"
                },
                breakpoints: {
                    991: {
                        spaceBetween: 24
                    }
                }
            });
            initSliders();
        }));
        window.initSliders = initSliders;
        const initFastViewDescr = () => {
            if (document.querySelector(".fast_view-descr")) {
                const description = document.querySelector(".fast_view-descr");
                const top = description.querySelector(".fast_view-descr__top");
                const content = description.querySelector(".fast_view-descr__content");
                top.addEventListener("click", (() => {
                    if (description.classList.contains("_open")) {
                        description.classList.remove("_open");
                        content.style.height = 0;
                    } else {
                        description.classList.add("_open");
                        content.style.height = `${content.scrollHeight + 32}px`;
                    }
                }));
            }
        };
        const codeInputInit = () => {
            if (document.querySelector("._code")) {
                const code = document.querySelector("._code");
                const codeInputs = code.querySelectorAll("._code-item");
                const input = code.querySelector("input");
                input.addEventListener("input", (e => {
                    const innerText = e.target.value.split("");
                    codeInputs[0].innerHTML = innerText[0] ? innerText[0] : "_";
                    codeInputs[1].innerHTML = innerText[1] ? innerText[1] : "_";
                    codeInputs[2].innerHTML = innerText[2] ? innerText[2] : "_";
                    codeInputs[3].innerHTML = innerText[3] ? innerText[3] : "_";
                }));
            }
        };
        const showPass = () => {
            if (document.querySelector("._label._input_pass")) {
                const label = document.querySelector("._label._input_pass");
                const input = label.querySelector("input");
                const btn = label.querySelector("._input_pass__btn");
                btn.addEventListener("click", (() => {
                    if (label.classList.contains("_show")) {
                        label.classList.remove("_show");
                        input.type = "password";
                    } else {
                        label.classList.add("_show");
                        input.type = "text";
                    }
                }));
            }
        };
        showPass();
        var scripts_choices = __webpack_require__(19);
        const initSelects = () => {
            if (document.querySelector("._select")) {
                const headerSelectList = document.querySelectorAll("._select");
                headerSelectList.forEach((item => {
                    new scripts_choices(item, {
                        itemSelectText: "",
                        searchEnabled: false
                    });
                }));
            }
        };
        initSelects();
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Проснулся`);
                this.eventsPopup();
            }
            async getModal(link, selector) {
                console.log(link);
                api.load({
                    url: link,
                    format: "text",
                    cb: responseResult => {
                        const parser = new DOMParser;
                        const response = parser.parseFromString(responseResult, "text/html");
                        const el = response.querySelector(selector);
                        document.body.appendChild(el);
                        initSliders();
                        initFastViewDescr();
                        codeInputInit();
                        showPass();
                        initSelects();
                        formFieldsInit({
                            viewPass: false,
                            autoHeight: false
                        });
                        this.open();
                    }
                });
            }
            eventsPopup() {
                document.addEventListener("click", async function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        await this.getModal(buttonOpen.href, this._dataValue);
                        if (this._dataValue !== "error") {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Йой, не заповнено атрибут у ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Открыл попап`);
                    } else this.popupLogging(`Ей, такого попа нет. Проверьте правильность ввода.`);
                }
            }
            close(selectorValue, timer = 800) {
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock(timer) : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                console.log(this.previousOpen);
                setTimeout((() => {
                    this.previousOpen.element.remove();
                }), timer);
                this.popupLogging(`Закрыл попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            async _openToHash() {
                const button = document.querySelector(`[${this.options.attributeOpenButton}="${window.location.hash}"]`);
                if (button) await this.getModal(button.href, button.getAttribute(this.options.attributeOpenButton)).then((() => {
                    this.open(button.getAttribute(this.options.attributeOpenButton));
                }));
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? FLS(`[Попапос]: ${message}`) : null;
            }
        }
        flsModules.popup = new Popup({});
        let addWindowScrollEvent = false;
        window.addEventListener("hashchange", (() => {
            const anchor = window.location.hash;
            if (anchor) {
                const target = document.getElementById(anchor.substring(1));
                if (target) target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest"
                });
            }
        }));
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        if (document.querySelector(".category")) {
            const openBtn = document.querySelectorAll(".category-open-btn");
            const closeBtn = document.querySelectorAll(".category-close-btn");
            const category = document.querySelector(".category");
            const categoryMain = category.querySelector(".category-main");
            const categoryMainItemList = categoryMain.querySelectorAll(".category-item._second");
            const categorySecond = category.querySelector(".category-second");
            const categorySecondContentList = category.querySelectorAll(".category-second__content");
            const openCategory = () => {
                openBtn.forEach((item => {
                    item.classList.add("_open");
                }));
                category.classList.add("_open");
            };
            const closeCategory = () => {
                openBtn.forEach((item => {
                    item.classList.remove("_open");
                }));
                category.classList.remove("_open");
                closeCategorySecond();
            };
            openBtn.forEach((item => {
                item.addEventListener("click", (() => {
                    if (category.classList.contains("_open")) closeCategory(); else openCategory();
                }));
            }));
            closeBtn.forEach((item => {
                item.addEventListener("click", (() => {
                    closeCategory();
                }));
            }));
            category.addEventListener("mouseleave", closeCategory);
            const closeAllCategorySecondContent = () => {
                categorySecondContentList.forEach((item => {
                    item.classList.remove("_active");
                }));
            };
            const openCategorySecond = index => {
                categorySecond.classList.add("_open");
                categorySecondContentList[index].classList.add("_active");
            };
            const closeCategorySecond = () => {
                categorySecond.classList.remove("_open");
                closeAllCategorySecondContent();
            };
            categoryMainItemList.forEach(((item, index) => {
                item.addEventListener("mouseenter", (() => {
                    closeAllCategorySecondContent();
                    openCategorySecond(index);
                }));
            }));
        }
        if (document.querySelector(".catalog-body__side-accord")) {
            const catalogAccordList = document.querySelectorAll(".catalog-body__side-accord");
            catalogAccordList.forEach((item => {
                const top = item.querySelector("._top");
                item.querySelector("._top__content");
                top.addEventListener("click", (() => {
                    if (item.classList.contains("_open")) item.classList.remove("_open"); else item.classList.add("_open");
                }));
            }));
        }
        var PipsMode;
        (function(PipsMode) {
            PipsMode["Range"] = "range";
            PipsMode["Steps"] = "steps";
            PipsMode["Positions"] = "positions";
            PipsMode["Count"] = "count";
            PipsMode["Values"] = "values";
        })(PipsMode || (PipsMode = {}));
        var PipsType;
        (function(PipsType) {
            PipsType[PipsType["None"] = -1] = "None";
            PipsType[PipsType["NoValue"] = 0] = "NoValue";
            PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
            PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
        })(PipsType || (PipsType = {}));
        function isValidFormatter(entry) {
            return isValidPartialFormatter(entry) && typeof entry.from === "function";
        }
        function isValidPartialFormatter(entry) {
            return typeof entry === "object" && typeof entry.to === "function";
        }
        function removeElement(el) {
            el.parentElement.removeChild(el);
        }
        function isSet(value) {
            return value !== null && value !== void 0;
        }
        function preventDefault(e) {
            e.preventDefault();
        }
        function unique(array) {
            return array.filter((function(a) {
                return !this[a] ? this[a] = true : false;
            }), {});
        }
        function closest(value, to) {
            return Math.round(value / to) * to;
        }
        function offset(elem, orientation) {
            var rect = elem.getBoundingClientRect();
            var doc = elem.ownerDocument;
            var docElem = doc.documentElement;
            var pageOffset = getPageOffset(doc);
            if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) pageOffset.x = 0;
            return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
        }
        function isNumeric(a) {
            return typeof a === "number" && !isNaN(a) && isFinite(a);
        }
        function addClassFor(element, className, duration) {
            if (duration > 0) {
                addClass(element, className);
                setTimeout((function() {
                    removeClass(element, className);
                }), duration);
            }
        }
        function limit(a) {
            return Math.max(Math.min(a, 100), 0);
        }
        function asArray(a) {
            return Array.isArray(a) ? a : [ a ];
        }
        function countDecimals(numStr) {
            numStr = String(numStr);
            var pieces = numStr.split(".");
            return pieces.length > 1 ? pieces[1].length : 0;
        }
        function addClass(el, className) {
            if (el.classList && !/\s/.test(className)) el.classList.add(className); else el.className += " " + className;
        }
        function removeClass(el, className) {
            if (el.classList && !/\s/.test(className)) el.classList.remove(className); else el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
        function hasClass(el, className) {
            return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
        }
        function getPageOffset(doc) {
            var supportPageOffset = window.pageXOffset !== void 0;
            var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
            var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
            var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
            return {
                x,
                y
            };
        }
        function getActions() {
            return window.navigator.pointerEnabled ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            } : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend"
            };
        }
        function getSupportsPassive() {
            var supportsPassive = false;
            try {
                var opts = Object.defineProperty({}, "passive", {
                    get: function() {
                        supportsPassive = true;
                    }
                });
                window.addEventListener("test", null, opts);
            } catch (e) {}
            return supportsPassive;
        }
        function getSupportsTouchActionNone() {
            return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
        }
        function subRangeRatio(pa, pb) {
            return 100 / (pb - pa);
        }
        function fromPercentage(range, value, startRange) {
            return value * 100 / (range[startRange + 1] - range[startRange]);
        }
        function toPercentage(range, value) {
            return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
        }
        function isPercentage(range, value) {
            return value * (range[1] - range[0]) / 100 + range[0];
        }
        function getJ(value, arr) {
            var j = 1;
            while (value >= arr[j]) j += 1;
            return j;
        }
        function toStepping(xVal, xPct, value) {
            if (value >= xVal.slice(-1)[0]) return 100;
            var j = getJ(value, xVal);
            var va = xVal[j - 1];
            var vb = xVal[j];
            var pa = xPct[j - 1];
            var pb = xPct[j];
            return pa + toPercentage([ va, vb ], value) / subRangeRatio(pa, pb);
        }
        function fromStepping(xVal, xPct, value) {
            if (value >= 100) return xVal.slice(-1)[0];
            var j = getJ(value, xPct);
            var va = xVal[j - 1];
            var vb = xVal[j];
            var pa = xPct[j - 1];
            var pb = xPct[j];
            return isPercentage([ va, vb ], (value - pa) * subRangeRatio(pa, pb));
        }
        function getStep(xPct, xSteps, snap, value) {
            if (value === 100) return value;
            var j = getJ(value, xPct);
            var a = xPct[j - 1];
            var b = xPct[j];
            if (snap) {
                if (value - a > (b - a) / 2) return b;
                return a;
            }
            if (!xSteps[j - 1]) return value;
            return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
        }
        var Spectrum = function() {
            function Spectrum(entry, snap, singleStep) {
                this.xPct = [];
                this.xVal = [];
                this.xSteps = [];
                this.xNumSteps = [];
                this.xHighestCompleteStep = [];
                this.xSteps = [ singleStep || false ];
                this.xNumSteps = [ false ];
                this.snap = snap;
                var index;
                var ordered = [];
                Object.keys(entry).forEach((function(index) {
                    ordered.push([ asArray(entry[index]), index ]);
                }));
                ordered.sort((function(a, b) {
                    return a[0][0] - b[0][0];
                }));
                for (index = 0; index < ordered.length; index++) this.handleEntryPoint(ordered[index][1], ordered[index][0]);
                this.xNumSteps = this.xSteps.slice(0);
                for (index = 0; index < this.xNumSteps.length; index++) this.handleStepPoint(index, this.xNumSteps[index]);
            }
            Spectrum.prototype.getDistance = function(value) {
                var distances = [];
                for (var index = 0; index < this.xNumSteps.length - 1; index++) distances[index] = fromPercentage(this.xVal, value, index);
                return distances;
            };
            Spectrum.prototype.getAbsoluteDistance = function(value, distances, direction) {
                var xPct_index = 0;
                if (value < this.xPct[this.xPct.length - 1]) while (value > this.xPct[xPct_index + 1]) xPct_index++; else if (value === this.xPct[this.xPct.length - 1]) xPct_index = this.xPct.length - 2;
                if (!direction && value === this.xPct[xPct_index + 1]) xPct_index++;
                if (distances === null) distances = [];
                var start_factor;
                var rest_factor = 1;
                var rest_rel_distance = distances[xPct_index];
                var range_pct = 0;
                var rel_range_distance = 0;
                var abs_distance_counter = 0;
                var range_counter = 0;
                if (direction) start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]); else start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
                while (rest_rel_distance > 0) {
                    range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                    if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                        rel_range_distance = range_pct * start_factor;
                        rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                        start_factor = 1;
                    } else {
                        rel_range_distance = distances[xPct_index + range_counter] * range_pct / 100 * rest_factor;
                        rest_factor = 0;
                    }
                    if (direction) {
                        abs_distance_counter -= rel_range_distance;
                        if (this.xPct.length + range_counter >= 1) range_counter--;
                    } else {
                        abs_distance_counter += rel_range_distance;
                        if (this.xPct.length - range_counter >= 1) range_counter++;
                    }
                    rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
                }
                return value + abs_distance_counter;
            };
            Spectrum.prototype.toStepping = function(value) {
                value = toStepping(this.xVal, this.xPct, value);
                return value;
            };
            Spectrum.prototype.fromStepping = function(value) {
                return fromStepping(this.xVal, this.xPct, value);
            };
            Spectrum.prototype.getStep = function(value) {
                value = getStep(this.xPct, this.xSteps, this.snap, value);
                return value;
            };
            Spectrum.prototype.getDefaultStep = function(value, isDown, size) {
                var j = getJ(value, this.xPct);
                if (value === 100 || isDown && value === this.xPct[j - 1]) j = Math.max(j - 1, 1);
                return (this.xVal[j] - this.xVal[j - 1]) / size;
            };
            Spectrum.prototype.getNearbySteps = function(value) {
                var j = getJ(value, this.xPct);
                return {
                    stepBefore: {
                        startValue: this.xVal[j - 2],
                        step: this.xNumSteps[j - 2],
                        highestStep: this.xHighestCompleteStep[j - 2]
                    },
                    thisStep: {
                        startValue: this.xVal[j - 1],
                        step: this.xNumSteps[j - 1],
                        highestStep: this.xHighestCompleteStep[j - 1]
                    },
                    stepAfter: {
                        startValue: this.xVal[j],
                        step: this.xNumSteps[j],
                        highestStep: this.xHighestCompleteStep[j]
                    }
                };
            };
            Spectrum.prototype.countStepDecimals = function() {
                var stepDecimals = this.xNumSteps.map(countDecimals);
                return Math.max.apply(null, stepDecimals);
            };
            Spectrum.prototype.hasNoSize = function() {
                return this.xVal[0] === this.xVal[this.xVal.length - 1];
            };
            Spectrum.prototype.convert = function(value) {
                return this.getStep(this.toStepping(value));
            };
            Spectrum.prototype.handleEntryPoint = function(index, value) {
                var percentage;
                if (index === "min") percentage = 0; else if (index === "max") percentage = 100; else percentage = parseFloat(index);
                if (!isNumeric(percentage) || !isNumeric(value[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
                this.xPct.push(percentage);
                this.xVal.push(value[0]);
                var value1 = Number(value[1]);
                if (!percentage) {
                    if (!isNaN(value1)) this.xSteps[0] = value1;
                } else this.xSteps.push(isNaN(value1) ? false : value1);
                this.xHighestCompleteStep.push(0);
            };
            Spectrum.prototype.handleStepPoint = function(i, n) {
                if (!n) return;
                if (this.xVal[i] === this.xVal[i + 1]) {
                    this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                    return;
                }
                this.xSteps[i] = fromPercentage([ this.xVal[i], this.xVal[i + 1] ], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
                var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
                var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
                var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
                this.xHighestCompleteStep[i] = step;
            };
            return Spectrum;
        }();
        var defaultFormatter = {
            to: function(value) {
                return value === void 0 ? "" : value.toFixed(2);
            },
            from: Number
        };
        var cssClasses = {
            target: "target",
            base: "base",
            origin: "origin",
            handle: "handle",
            handleLower: "handle-lower",
            handleUpper: "handle-upper",
            touchArea: "touch-area",
            horizontal: "horizontal",
            vertical: "vertical",
            background: "background",
            connect: "connect",
            connects: "connects",
            ltr: "ltr",
            rtl: "rtl",
            textDirectionLtr: "txt-dir-ltr",
            textDirectionRtl: "txt-dir-rtl",
            draggable: "draggable",
            drag: "state-drag",
            tap: "state-tap",
            active: "active",
            tooltip: "tooltip",
            pips: "pips",
            pipsHorizontal: "pips-horizontal",
            pipsVertical: "pips-vertical",
            marker: "marker",
            markerHorizontal: "marker-horizontal",
            markerVertical: "marker-vertical",
            markerNormal: "marker-normal",
            markerLarge: "marker-large",
            markerSub: "marker-sub",
            value: "value",
            valueHorizontal: "value-horizontal",
            valueVertical: "value-vertical",
            valueNormal: "value-normal",
            valueLarge: "value-large",
            valueSub: "value-sub"
        };
        var INTERNAL_EVENT_NS = {
            tooltips: ".__tooltips",
            aria: ".__aria"
        };
        function testStep(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'step' is not numeric.");
            parsed.singleStep = entry;
        }
        function testKeyboardPageMultiplier(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
            parsed.keyboardPageMultiplier = entry;
        }
        function testKeyboardMultiplier(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
            parsed.keyboardMultiplier = entry;
        }
        function testKeyboardDefaultStep(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
            parsed.keyboardDefaultStep = entry;
        }
        function testRange(parsed, entry) {
            if (typeof entry !== "object" || Array.isArray(entry)) throw new Error("noUiSlider: 'range' is not an object.");
            if (entry.min === void 0 || entry.max === void 0) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
        }
        function testStart(parsed, entry) {
            entry = asArray(entry);
            if (!Array.isArray(entry) || !entry.length) throw new Error("noUiSlider: 'start' option is incorrect.");
            parsed.handles = entry.length;
            parsed.start = entry;
        }
        function testSnap(parsed, entry) {
            if (typeof entry !== "boolean") throw new Error("noUiSlider: 'snap' option must be a boolean.");
            parsed.snap = entry;
        }
        function testAnimate(parsed, entry) {
            if (typeof entry !== "boolean") throw new Error("noUiSlider: 'animate' option must be a boolean.");
            parsed.animate = entry;
        }
        function testAnimationDuration(parsed, entry) {
            if (typeof entry !== "number") throw new Error("noUiSlider: 'animationDuration' option must be a number.");
            parsed.animationDuration = entry;
        }
        function testConnect(parsed, entry) {
            var connect = [ false ];
            var i;
            if (entry === "lower") entry = [ true, false ]; else if (entry === "upper") entry = [ false, true ];
            if (entry === true || entry === false) {
                for (i = 1; i < parsed.handles; i++) connect.push(entry);
                connect.push(false);
            } else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count."); else connect = entry;
            parsed.connect = connect;
        }
        function testOrientation(parsed, entry) {
            switch (entry) {
              case "horizontal":
                parsed.ort = 0;
                break;

              case "vertical":
                parsed.ort = 1;
                break;

              default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
        }
        function testMargin(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'margin' option must be numeric.");
            if (entry === 0) return;
            parsed.margin = parsed.spectrum.getDistance(entry);
        }
        function testLimit(parsed, entry) {
            if (!isNumeric(entry)) throw new Error("noUiSlider: 'limit' option must be numeric.");
            parsed.limit = parsed.spectrum.getDistance(entry);
            if (!parsed.limit || parsed.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
        function testPadding(parsed, entry) {
            var index;
            if (!isNumeric(entry) && !Array.isArray(entry)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
            if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
            if (entry === 0) return;
            if (!Array.isArray(entry)) entry = [ entry, entry ];
            parsed.padding = [ parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1]) ];
            for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            var totalPadding = entry[0] + entry[1];
            var firstValue = parsed.spectrum.xVal[0];
            var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
            if (totalPadding / (lastValue - firstValue) > 1) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
        function testDirection(parsed, entry) {
            switch (entry) {
              case "ltr":
                parsed.dir = 0;
                break;

              case "rtl":
                parsed.dir = 1;
                break;

              default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
            }
        }
        function testBehaviour(parsed, entry) {
            if (typeof entry !== "string") throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
            var tap = entry.indexOf("tap") >= 0;
            var drag = entry.indexOf("drag") >= 0;
            var fixed = entry.indexOf("fixed") >= 0;
            var snap = entry.indexOf("snap") >= 0;
            var hover = entry.indexOf("hover") >= 0;
            var unconstrained = entry.indexOf("unconstrained") >= 0;
            var dragAll = entry.indexOf("drag-all") >= 0;
            var smoothSteps = entry.indexOf("smooth-steps") >= 0;
            if (fixed) {
                if (parsed.handles !== 2) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
                testMargin(parsed, parsed.start[1] - parsed.start[0]);
            }
            if (unconstrained && (parsed.margin || parsed.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
            parsed.events = {
                tap: tap || snap,
                drag,
                dragAll,
                smoothSteps,
                fixed,
                snap,
                hover,
                unconstrained
            };
        }
        function testTooltips(parsed, entry) {
            if (entry === false) return;
            if (entry === true || isValidPartialFormatter(entry)) {
                parsed.tooltips = [];
                for (var i = 0; i < parsed.handles; i++) parsed.tooltips.push(entry);
            } else {
                entry = asArray(entry);
                if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
                entry.forEach((function(formatter) {
                    if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }));
                parsed.tooltips = entry;
            }
        }
        function testHandleAttributes(parsed, entry) {
            if (entry.length !== parsed.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
            parsed.handleAttributes = entry;
        }
        function testAriaFormat(parsed, entry) {
            if (!isValidPartialFormatter(entry)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
            parsed.ariaFormat = entry;
        }
        function testFormat(parsed, entry) {
            if (!isValidFormatter(entry)) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
            parsed.format = entry;
        }
        function testKeyboardSupport(parsed, entry) {
            if (typeof entry !== "boolean") throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
            parsed.keyboardSupport = entry;
        }
        function testDocumentElement(parsed, entry) {
            parsed.documentElement = entry;
        }
        function testCssPrefix(parsed, entry) {
            if (typeof entry !== "string" && entry !== false) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
            parsed.cssPrefix = entry;
        }
        function testCssClasses(parsed, entry) {
            if (typeof entry !== "object") throw new Error("noUiSlider: 'cssClasses' must be an object.");
            if (typeof parsed.cssPrefix === "string") {
                parsed.cssClasses = {};
                Object.keys(entry).forEach((function(key) {
                    parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
                }));
            } else parsed.cssClasses = entry;
        }
        function testOptions(options) {
            var parsed = {
                margin: null,
                limit: null,
                padding: null,
                animate: true,
                animationDuration: 300,
                ariaFormat: defaultFormatter,
                format: defaultFormatter
            };
            var tests = {
                step: {
                    r: false,
                    t: testStep
                },
                keyboardPageMultiplier: {
                    r: false,
                    t: testKeyboardPageMultiplier
                },
                keyboardMultiplier: {
                    r: false,
                    t: testKeyboardMultiplier
                },
                keyboardDefaultStep: {
                    r: false,
                    t: testKeyboardDefaultStep
                },
                start: {
                    r: true,
                    t: testStart
                },
                connect: {
                    r: true,
                    t: testConnect
                },
                direction: {
                    r: true,
                    t: testDirection
                },
                snap: {
                    r: false,
                    t: testSnap
                },
                animate: {
                    r: false,
                    t: testAnimate
                },
                animationDuration: {
                    r: false,
                    t: testAnimationDuration
                },
                range: {
                    r: true,
                    t: testRange
                },
                orientation: {
                    r: false,
                    t: testOrientation
                },
                margin: {
                    r: false,
                    t: testMargin
                },
                limit: {
                    r: false,
                    t: testLimit
                },
                padding: {
                    r: false,
                    t: testPadding
                },
                behaviour: {
                    r: true,
                    t: testBehaviour
                },
                ariaFormat: {
                    r: false,
                    t: testAriaFormat
                },
                format: {
                    r: false,
                    t: testFormat
                },
                tooltips: {
                    r: false,
                    t: testTooltips
                },
                keyboardSupport: {
                    r: true,
                    t: testKeyboardSupport
                },
                documentElement: {
                    r: false,
                    t: testDocumentElement
                },
                cssPrefix: {
                    r: true,
                    t: testCssPrefix
                },
                cssClasses: {
                    r: true,
                    t: testCssClasses
                },
                handleAttributes: {
                    r: false,
                    t: testHandleAttributes
                }
            };
            var defaults = {
                connect: false,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: true,
                cssPrefix: "noUi-",
                cssClasses,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10
            };
            if (options.format && !options.ariaFormat) options.ariaFormat = options.format;
            Object.keys(tests).forEach((function(name) {
                if (!isSet(options[name]) && defaults[name] === void 0) {
                    if (tests[name].r) throw new Error("noUiSlider: '" + name + "' is required.");
                    return;
                }
                tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
            }));
            parsed.pips = options.pips;
            var d = document.createElement("div");
            var msPrefix = d.style.msTransform !== void 0;
            var noPrefix = d.style.transform !== void 0;
            parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
            var styles = [ [ "left", "top" ], [ "right", "bottom" ] ];
            parsed.style = styles[parsed.dir][parsed.ort];
            return parsed;
        }
        function scope(target, options, originalOptions) {
            var actions = getActions();
            var supportsTouchActionNone = getSupportsTouchActionNone();
            var supportsPassive = supportsTouchActionNone && getSupportsPassive();
            var scope_Target = target;
            var scope_Base;
            var scope_Handles;
            var scope_Connects;
            var scope_Pips;
            var scope_Tooltips;
            var scope_Spectrum = options.spectrum;
            var scope_Values = [];
            var scope_Locations = [];
            var scope_HandleNumbers = [];
            var scope_ActiveHandlesCount = 0;
            var scope_Events = {};
            var scope_Document = target.ownerDocument;
            var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
            var scope_Body = scope_Document.body;
            var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
            function addNodeTo(addTarget, className) {
                var div = scope_Document.createElement("div");
                if (className) addClass(div, className);
                addTarget.appendChild(div);
                return div;
            }
            function addOrigin(base, handleNumber) {
                var origin = addNodeTo(base, options.cssClasses.origin);
                var handle = addNodeTo(origin, options.cssClasses.handle);
                addNodeTo(handle, options.cssClasses.touchArea);
                handle.setAttribute("data-handle", String(handleNumber));
                if (options.keyboardSupport) {
                    handle.setAttribute("tabindex", "0");
                    handle.addEventListener("keydown", (function(event) {
                        return eventKeydown(event, handleNumber);
                    }));
                }
                if (options.handleAttributes !== void 0) {
                    var attributes_1 = options.handleAttributes[handleNumber];
                    Object.keys(attributes_1).forEach((function(attribute) {
                        handle.setAttribute(attribute, attributes_1[attribute]);
                    }));
                }
                handle.setAttribute("role", "slider");
                handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
                if (handleNumber === 0) addClass(handle, options.cssClasses.handleLower); else if (handleNumber === options.handles - 1) addClass(handle, options.cssClasses.handleUpper);
                origin.handle = handle;
                return origin;
            }
            function addConnect(base, add) {
                if (!add) return false;
                return addNodeTo(base, options.cssClasses.connect);
            }
            function addElements(connectOptions, base) {
                var connectBase = addNodeTo(base, options.cssClasses.connects);
                scope_Handles = [];
                scope_Connects = [];
                scope_Connects.push(addConnect(connectBase, connectOptions[0]));
                for (var i = 0; i < options.handles; i++) {
                    scope_Handles.push(addOrigin(base, i));
                    scope_HandleNumbers[i] = i;
                    scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
                }
            }
            function addSlider(addTarget) {
                addClass(addTarget, options.cssClasses.target);
                if (options.dir === 0) addClass(addTarget, options.cssClasses.ltr); else addClass(addTarget, options.cssClasses.rtl);
                if (options.ort === 0) addClass(addTarget, options.cssClasses.horizontal); else addClass(addTarget, options.cssClasses.vertical);
                var textDirection = getComputedStyle(addTarget).direction;
                if (textDirection === "rtl") addClass(addTarget, options.cssClasses.textDirectionRtl); else addClass(addTarget, options.cssClasses.textDirectionLtr);
                return addNodeTo(addTarget, options.cssClasses.base);
            }
            function addTooltip(handle, handleNumber) {
                if (!options.tooltips || !options.tooltips[handleNumber]) return false;
                return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
            }
            function isSliderDisabled() {
                return scope_Target.hasAttribute("disabled");
            }
            function isHandleDisabled(handleNumber) {
                var handleOrigin = scope_Handles[handleNumber];
                return handleOrigin.hasAttribute("disabled");
            }
            function disable(handleNumber) {
                if (handleNumber !== null && handleNumber !== void 0) {
                    scope_Handles[handleNumber].setAttribute("disabled", "");
                    scope_Handles[handleNumber].handle.removeAttribute("tabindex");
                } else {
                    scope_Target.setAttribute("disabled", "");
                    scope_Handles.forEach((function(handle) {
                        handle.handle.removeAttribute("tabindex");
                    }));
                }
            }
            function enable(handleNumber) {
                if (handleNumber !== null && handleNumber !== void 0) {
                    scope_Handles[handleNumber].removeAttribute("disabled");
                    scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
                } else {
                    scope_Target.removeAttribute("disabled");
                    scope_Handles.forEach((function(handle) {
                        handle.removeAttribute("disabled");
                        handle.handle.setAttribute("tabindex", "0");
                    }));
                }
            }
            function removeTooltips() {
                if (scope_Tooltips) {
                    removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                    scope_Tooltips.forEach((function(tooltip) {
                        if (tooltip) removeElement(tooltip);
                    }));
                    scope_Tooltips = null;
                }
            }
            function tooltips() {
                removeTooltips();
                scope_Tooltips = scope_Handles.map(addTooltip);
                bindEvent("update" + INTERNAL_EVENT_NS.tooltips, (function(values, handleNumber, unencoded) {
                    if (!scope_Tooltips || !options.tooltips) return;
                    if (scope_Tooltips[handleNumber] === false) return;
                    var formattedValue = values[handleNumber];
                    if (options.tooltips[handleNumber] !== true) formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                    scope_Tooltips[handleNumber].innerHTML = formattedValue;
                }));
            }
            function aria() {
                removeEvent("update" + INTERNAL_EVENT_NS.aria);
                bindEvent("update" + INTERNAL_EVENT_NS.aria, (function(values, handleNumber, unencoded, tap, positions) {
                    scope_HandleNumbers.forEach((function(index) {
                        var handle = scope_Handles[index];
                        var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                        var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                        var now = positions[index];
                        var text = String(options.ariaFormat.to(unencoded[index]));
                        min = scope_Spectrum.fromStepping(min).toFixed(1);
                        max = scope_Spectrum.fromStepping(max).toFixed(1);
                        now = scope_Spectrum.fromStepping(now).toFixed(1);
                        handle.children[0].setAttribute("aria-valuemin", min);
                        handle.children[0].setAttribute("aria-valuemax", max);
                        handle.children[0].setAttribute("aria-valuenow", now);
                        handle.children[0].setAttribute("aria-valuetext", text);
                    }));
                }));
            }
            function getGroup(pips) {
                if (pips.mode === PipsMode.Range || pips.mode === PipsMode.Steps) return scope_Spectrum.xVal;
                if (pips.mode === PipsMode.Count) {
                    if (pips.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                    var interval = pips.values - 1;
                    var spread = 100 / interval;
                    var values = [];
                    while (interval--) values[interval] = interval * spread;
                    values.push(100);
                    return mapToRange(values, pips.stepped);
                }
                if (pips.mode === PipsMode.Positions) return mapToRange(pips.values, pips.stepped);
                if (pips.mode === PipsMode.Values) {
                    if (pips.stepped) return pips.values.map((function(value) {
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    }));
                    return pips.values;
                }
                return [];
            }
            function mapToRange(values, stepped) {
                return values.map((function(value) {
                    return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
                }));
            }
            function generateSpread(pips) {
                function safeIncrement(value, increment) {
                    return Number((value + increment).toFixed(7));
                }
                var group = getGroup(pips);
                var indexes = {};
                var firstInRange = scope_Spectrum.xVal[0];
                var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
                var ignoreFirst = false;
                var ignoreLast = false;
                var prevPct = 0;
                group = unique(group.slice().sort((function(a, b) {
                    return a - b;
                })));
                if (group[0] !== firstInRange) {
                    group.unshift(firstInRange);
                    ignoreFirst = true;
                }
                if (group[group.length - 1] !== lastInRange) {
                    group.push(lastInRange);
                    ignoreLast = true;
                }
                group.forEach((function(current, index) {
                    var step;
                    var i;
                    var q;
                    var low = current;
                    var high = group[index + 1];
                    var newPct;
                    var pctDifference;
                    var pctPos;
                    var type;
                    var steps;
                    var realSteps;
                    var stepSize;
                    var isSteps = pips.mode === PipsMode.Steps;
                    if (isSteps) step = scope_Spectrum.xNumSteps[index];
                    if (!step) step = high - low;
                    if (high === void 0) high = low;
                    step = Math.max(step, 1e-7);
                    for (i = low; i <= high; i = safeIncrement(i, step)) {
                        newPct = scope_Spectrum.toStepping(i);
                        pctDifference = newPct - prevPct;
                        steps = pctDifference / (pips.density || 1);
                        realSteps = Math.round(steps);
                        stepSize = pctDifference / realSteps;
                        for (q = 1; q <= realSteps; q += 1) {
                            pctPos = prevPct + q * stepSize;
                            indexes[pctPos.toFixed(5)] = [ scope_Spectrum.fromStepping(pctPos), 0 ];
                        }
                        type = group.indexOf(i) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
                        if (!index && ignoreFirst && i !== high) type = 0;
                        if (!(i === high && ignoreLast)) indexes[newPct.toFixed(5)] = [ i, type ];
                        prevPct = newPct;
                    }
                }));
                return indexes;
            }
            function addMarking(spread, filterFunc, formatter) {
                var _a, _b;
                var element = scope_Document.createElement("div");
                var valueSizeClasses = (_a = {}, _a[PipsType.None] = "", _a[PipsType.NoValue] = options.cssClasses.valueNormal, 
                _a[PipsType.LargeValue] = options.cssClasses.valueLarge, _a[PipsType.SmallValue] = options.cssClasses.valueSub, 
                _a);
                var markerSizeClasses = (_b = {}, _b[PipsType.None] = "", _b[PipsType.NoValue] = options.cssClasses.markerNormal, 
                _b[PipsType.LargeValue] = options.cssClasses.markerLarge, _b[PipsType.SmallValue] = options.cssClasses.markerSub, 
                _b);
                var valueOrientationClasses = [ options.cssClasses.valueHorizontal, options.cssClasses.valueVertical ];
                var markerOrientationClasses = [ options.cssClasses.markerHorizontal, options.cssClasses.markerVertical ];
                addClass(element, options.cssClasses.pips);
                addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
                function getClasses(type, source) {
                    var a = source === options.cssClasses.value;
                    var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                    var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                    return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
                }
                function addSpread(offset, value, type) {
                    type = filterFunc ? filterFunc(value, type) : type;
                    if (type === PipsType.None) return;
                    var node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.marker);
                    node.style[options.style] = offset + "%";
                    if (type > PipsType.NoValue) {
                        node = addNodeTo(element, false);
                        node.className = getClasses(type, options.cssClasses.value);
                        node.setAttribute("data-value", String(value));
                        node.style[options.style] = offset + "%";
                        node.innerHTML = String(formatter.to(value));
                    }
                }
                Object.keys(spread).forEach((function(offset) {
                    addSpread(offset, spread[offset][0], spread[offset][1]);
                }));
                return element;
            }
            function removePips() {
                if (scope_Pips) {
                    removeElement(scope_Pips);
                    scope_Pips = null;
                }
            }
            function pips(pips) {
                removePips();
                var spread = generateSpread(pips);
                var filter = pips.filter;
                var format = pips.format || {
                    to: function(value) {
                        return String(Math.round(value));
                    }
                };
                scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
                return scope_Pips;
            }
            function baseSize() {
                var rect = scope_Base.getBoundingClientRect();
                var alt = "offset" + [ "Width", "Height" ][options.ort];
                return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
            }
            function attachEvent(events, element, callback, data) {
                var method = function(event) {
                    var e = fixEvent(event, data.pageOffset, data.target || element);
                    if (!e) return false;
                    if (isSliderDisabled() && !data.doNotReject) return false;
                    if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) return false;
                    if (events === actions.start && e.buttons !== void 0 && e.buttons > 1) return false;
                    if (data.hover && e.buttons) return false;
                    if (!supportsPassive) e.preventDefault();
                    e.calcPoint = e.points[options.ort];
                    callback(e, data);
                    return;
                };
                var methods = [];
                events.split(" ").forEach((function(eventName) {
                    element.addEventListener(eventName, method, supportsPassive ? {
                        passive: true
                    } : false);
                    methods.push([ eventName, method ]);
                }));
                return methods;
            }
            function fixEvent(e, pageOffset, eventTarget) {
                var touch = e.type.indexOf("touch") === 0;
                var mouse = e.type.indexOf("mouse") === 0;
                var pointer = e.type.indexOf("pointer") === 0;
                var x = 0;
                var y = 0;
                if (e.type.indexOf("MSPointer") === 0) pointer = true;
                if (e.type === "mousedown" && !e.buttons && !e.touches) return false;
                if (touch) {
                    var isTouchOnTarget = function(checkTouch) {
                        var target = checkTouch.target;
                        return target === eventTarget || eventTarget.contains(target) || e.composed && e.composedPath().shift() === eventTarget;
                    };
                    if (e.type === "touchstart") {
                        var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                        if (targetTouches.length > 1) return false;
                        x = targetTouches[0].pageX;
                        y = targetTouches[0].pageY;
                    } else {
                        var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                        if (!targetTouch) return false;
                        x = targetTouch.pageX;
                        y = targetTouch.pageY;
                    }
                }
                pageOffset = pageOffset || getPageOffset(scope_Document);
                if (mouse || pointer) {
                    x = e.clientX + pageOffset.x;
                    y = e.clientY + pageOffset.y;
                }
                e.pageOffset = pageOffset;
                e.points = [ x, y ];
                e.cursor = mouse || pointer;
                return e;
            }
            function calcPointToPercentage(calcPoint) {
                var location = calcPoint - offset(scope_Base, options.ort);
                var proposal = location * 100 / baseSize();
                proposal = limit(proposal);
                return options.dir ? 100 - proposal : proposal;
            }
            function getClosestHandle(clickedPosition) {
                var smallestDifference = 100;
                var handleNumber = false;
                scope_Handles.forEach((function(handle, index) {
                    if (isHandleDisabled(index)) return;
                    var handlePosition = scope_Locations[index];
                    var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                    var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                    var isCloser = differenceWithThisHandle < smallestDifference;
                    var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                    if (isCloser || isCloserAfter || clickAtEdge) {
                        handleNumber = index;
                        smallestDifference = differenceWithThisHandle;
                    }
                }));
                return handleNumber;
            }
            function documentLeave(event, data) {
                if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) eventEnd(event, data);
            }
            function eventMove(event, data) {
                if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) return eventEnd(event, data);
                var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
                var proposal = movement * 100 / data.baseSize;
                moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
            }
            function eventEnd(event, data) {
                if (data.handle) {
                    removeClass(data.handle, options.cssClasses.active);
                    scope_ActiveHandlesCount -= 1;
                }
                data.listeners.forEach((function(c) {
                    scope_DocumentElement.removeEventListener(c[0], c[1]);
                }));
                if (scope_ActiveHandlesCount === 0) {
                    removeClass(scope_Target, options.cssClasses.drag);
                    setZindex();
                    if (event.cursor) {
                        scope_Body.style.cursor = "";
                        scope_Body.removeEventListener("selectstart", preventDefault);
                    }
                }
                if (options.events.smoothSteps) {
                    data.handleNumbers.forEach((function(handleNumber) {
                        setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
                    }));
                    data.handleNumbers.forEach((function(handleNumber) {
                        fireEvent("update", handleNumber);
                    }));
                }
                data.handleNumbers.forEach((function(handleNumber) {
                    fireEvent("change", handleNumber);
                    fireEvent("set", handleNumber);
                    fireEvent("end", handleNumber);
                }));
            }
            function eventStart(event, data) {
                if (data.handleNumbers.some(isHandleDisabled)) return;
                var handle;
                if (data.handleNumbers.length === 1) {
                    var handleOrigin = scope_Handles[data.handleNumbers[0]];
                    handle = handleOrigin.children[0];
                    scope_ActiveHandlesCount += 1;
                    addClass(handle, options.cssClasses.active);
                }
                event.stopPropagation();
                var listeners = [];
                var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                    target: event.target,
                    handle,
                    connect: data.connect,
                    listeners,
                    startCalcPoint: event.calcPoint,
                    baseSize: baseSize(),
                    pageOffset: event.pageOffset,
                    handleNumbers: data.handleNumbers,
                    buttonsProperty: event.buttons,
                    locations: scope_Locations.slice()
                });
                var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                    target: event.target,
                    handle,
                    listeners,
                    doNotReject: true,
                    handleNumbers: data.handleNumbers
                });
                var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                    target: event.target,
                    handle,
                    listeners,
                    doNotReject: true,
                    handleNumbers: data.handleNumbers
                });
                listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
                if (event.cursor) {
                    scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                    if (scope_Handles.length > 1) addClass(scope_Target, options.cssClasses.drag);
                    scope_Body.addEventListener("selectstart", preventDefault, false);
                }
                data.handleNumbers.forEach((function(handleNumber) {
                    fireEvent("start", handleNumber);
                }));
            }
            function eventTap(event) {
                event.stopPropagation();
                var proposal = calcPointToPercentage(event.calcPoint);
                var handleNumber = getClosestHandle(proposal);
                if (handleNumber === false) return;
                if (!options.events.snap) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
                setHandle(handleNumber, proposal, true, true);
                setZindex();
                fireEvent("slide", handleNumber, true);
                fireEvent("update", handleNumber, true);
                if (!options.events.snap) {
                    fireEvent("change", handleNumber, true);
                    fireEvent("set", handleNumber, true);
                } else eventStart(event, {
                    handleNumbers: [ handleNumber ]
                });
            }
            function eventHover(event) {
                var proposal = calcPointToPercentage(event.calcPoint);
                var to = scope_Spectrum.getStep(proposal);
                var value = scope_Spectrum.fromStepping(to);
                Object.keys(scope_Events).forEach((function(targetEvent) {
                    if ("hover" === targetEvent.split(".")[0]) scope_Events[targetEvent].forEach((function(callback) {
                        callback.call(scope_Self, value);
                    }));
                }));
            }
            function eventKeydown(event, handleNumber) {
                if (isSliderDisabled() || isHandleDisabled(handleNumber)) return false;
                var horizontalKeys = [ "Left", "Right" ];
                var verticalKeys = [ "Down", "Up" ];
                var largeStepKeys = [ "PageDown", "PageUp" ];
                var edgeKeys = [ "Home", "End" ];
                if (options.dir && !options.ort) horizontalKeys.reverse(); else if (options.ort && !options.dir) {
                    verticalKeys.reverse();
                    largeStepKeys.reverse();
                }
                var key = event.key.replace("Arrow", "");
                var isLargeDown = key === largeStepKeys[0];
                var isLargeUp = key === largeStepKeys[1];
                var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
                var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
                var isMin = key === edgeKeys[0];
                var isMax = key === edgeKeys[1];
                if (!isDown && !isUp && !isMin && !isMax) return true;
                event.preventDefault();
                var to;
                if (isUp || isDown) {
                    var direction = isDown ? 0 : 1;
                    var steps = getNextStepsForHandle(handleNumber);
                    var step = steps[direction];
                    if (step === null) return false;
                    if (step === false) step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                    if (isLargeUp || isLargeDown) step *= options.keyboardPageMultiplier; else step *= options.keyboardMultiplier;
                    step = Math.max(step, 1e-7);
                    step *= isDown ? -1 : 1;
                    to = scope_Values[handleNumber] + step;
                } else if (isMax) to = options.spectrum.xVal[options.spectrum.xVal.length - 1]; else to = options.spectrum.xVal[0];
                setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
                fireEvent("slide", handleNumber);
                fireEvent("update", handleNumber);
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                return false;
            }
            function bindSliderEvents(behaviour) {
                if (!behaviour.fixed) scope_Handles.forEach((function(handle, index) {
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [ index ]
                    });
                }));
                if (behaviour.tap) attachEvent(actions.start, scope_Base, eventTap, {});
                if (behaviour.hover) attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true
                });
                if (behaviour.drag) scope_Connects.forEach((function(connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) return;
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [ connect ];
                    var handlesToDrag = [ handleBefore, handleAfter ];
                    var handleNumbersToDrag = [ index - 1, index ];
                    addClass(connect, options.cssClasses.draggable);
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    if (behaviour.dragAll) {
                        handlesToDrag = scope_Handles;
                        handleNumbersToDrag = scope_HandleNumbers;
                    }
                    eventHolders.forEach((function(eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: handlesToDrag,
                            handleNumbers: handleNumbersToDrag,
                            connect
                        });
                    }));
                }));
            }
            function bindEvent(namespacedEvent, callback) {
                scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
                scope_Events[namespacedEvent].push(callback);
                if (namespacedEvent.split(".")[0] === "update") scope_Handles.forEach((function(a, index) {
                    fireEvent("update", index);
                }));
            }
            function isInternalNamespace(namespace) {
                return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
            }
            function removeEvent(namespacedEvent) {
                var event = namespacedEvent && namespacedEvent.split(".")[0];
                var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
                Object.keys(scope_Events).forEach((function(bind) {
                    var tEvent = bind.split(".")[0];
                    var tNamespace = bind.substring(tEvent.length);
                    if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) if (!isInternalNamespace(tNamespace) || namespace === tNamespace) delete scope_Events[bind];
                }));
            }
            function fireEvent(eventName, handleNumber, tap) {
                Object.keys(scope_Events).forEach((function(targetEvent) {
                    var eventType = targetEvent.split(".")[0];
                    if (eventName === eventType) scope_Events[targetEvent].forEach((function(callback) {
                        callback.call(scope_Self, scope_Values.map(options.format.to), handleNumber, scope_Values.slice(), tap || false, scope_Locations.slice(), scope_Self);
                    }));
                }));
            }
            function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
                var distance;
                if (scope_Handles.length > 1 && !options.events.unconstrained) {
                    if (lookBackward && handleNumber > 0) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                        to = Math.max(to, distance);
                    }
                    if (lookForward && handleNumber < scope_Handles.length - 1) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                        to = Math.min(to, distance);
                    }
                }
                if (scope_Handles.length > 1 && options.limit) {
                    if (lookBackward && handleNumber > 0) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                        to = Math.min(to, distance);
                    }
                    if (lookForward && handleNumber < scope_Handles.length - 1) {
                        distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                        to = Math.max(to, distance);
                    }
                }
                if (options.padding) {
                    if (handleNumber === 0) {
                        distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                        to = Math.max(to, distance);
                    }
                    if (handleNumber === scope_Handles.length - 1) {
                        distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                        to = Math.min(to, distance);
                    }
                }
                if (!smoothSteps) to = scope_Spectrum.getStep(to);
                to = limit(to);
                if (to === reference[handleNumber] && !getValue) return false;
                return to;
            }
            function inRuleOrder(v, a) {
                var o = options.ort;
                return (o ? a : v) + ", " + (o ? v : a);
            }
            function moveHandles(upward, proposal, locations, handleNumbers, connect) {
                var proposals = locations.slice();
                var firstHandle = handleNumbers[0];
                var smoothSteps = options.events.smoothSteps;
                var b = [ !upward, upward ];
                var f = [ upward, !upward ];
                handleNumbers = handleNumbers.slice();
                if (upward) handleNumbers.reverse();
                if (handleNumbers.length > 1) handleNumbers.forEach((function(handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                    if (to === false) proposal = 0; else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                })); else b = f = [ true ];
                var state = false;
                handleNumbers.forEach((function(handleNumber, o) {
                    state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
                }));
                if (state) {
                    handleNumbers.forEach((function(handleNumber) {
                        fireEvent("update", handleNumber);
                        fireEvent("slide", handleNumber);
                    }));
                    if (connect != void 0) fireEvent("drag", firstHandle);
                }
            }
            function transformDirection(a, b) {
                return options.dir ? 100 - a - b : a;
            }
            function updateHandlePosition(handleNumber, to) {
                scope_Locations[handleNumber] = to;
                scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
                var translation = transformDirection(to, 0) - scope_DirOffset;
                var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
                scope_Handles[handleNumber].style[options.transformRule] = translateRule;
                updateConnect(handleNumber);
                updateConnect(handleNumber + 1);
            }
            function setZindex() {
                scope_HandleNumbers.forEach((function(handleNumber) {
                    var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                    var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                    scope_Handles[handleNumber].style.zIndex = String(zIndex);
                }));
            }
            function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
                if (!exactInput) to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
                if (to === false) return false;
                updateHandlePosition(handleNumber, to);
                return true;
            }
            function updateConnect(index) {
                if (!scope_Connects[index]) return;
                var l = 0;
                var h = 100;
                if (index !== 0) l = scope_Locations[index - 1];
                if (index !== scope_Connects.length - 1) h = scope_Locations[index];
                var connectWidth = h - l;
                var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
                var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
                scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
            }
            function resolveToValue(to, handleNumber) {
                if (to === null || to === false || to === void 0) return scope_Locations[handleNumber];
                if (typeof to === "number") to = String(to);
                to = options.format.from(to);
                if (to !== false) to = scope_Spectrum.toStepping(to);
                if (to === false || isNaN(to)) return scope_Locations[handleNumber];
                return to;
            }
            function valueSet(input, fireSetEvent, exactInput) {
                var values = asArray(input);
                var isInit = scope_Locations[0] === void 0;
                fireSetEvent = fireSetEvent === void 0 ? true : fireSetEvent;
                if (options.animate && !isInit) addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
                scope_HandleNumbers.forEach((function(handleNumber) {
                    setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
                }));
                var i = scope_HandleNumbers.length === 1 ? 0 : 1;
                if (isInit && scope_Spectrum.hasNoSize()) {
                    exactInput = true;
                    scope_Locations[0] = 0;
                    if (scope_HandleNumbers.length > 1) {
                        var space_1 = 100 / (scope_HandleNumbers.length - 1);
                        scope_HandleNumbers.forEach((function(handleNumber) {
                            scope_Locations[handleNumber] = handleNumber * space_1;
                        }));
                    }
                }
                for (;i < scope_HandleNumbers.length; ++i) scope_HandleNumbers.forEach((function(handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                }));
                setZindex();
                scope_HandleNumbers.forEach((function(handleNumber) {
                    fireEvent("update", handleNumber);
                    if (values[handleNumber] !== null && fireSetEvent) fireEvent("set", handleNumber);
                }));
            }
            function valueReset(fireSetEvent) {
                valueSet(options.start, fireSetEvent);
            }
            function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
                handleNumber = Number(handleNumber);
                if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
                setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
                fireEvent("update", handleNumber);
                if (fireSetEvent) fireEvent("set", handleNumber);
            }
            function valueGet(unencoded) {
                if (unencoded === void 0) unencoded = false;
                if (unencoded) return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
                var values = scope_Values.map(options.format.to);
                if (values.length === 1) return values[0];
                return values;
            }
            function destroy() {
                removeEvent(INTERNAL_EVENT_NS.aria);
                removeEvent(INTERNAL_EVENT_NS.tooltips);
                Object.keys(options.cssClasses).forEach((function(key) {
                    removeClass(scope_Target, options.cssClasses[key]);
                }));
                while (scope_Target.firstChild) scope_Target.removeChild(scope_Target.firstChild);
                delete scope_Target.noUiSlider;
            }
            function getNextStepsForHandle(handleNumber) {
                var location = scope_Locations[handleNumber];
                var nearbySteps = scope_Spectrum.getNearbySteps(location);
                var value = scope_Values[handleNumber];
                var increment = nearbySteps.thisStep.step;
                var decrement = null;
                if (options.snap) return [ value - nearbySteps.stepBefore.startValue || null, nearbySteps.stepAfter.startValue - value || null ];
                if (increment !== false) if (value + increment > nearbySteps.stepAfter.startValue) increment = nearbySteps.stepAfter.startValue - value;
                if (value > nearbySteps.thisStep.startValue) decrement = nearbySteps.thisStep.step; else if (nearbySteps.stepBefore.step === false) decrement = false; else decrement = value - nearbySteps.stepBefore.highestStep;
                if (location === 100) increment = null; else if (location === 0) decrement = null;
                var stepDecimals = scope_Spectrum.countStepDecimals();
                if (increment !== null && increment !== false) increment = Number(increment.toFixed(stepDecimals));
                if (decrement !== null && decrement !== false) decrement = Number(decrement.toFixed(stepDecimals));
                return [ decrement, increment ];
            }
            function getNextSteps() {
                return scope_HandleNumbers.map(getNextStepsForHandle);
            }
            function updateOptions(optionsToUpdate, fireSetEvent) {
                var v = valueGet();
                var updateAble = [ "margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips" ];
                updateAble.forEach((function(name) {
                    if (optionsToUpdate[name] !== void 0) originalOptions[name] = optionsToUpdate[name];
                }));
                var newOptions = testOptions(originalOptions);
                updateAble.forEach((function(name) {
                    if (optionsToUpdate[name] !== void 0) options[name] = newOptions[name];
                }));
                scope_Spectrum = newOptions.spectrum;
                options.margin = newOptions.margin;
                options.limit = newOptions.limit;
                options.padding = newOptions.padding;
                if (options.pips) pips(options.pips); else removePips();
                if (options.tooltips) tooltips(); else removeTooltips();
                scope_Locations = [];
                valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
            }
            function setupSlider() {
                scope_Base = addSlider(scope_Target);
                addElements(options.connect, scope_Base);
                bindSliderEvents(options.events);
                valueSet(options.start);
                if (options.pips) pips(options.pips);
                if (options.tooltips) tooltips();
                aria();
            }
            setupSlider();
            var scope_Self = {
                destroy,
                steps: getNextSteps,
                on: bindEvent,
                off: removeEvent,
                get: valueGet,
                set: valueSet,
                setHandle: valueSetHandle,
                reset: valueReset,
                disable,
                enable,
                __moveHandles: function(upward, proposal, handleNumbers) {
                    moveHandles(upward, proposal, scope_Locations, handleNumbers);
                },
                options: originalOptions,
                updateOptions,
                target: scope_Target,
                removePips,
                removeTooltips,
                getPositions: function() {
                    return scope_Locations.slice();
                },
                getTooltips: function() {
                    return scope_Tooltips;
                },
                getOrigins: function() {
                    return scope_Handles;
                },
                pips
            };
            return scope_Self;
        }
        function initialize(target, originalOptions) {
            if (!target || !target.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + target);
            if (target.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
            var options = testOptions(originalOptions);
            var api = scope(target, options, originalOptions);
            target.noUiSlider = api;
            return api;
        }
        const nouislider = {
            __spectrum: Spectrum,
            cssClasses,
            create: initialize
        };
        if (document.querySelector("._range-slider")) {
            const sliderList = document.querySelectorAll("._range-slider");
            sliderList.forEach((item => {
                nouislider.create(item, {
                    start: [ 6e3, 25500 ],
                    connect: true,
                    range: {
                        min: 1800,
                        max: 35500
                    }
                });
            }));
        }
        if (document.querySelector(".catalog-body__side")) {
            const openBtn = document.querySelectorAll(".catalog-filter-open-btn");
            const closeBtn = document.querySelectorAll(".catalog-filter-close-btn");
            const category = document.querySelector(".catalog-body__side");
            const openCategory = () => {
                category.classList.add("_open");
            };
            const closeCategory = () => {
                category.classList.remove("_open");
            };
            openBtn.forEach((item => {
                item.addEventListener("click", (() => {
                    if (category.classList.contains("_open")) closeCategory(); else openCategory();
                }));
            }));
            closeBtn.forEach((item => {
                item.addEventListener("click", (() => {
                    closeCategory();
                }));
            }));
        }
        if (document.querySelector("._catalog_card")) {
            const catalog = document.querySelector("._catalog_card");
            const catalogCardType = catalog.querySelectorAll("._type input");
            const catalogContent = catalog.querySelector("._catalog_card_list");
            catalogCardType.forEach(((item, index) => {
                item.addEventListener("change", (() => {
                    if (item.dataset.cardType === "row") catalogContent.classList.add("_horizontal"); else catalogContent.classList.remove("_horizontal");
                }));
            }));
        }
        if (document.querySelector(".lk_orders-item")) {
            const itemList = document.querySelectorAll(".lk_orders-item");
            itemList.forEach((item => {
                const btn = window.innerWidth > 767 ? item.querySelector(".lk_orders-item__top") : item.querySelector(".lk_orders-item__btn");
                const content = item.querySelector(".lk_orders-item__content");
                btn.addEventListener("click", (() => {
                    if (item.classList.contains("_open")) {
                        item.classList.remove("_open");
                        content.style.height = 0;
                    } else {
                        item.classList.add("_open");
                        content.style.height = `${content.scrollHeight}px`;
                    }
                }));
            }));
        }
        if (document.querySelector(".header_cart")) {
            const openBtn = document.querySelectorAll(".header_cart-open-btn");
            const cart = document.querySelector(".header_cart");
            const openCart = () => {
                openBtn.forEach((item => {
                    item.classList.add("_open");
                }));
                cart.classList.add("_open");
            };
            const closeCart = () => {
                openBtn.forEach((item => {
                    item.classList.remove("_open");
                }));
                cart.classList.remove("_open");
            };
            openBtn.forEach((item => {
                item.addEventListener("mouseenter", (() => {
                    if (cart.classList.contains("_open")) closeCart(); else openCart();
                }));
            }));
            cart.addEventListener("mouseleave", closeCart);
        }
        function copy_isHidden(element) {
            const elementRect = element.getBoundingClientRect();
            const elementHidesUp = elementRect.top < 0;
            const elementHidesLeft = elementRect.left < 0;
            const elementHidesDown = elementRect.bottom > window.innerHeight;
            const elementHidesRight = elementRect.right > window.innerWidth;
            const elementHides = elementHidesUp || elementHidesLeft || elementHidesDown || elementHidesRight;
            return elementHides;
        }
        function fallbackCopyTextToClipboard(text) {
            var textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.position = "fixed";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                var successful = document.execCommand("copy");
                var msg = successful ? "successful" : "unsuccessful";
                console.log("Fallback: Copying text command was " + msg);
            } catch (err) {
                console.error("Fallback: Oops, unable to copy", err);
            }
            document.body.removeChild(textArea);
        }
        function copyTextToClipboard(text) {
            if (!navigator.clipboard) {
                fallbackCopyTextToClipboard(text);
                return;
            }
            navigator.clipboard.writeText(text).then((function() {
                console.log("Async: Copying to clipboard was successful!");
            }), (function(err) {
                console.error("Async: Could not copy text: ", err);
            }));
        }
        if (document.querySelector(".catalog_item-content__art")) {
            const vendorCode = document.querySelectorAll(".catalog_item-content__art");
            vendorCode.forEach((item => {
                item.querySelector("button");
                const code = item.querySelector("span");
                const copied = item.querySelector("._copied");
                item.addEventListener("click", (() => {
                    copyTextToClipboard(code.innerText);
                    copied && copied.classList.add("_open");
                    if (copy_isHidden(copied)) copied && copied.classList.add("_left"); else copied && copied.classList.remove("_left");
                    setTimeout((() => {
                        copied && copied.classList.remove("_open");
                    }), 3e3);
                }));
            }));
        }
        if (document.querySelector(".copy_item")) {
            const vendorCode = document.querySelectorAll(".copy_item");
            vendorCode.forEach((item => {
                item.querySelector("button");
                const code = item.querySelector(".copy_item__text");
                const copied = item.querySelector("._copied");
                item.addEventListener("click", (() => {
                    copyTextToClipboard(code.innerText);
                    copied && copied.classList.add("_open");
                    if (copy_isHidden(copied)) copied && copied.classList.add("_left"); else copied && copied.classList.remove("_left");
                    setTimeout((() => {
                        copied && copied.classList.remove("_open");
                    }), 3e3);
                }));
            }));
        }
        const t = (t, e = 1e4) => (t = parseFloat(t + "") || 0, Math.round((t + Number.EPSILON) * e) / e), e = function(t) {
            if (!(t && t instanceof Element && t.offsetParent)) return !1;
            const e = t.scrollHeight > t.clientHeight, i = window.getComputedStyle(t).overflowY, n = -1 !== i.indexOf("hidden"), s = -1 !== i.indexOf("visible");
            return e && !n && !s;
        }, i = function(t, n = void 0) {
            return !(!t || t === document.body || n && t === n) && (e(t) ? t : i(t.parentElement, n));
        }, n = function(t) {
            var e = (new DOMParser).parseFromString(t, "text/html").body;
            if (e.childElementCount > 1) {
                for (var i = document.createElement("div"); e.firstChild; ) i.appendChild(e.firstChild);
                return i;
            }
            return e.firstChild;
        }, s = t => `${t || ""}`.split(" ").filter((t => !!t)), o = (t, e, i) => {
            t && s(e).forEach((e => {
                t.classList.toggle(e, i || !1);
            }));
        };
        class a {
            constructor(t) {
                Object.defineProperty(this, "pageX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "pageY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "clientX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "clientY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "id", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "time", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "nativePointer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), this.nativePointer = t, this.pageX = t.pageX, this.pageY = t.pageY, this.clientX = t.clientX, 
                this.clientY = t.clientY, this.id = self.Touch && t instanceof Touch ? t.identifier : -1, 
                this.time = Date.now();
            }
        }
        const r = {
            passive: !1
        };
        class l {
            constructor(t, {start: e = (() => !0), move: i = (() => {}), end: n = (() => {})}) {
                Object.defineProperty(this, "element", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "startCallback", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "moveCallback", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "endCallback", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "currentPointers", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "startPointers", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), this.element = t, this.startCallback = e, this.moveCallback = i, this.endCallback = n;
                for (const t of [ "onPointerStart", "onTouchStart", "onMove", "onTouchEnd", "onPointerEnd", "onWindowBlur" ]) this[t] = this[t].bind(this);
                this.element.addEventListener("mousedown", this.onPointerStart, r), this.element.addEventListener("touchstart", this.onTouchStart, r), 
                this.element.addEventListener("touchmove", this.onMove, r), this.element.addEventListener("touchend", this.onTouchEnd), 
                this.element.addEventListener("touchcancel", this.onTouchEnd);
            }
            onPointerStart(t) {
                if (!t.buttons || 0 !== t.button) return;
                const e = new a(t);
                this.currentPointers.some((t => t.id === e.id)) || this.triggerPointerStart(e, t) && (window.addEventListener("mousemove", this.onMove), 
                window.addEventListener("mouseup", this.onPointerEnd), window.addEventListener("blur", this.onWindowBlur));
            }
            onTouchStart(t) {
                for (const e of Array.from(t.changedTouches || [])) this.triggerPointerStart(new a(e), t);
                window.addEventListener("blur", this.onWindowBlur);
            }
            onMove(t) {
                const e = this.currentPointers.slice(), i = "changedTouches" in t ? Array.from(t.changedTouches || []).map((t => new a(t))) : [ new a(t) ], n = [];
                for (const t of i) {
                    const e = this.currentPointers.findIndex((e => e.id === t.id));
                    e < 0 || (n.push(t), this.currentPointers[e] = t);
                }
                n.length && this.moveCallback(t, this.currentPointers.slice(), e);
            }
            onPointerEnd(t) {
                t.buttons > 0 && 0 !== t.button || (this.triggerPointerEnd(t, new a(t)), window.removeEventListener("mousemove", this.onMove), 
                window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur));
            }
            onTouchEnd(t) {
                for (const e of Array.from(t.changedTouches || [])) this.triggerPointerEnd(t, new a(e));
            }
            triggerPointerStart(t, e) {
                return !!this.startCallback(e, t, this.currentPointers.slice()) && (this.currentPointers.push(t), 
                this.startPointers.push(t), !0);
            }
            triggerPointerEnd(t, e) {
                const i = this.currentPointers.findIndex((t => t.id === e.id));
                i < 0 || (this.currentPointers.splice(i, 1), this.startPointers.splice(i, 1), this.endCallback(t, e, this.currentPointers.slice()));
            }
            onWindowBlur() {
                this.clear();
            }
            clear() {
                for (;this.currentPointers.length; ) {
                    const t = this.currentPointers[this.currentPointers.length - 1];
                    this.currentPointers.splice(this.currentPointers.length - 1, 1), this.startPointers.splice(this.currentPointers.length - 1, 1), 
                    this.endCallback(new Event("touchend", {
                        bubbles: !0,
                        cancelable: !0,
                        clientX: t.clientX,
                        clientY: t.clientY
                    }), t, this.currentPointers.slice());
                }
            }
            stop() {
                this.element.removeEventListener("mousedown", this.onPointerStart, r), this.element.removeEventListener("touchstart", this.onTouchStart, r), 
                this.element.removeEventListener("touchmove", this.onMove, r), this.element.removeEventListener("touchend", this.onTouchEnd), 
                this.element.removeEventListener("touchcancel", this.onTouchEnd), window.removeEventListener("mousemove", this.onMove), 
                window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur);
            }
        }
        function c(t, e) {
            return e ? Math.sqrt(Math.pow(e.clientX - t.clientX, 2) + Math.pow(e.clientY - t.clientY, 2)) : 0;
        }
        function h(t, e) {
            return e ? {
                clientX: (t.clientX + e.clientX) / 2,
                clientY: (t.clientY + e.clientY) / 2
            } : t;
        }
        const d = t => "object" == typeof t && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t), u = (t, ...e) => {
            const i = e.length;
            for (let n = 0; n < i; n++) {
                const i = e[n] || {};
                Object.entries(i).forEach((([e, i]) => {
                    const n = Array.isArray(i) ? [] : {};
                    t[e] || Object.assign(t, {
                        [e]: n
                    }), d(i) ? Object.assign(t[e], u(n, i)) : Array.isArray(i) ? Object.assign(t, {
                        [e]: [ ...i ]
                    }) : Object.assign(t, {
                        [e]: i
                    });
                }));
            }
            return t;
        }, p = function(t, e) {
            return t.split(".").reduce(((t, e) => "object" == typeof t ? t[e] : void 0), e);
        };
        class f {
            constructor(t = {}) {
                Object.defineProperty(this, "options", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }), Object.defineProperty(this, "events", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new Map
                }), this.setOptions(t);
                for (const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) t.startsWith("on") && "function" == typeof this[t] && (this[t] = this[t].bind(this));
            }
            setOptions(t) {
                this.options = t ? u({}, this.constructor.defaults, t) : {};
                for (const [t, e] of Object.entries(this.option("on") || {})) this.on(t, e);
            }
            option(t, ...e) {
                let i = p(t, this.options);
                return i && "function" == typeof i && (i = i.call(this, this, ...e)), i;
            }
            optionFor(t, e, i, ...n) {
                let s = p(e, t);
                var o;
                "string" != typeof (o = s) || isNaN(o) || isNaN(parseFloat(o)) || (s = parseFloat(s)), 
                "true" === s && (s = !0), "false" === s && (s = !1), s && "function" == typeof s && (s = s.call(this, this, t, ...n));
                let a = p(e, this.options);
                return a && "function" == typeof a ? s = a.call(this, this, t, ...n, s) : void 0 === s && (s = a), 
                void 0 === s ? i : s;
            }
            cn(t) {
                const e = this.options.classes;
                return e && e[t] || "";
            }
            localize(t, e = []) {
                t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, ((t, e, i) => {
                    let n = "";
                    return i ? n = this.option(`${e[0] + e.toLowerCase().substring(1)}.l10n.${i}`) : e && (n = this.option(`l10n.${e}`)), 
                    n || (n = t), n;
                }));
                for (let i = 0; i < e.length; i++) t = t.split(e[i][0]).join(e[i][1]);
                return t = t.replace(/\{\{(.*?)\}\}/g, ((t, e) => e));
            }
            on(t, e) {
                let i = [];
                "string" == typeof t ? i = t.split(" ") : Array.isArray(t) && (i = t), this.events || (this.events = new Map), 
                i.forEach((t => {
                    let i = this.events.get(t);
                    i || (this.events.set(t, []), i = []), i.includes(e) || i.push(e), this.events.set(t, i);
                }));
            }
            off(t, e) {
                let i = [];
                "string" == typeof t ? i = t.split(" ") : Array.isArray(t) && (i = t), i.forEach((t => {
                    const i = this.events.get(t);
                    if (Array.isArray(i)) {
                        const t = i.indexOf(e);
                        t > -1 && i.splice(t, 1);
                    }
                }));
            }
            emit(t, ...e) {
                [ ...this.events.get(t) || [] ].forEach((t => t(this, ...e))), "*" !== t && this.emit("*", t, ...e);
            }
        }
        Object.defineProperty(f, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "5.0.36"
        }), Object.defineProperty(f, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        });
        class g extends f {
            constructor(t = {}) {
                super(t), Object.defineProperty(this, "plugins", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                });
            }
            attachPlugins(t = {}) {
                const e = new Map;
                for (const [i, n] of Object.entries(t)) {
                    const t = this.option(i), s = this.plugins[i];
                    s || !1 === t ? s && !1 === t && (s.detach(), delete this.plugins[i]) : e.set(i, new n(this, t || {}));
                }
                for (const [t, i] of e) this.plugins[t] = i, i.attach();
            }
            detachPlugins(t) {
                t = t || Object.keys(this.plugins);
                for (const e of t) {
                    const t = this.plugins[e];
                    t && t.detach(), delete this.plugins[e];
                }
                return this.emit("detachPlugins"), this;
            }
        }
        var m;
        !function(t) {
            t[t.Init = 0] = "Init", t[t.Error = 1] = "Error", t[t.Ready = 2] = "Ready", t[t.Panning = 3] = "Panning", 
            t[t.Mousemove = 4] = "Mousemove", t[t.Destroy = 5] = "Destroy";
        }(m || (m = {}));
        const v = [ "a", "b", "c", "d", "e", "f" ], b = {
            PANUP: "Move up",
            PANDOWN: "Move down",
            PANLEFT: "Move left",
            PANRIGHT: "Move right",
            ZOOMIN: "Zoom in",
            ZOOMOUT: "Zoom out",
            TOGGLEZOOM: "Toggle zoom level",
            TOGGLE1TO1: "Toggle zoom level",
            ITERATEZOOM: "Toggle zoom level",
            ROTATECCW: "Rotate counterclockwise",
            ROTATECW: "Rotate clockwise",
            FLIPX: "Flip horizontally",
            FLIPY: "Flip vertically",
            FITX: "Fit horizontally",
            FITY: "Fit vertically",
            RESET: "Reset",
            TOGGLEFS: "Toggle fullscreen"
        }, y = {
            content: null,
            width: "auto",
            height: "auto",
            panMode: "drag",
            touch: !0,
            dragMinThreshold: 3,
            lockAxis: !1,
            mouseMoveFactor: 1,
            mouseMoveFriction: .12,
            zoom: !0,
            pinchToZoom: !0,
            panOnlyZoomed: "auto",
            minScale: 1,
            maxScale: 2,
            friction: .25,
            dragFriction: .35,
            decelFriction: .05,
            click: "toggleZoom",
            dblClick: !1,
            wheel: "zoom",
            wheelLimit: 7,
            spinner: !0,
            bounds: "auto",
            infinite: !1,
            rubberband: !0,
            bounce: !0,
            maxVelocity: 75,
            transformParent: !1,
            classes: {
                content: "f-panzoom__content",
                isLoading: "is-loading",
                canZoomIn: "can-zoom_in",
                canZoomOut: "can-zoom_out",
                isDraggable: "is-draggable",
                isDragging: "is-dragging",
                inFullscreen: "in-fullscreen",
                htmlHasFullscreen: "with-panzoom-in-fullscreen"
            },
            l10n: b
        }, w = '<circle cx="25" cy="25" r="20"></circle>', x = '<div class="f-spinner"><svg viewBox="0 0 50 50">' + w + w + "</svg></div>", E = t => t && null !== t && t instanceof Element && "nodeType" in t, S = (t, e) => {
            t && s(e).forEach((e => {
                t.classList.remove(e);
            }));
        }, P = (t, e) => {
            t && s(e).forEach((e => {
                t.classList.add(e);
            }));
        }, C = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: 0,
            f: 0
        }, T = 1e5, M = 1e4, O = "mousemove", A = "drag", L = "content", z = "auto";
        let R = null, k = null;
        class I extends g {
            get fits() {
                return this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1;
            }
            get isTouchDevice() {
                return null === k && (k = window.matchMedia("(hover: none)").matches), k;
            }
            get isMobile() {
                return null === R && (R = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)), 
                R;
            }
            get panMode() {
                return this.options.panMode !== O || this.isTouchDevice ? A : O;
            }
            get panOnlyZoomed() {
                const t = this.options.panOnlyZoomed;
                return t === z ? this.isTouchDevice : t;
            }
            get isInfinite() {
                return this.option("infinite");
            }
            get angle() {
                return 180 * Math.atan2(this.current.b, this.current.a) / Math.PI || 0;
            }
            get targetAngle() {
                return 180 * Math.atan2(this.target.b, this.target.a) / Math.PI || 0;
            }
            get scale() {
                const {a: t, b: e} = this.current;
                return Math.sqrt(t * t + e * e) || 1;
            }
            get targetScale() {
                const {a: t, b: e} = this.target;
                return Math.sqrt(t * t + e * e) || 1;
            }
            get minScale() {
                return this.option("minScale") || 1;
            }
            get fullScale() {
                const {contentRect: t} = this;
                return t.fullWidth / t.fitWidth || 1;
            }
            get maxScale() {
                return this.fullScale * (this.option("maxScale") || 1) || 1;
            }
            get coverScale() {
                const {containerRect: t, contentRect: e} = this, i = Math.max(t.height / e.fitHeight, t.width / e.fitWidth) || 1;
                return Math.min(this.fullScale, i);
            }
            get isScaling() {
                return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting;
            }
            get isContentLoading() {
                const t = this.content;
                return !!(t && t instanceof HTMLImageElement) && !t.complete;
            }
            get isResting() {
                if (this.isBouncingX || this.isBouncingY) return !1;
                for (const t of v) {
                    const e = "e" == t || "f" === t ? 1e-4 : 1e-5;
                    if (Math.abs(this.target[t] - this.current[t]) > e) return !1;
                }
                return !(!this.ignoreBounds && !this.checkBounds().inBounds);
            }
            constructor(t, e = {}, i = {}) {
                var s;
                if (super(e), Object.defineProperty(this, "pointerTracker", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "resizeObserver", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "updateTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "clickTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "rAF", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "isTicking", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "ignoreBounds", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "isBouncingX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "isBouncingY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "clicks", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "trackingPoints", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "pwt", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "cwd", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "pmme", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "friction", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: m.Init
                }), Object.defineProperty(this, "isDragging", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "content", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "spinner", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "containerRect", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0
                    }
                }), Object.defineProperty(this, "contentRect", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        fullWidth: 0,
                        fullHeight: 0,
                        fitWidth: 0,
                        fitHeight: 0,
                        width: 0,
                        height: 0
                    }
                }), Object.defineProperty(this, "dragStart", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        x: 0,
                        y: 0,
                        top: 0,
                        left: 0,
                        time: 0
                    }
                }), Object.defineProperty(this, "dragOffset", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        x: 0,
                        y: 0,
                        time: 0
                    }
                }), Object.defineProperty(this, "current", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: Object.assign({}, C)
                }), Object.defineProperty(this, "target", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: Object.assign({}, C)
                }), Object.defineProperty(this, "velocity", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        a: 0,
                        b: 0,
                        c: 0,
                        d: 0,
                        e: 0,
                        f: 0
                    }
                }), Object.defineProperty(this, "lockedAxis", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), !t) throw new Error("Container Element Not Found");
                this.container = t, this.initContent(), this.attachPlugins(Object.assign(Object.assign({}, I.Plugins), i)), 
                this.emit("attachPlugins"), this.emit("init");
                const o = this.content;
                if (o.addEventListener("load", this.onLoad), o.addEventListener("error", this.onError), 
                this.isContentLoading) {
                    if (this.option("spinner")) {
                        t.classList.add(this.cn("isLoading"));
                        const e = n(x);
                        !t.contains(o) || o.parentElement instanceof HTMLPictureElement ? this.spinner = t.appendChild(e) : this.spinner = (null === (s = o.parentElement) || void 0 === s ? void 0 : s.insertBefore(e, o)) || null;
                    }
                    this.emit("beforeLoad");
                } else queueMicrotask((() => {
                    this.enable();
                }));
            }
            initContent() {
                const {container: t} = this, e = this.cn(L);
                let i = this.option(L) || t.querySelector(`.${e}`);
                if (i || (i = t.querySelector("img,picture") || t.firstElementChild, i && P(i, e)), 
                i instanceof HTMLPictureElement && (i = i.querySelector("img")), !i) throw new Error("No content found");
                this.content = i;
            }
            onLoad() {
                const {spinner: t, container: e, state: i} = this;
                t && (t.remove(), this.spinner = null), this.option("spinner") && e.classList.remove(this.cn("isLoading")), 
                this.emit("afterLoad"), i === m.Init ? this.enable() : this.updateMetrics();
            }
            onError() {
                this.state !== m.Destroy && (this.spinner && (this.spinner.remove(), this.spinner = null), 
                this.stop(), this.detachEvents(), this.state = m.Error, this.emit("error"));
            }
            getNextScale(t) {
                const {fullScale: e, targetScale: i, coverScale: n, maxScale: s, minScale: o} = this;
                let a = o;
                switch (t) {
                  case "toggleMax":
                    a = i - o < .5 * (s - o) ? s : o;
                    break;

                  case "toggleCover":
                    a = i - o < .5 * (n - o) ? n : o;
                    break;

                  case "toggleZoom":
                    a = i - o < .5 * (e - o) ? e : o;
                    break;

                  case "iterateZoom":
                    let t = [ 1, e, s ].sort(((t, e) => t - e)), r = t.findIndex((t => t > i + 1e-5));
                    a = t[r] || 1;
                }
                return a;
            }
            attachObserver() {
                var t;
                const e = () => {
                    const {container: t, containerRect: e} = this;
                    return Math.abs(e.width - t.getBoundingClientRect().width) > .1 || Math.abs(e.height - t.getBoundingClientRect().height) > .1;
                };
                this.resizeObserver || void 0 === window.ResizeObserver || (this.resizeObserver = new ResizeObserver((() => {
                    this.updateTimer || (e() ? (this.onResize(), this.isMobile && (this.updateTimer = setTimeout((() => {
                        e() && this.onResize(), this.updateTimer = null;
                    }), 500))) : this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null));
                }))), null === (t = this.resizeObserver) || void 0 === t || t.observe(this.container);
            }
            detachObserver() {
                var t;
                null === (t = this.resizeObserver) || void 0 === t || t.disconnect();
            }
            attachEvents() {
                const {container: t} = this;
                t.addEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }), t.addEventListener("wheel", this.onWheel, {
                    passive: !1
                }), this.pointerTracker = new l(t, {
                    start: this.onPointerDown,
                    move: this.onPointerMove,
                    end: this.onPointerUp
                }), document.addEventListener(O, this.onMouseMove);
            }
            detachEvents() {
                var t;
                const {container: e} = this;
                e.removeEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }), e.removeEventListener("wheel", this.onWheel, {
                    passive: !1
                }), null === (t = this.pointerTracker) || void 0 === t || t.stop(), this.pointerTracker = null, 
                document.removeEventListener(O, this.onMouseMove), document.removeEventListener("keydown", this.onKeydown, !0), 
                this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null), this.updateTimer && (clearTimeout(this.updateTimer), 
                this.updateTimer = null);
            }
            animate() {
                this.setTargetForce();
                const t = this.friction, e = this.option("maxVelocity");
                for (const i of v) t ? (this.velocity[i] *= 1 - t, e && !this.isScaling && (this.velocity[i] = Math.max(Math.min(this.velocity[i], e), -1 * e)), 
                this.current[i] += this.velocity[i]) : this.current[i] = this.target[i];
                this.setTransform(), this.setEdgeForce(), !this.isResting || this.isDragging ? this.rAF = requestAnimationFrame((() => this.animate())) : this.stop("current");
            }
            setTargetForce() {
                for (const t of v) "e" === t && this.isBouncingX || "f" === t && this.isBouncingY || (this.velocity[t] = (1 / (1 - this.friction) - 1) * (this.target[t] - this.current[t]));
            }
            checkBounds(t = 0, e = 0) {
                const {current: i} = this, n = i.e + t, s = i.f + e, o = this.getBounds(), {x: a, y: r} = o, l = a.min, c = a.max, h = r.min, d = r.max;
                let u = 0, p = 0;
                return l !== 1 / 0 && n < l ? u = l - n : c !== 1 / 0 && n > c && (u = c - n), h !== 1 / 0 && s < h ? p = h - s : d !== 1 / 0 && s > d && (p = d - s), 
                Math.abs(u) < 1e-4 && (u = 0), Math.abs(p) < 1e-4 && (p = 0), Object.assign(Object.assign({}, o), {
                    xDiff: u,
                    yDiff: p,
                    inBounds: !u && !p
                });
            }
            clampTargetBounds() {
                const {target: t} = this, {x: e, y: i} = this.getBounds();
                e.min !== 1 / 0 && (t.e = Math.max(t.e, e.min)), e.max !== 1 / 0 && (t.e = Math.min(t.e, e.max)), 
                i.min !== 1 / 0 && (t.f = Math.max(t.f, i.min)), i.max !== 1 / 0 && (t.f = Math.min(t.f, i.max));
            }
            calculateContentDim(t = this.current) {
                const {content: e, contentRect: i} = this, {fitWidth: n, fitHeight: s, fullWidth: o, fullHeight: a} = i;
                let r = o, l = a;
                if (this.option("zoom") || 0 !== this.angle) {
                    const i = !(e instanceof HTMLImageElement) && ("none" === window.getComputedStyle(e).maxWidth || "none" === window.getComputedStyle(e).maxHeight), c = i ? o : n, h = i ? a : s, d = this.getMatrix(t), u = new DOMPoint(0, 0).matrixTransform(d), p = new DOMPoint(0 + c, 0).matrixTransform(d), f = new DOMPoint(0 + c, 0 + h).matrixTransform(d), g = new DOMPoint(0, 0 + h).matrixTransform(d), m = Math.abs(f.x - u.x), v = Math.abs(f.y - u.y), b = Math.abs(g.x - p.x), y = Math.abs(g.y - p.y);
                    r = Math.max(m, b), l = Math.max(v, y);
                }
                return {
                    contentWidth: r,
                    contentHeight: l
                };
            }
            setEdgeForce() {
                if (this.ignoreBounds || this.isDragging || this.panMode === O || this.targetScale < this.scale) return this.isBouncingX = !1, 
                void (this.isBouncingY = !1);
                const {target: t} = this, {x: e, y: i, xDiff: n, yDiff: s} = this.checkBounds();
                const o = this.option("maxVelocity");
                let a = this.velocity.e, r = this.velocity.f;
                0 !== n ? (this.isBouncingX = !0, n * a <= 0 ? a += .14 * n : (a = .14 * n, e.min !== 1 / 0 && (this.target.e = Math.max(t.e, e.min)), 
                e.max !== 1 / 0 && (this.target.e = Math.min(t.e, e.max))), o && (a = Math.max(Math.min(a, o), -1 * o))) : this.isBouncingX = !1, 
                0 !== s ? (this.isBouncingY = !0, s * r <= 0 ? r += .14 * s : (r = .14 * s, i.min !== 1 / 0 && (this.target.f = Math.max(t.f, i.min)), 
                i.max !== 1 / 0 && (this.target.f = Math.min(t.f, i.max))), o && (r = Math.max(Math.min(r, o), -1 * o))) : this.isBouncingY = !1, 
                this.isBouncingX && (this.velocity.e = a), this.isBouncingY && (this.velocity.f = r);
            }
            enable() {
                const {content: t} = this, e = new DOMMatrixReadOnly(window.getComputedStyle(t).transform);
                for (const t of v) this.current[t] = this.target[t] = e[t];
                this.updateMetrics(), this.attachObserver(), this.attachEvents(), this.state = m.Ready, 
                this.emit("ready");
            }
            onClick(t) {
                var e;
                "click" === t.type && 0 === t.detail && (this.dragOffset.x = 0, this.dragOffset.y = 0), 
                this.isDragging && (null === (e = this.pointerTracker) || void 0 === e || e.clear(), 
                this.trackingPoints = [], this.startDecelAnim());
                const i = t.target;
                if (!i || t.defaultPrevented) return;
                if (i.hasAttribute("disabled")) return t.preventDefault(), void t.stopPropagation();
                if ((() => {
                    const t = window.getSelection();
                    return t && "Range" === t.type;
                })() && !i.closest("button")) return;
                const n = i.closest("[data-panzoom-action]"), s = i.closest("[data-panzoom-change]"), o = n || s, a = o && E(o) ? o.dataset : null;
                if (a) {
                    const e = a.panzoomChange, i = a.panzoomAction;
                    if ((e || i) && t.preventDefault(), e) {
                        let t = {};
                        try {
                            t = JSON.parse(e);
                        } catch (t) {
                            console && console.warn("The given data was not valid JSON");
                        }
                        return void this.applyChange(t);
                    }
                    if (i) return void (this[i] && this[i]());
                }
                if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3) return t.preventDefault(), 
                void t.stopPropagation();
                if (i.closest("[data-fancybox]")) return;
                const r = this.content.getBoundingClientRect(), l = this.dragStart;
                if (l.time && !this.canZoomOut() && (Math.abs(r.x - l.x) > 2 || Math.abs(r.y - l.y) > 2)) return;
                this.dragStart.time = 0;
                const c = e => {
                    this.option("zoom", t) && e && "string" == typeof e && /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(e) && "function" == typeof this[e] && (t.preventDefault(), 
                    this[e]({
                        event: t
                    }));
                }, h = this.option("click", t), d = this.option("dblClick", t);
                d ? (this.clicks++, 1 == this.clicks && (this.clickTimer = setTimeout((() => {
                    1 === this.clicks ? (this.emit("click", t), !t.defaultPrevented && h && c(h)) : (this.emit("dblClick", t), 
                    t.defaultPrevented || c(d)), this.clicks = 0, this.clickTimer = null;
                }), 350))) : (this.emit("click", t), !t.defaultPrevented && h && c(h));
            }
            addTrackingPoint(t) {
                const e = this.trackingPoints.filter((t => t.time > Date.now() - 100));
                e.push(t), this.trackingPoints = e;
            }
            onPointerDown(t, e, i) {
                var n;
                if (!1 === this.option("touch", t)) return !1;
                this.pwt = 0, this.dragOffset = {
                    x: 0,
                    y: 0,
                    time: 0
                }, this.trackingPoints = [];
                const s = this.content.getBoundingClientRect();
                if (this.dragStart = {
                    x: s.x,
                    y: s.y,
                    top: s.top,
                    left: s.left,
                    time: Date.now()
                }, this.clickTimer) return !1;
                if (this.panMode === O && this.targetScale > 1) return t.preventDefault(), t.stopPropagation(), 
                !1;
                const o = t.composedPath()[0];
                if (!i.length) {
                    if ([ "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO", "IFRAME" ].includes(o.nodeName) || o.closest("[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]")) return !1;
                    null === (n = window.getSelection()) || void 0 === n || n.removeAllRanges();
                }
                if ("mousedown" === t.type) [ "A", "BUTTON" ].includes(o.nodeName) || t.preventDefault(); else if (Math.abs(this.velocity.a) > .3) return !1;
                return this.target.e = this.current.e, this.target.f = this.current.f, this.stop(), 
                this.isDragging || (this.isDragging = !0, this.addTrackingPoint(e), this.emit("touchStart", t)), 
                !0;
            }
            onPointerMove(e, n, s) {
                if (!1 === this.option("touch", e)) return;
                if (!this.isDragging) return;
                if (n.length < 2 && this.panOnlyZoomed && t(this.targetScale) <= t(this.minScale)) return;
                if (this.emit("touchMove", e), e.defaultPrevented) return;
                this.addTrackingPoint(n[0]);
                const {content: o} = this, a = h(s[0], s[1]), r = h(n[0], n[1]);
                let l = 0, d = 0;
                if (n.length > 1) {
                    const t = o.getBoundingClientRect();
                    l = a.clientX - t.left - .5 * t.width, d = a.clientY - t.top - .5 * t.height;
                }
                const u = c(s[0], s[1]), p = c(n[0], n[1]);
                let f = u ? p / u : 1, g = r.clientX - a.clientX, m = r.clientY - a.clientY;
                this.dragOffset.x += g, this.dragOffset.y += m, this.dragOffset.time = Date.now() - this.dragStart.time;
                let v = t(this.targetScale) === t(this.minScale) && this.option("lockAxis");
                if (v && !this.lockedAxis) if ("xy" === v || "y" === v || "touchmove" === e.type) {
                    if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return void e.preventDefault();
                    const t = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
                    this.lockedAxis = t > 45 && t < 135 ? "y" : "x", this.dragOffset.x = 0, this.dragOffset.y = 0, 
                    g = 0, m = 0;
                } else this.lockedAxis = v;
                if (i(e.target, this.content) && (v = "x", this.dragOffset.y = 0), v && "xy" !== v && this.lockedAxis !== v && t(this.targetScale) === t(this.minScale)) return;
                e.cancelable && e.preventDefault(), this.container.classList.add(this.cn("isDragging"));
                const b = this.checkBounds(g, m);
                this.option("rubberband") ? ("x" !== this.isInfinite && (b.xDiff > 0 && g < 0 || b.xDiff < 0 && g > 0) && (g *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitWidth * b.xDiff))), 
                "y" !== this.isInfinite && (b.yDiff > 0 && m < 0 || b.yDiff < 0 && m > 0) && (m *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitHeight * b.yDiff)))) : (b.xDiff && (g = 0), 
                b.yDiff && (m = 0));
                const y = this.targetScale, w = this.minScale, x = this.maxScale;
                y < .5 * w && (f = Math.max(f, w)), y > 1.5 * x && (f = Math.min(f, x)), "y" === this.lockedAxis && t(y) === t(w) && (g = 0), 
                "x" === this.lockedAxis && t(y) === t(w) && (m = 0), this.applyChange({
                    originX: l,
                    originY: d,
                    panX: g,
                    panY: m,
                    scale: f,
                    friction: this.option("dragFriction"),
                    ignoreBounds: !0
                });
            }
            onPointerUp(t, e, n) {
                if (n.length) return this.dragOffset.x = 0, this.dragOffset.y = 0, void (this.trackingPoints = []);
                this.container.classList.remove(this.cn("isDragging")), this.isDragging && (this.addTrackingPoint(e), 
                this.panOnlyZoomed && this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1 && (this.trackingPoints = []), 
                i(t.target, this.content) && "y" === this.lockedAxis && (this.trackingPoints = []), 
                this.emit("touchEnd", t), this.isDragging = !1, this.lockedAxis = !1, this.state !== m.Destroy && (t.defaultPrevented || this.startDecelAnim()));
            }
            startDecelAnim() {
                var e;
                const i = this.isScaling;
                this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, 
                this.isBouncingY = !1;
                for (const t of v) this.velocity[t] = 0;
                this.target.e = this.current.e, this.target.f = this.current.f, S(this.container, "is-scaling"), 
                S(this.container, "is-animating"), this.isTicking = !1;
                const {trackingPoints: n} = this, s = n[0], o = n[n.length - 1];
                let a = 0, r = 0, l = 0;
                o && s && (a = o.clientX - s.clientX, r = o.clientY - s.clientY, l = o.time - s.time);
                const c = (null === (e = window.visualViewport) || void 0 === e ? void 0 : e.scale) || 1;
                1 !== c && (a *= c, r *= c);
                let h = 0, d = 0, u = 0, p = 0, f = this.option("decelFriction");
                const g = this.targetScale;
                if (l > 0) {
                    u = Math.abs(a) > 3 ? a / (l / 30) : 0, p = Math.abs(r) > 3 ? r / (l / 30) : 0;
                    const t = this.option("maxVelocity");
                    t && (u = Math.max(Math.min(u, t), -1 * t), p = Math.max(Math.min(p, t), -1 * t));
                }
                u && (h = u / (1 / (1 - f) - 1)), p && (d = p / (1 / (1 - f) - 1)), ("y" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "y" === this.lockedAxis && t(g) === this.minScale) && (h = u = 0), 
                ("x" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "x" === this.lockedAxis && t(g) === this.minScale) && (d = p = 0);
                const m = this.dragOffset.x, b = this.dragOffset.y, y = this.option("dragMinThreshold") || 0;
                Math.abs(m) < y && Math.abs(b) < y && (h = d = 0, u = p = 0), (this.option("zoom") && (g < this.minScale - 1e-5 || g > this.maxScale + 1e-5) || i && !h && !d) && (f = .35), 
                this.applyChange({
                    panX: h,
                    panY: d,
                    friction: f
                }), this.emit("decel", u, p, m, b);
            }
            onWheel(t) {
                var e = [ -t.deltaX || 0, -t.deltaY || 0, -t.detail || 0 ].reduce((function(t, e) {
                    return Math.abs(e) > Math.abs(t) ? e : t;
                }));
                const i = Math.max(-1, Math.min(1, e));
                if (this.emit("wheel", t, i), this.panMode === O) return;
                if (t.defaultPrevented) return;
                const n = this.option("wheel");
                "pan" === n ? (t.preventDefault(), this.panOnlyZoomed && !this.canZoomOut() || this.applyChange({
                    panX: 2 * -t.deltaX,
                    panY: 2 * -t.deltaY,
                    bounce: !1
                })) : "zoom" === n && !1 !== this.option("zoom") && this.zoomWithWheel(t);
            }
            onMouseMove(t) {
                this.panWithMouse(t);
            }
            onKeydown(t) {
                "Escape" === t.key && this.toggleFS();
            }
            onResize() {
                this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
            }
            setTransform() {
                this.emit("beforeTransform");
                const {current: e, target: i, content: n, contentRect: s} = this, o = Object.assign({}, C);
                for (const n of v) {
                    const s = "e" == n || "f" === n ? M : T;
                    o[n] = t(e[n], s), Math.abs(i[n] - e[n]) < ("e" == n || "f" === n ? .51 : .001) && (e[n] = i[n]);
                }
                let {a, b: r, c: l, d: c, e: h, f: d} = o, u = `matrix(${a}, ${r}, ${l}, ${c}, ${h}, ${d})`, p = n.parentElement instanceof HTMLPictureElement ? n.parentElement : n;
                if (this.option("transformParent") && (p = p.parentElement || p), p.style.transform === u) return;
                p.style.transform = u;
                const {contentWidth: f, contentHeight: g} = this.calculateContentDim();
                s.width = f, s.height = g, this.emit("afterTransform");
            }
            updateMetrics(e = !1) {
                var i;
                if (!this || this.state === m.Destroy) return;
                if (this.isContentLoading) return;
                const n = Math.max(1, (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.scale) || 1), {container: s, content: o} = this, a = o instanceof HTMLImageElement, r = s.getBoundingClientRect(), l = getComputedStyle(this.container);
                let c = r.width * n, h = r.height * n;
                const d = parseFloat(l.paddingTop) + parseFloat(l.paddingBottom), u = c - (parseFloat(l.paddingLeft) + parseFloat(l.paddingRight)), p = h - d;
                this.containerRect = {
                    width: c,
                    height: h,
                    innerWidth: u,
                    innerHeight: p
                };
                const f = parseFloat(o.dataset.width || "") || (t => {
                    let e = 0;
                    return e = t instanceof HTMLImageElement ? t.naturalWidth : t instanceof SVGElement ? t.width.baseVal.value : Math.max(t.offsetWidth, t.scrollWidth), 
                    e || 0;
                })(o), g = parseFloat(o.dataset.height || "") || (t => {
                    let e = 0;
                    return e = t instanceof HTMLImageElement ? t.naturalHeight : t instanceof SVGElement ? t.height.baseVal.value : Math.max(t.offsetHeight, t.scrollHeight), 
                    e || 0;
                })(o);
                let v = this.option("width", f) || z, b = this.option("height", g) || z;
                const y = v === z, w = b === z;
                "number" != typeof v && (v = f), "number" != typeof b && (b = g), y && (v = f * (b / g)), 
                w && (b = g / (f / v));
                let x = o.parentElement instanceof HTMLPictureElement ? o.parentElement : o;
                this.option("transformParent") && (x = x.parentElement || x);
                const E = x.getAttribute("style") || "";
                x.style.setProperty("transform", "none", "important"), a && (x.style.width = "", 
                x.style.height = ""), x.offsetHeight;
                const S = o.getBoundingClientRect();
                let P = S.width * n, C = S.height * n, T = P, M = C;
                P = Math.min(P, v), C = Math.min(C, b), a ? ({width: P, height: C} = ((t, e, i, n) => {
                    const s = i / t, o = n / e, a = Math.min(s, o);
                    return {
                        width: t *= a,
                        height: e *= a
                    };
                })(v, b, P, C)) : (P = Math.min(P, v), C = Math.min(C, b));
                let O = .5 * (M - C), A = .5 * (T - P);
                this.contentRect = Object.assign(Object.assign({}, this.contentRect), {
                    top: S.top - r.top + O,
                    bottom: r.bottom - S.bottom + O,
                    left: S.left - r.left + A,
                    right: r.right - S.right + A,
                    fitWidth: P,
                    fitHeight: C,
                    width: P,
                    height: C,
                    fullWidth: v,
                    fullHeight: b
                }), x.style.cssText = E, a && (x.style.width = `${P}px`, x.style.height = `${C}px`), 
                this.setTransform(), !0 !== e && this.emit("refresh"), this.ignoreBounds || (t(this.targetScale) < t(this.minScale) ? this.zoomTo(this.minScale, {
                    friction: 0
                }) : this.targetScale > this.maxScale ? this.zoomTo(this.maxScale, {
                    friction: 0
                }) : this.state === m.Init || this.checkBounds().inBounds || this.requestTick()), 
                this.updateControls();
            }
            calculateBounds() {
                const {contentWidth: e, contentHeight: i} = this.calculateContentDim(this.target), {targetScale: n, lockedAxis: s} = this, {fitWidth: o, fitHeight: a} = this.contentRect;
                let r = 0, l = 0, c = 0, h = 0;
                const d = this.option("infinite");
                if (!0 === d || s && d === s) r = -1 / 0, c = 1 / 0, l = -1 / 0, h = 1 / 0; else {
                    let {containerRect: s, contentRect: d} = this, u = t(o * n, M), p = t(a * n, M), {innerWidth: f, innerHeight: g} = s;
                    if (s.width === u && (f = s.width), s.width === p && (g = s.height), e > f) {
                        c = .5 * (e - f), r = -1 * c;
                        let t = .5 * (d.right - d.left);
                        r += t, c += t;
                    }
                    if (o > f && e < f && (r -= .5 * (o - f), c -= .5 * (o - f)), i > g) {
                        h = .5 * (i - g), l = -1 * h;
                        let t = .5 * (d.bottom - d.top);
                        l += t, h += t;
                    }
                    a > g && i < g && (r -= .5 * (a - g), c -= .5 * (a - g));
                }
                return {
                    x: {
                        min: r,
                        max: c
                    },
                    y: {
                        min: l,
                        max: h
                    }
                };
            }
            getBounds() {
                const t = this.option("bounds");
                return t !== z ? t : this.calculateBounds();
            }
            updateControls() {
                const e = this, i = e.container, {panMode: n, contentRect: s, targetScale: a, minScale: r} = e;
                let l = r, c = e.option("click") || !1;
                c && (l = e.getNextScale(c));
                let h = e.canZoomIn(), d = e.canZoomOut(), u = n === A && !!this.option("touch"), p = d && u;
                if (u && (t(a) < t(r) && !this.panOnlyZoomed && (p = !0), (t(s.width, 1) > t(s.fitWidth, 1) || t(s.height, 1) > t(s.fitHeight, 1)) && (p = !0)), 
                t(s.width * a, 1) < t(s.fitWidth, 1) && (p = !1), n === O && (p = !1), o(i, this.cn("isDraggable"), p), 
                !this.option("zoom")) return;
                let f = h && t(l) > t(a), g = !f && !p && d && t(l) < t(a);
                o(i, this.cn("canZoomIn"), f), o(i, this.cn("canZoomOut"), g);
                for (const t of i.querySelectorAll("[data-panzoom-action]")) {
                    let e = !1, i = !1;
                    switch (t.dataset.panzoomAction) {
                      case "zoomIn":
                        h ? e = !0 : i = !0;
                        break;

                      case "zoomOut":
                        d ? e = !0 : i = !0;
                        break;

                      case "toggleZoom":
                      case "iterateZoom":
                        h || d ? e = !0 : i = !0;
                        const n = t.querySelector("g");
                        n && (n.style.display = h ? "" : "none");
                    }
                    e ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex")) : i && (t.setAttribute("disabled", ""), 
                    t.setAttribute("tabindex", "-1"));
                }
            }
            panTo({x: t = this.target.e, y: e = this.target.f, scale: i = this.targetScale, friction: n = this.option("friction"), angle: s = 0, originX: o = 0, originY: a = 0, flipX: r = !1, flipY: l = !1, ignoreBounds: c = !1}) {
                this.state !== m.Destroy && this.applyChange({
                    panX: t - this.target.e,
                    panY: e - this.target.f,
                    scale: i / this.targetScale,
                    angle: s,
                    originX: o,
                    originY: a,
                    friction: n,
                    flipX: r,
                    flipY: l,
                    ignoreBounds: c
                });
            }
            applyChange({panX: e = 0, panY: i = 0, scale: n = 1, angle: s = 0, originX: o = -this.current.e, originY: a = -this.current.f, friction: r = this.option("friction"), flipX: l = !1, flipY: c = !1, ignoreBounds: h = !1, bounce: d = this.option("bounce")}) {
                const u = this.state;
                if (u === m.Destroy) return;
                this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.friction = r || 0, 
                this.ignoreBounds = h;
                const {current: p} = this, f = p.e, g = p.f, b = this.getMatrix(this.target);
                let y = (new DOMMatrix).translate(f, g).translate(o, a).translate(e, i);
                if (this.option("zoom")) {
                    if (!h) {
                        const t = this.targetScale, e = this.minScale, i = this.maxScale;
                        t * n < e && (n = e / t), t * n > i && (n = i / t);
                    }
                    y = y.scale(n);
                }
                y = y.translate(-o, -a).translate(-f, -g).multiply(b), s && (y = y.rotate(s)), l && (y = y.scale(-1, 1)), 
                c && (y = y.scale(1, -1));
                for (const e of v) "e" !== e && "f" !== e && (y[e] > this.minScale + 1e-5 || y[e] < this.minScale - 1e-5) ? this.target[e] = y[e] : this.target[e] = t(y[e], M);
                (this.targetScale < this.scale || Math.abs(n - 1) > .1 || this.panMode === O || !1 === d) && !h && this.clampTargetBounds(), 
                u === m.Init ? this.animate() : this.isResting || (this.state = m.Panning, this.requestTick());
            }
            stop(t = !1) {
                if (this.state === m.Init || this.state === m.Destroy) return;
                const e = this.isTicking;
                this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, 
                this.isBouncingY = !1;
                for (const e of v) this.velocity[e] = 0, "current" === t ? this.current[e] = this.target[e] : "target" === t && (this.target[e] = this.current[e]);
                this.setTransform(), S(this.container, "is-scaling"), S(this.container, "is-animating"), 
                this.isTicking = !1, this.state = m.Ready, e && (this.emit("endAnimation"), this.updateControls());
            }
            requestTick() {
                this.isTicking || (this.emit("startAnimation"), this.updateControls(), P(this.container, "is-animating"), 
                this.isScaling && P(this.container, "is-scaling")), this.isTicking = !0, this.rAF || (this.rAF = requestAnimationFrame((() => this.animate())));
            }
            panWithMouse(e, i = this.option("mouseMoveFriction")) {
                if (this.pmme = e, this.panMode !== O || !e) return;
                if (t(this.targetScale) <= t(this.minScale)) return;
                this.emit("mouseMove", e);
                const {container: n, containerRect: s, contentRect: o} = this, a = s.width, r = s.height, l = n.getBoundingClientRect(), c = (e.clientX || 0) - l.left, h = (e.clientY || 0) - l.top;
                let {contentWidth: d, contentHeight: u} = this.calculateContentDim(this.target);
                const p = this.option("mouseMoveFactor");
                p > 1 && (d !== a && (d *= p), u !== r && (u *= p));
                let f = .5 * (d - a) - c / a * 100 / 100 * (d - a);
                f += .5 * (o.right - o.left);
                let g = .5 * (u - r) - h / r * 100 / 100 * (u - r);
                g += .5 * (o.bottom - o.top), this.applyChange({
                    panX: f - this.target.e,
                    panY: g - this.target.f,
                    friction: i
                });
            }
            zoomWithWheel(e) {
                if (this.state === m.Destroy || this.state === m.Init) return;
                const i = Date.now();
                if (i - this.pwt < 45) return void e.preventDefault();
                this.pwt = i;
                var n = [ -e.deltaX || 0, -e.deltaY || 0, -e.detail || 0 ].reduce((function(t, e) {
                    return Math.abs(e) > Math.abs(t) ? e : t;
                }));
                const s = Math.max(-1, Math.min(1, n)), {targetScale: o, maxScale: a, minScale: r} = this;
                let l = o * (100 + 45 * s) / 100;
                t(l) < t(r) && t(o) <= t(r) ? (this.cwd += Math.abs(s), l = r) : t(l) > t(a) && t(o) >= t(a) ? (this.cwd += Math.abs(s), 
                l = a) : (this.cwd = 0, l = Math.max(Math.min(l, a), r)), this.cwd > this.option("wheelLimit") || (e.preventDefault(), 
                t(l) !== t(o) && this.zoomTo(l, {
                    event: e
                }));
            }
            canZoomIn() {
                return this.option("zoom") && (t(this.contentRect.width, 1) < t(this.contentRect.fitWidth, 1) || t(this.targetScale) < t(this.maxScale));
            }
            canZoomOut() {
                return this.option("zoom") && t(this.targetScale) > t(this.minScale);
            }
            zoomIn(t = 1.25, e) {
                this.zoomTo(this.targetScale * t, e);
            }
            zoomOut(t = .8, e) {
                this.zoomTo(this.targetScale * t, e);
            }
            zoomToFit(t) {
                this.zoomTo("fit", t);
            }
            zoomToCover(t) {
                this.zoomTo("cover", t);
            }
            zoomToFull(t) {
                this.zoomTo("full", t);
            }
            zoomToMax(t) {
                this.zoomTo("max", t);
            }
            toggleZoom(t) {
                this.zoomTo(this.getNextScale("toggleZoom"), t);
            }
            toggleMax(t) {
                this.zoomTo(this.getNextScale("toggleMax"), t);
            }
            toggleCover(t) {
                this.zoomTo(this.getNextScale("toggleCover"), t);
            }
            iterateZoom(t) {
                this.zoomTo("next", t);
            }
            zoomTo(t = 1, {friction: e = z, originX: i = z, originY: n = z, event: s} = {}) {
                if (this.isContentLoading || this.state === m.Destroy) return;
                const {targetScale: o, fullScale: a, maxScale: r, coverScale: l} = this;
                if (this.stop(), this.panMode === O && (s = this.pmme || s), s || i === z || n === z) {
                    const t = this.content.getBoundingClientRect(), e = this.container.getBoundingClientRect(), o = s ? s.clientX : e.left + .5 * e.width, a = s ? s.clientY : e.top + .5 * e.height;
                    i = o - t.left - .5 * t.width, n = a - t.top - .5 * t.height;
                }
                let c = 1;
                "number" == typeof t ? c = t : "full" === t ? c = a : "cover" === t ? c = l : "max" === t ? c = r : "fit" === t ? c = 1 : "next" === t && (c = this.getNextScale("iterateZoom")), 
                c = c / o || 1, e = e === z ? c > 1 ? .15 : .25 : e, this.applyChange({
                    scale: c,
                    originX: i,
                    originY: n,
                    friction: e
                }), s && this.panMode === O && this.panWithMouse(s, e);
            }
            rotateCCW() {
                this.applyChange({
                    angle: -90
                });
            }
            rotateCW() {
                this.applyChange({
                    angle: 90
                });
            }
            flipX() {
                this.applyChange({
                    flipX: !0
                });
            }
            flipY() {
                this.applyChange({
                    flipY: !0
                });
            }
            fitX() {
                this.stop("target");
                const {containerRect: t, contentRect: e, target: i} = this;
                this.applyChange({
                    panX: .5 * t.width - (e.left + .5 * e.fitWidth) - i.e,
                    panY: .5 * t.height - (e.top + .5 * e.fitHeight) - i.f,
                    scale: t.width / e.fitWidth / this.targetScale,
                    originX: 0,
                    originY: 0,
                    ignoreBounds: !0
                });
            }
            fitY() {
                this.stop("target");
                const {containerRect: t, contentRect: e, target: i} = this;
                this.applyChange({
                    panX: .5 * t.width - (e.left + .5 * e.fitWidth) - i.e,
                    panY: .5 * t.innerHeight - (e.top + .5 * e.fitHeight) - i.f,
                    scale: t.height / e.fitHeight / this.targetScale,
                    originX: 0,
                    originY: 0,
                    ignoreBounds: !0
                });
            }
            toggleFS() {
                const {container: t} = this, e = this.cn("inFullscreen"), i = this.cn("htmlHasFullscreen");
                t.classList.toggle(e);
                const n = t.classList.contains(e);
                n ? (document.documentElement.classList.add(i), document.addEventListener("keydown", this.onKeydown, !0)) : (document.documentElement.classList.remove(i), 
                document.removeEventListener("keydown", this.onKeydown, !0)), this.updateMetrics(), 
                this.emit(n ? "enterFS" : "exitFS");
            }
            getMatrix(t = this.current) {
                const {a: e, b: i, c: n, d: s, e: o, f: a} = t;
                return new DOMMatrix([ e, i, n, s, o, a ]);
            }
            reset(t) {
                if (this.state !== m.Init && this.state !== m.Destroy) {
                    this.stop("current");
                    for (const t of v) this.target[t] = C[t];
                    this.target.a = this.minScale, this.target.d = this.minScale, this.clampTargetBounds(), 
                    this.isResting || (this.friction = void 0 === t ? this.option("friction") : t, this.state = m.Panning, 
                    this.requestTick());
                }
            }
            destroy() {
                this.stop(), this.state = m.Destroy, this.detachEvents(), this.detachObserver();
                const {container: t, content: e} = this, i = this.option("classes") || {};
                for (const e of Object.values(i)) t.classList.remove(e + "");
                e && (e.removeEventListener("load", this.onLoad), e.removeEventListener("error", this.onError)), 
                this.detachPlugins();
            }
        }
        Object.defineProperty(I, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: y
        }), Object.defineProperty(I, "Plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        });
        const D = function(t, e) {
            let i = !0;
            return (...n) => {
                i && (i = !1, t(...n), setTimeout((() => {
                    i = !0;
                }), e));
            };
        }, F = (t, e) => {
            let i = [];
            return t.childNodes.forEach((t => {
                t.nodeType !== Node.ELEMENT_NODE || e && !t.matches(e) || i.push(t);
            })), i;
        }, j = {
            viewport: null,
            track: null,
            enabled: !0,
            slides: [],
            axis: "x",
            transition: "fade",
            preload: 1,
            slidesPerPage: "auto",
            initialPage: 0,
            friction: .12,
            Panzoom: {
                decelFriction: .12
            },
            center: !0,
            infinite: !0,
            fill: !0,
            dragFree: !1,
            adaptiveHeight: !1,
            direction: "ltr",
            classes: {
                container: "f-carousel",
                viewport: "f-carousel__viewport",
                track: "f-carousel__track",
                slide: "f-carousel__slide",
                isLTR: "is-ltr",
                isRTL: "is-rtl",
                isHorizontal: "is-horizontal",
                isVertical: "is-vertical",
                inTransition: "in-transition",
                isSelected: "is-selected"
            },
            l10n: {
                NEXT: "Next slide",
                PREV: "Previous slide",
                GOTO: "Go to slide #%d"
            }
        };
        var B;
        !function(t) {
            t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Destroy = 2] = "Destroy";
        }(B || (B = {}));
        const H = t => {
            if ("string" == typeof t || t instanceof HTMLElement) t = {
                html: t
            }; else {
                const e = t.thumb;
                void 0 !== e && ("string" == typeof e && (t.thumbSrc = e), e instanceof HTMLImageElement && (t.thumbEl = e, 
                t.thumbElSrc = e.src, t.thumbSrc = e.src), delete t.thumb);
            }
            return Object.assign({
                html: "",
                el: null,
                isDom: !1,
                class: "",
                customClass: "",
                index: -1,
                dim: 0,
                gap: 0,
                pos: 0,
                transition: !1
            }, t);
        }, N = (t = {}) => Object.assign({
            index: -1,
            slides: [],
            dim: 0,
            pos: -1
        }, t);
        class _ extends f {
            constructor(t, e) {
                super(e), Object.defineProperty(this, "instance", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                });
            }
            attach() {}
            detach() {}
        }
        const $ = {
            classes: {
                list: "f-carousel__dots",
                isDynamic: "is-dynamic",
                hasDots: "has-dots",
                dot: "f-carousel__dot",
                isBeforePrev: "is-before-prev",
                isPrev: "is-prev",
                isCurrent: "is-current",
                isNext: "is-next",
                isAfterNext: "is-after-next"
            },
            dotTpl: '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
            dynamicFrom: 11,
            maxCount: 1 / 0,
            minCount: 2
        };
        class W extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "isDynamic", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "list", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            onRefresh() {
                this.refresh();
            }
            build() {
                let t = this.list;
                if (!t) {
                    t = document.createElement("ul"), P(t, this.cn("list")), t.setAttribute("role", "tablist");
                    const e = this.instance.container;
                    e.appendChild(t), P(e, this.cn("hasDots")), this.list = t;
                }
                return t;
            }
            refresh() {
                var t;
                const e = this.instance.pages.length, i = Math.min(2, this.option("minCount")), n = Math.max(2e3, this.option("maxCount")), s = this.option("dynamicFrom");
                if (e < i || e > n) return void this.cleanup();
                const a = "number" == typeof s && e > 5 && e >= s, r = !this.list || this.isDynamic !== a || this.list.children.length !== e;
                r && this.cleanup();
                const l = this.build();
                if (o(l, this.cn("isDynamic"), !!a), r) for (let t = 0; t < e; t++) l.append(this.createItem(t));
                let c, h = 0;
                for (const e of [ ...l.children ]) {
                    const i = h === this.instance.page;
                    i && (c = e), o(e, this.cn("isCurrent"), i), null === (t = e.children[0]) || void 0 === t || t.setAttribute("aria-selected", i ? "true" : "false");
                    for (const t of [ "isBeforePrev", "isPrev", "isNext", "isAfterNext" ]) S(e, this.cn(t));
                    h++;
                }
                if (c = c || l.firstChild, a && c) {
                    const t = c.previousElementSibling, e = t && t.previousElementSibling;
                    P(t, this.cn("isPrev")), P(e, this.cn("isBeforePrev"));
                    const i = c.nextElementSibling, n = i && i.nextElementSibling;
                    P(i, this.cn("isNext")), P(n, this.cn("isAfterNext"));
                }
                this.isDynamic = a;
            }
            createItem(t = 0) {
                var e;
                const i = document.createElement("li");
                i.setAttribute("role", "presentation");
                const s = n(this.instance.localize(this.option("dotTpl"), [ [ "%d", t + 1 ] ]).replace(/\%i/g, t + ""));
                return i.appendChild(s), null === (e = i.children[0]) || void 0 === e || e.setAttribute("role", "tab"), 
                i;
            }
            cleanup() {
                this.list && (this.list.remove(), this.list = null), this.isDynamic = !1, S(this.instance.container, this.cn("hasDots"));
            }
            attach() {
                this.instance.on([ "refresh", "change" ], this.onRefresh);
            }
            detach() {
                this.instance.off([ "refresh", "change" ], this.onRefresh), this.cleanup();
            }
        }
        Object.defineProperty(W, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: $
        });
        const X = "disabled", q = "next", Y = "prev";
        class V extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "prev", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "next", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "isDom", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                });
            }
            onRefresh() {
                const t = this.instance, e = t.pages.length, i = t.page;
                if (e < 2) return void this.cleanup();
                this.build();
                let n = this.prev, s = this.next;
                n && s && (n.removeAttribute(X), s.removeAttribute(X), t.isInfinite || (i <= 0 && n.setAttribute(X, ""), 
                i >= e - 1 && s.setAttribute(X, "")));
            }
            addBtn(t) {
                var e;
                const i = this.instance, n = document.createElement("button");
                n.setAttribute("tabindex", "0"), n.setAttribute("title", i.localize(`{{${t.toUpperCase()}}}`)), 
                P(n, this.cn("button") + " " + this.cn(t === q ? "isNext" : "isPrev"));
                const s = i.isRTL ? t === q ? Y : q : t;
                var o;
                return n.innerHTML = i.localize(this.option(`${s}Tpl`)), n.dataset[`carousel${o = t, 
                o ? o.match("^[a-z]") ? o.charAt(0).toUpperCase() + o.substring(1) : o : ""}`] = "true", 
                null === (e = this.container) || void 0 === e || e.appendChild(n), n;
            }
            build() {
                const t = this.instance.container, e = this.cn("container");
                let {container: i, prev: n, next: s} = this;
                i || (i = t.querySelector("." + e), this.isDom = !!i), i || (i = document.createElement("div"), 
                P(i, e), t.appendChild(i)), this.container = i, s || (s = i.querySelector("[data-carousel-next]")), 
                s || (s = this.addBtn(q)), this.next = s, n || (n = i.querySelector("[data-carousel-prev]")), 
                n || (n = this.addBtn(Y)), this.prev = n;
            }
            cleanup() {
                this.isDom || (this.prev && this.prev.remove(), this.next && this.next.remove(), 
                this.container && this.container.remove()), this.prev = null, this.next = null, 
                this.container = null, this.isDom = !1;
            }
            attach() {
                this.instance.on([ "refresh", "change" ], this.onRefresh);
            }
            detach() {
                this.instance.off([ "refresh", "change" ], this.onRefresh), this.cleanup();
            }
        }
        Object.defineProperty(V, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                classes: {
                    container: "f-carousel__nav",
                    button: "f-button",
                    isNext: "is-next",
                    isPrev: "is-prev"
                },
                nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
                prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>'
            }
        });
        class Z extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "selectedIndex", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "target", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "nav", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            addAsTargetFor(t) {
                this.target = this.instance, this.nav = t, this.attachEvents();
            }
            addAsNavFor(t) {
                this.nav = this.instance, this.target = t, this.attachEvents();
            }
            attachEvents() {
                const {nav: t, target: e} = this;
                t && e && (t.options.initialSlide = e.options.initialPage, t.state === B.Ready ? this.onNavReady(t) : t.on("ready", this.onNavReady), 
                e.state === B.Ready ? this.onTargetReady(e) : e.on("ready", this.onTargetReady));
            }
            onNavReady(t) {
                t.on("createSlide", this.onNavCreateSlide), t.on("Panzoom.click", this.onNavClick), 
                t.on("Panzoom.touchEnd", this.onNavTouch), this.onTargetChange();
            }
            onTargetReady(t) {
                t.on("change", this.onTargetChange), t.on("Panzoom.refresh", this.onTargetChange), 
                this.onTargetChange();
            }
            onNavClick(t, e, i) {
                this.onNavTouch(t, t.panzoom, i);
            }
            onNavTouch(t, e, i) {
                var n, s;
                if (Math.abs(e.dragOffset.x) > 3 || Math.abs(e.dragOffset.y) > 3) return;
                const o = i.target, {nav: a, target: r} = this;
                if (!a || !r || !o) return;
                const l = o.closest("[data-index]");
                if (i.stopPropagation(), i.preventDefault(), !l) return;
                const c = parseInt(l.dataset.index || "", 10) || 0, h = r.getPageForSlide(c), d = a.getPageForSlide(c);
                a.slideTo(d), r.slideTo(h, {
                    friction: (null === (s = null === (n = this.nav) || void 0 === n ? void 0 : n.plugins) || void 0 === s ? void 0 : s.Sync.option("friction")) || 0
                }), this.markSelectedSlide(c);
            }
            onNavCreateSlide(t, e) {
                e.index === this.selectedIndex && this.markSelectedSlide(e.index);
            }
            onTargetChange() {
                var t, e;
                const {target: i, nav: n} = this;
                if (!i || !n) return;
                if (n.state !== B.Ready || i.state !== B.Ready) return;
                const s = null === (e = null === (t = i.pages[i.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0 === e ? void 0 : e.index, o = n.getPageForSlide(s);
                this.markSelectedSlide(s), n.slideTo(o, null === n.prevPage && null === i.prevPage ? {
                    friction: 0
                } : void 0);
            }
            markSelectedSlide(t) {
                const e = this.nav;
                e && e.state === B.Ready && (this.selectedIndex = t, [ ...e.slides ].map((e => {
                    e.el && e.el.classList[e.index === t ? "add" : "remove"]("is-nav-selected");
                })));
            }
            attach() {
                const t = this;
                let e = t.options.target, i = t.options.nav;
                e ? t.addAsNavFor(e) : i && t.addAsTargetFor(i);
            }
            detach() {
                const t = this, e = t.nav, i = t.target;
                e && (e.off("ready", t.onNavReady), e.off("createSlide", t.onNavCreateSlide), e.off("Panzoom.click", t.onNavClick), 
                e.off("Panzoom.touchEnd", t.onNavTouch)), t.nav = null, i && (i.off("ready", t.onTargetReady), 
                i.off("refresh", t.onTargetChange), i.off("change", t.onTargetChange)), t.target = null;
            }
        }
        Object.defineProperty(Z, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                friction: .35
            }
        });
        const U = {
            Navigation: V,
            Dots: W,
            Sync: Z
        }, G = "animationend", K = "isSelected", J = "slide";
        class Q extends g {
            get axis() {
                return this.isHorizontal ? "e" : "f";
            }
            get isEnabled() {
                return this.state === B.Ready;
            }
            get isInfinite() {
                let t = !1;
                const {contentDim: e, viewportDim: i, pages: n, slides: s} = this, o = s[0];
                return n.length >= 2 && o && e + o.dim >= i && (t = this.option("infinite")), t;
            }
            get isRTL() {
                return "rtl" === this.option("direction");
            }
            get isHorizontal() {
                return "x" === this.option("axis");
            }
            constructor(t, e = {}, i = {}) {
                if (super(), Object.defineProperty(this, "bp", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: ""
                }), Object.defineProperty(this, "lp", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "userOptions", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }), Object.defineProperty(this, "userPlugins", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: B.Init
                }), Object.defineProperty(this, "page", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "prevPage", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "viewport", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "track", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "slides", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "pages", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "panzoom", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "inTransition", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new Set
                }), Object.defineProperty(this, "contentDim", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "viewportDim", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), "string" == typeof t && (t = document.querySelector(t)), !t || !E(t)) throw new Error("No Element found");
                this.container = t, this.slideNext = D(this.slideNext.bind(this), 150), this.slidePrev = D(this.slidePrev.bind(this), 150), 
                this.userOptions = e, this.userPlugins = i, queueMicrotask((() => {
                    this.processOptions();
                }));
            }
            processOptions() {
                var t, e;
                const i = u({}, Q.defaults, this.userOptions);
                let n = "";
                const s = i.breakpoints;
                if (s && d(s)) for (const [t, e] of Object.entries(s)) window.matchMedia(t).matches && d(e) && (n += t, 
                u(i, e));
                n === this.bp && this.state !== B.Init || (this.bp = n, this.state === B.Ready && (i.initialSlide = (null === (e = null === (t = this.pages[this.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0 === e ? void 0 : e.index) || 0), 
                this.state !== B.Init && this.destroy(), super.setOptions(i), !1 === this.option("enabled") ? this.attachEvents() : setTimeout((() => {
                    this.init();
                }), 0));
            }
            init() {
                this.state = B.Init, this.emit("init"), this.attachPlugins(Object.assign(Object.assign({}, Q.Plugins), this.userPlugins)), 
                this.emit("attachPlugins"), this.initLayout(), this.initSlides(), this.updateMetrics(), 
                this.setInitialPosition(), this.initPanzoom(), this.attachEvents(), this.state = B.Ready, 
                this.emit("ready");
            }
            initLayout() {
                const {container: t} = this, e = this.option("classes");
                P(t, this.cn("container")), o(t, e.isLTR, !this.isRTL), o(t, e.isRTL, this.isRTL), 
                o(t, e.isVertical, !this.isHorizontal), o(t, e.isHorizontal, this.isHorizontal);
                let i = this.option("viewport") || t.querySelector(`.${e.viewport}`);
                i || (i = document.createElement("div"), P(i, e.viewport), i.append(...F(t, `.${e.slide}`)), 
                t.prepend(i)), i.addEventListener("scroll", this.onScroll);
                let n = this.option("track") || t.querySelector(`.${e.track}`);
                n || (n = document.createElement("div"), P(n, e.track), n.append(...Array.from(i.childNodes))), 
                n.setAttribute("aria-live", "polite"), i.contains(n) || i.prepend(n), this.viewport = i, 
                this.track = n, this.emit("initLayout");
            }
            initSlides() {
                const {track: t} = this;
                if (!t) return;
                const e = [ ...this.slides ], i = [];
                [ ...F(t, `.${this.cn(J)}`) ].forEach((t => {
                    if (E(t)) {
                        const e = H({
                            el: t,
                            isDom: !0,
                            index: this.slides.length
                        });
                        i.push(e);
                    }
                }));
                for (let t of [ ...this.option("slides", []) || [], ...e ]) i.push(H(t));
                this.slides = i;
                for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
                for (const t of i) this.emit("beforeInitSlide", t, t.index), this.emit("initSlide", t, t.index);
                this.emit("initSlides");
            }
            setInitialPage() {
                const t = this.option("initialSlide");
                this.page = "number" == typeof t ? this.getPageForSlide(t) : parseInt(this.option("initialPage", 0) + "", 10) || 0;
            }
            setInitialPosition() {
                const {track: t, pages: e, isHorizontal: i} = this;
                if (!t || !e.length) return;
                let n = this.page;
                e[n] || (this.page = n = 0);
                const s = (e[n].pos || 0) * (this.isRTL && i ? 1 : -1), o = i ? `${s}px` : "0", a = i ? "0" : `${s}px`;
                t.style.transform = `translate3d(${o}, ${a}, 0) scale(1)`, this.option("adaptiveHeight") && this.setViewportHeight();
            }
            initPanzoom() {
                this.panzoom && (this.panzoom.destroy(), this.panzoom = null);
                const t = this.option("Panzoom") || {};
                this.panzoom = new I(this.viewport, u({}, {
                    content: this.track,
                    zoom: !1,
                    panOnlyZoomed: !1,
                    lockAxis: this.isHorizontal ? "x" : "y",
                    infinite: this.isInfinite,
                    click: !1,
                    dblClick: !1,
                    touch: t => !(this.pages.length < 2 && !t.options.infinite),
                    bounds: () => this.getBounds(),
                    maxVelocity: t => Math.abs(t.target[this.axis] - t.current[this.axis]) < 2 * this.viewportDim ? 100 : 0
                }, t)), this.panzoom.on("*", ((t, e, ...i) => {
                    this.emit(`Panzoom.${e}`, t, ...i);
                })), this.panzoom.on("decel", this.onDecel), this.panzoom.on("refresh", this.onRefresh), 
                this.panzoom.on("beforeTransform", this.onBeforeTransform), this.panzoom.on("endAnimation", this.onEndAnimation);
            }
            attachEvents() {
                const t = this.container;
                t && (t.addEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }), t.addEventListener("slideTo", this.onSlideTo)), window.addEventListener("resize", this.onResize);
            }
            createPages() {
                let t = [];
                const {contentDim: e, viewportDim: i} = this;
                let n = this.option("slidesPerPage");
                n = ("auto" === n || e <= i) && !1 !== this.option("fill") ? 1 / 0 : parseFloat(n + "");
                let s = 0, o = 0, a = 0;
                for (const e of this.slides) (!t.length || o + e.dim - i > .05 || a >= n) && (t.push(N()), 
                s = t.length - 1, o = 0, a = 0), t[s].slides.push(e), o += e.dim + e.gap, a++;
                return t;
            }
            processPages() {
                const e = this.pages, {contentDim: i, viewportDim: n, isInfinite: s} = this, o = this.option("center"), a = this.option("fill"), r = a && o && i > n && !s;
                if (e.forEach(((t, e) => {
                    var s;
                    t.index = e, t.pos = (null === (s = t.slides[0]) || void 0 === s ? void 0 : s.pos) || 0, 
                    t.dim = 0;
                    for (const [e, i] of t.slides.entries()) t.dim += i.dim, e < t.slides.length - 1 && (t.dim += i.gap);
                    r && t.pos + .5 * t.dim < .5 * n ? t.pos = 0 : r && t.pos + .5 * t.dim >= i - .5 * n ? t.pos = i - n : o && (t.pos += -.5 * (n - t.dim));
                })), e.forEach((e => {
                    a && !s && i > n && (e.pos = Math.max(e.pos, 0), e.pos = Math.min(e.pos, i - n)), 
                    e.pos = t(e.pos, 1e3), e.dim = t(e.dim, 1e3), Math.abs(e.pos) <= .1 && (e.pos = 0);
                })), s) return e;
                const l = [];
                let c;
                return e.forEach((t => {
                    const e = Object.assign({}, t);
                    c && e.pos === c.pos ? (c.dim += e.dim, c.slides = [ ...c.slides, ...e.slides ]) : (e.index = l.length, 
                    c = e, l.push(e));
                })), l;
            }
            getPageFromIndex(t = 0) {
                const e = this.pages.length;
                let i;
                return t = parseInt((t || 0).toString()) || 0, i = this.isInfinite ? (t % e + e) % e : Math.max(Math.min(t, e - 1), 0), 
                i;
            }
            getSlideMetrics(e) {
                var i, n;
                const s = this.isHorizontal ? "width" : "height";
                let o = 0, a = 0, r = e.el;
                const l = !(!r || r.parentNode);
                if (r ? o = parseFloat(r.dataset[s] || "") || 0 : (r = document.createElement("div"), 
                r.style.visibility = "hidden", (this.track || document.body).prepend(r)), P(r, this.cn(J) + " " + e.class + " " + e.customClass), 
                o) r.style[s] = `${o}px`, r.style["width" === s ? "height" : "width"] = ""; else {
                    l && (this.track || document.body).prepend(r), o = r.getBoundingClientRect()[s] * Math.max(1, (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.scale) || 1);
                    let t = r[this.isHorizontal ? "offsetWidth" : "offsetHeight"];
                    t - 1 > o && (o = t);
                }
                const c = getComputedStyle(r);
                return "content-box" === c.boxSizing && (this.isHorizontal ? (o += parseFloat(c.paddingLeft) || 0, 
                o += parseFloat(c.paddingRight) || 0) : (o += parseFloat(c.paddingTop) || 0, o += parseFloat(c.paddingBottom) || 0)), 
                a = parseFloat(c[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0, l ? null === (n = r.parentElement) || void 0 === n || n.removeChild(r) : e.el || r.remove(), 
                {
                    dim: t(o, 1e3),
                    gap: t(a, 1e3)
                };
            }
            getBounds() {
                const {isInfinite: t, isRTL: e, isHorizontal: i, pages: n} = this;
                let s = {
                    min: 0,
                    max: 0
                };
                if (t) s = {
                    min: -1 / 0,
                    max: 1 / 0
                }; else if (n.length) {
                    const t = n[0].pos, o = n[n.length - 1].pos;
                    s = e && i ? {
                        min: t,
                        max: o
                    } : {
                        min: -1 * o,
                        max: -1 * t
                    };
                }
                return {
                    x: i ? s : {
                        min: 0,
                        max: 0
                    },
                    y: i ? {
                        min: 0,
                        max: 0
                    } : s
                };
            }
            repositionSlides() {
                let e, {isHorizontal: i, isRTL: n, isInfinite: s, viewport: o, viewportDim: a, contentDim: r, page: l, pages: c, slides: h, panzoom: d} = this, u = 0, p = 0, f = 0, g = 0;
                d ? g = -1 * d.current[this.axis] : c[l] && (g = c[l].pos || 0), e = i ? n ? "right" : "left" : "top", 
                n && i && (g *= -1);
                for (const i of h) {
                    const n = i.el;
                    n ? ("top" === e ? (n.style.right = "", n.style.left = "") : n.style.top = "", i.index !== u ? n.style[e] = 0 === p ? "" : `${t(p, 1e3)}px` : n.style[e] = "", 
                    f += i.dim + i.gap, u++) : p += i.dim + i.gap;
                }
                if (s && f && o) {
                    let n = getComputedStyle(o), s = "padding", l = i ? "Right" : "Bottom", c = parseFloat(n[s + (i ? "Left" : "Top")]);
                    g -= c, a += c, a += parseFloat(n[s + l]);
                    for (const i of h) i.el && (t(i.pos) < t(a) && t(i.pos + i.dim + i.gap) < t(g) && t(g) > t(r - a) && (i.el.style[e] = `${t(p + f, 1e3)}px`), 
                    t(i.pos + i.gap) >= t(r - a) && t(i.pos) > t(g + a) && t(g) < t(a) && (i.el.style[e] = `-${t(f, 1e3)}px`));
                }
                let m, v, b = [ ...this.inTransition ];
                if (b.length > 1 && (m = c[b[0]], v = c[b[1]]), m && v) {
                    let i = 0;
                    for (const n of h) n.el ? this.inTransition.has(n.index) && m.slides.indexOf(n) < 0 && (n.el.style[e] = `${t(i + (m.pos - v.pos), 1e3)}px`) : i += n.dim + n.gap;
                }
            }
            createSlideEl(t) {
                const {track: e, slides: i} = this;
                if (!e || !t) return;
                if (t.el && t.el.parentNode) return;
                const n = t.el || document.createElement("div");
                P(n, this.cn(J)), P(n, t.class), P(n, t.customClass);
                const s = t.html;
                s && (s instanceof HTMLElement ? n.appendChild(s) : n.innerHTML = t.html + "");
                const o = [];
                i.forEach(((t, e) => {
                    t.el && o.push(e);
                }));
                const a = t.index;
                let r = null;
                if (o.length) r = i[o.reduce(((t, e) => Math.abs(e - a) < Math.abs(t - a) ? e : t))];
                const l = r && r.el && r.el.parentNode ? r.index < t.index ? r.el.nextSibling : r.el : null;
                e.insertBefore(n, e.contains(l) ? l : null), t.el = n, this.emit("createSlide", t);
            }
            removeSlideEl(t, e = !1) {
                const i = null == t ? void 0 : t.el;
                if (!i || !i.parentNode) return;
                const n = this.cn(K);
                if (i.classList.contains(n) && (S(i, n), this.emit("unselectSlide", t)), t.isDom && !e) return i.removeAttribute("aria-hidden"), 
                i.removeAttribute("data-index"), void (i.style.left = "");
                this.emit("removeSlide", t);
                const s = new CustomEvent(G);
                i.dispatchEvent(s), t.el && (t.el.remove(), t.el = null);
            }
            transitionTo(t = 0, e = this.option("transition")) {
                var i, n, s, o;
                if (!e) return !1;
                const a = this.page, {pages: r, panzoom: l} = this;
                t = parseInt((t || 0).toString()) || 0;
                const c = this.getPageFromIndex(t);
                if (!l || !r[c] || r.length < 2 || Math.abs(((null === (n = null === (i = r[a]) || void 0 === i ? void 0 : i.slides[0]) || void 0 === n ? void 0 : n.dim) || 0) - this.viewportDim) > 1) return !1;
                let h = t > a ? 1 : -1;
                this.isInfinite && (0 === a && t === r.length - 1 && (h = -1), a === r.length - 1 && 0 === t && (h = 1));
                const d = r[c].pos * (this.isRTL ? 1 : -1);
                if (a === c && Math.abs(d - l.target[this.axis]) < 1) return !1;
                this.clearTransitions();
                const u = l.isResting;
                P(this.container, this.cn("inTransition"));
                const p = (null === (s = r[a]) || void 0 === s ? void 0 : s.slides[0]) || null, f = (null === (o = r[c]) || void 0 === o ? void 0 : o.slides[0]) || null;
                this.inTransition.add(f.index), this.createSlideEl(f);
                let g = p.el, m = f.el;
                u || e === J || (e = "fadeFast", g = null);
                const v = this.isRTL ? "next" : "prev", b = this.isRTL ? "prev" : "next";
                return g && (this.inTransition.add(p.index), p.transition = e, g.addEventListener(G, this.onAnimationEnd), 
                g.classList.add(`f-${e}Out`, `to-${h > 0 ? b : v}`)), m && (f.transition = e, m.addEventListener(G, this.onAnimationEnd), 
                m.classList.add(`f-${e}In`, `from-${h > 0 ? v : b}`)), l.current[this.axis] = d, 
                l.target[this.axis] = d, l.requestTick(), this.onChange(c), !0;
            }
            manageSlideVisiblity() {
                const t = new Set, e = new Set, i = this.getVisibleSlides(parseFloat(this.option("preload", 0) + "") || 0);
                for (const n of this.slides) i.has(n) ? t.add(n) : e.add(n);
                for (const e of this.inTransition) t.add(this.slides[e]);
                for (const e of t) this.createSlideEl(e), this.lazyLoadSlide(e);
                for (const i of e) t.has(i) || this.removeSlideEl(i);
                this.markSelectedSlides(), this.repositionSlides();
            }
            markSelectedSlides() {
                if (!this.pages[this.page] || !this.pages[this.page].slides) return;
                const t = "aria-hidden";
                let e = this.cn(K);
                if (e) for (const i of this.slides) {
                    const n = i.el;
                    n && (n.dataset.index = `${i.index}`, n.classList.contains("f-thumbs__slide") ? this.getVisibleSlides(0).has(i) ? n.removeAttribute(t) : n.setAttribute(t, "true") : this.pages[this.page].slides.includes(i) ? (n.classList.contains(e) || (P(n, e), 
                    this.emit("selectSlide", i)), n.removeAttribute(t)) : (n.classList.contains(e) && (S(n, e), 
                    this.emit("unselectSlide", i)), n.setAttribute(t, "true")));
                }
            }
            flipInfiniteTrack() {
                const {axis: t, isHorizontal: e, isInfinite: i, isRTL: n, viewportDim: s, contentDim: o} = this, a = this.panzoom;
                if (!a || !i) return;
                let r = a.current[t], l = a.target[t] - r, c = 0, h = .5 * s;
                n && e ? (r < -h && (c = -1, r += o), r > o - h && (c = 1, r -= o)) : (r > h && (c = 1, 
                r -= o), r < -o + h && (c = -1, r += o)), c && (a.current[t] = r, a.target[t] = r + l);
            }
            lazyLoadImg(t, e) {
                const i = this, s = "f-fadeIn", o = "is-preloading";
                let a = !1, r = null;
                const l = () => {
                    a || (a = !0, r && (r.remove(), r = null), S(e, o), e.complete && (P(e, s), setTimeout((() => {
                        S(e, s);
                    }), 350)), this.option("adaptiveHeight") && t.el && this.pages[this.page].slides.indexOf(t) > -1 && (i.updateMetrics(), 
                    i.setViewportHeight()), this.emit("load", t));
                };
                P(e, o), e.src = e.dataset.lazySrcset || e.dataset.lazySrc || "", delete e.dataset.lazySrc, 
                delete e.dataset.lazySrcset, e.addEventListener("error", (() => {
                    l();
                })), e.addEventListener("load", (() => {
                    l();
                })), setTimeout((() => {
                    const i = e.parentNode;
                    i && t.el && (e.complete ? l() : a || (r = n(x), i.insertBefore(r, e)));
                }), 300);
            }
            lazyLoadSlide(t) {
                const e = t && t.el;
                if (!e) return;
                const i = new Set;
                let n = Array.from(e.querySelectorAll("[data-lazy-src],[data-lazy-srcset]"));
                e.dataset.lazySrc && n.push(e), n.map((t => {
                    t instanceof HTMLImageElement ? i.add(t) : t instanceof HTMLElement && t.dataset.lazySrc && (t.style.backgroundImage = `url('${t.dataset.lazySrc}')`, 
                    delete t.dataset.lazySrc);
                }));
                for (const e of i) this.lazyLoadImg(t, e);
            }
            onAnimationEnd(t) {
                var e;
                const i = t.target, n = i ? parseInt(i.dataset.index || "", 10) || 0 : -1, s = this.slides[n], o = t.animationName;
                if (!i || !s || !o) return;
                const a = !!this.inTransition.has(n) && s.transition;
                a && o.substring(0, a.length + 2) === `f-${a}` && this.inTransition.delete(n), this.inTransition.size || this.clearTransitions(), 
                n === this.page && (null === (e = this.panzoom) || void 0 === e ? void 0 : e.isResting) && this.emit("settle");
            }
            onDecel(t, e = 0, i = 0, n = 0, s = 0) {
                if (this.option("dragFree")) return void this.setPageFromPosition();
                const {isRTL: o, isHorizontal: a, axis: r, pages: l} = this, c = l.length, h = Math.abs(Math.atan2(i, e) / (Math.PI / 180));
                let d = 0;
                if (d = h > 45 && h < 135 ? a ? 0 : i : a ? e : 0, !c) return;
                let u = this.page, p = o && a ? 1 : -1;
                const f = t.current[r] * p;
                let {pageIndex: g} = this.getPageFromPosition(f);
                Math.abs(d) > 5 ? (l[u].dim < document.documentElement["client" + (this.isHorizontal ? "Width" : "Height")] - 1 && (u = g), 
                u = o && a ? d < 0 ? u - 1 : u + 1 : d < 0 ? u + 1 : u - 1) : u = 0 === n && 0 === s ? u : g, 
                this.slideTo(u, {
                    transition: !1,
                    friction: t.option("decelFriction")
                });
            }
            onClick(t) {
                const e = t.target, i = e && E(e) ? e.dataset : null;
                let n, s;
                i && (void 0 !== i.carouselPage ? (s = "slideTo", n = i.carouselPage) : void 0 !== i.carouselNext ? s = "slideNext" : void 0 !== i.carouselPrev && (s = "slidePrev")), 
                s ? (t.preventDefault(), t.stopPropagation(), e && !e.hasAttribute("disabled") && this[s](n)) : this.emit("click", t);
            }
            onSlideTo(t) {
                const e = t.detail || 0;
                this.slideTo(this.getPageForSlide(e), {
                    friction: 0
                });
            }
            onChange(t, e = 0) {
                const i = this.page;
                this.prevPage = i, this.page = t, this.option("adaptiveHeight") && this.setViewportHeight(), 
                t !== i && (this.markSelectedSlides(), this.emit("change", t, i, e));
            }
            onRefresh() {
                let t = this.contentDim, e = this.viewportDim;
                this.updateMetrics(), this.contentDim === t && this.viewportDim === e || this.slideTo(this.page, {
                    friction: 0,
                    transition: !1
                });
            }
            onScroll() {
                var t;
                null === (t = this.viewport) || void 0 === t || t.scroll(0, 0);
            }
            onResize() {
                this.option("breakpoints") && this.processOptions();
            }
            onBeforeTransform(t) {
                this.lp !== t.current[this.axis] && (this.flipInfiniteTrack(), this.manageSlideVisiblity()), 
                this.lp = t.current.e;
            }
            onEndAnimation() {
                this.inTransition.size || this.emit("settle");
            }
            reInit(t = null, e = null) {
                this.destroy(), this.state = B.Init, this.prevPage = null, this.userOptions = t || this.userOptions, 
                this.userPlugins = e || this.userPlugins, this.processOptions();
            }
            slideTo(t = 0, {friction: e = this.option("friction"), transition: i = this.option("transition")} = {}) {
                if (this.state === B.Destroy) return;
                t = parseInt((t || 0).toString()) || 0;
                const n = this.getPageFromIndex(t), {axis: s, isHorizontal: o, isRTL: a, pages: r, panzoom: l} = this, c = r.length, h = a && o ? 1 : -1;
                if (!l || !c) return;
                if (this.page !== n) {
                    const e = new Event("beforeChange", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    if (this.emit("beforeChange", e, t), e.defaultPrevented) return;
                }
                if (this.transitionTo(t, i)) return;
                let d = r[n].pos;
                if (this.isInfinite) {
                    const e = this.contentDim, i = l.target[s] * h;
                    if (2 === c) d += e * Math.floor(parseFloat(t + "") / 2); else d = [ d, d - e, d + e ].reduce((function(t, e) {
                        return Math.abs(e - i) < Math.abs(t - i) ? e : t;
                    }));
                }
                d *= h, Math.abs(l.target[s] - d) < 1 || (l.panTo({
                    x: o ? d : 0,
                    y: o ? 0 : d,
                    friction: e
                }), this.onChange(n));
            }
            slideToClosest(t) {
                if (this.panzoom) {
                    const {pageIndex: e} = this.getPageFromPosition();
                    this.slideTo(e, t);
                }
            }
            slideNext() {
                this.slideTo(this.page + 1);
            }
            slidePrev() {
                this.slideTo(this.page - 1);
            }
            clearTransitions() {
                this.inTransition.clear(), S(this.container, this.cn("inTransition"));
                const t = [ "to-prev", "to-next", "from-prev", "from-next" ];
                for (const e of this.slides) {
                    const i = e.el;
                    if (i) {
                        i.removeEventListener(G, this.onAnimationEnd), i.classList.remove(...t);
                        const n = e.transition;
                        n && i.classList.remove(`f-${n}Out`, `f-${n}In`);
                    }
                }
                this.manageSlideVisiblity();
            }
            addSlide(t, e) {
                var i, n, s, o;
                const a = this.panzoom, r = (null === (i = this.pages[this.page]) || void 0 === i ? void 0 : i.pos) || 0, l = (null === (n = this.pages[this.page]) || void 0 === n ? void 0 : n.dim) || 0, c = this.contentDim < this.viewportDim;
                let h = Array.isArray(e) ? e : [ e ];
                const d = [];
                for (const t of h) d.push(H(t));
                this.slides.splice(t, 0, ...d);
                for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
                for (const t of d) this.emit("beforeInitSlide", t, t.index);
                if (this.page >= t && (this.page += d.length), this.updateMetrics(), a) {
                    const e = (null === (s = this.pages[this.page]) || void 0 === s ? void 0 : s.pos) || 0, i = (null === (o = this.pages[this.page]) || void 0 === o ? void 0 : o.dim) || 0, n = this.pages.length || 1, h = this.isRTL ? l - i : i - l, d = this.isRTL ? r - e : e - r;
                    c && 1 === n ? (t <= this.page && (a.current[this.axis] -= h, a.target[this.axis] -= h), 
                    a.panTo({
                        [this.isHorizontal ? "x" : "y"]: -1 * e
                    })) : d && t <= this.page && (a.target[this.axis] -= d, a.current[this.axis] -= d, 
                    a.requestTick());
                }
                for (const t of d) this.emit("initSlide", t, t.index);
            }
            prependSlide(t) {
                this.addSlide(0, t);
            }
            appendSlide(t) {
                this.addSlide(this.slides.length, t);
            }
            removeSlide(t) {
                const e = this.slides.length;
                t = (t % e + e) % e;
                const i = this.slides[t];
                if (i) {
                    this.removeSlideEl(i, !0), this.slides.splice(t, 1);
                    for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
                    this.updateMetrics(), this.slideTo(this.page, {
                        friction: 0,
                        transition: !1
                    }), this.emit("destroySlide", i);
                }
            }
            updateMetrics() {
                const {panzoom: e, viewport: i, track: n, slides: s, isHorizontal: o, isInfinite: a} = this;
                if (!n) return;
                const r = o ? "width" : "height", l = o ? "offsetWidth" : "offsetHeight";
                if (i) {
                    let e = Math.max(i[l], t(i.getBoundingClientRect()[r], 1e3)), n = getComputedStyle(i), s = "padding", a = o ? "Right" : "Bottom";
                    e -= parseFloat(n[s + (o ? "Left" : "Top")]) + parseFloat(n[s + a]), this.viewportDim = e;
                }
                let c, h = 0;
                for (const [e, i] of s.entries()) {
                    let n = 0, o = 0;
                    !i.el && c ? (n = c.dim, o = c.gap) : (({dim: n, gap: o} = this.getSlideMetrics(i)), 
                    c = i), n = t(n, 1e3), o = t(o, 1e3), i.dim = n, i.gap = o, i.pos = h, h += n, (a || e < s.length - 1) && (h += o);
                }
                h = t(h, 1e3), this.contentDim = h, e && (e.contentRect[r] = h, e.contentRect[o ? "fullWidth" : "fullHeight"] = h), 
                this.pages = this.createPages(), this.pages = this.processPages(), this.state === B.Init && this.setInitialPage(), 
                this.page = Math.max(0, Math.min(this.page, this.pages.length - 1)), this.manageSlideVisiblity(), 
                this.emit("refresh");
            }
            getProgress(e, i = !1, n = !1) {
                void 0 === e && (e = this.page);
                const s = this, o = s.panzoom, a = s.contentDim, r = s.pages[e] || 0;
                if (!r || !o) return e > this.page ? -1 : 1;
                let l = -1 * o.current.e, c = t((l - r.pos) / (1 * r.dim), 1e3), h = c, d = c;
                this.isInfinite && !0 !== n && (h = t((l - r.pos + a) / (1 * r.dim), 1e3), d = t((l - r.pos - a) / (1 * r.dim), 1e3));
                let u = [ c, h, d ].reduce((function(t, e) {
                    return Math.abs(e) < Math.abs(t) ? e : t;
                }));
                return i ? u : u > 1 ? 1 : u < -1 ? -1 : u;
            }
            setViewportHeight() {
                const {page: t, pages: e, viewport: i, isHorizontal: n} = this;
                if (!i || !e[t]) return;
                let s = 0;
                n && this.track && (this.track.style.height = "auto", e[t].slides.forEach((t => {
                    t.el && (s = Math.max(s, t.el.offsetHeight));
                }))), i.style.height = s ? `${s}px` : "";
            }
            getPageForSlide(t) {
                for (const e of this.pages) for (const i of e.slides) if (i.index === t) return e.index;
                return -1;
            }
            getVisibleSlides(t = 0) {
                var e;
                const i = new Set;
                let {panzoom: n, contentDim: s, viewportDim: o, pages: a, page: r} = this;
                if (o) {
                    s = s + (null === (e = this.slides[this.slides.length - 1]) || void 0 === e ? void 0 : e.gap) || 0;
                    let l = 0;
                    l = n && n.state !== m.Init && n.state !== m.Destroy ? -1 * n.current[this.axis] : a[r] && a[r].pos || 0, 
                    this.isInfinite && (l -= Math.floor(l / s) * s), this.isRTL && this.isHorizontal && (l *= -1);
                    const c = l - o * t, h = l + o * (t + 1), d = this.isInfinite ? [ -1, 0, 1 ] : [ 0 ];
                    for (const t of this.slides) for (const e of d) {
                        const n = t.pos + e * s, o = n + t.dim + t.gap;
                        n < h && o > c && i.add(t);
                    }
                }
                return i;
            }
            getPageFromPosition(t) {
                const {viewportDim: e, contentDim: i, slides: n, pages: s, panzoom: o} = this, a = s.length, r = n.length, l = n[0], c = n[r - 1], h = this.option("center");
                let d = 0, u = 0, p = 0, f = void 0 === t ? -1 * ((null == o ? void 0 : o.target[this.axis]) || 0) : t;
                h && (f += .5 * e), this.isInfinite ? (f < l.pos - .5 * c.gap && (f -= i, p = -1), 
                f > c.pos + c.dim + .5 * c.gap && (f -= i, p = 1)) : f = Math.max(l.pos || 0, Math.min(f, c.pos));
                let g = c, m = n.find((t => {
                    const e = t.pos - .5 * g.gap, i = t.pos + t.dim + .5 * t.gap;
                    return g = t, f >= e && f < i;
                }));
                return m || (m = c), u = this.getPageForSlide(m.index), d = u + p * a, {
                    page: d,
                    pageIndex: u
                };
            }
            setPageFromPosition() {
                const {pageIndex: t} = this.getPageFromPosition();
                this.onChange(t);
            }
            destroy() {
                if ([ B.Destroy ].includes(this.state)) return;
                this.state = B.Destroy;
                const {container: t, viewport: e, track: i, slides: n, panzoom: s} = this, o = this.option("classes");
                t.removeEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }), t.removeEventListener("slideTo", this.onSlideTo), window.removeEventListener("resize", this.onResize), 
                s && (s.destroy(), this.panzoom = null), n && n.forEach((t => {
                    this.removeSlideEl(t);
                })), this.detachPlugins(), e && (e.removeEventListener("scroll", this.onScroll), 
                e.offsetParent && i && i.offsetParent && e.replaceWith(...i.childNodes));
                for (const [e, i] of Object.entries(o)) "container" !== e && i && t.classList.remove(i);
                this.track = null, this.viewport = null, this.page = 0, this.slides = [];
                const a = this.events.get("ready");
                this.events = new Map, a && this.events.set("ready", a);
            }
        }
        Object.defineProperty(Q, "Panzoom", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: I
        }), Object.defineProperty(Q, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: j
        }), Object.defineProperty(Q, "Plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: U
        });
        const tt = function(t) {
            if (!E(t)) return 0;
            const e = window.scrollY, i = window.innerHeight, n = e + i, s = t.getBoundingClientRect(), o = s.y + e, a = s.height, r = o + a;
            if (e > r || n < o) return 0;
            if (e < o && n > r) return 100;
            if (o < e && r > n) return 100;
            let l = a;
            o < e && (l -= e - o), r > n && (l -= r - n);
            const c = l / i * 100;
            return Math.round(c);
        }, et = !("undefined" == typeof window || !window.document || !window.document.createElement);
        let it;
        const nt = [ "a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])' ].join(","), st = t => {
            if (t && et) {
                void 0 === it && document.createElement("div").focus({
                    get preventScroll() {
                        return it = !0, !1;
                    }
                });
                try {
                    if (it) t.focus({
                        preventScroll: !0
                    }); else {
                        const e = window.scrollY || document.body.scrollTop, i = window.scrollX || document.body.scrollLeft;
                        t.focus(), document.body.scrollTo({
                            top: e,
                            left: i,
                            behavior: "auto"
                        });
                    }
                } catch (t) {}
            }
        }, ot = () => {
            const t = document;
            let e, i = "", n = "", s = "";
            return t.fullscreenEnabled ? (i = "requestFullscreen", n = "exitFullscreen", s = "fullscreenElement") : t.webkitFullscreenEnabled && (i = "webkitRequestFullscreen", 
            n = "webkitExitFullscreen", s = "webkitFullscreenElement"), i && (e = {
                request: function(e = t.documentElement) {
                    return "webkitRequestFullscreen" === i ? e[i](Element.ALLOW_KEYBOARD_INPUT) : e[i]();
                },
                exit: function() {
                    return t[s] && t[n]();
                },
                isFullscreen: function() {
                    return t[s];
                }
            }), e;
        }, at = {
            animated: !0,
            autoFocus: !0,
            backdropClick: "close",
            Carousel: {
                classes: {
                    container: "fancybox__carousel",
                    viewport: "fancybox__viewport",
                    track: "fancybox__track",
                    slide: "fancybox__slide"
                }
            },
            closeButton: "auto",
            closeExisting: !1,
            commonCaption: !1,
            compact: () => window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
            contentClick: "toggleZoom",
            contentDblClick: !1,
            defaultType: "image",
            defaultDisplay: "flex",
            dragToClose: !0,
            Fullscreen: {
                autoStart: !1
            },
            groupAll: !1,
            groupAttr: "data-fancybox",
            hideClass: "f-fadeOut",
            hideScrollbar: !0,
            idle: 3500,
            keyboard: {
                Escape: "close",
                Delete: "close",
                Backspace: "close",
                PageUp: "next",
                PageDown: "prev",
                ArrowUp: "prev",
                ArrowDown: "next",
                ArrowRight: "next",
                ArrowLeft: "prev"
            },
            l10n: Object.assign(Object.assign({}, b), {
                CLOSE: "Close",
                NEXT: "Next",
                PREV: "Previous",
                MODAL: "You can close this modal content with the ESC key",
                ERROR: "Something Went Wrong, Please Try Again Later",
                IMAGE_ERROR: "Image Not Found",
                ELEMENT_NOT_FOUND: "HTML Element Not Found",
                AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
                AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
                IFRAME_ERROR: "Error Loading Page",
                TOGGLE_ZOOM: "Toggle zoom level",
                TOGGLE_THUMBS: "Toggle thumbnails",
                TOGGLE_SLIDESHOW: "Toggle slideshow",
                TOGGLE_FULLSCREEN: "Toggle full-screen mode",
                DOWNLOAD: "Download"
            }),
            parentEl: null,
            placeFocusBack: !0,
            showClass: "f-zoomInUp",
            startIndex: 0,
            tpl: {
                closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
                main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>'
            },
            trapFocus: !0,
            wheel: "zoom"
        };
        var rt, lt;
        !function(t) {
            t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Closing = 2] = "Closing", 
            t[t.CustomClosing = 3] = "CustomClosing", t[t.Destroy = 4] = "Destroy";
        }(rt || (rt = {})), function(t) {
            t[t.Loading = 0] = "Loading", t[t.Opening = 1] = "Opening", t[t.Ready = 2] = "Ready", 
            t[t.Closing = 3] = "Closing";
        }(lt || (lt = {}));
        let ct = "", ht = !1, dt = !1, ut = null;
        const pt = () => {
            let t = "", e = "";
            const i = Oe.getInstance();
            if (i) {
                const n = i.carousel, s = i.getSlide();
                if (n && s) {
                    let o = s.slug || void 0, a = s.triggerEl || void 0;
                    e = o || i.option("slug") || "", !e && a && a.dataset && (e = a.dataset.fancybox || ""), 
                    e && "true" !== e && (t = "#" + e + (!o && n.slides.length > 1 ? "-" + (s.index + 1) : ""));
                }
            }
            return {
                hash: t,
                slug: e,
                index: 1
            };
        }, ft = () => {
            const t = new URL(document.URL).hash, e = t.slice(1).split("-"), i = e[e.length - 1], n = i && /^\+?\d+$/.test(i) && parseInt(e.pop() || "1", 10) || 1;
            return {
                hash: t,
                slug: e.join("-"),
                index: n
            };
        }, gt = () => {
            const {slug: t, index: e} = ft();
            if (!t) return;
            let i = document.querySelector(`[data-slug="${t}"]`);
            if (i && i.dispatchEvent(new CustomEvent("click", {
                bubbles: !0,
                cancelable: !0
            })), Oe.getInstance()) return;
            const n = document.querySelectorAll(`[data-fancybox="${t}"]`);
            n.length && (i = n[e - 1], i && i.dispatchEvent(new CustomEvent("click", {
                bubbles: !0,
                cancelable: !0
            })));
        }, mt = () => {
            if (!1 === Oe.defaults.Hash) return;
            const t = Oe.getInstance();
            if (!1 === (null == t ? void 0 : t.options.Hash)) return;
            const {slug: e, index: i} = ft(), {slug: n} = pt();
            t && (e === n ? t.jumpTo(i - 1) : (ht = !0, t.close())), gt();
        }, vt = () => {
            ut && clearTimeout(ut), queueMicrotask((() => {
                mt();
            }));
        }, bt = () => {
            window.addEventListener("hashchange", vt, !1), setTimeout((() => {
                mt();
            }), 500);
        };
        et && (/complete|interactive|loaded/.test(document.readyState) ? bt() : document.addEventListener("DOMContentLoaded", bt));
        const yt = "is-zooming-in";
        class wt extends _ {
            onCreateSlide(t, e, i) {
                const n = this.instance.optionFor(i, "src") || "";
                i.el && "image" === i.type && "string" == typeof n && this.setImage(i, n);
            }
            onRemoveSlide(t, e, i) {
                i.panzoom && i.panzoom.destroy(), i.panzoom = void 0, i.imageEl = void 0;
            }
            onChange(t, e, i, n) {
                S(this.instance.container, yt);
                for (const t of e.slides) {
                    const e = t.panzoom;
                    e && t.index !== i && e.reset(.35);
                }
            }
            onClose() {
                var t;
                const e = this.instance, i = e.container, n = e.getSlide();
                if (!i || !i.parentElement || !n) return;
                const {el: s, contentEl: o, panzoom: a, thumbElSrc: r} = n;
                if (!s || !r || !o || !a || a.isContentLoading || a.state === m.Init || a.state === m.Destroy) return;
                a.updateMetrics();
                let l = this.getZoomInfo(n);
                if (!l) return;
                this.instance.state = rt.CustomClosing, i.classList.remove(yt), i.classList.add("is-zooming-out"), 
                o.style.backgroundImage = `url('${r}')`;
                const c = i.getBoundingClientRect();
                1 === ((null === (t = window.visualViewport) || void 0 === t ? void 0 : t.scale) || 1) && Object.assign(i.style, {
                    position: "absolute",
                    top: `${i.offsetTop + window.scrollY}px`,
                    left: `${i.offsetLeft + window.scrollX}px`,
                    bottom: "auto",
                    right: "auto",
                    width: `${c.width}px`,
                    height: `${c.height}px`,
                    overflow: "hidden"
                });
                const {x: h, y: d, scale: u, opacity: p} = l;
                if (p) {
                    const t = ((t, e, i, n) => {
                        const s = e - t, o = n - i;
                        return e => i + ((e - t) / s * o || 0);
                    })(a.scale, u, 1, 0);
                    a.on("afterTransform", (() => {
                        o.style.opacity = t(a.scale) + "";
                    }));
                }
                a.on("endAnimation", (() => {
                    e.destroy();
                })), a.target.a = u, a.target.b = 0, a.target.c = 0, a.target.d = u, a.panTo({
                    x: h,
                    y: d,
                    scale: u,
                    friction: p ? .2 : .33,
                    ignoreBounds: !0
                }), a.isResting && e.destroy();
            }
            setImage(t, e) {
                const i = this.instance;
                t.src = e, this.process(t, e).then((e => {
                    const {contentEl: n, imageEl: s, thumbElSrc: o, el: a} = t;
                    if (i.isClosing() || !n || !s) return;
                    n.offsetHeight;
                    const r = !!i.isOpeningSlide(t) && this.getZoomInfo(t);
                    if (this.option("protected") && a) {
                        a.addEventListener("contextmenu", (t => {
                            t.preventDefault();
                        }));
                        const t = document.createElement("div");
                        P(t, "fancybox-protected"), n.appendChild(t);
                    }
                    if (o && r) {
                        const s = e.contentRect, a = Math.max(s.fullWidth, s.fullHeight);
                        let c = null;
                        !r.opacity && a > 1200 && (c = document.createElement("img"), P(c, "fancybox-ghost"), 
                        c.src = o, n.appendChild(c));
                        const h = () => {
                            c && (P(c, "f-fadeFastOut"), setTimeout((() => {
                                c && (c.remove(), c = null);
                            }), 200));
                        };
                        (l = o, new Promise(((t, e) => {
                            const i = new Image;
                            i.onload = t, i.onerror = e, i.src = l;
                        }))).then((() => {
                            i.hideLoading(t), t.state = lt.Opening, this.instance.emit("reveal", t), this.zoomIn(t).then((() => {
                                h(), this.instance.done(t);
                            }), (() => {})), c && setTimeout((() => {
                                h();
                            }), a > 2500 ? 800 : 200);
                        }), (() => {
                            i.hideLoading(t), i.revealContent(t);
                        }));
                    } else {
                        const n = this.optionFor(t, "initialSize"), s = this.optionFor(t, "zoom"), o = {
                            event: i.prevMouseMoveEvent || i.options.event,
                            friction: s ? .12 : 0
                        };
                        let a = i.optionFor(t, "showClass") || void 0, r = !0;
                        i.isOpeningSlide(t) && ("full" === n ? e.zoomToFull(o) : "cover" === n ? e.zoomToCover(o) : "max" === n ? e.zoomToMax(o) : r = !1, 
                        e.stop("current")), r && a && (a = e.isDragging ? "f-fadeIn" : ""), i.hideLoading(t), 
                        i.revealContent(t, a);
                    }
                    var l;
                }), (() => {
                    i.setError(t, "{{IMAGE_ERROR}}");
                }));
            }
            process(t, e) {
                return new Promise(((i, s) => {
                    var o;
                    const a = this.instance, r = t.el;
                    a.clearContent(t), a.showLoading(t);
                    let l = this.optionFor(t, "content");
                    if ("string" == typeof l && (l = n(l)), !l || !E(l)) {
                        if (l = document.createElement("img"), l instanceof HTMLImageElement) {
                            let i = "", n = t.caption;
                            i = "string" == typeof n && n ? n.replace(/<[^>]+>/gi, "").substring(0, 1e3) : `Image ${t.index + 1} of ${(null === (o = a.carousel) || void 0 === o ? void 0 : o.pages.length) || 1}`, 
                            l.src = e || "", l.alt = i, l.draggable = !1, t.srcset && l.setAttribute("srcset", t.srcset), 
                            this.instance.isOpeningSlide(t) && (l.fetchPriority = "high");
                        }
                        t.sizes && l.setAttribute("sizes", t.sizes);
                    }
                    P(l, "fancybox-image"), t.imageEl = l, a.setContent(t, l, !1);
                    t.panzoom = new I(r, u({
                        transformParent: !0
                    }, this.option("Panzoom") || {}, {
                        content: l,
                        width: (e, i) => a.optionFor(t, "width", "auto", i) || "auto",
                        height: (e, i) => a.optionFor(t, "height", "auto", i) || "auto",
                        wheel: () => {
                            const t = a.option("wheel");
                            return ("zoom" === t || "pan" == t) && t;
                        },
                        click: (e, i) => {
                            var n, s;
                            if (a.isCompact || a.isClosing()) return !1;
                            if (t.index !== (null === (n = a.getSlide()) || void 0 === n ? void 0 : n.index)) return !1;
                            if (i) {
                                const t = i.composedPath()[0];
                                if ([ "A", "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO" ].includes(t.nodeName)) return !1;
                            }
                            let o = !i || i.target && (null === (s = t.contentEl) || void 0 === s ? void 0 : s.contains(i.target));
                            return a.option(o ? "contentClick" : "backdropClick") || !1;
                        },
                        dblClick: () => a.isCompact ? "toggleZoom" : a.option("contentDblClick") || !1,
                        spinner: !1,
                        panOnlyZoomed: !0,
                        wheelLimit: 1 / 0,
                        on: {
                            ready: t => {
                                i(t);
                            },
                            error: () => {
                                s();
                            },
                            destroy: () => {
                                s();
                            }
                        }
                    }));
                }));
            }
            zoomIn(t) {
                return new Promise(((e, i) => {
                    const n = this.instance, s = n.container, {panzoom: o, contentEl: a, el: r} = t;
                    o && o.updateMetrics();
                    const l = this.getZoomInfo(t);
                    if (!(l && r && a && o && s)) return void i();
                    const {x: c, y: h, scale: d, opacity: u} = l, p = () => {
                        t.state !== lt.Closing && (u && (a.style.opacity = Math.max(Math.min(1, 1 - (1 - o.scale) / (1 - d)), 0) + ""), 
                        o.scale >= 1 && o.scale > o.targetScale - .1 && e(o));
                    }, f = t => {
                        (t.scale < .99 || t.scale > 1.01) && !t.isDragging || (S(s, yt), a.style.opacity = "", 
                        t.off("endAnimation", f), t.off("touchStart", f), t.off("afterTransform", p), e(t));
                    };
                    o.on("endAnimation", f), o.on("touchStart", f), o.on("afterTransform", p), o.on([ "error", "destroy" ], (() => {
                        i();
                    })), o.panTo({
                        x: c,
                        y: h,
                        scale: d,
                        friction: 0,
                        ignoreBounds: !0
                    }), o.stop("current");
                    const g = {
                        event: "mousemove" === o.panMode ? n.prevMouseMoveEvent || n.options.event : void 0
                    }, m = this.optionFor(t, "initialSize");
                    P(s, yt), n.hideLoading(t), "full" === m ? o.zoomToFull(g) : "cover" === m ? o.zoomToCover(g) : "max" === m ? o.zoomToMax(g) : o.reset(.172);
                }));
            }
            getZoomInfo(t) {
                const {el: e, imageEl: i, thumbEl: n, panzoom: s} = t, o = this.instance, a = o.container;
                if (!e || !i || !n || !s || tt(n) < 3 || !this.optionFor(t, "zoom") || !a || o.state === rt.Destroy) return !1;
                if ("0" === getComputedStyle(a).getPropertyValue("--f-images-zoom")) return !1;
                const r = window.visualViewport || null;
                if (1 !== (r ? r.scale : 1)) return !1;
                let {top: l, left: c, width: h, height: d} = n.getBoundingClientRect(), {top: u, left: p, fitWidth: f, fitHeight: g} = s.contentRect;
                if (!(h && d && f && g)) return !1;
                const m = s.container.getBoundingClientRect();
                p += m.left, u += m.top;
                const v = -1 * (p + .5 * f - (c + .5 * h)), b = -1 * (u + .5 * g - (l + .5 * d)), y = h / f;
                let w = this.option("zoomOpacity") || !1;
                return "auto" === w && (w = Math.abs(h / d - f / g) > .1), {
                    x: v,
                    y: b,
                    scale: y,
                    opacity: w
                };
            }
            attach() {
                const t = this, e = t.instance;
                e.on("Carousel.change", t.onChange), e.on("Carousel.createSlide", t.onCreateSlide), 
                e.on("Carousel.removeSlide", t.onRemoveSlide), e.on("close", t.onClose);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("Carousel.change", t.onChange), e.off("Carousel.createSlide", t.onCreateSlide), 
                e.off("Carousel.removeSlide", t.onRemoveSlide), e.off("close", t.onClose);
            }
        }
        Object.defineProperty(wt, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                initialSize: "fit",
                Panzoom: {
                    maxScale: 1
                },
                protected: !1,
                zoom: !0,
                zoomOpacity: "auto"
            }
        }), "function" == typeof SuppressedError && SuppressedError;
        const xt = "html", Et = "image", St = "map", Pt = "youtube", Ct = "vimeo", Tt = "html5video", Mt = (t, e = {}) => {
            const i = new URL(t), n = new URLSearchParams(i.search), s = new URLSearchParams;
            for (const [t, i] of [ ...n, ...Object.entries(e) ]) {
                let e = i + "";
                if ("t" === t) {
                    let t = e.match(/((\d*)m)?(\d*)s?/);
                    t && s.set("start", 60 * parseInt(t[2] || "0") + parseInt(t[3] || "0") + "");
                } else s.set(t, e);
            }
            let o = s + "", a = t.match(/#t=((.*)?\d+s)/);
            return a && (o += `#t=${a[1]}`), o;
        }, Ot = {
            ajax: null,
            autoSize: !0,
            iframeAttr: {
                allow: "autoplay; fullscreen",
                scrolling: "auto"
            },
            preload: !0,
            videoAutoplay: !0,
            videoRatio: 16 / 9,
            videoTpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
            videoFormat: "",
            vimeo: {
                byline: 1,
                color: "00adef",
                controls: 1,
                dnt: 1,
                muted: 0
            },
            youtube: {
                controls: 1,
                enablejsapi: 1,
                nocookie: 1,
                rel: 0,
                fs: 1
            }
        }, At = [ "image", "html", "ajax", "inline", "clone", "iframe", "map", "pdf", "html5video", "youtube", "vimeo" ];
        class Lt extends _ {
            onBeforeInitSlide(t, e, i) {
                this.processType(i);
            }
            onCreateSlide(t, e, i) {
                this.setContent(i);
            }
            onClearContent(t, e) {
                e.xhr && (e.xhr.abort(), e.xhr = null);
                const i = e.iframeEl;
                i && (i.onload = i.onerror = null, i.src = "//about:blank", e.iframeEl = null);
                const n = e.contentEl, s = e.placeholderEl;
                if ("inline" === e.type && n && s) n.classList.remove("fancybox__content"), "none" !== getComputedStyle(n).getPropertyValue("display") && (n.style.display = "none"), 
                setTimeout((() => {
                    s && (n && s.parentNode && s.parentNode.insertBefore(n, s), s.remove());
                }), 0), e.contentEl = void 0, e.placeholderEl = void 0; else for (;e.el && e.el.firstChild; ) e.el.removeChild(e.el.firstChild);
            }
            onSelectSlide(t, e, i) {
                i.state === lt.Ready && this.playVideo();
            }
            onUnselectSlide(t, e, i) {
                var n, s;
                if (i.type === Tt) {
                    try {
                        null === (s = null === (n = i.el) || void 0 === n ? void 0 : n.querySelector("video")) || void 0 === s || s.pause();
                    } catch (t) {}
                    return;
                }
                let o;
                i.type === Ct ? o = {
                    method: "pause",
                    value: "true"
                } : i.type === Pt && (o = {
                    event: "command",
                    func: "pauseVideo"
                }), o && i.iframeEl && i.iframeEl.contentWindow && i.iframeEl.contentWindow.postMessage(JSON.stringify(o), "*"), 
                i.poller && clearTimeout(i.poller);
            }
            onDone(t, e) {
                t.isCurrentSlide(e) && !t.isClosing() && this.playVideo();
            }
            onRefresh(t, e) {
                e.slides.forEach((t => {
                    t.el && (this.resizeIframe(t), this.setAspectRatio(t));
                }));
            }
            onMessage(t) {
                try {
                    let e = JSON.parse(t.data);
                    if ("https://player.vimeo.com" === t.origin) {
                        if ("ready" === e.event) for (let e of Array.from(document.getElementsByClassName("fancybox__iframe"))) e instanceof HTMLIFrameElement && e.contentWindow === t.source && (e.dataset.ready = "true");
                    } else if (t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === e.event) {
                        const t = document.getElementById(e.id);
                        t && (t.dataset.ready = "true");
                    }
                } catch (t) {}
            }
            loadAjaxContent(t) {
                const e = this.instance.optionFor(t, "src") || "";
                this.instance.showLoading(t);
                const i = this.instance, n = new XMLHttpRequest;
                i.showLoading(t), n.onreadystatechange = function() {
                    n.readyState === XMLHttpRequest.DONE && i.state === rt.Ready && (i.hideLoading(t), 
                    200 === n.status ? i.setContent(t, n.responseText) : i.setError(t, 404 === n.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
                };
                const s = t.ajax || null;
                n.open(s ? "POST" : "GET", e + ""), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
                n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(s), t.xhr = n;
            }
            setInlineContent(t) {
                let e = null;
                if (E(t.src)) e = t.src; else if ("string" == typeof t.src) {
                    const i = t.src.split("#", 2).pop();
                    e = i ? document.getElementById(i) : null;
                }
                if (e) {
                    if ("clone" === t.type || e.closest(".fancybox__slide")) {
                        e = e.cloneNode(!0);
                        const i = e.dataset.animationName;
                        i && (e.classList.remove(i), delete e.dataset.animationName);
                        let n = e.getAttribute("id");
                        n = n ? `${n}--clone` : `clone-${this.instance.id}-${t.index}`, e.setAttribute("id", n);
                    } else if (e.parentNode) {
                        const i = document.createElement("div");
                        i.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(i, e), t.placeholderEl = i;
                    }
                    this.instance.setContent(t, e);
                } else this.instance.setError(t, "{{ELEMENT_NOT_FOUND}}");
            }
            setIframeContent(t) {
                const {src: e, el: i} = t;
                if (!e || "string" != typeof e || !i) return;
                i.classList.add("is-loading");
                const n = this.instance, s = document.createElement("iframe");
                s.className = "fancybox__iframe", s.setAttribute("id", `fancybox__iframe_${n.id}_${t.index}`);
                for (const [e, i] of Object.entries(this.optionFor(t, "iframeAttr") || {})) s.setAttribute(e, i);
                s.onerror = () => {
                    n.setError(t, "{{IFRAME_ERROR}}");
                }, t.iframeEl = s;
                const o = this.optionFor(t, "preload");
                if ("iframe" !== t.type || !1 === o) return s.setAttribute("src", t.src + ""), n.setContent(t, s, !1), 
                this.resizeIframe(t), void n.revealContent(t);
                n.showLoading(t), s.onload = () => {
                    if (!s.src.length) return;
                    const e = "true" !== s.dataset.ready;
                    s.dataset.ready = "true", this.resizeIframe(t), e ? n.revealContent(t) : n.hideLoading(t);
                }, s.setAttribute("src", e), n.setContent(t, s, !1);
            }
            resizeIframe(t) {
                const {type: e, iframeEl: i} = t;
                if (e === Pt || e === Ct) return;
                const n = null == i ? void 0 : i.parentElement;
                if (!i || !n) return;
                let s = t.autoSize;
                void 0 === s && (s = this.optionFor(t, "autoSize"));
                let o = t.width || 0, a = t.height || 0;
                o && a && (s = !1);
                const r = n && n.style;
                if (!1 !== t.preload && !1 !== s && r) try {
                    const t = window.getComputedStyle(n), e = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight), s = parseFloat(t.paddingTop) + parseFloat(t.paddingBottom), l = i.contentWindow;
                    if (l) {
                        const t = l.document, i = t.getElementsByTagName(xt)[0], n = t.body;
                        r.width = "", n.style.overflow = "hidden", o = o || i.scrollWidth + e, r.width = `${o}px`, 
                        n.style.overflow = "", r.flex = "0 0 auto", r.height = `${n.scrollHeight}px`, a = i.scrollHeight + s;
                    }
                } catch (t) {}
                if (o || a) {
                    const t = {
                        flex: "0 1 auto",
                        width: "",
                        height: ""
                    };
                    o && "auto" !== o && (t.width = `${o}px`), a && "auto" !== a && (t.height = `${a}px`), 
                    Object.assign(r, t);
                }
            }
            playVideo() {
                const t = this.instance.getSlide();
                if (!t) return;
                const {el: e} = t;
                if (!e || !e.offsetParent) return;
                if (!this.optionFor(t, "videoAutoplay")) return;
                if (t.type === Tt) try {
                    const t = e.querySelector("video");
                    if (t) {
                        const e = t.play();
                        void 0 !== e && e.then((() => {})).catch((e => {
                            t.muted = !0, t.play();
                        }));
                    }
                } catch (t) {}
                if (t.type !== Pt && t.type !== Ct) return;
                const i = () => {
                    if (t.iframeEl && t.iframeEl.contentWindow) {
                        let e;
                        if ("true" === t.iframeEl.dataset.ready) return e = t.type === Pt ? {
                            event: "command",
                            func: "playVideo"
                        } : {
                            method: "play",
                            value: "true"
                        }, e && t.iframeEl.contentWindow.postMessage(JSON.stringify(e), "*"), void (t.poller = void 0);
                        t.type === Pt && (e = {
                            event: "listening",
                            id: t.iframeEl.getAttribute("id")
                        }, t.iframeEl.contentWindow.postMessage(JSON.stringify(e), "*"));
                    }
                    t.poller = setTimeout(i, 250);
                };
                i();
            }
            processType(t) {
                if (t.html) return t.type = xt, t.src = t.html, void (t.html = "");
                const e = this.instance.optionFor(t, "src", "");
                if (!e || "string" != typeof e) return;
                let i = t.type, n = null;
                if (n = e.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
                    const s = this.optionFor(t, Pt), {nocookie: o} = s, a = function(t, e) {
                        var i = {};
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var s = 0;
                            for (n = Object.getOwnPropertySymbols(t); s < n.length; s++) e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (i[n[s]] = t[n[s]]);
                        }
                        return i;
                    }(s, [ "nocookie" ]), r = `www.youtube${o ? "-nocookie" : ""}.com`, l = Mt(e, a), c = encodeURIComponent(n[2]);
                    t.videoId = c, t.src = `https://${r}/embed/${c}?${l}`, t.thumbSrc = t.thumbSrc || `https://i.ytimg.com/vi/${c}/mqdefault.jpg`, 
                    i = Pt;
                } else if (n = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)) {
                    const s = Mt(e, this.optionFor(t, Ct)), o = encodeURIComponent(n[1]), a = n[4] || "";
                    t.videoId = o, t.src = `https://player.vimeo.com/video/${o}?${a ? `h=${a}${s ? "&" : ""}` : ""}${s}`, 
                    i = Ct;
                }
                if (!i && t.triggerEl) {
                    const e = t.triggerEl.dataset.type;
                    At.includes(e) && (i = e);
                }
                i || "string" == typeof e && ("#" === e.charAt(0) ? i = "inline" : (n = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = Tt, 
                t.videoFormat = t.videoFormat || "video/" + ("ogv" === n[1] ? "ogg" : n[1])) : e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = Et : e.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf")), 
                (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = `https://maps.google.${n[1]}/?ll=${(n[2] ? n[2] + "&z=" + Math.floor(parseFloat(n[3])) + (n[4] ? n[4].replace(/^\//, "&") : "") : n[4] + "").replace(/\?/, "&")}&output=${n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, 
                i = St) : (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = `https://maps.google.${n[1]}/maps?q=${n[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, 
                i = St), i = i || this.instance.option("defaultType"), t.type = i, i === Et && (t.thumbSrc = t.thumbSrc || t.src);
            }
            setContent(t) {
                const e = this.instance.optionFor(t, "src") || "";
                if (t && t.type && e) {
                    switch (t.type) {
                      case xt:
                        this.instance.setContent(t, e);
                        break;

                      case Tt:
                        const i = this.option("videoTpl");
                        i && this.instance.setContent(t, i.replace(/\{\{src\}\}/gi, e + "").replace(/\{\{format\}\}/gi, this.optionFor(t, "videoFormat") || "").replace(/\{\{poster\}\}/gi, t.poster || t.thumbSrc || ""));
                        break;

                      case "inline":
                      case "clone":
                        this.setInlineContent(t);
                        break;

                      case "ajax":
                        this.loadAjaxContent(t);
                        break;

                      case "pdf":
                      case St:
                      case Pt:
                      case Ct:
                        t.preload = !1;

                      case "iframe":
                        this.setIframeContent(t);
                    }
                    this.setAspectRatio(t);
                }
            }
            setAspectRatio(t) {
                const e = t.contentEl;
                if (!(t.el && e && t.type && [ Pt, Ct, Tt ].includes(t.type))) return;
                let i, n = t.width || "auto", s = t.height || "auto";
                if ("auto" === n || "auto" === s) {
                    i = this.optionFor(t, "videoRatio");
                    const e = (i + "").match(/(\d+)\s*\/\s?(\d+)/);
                    i = e && e.length > 2 ? parseFloat(e[1]) / parseFloat(e[2]) : parseFloat(i + "");
                } else n && s && (i = n / s);
                if (!i) return;
                e.style.aspectRatio = "", e.style.width = "", e.style.height = "", e.offsetHeight;
                const o = e.getBoundingClientRect(), a = o.width || 1, r = o.height || 1;
                e.style.aspectRatio = i + "", i < a / r ? (s = "auto" === s ? r : Math.min(r, s), 
                e.style.width = "auto", e.style.height = `${s}px`) : (n = "auto" === n ? a : Math.min(a, n), 
                e.style.width = `${n}px`, e.style.height = "auto");
            }
            attach() {
                const t = this, e = t.instance;
                e.on("Carousel.beforeInitSlide", t.onBeforeInitSlide), e.on("Carousel.createSlide", t.onCreateSlide), 
                e.on("Carousel.selectSlide", t.onSelectSlide), e.on("Carousel.unselectSlide", t.onUnselectSlide), 
                e.on("Carousel.Panzoom.refresh", t.onRefresh), e.on("done", t.onDone), e.on("clearContent", t.onClearContent), 
                window.addEventListener("message", t.onMessage);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("Carousel.beforeInitSlide", t.onBeforeInitSlide), e.off("Carousel.createSlide", t.onCreateSlide), 
                e.off("Carousel.selectSlide", t.onSelectSlide), e.off("Carousel.unselectSlide", t.onUnselectSlide), 
                e.off("Carousel.Panzoom.refresh", t.onRefresh), e.off("done", t.onDone), e.off("clearContent", t.onClearContent), 
                window.removeEventListener("message", t.onMessage);
            }
        }
        Object.defineProperty(Lt, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ot
        });
        const zt = "play", Rt = "pause", kt = "ready";
        class It extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: kt
                }), Object.defineProperty(this, "inHover", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "timer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "progressBar", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            get isActive() {
                return this.state !== kt;
            }
            onReady(t) {
                this.option("autoStart") && (t.isInfinite || t.page < t.pages.length - 1) && this.start();
            }
            onChange() {
                this.removeProgressBar(), this.pause();
            }
            onSettle() {
                this.resume();
            }
            onVisibilityChange() {
                "visible" === document.visibilityState ? this.resume() : this.pause();
            }
            onMouseEnter() {
                this.inHover = !0, this.pause();
            }
            onMouseLeave() {
                var t;
                this.inHover = !1, (null === (t = this.instance.panzoom) || void 0 === t ? void 0 : t.isResting) && this.resume();
            }
            onTimerEnd() {
                const t = this.instance;
                "play" === this.state && (t.isInfinite || t.page !== t.pages.length - 1 ? t.slideNext() : t.slideTo(0));
            }
            removeProgressBar() {
                this.progressBar && (this.progressBar.remove(), this.progressBar = null);
            }
            createProgressBar() {
                var t;
                if (!this.option("showProgress")) return null;
                this.removeProgressBar();
                const e = this.instance, i = (null === (t = e.pages[e.page]) || void 0 === t ? void 0 : t.slides) || [];
                let n = this.option("progressParentEl");
                if (n || (n = (1 === i.length ? i[0].el : null) || e.viewport), !n) return null;
                const s = document.createElement("div");
                return P(s, "f-progress"), n.prepend(s), this.progressBar = s, s.offsetHeight, s;
            }
            set() {
                const t = this, e = t.instance;
                if (e.pages.length < 2) return;
                if (t.timer) return;
                const i = t.option("timeout");
                t.state = zt, P(e.container, "has-autoplay");
                let n = t.createProgressBar();
                n && (n.style.transitionDuration = `${i}ms`, n.style.transform = "scaleX(1)"), t.timer = setTimeout((() => {
                    t.timer = null, t.inHover || t.onTimerEnd();
                }), i), t.emit("set");
            }
            clear() {
                const t = this;
                t.timer && (clearTimeout(t.timer), t.timer = null), t.removeProgressBar();
            }
            start() {
                const t = this;
                if (t.set(), t.state !== kt) {
                    if (t.option("pauseOnHover")) {
                        const e = t.instance.container;
                        e.addEventListener("mouseenter", t.onMouseEnter, !1), e.addEventListener("mouseleave", t.onMouseLeave, !1);
                    }
                    document.addEventListener("visibilitychange", t.onVisibilityChange, !1), t.emit("start");
                }
            }
            stop() {
                const t = this, e = t.state, i = t.instance.container;
                t.clear(), t.state = kt, i.removeEventListener("mouseenter", t.onMouseEnter, !1), 
                i.removeEventListener("mouseleave", t.onMouseLeave, !1), document.removeEventListener("visibilitychange", t.onVisibilityChange, !1), 
                S(i, "has-autoplay"), e !== kt && t.emit("stop");
            }
            pause() {
                const t = this;
                t.state === zt && (t.state = Rt, t.clear(), t.emit(Rt));
            }
            resume() {
                const t = this, e = t.instance;
                if (e.isInfinite || e.page !== e.pages.length - 1) if (t.state !== zt) {
                    if (t.state === Rt && !t.inHover) {
                        const e = new Event("resume", {
                            bubbles: !0,
                            cancelable: !0
                        });
                        t.emit("resume", e), e.defaultPrevented || t.set();
                    }
                } else t.set(); else t.stop();
            }
            toggle() {
                this.state === zt || this.state === Rt ? this.stop() : this.start();
            }
            attach() {
                const t = this, e = t.instance;
                e.on("ready", t.onReady), e.on("Panzoom.startAnimation", t.onChange), e.on("Panzoom.endAnimation", t.onSettle), 
                e.on("Panzoom.touchMove", t.onChange);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("ready", t.onReady), e.off("Panzoom.startAnimation", t.onChange), e.off("Panzoom.endAnimation", t.onSettle), 
                e.off("Panzoom.touchMove", t.onChange), t.stop();
            }
        }
        Object.defineProperty(It, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                autoStart: !0,
                pauseOnHover: !0,
                progressParentEl: null,
                showProgress: !0,
                timeout: 3e3
            }
        });
        class Dt extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "ref", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            onPrepare(t) {
                const e = t.carousel;
                if (!e) return;
                const i = t.container;
                i && (e.options.Autoplay = u({
                    autoStart: !1
                }, this.option("Autoplay") || {}, {
                    pauseOnHover: !1,
                    timeout: this.option("timeout"),
                    progressParentEl: () => this.option("progressParentEl") || null,
                    on: {
                        start: () => {
                            t.emit("startSlideshow");
                        },
                        set: e => {
                            var n;
                            i.classList.add("has-slideshow"), (null === (n = t.getSlide()) || void 0 === n ? void 0 : n.state) !== lt.Ready && e.pause();
                        },
                        stop: () => {
                            i.classList.remove("has-slideshow"), t.isCompact || t.endIdle(), t.emit("endSlideshow");
                        },
                        resume: (e, i) => {
                            var n, s, o;
                            !i || !i.cancelable || (null === (n = t.getSlide()) || void 0 === n ? void 0 : n.state) === lt.Ready && (null === (o = null === (s = t.carousel) || void 0 === s ? void 0 : s.panzoom) || void 0 === o ? void 0 : o.isResting) || i.preventDefault();
                        }
                    }
                }), e.attachPlugins({
                    Autoplay: It
                }), this.ref = e.plugins.Autoplay);
            }
            onReady(t) {
                const e = t.carousel, i = this.ref;
                i && e && this.option("playOnStart") && (e.isInfinite || e.page < e.pages.length - 1) && i.start();
            }
            onDone(t, e) {
                const i = this.ref, n = t.carousel;
                if (!i || !n) return;
                const s = e.panzoom;
                s && s.on("startAnimation", (() => {
                    t.isCurrentSlide(e) && i.stop();
                })), t.isCurrentSlide(e) && i.resume();
            }
            onKeydown(t, e) {
                var i;
                const n = this.ref;
                n && e === this.option("key") && "BUTTON" !== (null === (i = document.activeElement) || void 0 === i ? void 0 : i.nodeName) && n.toggle();
            }
            attach() {
                const t = this, e = t.instance;
                e.on("Carousel.init", t.onPrepare), e.on("Carousel.ready", t.onReady), e.on("done", t.onDone), 
                e.on("keydown", t.onKeydown);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("Carousel.init", t.onPrepare), e.off("Carousel.ready", t.onReady), e.off("done", t.onDone), 
                e.off("keydown", t.onKeydown);
            }
        }
        Object.defineProperty(Dt, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                key: " ",
                playOnStart: !1,
                progressParentEl: t => {
                    var e;
                    return (null === (e = t.instance.container) || void 0 === e ? void 0 : e.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]")) || t.instance.container;
                },
                timeout: 3e3
            }
        });
        const Ft = {
            classes: {
                container: "f-thumbs f-carousel__thumbs",
                viewport: "f-thumbs__viewport",
                track: "f-thumbs__track",
                slide: "f-thumbs__slide",
                isResting: "is-resting",
                isSelected: "is-selected",
                isLoading: "is-loading",
                hasThumbs: "has-thumbs"
            },
            minCount: 2,
            parentEl: null,
            thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
            type: "modern"
        };
        var jt;
        !function(t) {
            t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Hidden = 2] = "Hidden";
        }(jt || (jt = {}));
        const Bt = "isResting", Ht = "thumbWidth", Nt = "thumbHeight", _t = "thumbClipWidth";
        let $t = class extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "type", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "modern"
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "track", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "carousel", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "thumbWidth", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "thumbClipWidth", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "thumbHeight", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "thumbGap", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "thumbExtraGap", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: jt.Init
                });
            }
            get isModern() {
                return "modern" === this.type;
            }
            onInitSlide(t, e) {
                const i = e.el ? e.el.dataset : void 0;
                i && (e.thumbSrc = i.thumbSrc || e.thumbSrc || "", e[_t] = parseFloat(i[_t] || "") || e[_t] || 0, 
                e[Nt] = parseFloat(i.thumbHeight || "") || e[Nt] || 0), this.addSlide(e);
            }
            onInitSlides() {
                this.build();
            }
            onChange() {
                var t;
                if (!this.isModern) return;
                const e = this.container, i = this.instance, n = i.panzoom, s = this.carousel, a = s ? s.panzoom : null, r = i.page;
                if (n && s && a) {
                    if (n.isDragging) {
                        S(e, this.cn(Bt));
                        let n = (null === (t = s.pages[r]) || void 0 === t ? void 0 : t.pos) || 0;
                        n += i.getProgress(r) * (this[_t] + this.thumbGap);
                        let o = a.getBounds();
                        -1 * n > o.x.min && -1 * n < o.x.max && a.panTo({
                            x: -1 * n,
                            friction: .12
                        });
                    } else o(e, this.cn(Bt), n.isResting);
                    this.shiftModern();
                }
            }
            onRefresh() {
                this.updateProps();
                for (const t of this.instance.slides || []) this.resizeModernSlide(t);
                this.shiftModern();
            }
            isDisabled() {
                const t = this.option("minCount") || 0;
                if (t) {
                    const e = this.instance;
                    let i = 0;
                    for (const t of e.slides || []) t.thumbSrc && i++;
                    if (i < t) return !0;
                }
                const e = this.option("type");
                return [ "modern", "classic" ].indexOf(e) < 0;
            }
            getThumb(t) {
                const e = this.option("thumbTpl") || "";
                return {
                    html: this.instance.localize(e, [ [ "%i", t.index ], [ "%d", t.index + 1 ], [ "%s", t.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ] ])
                };
            }
            addSlide(t) {
                const e = this.carousel;
                e && e.addSlide(t.index, this.getThumb(t));
            }
            getSlides() {
                const t = [];
                for (const e of this.instance.slides || []) t.push(this.getThumb(e));
                return t;
            }
            resizeModernSlide(t) {
                this.isModern && (t[Ht] = t[_t] && t[Nt] ? Math.round(this[Nt] * (t[_t] / t[Nt])) : this[Ht]);
            }
            updateProps() {
                const t = this.container;
                if (!t) return;
                const e = e => parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-" + e)) || 0;
                this.thumbGap = e("gap"), this.thumbExtraGap = e("extra-gap"), this[Ht] = e("width") || 40, 
                this[_t] = e("clip-width") || 40, this[Nt] = e("height") || 40;
            }
            build() {
                const t = this;
                if (t.state !== jt.Init) return;
                if (t.isDisabled()) return void t.emit("disabled");
                const e = t.instance, i = e.container, n = t.getSlides(), s = t.option("type");
                t.type = s;
                const o = t.option("parentEl"), a = t.cn("container"), r = t.cn("track");
                let l = null == o ? void 0 : o.querySelector("." + a);
                l || (l = document.createElement("div"), P(l, a), o ? o.appendChild(l) : i.after(l)), 
                P(l, `is-${s}`), P(i, t.cn("hasThumbs")), t.container = l, t.updateProps();
                let c = l.querySelector("." + r);
                c || (c = document.createElement("div"), P(c, t.cn("track")), l.appendChild(c)), 
                t.track = c;
                const h = u({}, {
                    track: c,
                    infinite: !1,
                    center: !0,
                    fill: "classic" === s,
                    dragFree: !0,
                    slidesPerPage: 1,
                    transition: !1,
                    preload: .25,
                    friction: .12,
                    Panzoom: {
                        maxVelocity: 0
                    },
                    Dots: !1,
                    Navigation: !1,
                    classes: {
                        container: "f-thumbs",
                        viewport: "f-thumbs__viewport",
                        track: "f-thumbs__track",
                        slide: "f-thumbs__slide"
                    }
                }, t.option("Carousel") || {}, {
                    Sync: {
                        target: e
                    },
                    slides: n
                }), d = new e.constructor(l, h);
                d.on("createSlide", ((e, i) => {
                    t.setProps(i.index), t.emit("createSlide", i, i.el);
                })), d.on("ready", (() => {
                    t.shiftModern(), t.emit("ready");
                })), d.on("refresh", (() => {
                    t.shiftModern();
                })), d.on("Panzoom.click", ((e, i, n) => {
                    t.onClick(n);
                })), t.carousel = d, t.state = jt.Ready;
            }
            onClick(t) {
                t.preventDefault(), t.stopPropagation();
                const e = this.instance, {pages: i, page: n} = e, s = t => {
                    if (t) {
                        const e = t.closest("[data-carousel-index]");
                        if (e) return [ parseInt(e.dataset.carouselIndex || "", 10) || 0, e ];
                    }
                    return [ -1, void 0 ];
                }, o = (t, e) => {
                    const i = document.elementFromPoint(t, e);
                    return i ? s(i) : [ -1, void 0 ];
                };
                let [a, r] = s(t.target);
                if (a > -1) return;
                const l = this[_t], c = t.clientX, h = t.clientY;
                let [d, u] = o(c - l, h), [p, f] = o(c + l, h);
                u && f ? (a = Math.abs(c - u.getBoundingClientRect().right) < Math.abs(c - f.getBoundingClientRect().left) ? d : p, 
                a === n && (a = a === d ? p : d)) : u ? a = d : f && (a = p), a > -1 && i[a] && e.slideTo(a);
            }
            getShift(t) {
                var e;
                const i = this, {instance: n} = i, s = i.carousel;
                if (!n || !s) return 0;
                const o = i[Ht], a = i[_t], r = i.thumbGap, l = i.thumbExtraGap;
                if (!(null === (e = s.slides[t]) || void 0 === e ? void 0 : e.el)) return 0;
                const c = .5 * (o - a), h = n.pages.length - 1;
                let d = n.getProgress(0), u = n.getProgress(h), p = n.getProgress(t, !1, !0), f = 0, g = c + l + r;
                const m = d < 0 && d > -1, v = u > 0 && u < 1;
                return 0 === t ? (f = g * Math.abs(d), v && 1 === d && (f -= g * Math.abs(u))) : t === h ? (f = g * Math.abs(u) * -1, 
                m && -1 === u && (f += g * Math.abs(d))) : m || v ? (f = -1 * g, f += g * Math.abs(d), 
                f += g * (1 - Math.abs(u))) : f = g * p, f;
            }
            setProps(e) {
                var i;
                const n = this;
                if (!n.isModern) return;
                const {instance: s} = n, o = n.carousel;
                if (s && o) {
                    const a = null === (i = o.slides[e]) || void 0 === i ? void 0 : i.el;
                    if (a && a.childNodes.length) {
                        let i = t(1 - Math.abs(s.getProgress(e))), o = t(n.getShift(e));
                        a.style.setProperty("--progress", i ? i + "" : ""), a.style.setProperty("--shift", o + "");
                    }
                }
            }
            shiftModern() {
                const t = this;
                if (!t.isModern) return;
                const {instance: e, track: i} = t, n = e.panzoom, s = t.carousel;
                if (!(e && i && n && s)) return;
                if (n.state === m.Init || n.state === m.Destroy) return;
                for (const i of e.slides) t.setProps(i.index);
                let o = (t[_t] + t.thumbGap) * (s.slides.length || 0);
                i.style.setProperty("--width", o + "");
            }
            cleanup() {
                const t = this;
                t.carousel && t.carousel.destroy(), t.carousel = null, t.container && t.container.remove(), 
                t.container = null, t.track && t.track.remove(), t.track = null, t.state = jt.Init, 
                S(t.instance.container, t.cn("hasThumbs"));
            }
            attach() {
                const t = this, e = t.instance;
                e.on("initSlide", t.onInitSlide), e.state === B.Init ? e.on("initSlides", t.onInitSlides) : t.onInitSlides(), 
                e.on([ "change", "Panzoom.afterTransform" ], t.onChange), e.on("Panzoom.refresh", t.onRefresh);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("initSlide", t.onInitSlide), e.off("initSlides", t.onInitSlides), e.off([ "change", "Panzoom.afterTransform" ], t.onChange), 
                e.off("Panzoom.refresh", t.onRefresh), t.cleanup();
            }
        };
        Object.defineProperty($t, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ft
        });
        const Wt = Object.assign(Object.assign({}, Ft), {
            key: "t",
            showOnStart: !0,
            parentEl: null
        }), Xt = "is-masked", qt = "aria-hidden";
        class Yt extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "ref", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "hidden", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                });
            }
            get isEnabled() {
                const t = this.ref;
                return t && !t.isDisabled();
            }
            get isHidden() {
                return this.hidden;
            }
            onClick(t, e) {
                e.stopPropagation();
            }
            onCreateSlide(t, e) {
                var i, n, s;
                const o = (null === (s = null === (n = null === (i = this.instance) || void 0 === i ? void 0 : i.carousel) || void 0 === n ? void 0 : n.slides[e.index]) || void 0 === s ? void 0 : s.type) || "", a = e.el;
                if (a && o) {
                    let t = `for-${o}`;
                    [ "video", "youtube", "vimeo", "html5video" ].includes(o) && (t += " for-video"), 
                    P(a, t);
                }
            }
            onInit() {
                var t;
                const e = this, i = e.instance, n = i.carousel;
                if (e.ref || !n) return;
                const s = e.option("parentEl") || i.footer || i.container;
                if (!s) return;
                const o = u({}, e.options, {
                    parentEl: s,
                    classes: {
                        container: "f-thumbs fancybox__thumbs"
                    },
                    Carousel: {
                        Sync: {
                            friction: i.option("Carousel.friction") || 0
                        }
                    },
                    on: {
                        ready: t => {
                            const i = t.container;
                            i && this.hidden && (e.refresh(), i.style.transition = "none", e.hide(), i.offsetHeight, 
                            queueMicrotask((() => {
                                i.style.transition = "", e.show();
                            })));
                        }
                    }
                });
                o.Carousel = o.Carousel || {}, o.Carousel.on = u((null === (t = e.options.Carousel) || void 0 === t ? void 0 : t.on) || {}, {
                    click: this.onClick,
                    createSlide: this.onCreateSlide
                }), n.options.Thumbs = o, n.attachPlugins({
                    Thumbs: $t
                }), e.ref = n.plugins.Thumbs, e.option("showOnStart") || (e.ref.state = jt.Hidden, 
                e.hidden = !0);
            }
            onResize() {
                var t;
                const e = null === (t = this.ref) || void 0 === t ? void 0 : t.container;
                e && (e.style.maxHeight = "");
            }
            onKeydown(t, e) {
                const i = this.option("key");
                i && i === e && this.toggle();
            }
            toggle() {
                const t = this.ref;
                if (t && !t.isDisabled()) return t.state === jt.Hidden ? (t.state = jt.Init, void t.build()) : void (this.hidden ? this.show() : this.hide());
            }
            show() {
                const t = this.ref;
                if (!t || t.isDisabled()) return;
                const e = t.container;
                e && (this.refresh(), e.offsetHeight, e.removeAttribute(qt), e.classList.remove(Xt), 
                this.hidden = !1);
            }
            hide() {
                const t = this.ref, e = t && t.container;
                e && (this.refresh(), e.offsetHeight, e.classList.add(Xt), e.setAttribute(qt, "true")), 
                this.hidden = !0;
            }
            refresh() {
                const t = this.ref;
                if (!t || !t.state) return;
                const e = t.container, i = (null == e ? void 0 : e.firstChild) || null;
                e && i && i.childNodes.length && (e.style.maxHeight = `${i.getBoundingClientRect().height}px`);
            }
            attach() {
                const t = this, e = t.instance;
                e.state === rt.Init ? e.on("Carousel.init", t.onInit) : t.onInit(), e.on("resize", t.onResize), 
                e.on("keydown", t.onKeydown);
            }
            detach() {
                var t;
                const e = this, i = e.instance;
                i.off("Carousel.init", e.onInit), i.off("resize", e.onResize), i.off("keydown", e.onKeydown), 
                null === (t = i.carousel) || void 0 === t || t.detachPlugins([ "Thumbs" ]), e.ref = null;
            }
        }
        Object.defineProperty(Yt, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wt
        });
        const Vt = {
            panLeft: {
                icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
                change: {
                    panX: -100
                }
            },
            panRight: {
                icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
                change: {
                    panX: 100
                }
            },
            panUp: {
                icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
                change: {
                    panY: -100
                }
            },
            panDown: {
                icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
                change: {
                    panY: 100
                }
            },
            zoomIn: {
                icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
                action: "zoomIn"
            },
            zoomOut: {
                icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
                action: "zoomOut"
            },
            toggle1to1: {
                icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
                action: "toggleZoom"
            },
            toggleZoom: {
                icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
                action: "toggleZoom"
            },
            iterateZoom: {
                icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
                action: "iterateZoom"
            },
            rotateCCW: {
                icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
                action: "rotateCCW"
            },
            rotateCW: {
                icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
                action: "rotateCW"
            },
            flipX: {
                icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
                action: "flipX"
            },
            flipY: {
                icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
                action: "flipY"
            },
            fitX: {
                icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
                action: "fitX"
            },
            fitY: {
                icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
                action: "fitY"
            },
            reset: {
                icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
                action: "reset"
            },
            toggleFS: {
                icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
                action: "toggleFS"
            }
        };
        var Zt;
        !function(t) {
            t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Disabled = 2] = "Disabled";
        }(Zt || (Zt = {}));
        const Ut = {
            absolute: "auto",
            display: {
                left: [ "infobar" ],
                middle: [],
                right: [ "iterateZoom", "slideshow", "fullscreen", "thumbs", "close" ]
            },
            enabled: "auto",
            items: {
                infobar: {
                    tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>'
                },
                download: {
                    tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>'
                },
                prev: {
                    tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>'
                },
                next: {
                    tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>'
                },
                slideshow: {
                    tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'
                },
                fullscreen: {
                    tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'
                },
                thumbs: {
                    tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>'
                },
                close: {
                    tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>'
                }
            },
            parentEl: null
        }, Gt = {
            tabindex: "-1",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg"
        }, Kt = "has-toolbar", Jt = "fancybox__toolbar";
        class Qt extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: Zt.Init
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            onReady(t) {
                var e;
                if (!t.carousel) return;
                let i = this.option("display"), n = this.option("absolute"), s = this.option("enabled");
                if ("auto" === s) {
                    const t = this.instance.carousel;
                    let e = 0;
                    if (t) for (const i of t.slides) (i.panzoom || "image" === i.type) && e++;
                    e || (s = !1);
                }
                s || (i = void 0);
                let o = 0;
                const a = {
                    left: [],
                    middle: [],
                    right: []
                };
                if (i) for (const t of [ "left", "middle", "right" ]) for (const n of i[t]) {
                    const i = this.createEl(n);
                    i && (null === (e = a[t]) || void 0 === e || e.push(i), o++);
                }
                let r = null;
                if (o && (r = this.createContainer()), r) {
                    for (const [t, e] of Object.entries(a)) {
                        const i = document.createElement("div");
                        P(i, Jt + "__column is-" + t);
                        for (const t of e) i.appendChild(t);
                        "auto" !== n || "middle" !== t || e.length || (n = !0), r.appendChild(i);
                    }
                    !0 === n && P(r, "is-absolute"), this.state = Zt.Ready, this.onRefresh();
                } else this.state = Zt.Disabled;
            }
            onClick(t) {
                var e, i;
                const n = this.instance, s = n.getSlide(), o = null == s ? void 0 : s.panzoom, a = t.target, r = a && E(a) ? a.dataset : null;
                if (!r) return;
                if (void 0 !== r.fancyboxToggleThumbs) return t.preventDefault(), t.stopPropagation(), 
                void (null === (e = n.plugins.Thumbs) || void 0 === e || e.toggle());
                if (void 0 !== r.fancyboxToggleFullscreen) return t.preventDefault(), t.stopPropagation(), 
                void this.instance.toggleFullscreen();
                if (void 0 !== r.fancyboxToggleSlideshow) {
                    t.preventDefault(), t.stopPropagation();
                    const e = null === (i = n.carousel) || void 0 === i ? void 0 : i.plugins.Autoplay;
                    let s = e.isActive;
                    return o && "mousemove" === o.panMode && !s && o.reset(), void (s ? e.stop() : e.start());
                }
                const l = r.panzoomAction, c = r.panzoomChange;
                if ((c || l) && (t.preventDefault(), t.stopPropagation()), c) {
                    let t = {};
                    try {
                        t = JSON.parse(c);
                    } catch (t) {}
                    o && o.applyChange(t);
                } else l && o && o[l] && o[l]();
            }
            onChange() {
                this.onRefresh();
            }
            onRefresh() {
                if (this.instance.isClosing()) return;
                const t = this.container;
                if (!t) return;
                const e = this.instance.getSlide();
                if (!e || e.state !== lt.Ready) return;
                const i = e && !e.error && e.panzoom;
                for (const e of t.querySelectorAll("[data-panzoom-action]")) i ? (e.removeAttribute("disabled"), 
                e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
                let n = i && i.canZoomIn(), s = i && i.canZoomOut();
                for (const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]')) n ? (e.removeAttribute("disabled"), 
                e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
                for (const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]')) s ? (e.removeAttribute("disabled"), 
                e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
                for (const e of t.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
                    s || n ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), 
                    e.setAttribute("tabindex", "-1"));
                    const t = e.querySelector("g");
                    t && (t.style.display = n ? "" : "none");
                }
            }
            onDone(t, e) {
                var i;
                null === (i = e.panzoom) || void 0 === i || i.on("afterTransform", (() => {
                    this.instance.isCurrentSlide(e) && this.onRefresh();
                })), this.instance.isCurrentSlide(e) && this.onRefresh();
            }
            createContainer() {
                const t = this.instance.container;
                if (!t) return null;
                const e = this.option("parentEl") || t;
                let i = e.querySelector("." + Jt);
                return i || (i = document.createElement("div"), P(i, Jt), e.prepend(i)), i.addEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !0
                }), t && P(t, Kt), this.container = i, i;
            }
            createEl(t) {
                const e = this.instance, i = e.carousel;
                if (!i) return null;
                if ("toggleFS" === t) return null;
                if ("fullscreen" === t && !ot()) return null;
                let s = null;
                const o = i.slides.length || 0;
                let a = 0, r = 0;
                for (const t of i.slides) (t.panzoom || "image" === t.type) && a++, ("image" === t.type || t.downloadSrc) && r++;
                if (o < 2 && [ "infobar", "prev", "next" ].includes(t)) return s;
                if (void 0 !== Vt[t] && !a) return null;
                if ("download" === t && !r) return null;
                if ("thumbs" === t) {
                    const t = e.plugins.Thumbs;
                    if (!t || !t.isEnabled) return null;
                }
                if ("slideshow" === t) if (!i.plugins.Autoplay || o < 2) return null;
                if (void 0 !== Vt[t]) {
                    const e = Vt[t];
                    s = document.createElement("button"), s.setAttribute("title", this.instance.localize(`{{${t.toUpperCase()}}}`)), 
                    P(s, "f-button"), e.action && (s.dataset.panzoomAction = e.action), e.change && (s.dataset.panzoomChange = JSON.stringify(e.change)), 
                    s.appendChild(n(this.instance.localize(e.icon)));
                } else {
                    const e = (this.option("items") || [])[t];
                    e && (s = n(this.instance.localize(e.tpl)), "function" == typeof e.click && s.addEventListener("click", (t => {
                        t.preventDefault(), t.stopPropagation(), "function" == typeof e.click && e.click.call(this, this, t);
                    })));
                }
                const l = null == s ? void 0 : s.querySelector("svg");
                if (l) for (const [t, e] of Object.entries(Gt)) l.getAttribute(t) || l.setAttribute(t, String(e));
                return s;
            }
            removeContainer() {
                const t = this.container;
                t && t.remove(), this.container = null, this.state = Zt.Disabled;
                const e = this.instance.container;
                e && S(e, Kt);
            }
            attach() {
                const t = this, e = t.instance;
                e.on("Carousel.initSlides", t.onReady), e.on("done", t.onDone), e.on([ "reveal", "Carousel.change" ], t.onChange), 
                t.onReady(t.instance);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("Carousel.initSlides", t.onReady), e.off("done", t.onDone), e.off([ "reveal", "Carousel.change" ], t.onChange), 
                t.removeContainer();
            }
        }
        Object.defineProperty(Qt, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ut
        });
        const te = {
            Hash: class extends _ {
                onReady() {
                    ht = !1;
                }
                onChange(t) {
                    ut && clearTimeout(ut);
                    const {hash: e} = pt(), {hash: i} = ft(), n = t.isOpeningSlide(t.getSlide());
                    n && (ct = i === e ? "" : i), e && e !== i && (ut = setTimeout((() => {
                        try {
                            if (t.state === rt.Ready) {
                                let t = "replaceState";
                                n && !dt && (t = "pushState", dt = !0), window.history[t]({}, document.title, window.location.pathname + window.location.search + e);
                            }
                        } catch (t) {}
                    }), 300));
                }
                onClose(t) {
                    if (ut && clearTimeout(ut), !ht && dt) return dt = !1, ht = !1, void window.history.back();
                    if (!ht) try {
                        window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (ct || ""));
                    } catch (t) {}
                }
                attach() {
                    const t = this.instance;
                    t.on("ready", this.onReady), t.on([ "Carousel.ready", "Carousel.change" ], this.onChange), 
                    t.on("close", this.onClose);
                }
                detach() {
                    const t = this.instance;
                    t.off("ready", this.onReady), t.off([ "Carousel.ready", "Carousel.change" ], this.onChange), 
                    t.off("close", this.onClose);
                }
                static parseURL() {
                    return ft();
                }
                static startFromUrl() {
                    gt();
                }
                static destroy() {
                    window.removeEventListener("hashchange", vt, !1);
                }
            },
            Html: Lt,
            Images: wt,
            Slideshow: Dt,
            Thumbs: Yt,
            Toolbar: Qt
        }, ee = "with-fancybox", ie = "hide-scrollbar", ne = "--fancybox-scrollbar-compensate", se = "--fancybox-body-margin", oe = "aria-hidden", ae = "is-using-tab", re = "is-animated", le = "is-compact", ce = "is-loading", he = "is-opening", de = "has-caption", ue = "disabled", pe = "tabindex", fe = "download", ge = "href", me = "src", ve = t => "string" == typeof t, be = function() {
            var t = window.getSelection();
            return !!t && "Range" === t.type;
        };
        let ye, we = null, xe = null, Ee = 0, Se = 0, Pe = 0, Ce = 0;
        const Te = new Map;
        let Me = 0;
        class Oe extends g {
            get isIdle() {
                return this.idle;
            }
            get isCompact() {
                return this.option("compact");
            }
            constructor(t = [], e = {}, i = {}) {
                super(e), Object.defineProperty(this, "userSlides", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "userPlugins", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }), Object.defineProperty(this, "idle", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "idleTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "clickTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "pwt", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "ignoreFocusChange", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "startedFs", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: rt.Init
                }), Object.defineProperty(this, "id", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "caption", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "footer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "carousel", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "lastFocus", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "prevMouseMoveEvent", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), ye || (ye = ot()), this.id = e.id || ++Me, Te.set(this.id, this), this.userSlides = t, 
                this.userPlugins = i, queueMicrotask((() => {
                    this.init();
                }));
            }
            init() {
                if (this.state === rt.Destroy) return;
                this.state = rt.Init, this.attachPlugins(Object.assign(Object.assign({}, Oe.Plugins), this.userPlugins)), 
                this.emit("init"), this.emit("attachPlugins"), !0 === this.option("hideScrollbar") && (() => {
                    if (!et) return;
                    const t = document, e = t.body, i = t.documentElement;
                    if (e.classList.contains(ie)) return;
                    let n = window.innerWidth - i.getBoundingClientRect().width;
                    const s = parseFloat(window.getComputedStyle(e).marginRight);
                    n < 0 && (n = 0), i.style.setProperty(ne, `${n}px`), s && e.style.setProperty(se, `${s}px`), 
                    e.classList.add(ie);
                })(), this.initLayout(), this.scale();
                const t = () => {
                    this.initCarousel(this.userSlides), this.state = rt.Ready, this.attachEvents(), 
                    this.emit("ready"), setTimeout((() => {
                        this.container && this.container.setAttribute(oe, "false");
                    }), 16);
                };
                this.option("Fullscreen.autoStart") && ye && !ye.isFullscreen() ? ye.request().then((() => {
                    this.startedFs = !0, t();
                })).catch((() => t())) : t();
            }
            initLayout() {
                var t, e;
                const i = this.option("parentEl") || document.body, s = n(this.localize(this.option("tpl.main") || ""));
                if (s) {
                    if (s.setAttribute("id", `fancybox-${this.id}`), s.setAttribute("aria-label", this.localize("{{MODAL}}")), 
                    s.classList.toggle(le, this.isCompact), P(s, this.option("mainClass") || ""), P(s, he), 
                    this.container = s, this.footer = s.querySelector(".fancybox__footer"), i.appendChild(s), 
                    P(document.documentElement, ee), we && xe || (we = document.createElement("span"), 
                    P(we, "fancybox-focus-guard"), we.setAttribute(pe, "0"), we.setAttribute(oe, "true"), 
                    we.setAttribute("aria-label", "Focus guard"), xe = we.cloneNode(), null === (t = s.parentElement) || void 0 === t || t.insertBefore(we, s), 
                    null === (e = s.parentElement) || void 0 === e || e.append(xe)), s.addEventListener("mousedown", (t => {
                        Ee = t.pageX, Se = t.pageY, S(s, ae);
                    })), this.option("closeExisting")) for (const t of Te.values()) t.id !== this.id && t.close(); else this.option("animated") && (P(s, re), 
                    setTimeout((() => {
                        this.isClosing() || S(s, re);
                    }), 350));
                    this.emit("initLayout");
                }
            }
            initCarousel(t) {
                const i = this.container;
                if (!i) return;
                const n = i.querySelector(".fancybox__carousel");
                if (!n) return;
                const s = this.carousel = new Q(n, u({}, {
                    slides: t,
                    transition: "fade",
                    Panzoom: {
                        lockAxis: this.option("dragToClose") ? "xy" : "x",
                        infinite: !!this.option("dragToClose") && "y"
                    },
                    Dots: !1,
                    Navigation: {
                        classes: {
                            container: "fancybox__nav",
                            button: "f-button",
                            isNext: "is-next",
                            isPrev: "is-prev"
                        }
                    },
                    initialPage: this.option("startIndex"),
                    l10n: this.option("l10n")
                }, this.option("Carousel") || {}));
                s.on("*", ((t, e, ...i) => {
                    this.emit(`Carousel.${e}`, t, ...i);
                })), s.on([ "ready", "change" ], (() => {
                    this.manageCaption();
                })), this.on("Carousel.removeSlide", ((t, e, i) => {
                    this.clearContent(i), i.state = void 0;
                })), s.on("Panzoom.touchStart", (() => {
                    var t, e;
                    this.isCompact || this.endIdle(), (null === (t = document.activeElement) || void 0 === t ? void 0 : t.closest(".f-thumbs")) && (null === (e = this.container) || void 0 === e || e.focus());
                })), s.on("settle", (() => {
                    this.idleTimer || this.isCompact || !this.option("idle") || this.setIdle(), this.option("autoFocus") && !this.isClosing && this.checkFocus();
                })), this.option("dragToClose") && (s.on("Panzoom.afterTransform", ((t, i) => {
                    const n = this.getSlide();
                    if (n && e(n.el)) return;
                    const s = this.container;
                    if (s) {
                        const t = Math.abs(i.current.f), e = t < 1 ? "" : Math.max(.5, Math.min(1, 1 - t / i.contentRect.fitHeight * 1.5));
                        s.style.setProperty("--fancybox-ts", e ? "0s" : ""), s.style.setProperty("--fancybox-opacity", e + "");
                    }
                })), s.on("Panzoom.touchEnd", ((t, i, n) => {
                    var s;
                    const o = this.getSlide();
                    if (o && e(o.el)) return;
                    if (i.isMobile && document.activeElement && -1 !== [ "TEXTAREA", "INPUT" ].indexOf(null === (s = document.activeElement) || void 0 === s ? void 0 : s.nodeName)) return;
                    const a = Math.abs(i.dragOffset.y);
                    "y" === i.lockedAxis && (a >= 200 || a >= 50 && i.dragOffset.time < 300) && (n && n.cancelable && n.preventDefault(), 
                    this.close(n, "f-throwOut" + (i.current.f < 0 ? "Up" : "Down")));
                }))), s.on("change", (t => {
                    var e;
                    let i = null === (e = this.getSlide()) || void 0 === e ? void 0 : e.triggerEl;
                    if (i) {
                        const e = new CustomEvent("slideTo", {
                            bubbles: !0,
                            cancelable: !0,
                            detail: t.page
                        });
                        i.dispatchEvent(e);
                    }
                })), s.on([ "refresh", "change" ], (t => {
                    const e = this.container;
                    if (!e) return;
                    for (const i of e.querySelectorAll("[data-fancybox-current-index]")) i.innerHTML = t.page + 1;
                    for (const i of e.querySelectorAll("[data-fancybox-count]")) i.innerHTML = t.pages.length;
                    if (!t.isInfinite) {
                        for (const i of e.querySelectorAll("[data-fancybox-next]")) t.page < t.pages.length - 1 ? (i.removeAttribute(ue), 
                        i.removeAttribute(pe)) : (i.setAttribute(ue, ""), i.setAttribute(pe, "-1"));
                        for (const i of e.querySelectorAll("[data-fancybox-prev]")) t.page > 0 ? (i.removeAttribute(ue), 
                        i.removeAttribute(pe)) : (i.setAttribute(ue, ""), i.setAttribute(pe, "-1"));
                    }
                    const i = this.getSlide();
                    if (!i) return;
                    let n = i.downloadSrc || "";
                    n || "image" !== i.type || i.error || !ve(i[me]) || (n = i[me]);
                    for (const t of e.querySelectorAll("[data-fancybox-download]")) {
                        const e = i.downloadFilename;
                        n ? (t.removeAttribute(ue), t.removeAttribute(pe), t.setAttribute(ge, n), t.setAttribute(fe, e || n), 
                        t.setAttribute("target", "_blank")) : (t.setAttribute(ue, ""), t.setAttribute(pe, "-1"), 
                        t.removeAttribute(ge), t.removeAttribute(fe));
                    }
                })), this.emit("initCarousel");
            }
            attachEvents() {
                const t = this, e = t.container;
                if (!e) return;
                e.addEventListener("click", t.onClick, {
                    passive: !1,
                    capture: !1
                }), e.addEventListener("wheel", t.onWheel, {
                    passive: !1,
                    capture: !1
                }), document.addEventListener("keydown", t.onKeydown, {
                    passive: !1,
                    capture: !0
                }), document.addEventListener("visibilitychange", t.onVisibilityChange, !1), document.addEventListener("mousemove", t.onMousemove), 
                t.option("trapFocus") && document.addEventListener("focus", t.onFocus, !0), window.addEventListener("resize", t.onResize);
                const i = window.visualViewport;
                i && (i.addEventListener("scroll", t.onResize), i.addEventListener("resize", t.onResize));
            }
            detachEvents() {
                const t = this, e = t.container;
                if (!e) return;
                document.removeEventListener("keydown", t.onKeydown, {
                    passive: !1,
                    capture: !0
                }), e.removeEventListener("wheel", t.onWheel, {
                    passive: !1,
                    capture: !1
                }), e.removeEventListener("click", t.onClick, {
                    passive: !1,
                    capture: !1
                }), document.removeEventListener("mousemove", t.onMousemove), window.removeEventListener("resize", t.onResize);
                const i = window.visualViewport;
                i && (i.removeEventListener("resize", t.onResize), i.removeEventListener("scroll", t.onResize)), 
                document.removeEventListener("visibilitychange", t.onVisibilityChange, !1), document.removeEventListener("focus", t.onFocus, !0);
            }
            scale() {
                const t = this.container;
                if (!t) return;
                const e = window.visualViewport, i = Math.max(1, (null == e ? void 0 : e.scale) || 1);
                let n = "", s = "", o = "";
                if (e && i > 1) {
                    let t = `${e.offsetLeft}px`, a = `${e.offsetTop}px`;
                    n = e.width * i + "px", s = e.height * i + "px", o = `translate3d(${t}, ${a}, 0) scale(${1 / i})`;
                }
                t.style.transform = o, t.style.width = n, t.style.height = s;
            }
            onClick(t) {
                var e;
                const {container: i, isCompact: n} = this;
                if (!i || this.isClosing()) return;
                !n && this.option("idle") && this.resetIdle();
                const s = t.composedPath()[0];
                if (s.closest(".fancybox-spinner") || s.closest("[data-fancybox-close]")) return t.preventDefault(), 
                void this.close(t);
                if (s.closest("[data-fancybox-prev]")) return t.preventDefault(), void this.prev();
                if (s.closest("[data-fancybox-next]")) return t.preventDefault(), void this.next();
                if ("click" === t.type && 0 === t.detail) return;
                if (Math.abs(t.pageX - Ee) > 30 || Math.abs(t.pageY - Se) > 30) return;
                const o = document.activeElement;
                if (be() && o && i.contains(o)) return;
                if (n && "image" === (null === (e = this.getSlide()) || void 0 === e ? void 0 : e.type)) return void (this.clickTimer ? (clearTimeout(this.clickTimer), 
                this.clickTimer = null) : this.clickTimer = setTimeout((() => {
                    this.toggleIdle(), this.clickTimer = null;
                }), 350));
                if (this.emit("click", t), t.defaultPrevented) return;
                let a = !1;
                if (s.closest(".fancybox__content")) {
                    if (o) {
                        if (o.closest("[contenteditable]")) return;
                        s.matches(nt) || o.blur();
                    }
                    if (be()) return;
                    a = this.option("contentClick");
                } else s.closest(".fancybox__carousel") && !s.matches(nt) && (a = this.option("backdropClick"));
                "close" === a ? (t.preventDefault(), this.close(t)) : "next" === a ? (t.preventDefault(), 
                this.next()) : "prev" === a && (t.preventDefault(), this.prev());
            }
            onWheel(t) {
                const e = t.target;
                let n = this.option("wheel", t);
                e.closest(".fancybox__thumbs") && (n = "slide");
                const s = "slide" === n, o = [ -t.deltaX || 0, -t.deltaY || 0, -t.detail || 0 ].reduce((function(t, e) {
                    return Math.abs(e) > Math.abs(t) ? e : t;
                })), a = Math.max(-1, Math.min(1, o)), r = Date.now();
                this.pwt && r - this.pwt < 300 ? s && t.preventDefault() : (this.pwt = r, this.emit("wheel", t, a), 
                t.defaultPrevented || ("close" === n ? (t.preventDefault(), this.close(t)) : "slide" === n && (i(e) || (t.preventDefault(), 
                this[a > 0 ? "prev" : "next"]()))));
            }
            onScroll() {
                window.scrollTo(Pe, Ce);
            }
            onKeydown(t) {
                if (!this.isTopmost()) return;
                this.isCompact || !this.option("idle") || this.isClosing() || this.resetIdle();
                const e = t.key, i = this.option("keyboard");
                if (!i) return;
                const n = t.composedPath()[0], s = document.activeElement && document.activeElement.classList, o = s && s.contains("f-button") || n.dataset.carouselPage || n.dataset.carouselIndex;
                if ("Escape" !== e && !o && E(n)) if (n.isContentEditable || -1 !== [ "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO" ].indexOf(n.nodeName)) return;
                if ("Tab" === t.key ? P(this.container, ae) : S(this.container, ae), t.ctrlKey || t.altKey || t.shiftKey) return;
                this.emit("keydown", e, t);
                const a = i[e];
                a && "function" == typeof this[a] && (t.preventDefault(), this[a]());
            }
            onResize() {
                const t = this.container;
                if (!t) return;
                const e = this.isCompact;
                t.classList.toggle(le, e), this.manageCaption(this.getSlide()), this.isCompact ? this.clearIdle() : this.endIdle(), 
                this.scale(), this.emit("resize");
            }
            onFocus(t) {
                this.isTopmost() && this.checkFocus(t);
            }
            onMousemove(t) {
                this.prevMouseMoveEvent = t, !this.isCompact && this.option("idle") && this.resetIdle();
            }
            onVisibilityChange() {
                "visible" === document.visibilityState ? this.checkFocus() : this.endIdle();
            }
            manageCloseBtn(t) {
                const e = this.optionFor(t, "closeButton") || !1;
                if ("auto" === e) {
                    const t = this.plugins.Toolbar;
                    if (t && t.state === Zt.Ready) return;
                }
                if (!e) return;
                if (!t.contentEl || t.closeBtnEl) return;
                const i = this.option("tpl.closeButton");
                if (i) {
                    const e = n(this.localize(i));
                    t.closeBtnEl = t.contentEl.appendChild(e), t.el && P(t.el, "has-close-btn");
                }
            }
            manageCaption(t = void 0) {
                var e, i;
                const n = "fancybox__caption", s = this.container;
                if (!s) return;
                S(s, de);
                const o = this.isCompact || this.option("commonCaption"), a = !o;
                if (this.caption && this.stop(this.caption), a && this.caption && (this.caption.remove(), 
                this.caption = null), o && !this.caption) for (const t of (null === (e = this.carousel) || void 0 === e ? void 0 : e.slides) || []) t.captionEl && (t.captionEl.remove(), 
                t.captionEl = void 0, S(t.el, de), null === (i = t.el) || void 0 === i || i.removeAttribute("aria-labelledby"));
                if (t || (t = this.getSlide()), !t || o && !this.isCurrentSlide(t)) return;
                const r = t.el;
                let l = this.optionFor(t, "caption", "");
                if (!l) return void (o && this.caption && this.animate(this.caption, "f-fadeOut", (() => {
                    this.caption && (this.caption.innerHTML = "");
                })));
                let c = null;
                if (a) {
                    if (c = t.captionEl || null, r && !c) {
                        const e = n + `_${this.id}_${t.index}`;
                        c = document.createElement("div"), P(c, n), c.setAttribute("id", e), t.captionEl = r.appendChild(c), 
                        P(r, de), r.setAttribute("aria-labelledby", e);
                    }
                } else {
                    if (c = this.caption, c || (c = s.querySelector("." + n)), !c) {
                        c = document.createElement("div"), c.dataset.fancyboxCaption = "", P(c, n);
                        (this.footer || s).prepend(c);
                    }
                    P(s, de), this.caption = c;
                }
                c && (c.innerHTML = "", ve(l) || "number" == typeof l ? c.innerHTML = l + "" : l instanceof HTMLElement && c.appendChild(l));
            }
            checkFocus(t) {
                this.focus(t);
            }
            focus(t) {
                var e;
                if (this.ignoreFocusChange) return;
                const i = document.activeElement || null, n = (null == t ? void 0 : t.target) || null, s = this.container, o = null === (e = this.carousel) || void 0 === e ? void 0 : e.viewport;
                if (!s || !o) return;
                if (!t && i && s.contains(i)) return;
                const a = this.getSlide(), r = a && a.state === lt.Ready ? a.el : null;
                if (!r || r.contains(i) || s === i) return;
                t && t.cancelable && t.preventDefault(), this.ignoreFocusChange = !0;
                const l = Array.from(s.querySelectorAll(nt));
                let c = [], h = null;
                for (let t of l) {
                    const e = !t.offsetParent || !!t.closest('[aria-hidden="true"]'), i = r && r.contains(t), n = !o.contains(t);
                    if (t === s || (i || n) && !e) {
                        c.push(t);
                        const e = t.dataset.origTabindex;
                        void 0 !== e && e && (t.tabIndex = parseFloat(e)), t.removeAttribute("data-orig-tabindex"), 
                        !t.hasAttribute("autoFocus") && h || (h = t);
                    } else {
                        const e = void 0 === t.dataset.origTabindex ? t.getAttribute("tabindex") || "" : t.dataset.origTabindex;
                        e && (t.dataset.origTabindex = e), t.tabIndex = -1;
                    }
                }
                let d = null;
                t ? (!n || c.indexOf(n) < 0) && (d = h || s, c.length && (i === xe ? d = c[0] : this.lastFocus !== s && i !== we || (d = c[c.length - 1]))) : d = a && "image" === a.type ? s : h || s, 
                d && st(d), this.lastFocus = document.activeElement, this.ignoreFocusChange = !1;
            }
            next() {
                const t = this.carousel;
                t && t.pages.length > 1 && t.slideNext();
            }
            prev() {
                const t = this.carousel;
                t && t.pages.length > 1 && t.slidePrev();
            }
            jumpTo(...t) {
                this.carousel && this.carousel.slideTo(...t);
            }
            isTopmost() {
                var t;
                return (null === (t = Oe.getInstance()) || void 0 === t ? void 0 : t.id) == this.id;
            }
            animate(t = null, e = "", i) {
                if (!t || !e) return void (i && i());
                this.stop(t);
                const n = s => {
                    s.target === t && t.dataset.animationName && (t.removeEventListener("animationend", n), 
                    delete t.dataset.animationName, i && i(), S(t, e));
                };
                t.dataset.animationName = e, t.addEventListener("animationend", n), P(t, e);
            }
            stop(t) {
                t && t.dispatchEvent(new CustomEvent("animationend", {
                    bubbles: !1,
                    cancelable: !0,
                    currentTarget: t
                }));
            }
            setContent(t, e = "", i = !0) {
                if (this.isClosing()) return;
                const s = t.el;
                if (!s) return;
                let o = null;
                if (E(e) ? o = e : (o = n(e + ""), E(o) || (o = document.createElement("div"), o.innerHTML = e + "")), 
                [ "img", "picture", "iframe", "video", "audio" ].includes(o.nodeName.toLowerCase())) {
                    const t = document.createElement("div");
                    t.appendChild(o), o = t;
                }
                E(o) && t.filter && !t.error && (o = o.querySelector(t.filter)), o && E(o) ? (P(o, "fancybox__content"), 
                t.id && o.setAttribute("id", t.id), s.classList.add(`has-${t.error ? "error" : t.type || "unknown"}`), 
                s.prepend(o), "none" === o.style.display && (o.style.display = ""), "none" === getComputedStyle(o).getPropertyValue("display") && (o.style.display = t.display || this.option("defaultDisplay") || "flex"), 
                t.contentEl = o, i && this.revealContent(t), this.manageCloseBtn(t), this.manageCaption(t)) : this.setError(t, "{{ELEMENT_NOT_FOUND}}");
            }
            revealContent(t, e) {
                const i = t.el, n = t.contentEl;
                i && n && (this.emit("reveal", t), this.hideLoading(t), t.state = lt.Opening, (e = this.isOpeningSlide(t) ? void 0 === e ? this.optionFor(t, "showClass") : e : "f-fadeIn") ? this.animate(n, e, (() => {
                    this.done(t);
                })) : this.done(t));
            }
            done(t) {
                this.isClosing() || (t.state = lt.Ready, this.emit("done", t), P(t.el, "is-done"), 
                this.isCurrentSlide(t) && this.option("autoFocus") && queueMicrotask((() => {
                    var e;
                    null === (e = t.panzoom) || void 0 === e || e.updateControls(), this.option("autoFocus") && this.focus();
                })), this.isOpeningSlide(t) && (S(this.container, he), !this.isCompact && this.option("idle") && this.setIdle()));
            }
            isCurrentSlide(t) {
                const e = this.getSlide();
                return !(!t || !e) && e.index === t.index;
            }
            isOpeningSlide(t) {
                var e, i;
                return null === (null === (e = this.carousel) || void 0 === e ? void 0 : e.prevPage) && t && t.index === (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.index);
            }
            showLoading(t) {
                t.state = lt.Loading;
                const e = t.el;
                if (!e) return;
                P(e, ce), this.emit("loading", t), t.spinnerEl || setTimeout((() => {
                    if (!this.isClosing() && !t.spinnerEl && t.state === lt.Loading) {
                        let i = n(x);
                        P(i, "fancybox-spinner"), t.spinnerEl = i, e.prepend(i), this.animate(i, "f-fadeIn");
                    }
                }), 250);
            }
            hideLoading(t) {
                const e = t.el;
                if (!e) return;
                const i = t.spinnerEl;
                this.isClosing() ? null == i || i.remove() : (S(e, ce), i && this.animate(i, "f-fadeOut", (() => {
                    i.remove();
                })), t.state === lt.Loading && (this.emit("loaded", t), t.state = lt.Ready));
            }
            setError(t, e) {
                if (this.isClosing()) return;
                const i = new Event("error", {
                    bubbles: !0,
                    cancelable: !0
                });
                if (this.emit("error", i, t), i.defaultPrevented) return;
                t.error = e, this.hideLoading(t), this.clearContent(t);
                const n = document.createElement("div");
                n.classList.add("fancybox-error"), n.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), 
                this.setContent(t, n);
            }
            clearContent(t) {
                if (void 0 === t.state) return;
                this.emit("clearContent", t), t.contentEl && (t.contentEl.remove(), t.contentEl = void 0);
                const e = t.el;
                e && (S(e, "has-error"), S(e, "has-unknown"), S(e, `has-${t.type || "unknown"}`)), 
                t.closeBtnEl && t.closeBtnEl.remove(), t.closeBtnEl = void 0, t.captionEl && t.captionEl.remove(), 
                t.captionEl = void 0, t.spinnerEl && t.spinnerEl.remove(), t.spinnerEl = void 0;
            }
            getSlide() {
                var t;
                const e = this.carousel;
                return (null === (t = null == e ? void 0 : e.pages[null == e ? void 0 : e.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0;
            }
            close(t, e) {
                if (this.isClosing()) return;
                const i = new Event("shouldClose", {
                    bubbles: !0,
                    cancelable: !0
                });
                if (this.emit("shouldClose", i, t), i.defaultPrevented) return;
                t && t.cancelable && (t.preventDefault(), t.stopPropagation());
                const n = () => {
                    this.proceedClose(t, e);
                };
                this.startedFs && ye && ye.isFullscreen() ? Promise.resolve(ye.exit()).then((() => n())) : n();
            }
            clearIdle() {
                this.idleTimer && clearTimeout(this.idleTimer), this.idleTimer = null;
            }
            setIdle(t = !1) {
                const e = () => {
                    this.clearIdle(), this.idle = !0, P(this.container, "is-idle"), this.emit("setIdle");
                };
                if (this.clearIdle(), !this.isClosing()) if (t) e(); else {
                    const t = this.option("idle");
                    t && (this.idleTimer = setTimeout(e, t));
                }
            }
            endIdle() {
                this.clearIdle(), this.idle && !this.isClosing() && (this.idle = !1, S(this.container, "is-idle"), 
                this.emit("endIdle"));
            }
            resetIdle() {
                this.endIdle(), this.setIdle();
            }
            toggleIdle() {
                this.idle ? this.endIdle() : this.setIdle(!0);
            }
            toggleFullscreen() {
                ye && (ye.isFullscreen() ? ye.exit() : ye.request().then((() => {
                    this.startedFs = !0;
                })));
            }
            isClosing() {
                return [ rt.Closing, rt.CustomClosing, rt.Destroy ].includes(this.state);
            }
            proceedClose(t, e) {
                var i, n;
                this.state = rt.Closing, this.clearIdle(), this.detachEvents();
                const s = this.container, o = this.carousel, a = this.getSlide(), r = a && this.option("placeFocusBack") ? a.triggerEl || this.option("triggerEl") : null;
                if (r && (tt(r) ? st(r) : r.focus()), s && (S(s, he), P(s, "is-closing"), s.setAttribute(oe, "true"), 
                this.option("animated") && P(s, re), s.style.pointerEvents = "none"), o) {
                    o.clearTransitions(), null === (i = o.panzoom) || void 0 === i || i.destroy(), null === (n = o.plugins.Navigation) || void 0 === n || n.detach();
                    for (const t of o.slides) {
                        t.state = lt.Closing, this.hideLoading(t);
                        const e = t.contentEl;
                        e && this.stop(e);
                        const i = null == t ? void 0 : t.panzoom;
                        i && (i.stop(), i.detachEvents(), i.detachObserver()), this.isCurrentSlide(t) || o.emit("removeSlide", t);
                    }
                }
                Pe = window.scrollX, Ce = window.scrollY, window.addEventListener("scroll", this.onScroll), 
                this.emit("close", t), this.state !== rt.CustomClosing ? (void 0 === e && a && (e = this.optionFor(a, "hideClass")), 
                e && a ? (this.animate(a.contentEl, e, (() => {
                    o && o.emit("removeSlide", a);
                })), setTimeout((() => {
                    this.destroy();
                }), 500)) : this.destroy()) : setTimeout((() => {
                    this.destroy();
                }), 500);
            }
            destroy() {
                var t;
                if (this.state === rt.Destroy) return;
                window.removeEventListener("scroll", this.onScroll), this.state = rt.Destroy, null === (t = this.carousel) || void 0 === t || t.destroy();
                const e = this.container;
                e && e.remove(), Te.delete(this.id);
                const i = Oe.getInstance();
                i ? i.focus() : (we && (we.remove(), we = null), xe && (xe.remove(), xe = null), 
                S(document.documentElement, ee), (() => {
                    if (!et) return;
                    const t = document, e = t.body;
                    e.classList.remove(ie), e.style.setProperty(se, ""), t.documentElement.style.setProperty(ne, "");
                })(), this.emit("destroy"));
            }
            static bind(t, e, i) {
                if (!et) return;
                let n, s = "", o = {};
                if (void 0 === t ? n = document.body : ve(t) ? (n = document.body, s = t, "object" == typeof e && (o = e || {})) : (n = t, 
                ve(e) && (s = e), "object" == typeof i && (o = i || {})), !n || !E(n)) return;
                s = s || "[data-fancybox]";
                const a = Oe.openers.get(n) || new Map;
                a.set(s, o), Oe.openers.set(n, a), 1 === a.size && n.addEventListener("click", Oe.fromEvent);
            }
            static unbind(t, e) {
                let i, n = "";
                if (ve(t) ? (i = document.body, n = t) : (i = t, ve(e) && (n = e)), !i) return;
                const s = Oe.openers.get(i);
                s && n && s.delete(n), n && s || (Oe.openers.delete(i), i.removeEventListener("click", Oe.fromEvent));
            }
            static destroy() {
                let t;
                for (;t = Oe.getInstance(); ) t.destroy();
                for (const t of Oe.openers.keys()) t.removeEventListener("click", Oe.fromEvent);
                Oe.openers = new Map;
            }
            static fromEvent(t) {
                if (t.defaultPrevented) return;
                if (t.button && 0 !== t.button) return;
                if (t.ctrlKey || t.metaKey || t.shiftKey) return;
                let e = t.composedPath()[0];
                const i = e.closest("[data-fancybox-trigger]");
                if (i) {
                    const t = i.dataset.fancyboxTrigger || "", n = document.querySelectorAll(`[data-fancybox="${t}"]`), s = parseInt(i.dataset.fancyboxIndex || "", 10) || 0;
                    e = n[s] || e;
                }
                if (!(e && e instanceof Element)) return;
                let n, s, o, a;
                if ([ ...Oe.openers ].reverse().find((([t, i]) => !(!t.contains(e) || ![ ...i ].reverse().find((([i, r]) => {
                    let l = e.closest(i);
                    return !!l && (n = t, s = i, o = l, a = r, !0);
                }))))), !n || !s || !o) return;
                a = a || {}, t.preventDefault(), e = o;
                let r = [], l = u({}, at, a);
                l.event = t, l.triggerEl = e, l.delegate = i;
                const c = l.groupAll, h = l.groupAttr, d = h && e ? e.getAttribute(`${h}`) : "";
                if ((!e || d || c) && (r = [].slice.call(n.querySelectorAll(s))), e && !c && (r = d ? r.filter((t => t.getAttribute(`${h}`) === d)) : [ e ]), 
                !r.length) return;
                const p = Oe.getInstance();
                return p && p.options.triggerEl && r.indexOf(p.options.triggerEl) > -1 ? void 0 : (e && (l.startIndex = r.indexOf(e)), 
                Oe.fromNodes(r, l));
            }
            static fromSelector(t, e, i) {
                let n = null, s = "", o = {};
                if (ve(t) ? (n = document.body, s = t, "object" == typeof e && (o = e || {})) : t instanceof HTMLElement && ve(e) && (n = t, 
                s = e, "object" == typeof i && (o = i || {})), !n || !s) return !1;
                const a = Oe.openers.get(n);
                return !!a && (o = u({}, a.get(s) || {}, o), !!o && Oe.fromNodes(Array.from(n.querySelectorAll(s)), o));
            }
            static fromNodes(t, e) {
                e = u({}, at, e || {});
                const i = [];
                for (const n of t) {
                    const t = n.dataset || {}, s = t[me] || n.getAttribute(ge) || n.getAttribute("currentSrc") || n.getAttribute(me) || void 0;
                    let o;
                    const a = e.delegate;
                    let r;
                    a && i.length === e.startIndex && (o = a instanceof HTMLImageElement ? a : a.querySelector("img:not([aria-hidden])")), 
                    o || (o = n instanceof HTMLImageElement ? n : n.querySelector("img:not([aria-hidden])")), 
                    o && (r = o.currentSrc || o[me] || void 0, !r && o.dataset && (r = o.dataset.lazySrc || o.dataset[me] || void 0));
                    const l = {
                        src: s,
                        triggerEl: n,
                        thumbEl: o,
                        thumbElSrc: r,
                        thumbSrc: r
                    };
                    for (const e in t) {
                        let i = t[e] + "";
                        i = "false" !== i && ("true" === i || i), l[e] = i;
                    }
                    i.push(l);
                }
                return new Oe(i, e);
            }
            static getInstance(t) {
                if (t) return Te.get(t);
                return Array.from(Te.values()).reverse().find((t => !t.isClosing() && t)) || null;
            }
            static getSlide() {
                var t;
                return (null === (t = Oe.getInstance()) || void 0 === t ? void 0 : t.getSlide()) || null;
            }
            static show(t = [], e = {}) {
                return new Oe(t, e);
            }
            static next() {
                const t = Oe.getInstance();
                t && t.next();
            }
            static prev() {
                const t = Oe.getInstance();
                t && t.prev();
            }
            static close(t = !0, ...e) {
                if (t) for (const t of Te.values()) t.close(...e); else {
                    const t = Oe.getInstance();
                    t && t.close(...e);
                }
            }
        }
        Object.defineProperty(Oe, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "5.0.36"
        }), Object.defineProperty(Oe, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: at
        }), Object.defineProperty(Oe, "Plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: te
        }), Object.defineProperty(Oe, "openers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Map
        });
        if (document.querySelector("[data-fancybox]")) Oe.bind("[data-fancybox]", {});
        window["FLS"] = true;
        isWebp();
        formFieldsInit({
            viewPass: false,
            autoHeight: false
        });
        formSubmit();
    })();
})();