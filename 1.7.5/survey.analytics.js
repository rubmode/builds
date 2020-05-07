/*!
 * surveyjs - SurveyJS Analytics library v1.7.5
 * Copyright (c) 2015-2019 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"), require("plotly.js-dist"), require("wordcloud"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyAnalytics", ["survey-core", "plotly.js-dist", "wordcloud", "jquery"], factory);
	else if(typeof exports === 'object')
		exports["SurveyAnalytics"] = factory(require("survey-core"), require("plotly.js-dist"), require("wordcloud"), require("jquery"));
	else
		root["SurveyAnalytics"] = factory(root["Survey"], root["Plotly"], root["WordCloud"], root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __assign */
/* harmony export (immutable) */ __webpack_exports__["a"] = __extends;
/* unused harmony export __rest */
/* unused harmony export __decorate */
var __assign = Object["assign"] ||
    function (target) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    target[p] = s[p];
        }
        return target;
    };
function __extends(thisClass, baseClass) {
    for (var p in baseClass)
        if (baseClass.hasOwnProperty(p))
            thisClass[p] = baseClass[p];
    function __() {
        this.constructor = thisClass;
    }
    thisClass.prototype =
        baseClass === null
            ? Object.create(baseClass)
            : ((__.prototype = baseClass.prototype), new __());
}
var __rest = function (source, e) {
    var result = {};
    for (var propertyName in source)
        if (Object.prototype.hasOwnProperty.call(source, propertyName) &&
            e.indexOf(propertyName) < 0)
            result[propertyName] = source[propertyName];
    if (source != null &&
        typeof Object["getOwnPropertySymbols"] === "function")
        for (var i = 0, propertySymbols = Object["getOwnPropertySymbols"](source); i < propertySymbols.length; i++)
            if (e.indexOf(propertySymbols[i]) < 0)
                result[propertySymbols[i]] = source[propertySymbols[i]];
    return result;
};
var __decorate = function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3
        ? target
        : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if ((d = decorators[i]))
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visualizerBase__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationManager; });

var VisualizationManager = /** @class */ (function () {
    function VisualizationManager() {
    }
    VisualizationManager.registerVisualizer = function (typeName, constructor) {
        var vizualizers = VisualizationManager.vizualizers[typeName];
        if (!vizualizers) {
            vizualizers = [];
            VisualizationManager.vizualizers[typeName] = vizualizers;
        }
        vizualizers.push(constructor);
    };
    VisualizationManager.getVisualizers = function (typeName) {
        var vizualizers = VisualizationManager.vizualizers[typeName];
        if (!vizualizers) {
            return [__WEBPACK_IMPORTED_MODULE_0__visualizerBase__["a" /* VisualizerBase */]];
        }
        return vizualizers;
    };
    VisualizationManager.vizualizers = {};
    return VisualizationManager;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visualizerBase_scss__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visualizerBase_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__visualizerBase_scss__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizerBase; });

var VisualizerBase = /** @class */ (function () {
    function VisualizerBase(targetElement, question, data, options) {
        this.targetElement = targetElement;
        this.question = question;
        this.data = data;
        this.options = options;
        this.toolbarItemCreators = {};
        this.backgroundColor = "#f7f7f7";
    }
    VisualizerBase.prototype.registerToolbarItem = function (name, creator) {
        this.toolbarItemCreators[name] = creator;
    };
    Object.defineProperty(VisualizerBase.prototype, "name", {
        get: function () {
            return "visualizer";
        },
        enumerable: true,
        configurable: true
    });
    VisualizerBase.prototype.update = function (data) {
        this.data = data;
    };
    VisualizerBase.prototype.destroy = function () {
        this.targetElement.innerHTML = "";
    };
    VisualizerBase.prototype.renderContent = function (container) {
        container.innerHTML = "This question type is not visualized yet";
    };
    VisualizerBase.prototype.render = function (targetElement) {
        this.targetElement = targetElement || this.targetElement;
        var toolbarNodeContainer = document.createElement("div");
        var contentContainer = document.createElement("div");
        contentContainer.className = "sa-visualizer__content";
        this.createToolbar(toolbarNodeContainer);
        this.renderContent(contentContainer);
        this.targetElement.appendChild(toolbarNodeContainer);
        this.targetElement.appendChild(contentContainer);
    };
    VisualizerBase.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        Object.keys(this.toolbarItemCreators || {}).forEach(function (toolbarItemName) { return _this.toolbarItemCreators[toolbarItemName](toolbar); });
    };
    VisualizerBase.prototype.createToolbar = function (container) {
        var toolbar = document.createElement("div");
        toolbar.className = "sva-toolbar";
        this.createToolbarItems(toolbar);
        container.appendChild(toolbar);
    };
    VisualizerBase.prototype.invokeOnUpdate = function () {
        this.onUpdate && this.onUpdate();
    };
    VisualizerBase.prototype.getRandomColor = function () {
        var colors = this.getColors();
        return colors[Math.floor(Math.random() * colors.length)];
    };
    VisualizerBase.prototype.getColors = function (count) {
        if (count === void 0) { count = 10; }
        var colors = Array.isArray(VisualizerBase.customColors) &&
            VisualizerBase.customColors.length > 0
            ? VisualizerBase.customColors
            : VisualizerBase.colors;
        var manyColors = [];
        for (var index = 0; index < count; index++) {
            manyColors = manyColors.concat(colors);
        }
        return manyColors;
    };
    VisualizerBase.customColors = [];
    VisualizerBase.colors = [
        "#86e1fb",
        "#3999fb",
        "#ff6771",
        "#1eb496",
        "#ffc152",
        "#aba1ff",
        "#7d8da5",
        "#4ec46c",
        "#cf37a6",
        "#4e6198"
    ];
    return VisualizerBase;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localization_english__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return localization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return surveyStrings; });

var localization = {
    currentLocaleValue: "",
    defaultLocaleValue: "en",
    locales: {},
    localeNames: {},
    supportedLocales: [],
    get currentLocale() {
        return this.currentLocaleValue === this.defaultLocaleValue
            ? ""
            : this.currentLocaleValue;
    },
    set currentLocale(val) {
        this.currentLocaleValue = val;
    },
    get defaultLocale() {
        return this.defaultLocaleValue;
    },
    set defaultLocale(val) {
        this.defaultLocaleValue = val;
    },
    getString: function (strName) {
        var loc = this.currentLocale
            ? this.locales[this.currentLocale]
            : this.locales[this.defaultLocale];
        if (!loc || !loc[strName])
            loc = this.locales[this.defaultLocale];
        var result = loc[strName];
        if (result === undefined) {
            result = this.locales["en"][strName] || strName;
        }
        return result;
    },
    getLocales: function () {
        var res = [];
        res.push("");
        if (this.supportedLocales && this.supportedLocales.length > 0) {
            for (var i = 0; i < this.supportedLocales.length; i++) {
                res.push(this.supportedLocales[i]);
            }
        }
        else {
            for (var key in this.locales) {
                res.push(key);
            }
        }
        res.sort();
        return res;
    }
};
var surveyStrings = __WEBPACK_IMPORTED_MODULE_0__localization_english__["a" /* englishStrings */];
localization.locales["en"] = __WEBPACK_IMPORTED_MODULE_0__localization_english__["a" /* englishStrings */];
localization.localeNames["en"] = "english";


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarHelper; });
var ToolbarHelper = /** @class */ (function () {
    function ToolbarHelper() {
    }
    ToolbarHelper.createSelector = function (toolbar, options, isSelected, hander) {
        var selectWrapper = document.createElement("div");
        selectWrapper.className = "sva-question__select-wrapper";
        var select = document.createElement("select");
        select.className = "sva-question__select";
        options.forEach(function (option) {
            var optionElement = document.createElement("option");
            optionElement.value = option.value;
            optionElement.text = option.text;
            optionElement.selected = isSelected(option);
            select.appendChild(optionElement);
        });
        select.onchange = hander;
        selectWrapper.appendChild(select);
        return selectWrapper;
    };
    ToolbarHelper.createButton = function (toolbar, hander, text, cssClass) {
        if (text === void 0) { text = ""; }
        if (cssClass === void 0) { cssClass = ""; }
        var button = document.createElement("span");
        button.className = "sva-toolbar__button " + cssClass;
        button.innerText = text;
        button.onclick = hander;
        toolbar.appendChild(button);
        return button;
    };
    return ToolbarHelper;
}());



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectBase__ = __webpack_require__(12);
/* harmony export (immutable) */ __webpack_exports__["a"] = canLoadPlotly;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SelectBasePlotly; });


function canLoadPlotly() {
    return !!window.URL.createObjectURL;
}
var Plotly;
if (canLoadPlotly()) {
    Plotly = __webpack_require__(14);
}
var SelectBasePlotly = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SelectBasePlotly, _super);
    function SelectBasePlotly(targetElement, question, data, options) {
        var _this = _super.call(this, targetElement, question, data, options) || this;
        _this.targetElement = targetElement;
        _this.filterText = undefined;
        _this.filter = undefined;
        _this.chartTypes = SelectBasePlotly.types;
        _this.chartType = _this.chartTypes[0];
        return _this;
    }
    SelectBasePlotly.prototype.update = function (data) {
        _super.prototype.update.call(this, data);
        this.destroy();
        this.chart = this.getPlotlyChart(this.chartNode, this.chartType);
        this.invokeOnUpdate();
    };
    SelectBasePlotly.prototype.destroy = function () {
        Plotly.purge(this.chartNode);
    };
    SelectBasePlotly.prototype.createChart = function () {
        this.chart = this.getPlotlyChart(this.chartNode, this.chartType);
    };
    SelectBasePlotly.prototype.getSelectedItemByText = function (itemText) {
        return this.question.choices.filter(function (choice) { return choice.text === itemText; })[0];
    };
    SelectBasePlotly.prototype.patchConfigParameters = function (chartNode, traces, layout, config) { };
    SelectBasePlotly.prototype.getPlotlyChart = function (chartNode, chartType) {
        var _this = this;
        var question = this.question;
        var datasets = this.getData();
        var labels = this.getLabels();
        var colors = this.getColors();
        var traces = [];
        if (this.orderByAnsweres == "asc" || this.orderByAnsweres == "desc") {
            var dict = this.sortDictionary(this.zipArrays(labels, colors), datasets[0], this.orderByAnsweres == "desc");
            var labelsAndColors = this.unzipArrays(dict.keys);
            labels = labelsAndColors.first;
            colors = labelsAndColors.second;
            datasets[0] = dict.values;
        }
        var traceConfig = {
            type: chartType,
            y: labels.map(function (l) {
                if (l.length > 30) {
                    return l.substring(0, 27) + "...";
                }
                return l;
            }),
            text: labels,
            hoverinfo: "x+y",
            orientation: "h",
            mode: "markers",
            width: 0.5,
            marker: {}
        };
        if (this.chartType === "pie" || this.chartType === "doughnut") {
            traceConfig.hoverinfo = "text+value+percent";
            traceConfig.marker.colors = colors;
            traceConfig.textposition = "inside";
        }
        else if (this.chartType === "bar") {
            traceConfig.marker.color = colors;
        }
        if (this.chartType === "doughnut") {
            traceConfig.type = "pie";
            traceConfig.hole = 0.4;
        }
        if (datasets.length === 1) {
            traceConfig.marker.symbol = "circle";
            traceConfig.marker.size = 16;
        }
        datasets.forEach(function (dataset) {
            if (_this.chartType === "pie" || _this.chartType === "doughnut") {
                traces.push(Object.assign({}, traceConfig, {
                    values: dataset,
                    labels: labels
                }));
            }
            else {
                traces.push(Object.assign({}, traceConfig, { x: dataset }));
            }
        });
        var height = chartType === "pie" || this.chartType === "doughnut"
            ? labels.length < 10
                ? labels.length * 50 + 100
                : 550
            : (labels.length + (labels.length + 1) * 0.5) * 20;
        var layout = {
            font: {
                family: "Segoe UI, sans-serif",
                size: 14,
                weight: "normal",
                color: "#404040"
            },
            height: height,
            margin: {
                t: 0,
                b: 0,
                r: 10
            },
            colorway: colors,
            hovermode: "closest",
            yaxis: {
                automargin: true,
                type: "category",
                ticklen: 5,
                tickcolor: "transparent"
            },
            xaxis: {
                rangemode: "nonnegative",
                automargin: true
            },
            plot_bgcolor: this.backgroundColor,
            paper_bgcolor: this.backgroundColor,
            showlegend: false
        };
        var config = {
            displaylogo: false,
            responsive: true
        };
        if (SelectBasePlotly.displayModeBar !== undefined) {
            config.displayModeBar = SelectBasePlotly.displayModeBar;
        }
        this.patchConfigParameters(chartNode, traces, layout, config);
        var plot = Plotly.newPlot(chartNode, traces, layout, config);
        chartNode["on"]("plotly_click", function (data) {
            if (data.points.length > 0 && _this.onDataItemSelected) {
                var itemText = data.points[0].text;
                var item = _this.getSelectedItemByText(itemText);
                _this.setSelection(item);
            }
        });
        var getDragLayer = function () {
            return chartNode.getElementsByClassName("nsewdrag")[0];
        };
        chartNode["on"]("plotly_hover", function () {
            var dragLayer = getDragLayer();
            dragLayer && (dragLayer.style.cursor = "pointer");
        });
        chartNode["on"]("plotly_unhover", function () {
            var dragLayer = getDragLayer();
            dragLayer && (dragLayer.style.cursor = "");
        });
        return plot;
    };
    SelectBasePlotly.displayModeBar = undefined;
    SelectBasePlotly.types = ["bar", "pie", "doughnut", "scatter"];
    return SelectBasePlotly;
}(__WEBPACK_IMPORTED_MODULE_1__selectBase__["a" /* SelectBase */]));



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return QuestionLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ColumnDataType; });
var ColumnVisibility;
(function (ColumnVisibility) {
    ColumnVisibility[ColumnVisibility["Visible"] = 0] = "Visible";
    ColumnVisibility[ColumnVisibility["Invisible"] = 1] = "Invisible";
    ColumnVisibility[ColumnVisibility["PublicInvisible"] = 2] = "PublicInvisible";
})(ColumnVisibility || (ColumnVisibility = {}));
var QuestionLocation;
(function (QuestionLocation) {
    QuestionLocation[QuestionLocation["Column"] = 0] = "Column";
    QuestionLocation[QuestionLocation["Row"] = 1] = "Row";
})(QuestionLocation || (QuestionLocation = {}));
var ColumnDataType;
(function (ColumnDataType) {
    ColumnDataType[ColumnDataType["Text"] = 0] = "Text";
    ColumnDataType[ColumnDataType["FileLink"] = 1] = "FileLink";
    ColumnDataType[ColumnDataType["Image"] = 2] = "Image";
})(ColumnDataType || (ColumnDataType = {}));


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visualizationManager__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alternativeVizualizersWrapper__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationPanel_scss__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationPanel_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__visualizationPanel_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectBase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationPanel; });



var Muuri = __webpack_require__(27);





var questionElementClassName = "sva-question";
var questionLayoutedElementClassName = "sva-question-layouted";
/**
 * VisualizationPanel is responsible for displaying an array of survey questions
 */
var VisualizationPanel = /** @class */ (function () {
    function VisualizationPanel(targetElement, questions, data, options, _elements, isTrustedAccess) {
        if (options === void 0) { options = {}; }
        if (_elements === void 0) { _elements = []; }
        if (isTrustedAccess === void 0) { isTrustedAccess = false; }
        this.targetElement = targetElement;
        this.questions = questions;
        this.data = data;
        this.options = options;
        this._elements = _elements;
        this.isTrustedAccess = isTrustedAccess;
        this._showHeader = false;
        this.panelContent = undefined;
        this.filterValues = {};
        this.visualizers = [];
        /**
         * Fires when element visibility has been changed.
         */
        this.onVisibleElementsChanged = new __WEBPACK_IMPORTED_MODULE_2_survey_core__["Event"]();
        this.filteredData = data;
        if (_elements.length === 0) {
            this._elements = this.buildElements(questions);
        }
    }
    Object.defineProperty(VisualizationPanel.prototype, "allowDynamicLayout", {
        get: function () {
            return (this.options.allowDynamicLayout === undefined ||
                this.options.allowDynamicLayout === true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualizationPanel.prototype, "layoutEngine", {
        get: function () {
            return !!this.getLayoutEngine && this.getLayoutEngine();
        },
        enumerable: true,
        configurable: true
    });
    VisualizationPanel.prototype.buildElements = function (questions) {
        return (questions || []).map(function (question) {
            return {
                name: question.name,
                displayName: question.title,
                visibility: __WEBPACK_IMPORTED_MODULE_7__config__["a" /* ElementVisibility */].Visible,
                type: undefined,
            };
        });
    };
    /**
     * Checks whether certain element is visible.
     */
    VisualizationPanel.prototype.isVisible = function (visibility) {
        return ((this.isTrustedAccess && visibility !== __WEBPACK_IMPORTED_MODULE_7__config__["a" /* ElementVisibility */].Invisible) ||
            (!this.isTrustedAccess && visibility === __WEBPACK_IMPORTED_MODULE_7__config__["a" /* ElementVisibility */].Visible));
    };
    Object.defineProperty(VisualizationPanel.prototype, "visibleElements", {
        get: function () {
            var _this = this;
            return this._elements.filter(function (el) { return _this.isVisible(el.visibility); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisualizationPanel.prototype, "hiddenElements", {
        get: function () {
            var _this = this;
            return this._elements.filter(function (el) { return !_this.isVisible(el.visibility); });
        },
        enumerable: true,
        configurable: true
    });
    VisualizationPanel.prototype.getElement = function (name) {
        return this._elements.filter(function (el) { return el.name === name; })[0];
    };
    VisualizationPanel.prototype.visibleElementsChanged = function (element) {
        if (!this.onVisibleElementsChanged.isEmpty) {
            this.onVisibleElementsChanged.fire(this, {
                elements: this._elements,
                changed: element,
            });
        }
        this.layout();
    };
    /**
     * Destroys given visualizer.
     */
    VisualizationPanel.prototype.destroyVisualizer = function (visualizer) {
        if (visualizer instanceof __WEBPACK_IMPORTED_MODULE_4__selectBase__["a" /* SelectBase */]) {
            visualizer.setSelection(undefined);
            visualizer.onDataItemSelected = undefined;
        }
        visualizer.onUpdate = undefined;
        visualizer.destroy();
        this.visualizers.splice(this.visualizers.indexOf(visualizer), 1);
    };
    /**
     * Renders given element.
     */
    VisualizationPanel.prototype.renderVisualizer = function (element) {
        var _this = this;
        var question = this.questions.filter(function (q) { return q.name === element.name; })[0];
        var questionElement = document.createElement("div");
        var questionContent = document.createElement("div");
        var titleElement = document.createElement("h3");
        var vizualizerElement = document.createElement("div");
        titleElement.innerText = element.displayName;
        questionElement.className = this.allowDynamicLayout
            ? questionElementClassName + " " + questionLayoutedElementClassName
            : questionElementClassName;
        questionContent.className = questionElementClassName + "__content";
        titleElement.className = questionElementClassName + "__title";
        questionContent.appendChild(titleElement);
        questionContent.appendChild(vizualizerElement);
        questionElement.appendChild(questionContent);
        var visualizer = this.createVizualizer(vizualizerElement, question, this.filteredData);
        visualizer.registerToolbarItem("removeQuestion", function (toolbar) {
            return __WEBPACK_IMPORTED_MODULE_5__utils_index__["a" /* ToolbarHelper */].createButton(toolbar, function () {
                setTimeout(function () {
                    element.visibility = __WEBPACK_IMPORTED_MODULE_7__config__["a" /* ElementVisibility */].Invisible;
                    _this.destroyVisualizer(visualizer);
                    !!_this.layoutEngine &&
                        _this.layoutEngine.remove([questionElement]);
                    _this.panelContent.removeChild(questionElement);
                    _this.visibleElementsChanged(element);
                }, 0);
            }, __WEBPACK_IMPORTED_MODULE_6__localizationManager__["a" /* localization */].getString("hideButton"));
        });
        if (visualizer instanceof __WEBPACK_IMPORTED_MODULE_4__selectBase__["a" /* SelectBase */]) {
            var filterInfo = {
                text: undefined,
                element: undefined,
                update: function (selection) {
                    if (!!selection && !!selection.value) {
                        this.element.style.display = "inline-block";
                        this.text.innerHTML = "Filter: [" + selection.text + "]";
                    }
                    else {
                        this.element.style.display = "none";
                        this.text.innerHTML = "";
                    }
                },
            };
            visualizer.registerToolbarItem("questionFilterInfo", function (toolbar) {
                filterInfo.element = document.createElement("div");
                filterInfo.element.className = "sva-question__filter";
                filterInfo.text = document.createElement("span");
                filterInfo.text.className = "sva-question__filter-text";
                filterInfo.element.appendChild(filterInfo.text);
                var filterClear = document.createElement("span");
                filterClear.className = "sva-toolbar__button";
                filterClear.innerHTML = __WEBPACK_IMPORTED_MODULE_6__localizationManager__["a" /* localization */].getString("clearButton");
                filterClear.onclick = function () {
                    visualizer.setSelection(undefined);
                };
                filterInfo.element.appendChild(filterClear);
                toolbar.appendChild(filterInfo.element);
                filterInfo.update(visualizer.selection);
                return filterInfo.element;
            });
            visualizer.onDataItemSelected = function (selectedValue, selectedText) {
                filterInfo.update({ value: selectedValue, text: selectedText });
                _this.applyFilter(question.name, selectedValue);
            };
        }
        visualizer.render();
        visualizer.onUpdate = function () { return _this.layout(); };
        this.visualizers.push(visualizer);
        return questionElement;
    };
    /**
     * Renders all questions into given HTML container element.
     */
    VisualizationPanel.prototype.render = function () {
        var _this = this;
        var layoutEngine = undefined;
        this.getLayoutEngine = function () { return layoutEngine; };
        this.panelContent = document.createElement("div");
        this.panelContent.className = "sva-grid";
        this.visibleElements.forEach(function (element) {
            var questionElement = _this.renderVisualizer(element);
            _this.panelContent.appendChild(questionElement);
        });
        if (this.showHeader) {
            var panelHeader = document.createElement("div");
            panelHeader.className = "sva-panel__header";
            var toolobar = document.createElement("div");
            toolobar.className = "sva-toolbar";
            this.createToolbarItems(toolobar);
            panelHeader.appendChild(toolobar);
            this.targetElement.appendChild(panelHeader);
        }
        this.targetElement.appendChild(this.panelContent);
        var moveHandler = function (data) {
            var elements = _this._elements.splice(data.fromIndex, 1);
            _this._elements.splice(data.toIndex, 0, elements[0]);
        };
        if (this.allowDynamicLayout) {
            layoutEngine = new Muuri(this.panelContent, {
                items: "." + questionLayoutedElementClassName,
                dragEnabled: true,
            });
            layoutEngine.on("move", moveHandler);
        }
        !!window && window.dispatchEvent(new UIEvent("resize"));
    };
    VisualizationPanel.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        var resetFilterButton = __WEBPACK_IMPORTED_MODULE_5__utils_index__["a" /* ToolbarHelper */].createButton(toolbar, function () {
            _this.visualizers.forEach(function (visualizer) {
                if (visualizer instanceof __WEBPACK_IMPORTED_MODULE_4__selectBase__["a" /* SelectBase */]) {
                    visualizer.setSelection(undefined);
                }
            });
        }, __WEBPACK_IMPORTED_MODULE_6__localizationManager__["a" /* localization */].getString("resetFilter"));
        toolbar.appendChild(resetFilterButton);
        var addElementSelector = undefined;
        var addElementSelectorUpdater = function (panel, _) {
            var hiddenElements = _this.hiddenElements;
            if (hiddenElements.length > 0) {
                var selectWrapper = __WEBPACK_IMPORTED_MODULE_5__utils_index__["a" /* ToolbarHelper */].createSelector(toolbar, [
                    {
                        name: undefined,
                        displayName: __WEBPACK_IMPORTED_MODULE_6__localizationManager__["a" /* localization */].getString("addElement"),
                    },
                ]
                    .concat(hiddenElements)
                    .map(function (element) {
                    return {
                        value: element.name,
                        text: element.displayName,
                    };
                }), function (option) { return false; }, function (e) {
                    var element = _this.getElement(e.target.value);
                    element.visibility = __WEBPACK_IMPORTED_MODULE_7__config__["a" /* ElementVisibility */].Visible;
                    var questionElement = _this.renderVisualizer(element);
                    _this.panelContent.appendChild(questionElement);
                    !!_this.layoutEngine && _this.layoutEngine.add([questionElement]);
                    _this.visibleElementsChanged(element);
                });
                (addElementSelector &&
                    toolbar.replaceChild(selectWrapper, addElementSelector)) ||
                    toolbar.appendChild(selectWrapper);
                addElementSelector = selectWrapper;
            }
            else {
                addElementSelector && toolbar.removeChild(addElementSelector);
                addElementSelector = undefined;
            }
        };
        addElementSelectorUpdater(this, {});
        this.onVisibleElementsChanged.add(addElementSelectorUpdater);
    };
    /**
     * Destroys visualizer and all inner content.
     */
    VisualizationPanel.prototype.destroy = function () {
        var layoutEngine = this.layoutEngine;
        if (!!layoutEngine) {
            layoutEngine.off("move");
            layoutEngine.destroy();
            this.getLayoutEngine = undefined;
        }
        this.targetElement.innerHTML = "";
        this.panelContent = undefined;
        this.visualizers.forEach(function (visualizer) {
            visualizer.onUpdate = undefined;
            if (visualizer instanceof __WEBPACK_IMPORTED_MODULE_4__selectBase__["a" /* SelectBase */]) {
                visualizer.onDataItemSelected = undefined;
            }
            visualizer.destroy();
        });
        this.visualizers = [];
    };
    /**
     * Updates visualizer and all inner content.
     */
    VisualizationPanel.prototype.update = function (hard) {
        var _this = this;
        if (hard === void 0) { hard = false; }
        if (hard && this.visualizers.length > 0) {
            this.destroy();
            this.render();
        }
        else {
            this.visualizers.forEach(function (visualizer) {
                return setTimeout(function () { return visualizer.update(_this.filteredData); }, 10);
            });
        }
    };
    /**
     * Updates layout of visualizer inner content.
     */
    VisualizationPanel.prototype.layout = function () {
        var layoutEngine = this.layoutEngine;
        if (!!layoutEngine) {
            layoutEngine.refreshItems();
            layoutEngine.layout();
        }
    };
    /**
     * Applies filter by question name and value.
     */
    VisualizationPanel.prototype.applyFilter = function (questionName, selectedValue) {
        var _this = this;
        var filterChanged = true;
        if (selectedValue !== undefined) {
            filterChanged = this.filterValues[questionName] !== selectedValue;
            this.filterValues[questionName] = selectedValue;
        }
        else {
            filterChanged = this.filterValues[questionName] !== undefined;
            delete this.filterValues[questionName];
        }
        if (filterChanged) {
            this.filteredData = this.data.filter(function (item) {
                return !Object.keys(_this.filterValues).some(function (key) { return item[key] !== _this.filterValues[key]; });
            });
            this.update();
        }
    };
    /**
     * Creates visuzlizer by question.
     */
    VisualizationPanel.prototype.createVizualizer = function (vizualizerElement, question, data) {
        var creators = __WEBPACK_IMPORTED_MODULE_0__visualizationManager__["a" /* VisualizationManager */].getVisualizers(question.getType());
        var visualizers = creators.map(function (creator) { return new creator(vizualizerElement, question, data); });
        if (visualizers.length > 1) {
            var visualizer = new __WEBPACK_IMPORTED_MODULE_1__alternativeVizualizersWrapper__["a" /* AlternativeVisualizersWrapper */](visualizers, vizualizerElement, question, data);
            return visualizer;
        }
        return visualizers[0];
    };
    Object.defineProperty(VisualizationPanel.prototype, "showHeader", {
        get: function () {
            return this._showHeader;
        },
        set: function (newValue) {
            if (newValue != this._showHeader) {
                this._showHeader = newValue;
                this.update(true);
            }
        },
        enumerable: true,
        configurable: true
    });
    return VisualizationPanel;
}());



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationPanel__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationPanelDynamic; });




var VisualizationPanelDynamic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](VisualizationPanelDynamic, _super);
    function VisualizationPanelDynamic(targetNode, question, data, options) {
        var _this = _super.call(this, targetNode, question, data, options) || this;
        _this.targetNode = targetNode;
        _this.data = [];
        data.forEach(function (dataItem) {
            return !!dataItem[question.name] &&
                (_this.data = _this.data.concat(dataItem[question.name]));
        });
        return _this;
    }
    VisualizationPanelDynamic.prototype.getQuestions = function () {
        var paneldynamic = this.question;
        return paneldynamic.template.questions;
    };
    VisualizationPanelDynamic.prototype.render = function () {
        var visPanel = new __WEBPACK_IMPORTED_MODULE_3__visualizationPanel__["a" /* VisualizationPanel */](this.targetNode, this.getQuestions(), this.data, { allowDynamicLayout: false });
        visPanel.render();
    };
    return VisualizationPanelDynamic;
}(__WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a" /* VisualizerBase */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("paneldynamic", VisualizationPanelDynamic);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__english__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return textHelper; });

var stopWordsDictionary = {};
stopWordsDictionary["en"] = __WEBPACK_IMPORTED_MODULE_0__english__["a" /* stopWords */];
var textHelper = {
    getStopWords: function (locale) {
        if (locale === void 0) { locale = ""; }
        return stopWordsDictionary[locale || "en"] || [];
    }
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<svg style=\"display:none;\"><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-detail\"><circle class=\"st0\" cx=\"1.5\" cy=\"8.5\" r=\"1.5\"></circle><circle class=\"st0\" cx=\"7.5\" cy=\"8.5\" r=\"1.5\"></circle><circle class=\"st0\" cx=\"13.5\" cy=\"8.5\" r=\"1.5\"></circle></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-drag\"><path class=\"st0\" d=\"M13 5l-1 1 1 1H9V3l1 1 1-1-3-3-3 3 1 1 1-1v4H3l1-1-1-1-3 3 3 3 1-1-1-1h4v4l-1-1-1 1 3 3 3-3-1-1-1 1V9h4l-1 1 1 1 3-3z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-hide\"><path class=\"st1\" d=\"M12.79 4.2L16 1l-1-1-3.32 3.32C10.57 2.55 9.32 2 8 2 3.63 2 0 7.97 0 7.97s1.27 2.1 3.21 3.82l-3.23 3.23.98.98 3.35-3.34C5.41 13.44 6.67 14 8 14c4.37 0 8-6 8-6s-1.27-2.09-3.21-3.8zM2 7.97c1.07-1.47 3.61-4 6-4 .8 0 1.6.27 2.35.68l-.78.78c-.46-.29-.99-.46-1.57-.46-1.66 0-3 1.34-3 3 0 .58.17 1.11.46 1.57l-.97.97A13.38 13.38 0 0 1 2 7.97zm6 4c-.8 0-1.59-.27-2.33-.67l.78-.77c.45.27.98.44 1.55.44 1.66 0 3-1.34 3-3 0-.57-.17-1.09-.44-1.55l.98-.98c1.11.87 2.01 1.91 2.46 2.52-1.07 1.48-3.61 4.01-6 4.01z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-makeprivate\"><circle class=\"st0\" cx=\"8\" cy=\"4\" r=\"3\"></circle><path class=\"st0\" d=\"M8 8c-3.31 0-6 2.73-6 4.67S5.27 15 8 15s6-.4 6-2.33S11.31 8 8 8z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-makepublic\"><circle class=\"st0\" cx=\"6\" cy=\"5\" r=\"3\"></circle><path class=\"st0\" d=\"M10 5c0 .34-.06.67-.14.99.05 0 .09.01.14.01 1.66 0 3-1.34 3-3s-1.34-3-3-3C8.97 0 8.07.52 7.53 1.3 8.98 1.91 10 3.33 10 5zM6 9c-3.31 0-6 2.73-6 4.67S3.27 16 6 16s6-.4 6-2.33S9.31 9 6 9zM10 7c-.19 0-.38.01-.57.03a4.14 4.14 0 0 1-1.37 1.39c3 .83 5.23 3.31 5.42 5.28 1.44-.31 2.52-.92 2.52-2.03C16 9.74 13.31 7 10 7z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-movetodetails\"><circle class=\"st0\" cx=\"1.5\" cy=\"14.5\" r=\"1.5\"></circle><circle class=\"st0\" cx=\"7.5\" cy=\"14.5\" r=\"1.5\"></circle><circle class=\"st0\" cx=\"13.5\" cy=\"14.5\" r=\"1.5\"></circle><path class=\"st0\" d=\"M12 1h3v9h-3zM2.02 7.02L1 6 0 7l3 3 3-3-1-1-.94.94C4.33 4.73 6.21 3 8.5 3c.17 0 .33.03.5.05V1.03C8.83 1.01 8.67 1 8.5 1 5.08 1 2.27 3.66 2.02 7.02z\"></path></symbol><symbol viewBox=\"0 0 16 16\" id=\"sa-svg-sorting\"><path class=\"st0\" d=\"M8 3l2 2 1-1-3-3-3 3 1 1zM8 13l-2-2-1 1 3 3 3-3-1-1z\"></path></symbol></svg>";

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectBase; });





var SelectBase = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SelectBase, _super);
    function SelectBase(targetElement, question, data, options) {
        var _this = _super.call(this, targetElement, question, data, options) || this;
        _this.targetElement = targetElement;
        _this.selectedItem = undefined;
        _this.orderByAnsweres = "default";
        _this.chartNode = document.createElement("div");
        return _this;
    }
    SelectBase.prototype.onChartTypeChanged = function () { };
    SelectBase.prototype.setChartType = function (chartType) {
        if (this.chartTypes.indexOf(chartType) !== -1 &&
            this.chartType !== chartType) {
            this.chartType = chartType;
            this.createChart();
            this.invokeOnUpdate();
        }
    };
    SelectBase.prototype.createChart = function () { };
    SelectBase.prototype.setSelection = function (item) {
        this.selectedItem = item;
        this.onDataItemSelected((item && item.value) || undefined, (item && item.text) || "");
    };
    Object.defineProperty(SelectBase.prototype, "selection", {
        get: function () {
            return this.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    SelectBase.prototype.setLabelsOrder = function (value) {
        this.orderByAnsweres = value;
    };
    SelectBase.prototype.renderContent = function (container) {
        this.createChart();
        container.appendChild(this.chartNode);
    };
    SelectBase.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        if (this.chartTypes.length > 0) {
            var selectWrapper = __WEBPACK_IMPORTED_MODULE_4__utils_index__["a" /* ToolbarHelper */].createSelector(toolbar, this.chartTypes.map(function (chartType) {
                return {
                    value: chartType,
                    text: __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("chartType_" + chartType)
                };
            }), function (option) { return _this.chartType === option.value; }, function (e) {
                _this.setChartType(e.target.value);
                _this.onChartTypeChanged();
            });
            toolbar.appendChild(selectWrapper);
        }
        _super.prototype.createToolbarItems.call(this, toolbar);
    };
    SelectBase.prototype.valuesSource = function () {
        var question = this.question;
        return question["activeChoices"];
    };
    SelectBase.prototype.getValues = function () {
        var values = this.valuesSource().map(function (choice) { return choice.value; });
        if (this.question.hasOther)
            values.unshift("other");
        return values;
    };
    SelectBase.prototype.getLabels = function () {
        var _this = this;
        var labels = this.valuesSource().map(function (choice) {
            return __WEBPACK_IMPORTED_MODULE_1_survey_core__["ItemValue"].getTextOrHtmlByValue(_this.valuesSource(), choice.value);
        });
        if (this.question.hasOther)
            labels.unshift("Other");
        return labels;
    };
    SelectBase.prototype.getData = function () {
        var _this = this;
        var values = this.getValues();
        var statistics = values.map(function (v) { return 0; });
        this.data.forEach(function (row) {
            var rowValue = row[_this.question.name];
            if (!!rowValue) {
                if (Array.isArray(rowValue)) {
                    values.forEach(function (val, index) {
                        if (rowValue.indexOf(val) !== -1) {
                            statistics[index]++;
                        }
                    });
                }
                else {
                    values.forEach(function (val, index) {
                        if (rowValue == val) {
                            statistics[index]++;
                        }
                    });
                }
            }
        });
        return [statistics];
    };
    SelectBase.prototype.zipArrays = function (first, second) {
        var zipArray = [];
        for (var i = 0; i < Math.min(first.length, second.length); i++) {
            zipArray[i] = [first[i], second[i]];
        }
        return zipArray;
    };
    SelectBase.prototype.unzipArrays = function (zipArray) {
        var twoArrays = { first: [], second: [] };
        zipArray.forEach(function (value, i) {
            twoArrays.first[i] = value[0];
            twoArrays.second[i] = value[1];
        });
        return twoArrays;
    };
    SelectBase.prototype.sortDictionary = function (keys, values, desc) {
        var dictionary = this.zipArrays(keys, values);
        var comparator = function (a, b, asc) {
            if (asc === void 0) { asc = true; }
            var result = a[1] < b[1] ? 1 : a[1] == b[1] ? 0 : -1;
            return asc ? result : result * -1;
        };
        dictionary.sort(function (a, b) {
            return desc ? comparator(a, b, false) : comparator(a, b);
        });
        var keysAndValues = this.unzipArrays(dictionary);
        return { keys: keysAndValues.first, values: keysAndValues.second };
    };
    return SelectBase;
}(__WEBPACK_IMPORTED_MODULE_2__visualizerBase__["a" /* VisualizerBase */]));



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Table; });

var Table = /** @class */ (function () {
    function Table(targetNode, survey, data, options, _columns, isTrustedAccess) {
        var _this = this;
        if (_columns === void 0) { _columns = []; }
        if (isTrustedAccess === void 0) { isTrustedAccess = false; }
        this.targetNode = targetNode;
        this.survey = survey;
        this.data = data;
        this.options = options;
        this._columns = _columns;
        this.isTrustedAccess = isTrustedAccess;
        this.buildColumns = function (survey) {
            return _this.survey.getAllQuestions().map(function (question) {
                return {
                    name: question.name,
                    displayName: (question.title || "").trim() || question.name,
                    dataType: question.getType() !== "file"
                        ? __WEBPACK_IMPORTED_MODULE_0__config__["b" /* ColumnDataType */].Text
                        : __WEBPACK_IMPORTED_MODULE_0__config__["b" /* ColumnDataType */].FileLink,
                    visibility: question.getType() !== "file"
                        ? __WEBPACK_IMPORTED_MODULE_0__config__["a" /* ColumnVisibility */].Visible
                        : __WEBPACK_IMPORTED_MODULE_0__config__["a" /* ColumnVisibility */].Invisible,
                    location: __WEBPACK_IMPORTED_MODULE_0__config__["c" /* QuestionLocation */].Column,
                };
            });
        };
        this.isVisible = function (visibility) {
            return ((_this.isTrustedAccess && visibility !== __WEBPACK_IMPORTED_MODULE_0__config__["a" /* ColumnVisibility */].Invisible) ||
                (!_this.isTrustedAccess && visibility === __WEBPACK_IMPORTED_MODULE_0__config__["a" /* ColumnVisibility */].Visible));
        };
        this.getAvailableColumns = function () {
            return _this.columns.filter(function (column) {
                return column.location === __WEBPACK_IMPORTED_MODULE_0__config__["c" /* QuestionLocation */].Column &&
                    _this.isVisible(column.visibility);
            });
        };
        if (_columns.length === 0) {
            this._columns = this.buildColumns(survey);
        }
        this.initTableData(data);
    }
    Object.defineProperty(Table.prototype, "columns", {
        get: function () {
            return [].concat(this._columns);
        },
        enumerable: true,
        configurable: true
    });
    Table.prototype.initTableData = function (data) {
        var _this = this;
        this.tableData = (data || []).map(function (item) {
            var dataItem = {};
            _this.survey.data = item;
            _this._columns.forEach(function (column) {
                var displayValue = item[column.name];
                var question = _this.survey.getQuestionByName(column.name);
                if (question) {
                    displayValue = question.displayValue;
                }
                dataItem[column.name] =
                    typeof displayValue === "string"
                        ? displayValue
                        : JSON.stringify(displayValue) || "";
            });
            return dataItem;
        });
    };
    return Table;
}());



/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localizationManager__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "localization", function() { return __WEBPACK_IMPORTED_MODULE_0__localizationManager__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return __WEBPACK_IMPORTED_MODULE_0__localizationManager__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizerBase", function() { return __WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationManager", function() { return __WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationPanel__ = __webpack_require__(8);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationPanel", function() { return __WEBPACK_IMPORTED_MODULE_3__visualizationPanel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visualizationPanelDynamic__ = __webpack_require__(9);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationPanelDynamic", function() { return __WEBPACK_IMPORTED_MODULE_4__visualizationPanelDynamic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__visualizationMatrixDynamic__ = __webpack_require__(20);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VisualizationMatrixDynamic", function() { return __WEBPACK_IMPORTED_MODULE_5__visualizationMatrixDynamic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tables_datatables__ = __webpack_require__(17);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DataTables", function() { return __WEBPACK_IMPORTED_MODULE_6__tables_datatables__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tables_tabulator__ = __webpack_require__(18);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Tabulator", function() { return __WEBPACK_IMPORTED_MODULE_7__tables_tabulator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__plotly_index__ = __webpack_require__(16);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "canLoadPlotly", function() { return __WEBPACK_IMPORTED_MODULE_8__plotly_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SelectBasePlotly", function() { return __WEBPACK_IMPORTED_MODULE_8__plotly_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GaugePlotly", function() { return __WEBPACK_IMPORTED_MODULE_8__plotly_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixPlotly", function() { return __WEBPACK_IMPORTED_MODULE_8__plotly_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BooleanPlotly", function() { return __WEBPACK_IMPORTED_MODULE_8__plotly_index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SelectBaseSortablePlotly", function() { return __WEBPACK_IMPORTED_MODULE_8__plotly_index__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wordcloud_wordcloud__ = __webpack_require__(21);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "WordCloud", function() { return __WEBPACK_IMPORTED_MODULE_9__wordcloud_wordcloud__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__wordcloud_stopwords_index__ = __webpack_require__(10);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "textHelper", function() { return __WEBPACK_IMPORTED_MODULE_10__wordcloud_stopwords_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__text__ = __webpack_require__(19);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return __WEBPACK_IMPORTED_MODULE_11__text__["a"]; });














/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectBase__ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__selectBase__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__selectBase__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rating__ = __webpack_require__(34);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__rating__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matrix__ = __webpack_require__(33);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__matrix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boolean__ = __webpack_require__(32);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__boolean__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectBaseSortable__ = __webpack_require__(35);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__selectBaseSortable__["a"]; });







/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_survey_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datatables_scss__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datatables_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__datatables_scss__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTables; });







if (!!document) {
    var svgTemplate = __webpack_require__(11);
    var templateHolder = document.createElement("div");
    templateHolder.style.display = "none";
    templateHolder.innerHTML = svgTemplate;
    document.head.appendChild(templateHolder);
}
var DataTables = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](DataTables, _super);
    function DataTables(targetNode, survey, data, options, _columns, isTrustedAccess) {
        if (_columns === void 0) { _columns = []; }
        if (isTrustedAccess === void 0) { isTrustedAccess = false; }
        var _this = _super.call(this, targetNode, survey, data, options, _columns, isTrustedAccess) || this;
        _this.currentPageNumber = 0;
        /**
         * The event is fired columns configuration has been changed.
         * <br/> sender the datatables adapter
         * <br/> options.survey current survey
         * @see getColumns
         */
        _this.columnsChanged = new __WEBPACK_IMPORTED_MODULE_3_survey_core__["Event"]();
        _this.groupBy = [];
        _this.headerButtonCreators = [];
        _this.detailButtonCreators = [];
        _this.createSelectButton = function (datatableApi, colIdx, columnName) {
            var button = document.createElement("button");
            button.innerHTML = __WEBPACK_IMPORTED_MODULE_5__localizationManager__["a" /* localization */].getString("selectButton");
            button.onclick = function (e) {
                e.stopPropagation();
                datatableApi.columns().deselect();
                datatableApi.column(colIdx).select();
                !!_this.onColumnSelected && _this.onColumnSelected(columnName);
            };
            return button;
        };
        _this.createGroupingButton = function (datatableApi, colIdx, columnName) {
            var button = document.createElement("button");
            button.innerHTML = __WEBPACK_IMPORTED_MODULE_5__localizationManager__["a" /* localization */].getString("groupButton");
            button.onclick = function (e) {
                e.stopPropagation();
                var index = _this.groupBy.indexOf(columnName);
                if (index === -1) {
                    _this.groupBy.push(columnName);
                    button.innerHTML = __WEBPACK_IMPORTED_MODULE_5__localizationManager__["a" /* localization */].getString("ungroupButton");
                }
                else {
                    button.innerHTML = __WEBPACK_IMPORTED_MODULE_5__localizationManager__["a" /* localization */].getString("groupButton");
                    _this.groupBy.splice(index, 1);
                }
                datatableApi.rowGroup().enable(_this.groupBy.length > 0);
                if (_this.groupBy.length > 0) {
                    datatableApi.rowGroup().dataSrc(_this.groupBy);
                }
                datatableApi.draw(false);
            };
            return button;
        };
        _this.createSvgElement = function (path) {
            var svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            var useElem = document.createElementNS("http://www.w3.org/2000/svg", "use");
            useElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#sa-svg-" + path);
            svgElem.appendChild(useElem);
            return svgElem;
        };
        _this.createHideButton = function (datatableApi, colIdx, columnName) {
            var button = document.createElement("button");
            button.title = __WEBPACK_IMPORTED_MODULE_5__localizationManager__["a" /* localization */].getString("hideColumn");
            button.className = "sa-datatables__svg-button";
            button.appendChild(_this.createSvgElement("hide"));
            button.onclick = function (e) {
                e.stopPropagation();
                _this._columns.filter(function (column) { return column.name === columnName; })[0].visibility = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* ColumnVisibility */].Invisible;
                datatableApi.columns([colIdx]).visible(false);
                // TODO: Use datatables to update headers (show columns options)
                _this.update();
                _this.onColumnsChanged();
            };
            return button;
        };
        _this.createColumnPrivateButton = function (datatableApi, colIdx, columnName) {
            var column = _this._columns.filter(function (column) { return column.name === columnName; })[0];
            var button = document.createElement("button");
            var makePrivateSvg = _this.createSvgElement("makeprivate");
            var makePublicSvg = _this.createSvgElement("makepublic");
            updateState(column.visibility);
            button.appendChild(makePrivateSvg);
            button.appendChild(makePublicSvg);
            button.onclick = function (e) {
                e.stopPropagation();
                if (column.visibility === __WEBPACK_IMPORTED_MODULE_4__config__["a" /* ColumnVisibility */].PublicInvisible) {
                    column.visibility = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* ColumnVisibility */].Visible;
                }
                else {
                    column.visibility = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* ColumnVisibility */].PublicInvisible;
                }
                updateState(column.visibility);
            };
            function updateState(visibility) {
                var isPrivate = visibility === __WEBPACK_IMPORTED_MODULE_4__config__["a" /* ColumnVisibility */].PublicInvisible;
                if (isPrivate) {
                    button.className =
                        "sa-datatables__svg-button sa-datatables__svg-button--active";
                    button.title = __WEBPACK_IMPORTED_MODULE_5__localizationManager__["a" /* localization */].getString("makePublicColumn");
                    makePrivateSvg.style.display = "block";
                    makePublicSvg.style.display = "none";
                }
                else {
                    button.className = "sa-datatables__svg-button";
                    button.title = __WEBPACK_IMPORTED_MODULE_5__localizationManager__["a" /* localization */].getString("makePrivateColumn");
                    makePrivateSvg.style.display = "none";
                    makePublicSvg.style.display = "block";
                }
            }
            return button;
        };
        _this.createAddColumnButton = function (datatableApi) {
            var selector = document.createElement("select");
            selector.className = "sa-datatables__add-column";
            selector.onclick = function (e) {
                e.stopPropagation();
            };
            var hiddenColumns = _this.columns.filter(function (column) { return column.visibility === __WEBPACK_IMPORTED_MODULE_4__config__["a" /* ColumnVisibility */].Invisible; });
            if (hiddenColumns.length === 0) {
                return;
            }
            var option = document.createElement("option");
            option.text = __WEBPACK_IMPORTED_MODULE_5__localizationManager__["a" /* localization */].getString("showColumn");
            option.disabled = true;
            option.selected = true;
            selector.appendChild(option);
            hiddenColumns.forEach(function (column) {
                var option = document.createElement("option");
                var text = column.displayName;
                if (text.length > 20) {
                    text = text.substring(0, 20) + "...";
                }
                option.text = text;
                option.title = column.displayName;
                option.value = column.name;
                selector.appendChild(option);
            });
            var self = _this;
            selector.onchange = function (e) {
                var _this = this;
                e.stopPropagation();
                if (!__WEBPACK_IMPORTED_MODULE_1_jquery__(this).val())
                    return;
                var column = self._columns.filter(function (column) { return column.name === __WEBPACK_IMPORTED_MODULE_1_jquery__(_this).val(); })[0];
                column.visibility = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* ColumnVisibility */].Visible;
                datatableApi.column(column.name + ":name").visible(true);
                // TODO: Use datatables to update headers (show columns options)
                self.update();
                self.onColumnsChanged();
            };
            return selector;
        };
        _this.createDragButton = function (datatableApi, colIdx, columnName) {
            var button = document.createElement("button");
            button.className = "sa-datatables__svg-button sa-datatables__drag-button";
            button.appendChild(_this.createSvgElement("drag"));
            button.onclick = function (e) {
                e.stopPropagation();
            };
            return button;
        };
        _this.createSortButton = function (datatableApi, colIdx, columnName) {
            var button = document.createElement("button");
            var descTitle = __WEBPACK_IMPORTED_MODULE_5__localizationManager__["a" /* localization */].getString("descOrder");
            var ascTitle = __WEBPACK_IMPORTED_MODULE_5__localizationManager__["a" /* localization */].getString("ascOrder");
            button.className = "sa-datatables__svg-button";
            button.title = ascTitle;
            button.appendChild(_this.createSvgElement("sorting"));
            button.onclick = function (e) {
                button.title = button.title == ascTitle ? descTitle : ascTitle;
            };
            button.ondrag = function (e) {
                e.stopPropagation;
            };
            return button;
        };
        _this.createMoveToDetailButton = function (datatableApi, colIdx, columnName) {
            var button = document.createElement("button");
            button.title = __WEBPACK_IMPORTED_MODULE_5__localizationManager__["a" /* localization */].getString("moveToDetail");
            button.className = "sa-datatables__svg-button";
            button.appendChild(_this.createSvgElement("movetodetails"));
            button.onclick = function (e) {
                e.stopPropagation();
                _this._columns.filter(function (column) { return column.name === columnName; })[0].location =
                    __WEBPACK_IMPORTED_MODULE_4__config__["c" /* QuestionLocation */].Row;
                _this.update();
                _this.onColumnsChanged();
            };
            return button;
        };
        _this.createShowAsColumnButton = function (columnName) {
            var button = document.createElement("button");
            button.innerHTML = __WEBPACK_IMPORTED_MODULE_5__localizationManager__["a" /* localization */].getString("showAsColumn");
            button.className = "sa-datatables__button sa-datatables__button--gray";
            button.onclick = function (e) {
                e.stopPropagation();
                _this._columns.filter(function (column) { return column.name === columnName; })[0].location =
                    __WEBPACK_IMPORTED_MODULE_4__config__["c" /* QuestionLocation */].Column;
                _this.update();
                _this.onColumnsChanged();
            };
            return button;
        };
        targetNode.className += "sa-datatables";
        _this.headerButtonCreators = [
            // this.createGroupingButton,
            _this.createSortButton,
            _this.createHideButton,
            _this.createMoveToDetailButton,
            _this.createDragButton,
        ];
        if (_this.isTrustedAccess) {
            _this.headerButtonCreators.splice(2, 0, _this.createColumnPrivateButton);
        }
        _this.detailButtonCreators = [_this.createShowAsColumnButton];
        if (_columns.length === 0) {
            _this._columns = _this.buildColumns(survey);
        }
        return _this;
    }
    DataTables.prototype.onColumnsChanged = function () {
        this.columnsChanged.fire(this, { survey: this.survey });
    };
    Object.defineProperty(DataTables.prototype, "columns", {
        get: function () {
            return [].concat(this._columns);
        },
        set: function (columns) {
            this._columns = columns;
            this.update(true);
        },
        enumerable: true,
        configurable: true
    });
    DataTables.prototype.update = function (hard) {
        if (hard === void 0) { hard = false; }
        if (this.isRendered) {
            if (hard) {
                this.initTableData(this.data);
            }
            this.currentPageNumber = this.datatableApi.page.info().page;
            this.destroy();
            this.render();
        }
    };
    Object.defineProperty(DataTables.prototype, "isRendered", {
        get: function () {
            return this.targetNode.children.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    DataTables.prototype.destroy = function () {
        //if(!this.targetNode) return;
        var tableNode = this.targetNode.children[0];
        if (__WEBPACK_IMPORTED_MODULE_1_jquery__["fn"].DataTable.isDataTable(tableNode)) {
            __WEBPACK_IMPORTED_MODULE_1_jquery__(tableNode).DataTable().destroy();
        }
        this.datatableApi = undefined;
        this.targetNode.innerHTML = "";
    };
    DataTables.prototype.createActionContainer = function () {
        var container = document.createElement("div");
        container.className = "sa-datatables__action-container";
        return container;
    };
    DataTables.prototype.createMinorColumnsButton = function () {
        var button = document.createElement("button");
        button.title = __WEBPACK_IMPORTED_MODULE_5__localizationManager__["a" /* localization */].getString("showMinorColumns");
        button.className = "sa-datatables__svg-button";
        button.appendChild(this.createSvgElement("detail"));
        return button;
    };
    DataTables.prototype.setMinorColumnsButtonCallback = function (datatableApiRef) {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_1_jquery__(datatableApiRef.table().body()).on("click", "td.sa-datatables__action-column button.sa-datatables__svg-button", function () {
            var detailTr = __WEBPACK_IMPORTED_MODULE_1_jquery__(this).closest("tr");
            var row = datatableApiRef.row(detailTr);
            if (detailTr.hasClass("sa-datatables__detail-row")) {
                detailTr.nextAll("tr.sa-datatables__detail").remove();
                detailTr.removeClass("sa-datatables__detail-row");
            }
            else {
                var data = self.data[row.index()];
                __WEBPACK_IMPORTED_MODULE_1_jquery__(self.createDetailMarkup(data, row)).insertAfter(detailTr);
                detailTr.addClass("sa-datatables__detail-row");
            }
        });
    };
    DataTables.prototype.render = function () {
        var _this = this;
        var self = this;
        var tableNode = document.createElement("table");
        var columns = this.getColumns();
        var columnsData = columns.map(function (c) { return c.data; });
        var dtButtonClass = "sa-datatables__button sa-datatables__button--small sa-datatables__button--gray";
        var options = __WEBPACK_IMPORTED_MODULE_1_jquery__["extend"](true, {
            buttons: [
                { extend: "copy", className: dtButtonClass },
                { extend: "csv", className: dtButtonClass },
                { extend: "print", className: dtButtonClass },
            ],
            dom: "Bfplrtip",
            data: this.tableData,
            pageLength: 5,
            lengthMenu: [1, 5, 10, 25, 50, 75, 100],
            responsive: false,
            scrollX: true,
            columns: columns,
            colReorder: {
                fixedColumnsLeft: 1,
                realtime: false,
            },
            // orderFixed: [[1, "asc"]],
            rowGroup: {
                dataSrc: columnsData[0],
                endRender: function (rows, group) {
                    return "Count: " + rows.data().count();
                },
            },
            language: {
                sSearch: " ",
                searchPlaceholder: "Search...",
                sLengthMenu: "Show _MENU_ entries",
                paginate: {
                    previous: " ",
                    next: " ",
                },
            },
            select: "api",
            headerCallback: function (thead, data, start, end, display) {
                var datatableApi = __WEBPACK_IMPORTED_MODULE_1_jquery__(tableNode).dataTable().api();
                var self = _this;
                __WEBPACK_IMPORTED_MODULE_1_jquery__(thead)
                    .children("th")
                    .each(function (index) {
                    var $thNode = __WEBPACK_IMPORTED_MODULE_1_jquery__(this);
                    if (!!columnsData[index] && $thNode.has("button").length === 0) {
                        var container = self.createActionContainer();
                        self.headerButtonCreators.forEach(function (creator) {
                            var element = creator(datatableApi, index, columnsData[index]);
                            if (!!element) {
                                container.appendChild(element);
                            }
                        });
                        var filterContainer = document.createElement("div");
                        filterContainer.className = "sa-datatables__filter-container";
                        filterContainer.innerHTML =
                            "<input type='text' placeholder='Search...' />";
                        var column = datatableApi.column(index);
                        __WEBPACK_IMPORTED_MODULE_1_jquery__("input", __WEBPACK_IMPORTED_MODULE_1_jquery__(filterContainer)).on("click", function (e) {
                            return e.stopPropagation();
                        });
                        __WEBPACK_IMPORTED_MODULE_1_jquery__("input", __WEBPACK_IMPORTED_MODULE_1_jquery__(filterContainer)).on("keyup change", function () {
                            var value = this.value;
                            if (column.search() !== value) {
                                column.search(value).draw(false);
                            }
                        });
                        $thNode.prepend(filterContainer);
                        $thNode.prepend(container);
                    }
                });
            },
        }, this.options);
        this.targetNode.appendChild(tableNode);
        tableNode.width = "100%";
        tableNode.className = "sa-datatables__table display responsive dataTable";
        var datatableApiRef = (this.datatableApi = __WEBPACK_IMPORTED_MODULE_1_jquery__(tableNode).DataTable(options));
        datatableApiRef.page(self.currentPageNumber);
        this.datatableApi.rowGroup().enable(false).draw(false);
        // this.datatableApi.on("rowgroup-datasrc", (e, dt, val) => {
        //   this.datatableApi.order.fixed({ pre: [[columnsData.indexOf(val), "asc"]] }).draw();
        // });
        var target = __WEBPACK_IMPORTED_MODULE_1_jquery__(this.targetNode).find(".dataTables_filter");
        var button = this.createAddColumnButton(this.datatableApi);
        __WEBPACK_IMPORTED_MODULE_1_jquery__(button).insertAfter(target[0]);
        datatableApiRef.on("column-reorder", function (e, settings, details) {
            var deletedColumns = _this._columns.splice(details.from - 1, 1);
            _this._columns.splice(details.to - 1, 0, deletedColumns[0]);
            var headerCell = __WEBPACK_IMPORTED_MODULE_1_jquery__(datatableApiRef.column(details.to).header());
            _this.setMinorColumnsButtonCallback(datatableApiRef);
            _this.onColumnsChanged();
        });
        this.setMinorColumnsButtonCallback(datatableApiRef);
    };
    DataTables.prototype.createDetailMarkup = function (data, datatablesRow) {
        var _this = this;
        // var table = document.createElement("table");
        // table.cellPadding = "5";
        // table.cellSpacing = "0";
        // table.border = "0";
        // table.className = "sa-datatables__detail";
        var rows = [];
        var self = this;
        var visibleColCount = self.columns.filter(function (column) {
            return column.location === __WEBPACK_IMPORTED_MODULE_4__config__["c" /* QuestionLocation */].Column &&
                _this.isVisible(column.visibility);
        }).length;
        this.columns
            .filter(function (column) {
            return column.location === __WEBPACK_IMPORTED_MODULE_4__config__["c" /* QuestionLocation */].Row &&
                _this.isVisible(column.visibility);
        })
            .forEach(function (column) {
            var row = document.createElement("tr");
            row.className = "sa-datatables__detail";
            var td1 = document.createElement("td");
            td1.textContent = column.displayName;
            td1.colSpan = 2;
            var td2 = document.createElement("td");
            td2.textContent = data[column.name];
            var td3 = document.createElement("td");
            td3.colSpan = Math.max(visibleColCount - 2, 1);
            self.detailButtonCreators.forEach(function (creator) {
                return td3.appendChild(creator(column.name));
            });
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            rows.push(row);
        });
        // if (!!this.datatableApi && this.datatableApi.responsive.hasHidden()) {
        //   var columnsVisibility = this.datatableApi.columns().responsiveHidden();
        //   var columns = this.datatableApi.settings().init().columns;
        //   for (var index = 0; index < columnsVisibility.length; index++) {
        //     if (!columnsVisibility[index]) {
        //       var column = columns[index];
        //       var row = document.createElement("tr");
        //       row.className = "sa-datatables__detail";
        //       var td1 = document.createElement("td");
        //       td1.textContent = column.sTitle;
        //       var td2 = document.createElement("td");
        //       td2.textContent = data[column.mData];
        //       var td3 = document.createElement("td");
        //       //this.detailButtonCreators.forEach(creator => td3.appendChild(creator(column.mData)));
        //       row.appendChild(td1);
        //       row.appendChild(td2);
        //       row.appendChild(td3);
        //       rows.push(row);
        //     }
        //   }
        // }
        if (!!this.renderDetailActions) {
            var row = document.createElement("tr");
            row.className = "sa-datatables__detail";
            var td = document.createElement("td");
            td.colSpan = visibleColCount + 1;
            row.appendChild(td);
            // var td1 = document.createElement("td");
            // row.appendChild(td1);
            // var td2 = document.createElement("td");
            // row.appendChild(td2);
            rows.push(row);
            this.renderDetailActions(td, data, datatablesRow);
        }
        return rows;
    };
    DataTables.prototype.doStateSave = function () {
        this.datatableApi.state.save();
    };
    DataTables.prototype.stateSaveCallback = function (settings, data) { };
    DataTables.prototype.getColumns = function () {
        var _this = this;
        var availableColumns = this.getAvailableColumns();
        var columns = availableColumns.map(function (column, index) {
            var question = _this.survey.getQuestionByName(column.name);
            return {
                data: column.name,
                sTitle: (question && question.title) || column.displayName,
                visible: column.visibility !== __WEBPACK_IMPORTED_MODULE_4__config__["a" /* ColumnVisibility */].Invisible,
                mRender: function (data, type, row) {
                    var value = row[column.name];
                    return typeof value === "string"
                        ? __WEBPACK_IMPORTED_MODULE_1_jquery__("<div>").text(value).html()
                        : JSON.stringify(value);
                },
            };
        });
        return [
            {
                className: "sa-datatables__action-column",
                orderable: false,
                data: null,
                defaultContent: this.createMinorColumnsButton().outerHTML,
            },
        ].concat(columns);
    };
    DataTables.prototype.layout = function () {
        !!this.datatableApi && this.datatableApi.columns.adjust();
    };
    return DataTables;
}(__WEBPACK_IMPORTED_MODULE_2__table__["a" /* Table */]));



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__table__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabulator_scss__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabulator_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__tabulator_scss__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabulator; });





var TabulatorTables = __webpack_require__(28);
if (!!document) {
    var svgTemplate = __webpack_require__(11);
    var templateHolder = document.createElement("div");
    templateHolder.style.display = "none";
    templateHolder.innerHTML = svgTemplate;
    document.head.appendChild(templateHolder);
}
var Tabulator = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Tabulator, _super);
    function Tabulator(targetNode, survey, data, options, _columns, isTrustedAccess) {
        if (_columns === void 0) { _columns = []; }
        if (isTrustedAccess === void 0) { isTrustedAccess = false; }
        var _this = _super.call(this, targetNode, survey, data, options, _columns, isTrustedAccess) || this;
        _this.tabulatorTables = null;
        _this.toolsContainer = null;
        _this.tableContainer = null;
        _this.render = function () {
            var columns = _this.getColumns();
            var data = _this.tableData;
            _this.toolsContainer = document.createElement("div");
            _this.tableContainer = document.createElement("div");
            _this.targetNode.innerHTML = "";
            _this.targetNode.appendChild(_this.toolsContainer);
            _this.targetNode.appendChild(_this.tableContainer);
            _this.tabulatorTables = new TabulatorTables(_this.tableContainer, {
                data: data,
                layout: "fitColumns",
                pagination: "local",
                paginationSize: 5,
                movableColumns: true,
                columns: columns,
                rowFormatter: _this.rowFormatter,
            });
            _this.renderTools();
        };
        _this.renderTools = function () {
            var toolsContainer = _this.toolsContainer;
            var showColumnDropdown = _this.getShowColumnDropdown();
            toolsContainer.innerHTML = "";
            toolsContainer.appendChild(showColumnDropdown);
        };
        _this.getShowColumnDropdown = function () {
            var dropdown = document.createElement("select");
            var hiddenColumns = _this.columns.filter(function (column) { return column.visibility === __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Invisible; });
            var option = document.createElement("option");
            option.text = __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("showColumn");
            option.disabled = true;
            option.selected = true;
            dropdown.appendChild(option);
            hiddenColumns.forEach(function (column) {
                var option = document.createElement("option");
                var text = column.displayName;
                if (text.length > 20) {
                    text = text.substring(0, 20) + "...";
                }
                option.text = text;
                option.title = column.displayName;
                option.value = column.name;
                dropdown.appendChild(option);
            });
            var self = _this;
            dropdown.onchange = function (e) {
                var val = e.target.value;
                e.stopPropagation();
                if (!val)
                    return;
                var column = self._columns.filter(function (column) { return column.name === val; })[0];
                column.visibility = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Visible;
                self.tabulatorTables.toggleColumn(column.name);
                self.update();
            };
            return dropdown;
        };
        _this.destroy = function () {
            _this.tabulatorTables.destroy();
            _this.targetNode.innerHTML = "";
        };
        _this.getTitleFormatter = function (cell, formatterParams, onRendered, columnName) {
            //build dropdown
            var hideColumnBtn = document.createElement("button");
            hideColumnBtn.style.display = "block";
            hideColumnBtn.innerHTML = "<span> hide </span>";
            hideColumnBtn.onclick = function () {
                _this._columns.filter(function (column) { return column.name === columnName; })[0].visibility = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Invisible;
                _this.tabulatorTables.toggleColumn(columnName);
                _this.update();
            };
            //set header title
            var title = document.createElement("div");
            title.style.height = "50px";
            title.innerHTML = cell.getValue();
            //add menu to title
            title.appendChild(hideColumnBtn);
            return title;
        };
        _this.getColumns = function () {
            var availableColumns = _this.getAvailableColumns();
            var columns = availableColumns.map(function (column, index) {
                var question = _this.survey.getQuestionByName(column.name);
                return {
                    field: column.name,
                    title: (question && question.title) || column.displayName,
                    visible: column.visibility !== __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ColumnVisibility */].Invisible,
                    headerFilter: true,
                    titleFormatter: function (cell, formatterParams, onRendered) {
                        return _this.getTitleFormatter(cell, formatterParams, onRendered, column.name);
                    },
                };
            });
            // add special column (collapse/expand)
            columns.unshift({
                field: "",
                title: "",
            });
            return columns;
        };
        var self = _this;
        targetNode.className += "sa-tabulator";
        if (_columns.length === 0) {
            self._columns = self.buildColumns(survey);
        }
        return _this;
    }
    Tabulator.prototype.update = function () {
        this.renderTools();
    };
    Tabulator.prototype.rowFormatter = function (row) {
        var specialColumnElement = row.getCells()[0].getElement();
        var hidden = document.createElement("div");
        hidden.innerHTML = "<p>hidden info</p>";
        hidden.style.display = "none";
        specialColumnElement.onclick = function () {
            if (hidden.style.display === "none") {
                hidden.style.display = "block";
            }
            else {
                hidden.style.display = "none";
            }
            row.normalizeHeight(); //recalculate the row height
        };
        row.getElement().appendChild(hidden);
    };
    return Tabulator;
}(__WEBPACK_IMPORTED_MODULE_1__table__["a" /* Table */]));



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_scss__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__text_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__text_scss__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Text; });




var Text = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Text, _super);
    function Text(targetElement, question, data, options) {
        return _super.call(this, targetElement, question, data, options) || this;
    }
    Object.defineProperty(Text.prototype, "name", {
        get: function () {
            return "text";
        },
        enumerable: true,
        configurable: true
    });
    Text.prototype.getData = function () {
        var _this = this;
        var result = [];
        var columnsCount = 0;
        this.data.forEach(function (row) {
            var rowValue = row[_this.question.name];
            var dataStrings = [];
            if (!!rowValue) {
                if (Array.isArray(rowValue)) {
                    dataStrings.concat(rowValue);
                }
                else {
                    if (typeof rowValue === "object") {
                        Object.keys(rowValue).forEach(function (key) { return dataStrings.push(rowValue[key]); });
                    }
                    else {
                        dataStrings.push(rowValue);
                    }
                }
                result.push(dataStrings);
                if (dataStrings.length > columnsCount) {
                    columnsCount = dataStrings.length;
                }
            }
        });
        return { columnsCount: columnsCount, data: result };
    };
    Text.prototype.renderContent = function (container) {
        var _a = this.getData(), columnsCount = _a.columnsCount, data = _a.data;
        var emptyTextNode = document.createElement("p");
        emptyTextNode.innerHTML = "There are no results yet";
        if (data.length === 0) {
            container.appendChild(emptyTextNode);
            return;
        }
        var tableNode = document.createElement("table");
        tableNode.className = "sa-text-table";
        tableNode.style.backgroundColor = this.backgroundColor;
        container.appendChild(tableNode);
        data.forEach(function (rowData) {
            var row = document.createElement("tr");
            for (var i = 0; i < columnsCount; i++) {
                var td = document.createElement("td");
                td.className = "sa-text-table__cell";
                td.textContent = rowData[i];
                row.appendChild(td);
            }
            tableNode.appendChild(row);
        });
        container.className = "sa-text-table__container";
        container.appendChild(tableNode);
    };
    Text.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.targetElement.className = "";
    };
    return Text;
}(__WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a" /* VisualizerBase */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("text", Text);
__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("comment", Text);
__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("multipletext", Text);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizationManager__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationPanelDynamic__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizationMatrixDynamic; });



var VisualizationMatrixDynamic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](VisualizationMatrixDynamic, _super);
    function VisualizationMatrixDynamic(targetElement, question, data, options) {
        return _super.call(this, targetElement, question, data, options) || this;
    }
    VisualizationMatrixDynamic.prototype.getQuestions = function () {
        var matrixdynamic = this.question;
        var visibleRows = matrixdynamic.visibleRows;
        if (visibleRows.length === 0)
            return [];
        return visibleRows[0].cells.map(function (c) { return c.question; });
    };
    return VisualizationMatrixDynamic;
}(__WEBPACK_IMPORTED_MODULE_2__visualizationPanelDynamic__["a" /* VisualizationPanelDynamic */]));

__WEBPACK_IMPORTED_MODULE_1__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("matrixdynamic", VisualizationMatrixDynamic);
__WEBPACK_IMPORTED_MODULE_1__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("matrixdropdown", VisualizationMatrixDynamic);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wordcloud__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wordcloud___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wordcloud__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizationManager__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stopwords_index__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordCloud; });





var WordCloud = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](WordCloud, _super);
    function WordCloud(targetElement, question, data, options) {
        return _super.call(this, targetElement, question, data, options) || this;
    }
    Object.defineProperty(WordCloud.prototype, "name", {
        get: function () {
            return "wordcloud";
        },
        enumerable: true,
        configurable: true
    });
    WordCloud.prototype.getData = function () {
        var _this = this;
        var result = {};
        var stopWords = __WEBPACK_IMPORTED_MODULE_4__stopwords_index__["a" /* textHelper */].getStopWords();
        var stopTheWord = function (word) {
            if (stopWords.indexOf(word) !== -1) {
                return "";
            }
            return word;
        };
        var processString = function (row) {
            row = "" + row;
            if (!!row) {
                row.split(" ").forEach(function (word) {
                    word = stopTheWord(word.toLowerCase() || "");
                    if (!!word) {
                        if (!result[word]) {
                            result[word] = 1;
                        }
                        else {
                            result[word]++;
                        }
                    }
                });
            }
        };
        this.data.forEach(function (row) {
            var rowValue = row[_this.question.name];
            if (!!rowValue) {
                if (Array.isArray(rowValue)) {
                    rowValue.forEach(processString);
                }
                else {
                    if (typeof rowValue === "object") {
                        Object.keys(rowValue).forEach(function (key) { return processString(rowValue[key]); });
                    }
                    else {
                        processString(rowValue);
                    }
                }
            }
        });
        return Object.keys(result).map(function (key) {
            return [key, result[key]];
        });
    };
    WordCloud.prototype.renderContent = function (container) {
        var _this = this;
        var data = this.getData();
        var colors = this.getColors();
        var canvasNode = document.createElement("canvas");
        var emptyTextNode = document.createElement("p");
        emptyTextNode.innerHTML = "There are no results yet";
        if (data.length === 0) {
            container.appendChild(emptyTextNode);
            return;
        }
        container.appendChild(canvasNode);
        var config = {
            list: data,
            weightFactor: 20,
            fontFamily: "Segoe UI Bold, sans-serif",
            color: function (word, weight) {
                return _this.getRandomColor();
            },
            rotateRatio: 0.5,
            rotationSteps: 2,
            backgroundColor: this.backgroundColor,
            click: function (item) {
                console.log(item[0] + ": " + item[1]);
            }
        };
        this.cloud = __WEBPACK_IMPORTED_MODULE_1_wordcloud___default()(canvasNode, config);
    };
    WordCloud.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        if (!!this.cloud) {
            this.cloud = undefined;
        }
    };
    return WordCloud;
}(__WEBPACK_IMPORTED_MODULE_2__visualizerBase__["a" /* VisualizerBase */]));

__WEBPACK_IMPORTED_MODULE_3__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("text", WordCloud);
__WEBPACK_IMPORTED_MODULE_3__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("comment", WordCloud);
__WEBPACK_IMPORTED_MODULE_3__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("multipletext", WordCloud);


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Muuri v0.8.0
* https://github.com/haltu/muuri
* Copyright (c) 2015-present, Haltu Oy
* Released under the MIT license
* https://github.com/haltu/muuri/blob/master/LICENSE.md
* @license MIT
*
* Muuri Packer
* Copyright (c) 2016-present, Niklas Rämö <inramo@gmail.com>
* @license MIT
*
* Muuri Ticker / Muuri Emitter / Muuri Queue
* Copyright (c) 2018-present, Niklas Rämö <inramo@gmail.com>
* @license MIT
*/

(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Muuri = factory());
}(this, function () { 'use strict';

  var namespace = 'Muuri';
  var gridInstances = {};

  var actionSwap = 'swap';
  var actionMove = 'move';

  var eventSynchronize = 'synchronize';
  var eventLayoutStart = 'layoutStart';
  var eventLayoutEnd = 'layoutEnd';
  var eventAdd = 'add';
  var eventRemove = 'remove';
  var eventShowStart = 'showStart';
  var eventShowEnd = 'showEnd';
  var eventHideStart = 'hideStart';
  var eventHideEnd = 'hideEnd';
  var eventFilter = 'filter';
  var eventSort = 'sort';
  var eventMove = 'move';
  var eventSend = 'send';
  var eventBeforeSend = 'beforeSend';
  var eventReceive = 'receive';
  var eventBeforeReceive = 'beforeReceive';
  var eventDragInit = 'dragInit';
  var eventDragStart = 'dragStart';
  var eventDragMove = 'dragMove';
  var eventDragScroll = 'dragScroll';
  var eventDragEnd = 'dragEnd';
  var eventDragReleaseStart = 'dragReleaseStart';
  var eventDragReleaseEnd = 'dragReleaseEnd';
  var eventDestroy = 'destroy';

  /**
   * Event emitter constructor.
   *
   * @class
   */
  function Emitter() {
    this._events = {};
    this._queue = [];
    this._counter = 0;
    this._isDestroyed = false;
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Bind an event listener.
   *
   * @public
   * @memberof Emitter.prototype
   * @param {String} event
   * @param {Function} listener
   * @returns {Emitter}
   */
  Emitter.prototype.on = function(event, listener) {
    if (this._isDestroyed) return this;

    // Get listeners queue and create it if it does not exist.
    var listeners = this._events[event];
    if (!listeners) listeners = this._events[event] = [];

    // Add the listener to the queue.
    listeners.push(listener);

    return this;
  };

  /**
   * Unbind all event listeners that match the provided listener function.
   *
   * @public
   * @memberof Emitter.prototype
   * @param {String} event
   * @param {Function} [listener]
   * @returns {Emitter}
   */
  Emitter.prototype.off = function(event, listener) {
    if (this._isDestroyed) return this;

    // Get listeners and return immediately if none is found.
    var listeners = this._events[event];
    if (!listeners || !listeners.length) return this;

    // If no specific listener is provided remove all listeners.
    if (!listener) {
      listeners.length = 0;
      return this;
    }

    // Remove all matching listeners.
    var i = listeners.length;
    while (i--) {
      if (listener === listeners[i]) listeners.splice(i, 1);
    }

    return this;
  };

  /**
   * Emit all listeners in a specified event with the provided arguments.
   *
   * @public
   * @memberof Emitter.prototype
   * @param {String} event
   * @param {*} [arg1]
   * @param {*} [arg2]
   * @param {*} [arg3]
   * @returns {Emitter}
   */
  Emitter.prototype.emit = function(event, arg1, arg2, arg3) {
    if (this._isDestroyed) return this;

    // Get event listeners and quit early if there's no listeners.
    var listeners = this._events[event];
    if (!listeners || !listeners.length) return this;

    var queue = this._queue;
    var qLength = queue.length;
    var aLength = arguments.length - 1;
    var i;

    // Add the current listeners to the callback queue before we process them.
    // This is necessary to guarantee that all of the listeners are called in
    // correct order even if new event listeners are removed/added during
    // processing and/or events are emitted during processing.
    for (i = 0; i < listeners.length; i++) {
      queue.push(listeners[i]);
    }

    // Increment queue counter. This is needed for the scenarios where emit is
    // triggered while the queue is already processing. We need to keep track of
    // how many "queue processors" there are active so that we can safely reset
    // the queue in the end when the last queue processor is finished.
    ++this._counter;

    // Process the queue (the specific part of it for this emit).
    for (i = qLength, qLength = queue.length; i < qLength; i++) {
      // prettier-ignore
      aLength === 0 ? queue[i]() :
      aLength === 1 ? queue[i](arg1) :
      aLength === 2 ? queue[i](arg1, arg2) :
                      queue[i](arg1, arg2, arg3);

      // Stop processing if the emitter is destroyed.
      if (this._isDestroyed) return this;
    }

    // Decrement queue process counter.
    --this._counter;

    // Reset the queue if there are no more queue processes running.
    if (!this._counter) queue.length = 0;

    return this;
  };

  /**
   * Destroy emitter instance. Basically just removes all bound listeners.
   *
   * @public
   * @memberof Emitter.prototype
   * @returns {Emitter}
   */
  Emitter.prototype.destroy = function() {
    if (this._isDestroyed) return this;

    var events = this._events;
    var event;

    // Flag as destroyed.
    this._isDestroyed = true;

    // Reset queue (if queue is currently processing this will also stop that).
    this._queue.length = this._counter = 0;

    // Remove all listeners.
    for (event in events) {
      if (events[event]) {
        events[event].length = 0;
        events[event] = undefined;
      }
    }

    return this;
  };

  // Set up the default export values.
  var transformStyle = 'transform';
  var transformProp = 'transform';

  // Find the supported transform prop and style names.
  var docElemStyle = window.document.documentElement.style;
  var style = 'transform';
  var styleCap = 'Transform';
  var found = false;
  ['', 'Webkit', 'Moz', 'O', 'ms'].forEach(function(prefix) {
    if (found) return;
    var propName = prefix ? prefix + styleCap : style;
    if (docElemStyle[propName] !== undefined) {
      prefix = prefix.toLowerCase();
      transformStyle = prefix ? '-' + prefix + '-' + style : style;
      transformProp = propName;
      found = true;
    }
  });

  var stylesCache = typeof WeakMap === 'function' ? new WeakMap() : null;

  /**
   * Returns the computed value of an element's style property as a string.
   *
   * @param {HTMLElement} element
   * @param {String} style
   * @returns {String}
   */
  function getStyle(element, style) {
    var styles = stylesCache && stylesCache.get(element);
    if (!styles) {
      styles = window.getComputedStyle(element, null);
      if (stylesCache) stylesCache.set(element, styles);
    }
    return styles.getPropertyValue(style === 'transform' ? transformStyle : style);
  }

  var styleNameRegEx = /([A-Z])/g;

  /**
   * Transforms a camel case style property to kebab case style property.
   *
   * @param {String} string
   * @returns {String}
   */
  function getStyleName(string) {
    return string.replace(styleNameRegEx, '-$1').toLowerCase();
  }

  var strFunction = 'function';

  /**
   * Check if a value is a function.
   *
   * @param {*} val
   * @returns {Boolean}
   */
  function isFunction(val) {
    return typeof val === strFunction;
  }

  var transformStyle$1 = 'transform';

  /**
   * Set inline styles to an element.
   *
   * @param {HTMLElement} element
   * @param {Object} styles
   */
  function setStyles(element, styles) {
    for (var prop in styles) {
      element.style[prop === transformStyle$1 ? transformProp : prop] = styles[prop];
    }
  }

  /**
   * Item animation handler powered by Web Animations API.
   *
   * @class
   * @param {HTMLElement} element
   */
  function ItemAnimate(element) {
    this._element = element;
    this._animation = null;
    this._callback = null;
    this._props = [];
    this._values = [];
    this._keyframes = [];
    this._options = {};
    this._isDestroyed = false;
    this._onFinish = this._onFinish.bind(this);
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Start instance's animation. Automatically stops current animation if it is
   * running.
   *
   * @public
   * @memberof ItemAnimate.prototype
   * @param {Object} propsFrom
   * @param {Object} propsTo
   * @param {Object} [options]
   * @param {Number} [options.duration=300]
   * @param {String} [options.easing='ease']
   * @param {Function} [options.onFinish]
   */
  ItemAnimate.prototype.start = function(propsFrom, propsTo, options) {
    if (this._isDestroyed) return;

    var animation = this._animation;
    var currentProps = this._props;
    var currentValues = this._values;
    var opts = options || 0;
    var cancelAnimation = false;

    // If we have an existing animation running, let's check if it needs to be
    // cancelled or if it can continue running.
    if (animation) {
      var propCount = 0;
      var propIndex;

      // Check if the requested animation target props and values match with the
      // current props and values.
      for (var propName in propsTo) {
        ++propCount;
        propIndex = currentProps.indexOf(propName);
        if (propIndex === -1 || propsTo[propName] !== currentValues[propIndex]) {
          cancelAnimation = true;
          break;
        }
      }

      // Check if the target props count matches current props count. This is
      // needed for the edge case scenario where target props contain the same
      // styles as current props, but the current props have some additional
      // props.
      if (!cancelAnimation && propCount !== currentProps.length) {
        cancelAnimation = true;
      }
    }

    // Cancel animation (if required).
    if (cancelAnimation) animation.cancel();

    // Store animation callback.
    this._callback = isFunction(opts.onFinish) ? opts.onFinish : null;

    // If we have a running animation that does not need to be cancelled, let's
    // call it a day here and let it run.
    if (animation && !cancelAnimation) return;

    // Store target props and values to instance.
    currentProps.length = currentValues.length = 0;
    for (propName in propsTo) {
      currentProps.push(propName);
      currentValues.push(propsTo[propName]);
    }

    // Set up keyframes.
    var animKeyframes = this._keyframes;
    animKeyframes[0] = propsFrom;
    animKeyframes[1] = propsTo;

    // Set up options.
    var animOptions = this._options;
    animOptions.duration = opts.duration || 300;
    animOptions.easing = opts.easing || 'ease';

    // Start the animation
    var element = this._element;
    animation = element.animate(animKeyframes, animOptions);
    animation.onfinish = this._onFinish;
    this._animation = animation;

    // Set the end styles. This makes sure that the element stays at the end
    // values after animation is finished.
    setStyles(element, propsTo);
  };

  /**
   * Stop instance's current animation if running.
   *
   * @public
   * @memberof ItemAnimate.prototype
   * @param {Object} [styles]
   */
  ItemAnimate.prototype.stop = function(styles) {
    if (this._isDestroyed || !this._animation) return;

    var element = this._element;
    var currentProps = this._props;
    var currentValues = this._values;
    var propName;
    var propValue;
    var i;

    // Calculate (if not provided) and set styles.
    if (!styles) {
      for (i = 0; i < currentProps.length; i++) {
        propName = currentProps[i];
        propValue = getStyle(element, getStyleName(propName));
        element.style[propName === 'transform' ? transformProp : propName] = propValue;
      }
    } else {
      setStyles(element, styles);
    }

    //  Cancel animation.
    this._animation.cancel();
    this._animation = this._callback = null;

    // Reset current props and values.
    currentProps.length = currentValues.length = 0;
  };

  /**
   * Check if the item is being animated currently.
   *
   * @public
   * @memberof ItemAnimate.prototype
   * @return {Boolean}
   */
  ItemAnimate.prototype.isAnimating = function() {
    return !!this._animation;
  };

  /**
   * Destroy the instance and stop current animation if it is running.
   *
   * @public
   * @memberof ItemAnimate.prototype
   */
  ItemAnimate.prototype.destroy = function() {
    if (this._isDestroyed) return;
    this.stop();
    this._element = this._options = this._keyframes = null;
    this._isDestroyed = true;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Animation end handler.
   *
   * @private
   * @memberof ItemAnimate.prototype
   */
  ItemAnimate.prototype._onFinish = function() {
    var callback = this._callback;
    this._animation = this._callback = null;
    this._props.length = this._values.length = 0;
    callback && callback();
  };

  var vendorPrefixes = ['', 'webkit', 'moz', 'ms', 'o', 'Webkit', 'Moz', 'MS', 'O'];

  /**
   * Get prefixed CSS property name when given a non-prefixed CSS property name.
   * @param {Object} elemStyle
   * @param {String} propName
   * @returns {!String}
   */
  function getPrefixedPropName(elemStyle, propName) {
    var camelPropName = propName[0].toUpperCase() + propName.slice(1);
    var i = 0;
    var prefix;
    var prefixedPropName;

    while (i < vendorPrefixes.length) {
      prefix = vendorPrefixes[i];
      prefixedPropName = prefix ? prefix + camelPropName : propName;
      if (prefixedPropName in elemStyle) return prefixedPropName;
      ++i;
    }

    return null;
  }

  var dt = 1000 / 60;

  var raf = (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      return this.setTimeout(function() {
        callback(dt);
      }, dt);
    }
  ).bind(window);

  // Detect support for passive events:
  // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
  var isPassiveEventsSupported = false;
  try {
    var passiveOpts = Object.defineProperty({}, 'passive', {
      get: function() {
        isPassiveEventsSupported = true;
      }
    });
    window.addEventListener('testPassive', null, passiveOpts);
    window.removeEventListener('testPassive', null, passiveOpts);
  } catch (e) {}

  // Dragger events.
  var events = {
    start: 'start',
    move: 'move',
    end: 'end',
    cancel: 'cancel'
  };

  var hasTouchEvents = !!('ontouchstart' in window || window.TouchEvent);
  var hasPointerEvents = !!window.PointerEvent;
  var hasMsPointerEvents = !!window.navigator.msPointerEnabled;
  var isAndroid = /(android)/i.test(window.navigator.userAgent);
  var listenerOptions = isPassiveEventsSupported ? { passive: true } : false;

  var taProp = 'touchAction';
  var taPropPrefixed = getPrefixedPropName(window.document.documentElement.style, taProp);
  var taDefaultValue = 'auto';

  /**
   * Creates a new Dragger instance for an element.
   *
   * @public
   * @class
   * @param {HTMLElement} element
   * @param {Object} [cssProps]
   */
  function Dragger(element, cssProps) {
    this._element = element;
    this._emitter = new Emitter();
    this._isDestroyed = false;
    this._cssProps = {};
    this._touchAction = '';
    this._startEvent = null;

    this._pointerId = null;
    this._startTime = 0;
    this._startX = 0;
    this._startY = 0;
    this._currentX = 0;
    this._currentY = 0;

    this._preStartCheck = this._preStartCheck.bind(this);
    this._abortNonCancelable = this._abortNonCancelable.bind(this);
    this._onStart = this._onStart.bind(this);
    this._onMove = this._onMove.bind(this);
    this._onCancel = this._onCancel.bind(this);
    this._onEnd = this._onEnd.bind(this);

    // Apply initial css props.
    this.setCssProps(cssProps);

    // If touch action was not provided with initial css props let's assume it's
    // auto.
    if (!this._touchAction) {
      this.setTouchAction(taDefaultValue);
    }

    // Prevent native link/image dragging for the item and it's ancestors.
    element.addEventListener('dragstart', Dragger._preventDefault, false);

    // Listen to start event.
    element.addEventListener(Dragger._events.start, this._preStartCheck, listenerOptions);

    // If we have touch events, but no pointer events we need to also listen for
    // mouse events in addition to touch events for devices which support both
    // mouse and touch interaction.
    if (hasTouchEvents && !hasPointerEvents && !hasMsPointerEvents) {
      element.addEventListener(Dragger._mouseEvents.start, this._preStartCheck, listenerOptions);
    }
  }

  /**
   * Protected properties
   * ********************
   */

  Dragger._pointerEvents = {
    start: 'pointerdown',
    move: 'pointermove',
    cancel: 'pointercancel',
    end: 'pointerup'
  };

  Dragger._msPointerEvents = {
    start: 'MSPointerDown',
    move: 'MSPointerMove',
    cancel: 'MSPointerCancel',
    end: 'MSPointerUp'
  };

  Dragger._touchEvents = {
    start: 'touchstart',
    move: 'touchmove',
    cancel: 'touchcancel',
    end: 'touchend'
  };

  Dragger._mouseEvents = {
    start: 'mousedown',
    move: 'mousemove',
    cancel: '',
    end: 'mouseup'
  };

  Dragger._events = (function() {
    if (hasPointerEvents) return Dragger._pointerEvents;
    if (hasMsPointerEvents) return Dragger._msPointerEvents;
    if (hasTouchEvents) return Dragger._touchEvents;
    return Dragger._mouseEvents;
  })();

  Dragger._emitter = new Emitter();

  Dragger._activeInstances = [];

  /**
   * Protected static methods
   * ************************
   */

  Dragger._preventDefault = function(e) {
    if (e.preventDefault && e.cancelable !== false) e.preventDefault();
  };

  Dragger._activateInstance = function(instance) {
    var index = Dragger._activeInstances.indexOf(instance);
    if (index > -1) return;

    Dragger._activeInstances.push(instance);
    Dragger._emitter.on(events.move, instance._onMove);
    Dragger._emitter.on(events.cancel, instance._onCancel);
    Dragger._emitter.on(events.end, instance._onEnd);

    if (Dragger._activeInstances.length === 1) {
      Dragger._bindListeners();
    }
  };

  Dragger._deactivateInstance = function(instance) {
    var index = Dragger._activeInstances.indexOf(instance);
    if (index === -1) return;

    Dragger._activeInstances.splice(index, 1);
    Dragger._emitter.off(events.move, instance._onMove);
    Dragger._emitter.off(events.cancel, instance._onCancel);
    Dragger._emitter.off(events.end, instance._onEnd);

    if (!Dragger._activeInstances.length) {
      Dragger._unbindListeners();
    }
  };

  Dragger._bindListeners = function() {
    var events = Dragger._events;
    window.addEventListener(events.move, Dragger._onMove, listenerOptions);
    window.addEventListener(events.end, Dragger._onEnd, listenerOptions);
    events.cancel && window.addEventListener(events.cancel, Dragger._onCancel, listenerOptions);
  };

  Dragger._unbindListeners = function() {
    var events = Dragger._events;
    window.removeEventListener(events.move, Dragger._onMove, listenerOptions);
    window.removeEventListener(events.end, Dragger._onEnd, listenerOptions);
    events.cancel && window.removeEventListener(events.cancel, Dragger._onCancel, listenerOptions);
  };

  Dragger._getEventPointerId = function(event) {
    // If we have pointer id available let's use it.
    if (typeof event.pointerId === 'number') {
      return event.pointerId;
    }

    // For touch events let's get the first changed touch's identifier.
    if (event.changedTouches) {
      return event.changedTouches[0] ? event.changedTouches[0].identifier : null;
    }

    // For mouse/other events let's provide a static id.
    return 1;
  };

  Dragger._getTouchById = function(event, id) {
    // If we have a pointer event return the whole event if there's a match, and
    // null otherwise.
    if (typeof event.pointerId === 'number') {
      return event.pointerId === id ? event : null;
    }

    // For touch events let's check if there's a changed touch object that matches
    // the pointerId in which case return the touch object.
    if (event.changedTouches) {
      for (var i = 0; i < event.changedTouches.length; i++) {
        if (event.changedTouches[i].identifier === id) {
          return event.changedTouches[i];
        }
      }
      return null;
    }

    // For mouse/other events let's assume there's only one pointer and just
    // return the event.
    return event;
  };

  Dragger._onMove = function(e) {
    Dragger._emitter.emit(events.move, e);
  };

  Dragger._onCancel = function(e) {
    Dragger._emitter.emit(events.cancel, e);
  };

  Dragger._onEnd = function(e) {
    Dragger._emitter.emit(events.end, e);
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Reset current drag operation (if any).
   *
   * @private
   * @memberof Dragger.prototype
   */
  Dragger.prototype._reset = function() {
    if (this._isDestroyed) return;

    this._pointerId = null;
    this._startTime = 0;
    this._startX = 0;
    this._startY = 0;
    this._currentX = 0;
    this._currentY = 0;
    this._startEvent = null;

    this._element.removeEventListener(
      Dragger._touchEvents.start,
      this._abortNonCancelable,
      listenerOptions
    );

    Dragger._deactivateInstance(this);
  };

  /**
   * Create a custom dragger event from a raw event.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {String} type
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   * @returns {DraggerEvent}
   */
  Dragger.prototype._createEvent = function(type, e) {
    var touch = this._getTrackedTouch(e);
    return {
      // Hammer.js compatibility interface.
      type: type,
      srcEvent: e,
      distance: this.getDistance(),
      deltaX: this.getDeltaX(),
      deltaY: this.getDeltaY(),
      deltaTime: type === events.start ? 0 : this.getDeltaTime(),
      isFirst: type === events.start,
      isFinal: type === events.end || type === events.cancel,
      // Partial Touch API interface.
      identifier: this._pointerId,
      screenX: touch.screenX,
      screenY: touch.screenY,
      clientX: touch.clientX,
      clientY: touch.clientY,
      pageX: touch.pageX,
      pageY: touch.pageY,
      target: touch.target
    };
  };

  /**
   * Emit a raw event as dragger event internally.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {String} type
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   */
  Dragger.prototype._emit = function(type, e) {
    this._emitter.emit(type, this._createEvent(type, e));
  };

  /**
   * If the provided event is a PointerEvent this method will return it if it has
   * the same pointerId as the instance. If the provided event is a TouchEvent
   * this method will try to look for a Touch instance in the changedTouches that
   * has an identifier matching this instance's pointerId. If the provided event
   * is a MouseEvent (or just any other event than PointerEvent or TouchEvent)
   * it will be returned immediately.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {(PointerEvent|TouchEvent|MouseEvent)}
   * @returns {?(Touch|PointerEvent|MouseEvent)}
   */
  Dragger.prototype._getTrackedTouch = function(e) {
    if (this._pointerId === null) {
      return null;
    } else {
      return Dragger._getTouchById(e, this._pointerId);
    }
  };

  /**
   * A pre-handler for start event that checks if we can start dragging.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   */
  Dragger.prototype._preStartCheck = function(e) {
    if (this._isDestroyed) return;

    // Make sure the element is not being dragged currently.
    if (this.isDragging()) return;

    // Special cancelable check for Android to prevent drag procedure from
    // starting if native scrolling is in progress. Part 1.
    if (isAndroid && e.cancelable === false) return;

    // Make sure left button is pressed on mouse.
    if (e.button) return;

    // Get (and set) pointer id.
    this._pointerId = Dragger._getEventPointerId(e);
    if (this._pointerId === null) return;

    // Store the start event and trigger start (async or sync). Pointer events
    // are emitted before touch events if the browser supports both of them. And
    // if you try to move an element before `touchstart` is emitted the pointer
    // events for that element will be canceled. The fix is to delay the emitted
    // pointer events in such a scenario by one frame so that `touchstart` has
    // time to be emitted before the element is (potentially) moved.
    this._startEvent = e;
    if (hasTouchEvents && (hasPointerEvents || hasMsPointerEvents)) {
      // Special cancelable check for Android to prevent drag procedure from
      // starting if native scrolling is in progress. Part 2.
      if (isAndroid) {
        this._element.addEventListener(
          Dragger._touchEvents.start,
          this._abortNonCancelable,
          listenerOptions
        );
      }
      raf(this._onStart);
    } else {
      this._onStart();
    }
  };

  /**
   * Abort start event if it turns out to be non-cancelable.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   */
  Dragger.prototype._abortNonCancelable = function(e) {
    this._element.removeEventListener(
      Dragger._touchEvents.start,
      this._abortNonCancelable,
      listenerOptions
    );

    if (this._startEvent && e.cancelable === false) {
      this._pointerId = null;
      this._startEvent = null;
    }
  };

  /**
   * Start the drag procedure if possible.
   *
   * @private
   * @memberof Dragger.prototype
   */
  Dragger.prototype._onStart = function() {
    var e = this._startEvent;
    if (!e) return;

    this._startEvent = null;

    var touch = this._getTrackedTouch(e);
    if (!touch) return;

    // Set up init data and emit start event.
    this._startX = this._currentX = touch.clientX;
    this._startY = this._currentY = touch.clientY;
    this._startTime = Date.now();
    this._emit(events.start, e);
    Dragger._activateInstance(this);
  };

  /**
   * Handler for move event.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   */
  Dragger.prototype._onMove = function(e) {
    var touch = this._getTrackedTouch(e);
    if (!touch) return;

    this._currentX = touch.clientX;
    this._currentY = touch.clientY;
    this._emit(events.move, e);
  };

  /**
   * Handler for move cancel event.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   */
  Dragger.prototype._onCancel = function(e) {
    if (!this._getTrackedTouch(e)) return;

    this._emit(events.cancel, e);
    this._reset();
  };

  /**
   * Handler for end event.
   *
   * @private
   * @memberof Dragger.prototype
   * @param {(PointerEvent|TouchEvent|MouseEvent)} e
   */
  Dragger.prototype._onEnd = function(e) {
    if (!this._getTrackedTouch(e)) return;

    this._emit(events.end, e);
    this._reset();
  };

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Check if the element is being dragged at the moment.
   *
   * @public
   * @memberof Dragger.prototype
   * @returns {Boolean}
   */
  Dragger.prototype.isDragging = function() {
    return this._pointerId !== null;
  };

  /**
   * Set element's touch-action CSS property.
   *
   * @public
   * @memberof Dragger.prototype
   * @param {String} value
   */
  Dragger.prototype.setTouchAction = function(value) {
    // Store unmodified touch action value (we trust user input here).
    this._touchAction = value;

    // Set touch-action style.
    if (taPropPrefixed) {
      this._cssProps[taPropPrefixed] = '';
      this._element.style[taPropPrefixed] = value;
    }

    // If we have an unsupported touch-action value let's add a special listener
    // that prevents default action on touch start event. A dirty hack, but best
    // we can do for now. The other options would be to somehow polyfill the
    // unsupported touch action behavior with custom heuristics which sounds like
    // a can of worms.
    if (hasTouchEvents) {
      this._element.removeEventListener(Dragger._touchEvents.start, Dragger._preventDefault, false);
      if (this._element.style[taPropPrefixed] !== value) {
        this._element.addEventListener(Dragger._touchEvents.start, Dragger._preventDefault, false);
      }
    }
  };

  /**
   * Update element's CSS properties. Accepts an object with camel cased style
   * props with value pairs as it's first argument.
   *
   * @public
   * @memberof Dragger.prototype
   * @param {Object} [newProps]
   */
  Dragger.prototype.setCssProps = function(newProps) {
    if (!newProps) return;

    var currentProps = this._cssProps;
    var element = this._element;
    var prop;
    var prefixedProp;

    // Reset current props.
    for (prop in currentProps) {
      element.style[prop] = currentProps[prop];
      delete currentProps[prop];
    }

    // Set new props.
    for (prop in newProps) {
      // Make sure we have a value for the prop.
      if (!newProps[prop]) continue;

      // Special handling for touch-action.
      if (prop === taProp) {
        this.setTouchAction(newProps[prop]);
        continue;
      }

      // Get prefixed prop and skip if it does not exist.
      prefixedProp = getPrefixedPropName(element.style, prop);
      if (!prefixedProp) continue;

      // Store the prop and add the style.
      currentProps[prefixedProp] = '';
      element.style[prefixedProp] = newProps[prop];
    }
  };

  /**
   * How much the pointer has moved on x-axis from start position, in pixels.
   * Positive value indicates movement from left to right.
   *
   * @public
   * @memberof Dragger.prototype
   * @returns {Number}
   */
  Dragger.prototype.getDeltaX = function() {
    return this._currentX - this._startX;
  };

  /**
   * How much the pointer has moved on y-axis from start position, in pixels.
   * Positive value indicates movement from top to bottom.
   *
   * @public
   * @memberof Dragger.prototype
   * @returns {Number}
   */
  Dragger.prototype.getDeltaY = function() {
    return this._currentY - this._startY;
  };

  /**
   * How far (in pixels) has pointer moved from start position.
   *
   * @public
   * @memberof Dragger.prototype
   * @returns {Number}
   */
  Dragger.prototype.getDistance = function() {
    var x = this.getDeltaX();
    var y = this.getDeltaY();
    return Math.sqrt(x * x + y * y);
  };

  /**
   * How long has pointer been dragged.
   *
   * @public
   * @memberof Dragger.prototype
   * @returns {Number}
   */
  Dragger.prototype.getDeltaTime = function() {
    return this._startTime ? Date.now() - this._startTime : 0;
  };

  /**
   * Bind drag event listeners.
   *
   * @public
   * @memberof Dragger.prototype
   * @param {String} eventName
   *   - 'start', 'move', 'cancel' or 'end'.
   * @param {Function} listener
   */
  Dragger.prototype.on = function(eventName, listener) {
    this._emitter.on(eventName, listener);
  };

  /**
   * Unbind drag event listeners.
   *
   * @public
   * @memberof Dragger.prototype
   * @param {String} eventName
   *   - 'start', 'move', 'cancel' or 'end'.
   * @param {Function} listener
   */
  Dragger.prototype.off = function(events, listener) {
    this._emitter.off(eventName, listener);
  };

  /**
   * Destroy the instance and unbind all drag event listeners.
   *
   * @public
   * @memberof Dragger.prototype
   */
  Dragger.prototype.destroy = function() {
    if (this._isDestroyed) return;

    var element = this._element;
    var events = Dragger._events;

    // Reset data and deactivate the instance.
    this._reset();

    // Destroy emitter.
    this._emitter.destroy();

    // Unbind event handlers.
    element.removeEventListener(events.start, this._preStartCheck, listenerOptions);
    element.removeEventListener(Dragger._mouseEvents.start, this._preStartCheck, listenerOptions);
    element.removeEventListener('dragstart', Dragger._preventDefault, false);
    element.removeEventListener(Dragger._touchEvents.start, Dragger._preventDefault, false);

    // Reset styles.
    for (var prop in this._cssProps) {
      element.style[prop] = this._cssProps[prop];
      delete this._cssProps[prop];
    }

    // Reset data.
    this._element = null;

    // Mark as destroyed.
    this._isDestroyed = true;
  };

  /**
   * A ticker system for handling DOM reads and writes in an efficient way.
   * Contains a read queue and a write queue that are processed on the next
   * animation frame when needed.
   *
   * @class
   */
  function Ticker() {
    this._nextStep = null;

    this._queue = [];
    this._reads = {};
    this._writes = {};

    this._batch = [];
    this._batchReads = {};
    this._batchWrites = {};

    this._step = this._step.bind(this);
  }

  Ticker.prototype.add = function(id, readOperation, writeOperation, isPrioritized) {
    // First, let's check if an item has been added to the queues with the same id
    // and if so -> remove it.
    var currentIndex = this._queue.indexOf(id);
    if (currentIndex > -1) this._queue[currentIndex] = undefined;

    // Add entry.
    isPrioritized ? this._queue.unshift(id) : this._queue.push(id);
    this._reads[id] = readOperation;
    this._writes[id] = writeOperation;

    // Finally, let's kick-start the next tick if it is not running yet.
    if (!this._nextStep) this._nextStep = raf(this._step);
  };

  Ticker.prototype.cancel = function(id) {
    var currentIndex = this._queue.indexOf(id);
    if (currentIndex > -1) {
      this._queue[currentIndex] = undefined;
      delete this._reads[id];
      delete this._writes[id];
    }
  };

  Ticker.prototype._step = function() {
    var queue = this._queue;
    var reads = this._reads;
    var writes = this._writes;
    var batch = this._batch;
    var batchReads = this._batchReads;
    var batchWrites = this._batchWrites;
    var length = queue.length;
    var id;
    var i;

    // Reset ticker.
    this._nextStep = null;

    // Setup queues and callback placeholders.
    for (i = 0; i < length; i++) {
      id = queue[i];
      if (!id) continue;

      batch.push(id);

      batchReads[id] = reads[id];
      delete reads[id];

      batchWrites[id] = writes[id];
      delete writes[id];
    }

    // Reset queue.
    queue.length = 0;

    // Process read callbacks.
    for (i = 0; i < length; i++) {
      id = batch[i];
      if (batchReads[id]) {
        batchReads[id]();
        delete batchReads[id];
      }
    }

    // Process write callbacks.
    for (i = 0; i < length; i++) {
      id = batch[i];
      if (batchWrites[id]) {
        batchWrites[id]();
        delete batchWrites[id];
      }
    }

    // Reset batch.
    batch.length = 0;

    // Restart the ticker if needed.
    if (!this._nextStep && queue.length) {
      this._nextStep = raf(this._step);
    }
  };

  var ticker = new Ticker();

  var layoutTick = 'layout';
  var visibilityTick = 'visibility';
  var moveTick = 'move';
  var scrollTick = 'scroll';
  var placeholderTick = 'placeholder';

  function addLayoutTick(itemId, readCallback, writeCallback) {
    return ticker.add(itemId + layoutTick, readCallback, writeCallback);
  }

  function cancelLayoutTick(itemId) {
    return ticker.cancel(itemId + layoutTick);
  }

  function addVisibilityTick(itemId, readCallback, writeCallback) {
    return ticker.add(itemId + visibilityTick, readCallback, writeCallback);
  }

  function cancelVisibilityTick(itemId) {
    return ticker.cancel(itemId + visibilityTick);
  }

  function addMoveTick(itemId, readCallback, writeCallback) {
    return ticker.add(itemId + moveTick, readCallback, writeCallback, true);
  }

  function cancelMoveTick(itemId) {
    return ticker.cancel(itemId + moveTick);
  }

  function addScrollTick(itemId, readCallback, writeCallback) {
    return ticker.add(itemId + scrollTick, readCallback, writeCallback, true);
  }

  function cancelScrollTick(itemId) {
    return ticker.cancel(itemId + scrollTick);
  }

  function addPlaceholderTick(itemId, readCallback, writeCallback) {
    return ticker.add(itemId + placeholderTick, readCallback, writeCallback);
  }

  function cancelPlaceholderTick(itemId) {
    return ticker.cancel(itemId + placeholderTick);
  }

  var ElProto = window.Element.prototype;
  var matchesFn =
    ElProto.matches ||
    ElProto.matchesSelector ||
    ElProto.webkitMatchesSelector ||
    ElProto.mozMatchesSelector ||
    ElProto.msMatchesSelector ||
    ElProto.oMatchesSelector ||
    function() {
      return false;
    };

  /**
   * Check if element matches a CSS selector.
   *
   * @param {Element} el
   * @param {String} selector
   * @returns {Boolean}
   */
  function elementMatches(el, selector) {
    return matchesFn.call(el, selector);
  }

  /**
   * Add class to an element.
   *
   * @param {HTMLElement} element
   * @param {String} className
   */
  function addClass(element, className) {
    if (element.classList) {
      element.classList.add(className);
    } else {
      if (!elementMatches(element, '.' + className)) {
        element.className += ' ' + className;
      }
    }
  }

  var tempArray = [];
  var numberType = 'number';

  /**
   * Insert an item or an array of items to array to a specified index. Mutates
   * the array. The index can be negative in which case the items will be added
   * to the end of the array.
   *
   * @param {Array} array
   * @param {*} items
   * @param {Number} [index=-1]
   */
  function arrayInsert(array, items, index) {
    var startIndex = typeof index === numberType ? index : -1;
    if (startIndex < 0) startIndex = array.length - startIndex + 1;

    array.splice.apply(array, tempArray.concat(startIndex, 0, items));
    tempArray.length = 0;
  }

  /**
   * Normalize array index. Basically this function makes sure that the provided
   * array index is within the bounds of the provided array and also transforms
   * negative index to the matching positive index.
   *
   * @param {Array} array
   * @param {Number} index
   * @param {Boolean} isMigration
   */
  function normalizeArrayIndex(array, index, isMigration) {
    var length = array.length;
    var maxIndex = Math.max(0, isMigration ? length : length - 1);
    return index > maxIndex ? maxIndex : index < 0 ? Math.max(maxIndex + index + 1, 0) : index;
  }

  /**
   * Move array item to another index.
   *
   * @param {Array} array
   * @param {Number} fromIndex
   *   - Index (positive or negative) of the item that will be moved.
   * @param {Number} toIndex
   *   - Index (positive or negative) where the item should be moved to.
   */
  function arrayMove(array, fromIndex, toIndex) {
    // Make sure the array has two or more items.
    if (array.length < 2) return;

    // Normalize the indices.
    var from = normalizeArrayIndex(array, fromIndex);
    var to = normalizeArrayIndex(array, toIndex);

    // Add target item to the new position.
    if (from !== to) {
      array.splice(to, 0, array.splice(from, 1)[0]);
    }
  }

  /**
   * Swap array items.
   *
   * @param {Array} array
   * @param {Number} index
   *   - Index (positive or negative) of the item that will be swapped.
   * @param {Number} withIndex
   *   - Index (positive or negative) of the other item that will be swapped.
   */
  function arraySwap(array, index, withIndex) {
    // Make sure the array has two or more items.
    if (array.length < 2) return;

    // Normalize the indices.
    var indexA = normalizeArrayIndex(array, index);
    var indexB = normalizeArrayIndex(array, withIndex);
    var temp;

    // Swap the items.
    if (indexA !== indexB) {
      temp = array[indexA];
      array[indexA] = array[indexB];
      array[indexB] = temp;
    }
  }

  var actionCancel = 'cancel';
  var actionFinish = 'finish';
  var debounceTick = 'debounce';
  var debounceId = 0;

  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds. The returned function accepts one argument which, when
   * being "finish", calls the debounce function immediately if it is currently
   * waiting to be called, and when being "cancel" cancels the currently queued
   * function call.
   *
   * @param {Function} fn
   * @param {Number} wait
   * @returns {Function}
   */
  function debounce(fn, wait) {
    var timeout;
    var tickerId = ++debounceId + debounceTick;

    if (wait > 0) {
      return function(action) {
        if (timeout !== undefined) {
          timeout = window.clearTimeout(timeout);
          ticker.cancel(tickerId);
          if (action === actionFinish) fn();
        }

        if (action !== actionCancel && action !== actionFinish) {
          timeout = window.setTimeout(function() {
            timeout = undefined;
            ticker.add(tickerId, fn, null, true);
          }, wait);
        }
      };
    }

    return function(action) {
      if (action !== actionCancel) fn();
    };
  }

  /**
   * Returns true if element is transformed, false if not. In practice the
   * element's display value must be anything else than "none" or "inline" as
   * well as have a valid transform value applied in order to be counted as a
   * transformed element.
   *
   * Borrowed from Mezr (v0.6.1):
   * https://github.com/niklasramo/mezr/blob/0.6.1/mezr.js#L661
   *
   * @param {HTMLElement} element
   * @returns {Boolean}
   */
  function isTransformed(element) {
    var transform = getStyle(element, 'transform');
    if (!transform || transform === 'none') return false;

    var display = getStyle(element, 'display');
    if (display === 'inline' || display === 'none') return false;

    return true;
  }

  /**
   * Returns an absolute positioned element's containing block, which is
   * considered to be the closest ancestor element that the target element's
   * positioning is relative to. Disclaimer: this only works as intended for
   * absolute positioned elements.
   *
   * @param {HTMLElement} element
   * @param {Boolean} [includeSelf=false]
   *   - When this is set to true the containing block checking is started from
   *     the provided element. Otherwise the checking is started from the
   *     provided element's parent element.
   * @returns {(Document|Element)}
   */
  function getContainingBlock(element, includeSelf) {
    // As long as the containing block is an element, static and not
    // transformed, try to get the element's parent element and fallback to
    // document. https://github.com/niklasramo/mezr/blob/0.6.1/mezr.js#L339
    var document = window.document;
    var ret = (includeSelf ? element : element.parentElement) || document;
    while (ret && ret !== document && getStyle(ret, 'position') === 'static' && !isTransformed(ret)) {
      ret = ret.parentElement || document;
    }
    return ret;
  }

  /**
   * Returns the computed value of an element's style property transformed into
   * a float value.
   *
   * @param {HTMLElement} el
   * @param {String} style
   * @returns {Number}
   */
  function getStyleAsFloat(el, style) {
    return parseFloat(getStyle(el, style)) || 0;
  }

  var offsetA = {};
  var offsetB = {};
  var offsetDiff = {};

  /**
   * Returns the element's document offset, which in practice means the vertical
   * and horizontal distance between the element's northwest corner and the
   * document's northwest corner. Note that this function always returns the same
   * object so be sure to read the data from it instead using it as a reference.
   *
   * @param {(Document|Element|Window)} element
   * @param {Object} [offsetData]
   *   - Optional data object where the offset data will be inserted to. If not
   *     provided a new object will be created for the return data.
   * @returns {Object}
   */
  function getOffset(element, offsetData) {
    var ret = offsetData || {};
    var rect;

    // Set up return data.
    ret.left = 0;
    ret.top = 0;

    // Document's offsets are always 0.
    if (element === document) return ret;

    // Add viewport scroll left/top to the respective offsets.
    ret.left = window.pageXOffset || 0;
    ret.top = window.pageYOffset || 0;

    // Window's offsets are the viewport scroll left/top values.
    if (element.self === window.self) return ret;

    // Add element's client rects to the offsets.
    rect = element.getBoundingClientRect();
    ret.left += rect.left;
    ret.top += rect.top;

    // Exclude element's borders from the offset.
    ret.left += getStyleAsFloat(element, 'border-left-width');
    ret.top += getStyleAsFloat(element, 'border-top-width');

    return ret;
  }

  /**
   * Calculate the offset difference two elements.
   *
   * @param {HTMLElement} elemA
   * @param {HTMLElement} elemB
   * @param {Boolean} [compareContainingBlocks=false]
   *   - When this is set to true the containing blocks of the provided elements
   *     will be used for calculating the difference. Otherwise the provided
   *     elements will be compared directly.
   * @returns {Object}
   */
  function getOffsetDiff(elemA, elemB, compareContainingBlocks) {
    offsetDiff.left = 0;
    offsetDiff.top = 0;

    // If elements are same let's return early.
    if (elemA === elemB) return offsetDiff;

    // Compare containing blocks if necessary.
    if (compareContainingBlocks) {
      elemA = getContainingBlock(elemA, true);
      elemB = getContainingBlock(elemB, true);

      // If containing blocks are identical, let's return early.
      if (elemA === elemB) return offsetDiff;
    }

    // Finally, let's calculate the offset diff.
    getOffset(elemA, offsetA);
    getOffset(elemB, offsetB);
    offsetDiff.left = offsetB.left - offsetA.left;
    offsetDiff.top = offsetB.top - offsetA.top;

    return offsetDiff;
  }

  var styleOverflow = 'overflow';
  var styleOverflowX = 'overflow-x';
  var styleOverflowY = 'overflow-y';
  var overflowAuto = 'auto';
  var overflowScroll = 'scroll';

  /**
   * Check if an element is scrollable.
   *
   * @param {HTMLElement} element
   * @returns {Boolean}
   */
  function isScrollable(element) {
    var overflow = getStyle(element, styleOverflow);
    if (overflow === overflowAuto || overflow === overflowScroll) return true;

    overflow = getStyle(element, styleOverflowX);
    if (overflow === overflowAuto || overflow === overflowScroll) return true;

    overflow = getStyle(element, styleOverflowY);
    if (overflow === overflowAuto || overflow === overflowScroll) return true;

    return false;
  }

  /**
   * Collect element's ancestors that are potentially scrollable elements.
   *
   * @param {HTMLElement} element
   * @param {Boolean} [includeSelf=false]
   * @param {Array} [data]
   * @returns {Array}
   */
  function getScrollableAncestors(element, includeSelf, data) {
    var ret = data || [];
    var parent = includeSelf ? element : element.parentNode;

    // Find scroll parents.
    while (parent && parent !== document) {
      // If element is inside ShadowDOM let's get it's host node from the real
      // DOM and continue looping.
      if (parent.getRootNode && parent instanceof DocumentFragment) {
        parent = parent.getRootNode().host;
        continue;
      }

      // If element is scrollable let's add it to the scrollable list.
      if (isScrollable(parent)) {
        ret.push(parent);
      }

      parent = parent.parentNode;
    }

    // Always add window to the results.
    ret.push(window);

    return ret;
  }

  var translateValue = {};
  var transformStyle$2 = 'transform';
  var transformNone = 'none';
  var rxMat3d = /^matrix3d/;
  var rxMatTx = /([^,]*,){4}/;
  var rxMat3dTx = /([^,]*,){12}/;
  var rxNextItem = /[^,]*,/;

  /**
   * Returns the element's computed translateX and translateY values as a floats.
   * The returned object is always the same object and updated every time this
   * function is called.
   *
   * @param {HTMLElement} element
   * @returns {Object}
   */
  function getTranslate(element) {
    translateValue.x = 0;
    translateValue.y = 0;

    var transform = getStyle(element, transformStyle$2);
    if (!transform || transform === transformNone) {
      return translateValue;
    }

    // Transform style can be in either matrix3d(...) or matrix(...).
    var isMat3d = rxMat3d.test(transform);
    var tX = transform.replace(isMat3d ? rxMat3dTx : rxMatTx, '');
    var tY = tX.replace(rxNextItem, '');

    translateValue.x = parseFloat(tX) || 0;
    translateValue.y = parseFloat(tY) || 0;

    return translateValue;
  }

  /**
   * Transform translateX and translateY value into CSS transform style
   * property's value.
   *
   * @param {Number} x
   * @param {Number} y
   * @returns {String}
   */
  function getTranslateString(x, y) {
    return 'translateX(' + x + 'px) translateY(' + y + 'px)';
  }

  /**
   * Remove class from an element.
   *
   * @param {HTMLElement} element
   * @param {String} className
   */
  function removeClass(element, className) {
    if (element.classList) {
      element.classList.remove(className);
    } else {
      if (elementMatches(element, '.' + className)) {
        element.className = (' ' + element.className + ' ')
          .replace(' ' + className + ' ', ' ')
          .trim();
      }
    }
  }

  // Drag start predicate states.
  var startPredicateInactive = 0;
  var startPredicatePending = 1;
  var startPredicateResolved = 2;
  var startPredicateRejected = 3;

  /**
   * Bind touch interaction to an item.
   *
   * @class
   * @param {Item} item
   */
  function ItemDrag(item) {
    var element = item._element;
    var grid = item.getGrid();
    var settings = grid._settings;

    this._item = item;
    this._gridId = grid._id;
    this._isDestroyed = false;
    this._isMigrating = false;

    // Start predicate data.
    this._startPredicate = isFunction(settings.dragStartPredicate)
      ? settings.dragStartPredicate
      : ItemDrag.defaultStartPredicate;
    this._startPredicateState = startPredicateInactive;
    this._startPredicateResult = undefined;

    // Data for drag sort predicate heuristics.
    this._hBlockedIndex = null;
    this._hX1 = 0;
    this._hX2 = 0;
    this._hY1 = 0;
    this._hY2 = 0;

    // Setup item's initial drag data.
    this._reset();

    // Bind the methods that needs binding.
    this._preStartCheck = this._preStartCheck.bind(this);
    this._preEndCheck = this._preEndCheck.bind(this);
    this._onScroll = this._onScroll.bind(this);
    this._prepareMove = this._prepareMove.bind(this);
    this._applyMove = this._applyMove.bind(this);
    this._prepareScroll = this._prepareScroll.bind(this);
    this._applyScroll = this._applyScroll.bind(this);
    this._checkOverlap = this._checkOverlap.bind(this);

    // Create debounce overlap checker function.
    var sortInterval = settings.dragSortHeuristics.sortInterval;
    this._checkOverlapDebounce = debounce(this._checkOverlap, sortInterval);

    // Init dragger.
    this._dragger = new Dragger(element, settings.dragCssProps);
    this._dragger.on('start', this._preStartCheck);
    this._dragger.on('move', this._preStartCheck);
    this._dragger.on('cancel', this._preEndCheck);
    this._dragger.on('end', this._preEndCheck);
  }

  /**
   * Public static methods
   * *********************
   */

  /**
   * Default drag start predicate handler that handles anchor elements
   * gracefully. The return value of this function defines if the drag is
   * started, rejected or pending. When true is returned the dragging is started
   * and when false is returned the dragging is rejected. If nothing is returned
   * the predicate will be called again on the next drag movement.
   *
   * @public
   * @memberof ItemDrag
   * @param {Item} item
   * @param {DraggerEvent} event
   * @param {Object} [options]
   *   - An optional options object which can be used to pass the predicate
   *     it's options manually. By default the predicate retrieves the options
   *     from the grid's settings.
   * @returns {Boolean}
   */
  ItemDrag.defaultStartPredicate = function(item, event, options) {
    var drag = item._drag;
    var predicate = drag._startPredicateData || drag._setupStartPredicate(options);

    // Final event logic. At this stage return value does not matter anymore,
    // the predicate is either resolved or it's not and there's nothing to do
    // about it. Here we just reset data and if the item element is a link
    // we follow it (if there has only been slight movement).
    if (event.isFinal) {
      drag._finishStartPredicate(event);
      return;
    }

    // Find and store the handle element so we can check later on if the
    // cursor is within the handle. If we have a handle selector let's find
    // the corresponding element. Otherwise let's use the item element as the
    // handle.
    if (!predicate.handleElement) {
      predicate.handleElement = drag._getStartPredicateHandle(event);
      if (!predicate.handleElement) return false;
    }

    // If delay is defined let's keep track of the latest event and initiate
    // delay if it has not been done yet.
    if (predicate.delay) {
      predicate.event = event;
      if (!predicate.delayTimer) {
        predicate.delayTimer = window.setTimeout(function() {
          predicate.delay = 0;
          if (drag._resolveStartPredicate(predicate.event)) {
            drag._forceResolveStartPredicate(predicate.event);
            drag._resetStartPredicate();
          }
        }, predicate.delay);
      }
    }

    return drag._resolveStartPredicate(event);
  };

  /**
   * Default drag sort predicate.
   *
   * @public
   * @memberof ItemDrag
   * @param {Item} item
   * @param {Object} [options]
   * @param {Number} [options.threshold=50]
   * @param {String} [options.action='move']
   * @returns {(Boolean|DragSortCommand)}
   *   - Returns false if no valid index was found. Otherwise returns drag sort
   *     command.
   */
  ItemDrag.defaultSortPredicate = (function() {
    var itemRect = {};
    var targetRect = {};
    var returnData = {};
    var rootGridArray = [];

    function getTargetGrid(item, rootGrid, threshold) {
      var target = null;
      var dragSort = rootGrid._settings.dragSort;
      var bestScore = -1;
      var gridScore;
      var grids;
      var grid;
      var i;

      // Get potential target grids.
      if (dragSort === true) {
        rootGridArray[0] = rootGrid;
        grids = rootGridArray;
      } else {
        grids = dragSort.call(rootGrid, item);
      }

      // Return immediately if there are no grids.
      if (!Array.isArray(grids)) return target;

      // Loop through the grids and get the best match.
      for (i = 0; i < grids.length; i++) {
        grid = grids[i];

        // Filter out all destroyed grids.
        if (grid._isDestroyed) continue;

        // We need to update the grid's offsets and dimensions since they might
        // have changed (e.g during scrolling).
        grid._updateBoundingRect();

        // Check how much dragged element overlaps the container element.
        targetRect.width = grid._width;
        targetRect.height = grid._height;
        targetRect.left = grid._left;
        targetRect.top = grid._top;
        gridScore = getRectOverlapScore(itemRect, targetRect);

        // Check if this grid is the best match so far.
        if (gridScore > threshold && gridScore > bestScore) {
          bestScore = gridScore;
          target = grid;
        }
      }

      // Always reset root grid array.
      rootGridArray.length = 0;

      return target;
    }

    return function(item, options) {
      var drag = item._drag;
      var rootGrid = drag._getGrid();

      // Get drag sort predicate settings.
      var sortThreshold = options && typeof options.threshold === 'number' ? options.threshold : 50;
      var sortAction = options && options.action === actionSwap ? actionSwap : actionMove;

      // Populate item rect data.
      itemRect.width = item._width;
      itemRect.height = item._height;
      itemRect.left = drag._elementClientX;
      itemRect.top = drag._elementClientY;

      // Calculate the target grid.
      var grid = getTargetGrid(item, rootGrid, sortThreshold);

      // Return early if we found no grid container element that overlaps the
      // dragged item enough.
      if (!grid) return false;

      var gridOffsetLeft = 0;
      var gridOffsetTop = 0;
      var matchScore = -1;
      var matchIndex;
      var hasValidTargets;
      var target;
      var score;
      var i;

      // If item is moved within it's originating grid adjust item's left and
      // top props. Otherwise if item is moved to/within another grid get the
      // container element's offset (from the element's content edge).
      if (grid === rootGrid) {
        itemRect.left = drag._gridX + item._marginLeft;
        itemRect.top = drag._gridY + item._marginTop;
      } else {
        grid._updateBorders(1, 0, 1, 0);
        gridOffsetLeft = grid._left + grid._borderLeft;
        gridOffsetTop = grid._top + grid._borderTop;
      }

      // Loop through the target grid items and try to find the best match.
      for (i = 0; i < grid._items.length; i++) {
        target = grid._items[i];

        // If the target item is not active or the target item is the dragged
        // item let's skip to the next item.
        if (!target._isActive || target === item) {
          continue;
        }

        // Mark the grid as having valid target items.
        hasValidTargets = true;

        // Calculate the target's overlap score with the dragged item.
        targetRect.width = target._width;
        targetRect.height = target._height;
        targetRect.left = target._left + target._marginLeft + gridOffsetLeft;
        targetRect.top = target._top + target._marginTop + gridOffsetTop;
        score = getRectOverlapScore(itemRect, targetRect);

        // Update best match index and score if the target's overlap score with
        // the dragged item is higher than the current best match score.
        if (score > matchScore) {
          matchIndex = i;
          matchScore = score;
        }
      }

      // If there is no valid match and the item is being moved into another
      // grid.
      if (matchScore < sortThreshold && item.getGrid() !== grid) {
        matchIndex = hasValidTargets ? -1 : 0;
        matchScore = Infinity;
      }

      // Check if the best match overlaps enough to justify a placement switch.
      if (matchScore >= sortThreshold) {
        returnData.grid = grid;
        returnData.index = matchIndex;
        returnData.action = sortAction;
        return returnData;
      }

      return false;
    };
  })();

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Abort dragging and reset drag data.
   *
   * @public
   * @memberof ItemDrag.prototype
   * @returns {ItemDrag}
   */
  ItemDrag.prototype.stop = function() {
    var item = this._item;
    var element = item._element;
    var grid = this._getGrid();

    if (!this._isActive) return this;

    // If the item is being dropped into another grid, finish it up and return
    // immediately.
    if (this._isMigrating) {
      this._finishMigration();
      return this;
    }

    // Cancel queued move and scroll ticks.
    cancelMoveTick(item._id);
    cancelScrollTick(item._id);

    // Remove scroll listeners.
    this._unbindScrollListeners();

    // Cancel overlap check.
    this._checkOverlapDebounce('cancel');

    // Append item element to the container if it's not it's child. Also make
    // sure the translate values are adjusted to account for the DOM shift.
    if (element.parentNode !== grid._element) {
      grid._element.appendChild(element);
      element.style[transformProp] = getTranslateString(this._gridX, this._gridY);
    }

    // Remove dragging class.
    removeClass(element, grid._settings.itemDraggingClass);

    // Reset drag data.
    this._reset();

    return this;
  };

  /**
   * Destroy instance.
   *
   * @public
   * @memberof ItemDrag.prototype
   * @returns {ItemDrag}
   */
  ItemDrag.prototype.destroy = function() {
    if (this._isDestroyed) return this;
    this.stop();
    this._dragger.destroy();
    this._isDestroyed = true;
    return this;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Get Grid instance.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @returns {?Grid}
   */
  ItemDrag.prototype._getGrid = function() {
    return gridInstances[this._gridId] || null;
  };

  /**
   * Setup/reset drag data.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._reset = function() {
    // Is item being dragged?
    this._isActive = false;

    // The dragged item's container element.
    this._container = null;

    // The dragged item's containing block.
    this._containingBlock = null;

    // Drag/scroll event data.
    this._dragEvent = null;
    this._scrollEvent = null;

    // All the elements which need to be listened for scroll events during
    // dragging.
    this._scrollers = [];

    // The current translateX/translateY position.
    this._left = 0;
    this._top = 0;

    // Dragged element's current position within the grid.
    this._gridX = 0;
    this._gridY = 0;

    // Dragged element's current offset from window's northwest corner. Does
    // not account for element's margins.
    this._elementClientX = 0;
    this._elementClientY = 0;

    // Offset difference between the dragged element's temporary drag
    // container and it's original container.
    this._containerDiffX = 0;
    this._containerDiffY = 0;
  };

  /**
   * Bind drag scroll handlers to all scrollable ancestor elements of the
   * dragged element and the drag container element.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._bindScrollListeners = function() {
    var gridContainer = this._getGrid()._element;
    var dragContainer = this._container;
    var scrollers = this._scrollers;
    var gridScrollers;
    var i;

    // Get dragged element's scrolling parents.
    scrollers.length = 0;
    getScrollableAncestors(this._item._element, false, scrollers);

    // If drag container is defined and it's not the same element as grid
    // container then we need to add the grid container and it's scroll parents
    // to the elements which are going to be listener for scroll events.
    if (dragContainer !== gridContainer) {
      gridScrollers = [];
      getScrollableAncestors(gridContainer, true, gridScrollers);
      for (i = 0; i < gridScrollers.length; i++) {
        if (scrollers.indexOf(gridScrollers[i]) < 0) {
          scrollers.push(gridScrollers[i]);
        }
      }
    }

    // Bind scroll listeners.
    for (i = 0; i < scrollers.length; i++) {
      scrollers[i].addEventListener('scroll', this._onScroll);
    }
  };

  /**
   * Unbind currently bound drag scroll handlers from all scrollable ancestor
   * elements of the dragged element and the drag container element.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._unbindScrollListeners = function() {
    var scrollers = this._scrollers;
    var i;

    for (i = 0; i < scrollers.length; i++) {
      scrollers[i].removeEventListener('scroll', this._onScroll);
    }

    scrollers.length = 0;
  };

  /**
   * Setup default start predicate.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {Object} [options]
   * @returns {Object}
   */
  ItemDrag.prototype._setupStartPredicate = function(options) {
    var config = options || this._getGrid()._settings.dragStartPredicate || 0;
    return (this._startPredicateData = {
      distance: Math.abs(config.distance) || 0,
      delay: Math.max(config.delay, 0) || 0,
      handle: typeof config.handle === 'string' ? config.handle : false
    });
  };

  /**
   * Setup default start predicate handle.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   * @returns {?HTMLElement}
   */
  ItemDrag.prototype._getStartPredicateHandle = function(event) {
    var predicate = this._startPredicateData;
    var element = this._item._element;
    var handleElement = element;

    // No handle, no hassle -> let's use the item element as the handle.
    if (!predicate.handle) return handleElement;

    // If there is a specific predicate handle defined, let's try to get it.
    handleElement = event.target;
    while (handleElement && !elementMatches(handleElement, predicate.handle)) {
      handleElement = handleElement !== element ? handleElement.parentElement : null;
    }
    return handleElement || null;
  };

  /**
   * Unbind currently bound drag scroll handlers from all scrollable ancestor
   * elements of the dragged element and the drag container element.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   * @returns {Boolean}
   */
  ItemDrag.prototype._resolveStartPredicate = function(event) {
    var predicate = this._startPredicateData;

    // If the moved distance is smaller than the threshold distance or there is
    // some delay left, ignore this predicate cycle.
    if (event.distance < predicate.distance || predicate.delay) return;

    // Get handle rect data.
    var handleRect = predicate.handleElement.getBoundingClientRect();
    var handleLeft = handleRect.left + (window.pageXOffset || 0);
    var handleTop = handleRect.top + (window.pageYOffset || 0);
    var handleWidth = handleRect.width;
    var handleHeight = handleRect.height;

    // Reset predicate data.
    this._resetStartPredicate();

    // If the cursor is still within the handle let's start the drag.
    return (
      handleWidth &&
      handleHeight &&
      event.pageX >= handleLeft &&
      event.pageX < handleLeft + handleWidth &&
      event.pageY >= handleTop &&
      event.pageY < handleTop + handleHeight
    );
  };

  /**
   * Forcefully resolve drag start predicate.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._forceResolveStartPredicate = function(event) {
    if (!this._isDestroyed && this._startPredicateState === startPredicatePending) {
      this._startPredicateState = startPredicateResolved;
      this._onStart(event);
    }
  };

  /**
   * Finalize start predicate.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._finishStartPredicate = function(event) {
    var element = this._item._element;

    // Check if this is a click (very subjective heuristics).
    var isClick = Math.abs(event.deltaX) < 2 && Math.abs(event.deltaY) < 2 && event.deltaTime < 200;

    // Reset predicate.
    this._resetStartPredicate();

    // If the gesture can be interpreted as click let's try to open the element's
    // href url (if it is an anchor element).
    if (isClick) openAnchorHref(element);
  };

  /**
   * Reset drag sort heuristics.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._resetHeuristics = function(event) {
    this._hBlockedIndex = null;
    this._hX1 = this._hX2 = event.clientX;
    this._hY1 = this._hY2 = event.clientY;
  };

  /**
   * Run heuristics and return true if overlap check can be performed, and false
   * if it can not.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   * @returns {Boolean}
   */
  ItemDrag.prototype._checkHeuristics = function(event) {
    var settings = this._getGrid()._settings.dragSortHeuristics;
    var minDist = settings.minDragDistance;

    // Skip heuristics if not needed.
    if (minDist <= 0) {
      this._hBlockedIndex = null;
      return true;
    }

    var x = event.clientX;
    var y = event.clientY;
    var diffX = x - this._hX2;
    var diffY = y - this._hY2;

    // If we can't do proper bounce back check make sure that the blocked index
    // is not set.
    var canCheckBounceBack = minDist > 3 && settings.minBounceBackAngle > 0;
    if (!canCheckBounceBack) {
      this._hBlockedIndex = null;
    }

    if (Math.abs(diffX) > minDist || Math.abs(diffY) > minDist) {
      // Reset blocked index if angle changed enough. This check requires a
      // minimum value of 3 for minDragDistance to function properly.
      if (canCheckBounceBack) {
        var angle = Math.atan2(diffX, diffY);
        var prevAngle = Math.atan2(this._hX2 - this._hX1, this._hY2 - this._hY1);
        var deltaAngle = Math.atan2(Math.sin(angle - prevAngle), Math.cos(angle - prevAngle));
        if (Math.abs(deltaAngle) > settings.minBounceBackAngle) {
          this._hBlockedIndex = null;
        }
      }

      // Update points.
      this._hX1 = this._hX2;
      this._hY1 = this._hY2;
      this._hX2 = x;
      this._hY2 = y;

      return true;
    }

    return false;
  };

  /**
   * Reset for default drag start predicate function.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._resetStartPredicate = function() {
    var predicate = this._startPredicateData;
    if (predicate) {
      if (predicate.delayTimer) {
        predicate.delayTimer = window.clearTimeout(predicate.delayTimer);
      }
      this._startPredicateData = null;
    }
  };

  /**
   * Check (during drag) if an item is overlapping other items and based on
   * the configuration layout the items.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._checkOverlap = function() {
    if (!this._isActive) return;

    var item = this._item;
    var settings = this._getGrid()._settings;
    var result;
    var currentGrid;
    var currentIndex;
    var targetGrid;
    var targetIndex;
    var sortAction;
    var isMigration;

    // Get overlap check result.
    if (isFunction(settings.dragSortPredicate)) {
      result = settings.dragSortPredicate(item, this._dragEvent);
    } else {
      result = ItemDrag.defaultSortPredicate(item, settings.dragSortPredicate);
    }

    // Let's make sure the result object has a valid index before going further.
    if (!result || typeof result.index !== 'number') return;

    currentGrid = item.getGrid();
    targetGrid = result.grid || currentGrid;
    isMigration = currentGrid !== targetGrid;
    currentIndex = currentGrid._items.indexOf(item);
    targetIndex = normalizeArrayIndex(targetGrid._items, result.index, isMigration);
    sortAction = result.action === actionSwap ? actionSwap : actionMove;

    // Prevent position bounce.
    if (!isMigration && targetIndex === this._hBlockedIndex) {
      return;
    }

    // If the item was moved within it's current grid.
    if (!isMigration) {
      // Make sure the target index is not the current index.
      if (currentIndex !== targetIndex) {
        this._hBlockedIndex = currentIndex;

        // Do the sort.
        (sortAction === actionSwap ? arraySwap : arrayMove)(
          currentGrid._items,
          currentIndex,
          targetIndex
        );

        // Emit move event.
        if (currentGrid._hasListeners(eventMove)) {
          currentGrid._emit(eventMove, {
            item: item,
            fromIndex: currentIndex,
            toIndex: targetIndex,
            action: sortAction
          });
        }

        // Layout the grid.
        currentGrid.layout();
      }
    }

    // If the item was moved to another grid.
    else {
      this._hBlockedIndex = null;

      // Emit beforeSend event.
      if (currentGrid._hasListeners(eventBeforeSend)) {
        currentGrid._emit(eventBeforeSend, {
          item: item,
          fromGrid: currentGrid,
          fromIndex: currentIndex,
          toGrid: targetGrid,
          toIndex: targetIndex
        });
      }

      // Emit beforeReceive event.
      if (targetGrid._hasListeners(eventBeforeReceive)) {
        targetGrid._emit(eventBeforeReceive, {
          item: item,
          fromGrid: currentGrid,
          fromIndex: currentIndex,
          toGrid: targetGrid,
          toIndex: targetIndex
        });
      }

      // Update item's grid id reference.
      item._gridId = targetGrid._id;

      // Update drag instance's migrating indicator.
      this._isMigrating = item._gridId !== this._gridId;

      // Move item instance from current grid to target grid.
      currentGrid._items.splice(currentIndex, 1);
      arrayInsert(targetGrid._items, item, targetIndex);

      // Set sort data as null, which is an indicator for the item comparison
      // function that the sort data of this specific item should be fetched
      // lazily.
      item._sortData = null;

      // Emit send event.
      if (currentGrid._hasListeners(eventSend)) {
        currentGrid._emit(eventSend, {
          item: item,
          fromGrid: currentGrid,
          fromIndex: currentIndex,
          toGrid: targetGrid,
          toIndex: targetIndex
        });
      }

      // Emit receive event.
      if (targetGrid._hasListeners(eventReceive)) {
        targetGrid._emit(eventReceive, {
          item: item,
          fromGrid: currentGrid,
          fromIndex: currentIndex,
          toGrid: targetGrid,
          toIndex: targetIndex
        });
      }

      // Layout both grids.
      currentGrid.layout();
      targetGrid.layout();
    }
  };

  /**
   * If item is dragged into another grid, finish the migration process
   * gracefully.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._finishMigration = function() {
    var item = this._item;
    var release = item._release;
    var element = item._element;
    var isActive = item._isActive;
    var targetGrid = item.getGrid();
    var targetGridElement = targetGrid._element;
    var targetSettings = targetGrid._settings;
    var targetContainer = targetSettings.dragContainer || targetGridElement;
    var currentSettings = this._getGrid()._settings;
    var currentContainer = element.parentNode;
    var translate;
    var offsetDiff;

    // Destroy current drag. Note that we need to set the migrating flag to
    // false first, because otherwise we create an infinite loop between this
    // and the drag.stop() method.
    this._isMigrating = false;
    this.destroy();

    // Remove current classnames.
    removeClass(element, currentSettings.itemClass);
    removeClass(element, currentSettings.itemVisibleClass);
    removeClass(element, currentSettings.itemHiddenClass);

    // Add new classnames.
    addClass(element, targetSettings.itemClass);
    addClass(element, isActive ? targetSettings.itemVisibleClass : targetSettings.itemHiddenClass);

    // Move the item inside the target container if it's different than the
    // current container.
    if (targetContainer !== currentContainer) {
      targetContainer.appendChild(element);
      offsetDiff = getOffsetDiff(currentContainer, targetContainer, true);
      translate = getTranslate(element);
      translate.x -= offsetDiff.left;
      translate.y -= offsetDiff.top;
    }

    // Update item's cached dimensions and sort data.
    item._refreshDimensions();
    item._refreshSortData();

    // Calculate the offset difference between target's drag container (if any)
    // and actual grid container element. We save it later for the release
    // process.
    offsetDiff = getOffsetDiff(targetContainer, targetGridElement, true);
    release._containerDiffX = offsetDiff.left;
    release._containerDiffY = offsetDiff.top;

    // Recreate item's drag handler.
    item._drag = targetSettings.dragEnabled ? new ItemDrag(item) : null;

    // Adjust the position of the item element if it was moved from a container
    // to another.
    if (targetContainer !== currentContainer) {
      element.style[transformProp] = getTranslateString(translate.x, translate.y);
    }

    // Update child element's styles to reflect the current visibility state.
    item._child.removeAttribute('style');
    setStyles(item._child, isActive ? targetSettings.visibleStyles : targetSettings.hiddenStyles);

    // Start the release.
    release.start();
  };

  /**
   * Drag pre-start handler.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._preStartCheck = function(event) {
    // Let's activate drag start predicate state.
    if (this._startPredicateState === startPredicateInactive) {
      this._startPredicateState = startPredicatePending;
    }

    // If predicate is pending try to resolve it.
    if (this._startPredicateState === startPredicatePending) {
      this._startPredicateResult = this._startPredicate(this._item, event);
      if (this._startPredicateResult === true) {
        this._startPredicateState = startPredicateResolved;
        this._onStart(event);
      } else if (this._startPredicateResult === false) {
        this._startPredicateState = startPredicateRejected;
      }
    }

    // Otherwise if predicate is resolved and drag is active, move the item.
    else if (this._startPredicateState === startPredicateResolved && this._isActive) {
      this._onMove(event);
    }
  };

  /**
   * Drag pre-end handler.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._preEndCheck = function(event) {
    // Check if the start predicate was resolved during drag.
    var isResolved = this._startPredicateState === startPredicateResolved;

    // Do final predicate check to allow user to unbind stuff for the current
    // drag procedure within the predicate callback. The return value of this
    // check will have no effect to the state of the predicate.
    this._startPredicate(this._item, event);

    // Reset start predicate state.
    this._startPredicateState = startPredicateInactive;

    // If predicate is resolved and dragging is active, call the end handler.
    if (isResolved && this._isActive) this._onEnd(event);
  };

  /**
   * Drag start handler.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._onStart = function(event) {
    var item = this._item;

    // If item is not active, don't start the drag.
    if (!item._isActive) return;

    var element = item._element;
    var grid = this._getGrid();
    var settings = grid._settings;
    var release = item._release;
    var migrate = item._migrate;
    var gridContainer = grid._element;
    var dragContainer = settings.dragContainer || gridContainer;
    var containingBlock = getContainingBlock(dragContainer, true);
    var translate = getTranslate(element);
    var currentLeft = translate.x;
    var currentTop = translate.y;
    var elementRect = element.getBoundingClientRect();
    var hasDragContainer = dragContainer !== gridContainer;
    var offsetDiff;

    // Reset heuristics data.
    this._resetHeuristics(event);

    // If grid container is not the drag container, we need to calculate the
    // offset difference between grid container and drag container's containing
    // element.
    if (hasDragContainer) {
      offsetDiff = getOffsetDiff(containingBlock, gridContainer);
    }

    // Stop current positioning animation.
    if (item.isPositioning()) {
      item._layout.stop(true, { transform: getTranslateString(currentLeft, currentTop) });
    }

    // Stop current migration animation.
    if (migrate._isActive) {
      currentLeft -= migrate._containerDiffX;
      currentTop -= migrate._containerDiffY;
      migrate.stop(true, { transform: getTranslateString(currentLeft, currentTop) });
    }

    // If item is being released reset release data.
    if (item.isReleasing()) release._reset();

    // Setup drag data.
    this._isActive = true;
    this._dragEvent = event;
    this._container = dragContainer;
    this._containingBlock = containingBlock;
    this._elementClientX = elementRect.left;
    this._elementClientY = elementRect.top;
    this._left = this._gridX = currentLeft;
    this._top = this._gridY = currentTop;

    // Create placeholder (if necessary).
    if (settings.dragPlaceholder.enabled) {
      item._dragPlaceholder.create();
    }

    // Emit dragInit event.
    grid._emit(eventDragInit, item, event);

    // If a specific drag container is set and it is different from the
    // grid's container element we need to cast some extra spells.
    if (hasDragContainer) {
      // Store the container offset diffs to drag data.
      this._containerDiffX = offsetDiff.left;
      this._containerDiffY = offsetDiff.top;

      // If the dragged element is a child of the drag container all we need to
      // do is setup the relative drag position data.
      if (element.parentNode === dragContainer) {
        this._gridX = currentLeft - this._containerDiffX;
        this._gridY = currentTop - this._containerDiffY;
      }

      // Otherwise we need to append the element inside the correct container,
      // setup the actual drag position data and adjust the element's translate
      // values to account for the DOM position shift.
      else {
        this._left = currentLeft + this._containerDiffX;
        this._top = currentTop + this._containerDiffY;
        dragContainer.appendChild(element);
        element.style[transformProp] = getTranslateString(this._left, this._top);
      }
    }

    // Set drag class and bind scrollers.
    addClass(element, settings.itemDraggingClass);
    this._bindScrollListeners();

    // Emit dragStart event.
    grid._emit(eventDragStart, item, event);
  };

  /**
   * Drag move handler.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._onMove = function(event) {
    var item = this._item;

    // If item is not active, reset drag.
    if (!item._isActive) {
      this.stop();
      return;
    }

    var settings = this._getGrid()._settings;
    var axis = settings.dragAxis;

    // Update horizontal position data.
    if (axis !== 'y') {
      var xDiff = event.clientX - this._dragEvent.clientX;
      this._left += xDiff;
      this._gridX += xDiff;
      this._elementClientX += xDiff;
    }

    // Update vertical position data.
    if (axis !== 'x') {
      var yDiff = event.clientY - this._dragEvent.clientY;
      this._top += yDiff;
      this._gridY += yDiff;
      this._elementClientY += yDiff;
    }

    // Update event data.
    this._dragEvent = event;

    // Do move prepare/apply handling in the next tick.
    addMoveTick(item._id, this._prepareMove, this._applyMove);
  };

  /**
   * Prepare dragged item for moving.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._prepareMove = function() {
    // Do nothing if item is not active.
    if (!this._item._isActive) return;

    // If drag sort is enabled -> check overlap.
    if (this._getGrid()._settings.dragSort) {
      if (this._checkHeuristics(this._dragEvent)) {
        this._checkOverlapDebounce();
      }
    }
  };

  /**
   * Apply movement to dragged item.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._applyMove = function() {
    var item = this._item;

    // Do nothing if item is not active.
    if (!item._isActive) return;

    // Update element's translateX/Y values.
    item._element.style[transformProp] = getTranslateString(this._left, this._top);

    // Emit dragMove event.
    this._getGrid()._emit(eventDragMove, item, this._dragEvent);
  };

  /**
   * Drag scroll handler.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {Event} event
   */
  ItemDrag.prototype._onScroll = function(event) {
    var item = this._item;

    // If item is not active, reset drag.
    if (!item._isActive) {
      this.stop();
      return;
    }

    // Update last scroll event.
    this._scrollEvent = event;

    // Do scroll prepare/apply handling in the next tick.
    addScrollTick(item._id, this._prepareScroll, this._applyScroll);
  };

  /**
   * Prepare dragged item for scrolling.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._prepareScroll = function() {
    var item = this._item;

    // If item is not active do nothing.
    if (!item._isActive) return;

    var element = item._element;
    var grid = this._getGrid();
    var settings = grid._settings;
    var axis = settings.dragAxis;
    var gridContainer = grid._element;
    var offsetDiff;

    // Calculate element's rect and x/y diff.
    var rect = element.getBoundingClientRect();
    var xDiff = this._elementClientX - rect.left;
    var yDiff = this._elementClientY - rect.top;

    // Update container diff.
    if (this._container !== gridContainer) {
      offsetDiff = getOffsetDiff(this._containingBlock, gridContainer);
      this._containerDiffX = offsetDiff.left;
      this._containerDiffY = offsetDiff.top;
    }

    // Update horizontal position data.
    if (axis !== 'y') {
      this._left += xDiff;
      this._gridX = this._left - this._containerDiffX;
    }

    // Update vertical position data.
    if (axis !== 'x') {
      this._top += yDiff;
      this._gridY = this._top - this._containerDiffY;
    }

    // Overlap handling.
    if (settings.dragSort) this._checkOverlapDebounce();
  };

  /**
   * Apply scroll to dragged item.
   *
   * @private
   * @memberof ItemDrag.prototype
   */
  ItemDrag.prototype._applyScroll = function() {
    var item = this._item;

    // If item is not active do nothing.
    if (!item._isActive) return;

    // Update element's translateX/Y values.
    item._element.style[transformProp] = getTranslateString(this._left, this._top);

    // Emit dragScroll event.
    this._getGrid()._emit(eventDragScroll, item, this._scrollEvent);
  };

  /**
   * Drag end handler.
   *
   * @private
   * @memberof ItemDrag.prototype
   * @param {DraggerEvent} event
   */
  ItemDrag.prototype._onEnd = function(event) {
    var item = this._item;
    var element = item._element;
    var grid = this._getGrid();
    var settings = grid._settings;
    var release = item._release;

    // If item is not active, reset drag.
    if (!item._isActive) {
      this.stop();
      return;
    }

    // Cancel queued move and scroll ticks.
    cancelMoveTick(item._id);
    cancelScrollTick(item._id);

    // Finish currently queued overlap check.
    settings.dragSort && this._checkOverlapDebounce('finish');

    // Remove scroll listeners.
    this._unbindScrollListeners();

    // Setup release data.
    release._containerDiffX = this._containerDiffX;
    release._containerDiffY = this._containerDiffY;

    // Reset drag data.
    this._reset();

    // Remove drag class name from element.
    removeClass(element, settings.itemDraggingClass);

    // Emit dragEnd event.
    grid._emit(eventDragEnd, item, event);

    // Finish up the migration process or start the release process.
    this._isMigrating ? this._finishMigration() : release.start();
  };

  /**
   * Private helpers
   * ***************
   */

  /**
   * Calculate how many percent the intersection area of two rectangles is from
   * the maximum potential intersection area between the rectangles.
   *
   * @param {Rectangle} a
   * @param {Rectangle} b
   * @returns {Number}
   *   - A number between 0-100.
   */
  function getRectOverlapScore(a, b) {
    // Return 0 immediately if the rectangles do not overlap.
    if (
      a.left + a.width <= b.left ||
      b.left + b.width <= a.left ||
      a.top + a.height <= b.top ||
      b.top + b.height <= a.top
    ) {
      return 0;
    }

    // Calculate intersection area's width, height, max height and max width.
    var width = Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left);
    var height = Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top);
    var maxWidth = Math.min(a.width, b.width);
    var maxHeight = Math.min(a.height, b.height);

    return ((width * height) / (maxWidth * maxHeight)) * 100;
  }

  /**
   * Check if an element is an anchor element and open the href url if possible.
   *
   * @param {HTMLElement} element
   */
  function openAnchorHref(element) {
    // Make sure the element is anchor element.
    if (element.tagName.toLowerCase() !== 'a') return;

    // Get href and make sure it exists.
    var href = element.getAttribute('href');
    if (!href) return;

    // Finally let's navigate to the link href.
    var target = element.getAttribute('target');
    if (target && target !== '_self') {
      window.open(href, target);
    } else {
      window.location.href = href;
    }
  }

  /**
   * Drag placeholder.
   *
   * @class
   * @param {Item} item
   */
  function ItemDragPlaceholder(item) {
    this._item = item;
    this._animate = new ItemAnimate();
    this._element = null;
    this._className = '';
    this._didMigrate = false;
    this._resetAfterLayout = false;
    this._currentLeft = 0;
    this._currentTop = 0;
    this._nextLeft = 0;
    this._nextTop = 0;

    // Bind animation handlers.
    this._setupAnimation = this._setupAnimation.bind(this);
    this._startAnimation = this._startAnimation.bind(this);

    // Bind event handlers.
    this._onLayoutStart = this._onLayoutStart.bind(this);
    this._onLayoutEnd = this._onLayoutEnd.bind(this);
    this._onReleaseEnd = this._onReleaseEnd.bind(this);
    this._onMigrate = this._onMigrate.bind(this);
  }

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Move placeholder to a new position.
   *
   * @private
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype._onLayoutStart = function() {
    var item = this._item;
    var grid = item.getGrid();

    // Find out the item's new (unapplied) left and top position.
    var itemIndex = grid._items.indexOf(item);
    var nextLeft = grid._layout.slots[itemIndex * 2];
    var nextTop = grid._layout.slots[itemIndex * 2 + 1];

    // If item's position did not change and the item did not migrate we can
    // safely skip layout.
    if (!this._didMigrate && item._left === nextLeft && item._top === nextTop) {
      return;
    }

    // Slots data is calculated with item margins added to them so we need to add
    // item's left and top margin to the slot data to get the placeholder's
    // next position.
    nextLeft += item._marginLeft;
    nextTop += item._marginTop;

    // Just snap to new position without any animations if no animation is
    // required or if placeholder moves between grids.
    var animEnabled = grid._settings.dragPlaceholder.duration > 0;
    if (!animEnabled || this._didMigrate) {
      // Cancel potential (queued) layout tick.
      cancelPlaceholderTick(item._id);

      // Snap placeholder to correct position.
      var targetStyles = { transform: getTranslateString(nextLeft, nextTop) };
      if (this._animate.isAnimating()) {
        this._animate.stop(targetStyles);
      } else {
        setStyles(this._element, targetStyles);
      }

      // Move placeholder inside correct container after migration.
      if (this._didMigrate) {
        grid.getElement().appendChild(this._element);
        this._didMigrate = false;
      }

      return;
    }

    // Start the placeholder's layout animation in the next tick. We do this to
    // avoid layout thrashing.
    this._nextLeft = nextLeft;
    this._nextTop = nextTop;
    addPlaceholderTick(item._id, this._setupAnimation, this._startAnimation);
  };

  /**
   * Prepare placeholder for layout animation.
   *
   * @private
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype._setupAnimation = function() {
    if (!this.isActive()) return;

    var translate = getTranslate(this._element);
    this._currentLeft = translate.x;
    this._currentTop = translate.y;
  };

  /**
   * Start layout animation.
   *
   * @private
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype._startAnimation = function() {
    if (!this.isActive()) return;

    var animation = this._animate;
    var currentLeft = this._currentLeft;
    var currentTop = this._currentTop;
    var nextLeft = this._nextLeft;
    var nextTop = this._nextTop;
    var targetStyles = { transform: getTranslateString(nextLeft, nextTop) };

    // If placeholder is already in correct position let's just stop animation
    // and be done with it.
    if (currentLeft === nextLeft && currentTop === nextTop) {
      if (animation.isAnimating()) animation.stop(targetStyles);
      return;
    }

    // Otherwise let's start the animation.
    var settings = this._item.getGrid()._settings.dragPlaceholder;
    var currentStyles = { transform: getTranslateString(currentLeft, currentTop) };
    animation.start(currentStyles, targetStyles, {
      duration: settings.duration,
      easing: settings.easing,
      onFinish: this._onLayoutEnd
    });
  };

  /**
   * Layout end handler.
   *
   * @private
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype._onLayoutEnd = function() {
    if (this._resetAfterLayout) {
      this.reset();
    }
  };

  /**
   * Drag end handler. This handler is called when dragReleaseEnd event is
   * emitted and receives the event data as it's argument.
   *
   * @private
   * @memberof ItemDragPlaceholder.prototype
   * @param {Item} item
   */
  ItemDragPlaceholder.prototype._onReleaseEnd = function(item) {
    if (item._id === this._item._id) {
      // If the placeholder is not animating anymore we can safely reset it.
      if (!this._animate.isAnimating()) {
        this.reset();
        return;
      }

      // If the placeholder item is still animating here, let's wait for it to
      // finish it's animation.
      this._resetAfterLayout = true;
    }
  };

  /**
   * Migration start handler. This handler is called when beforeSend event is
   * emitted and receives the event data as it's argument.
   *
   * @private
   * @memberof ItemDragPlaceholder.prototype
   * @param {Object} data
   * @param {Item} data.item
   * @param {Grid} data.fromGrid
   * @param {Number} data.fromIndex
   * @param {Grid} data.toGrid
   * @param {Number} data.toIndex
   */
  ItemDragPlaceholder.prototype._onMigrate = function(data) {
    // Make sure we have a matching item.
    if (data.item !== this._item) return;

    var grid = this._item.getGrid();
    var nextGrid = data.toGrid;

    // Unbind listeners from current grid.
    grid.off(eventDragReleaseEnd, this._onReleaseEnd);
    grid.off(eventLayoutStart, this._onLayoutStart);
    grid.off(eventBeforeSend, this._onMigrate);

    // Bind listeners to the next grid.
    nextGrid.on(eventDragReleaseEnd, this._onReleaseEnd);
    nextGrid.on(eventLayoutStart, this._onLayoutStart);
    nextGrid.on(eventBeforeSend, this._onMigrate);

    // Mark the item as migrated.
    this._didMigrate = true;
  };

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Create placeholder. Note that this method only writes to DOM and does not
   * read anything from DOM so it should not cause any additional layout
   * thrashing when it's called at the end of the drag start procedure.
   *
   * @public
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype.create = function() {
    // If we already have placeholder set up we can skip the initiation logic.
    if (this.isActive()) {
      this._resetAfterLayout = false;
      return;
    }

    var item = this._item;
    var grid = item.getGrid();
    var settings = grid._settings;
    var animation = this._animate;

    // Create placeholder element.
    var element;
    if (isFunction(settings.dragPlaceholder.createElement)) {
      element = settings.dragPlaceholder.createElement(item);
    } else {
      element = window.document.createElement('div');
    }
    this._element = element;

    // Update element to animation instance.
    animation._element = element;

    // Add placeholder class to the placeholder element.
    this._className = settings.itemPlaceholderClass || '';
    if (this._className) {
      addClass(element, this._className);
    }

    // Position the placeholder item correctly.
    var left = item._left + item._marginLeft;
    var top = item._top + item._marginTop;
    setStyles(element, {
      display: 'block',
      position: 'absolute',
      left: '0',
      top: '0',
      width: item._width + 'px',
      height: item._height + 'px',
      transform: getTranslateString(left, top)
    });

    // Bind event listeners.
    grid.on(eventLayoutStart, this._onLayoutStart);
    grid.on(eventDragReleaseEnd, this._onReleaseEnd);
    grid.on(eventBeforeSend, this._onMigrate);

    // onCreate hook.
    if (isFunction(settings.dragPlaceholder.onCreate)) {
      settings.dragPlaceholder.onCreate(item, element);
    }

    // Insert the placeholder element to the grid.
    grid.getElement().appendChild(element);
  };

  /**
   * Reset placeholder data.
   *
   * @public
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype.reset = function() {
    if (!this.isActive()) return;

    var element = this._element;
    var item = this._item;
    var grid = item.getGrid();
    var settings = grid._settings;
    var animation = this._animate;

    // Reset flag.
    this._resetAfterLayout = false;

    // Cancel potential (queued) layout tick.
    cancelPlaceholderTick(item._id);

    // Reset animation instance.
    animation.stop();
    animation._element = null;

    // Unbind event listeners.
    grid.off(eventDragReleaseEnd, this._onReleaseEnd);
    grid.off(eventLayoutStart, this._onLayoutStart);
    grid.off(eventBeforeSend, this._onMigrate);

    // Remove placeholder class from the placeholder element.
    if (this._className) {
      removeClass(element, this._className);
      this._className = '';
    }

    // Remove element.
    element.parentNode.removeChild(element);
    this._element = null;

    // onRemove hook. Note that here we use the current grid's onRemove callback
    // so if the item has migrated during drag the onRemove method will not be
    // the originating grid's method.
    if (isFunction(settings.dragPlaceholder.onRemove)) {
      settings.dragPlaceholder.onRemove(item, element);
    }
  };

  /**
   * Update placeholder's dimensions.
   *
   * @public
   * @memberof ItemDragPlaceholder.prototype
   * @param {Number} width
   * @param {height} height
   */
  ItemDragPlaceholder.prototype.updateDimensions = function(width, height) {
    if (this.isActive()) {
      setStyles(this._element, {
        width: width + 'px',
        height: height + 'px'
      });
    }
  };

  /**
   * Check if placeholder is currently active (visible).
   *
   * @public
   * @memberof ItemDragPlaceholder.prototype
   * @returns {Boolean}
   */
  ItemDragPlaceholder.prototype.isActive = function() {
    return !!this._element;
  };

  /**
   * Destroy placeholder instance.
   *
   * @public
   * @memberof ItemDragPlaceholder.prototype
   */
  ItemDragPlaceholder.prototype.destroy = function() {
    this.reset();
    this._animate.destroy();
    this._item = this._animate = null;
  };

  /**
   * Queue constructor.
   *
   * @class
   */
  function Queue() {
    this._queue = [];
    this._isDestroyed = false;
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Add callback to the queue.
   *
   * @public
   * @memberof Queue.prototype
   * @param {Function} callback
   * @returns {Queue}
   */
  Queue.prototype.add = function(callback) {
    if (this._isDestroyed) return this;
    this._queue.push(callback);
    return this;
  };

  /**
   * Process queue callbacks and reset the queue.
   *
   * @public
   * @memberof Queue.prototype
   * @param {*} arg1
   * @param {*} arg2
   * @returns {Queue}
   */
  Queue.prototype.flush = function(arg1, arg2) {
    if (this._isDestroyed) return this;

    var queue = this._queue;
    var length = queue.length;
    var i;

    // Quit early if the queue is empty.
    if (!length) return this;

    var singleCallback = length === 1;
    var snapshot = singleCallback ? queue[0] : queue.slice(0);

    // Reset queue.
    queue.length = 0;

    // If we only have a single callback let's just call it.
    if (singleCallback) {
      snapshot(arg1, arg2);
      return this;
    }

    // If we have multiple callbacks, let's process them.
    for (i = 0; i < length; i++) {
      snapshot[i](arg1, arg2);
      if (this._isDestroyed) break;
    }

    return this;
  };

  /**
   * Destroy Queue instance.
   *
   * @public
   * @memberof Queue.prototype
   * @returns {Queue}
   */
  Queue.prototype.destroy = function() {
    if (this._isDestroyed) return this;

    this._isDestroyed = true;
    this._queue.length = 0;

    return this;
  };

  /**
   * Layout manager for Item instance.
   *
   * @class
   * @param {Item} item
   */
  function ItemLayout(item) {
    this._item = item;
    this._isActive = false;
    this._isDestroyed = false;
    this._isInterrupted = false;
    this._currentStyles = {};
    this._targetStyles = {};
    this._currentLeft = 0;
    this._currentTop = 0;
    this._offsetLeft = 0;
    this._offsetTop = 0;
    this._skipNextAnimation = false;
    this._animateOptions = {
      onFinish: this._finish.bind(this)
    };
    this._queue = new Queue();

    // Bind animation handlers and finish method.
    this._setupAnimation = this._setupAnimation.bind(this);
    this._startAnimation = this._startAnimation.bind(this);
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Start item layout based on it's current data.
   *
   * @public
   * @memberof ItemLayout.prototype
   * @param {Boolean} [instant=false]
   * @param {Function} [onFinish]
   * @returns {ItemLayout}
   */
  ItemLayout.prototype.start = function(instant, onFinish) {
    if (this._isDestroyed) return;

    var item = this._item;
    var element = item._element;
    var release = item._release;
    var gridSettings = item.getGrid()._settings;
    var isPositioning = this._isActive;
    var isJustReleased = release._isActive && release._isPositioningStarted === false;
    var animDuration = isJustReleased
      ? gridSettings.dragReleaseDuration
      : gridSettings.layoutDuration;
    var animEasing = isJustReleased ? gridSettings.dragReleaseEasing : gridSettings.layoutEasing;
    var animEnabled = !instant && !this._skipNextAnimation && animDuration > 0;
    var isAnimating;

    // If the item is currently positioning process current layout callback
    // queue with interrupted flag on.
    if (isPositioning) this._queue.flush(true, item);

    // Mark release positioning as started.
    if (isJustReleased) release._isPositioningStarted = true;

    // Push the callback to the callback queue.
    if (isFunction(onFinish)) this._queue.add(onFinish);

    // If no animations are needed, easy peasy!
    if (!animEnabled) {
      this._updateOffsets();
      this._updateTargetStyles();
      isAnimating = item._animate.isAnimating();
      this.stop(false, this._targetStyles);
      !isAnimating && setStyles(element, this._targetStyles);
      this._skipNextAnimation = false;
      return this._finish();
    }

    // Set item active and store some data for the animation that is about to be
    // triggered.
    this._isActive = true;
    this._animateOptions.easing = animEasing;
    this._animateOptions.duration = animDuration;
    this._isInterrupted = isPositioning;

    // Start the item's layout animation in the next tick.
    addLayoutTick(item._id, this._setupAnimation, this._startAnimation);

    return this;
  };

  /**
   * Stop item's position animation if it is currently animating.
   *
   * @public
   * @memberof ItemLayout.prototype
   * @param {Boolean} [processCallbackQueue=false]
   * @param {Object} [targetStyles]
   * @returns {ItemLayout}
   */
  ItemLayout.prototype.stop = function(processCallbackQueue, targetStyles) {
    if (this._isDestroyed || !this._isActive) return this;

    var item = this._item;

    // Cancel animation init.
    cancelLayoutTick(item._id);

    // Stop animation.
    item._animate.stop(targetStyles);

    // Remove positioning class.
    removeClass(item._element, item.getGrid()._settings.itemPositioningClass);

    // Reset active state.
    this._isActive = false;

    // Process callback queue if needed.
    if (processCallbackQueue) this._queue.flush(true, item);

    return this;
  };

  /**
   * Destroy the instance and stop current animation if it is running.
   *
   * @public
   * @memberof ItemLayout.prototype
   * @returns {ItemLayout}
   */
  ItemLayout.prototype.destroy = function() {
    if (this._isDestroyed) return this;
    this.stop(true, {});
    this._queue.destroy();
    this._item = this._currentStyles = this._targetStyles = this._animateOptions = null;
    this._isDestroyed = true;
    return this;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Calculate and update item's current layout offset data.
   *
   * @private
   * @memberof ItemLayout.prototype
   */
  ItemLayout.prototype._updateOffsets = function() {
    if (this._isDestroyed) return;

    var item = this._item;
    var migrate = item._migrate;
    var release = item._release;

    this._offsetLeft = release._isActive
      ? release._containerDiffX
      : migrate._isActive
      ? migrate._containerDiffX
      : 0;

    this._offsetTop = release._isActive
      ? release._containerDiffY
      : migrate._isActive
      ? migrate._containerDiffY
      : 0;
  };

  /**
   * Calculate and update item's layout target styles.
   *
   * @private
   * @memberof ItemLayout.prototype
   */
  ItemLayout.prototype._updateTargetStyles = function() {
    if (this._isDestroyed) return;
    this._targetStyles.transform = getTranslateString(
      this._item._left + this._offsetLeft,
      this._item._top + this._offsetTop
    );
  };

  /**
   * Finish item layout procedure.
   *
   * @private
   * @memberof ItemLayout.prototype
   */
  ItemLayout.prototype._finish = function() {
    if (this._isDestroyed) return;

    var item = this._item;
    var migrate = item._migrate;
    var release = item._release;

    // Mark the item as inactive and remove positioning classes.
    if (this._isActive) {
      this._isActive = false;
      removeClass(item._element, item.getGrid()._settings.itemPositioningClass);
    }

    // Finish up release and migration.
    if (release._isActive) release.stop();
    if (migrate._isActive) migrate.stop();

    // Process the callback queue.
    this._queue.flush(false, item);
  };

  /**
   * Prepare item for layout animation.
   *
   * @private
   * @memberof ItemLayout.prototype
   */
  ItemLayout.prototype._setupAnimation = function() {
    var translate = getTranslate(this._item._element);
    this._currentLeft = translate.x;
    this._currentTop = translate.y;
  };

  /**
   * Start layout animation.
   *
   * @private
   * @memberof ItemLayout.prototype
   */
  ItemLayout.prototype._startAnimation = function() {
    var item = this._item;
    var settings = item.getGrid()._settings;

    // Let's update the offset data and target styles.
    this._updateOffsets();
    this._updateTargetStyles();

    // If the item is already in correct position let's quit early.
    if (
      item._left === this._currentLeft - this._offsetLeft &&
      item._top === this._currentTop - this._offsetTop
    ) {
      if (this._isInterrupted) this.stop(false, this._targetStyles);
      this._isActive = false;
      this._finish();
      return;
    }

    // Set item's positioning class if needed.
    if (!this._isInterrupted) {
      addClass(item._element, settings.itemPositioningClass);
    }

    // Get current styles for animation.
    this._currentStyles.transform = getTranslateString(this._currentLeft, this._currentTop);

    // Animate.
    item._animate.start(this._currentStyles, this._targetStyles, this._animateOptions);
  };

  var tempStyles = {};

  /**
   * The migrate process handler constructor.
   *
   * @class
   * @param {Item} item
   */
  function ItemMigrate(item) {
    // Private props.
    this._item = item;
    this._isActive = false;
    this._isDestroyed = false;
    this._container = false;
    this._containerDiffX = 0;
    this._containerDiffY = 0;
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Start the migrate process of an item.
   *
   * @public
   * @memberof ItemMigrate.prototype
   * @param {Grid} targetGrid
   * @param {GridSingleItemQuery} position
   * @param {HTMLElement} [container]
   * @returns {ItemMigrate}
   */
  ItemMigrate.prototype.start = function(targetGrid, position, container) {
    if (this._isDestroyed) return this;

    var item = this._item;
    var element = item._element;
    var isVisible = item.isVisible();
    var grid = item.getGrid();
    var settings = grid._settings;
    var targetSettings = targetGrid._settings;
    var targetElement = targetGrid._element;
    var targetItems = targetGrid._items;
    var currentIndex = grid._items.indexOf(item);
    var targetContainer = container || window.document.body;
    var targetIndex;
    var targetItem;
    var currentContainer;
    var offsetDiff;
    var containerDiff;
    var translate;
    var translateX;
    var translateY;

    // Get target index.
    if (typeof position === 'number') {
      targetIndex = normalizeArrayIndex(targetItems, position, true);
    } else {
      targetItem = targetGrid._getItem(position);
      /** @todo Consider throwing an error here instead of silently failing. */
      if (!targetItem) return this;
      targetIndex = targetItems.indexOf(targetItem);
    }

    // Get current translateX and translateY values if needed.
    if (item.isPositioning() || this._isActive || item.isReleasing()) {
      translate = getTranslate(element);
      translateX = translate.x;
      translateY = translate.y;
    }

    // Abort current positioning.
    if (item.isPositioning()) {
      item._layout.stop(true, { transform: getTranslateString(translateX, translateY) });
    }

    // Abort current migration.
    if (this._isActive) {
      translateX -= this._containerDiffX;
      translateY -= this._containerDiffY;
      this.stop(true, { transform: getTranslateString(translateX, translateY) });
    }

    // Abort current release.
    if (item.isReleasing()) {
      translateX -= item._release._containerDiffX;
      translateY -= item._release._containerDiffY;
      item._release.stop(true, { transform: getTranslateString(translateX, translateY) });
    }

    // Stop current visibility animations.
    item._visibility._stopAnimation();

    // Destroy current drag.
    if (item._drag) item._drag.destroy();

    // Process current visibility animation queue.
    item._visibility._queue.flush(true, item);

    // Emit beforeSend event.
    if (grid._hasListeners(eventBeforeSend)) {
      grid._emit(eventBeforeSend, {
        item: item,
        fromGrid: grid,
        fromIndex: currentIndex,
        toGrid: targetGrid,
        toIndex: targetIndex
      });
    }

    // Emit beforeReceive event.
    if (targetGrid._hasListeners(eventBeforeReceive)) {
      targetGrid._emit(eventBeforeReceive, {
        item: item,
        fromGrid: grid,
        fromIndex: currentIndex,
        toGrid: targetGrid,
        toIndex: targetIndex
      });
    }

    // Remove current classnames.
    removeClass(element, settings.itemClass);
    removeClass(element, settings.itemVisibleClass);
    removeClass(element, settings.itemHiddenClass);

    // Add new classnames.
    addClass(element, targetSettings.itemClass);
    addClass(element, isVisible ? targetSettings.itemVisibleClass : targetSettings.itemHiddenClass);

    // Move item instance from current grid to target grid.
    grid._items.splice(currentIndex, 1);
    arrayInsert(targetItems, item, targetIndex);

    // Update item's grid id reference.
    item._gridId = targetGrid._id;

    // Get current container.
    currentContainer = element.parentNode;

    // Move the item inside the target container if it's different than the
    // current container.
    if (targetContainer !== currentContainer) {
      targetContainer.appendChild(element);
      offsetDiff = getOffsetDiff(targetContainer, currentContainer, true);
      if (!translate) {
        translate = getTranslate(element);
        translateX = translate.x;
        translateY = translate.y;
      }
      element.style[transformProp] = getTranslateString(
        translateX + offsetDiff.left,
        translateY + offsetDiff.top
      );
    }

    // Update child element's styles to reflect the current visibility state.
    item._child.removeAttribute('style');
    setStyles(item._child, isVisible ? targetSettings.visibleStyles : targetSettings.hiddenStyles);

    // Update display style.
    element.style.display = isVisible ? 'block' : 'hidden';

    // Get offset diff for the migration data.
    containerDiff = getOffsetDiff(targetContainer, targetElement, true);

    // Update item's cached dimensions and sort data.
    item._refreshDimensions();
    item._refreshSortData();

    // Create new drag handler.
    item._drag = targetSettings.dragEnabled ? new ItemDrag(item) : null;

    // Setup migration data.
    this._isActive = true;
    this._container = targetContainer;
    this._containerDiffX = containerDiff.left;
    this._containerDiffY = containerDiff.top;

    // Emit send event.
    if (grid._hasListeners(eventSend)) {
      grid._emit(eventSend, {
        item: item,
        fromGrid: grid,
        fromIndex: currentIndex,
        toGrid: targetGrid,
        toIndex: targetIndex
      });
    }

    // Emit receive event.
    if (targetGrid._hasListeners(eventReceive)) {
      targetGrid._emit(eventReceive, {
        item: item,
        fromGrid: grid,
        fromIndex: currentIndex,
        toGrid: targetGrid,
        toIndex: targetIndex
      });
    }

    return this;
  };

  /**
   * End the migrate process of an item. This method can be used to abort an
   * ongoing migrate process (animation) or finish the migrate process.
   *
   * @public
   * @memberof ItemMigrate.prototype
   * @param {Boolean} [abort=false]
   *  - Should the migration be aborted?
   * @param {Object} [currentStyles]
   *  - Optional current translateX and translateY styles.
   * @returns {ItemMigrate}
   */
  ItemMigrate.prototype.stop = function(abort, currentStyles) {
    if (this._isDestroyed || !this._isActive) return this;

    var item = this._item;
    var element = item._element;
    var grid = item.getGrid();
    var gridElement = grid._element;
    var translate;

    if (this._container !== gridElement) {
      if (!currentStyles) {
        if (abort) {
          translate = getTranslate(element);
          tempStyles.transform = getTranslateString(
            translate.x - this._containerDiffX,
            translate.y - this._containerDiffY
          );
        } else {
          tempStyles.transform = getTranslateString(item._left, item._top);
        }
        currentStyles = tempStyles;
      }
      gridElement.appendChild(element);
      setStyles(element, currentStyles);
    }

    this._isActive = false;
    this._container = null;
    this._containerDiffX = 0;
    this._containerDiffY = 0;

    return this;
  };

  /**
   * Destroy instance.
   *
   * @public
   * @memberof ItemMigrate.prototype
   * @returns {ItemMigrate}
   */
  ItemMigrate.prototype.destroy = function() {
    if (this._isDestroyed) return this;
    this.stop(true);
    this._item = null;
    this._isDestroyed = true;
    return this;
  };

  var tempStyles$1 = {};

  /**
   * The release process handler constructor. Although this might seem as proper
   * fit for the drag process this needs to be separated into it's own logic
   * because there might be a scenario where drag is disabled, but the release
   * process still needs to be implemented (dragging from a grid to another).
   *
   * @class
   * @param {Item} item
   */
  function ItemRelease(item) {
    this._item = item;
    this._isActive = false;
    this._isDestroyed = false;
    this._isPositioningStarted = false;
    this._containerDiffX = 0;
    this._containerDiffY = 0;
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Start the release process of an item.
   *
   * @public
   * @memberof ItemRelease.prototype
   * @returns {ItemRelease}
   */
  ItemRelease.prototype.start = function() {
    if (this._isDestroyed || this._isActive) return this;

    var item = this._item;
    var grid = item.getGrid();

    // Flag release as active.
    this._isActive = true;

    // Add release class name to the released element.
    addClass(item._element, grid._settings.itemReleasingClass);

    // Emit dragReleaseStart event.
    grid._emit(eventDragReleaseStart, item);

    // Position the released item.
    item._layout.start(false);

    return this;
  };

  /**
   * End the release process of an item. This method can be used to abort an
   * ongoing release process (animation) or finish the release process.
   *
   * @public
   * @memberof ItemRelease.prototype
   * @param {Boolean} [abort=false]
   *  - Should the release be aborted? When true, the release end event won't be
   *    emitted. Set to true only when you need to abort the release process
   *    while the item is animating to it's position.
   * @param {Object} [currentStyles]
   *  - Optional current translateX and translateY styles.
   * @returns {ItemRelease}
   */
  ItemRelease.prototype.stop = function(abort, currentStyles) {
    if (this._isDestroyed || !this._isActive) return this;

    var item = this._item;
    var element = item._element;
    var grid = item.getGrid();
    var container = grid._element;
    var translate;

    // Reset data and remove releasing class name from the element.
    this._reset();

    // If the released element is outside the grid's container element put it
    // back there and adjust position accordingly.
    if (element.parentNode !== container) {
      if (!currentStyles) {
        if (abort) {
          translate = getTranslate(element);
          tempStyles$1.transform = getTranslateString(
            translate.x - this._containerDiffX,
            translate.y - this._containerDiffY
          );
        } else {
          tempStyles$1.transform = getTranslateString(item._left, item._top);
        }
        currentStyles = tempStyles$1;
      }
      container.appendChild(element);
      setStyles(element, currentStyles);
    }

    // Emit dragReleaseEnd event.
    if (!abort) grid._emit(eventDragReleaseEnd, item);

    return this;
  };

  /**
   * Destroy instance.
   *
   * @public
   * @memberof ItemRelease.prototype
   * @returns {ItemRelease}
   */
  ItemRelease.prototype.destroy = function() {
    if (this._isDestroyed) return this;
    this.stop(true);
    this._item = null;
    this._isDestroyed = true;
    return this;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Reset public data and remove releasing class.
   *
   * @private
   * @memberof ItemRelease.prototype
   */
  ItemRelease.prototype._reset = function() {
    if (this._isDestroyed) return;
    var item = this._item;
    this._isActive = false;
    this._isPositioningStarted = false;
    this._containerDiffX = 0;
    this._containerDiffY = 0;
    removeClass(item._element, item.getGrid()._settings.itemReleasingClass);
  };

  /**
   * Get current values of the provided styles definition object.
   *
   * @param {HTMLElement} element
   * @param {Object} styles
   * @return {Object}
   */
  function getCurrentStyles(element, styles) {
    var current = {};
    for (var prop in styles) {
      current[prop] = getStyle(element, getStyleName(prop));
    }
    return current;
  }

  /**
   * Visibility manager for Item instance.
   *
   * @class
   * @param {Item} item
   */
  function ItemVisibility(item) {
    var isActive = item._isActive;
    var element = item._element;
    var settings = item.getGrid()._settings;

    this._item = item;
    this._isDestroyed = false;

    // Set up visibility states.
    this._isHidden = !isActive;
    this._isHiding = false;
    this._isShowing = false;

    // Callback queue.
    this._queue = new Queue();

    // Bind show/hide finishers.
    this._finishShow = this._finishShow.bind(this);
    this._finishHide = this._finishHide.bind(this);

    // Force item to be either visible or hidden on init.
    element.style.display = isActive ? 'block' : 'none';

    // Set visible/hidden class.
    addClass(element, isActive ? settings.itemVisibleClass : settings.itemHiddenClass);

    // Set initial styles for the child element.
    setStyles(item._child, isActive ? settings.visibleStyles : settings.hiddenStyles);
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Show item.
   *
   * @public
   * @memberof ItemVisibility.prototype
   * @param {Boolean} instant
   * @param {Function} [onFinish]
   * @returns {ItemVisibility}
   */
  ItemVisibility.prototype.show = function(instant, onFinish) {
    if (this._isDestroyed) return this;

    var item = this._item;
    var element = item._element;
    var queue = this._queue;
    var callback = isFunction(onFinish) ? onFinish : null;
    var grid = item.getGrid();
    var settings = grid._settings;

    // If item is visible call the callback and be done with it.
    if (!this._isShowing && !this._isHidden) {
      callback && callback(false, item);
      return this;
    }

    // If item is showing and does not need to be shown instantly, let's just
    // push callback to the callback queue and be done with it.
    if (this._isShowing && !instant) {
      callback && queue.add(callback);
      return this;
    }

    // If the item is hiding or hidden process the current visibility callback
    // queue with the interrupted flag active, update classes and set display
    // to block if necessary.
    if (!this._isShowing) {
      queue.flush(true, item);
      removeClass(element, settings.itemHiddenClass);
      addClass(element, settings.itemVisibleClass);
      if (!this._isHiding) element.style.display = 'block';
    }

    // Push callback to the callback queue.
    callback && queue.add(callback);

    // Update visibility states.
    item._isActive = this._isShowing = true;
    this._isHiding = this._isHidden = false;

    // Finally let's start show animation.
    this._startAnimation(true, instant, this._finishShow);

    return this;
  };

  /**
   * Hide item.
   *
   * @public
   * @memberof ItemVisibility.prototype
   * @param {Boolean} instant
   * @param {Function} [onFinish]
   * @returns {ItemVisibility}
   */
  ItemVisibility.prototype.hide = function(instant, onFinish) {
    if (this._isDestroyed) return this;

    var item = this._item;
    var element = item._element;
    var queue = this._queue;
    var callback = isFunction(onFinish) ? onFinish : null;
    var grid = item.getGrid();
    var settings = grid._settings;

    // If item is already hidden call the callback and be done with it.
    if (!this._isHiding && this._isHidden) {
      callback && callback(false, item);
      return this;
    }

    // If item is hiding and does not need to be hidden instantly, let's just
    // push callback to the callback queue and be done with it.
    if (this._isHiding && !instant) {
      callback && queue.add(callback);
      return this;
    }

    // If the item is showing or visible process the current visibility callback
    // queue with the interrupted flag active, update classes and set display
    // to block if necessary.
    if (!this._isHiding) {
      queue.flush(true, item);
      addClass(element, settings.itemHiddenClass);
      removeClass(element, settings.itemVisibleClass);
    }

    // Push callback to the callback queue.
    callback && queue.add(callback);

    // Update visibility states.
    this._isHidden = this._isHiding = true;
    item._isActive = this._isShowing = false;

    // Finally let's start hide animation.
    this._startAnimation(false, instant, this._finishHide);

    return this;
  };

  /**
   * Destroy the instance and stop current animation if it is running.
   *
   * @public
   * @memberof ItemVisibility.prototype
   * @returns {ItemVisibility}
   */
  ItemVisibility.prototype.destroy = function() {
    if (this._isDestroyed) return this;

    var item = this._item;
    var element = item._element;
    var grid = item.getGrid();
    var queue = this._queue;
    var settings = grid._settings;

    // Stop visibility animation.
    this._stopAnimation({});

    // Fire all uncompleted callbacks with interrupted flag and destroy the queue.
    queue.flush(true, item).destroy();

    // Remove visible/hidden classes.
    removeClass(element, settings.itemVisibleClass);
    removeClass(element, settings.itemHiddenClass);

    // Reset state.
    this._item = null;
    this._isHiding = this._isShowing = false;
    this._isDestroyed = this._isHidden = true;

    return this;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Start visibility animation.
   *
   * @private
   * @memberof ItemVisibility.prototype
   * @param {Boolean} toVisible
   * @param {Boolean} [instant]
   * @param {Function} [onFinish]
   */
  ItemVisibility.prototype._startAnimation = function(toVisible, instant, onFinish) {
    if (this._isDestroyed) return;

    var item = this._item;
    var settings = item.getGrid()._settings;
    var targetStyles = toVisible ? settings.visibleStyles : settings.hiddenStyles;
    var duration = parseInt(toVisible ? settings.showDuration : settings.hideDuration) || 0;
    var easing = (toVisible ? settings.showEasing : settings.hideEasing) || 'ease';
    var isInstant = instant || duration <= 0;
    var currentStyles;

    // No target styles? Let's quit early.
    if (!targetStyles) {
      onFinish && onFinish();
      return;
    }

    // Cancel queued visibility tick.
    cancelVisibilityTick(item._id);

    // If we need to apply the styles instantly without animation.
    if (isInstant) {
      if (item._animateChild.isAnimating()) {
        item._animateChild.stop(targetStyles);
      } else {
        setStyles(item._child, targetStyles);
      }
      onFinish && onFinish();
      return;
    }

    // Start the animation in the next tick (to avoid layout thrashing).
    addVisibilityTick(
      item._id,
      function() {
        currentStyles = getCurrentStyles(item._child, targetStyles);
      },
      function() {
        item._animateChild.start(currentStyles, targetStyles, {
          duration: duration,
          easing: easing,
          onFinish: onFinish
        });
      }
    );
  };

  /**
   * Stop visibility animation.
   *
   * @private
   * @memberof ItemVisibility.prototype
   * @param {Object} [targetStyles]
   */
  ItemVisibility.prototype._stopAnimation = function(targetStyles) {
    if (this._isDestroyed) return;
    var item = this._item;
    cancelVisibilityTick(item._id);
    item._animateChild.stop(targetStyles);
  };

  /**
   * Finish show procedure.
   *
   * @private
   * @memberof ItemVisibility.prototype
   */
  ItemVisibility.prototype._finishShow = function() {
    if (this._isHidden) return;
    this._isShowing = false;
    this._queue.flush(false, this._item);
  };

  /**
   * Finish hide procedure.
   *
   * @private
   * @memberof ItemVisibility.prototype
   */
  var finishStyles = {};
  ItemVisibility.prototype._finishHide = function() {
    if (!this._isHidden) return;
    var item = this._item;
    this._isHiding = false;
    finishStyles.transform = getTranslateString(0, 0);
    item._layout.stop(true, finishStyles);
    item._element.style.display = 'none';
    this._queue.flush(false, item);
  };

  var id = 0;

  /**
   * Returns a unique numeric id (increments a base value on every call).
   * @returns {Number}
   */
  function createUid() {
    return ++id;
  }

  /**
   * Creates a new Item instance for a Grid instance.
   *
   * @class
   * @param {Grid} grid
   * @param {HTMLElement} element
   * @param {Boolean} [isActive]
   */
  function Item(grid, element, isActive) {
    var settings = grid._settings;

    // Create instance id.
    this._id = createUid();

    // Reference to connected Grid instance's id.
    this._gridId = grid._id;

    // Destroyed flag.
    this._isDestroyed = false;

    // Set up initial positions.
    this._left = 0;
    this._top = 0;

    // The elements.
    this._element = element;
    this._child = element.children[0];

    // If the provided item element is not a direct child of the grid container
    // element, append it to the grid container.
    if (element.parentNode !== grid._element) {
      grid._element.appendChild(element);
    }

    // Set item class.
    addClass(element, settings.itemClass);

    // If isActive is not defined, let's try to auto-detect it.
    if (typeof isActive !== 'boolean') {
      isActive = getStyle(element, 'display') !== 'none';
    }

    // Set up active state (defines if the item is considered part of the layout
    // or not).
    this._isActive = isActive;

    // Set element's initial position styles.
    element.style.left = '0';
    element.style.top = '0';
    element.style[transformProp] = getTranslateString(0, 0);

    // Initiate item's animation controllers.
    this._animate = new ItemAnimate(element);
    this._animateChild = new ItemAnimate(this._child);

    // Setup visibility handler.
    this._visibility = new ItemVisibility(this);

    // Set up layout handler.
    this._layout = new ItemLayout(this);

    // Set up migration handler data.
    this._migrate = new ItemMigrate(this);

    // Set up release handler. Note that although this is fully linked to dragging
    // this still needs to be always instantiated to handle migration scenarios
    // correctly.
    this._release = new ItemRelease(this);

    // Set up drag placeholder handler. Note that although this is fully linked to
    // dragging this still needs to be always instantiated to handle migration
    // scenarios correctly.
    this._dragPlaceholder = new ItemDragPlaceholder(this);

    // Set up drag handler.
    this._drag = settings.dragEnabled ? new ItemDrag(this) : null;

    // Set up the initial dimensions and sort data.
    this._refreshDimensions();
    this._refreshSortData();
  }

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Get the instance grid reference.
   *
   * @public
   * @memberof Item.prototype
   * @returns {Grid}
   */
  Item.prototype.getGrid = function() {
    return gridInstances[this._gridId];
  };

  /**
   * Get the instance element.
   *
   * @public
   * @memberof Item.prototype
   * @returns {HTMLElement}
   */
  Item.prototype.getElement = function() {
    return this._element;
  };

  /**
   * Get instance element's cached width.
   *
   * @public
   * @memberof Item.prototype
   * @returns {Number}
   */
  Item.prototype.getWidth = function() {
    return this._width;
  };

  /**
   * Get instance element's cached height.
   *
   * @public
   * @memberof Item.prototype
   * @returns {Number}
   */
  Item.prototype.getHeight = function() {
    return this._height;
  };

  /**
   * Get instance element's cached margins.
   *
   * @public
   * @memberof Item.prototype
   * @returns {Object}
   *   - The returned object contains left, right, top and bottom properties
   *     which indicate the item element's cached margins.
   */
  Item.prototype.getMargin = function() {
    return {
      left: this._marginLeft,
      right: this._marginRight,
      top: this._marginTop,
      bottom: this._marginBottom
    };
  };

  /**
   * Get instance element's cached position.
   *
   * @public
   * @memberof Item.prototype
   * @returns {Object}
   *   - The returned object contains left and top properties which indicate the
   *     item element's cached position in the grid.
   */
  Item.prototype.getPosition = function() {
    return {
      left: this._left,
      top: this._top
    };
  };

  /**
   * Is the item active?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isActive = function() {
    return this._isActive;
  };

  /**
   * Is the item visible?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isVisible = function() {
    return !!this._visibility && !this._visibility._isHidden;
  };

  /**
   * Is the item being animated to visible?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isShowing = function() {
    return !!(this._visibility && this._visibility._isShowing);
  };

  /**
   * Is the item being animated to hidden?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isHiding = function() {
    return !!(this._visibility && this._visibility._isHiding);
  };

  /**
   * Is the item positioning?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isPositioning = function() {
    return !!(this._layout && this._layout._isActive);
  };

  /**
   * Is the item being dragged?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isDragging = function() {
    return !!(this._drag && this._drag._isActive);
  };

  /**
   * Is the item being released?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isReleasing = function() {
    return !!(this._release && this._release._isActive);
  };

  /**
   * Is the item destroyed?
   *
   * @public
   * @memberof Item.prototype
   * @returns {Boolean}
   */
  Item.prototype.isDestroyed = function() {
    return this._isDestroyed;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Recalculate item's dimensions.
   *
   * @private
   * @memberof Item.prototype
   */
  Item.prototype._refreshDimensions = function() {
    if (this._isDestroyed || this._visibility._isHidden) return;

    var element = this._element;
    var dragPlaceholder = this._dragPlaceholder;
    var rect = element.getBoundingClientRect();

    // Calculate width and height.
    this._width = rect.width;
    this._height = rect.height;

    // Calculate margins (ignore negative margins).
    this._marginLeft = Math.max(0, getStyleAsFloat(element, 'margin-left'));
    this._marginRight = Math.max(0, getStyleAsFloat(element, 'margin-right'));
    this._marginTop = Math.max(0, getStyleAsFloat(element, 'margin-top'));
    this._marginBottom = Math.max(0, getStyleAsFloat(element, 'margin-bottom'));

    // Keep drag placeholder's dimensions synced with the item's.
    if (dragPlaceholder) {
      dragPlaceholder.updateDimensions(this._width, this._height);
    }
  };

  /**
   * Fetch and store item's sort data.
   *
   * @private
   * @memberof Item.prototype
   */
  Item.prototype._refreshSortData = function() {
    if (this._isDestroyed) return;

    var data = (this._sortData = {});
    var getters = this.getGrid()._settings.sortData;
    var prop;

    for (prop in getters) {
      data[prop] = getters[prop](this, this._element);
    }
  };

  /**
   * Destroy item instance.
   *
   * @private
   * @memberof Item.prototype
   * @param {Boolean} [removeElement=false]
   */
  Item.prototype._destroy = function(removeElement) {
    if (this._isDestroyed) return;

    var element = this._element;
    var grid = this.getGrid();
    var settings = grid._settings;
    var index = grid._items.indexOf(this);

    // Destroy handlers.
    this._release.destroy();
    this._migrate.destroy();
    this._layout.destroy();
    this._visibility.destroy();
    this._animate.destroy();
    this._animateChild.destroy();
    this._dragPlaceholder.destroy();
    this._drag && this._drag.destroy();

    // Remove all inline styles.
    element.removeAttribute('style');
    this._child.removeAttribute('style');

    // Remove item class.
    removeClass(element, settings.itemClass);

    // Remove item from Grid instance if it still exists there.
    index > -1 && grid._items.splice(index, 1);

    // Remove element from DOM.
    removeElement && element.parentNode.removeChild(element);

    // Reset state.
    this._isActive = false;
    this._isDestroyed = true;
  };

  /**
   * This is the default layout algorithm for Muuri. Based on MAXRECTS approach
   * as described by Jukka Jylänki in his survey: "A Thousand Ways to Pack the
   * Bin - A Practical Approach to Two-Dimensional Rectangle Bin Packing.".
   *
   * @class
   */
  function Packer() {
    this._slots = [];
    this._slotSizes = [];
    this._freeSlots = [];
    this._newSlots = [];
    this._rectItem = {};
    this._rectStore = [];
    this._rectId = 0;

    // The layout return data, which will be populated in getLayout.
    this._layout = {
      slots: null,
      setWidth: false,
      setHeight: false,
      width: false,
      height: false
    };

    // Bind sort handlers.
    this._sortRectsLeftTop = this._sortRectsLeftTop.bind(this);
    this._sortRectsTopLeft = this._sortRectsTopLeft.bind(this);
  }

  /**
   * @public
   * @memberof Packer.prototype
   * @param {Item[]} items
   * @param {Number} width
   * @param {Number} height
   * @param {Number[]} [slots]
   * @param {Object} [options]
   * @param {Boolean} [options.fillGaps=false]
   * @param {Boolean} [options.horizontal=false]
   * @param {Boolean} [options.alignRight=false]
   * @param {Boolean} [options.alignBottom=false]
   * @returns {LayoutData}
   */
  Packer.prototype.getLayout = function(items, width, height, slots, options) {
    var layout = this._layout;
    var fillGaps = !!(options && options.fillGaps);
    var isHorizontal = !!(options && options.horizontal);
    var alignRight = !!(options && options.alignRight);
    var alignBottom = !!(options && options.alignBottom);
    var rounding = !!(options && options.rounding);
    var slotSizes = this._slotSizes;
    var i;

    // Reset layout data.
    layout.slots = slots ? slots : this._slots;
    layout.width = isHorizontal ? 0 : rounding ? Math.round(width) : width;
    layout.height = !isHorizontal ? 0 : rounding ? Math.round(height) : height;
    layout.setWidth = isHorizontal;
    layout.setHeight = !isHorizontal;

    // Make sure slots and slot size arrays are reset.
    layout.slots.length = 0;
    slotSizes.length = 0;

    // No need to go further if items do not exist.
    if (!items.length) return layout;

    // Find slots for items.
    for (i = 0; i < items.length; i++) {
      this._addSlot(items[i], isHorizontal, fillGaps, rounding, alignRight || alignBottom);
    }

    // If the alignment is set to right we need to adjust the results.
    if (alignRight) {
      for (i = 0; i < layout.slots.length; i = i + 2) {
        layout.slots[i] = layout.width - (layout.slots[i] + slotSizes[i]);
      }
    }

    // If the alignment is set to bottom we need to adjust the results.
    if (alignBottom) {
      for (i = 1; i < layout.slots.length; i = i + 2) {
        layout.slots[i] = layout.height - (layout.slots[i] + slotSizes[i]);
      }
    }

    // Reset slots arrays and rect id.
    slotSizes.length = 0;
    this._freeSlots.length = 0;
    this._newSlots.length = 0;
    this._rectId = 0;

    return layout;
  };

  /**
   * Calculate position for the layout item. Returns the left and top position
   * of the item in pixels.
   *
   * @private
   * @memberof Packer.prototype
   * @param {Item} item
   * @param {Boolean} isHorizontal
   * @param {Boolean} fillGaps
   * @param {Boolean} rounding
   * @returns {Array}
   */
  Packer.prototype._addSlot = (function() {
    var eps = 0.001;
    var itemSlot = {};
    return function(item, isHorizontal, fillGaps, rounding, trackSize) {
      var layout = this._layout;
      var freeSlots = this._freeSlots;
      var newSlots = this._newSlots;
      var rect;
      var rectId;
      var potentialSlots;
      var ignoreCurrentSlots;
      var i;
      var ii;

      // Reset new slots.
      newSlots.length = 0;

      // Set item slot initial data.
      itemSlot.left = null;
      itemSlot.top = null;
      itemSlot.width = item._width + item._marginLeft + item._marginRight;
      itemSlot.height = item._height + item._marginTop + item._marginBottom;

      // Round item slot width and height if needed.
      if (rounding) {
        itemSlot.width = Math.round(itemSlot.width);
        itemSlot.height = Math.round(itemSlot.height);
      }

      // Try to find a slot for the item.
      for (i = 0; i < freeSlots.length; i++) {
        rectId = freeSlots[i];
        if (!rectId) continue;
        rect = this._getRect(rectId);
        if (itemSlot.width <= rect.width + eps && itemSlot.height <= rect.height + eps) {
          itemSlot.left = rect.left;
          itemSlot.top = rect.top;
          break;
        }
      }

      // If no slot was found for the item.
      if (itemSlot.left === null) {
        // Position the item in to the bottom left (vertical mode) or top right
        // (horizontal mode) of the grid.
        itemSlot.left = !isHorizontal ? 0 : layout.width;
        itemSlot.top = !isHorizontal ? layout.height : 0;

        // If gaps don't need filling do not add any current slots to the new
        // slots array.
        if (!fillGaps) {
          ignoreCurrentSlots = true;
        }
      }

      // In vertical mode, if the item's bottom overlaps the grid's bottom.
      if (!isHorizontal && itemSlot.top + itemSlot.height > layout.height) {
        // If item is not aligned to the left edge, create a new slot.
        if (itemSlot.left > 0) {
          newSlots.push(this._addRect(0, layout.height, itemSlot.left, Infinity));
        }

        // If item is not aligned to the right edge, create a new slot.
        if (itemSlot.left + itemSlot.width < layout.width) {
          newSlots.push(
            this._addRect(
              itemSlot.left + itemSlot.width,
              layout.height,
              layout.width - itemSlot.left - itemSlot.width,
              Infinity
            )
          );
        }

        // Update grid height.
        layout.height = itemSlot.top + itemSlot.height;
      }

      // In horizontal mode, if the item's right overlaps the grid's right edge.
      if (isHorizontal && itemSlot.left + itemSlot.width > layout.width) {
        // If item is not aligned to the top, create a new slot.
        if (itemSlot.top > 0) {
          newSlots.push(this._addRect(layout.width, 0, Infinity, itemSlot.top));
        }

        // If item is not aligned to the bottom, create a new slot.
        if (itemSlot.top + itemSlot.height < layout.height) {
          newSlots.push(
            this._addRect(
              layout.width,
              itemSlot.top + itemSlot.height,
              Infinity,
              layout.height - itemSlot.top - itemSlot.height
            )
          );
        }

        // Update grid width.
        layout.width = itemSlot.left + itemSlot.width;
      }

      // Clean up the current slots making sure there are no old slots that
      // overlap with the item. If an old slot overlaps with the item, split it
      // into smaller slots if necessary.
      for (i = fillGaps ? 0 : ignoreCurrentSlots ? freeSlots.length : i; i < freeSlots.length; i++) {
        rectId = freeSlots[i];
        if (!rectId) continue;
        rect = this._getRect(rectId);
        potentialSlots = this._splitRect(rect, itemSlot);
        for (ii = 0; ii < potentialSlots.length; ii++) {
          rectId = potentialSlots[ii];
          rect = this._getRect(rectId);
          // Let's make sure here that we have a big enough slot
          // (width/height > 0.49px) and also let's make sure that the slot is
          // within the boundaries of the grid.
          if (
            rect.width > 0.49 &&
            rect.height > 0.49 &&
            ((!isHorizontal && rect.top < layout.height) ||
              (isHorizontal && rect.left < layout.width))
          ) {
            newSlots.push(rectId);
          }
        }
      }

      // Sanitize new slots.
      if (newSlots.length) {
        this._purgeRects(newSlots).sort(
          isHorizontal ? this._sortRectsLeftTop : this._sortRectsTopLeft
        );
      }

      // Update layout width/height.
      if (isHorizontal) {
        layout.width = Math.max(layout.width, itemSlot.left + itemSlot.width);
      } else {
        layout.height = Math.max(layout.height, itemSlot.top + itemSlot.height);
      }

      // Add item slot data to layout slots (and store the slot size for later
      // usage too if necessary).
      layout.slots.push(itemSlot.left, itemSlot.top);
      if (trackSize) this._slotSizes.push(itemSlot.width, itemSlot.height);

      // Free/new slots switcheroo!
      this._freeSlots = newSlots;
      this._newSlots = freeSlots;
    };
  })();

  /**
   * Add a new rectangle to the rectangle store. Returns the id of the new
   * rectangle.
   *
   * @private
   * @memberof Packer.prototype
   * @param {Number} left
   * @param {Number} top
   * @param {Number} width
   * @param {Number} height
   * @returns {RectId}
   */
  Packer.prototype._addRect = function(left, top, width, height) {
    var rectId = ++this._rectId;
    var rectStore = this._rectStore;

    rectStore[rectId] = left || 0;
    rectStore[++this._rectId] = top || 0;
    rectStore[++this._rectId] = width || 0;
    rectStore[++this._rectId] = height || 0;

    return rectId;
  };

  /**
   * Get rectangle data from the rectangle store by id. Optionally you can
   * provide a target object where the rectangle data will be written in. By
   * default an internal object is reused as a target object.
   *
   * @private
   * @memberof Packer.prototype
   * @param {RectId} id
   * @param {Object} [target]
   * @returns {Object}
   */
  Packer.prototype._getRect = function(id, target) {
    var rectItem = target ? target : this._rectItem;
    var rectStore = this._rectStore;

    rectItem.left = rectStore[id] || 0;
    rectItem.top = rectStore[++id] || 0;
    rectItem.width = rectStore[++id] || 0;
    rectItem.height = rectStore[++id] || 0;

    return rectItem;
  };

  /**
   * Punch a hole into a rectangle and split the remaining area into smaller
   * rectangles (4 at max).
   *
   * @private
   * @memberof Packer.prototype
   * @param {Rectangle} rect
   * @param {Rectangle} hole
   * @returns {RectId[]}
   */
  Packer.prototype._splitRect = (function() {
    var results = [];
    return function(rect, hole) {
      // Reset old results.
      results.length = 0;

      // If the rect does not overlap with the hole add rect to the return data
      // as is.
      if (!this._doRectsOverlap(rect, hole)) {
        results.push(this._addRect(rect.left, rect.top, rect.width, rect.height));
        return results;
      }

      // Left split.
      if (rect.left < hole.left) {
        results.push(this._addRect(rect.left, rect.top, hole.left - rect.left, rect.height));
      }

      // Right split.
      if (rect.left + rect.width > hole.left + hole.width) {
        results.push(
          this._addRect(
            hole.left + hole.width,
            rect.top,
            rect.left + rect.width - (hole.left + hole.width),
            rect.height
          )
        );
      }

      // Top split.
      if (rect.top < hole.top) {
        results.push(this._addRect(rect.left, rect.top, rect.width, hole.top - rect.top));
      }

      // Bottom split.
      if (rect.top + rect.height > hole.top + hole.height) {
        results.push(
          this._addRect(
            rect.left,
            hole.top + hole.height,
            rect.width,
            rect.top + rect.height - (hole.top + hole.height)
          )
        );
      }

      return results;
    };
  })();

  /**
   * Check if two rectangles overlap.
   *
   * @private
   * @memberof Packer.prototype
   * @param {Rectangle} a
   * @param {Rectangle} b
   * @returns {Boolean}
   */
  Packer.prototype._doRectsOverlap = function(a, b) {
    return !(
      a.left + a.width <= b.left ||
      b.left + b.width <= a.left ||
      a.top + a.height <= b.top ||
      b.top + b.height <= a.top
    );
  };

  /**
   * Check if a rectangle is fully within another rectangle.
   *
   * @private
   * @memberof Packer.prototype
   * @param {Rectangle} a
   * @param {Rectangle} b
   * @returns {Boolean}
   */
  Packer.prototype._isRectWithinRect = function(a, b) {
    return (
      a.left >= b.left &&
      a.top >= b.top &&
      a.left + a.width <= b.left + b.width &&
      a.top + a.height <= b.top + b.height
    );
  };

  /**
   * Loops through an array of rectangle ids and resets all that are fully
   * within another rectangle in the array. Resetting in this case means that
   * the rectangle id value is replaced with zero.
   *
   * @private
   * @memberof Packer.prototype
   * @param {RectId[]} rectIds
   * @returns {RectId[]}
   */
  Packer.prototype._purgeRects = (function() {
    var rectA = {};
    var rectB = {};
    return function(rectIds) {
      var i = rectIds.length;
      var ii;

      while (i--) {
        ii = rectIds.length;
        if (!rectIds[i]) continue;
        this._getRect(rectIds[i], rectA);
        while (ii--) {
          if (!rectIds[ii] || i === ii) continue;
          if (this._isRectWithinRect(rectA, this._getRect(rectIds[ii], rectB))) {
            rectIds[i] = 0;
            break;
          }
        }
      }

      return rectIds;
    };
  })();

  /**
   * Sort rectangles with top-left gravity.
   *
   * @private
   * @memberof Packer.prototype
   * @param {RectId} aId
   * @param {RectId} bId
   * @returns {Number}
   */
  Packer.prototype._sortRectsTopLeft = (function() {
    var rectA = {};
    var rectB = {};
    return function(aId, bId) {
      this._getRect(aId, rectA);
      this._getRect(bId, rectB);
      // prettier-ignore
      return rectA.top < rectB.top ? -1 :
             rectA.top > rectB.top ? 1 :
             rectA.left < rectB.left ? -1 :
             rectA.left > rectB.left ? 1 : 0;
    };
  })();

  /**
   * Sort rectangles with left-top gravity.
   *
   * @private
   * @memberof Packer.prototype
   * @param {RectId} aId
   * @param {RectId} bId
   * @returns {Number}
   */
  Packer.prototype._sortRectsLeftTop = (function() {
    var rectA = {};
    var rectB = {};
    return function(aId, bId) {
      this._getRect(aId, rectA);
      this._getRect(bId, rectB);
      // prettier-ignore
      return rectA.left < rectB.left ? -1 :
             rectA.left > rectB.left ? 1 :
             rectA.top < rectB.top ? -1 :
             rectA.top > rectB.top ? 1 : 0;
    };
  })();

  var htmlCollectionType = '[object HTMLCollection]';
  var nodeListType = '[object NodeList]';

  /**
   * Check if a value is a node list
   *
   * @param {*} val
   * @returns {Boolean}
   */
  function isNodeList(val) {
    var type = Object.prototype.toString.call(val);
    return type === htmlCollectionType || type === nodeListType;
  }

  var objectType = 'object';
  var objectToStringType = '[object Object]';
  var toString = Object.prototype.toString;

  /**
   * Check if a value is a plain object.
   *
   * @param {*} val
   * @returns {Boolean}
   */
  function isPlainObject(val) {
    return typeof val === objectType && toString.call(val) === objectToStringType;
  }

  /**
   * Converts a value to an array or clones an array.
   *
   * @param {*} target
   * @returns {Array}
   */
  function toArray(target) {
    return isNodeList(target) ? Array.prototype.slice.call(target) : Array.prototype.concat(target);
  }

  var packer = new Packer();
  var noop = function() {};

  var numberType$1 = 'number';
  var stringType = 'string';
  var instantLayout = 'instant';

  /**
   * Creates a new Grid instance.
   *
   * @class
   * @param {(HTMLElement|String)} element
   * @param {Object} [options]
   * @param {?(HTMLElement[]|NodeList|String)} [options.items]
   * @param {Number} [options.showDuration=300]
   * @param {String} [options.showEasing="ease"]
   * @param {Object} [options.visibleStyles]
   * @param {Number} [options.hideDuration=300]
   * @param {String} [options.hideEasing="ease"]
   * @param {Object} [options.hiddenStyles]
   * @param {(Function|Object)} [options.layout]
   * @param {Boolean} [options.layout.fillGaps=false]
   * @param {Boolean} [options.layout.horizontal=false]
   * @param {Boolean} [options.layout.alignRight=false]
   * @param {Boolean} [options.layout.alignBottom=false]
   * @param {Boolean} [options.layout.rounding=true]
   * @param {(Boolean|Number)} [options.layoutOnResize=100]
   * @param {Boolean} [options.layoutOnInit=true]
   * @param {Number} [options.layoutDuration=300]
   * @param {String} [options.layoutEasing="ease"]
   * @param {?Object} [options.sortData=null]
   * @param {Boolean} [options.dragEnabled=false]
   * @param {?HtmlElement} [options.dragContainer=null]
   * @param {?Function} [options.dragStartPredicate]
   * @param {Number} [options.dragStartPredicate.distance=0]
   * @param {Number} [options.dragStartPredicate.delay=0]
   * @param {(Boolean|String)} [options.dragStartPredicate.handle=false]
   * @param {?String} [options.dragAxis]
   * @param {(Boolean|Function)} [options.dragSort=true]
   * @param {Object} [options.dragSortHeuristics]
   * @param {Number} [options.dragSortHeuristics.sortInterval=100]
   * @param {Number} [options.dragSortHeuristics.minDragDistance=10]
   * @param {Number} [options.dragSortHeuristics.minBounceBackAngle=1]
   * @param {(Function|Object)} [options.dragSortPredicate]
   * @param {Number} [options.dragSortPredicate.threshold=50]
   * @param {String} [options.dragSortPredicate.action="move"]
   * @param {Number} [options.dragReleaseDuration=300]
   * @param {String} [options.dragReleaseEasing="ease"]
   * @param {Object} [options.dragCssProps]
   * @param {Object} [options.dragPlaceholder]
   * @param {Boolean} [options.dragPlaceholder.enabled=false]
   * @param {Number} [options.dragPlaceholder.duration=300]
   * @param {String} [options.dragPlaceholder.easing="ease"]
   * @param {?Function} [options.dragPlaceholder.createElement=null]
   * @param {?Function} [options.dragPlaceholder.onCreate=null]
   * @param {?Function} [options.dragPlaceholder.onRemove=null]
   * @param {String} [options.containerClass="muuri"]
   * @param {String} [options.itemClass="muuri-item"]
   * @param {String} [options.itemVisibleClass="muuri-item-visible"]
   * @param {String} [options.itemHiddenClass="muuri-item-hidden"]
   * @param {String} [options.itemPositioningClass="muuri-item-positioning"]
   * @param {String} [options.itemDraggingClass="muuri-item-dragging"]
   * @param {String} [options.itemReleasingClass="muuri-item-releasing"]
   * @param {String} [options.itemPlaceholderClass="muuri-item-placeholder"]
   */

  function Grid(element, options) {
    var inst = this;
    var settings;
    var items;
    var layoutOnResize;

    // Allow passing element as selector string. Store element for instance.
    element = this._element =
      typeof element === stringType ? window.document.querySelector(element) : element;

    // Throw an error if the container element is not body element or does not
    // exist within the body element.
    var isElementInDom = element.getRootNode
      ? element.getRootNode({ composed: true }) === document
      : window.document.body.contains(element);
    if (!isElementInDom || element === window.document.documentElement) {
      throw new Error('Container element must be an existing DOM element');
    }

    // Create instance settings by merging the options with default options.
    settings = this._settings = mergeSettings(Grid.defaultOptions, options);

    // Sanitize dragSort setting.
    if (!isFunction(settings.dragSort)) {
      settings.dragSort = !!settings.dragSort;
    }

    // Create instance id and store it to the grid instances collection.
    this._id = createUid();
    gridInstances[this._id] = inst;

    // Destroyed flag.
    this._isDestroyed = false;

    // The layout object (mutated on every layout).
    this._layout = {
      id: 0,
      items: [],
      slots: [],
      setWidth: false,
      setHeight: false,
      width: 0,
      height: 0
    };

    // Create private Emitter instance.
    this._emitter = new Emitter();

    // Add container element's class name.
    addClass(element, settings.containerClass);

    // Create initial items.
    this._items = [];
    items = settings.items;
    if (typeof items === stringType) {
      toArray(element.children).forEach(function(itemElement) {
        if (items === '*' || elementMatches(itemElement, items)) {
          inst._items.push(new Item(inst, itemElement));
        }
      });
    } else if (Array.isArray(items) || isNodeList(items)) {
      this._items = toArray(items).map(function(itemElement) {
        return new Item(inst, itemElement);
      });
    }

    // If layoutOnResize option is a valid number sanitize it and bind the resize
    // handler.
    layoutOnResize = settings.layoutOnResize;
    if (typeof layoutOnResize !== numberType$1) {
      layoutOnResize = layoutOnResize === true ? 0 : -1;
    }
    if (layoutOnResize >= 0) {
      window.addEventListener(
        'resize',
        (inst._resizeHandler = debounce(function() {
          inst.refreshItems().layout();
        }, layoutOnResize))
      );
    }

    // Layout on init if necessary.
    if (settings.layoutOnInit) {
      this.layout(true);
    }
  }

  /**
   * Public properties
   * *****************
   */

  /**
   * @see Item
   */
  Grid.Item = Item;

  /**
   * @see ItemLayout
   */
  Grid.ItemLayout = ItemLayout;

  /**
   * @see ItemVisibility
   */
  Grid.ItemVisibility = ItemVisibility;

  /**
   * @see ItemMigrate
   */
  Grid.ItemMigrate = ItemMigrate;

  /**
   * @see ItemAnimate
   */
  Grid.ItemAnimate = ItemAnimate;

  /**
   * @see ItemDrag
   */
  Grid.ItemDrag = ItemDrag;

  /**
   * @see ItemRelease
   */
  Grid.ItemRelease = ItemRelease;

  /**
   * @see ItemDragPlaceholder
   */
  Grid.ItemDragPlaceholder = ItemDragPlaceholder;

  /**
   * @see Emitter
   */
  Grid.Emitter = Emitter;

  /**
   * @see Dragger
   */
  Grid.Dragger = Dragger;

  /**
   * @see Packer
   */
  Grid.Packer = Packer;

  /**
   * Default options for Grid instance.
   *
   * @public
   * @memberof Grid
   */
  Grid.defaultOptions = {
    // Item elements
    items: '*',

    // Default show animation
    showDuration: 300,
    showEasing: 'ease',

    // Default hide animation
    hideDuration: 300,
    hideEasing: 'ease',

    // Item's visible/hidden state styles
    visibleStyles: {
      opacity: '1',
      transform: 'scale(1)'
    },
    hiddenStyles: {
      opacity: '0',
      transform: 'scale(0.5)'
    },

    // Layout
    layout: {
      fillGaps: false,
      horizontal: false,
      alignRight: false,
      alignBottom: false,
      rounding: true
    },
    layoutOnResize: 100,
    layoutOnInit: true,
    layoutDuration: 300,
    layoutEasing: 'ease',

    // Sorting
    sortData: null,

    // Drag & Drop
    dragEnabled: false,
    dragContainer: null,
    dragStartPredicate: {
      distance: 0,
      delay: 0,
      handle: false
    },
    dragAxis: null,
    dragSort: true,
    dragSortHeuristics: {
      sortInterval: 100,
      minDragDistance: 10,
      minBounceBackAngle: 1
    },
    dragSortPredicate: {
      threshold: 50,
      action: actionMove
    },
    dragReleaseDuration: 300,
    dragReleaseEasing: 'ease',
    dragCssProps: {
      touchAction: 'none',
      userSelect: 'none',
      userDrag: 'none',
      tapHighlightColor: 'rgba(0, 0, 0, 0)',
      touchCallout: 'none',
      contentZooming: 'none'
    },
    dragPlaceholder: {
      enabled: false,
      duration: 300,
      easing: 'ease',
      createElement: null,
      onCreate: null,
      onRemove: null
    },

    // Classnames
    containerClass: 'muuri',
    itemClass: 'muuri-item',
    itemVisibleClass: 'muuri-item-shown',
    itemHiddenClass: 'muuri-item-hidden',
    itemPositioningClass: 'muuri-item-positioning',
    itemDraggingClass: 'muuri-item-dragging',
    itemReleasingClass: 'muuri-item-releasing',
    itemPlaceholderClass: 'muuri-item-placeholder'
  };

  /**
   * Public prototype methods
   * ************************
   */

  /**
   * Bind an event listener.
   *
   * @public
   * @memberof Grid.prototype
   * @param {String} event
   * @param {Function} listener
   * @returns {Grid}
   */
  Grid.prototype.on = function(event, listener) {
    this._emitter.on(event, listener);
    return this;
  };

  /**
   * Unbind an event listener.
   *
   * @public
   * @memberof Grid.prototype
   * @param {String} event
   * @param {Function} listener
   * @returns {Grid}
   */
  Grid.prototype.off = function(event, listener) {
    this._emitter.off(event, listener);
    return this;
  };

  /**
   * Get the container element.
   *
   * @public
   * @memberof Grid.prototype
   * @returns {HTMLElement}
   */
  Grid.prototype.getElement = function() {
    return this._element;
  };

  /**
   * Get all items. Optionally you can provide specific targets (elements and
   * indices). Note that the returned array is not the same object used by the
   * instance so modifying it will not affect instance's items. All items that
   * are not found are omitted from the returned array.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} [targets]
   * @returns {Item[]}
   */
  Grid.prototype.getItems = function(targets) {
    // Return all items immediately if no targets were provided or if the
    // instance is destroyed.
    if (this._isDestroyed || (!targets && targets !== 0)) {
      return this._items.slice(0);
    }

    var ret = [];
    var targetItems = toArray(targets);
    var item;
    var i;

    // If target items are defined return filtered results.
    for (i = 0; i < targetItems.length; i++) {
      item = this._getItem(targetItems[i]);
      item && ret.push(item);
    }

    return ret;
  };

  /**
   * Update the cached dimensions of the instance's items.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} [items]
   * @returns {Grid}
   */
  Grid.prototype.refreshItems = function(items) {
    if (this._isDestroyed) return this;

    var targets = this.getItems(items);
    var i;

    for (i = 0; i < targets.length; i++) {
      targets[i]._refreshDimensions();
    }

    return this;
  };

  /**
   * Update the sort data of the instance's items.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} [items]
   * @returns {Grid}
   */
  Grid.prototype.refreshSortData = function(items) {
    if (this._isDestroyed) return this;

    var targetItems = this.getItems(items);
    var i;

    for (i = 0; i < targetItems.length; i++) {
      targetItems[i]._refreshSortData();
    }

    return this;
  };

  /**
   * Synchronize the item elements to match the order of the items in the DOM.
   * This comes handy if you need to keep the DOM structure matched with the
   * order of the items. Note that if an item's element is not currently a child
   * of the container element (if it is dragged for example) it is ignored and
   * left untouched.
   *
   * @public
   * @memberof Grid.prototype
   * @returns {Grid}
   */
  Grid.prototype.synchronize = function() {
    if (this._isDestroyed) return this;

    var container = this._element;
    var items = this._items;
    var fragment;
    var element;
    var i;

    // Append all elements in order to the container element.
    if (items.length) {
      for (i = 0; i < items.length; i++) {
        element = items[i]._element;
        if (element.parentNode === container) {
          fragment = fragment || window.document.createDocumentFragment();
          fragment.appendChild(element);
        }
      }

      if (fragment) container.appendChild(fragment);
    }

    // Emit synchronize event.
    this._emit(eventSynchronize);

    return this;
  };

  /**
   * Calculate and apply item positions.
   *
   * @public
   * @memberof Grid.prototype
   * @param {Boolean} [instant=false]
   * @param {LayoutCallback} [onFinish]
   * @returns {Grid}
   */
  Grid.prototype.layout = function(instant, onFinish) {
    if (this._isDestroyed) return this;

    var inst = this;
    var element = this._element;
    var layout = this._updateLayout();
    var layoutId = layout.id;
    var itemsLength = layout.items.length;
    var counter = itemsLength;
    var isBorderBox;
    var item;
    var i;

    // The finish function, which will be used for checking if all the items
    // have laid out yet. After all items have finished their animations call
    // callback and emit layoutEnd event. Only emit layoutEnd event if there
    // hasn't been a new layout call during this layout.
    function tryFinish() {
      if (--counter > 0) return;

      var hasLayoutChanged = inst._layout.id !== layoutId;
      var callback = isFunction(instant) ? instant : onFinish;

      if (isFunction(callback)) {
        callback(hasLayoutChanged, layout.items.slice(0));
      }

      if (!hasLayoutChanged && inst._hasListeners(eventLayoutEnd)) {
        inst._emit(eventLayoutEnd, layout.items.slice(0));
      }
    }

    // If grid's width or height was modified, we need to update it's cached
    // dimensions. Also keep in mind that grid's cached width/height should
    // always equal to what elem.getBoundingClientRect() would return, so
    // therefore we need to add the grid element's borders to the dimensions if
    // it's box-sizing is border-box. Note that we support providing the
    // dimensions as a string here too so that one can define the unit of the
    // dimensions, in which case we don't do the border-box check.
    if (
      (layout.setHeight && typeof layout.height === numberType$1) ||
      (layout.setWidth && typeof layout.width === numberType$1)
    ) {
      isBorderBox = getStyle(element, 'box-sizing') === 'border-box';
    }
    if (layout.setHeight) {
      if (typeof layout.height === numberType$1) {
        element.style.height =
          (isBorderBox ? layout.height + this._borderTop + this._borderBottom : layout.height) + 'px';
      } else {
        element.style.height = layout.height;
      }
    }
    if (layout.setWidth) {
      if (typeof layout.width === numberType$1) {
        element.style.width =
          (isBorderBox ? layout.width + this._borderLeft + this._borderRight : layout.width) + 'px';
      } else {
        element.style.width = layout.width;
      }
    }

    // Emit layoutStart event. Note that this is intentionally emitted after the
    // container element's dimensions are set, because otherwise there would be
    // no hook for reacting to container dimension changes.
    if (this._hasListeners(eventLayoutStart)) {
      this._emit(eventLayoutStart, layout.items.slice(0));
    }

    // If there are no items let's finish quickly.
    if (!itemsLength) {
      tryFinish();
      return this;
    }

    // If there are items let's position them.
    for (i = 0; i < itemsLength; i++) {
      item = layout.items[i];
      if (!item) continue;

      // Update item's position.
      item._left = layout.slots[i * 2];
      item._top = layout.slots[i * 2 + 1];

      // Layout item if it is not dragged.
      item.isDragging() ? tryFinish() : item._layout.start(instant === true, tryFinish);
    }

    return this;
  };

  /**
   * Add new items by providing the elements you wish to add to the instance and
   * optionally provide the index where you want the items to be inserted into.
   * All elements that are not already children of the container element will be
   * automatically appended to the container element. If an element has it's CSS
   * display property set to "none" it will be marked as inactive during the
   * initiation process. As long as the item is inactive it will not be part of
   * the layout, but it will retain it's index. You can activate items at any
   * point with grid.show() method. This method will automatically call
   * grid.layout() if one or more of the added elements are visible. If only
   * hidden items are added no layout will be called. All the new visible items
   * are positioned without animation during their first layout.
   *
   * @public
   * @memberof Grid.prototype
   * @param {(HTMLElement|HTMLElement[])} elements
   * @param {Object} [options]
   * @param {Number} [options.index=-1]
   * @param {Boolean} [options.isActive]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Item[]}
   */
  Grid.prototype.add = function(elements, options) {
    if (this._isDestroyed || !elements) return [];

    var newItems = toArray(elements);
    if (!newItems.length) return newItems;

    var opts = options || 0;
    var layout = opts.layout ? opts.layout : opts.layout === undefined;
    var items = this._items;
    var needsLayout = false;
    var item;
    var i;

    // Map provided elements into new grid items.
    for (i = 0; i < newItems.length; i++) {
      item = new Item(this, newItems[i], opts.isActive);
      newItems[i] = item;

      // If the item to be added is active, we need to do a layout. Also, we
      // need to mark the item with the skipNextAnimation flag to make it
      // position instantly (without animation) during the next layout. Without
      // the hack the item would animate to it's new position from the northwest
      // corner of the grid, which feels a bit buggy (imho).
      if (item._isActive) {
        needsLayout = true;
        item._layout._skipNextAnimation = true;
      }
    }

    // Add the new items to the items collection to correct index.
    arrayInsert(items, newItems, opts.index);

    // Emit add event.
    if (this._hasListeners(eventAdd)) {
      this._emit(eventAdd, newItems.slice(0));
    }

    // If layout is needed.
    if (needsLayout && layout) {
      this.layout(layout === instantLayout, isFunction(layout) ? layout : undefined);
    }

    return newItems;
  };

  /**
   * Remove items from the instance.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} items
   * @param {Object} [options]
   * @param {Boolean} [options.removeElements=false]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Item[]}
   */
  Grid.prototype.remove = function(items, options) {
    if (this._isDestroyed) return this;

    var opts = options || 0;
    var layout = opts.layout ? opts.layout : opts.layout === undefined;
    var needsLayout = false;
    var allItems = this.getItems();
    var targetItems = this.getItems(items);
    var indices = [];
    var item;
    var i;

    // Remove the individual items.
    for (i = 0; i < targetItems.length; i++) {
      item = targetItems[i];
      indices.push(allItems.indexOf(item));
      if (item._isActive) needsLayout = true;
      item._destroy(opts.removeElements);
    }

    // Emit remove event.
    if (this._hasListeners(eventRemove)) {
      this._emit(eventRemove, targetItems.slice(0), indices);
    }

    // If layout is needed.
    if (needsLayout && layout) {
      this.layout(layout === instantLayout, isFunction(layout) ? layout : undefined);
    }

    return targetItems;
  };

  /**
   * Show instance items.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} items
   * @param {Object} [options]
   * @param {Boolean} [options.instant=false]
   * @param {ShowCallback} [options.onFinish]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Grid}
   */
  Grid.prototype.show = function(items, options) {
    if (this._isDestroyed) return this;
    this._setItemsVisibility(items, true, options);
    return this;
  };

  /**
   * Hide instance items.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} items
   * @param {Object} [options]
   * @param {Boolean} [options.instant=false]
   * @param {HideCallback} [options.onFinish]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Grid}
   */
  Grid.prototype.hide = function(items, options) {
    if (this._isDestroyed) return this;
    this._setItemsVisibility(items, false, options);
    return this;
  };

  /**
   * Filter items. Expects at least one argument, a predicate, which should be
   * either a function or a string. The predicate callback is executed for every
   * item in the instance. If the return value of the predicate is truthy the
   * item in question will be shown and otherwise hidden. The predicate callback
   * receives the item instance as it's argument. If the predicate is a string
   * it is considered to be a selector and it is checked against every item
   * element in the instance with the native element.matches() method. All the
   * matching items will be shown and others hidden.
   *
   * @public
   * @memberof Grid.prototype
   * @param {(Function|String)} predicate
   * @param {Object} [options]
   * @param {Boolean} [options.instant=false]
   * @param {FilterCallback} [options.onFinish]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Grid}
   */
  Grid.prototype.filter = function(predicate, options) {
    if (this._isDestroyed || !this._items.length) return this;

    var itemsToShow = [];
    var itemsToHide = [];
    var isPredicateString = typeof predicate === stringType;
    var isPredicateFn = isFunction(predicate);
    var opts = options || 0;
    var isInstant = opts.instant === true;
    var layout = opts.layout ? opts.layout : opts.layout === undefined;
    var onFinish = isFunction(opts.onFinish) ? opts.onFinish : null;
    var tryFinishCounter = -1;
    var tryFinish = noop;
    var item;
    var i;

    // If we have onFinish callback, let's create proper tryFinish callback.
    if (onFinish) {
      tryFinish = function() {
        ++tryFinishCounter && onFinish(itemsToShow.slice(0), itemsToHide.slice(0));
      };
    }

    // Check which items need to be shown and which hidden.
    if (isPredicateFn || isPredicateString) {
      for (i = 0; i < this._items.length; i++) {
        item = this._items[i];
        if (isPredicateFn ? predicate(item) : elementMatches(item._element, predicate)) {
          itemsToShow.push(item);
        } else {
          itemsToHide.push(item);
        }
      }
    }

    // Show items that need to be shown.
    if (itemsToShow.length) {
      this.show(itemsToShow, {
        instant: isInstant,
        onFinish: tryFinish,
        layout: false
      });
    } else {
      tryFinish();
    }

    // Hide items that need to be hidden.
    if (itemsToHide.length) {
      this.hide(itemsToHide, {
        instant: isInstant,
        onFinish: tryFinish,
        layout: false
      });
    } else {
      tryFinish();
    }

    // If there are any items to filter.
    if (itemsToShow.length || itemsToHide.length) {
      // Emit filter event.
      if (this._hasListeners(eventFilter)) {
        this._emit(eventFilter, itemsToShow.slice(0), itemsToHide.slice(0));
      }

      // If layout is needed.
      if (layout) {
        this.layout(layout === instantLayout, isFunction(layout) ? layout : undefined);
      }
    }

    return this;
  };

  /**
   * Sort items. There are three ways to sort the items. The first is simply by
   * providing a function as the comparer which works identically to native
   * array sort. Alternatively you can sort by the sort data you have provided
   * in the instance's options. Just provide the sort data key(s) as a string
   * (separated by space) and the items will be sorted based on the provided
   * sort data keys. Lastly you have the opportunity to provide a presorted
   * array of items which will be used to sync the internal items array in the
   * same order.
   *
   * @public
   * @memberof Grid.prototype
   * @param {(Function|Item[]|String|String[])} comparer
   * @param {Object} [options]
   * @param {Boolean} [options.descending=false]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Grid}
   */
  Grid.prototype.sort = (function() {
    var sortComparer;
    var isDescending;
    var origItems;
    var indexMap;

    function parseCriteria(data) {
      return data
        .trim()
        .split(' ')
        .map(function(val) {
          return val.split(':');
        });
    }

    function getIndexMap(items) {
      var ret = {};
      for (var i = 0; i < items.length; i++) {
        ret[items[i]._id] = i;
      }
      return ret;
    }

    function compareIndices(itemA, itemB) {
      var indexA = indexMap[itemA._id];
      var indexB = indexMap[itemB._id];
      return isDescending ? indexB - indexA : indexA - indexB;
    }

    function defaultComparer(a, b) {
      var result = 0;
      var criteriaName;
      var criteriaOrder;
      var valA;
      var valB;

      // Loop through the list of sort criteria.
      for (var i = 0; i < sortComparer.length; i++) {
        // Get the criteria name, which should match an item's sort data key.
        criteriaName = sortComparer[i][0];
        criteriaOrder = sortComparer[i][1];

        // Get items' cached sort values for the criteria. If the item has no sort
        // data let's update the items sort data (this is a lazy load mechanism).
        valA = (a._sortData ? a : a._refreshSortData())._sortData[criteriaName];
        valB = (b._sortData ? b : b._refreshSortData())._sortData[criteriaName];

        // Sort the items in descending order if defined so explicitly. Otherwise
        // sort items in ascending order.
        if (criteriaOrder === 'desc' || (!criteriaOrder && isDescending)) {
          result = valB < valA ? -1 : valB > valA ? 1 : 0;
        } else {
          result = valA < valB ? -1 : valA > valB ? 1 : 0;
        }

        // If we have -1 or 1 as the return value, let's return it immediately.
        if (result) return result;
      }

      // If values are equal let's compare the item indices to make sure we
      // have a stable sort.
      if (!result) {
        if (!indexMap) indexMap = getIndexMap(origItems);
        result = compareIndices(a, b);
      }
      return result;
    }

    function customComparer(a, b) {
      var result = sortComparer(a, b);
      // If descending let's invert the result value.
      if (isDescending && result) result = -result;
      // If we have a valid result (not zero) let's return it right away.
      if (result) return result;
      // If result is zero let's compare the item indices to make sure we have a
      // stable sort.
      if (!indexMap) indexMap = getIndexMap(origItems);
      return compareIndices(a, b);
    }

    return function(comparer, options) {
      if (this._isDestroyed || this._items.length < 2) return this;

      var items = this._items;
      var opts = options || 0;
      var layout = opts.layout ? opts.layout : opts.layout === undefined;
      var i;

      // Setup parent scope data.
      sortComparer = comparer;
      isDescending = !!opts.descending;
      origItems = items.slice(0);
      indexMap = null;

      // If function is provided do a native array sort.
      if (isFunction(sortComparer)) {
        items.sort(customComparer);
      }
      // Otherwise if we got a string, let's sort by the sort data as provided in
      // the instance's options.
      else if (typeof sortComparer === stringType) {
        sortComparer = parseCriteria(comparer);
        items.sort(defaultComparer);
      }
      // Otherwise if we got an array, let's assume it's a presorted array of the
      // items and order the items based on it.
      else if (Array.isArray(sortComparer)) {
        if (sortComparer.length !== items.length) {
          throw new Error('[' + namespace + '] sort reference items do not match with grid items.');
        }
        for (i = 0; i < items.length; i++) {
          if (sortComparer.indexOf(items[i]) < 0) {
            throw new Error('[' + namespace + '] sort reference items do not match with grid items.');
          }
          items[i] = sortComparer[i];
        }
        if (isDescending) items.reverse();
      }
      // Otherwise let's just skip it, nothing we can do here.
      else {
        /** @todo Maybe throw an error here? */
        return this;
      }

      // Emit sort event.
      if (this._hasListeners(eventSort)) {
        this._emit(eventSort, items.slice(0), origItems);
      }

      // If layout is needed.
      if (layout) {
        this.layout(layout === instantLayout, isFunction(layout) ? layout : undefined);
      }

      return this;
    };
  })();

  /**
   * Move item to another index or in place of another item.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridSingleItemQuery} item
   * @param {GridSingleItemQuery} position
   * @param {Object} [options]
   * @param {String} [options.action="move"]
   *   - Accepts either "move" or "swap".
   *   - "move" moves the item in place of the other item.
   *   - "swap" swaps the position of the items.
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   * @returns {Grid}
   */
  Grid.prototype.move = function(item, position, options) {
    if (this._isDestroyed || this._items.length < 2) return this;

    var items = this._items;
    var opts = options || 0;
    var layout = opts.layout ? opts.layout : opts.layout === undefined;
    var isSwap = opts.action === actionSwap;
    var action = isSwap ? actionSwap : actionMove;
    var fromItem = this._getItem(item);
    var toItem = this._getItem(position);
    var fromIndex;
    var toIndex;

    // Make sure the items exist and are not the same.
    if (fromItem && toItem && fromItem !== toItem) {
      // Get the indices of the items.
      fromIndex = items.indexOf(fromItem);
      toIndex = items.indexOf(toItem);

      // Do the move/swap.
      if (isSwap) {
        arraySwap(items, fromIndex, toIndex);
      } else {
        arrayMove(items, fromIndex, toIndex);
      }

      // Emit move event.
      if (this._hasListeners(eventMove)) {
        this._emit(eventMove, {
          item: fromItem,
          fromIndex: fromIndex,
          toIndex: toIndex,
          action: action
        });
      }

      // If layout is needed.
      if (layout) {
        this.layout(layout === instantLayout, isFunction(layout) ? layout : undefined);
      }
    }

    return this;
  };

  /**
   * Send item to another Grid instance.
   *
   * @public
   * @memberof Grid.prototype
   * @param {GridSingleItemQuery} item
   * @param {Grid} grid
   * @param {GridSingleItemQuery} position
   * @param {Object} [options]
   * @param {HTMLElement} [options.appendTo=document.body]
   * @param {(Boolean|LayoutCallback|String)} [options.layoutSender=true]
   * @param {(Boolean|LayoutCallback|String)} [options.layoutReceiver=true]
   * @returns {Grid}
   */
  Grid.prototype.send = function(item, grid, position, options) {
    if (this._isDestroyed || grid._isDestroyed || this === grid) return this;

    // Make sure we have a valid target item.
    item = this._getItem(item);
    if (!item) return this;

    var opts = options || 0;
    var container = opts.appendTo || window.document.body;
    var layoutSender = opts.layoutSender ? opts.layoutSender : opts.layoutSender === undefined;
    var layoutReceiver = opts.layoutReceiver
      ? opts.layoutReceiver
      : opts.layoutReceiver === undefined;

    // Start the migration process.
    item._migrate.start(grid, position, container);

    // If migration was started successfully and the item is active, let's layout
    // the grids.
    if (item._migrate._isActive && item._isActive) {
      if (layoutSender) {
        this.layout(
          layoutSender === instantLayout,
          isFunction(layoutSender) ? layoutSender : undefined
        );
      }
      if (layoutReceiver) {
        grid.layout(
          layoutReceiver === instantLayout,
          isFunction(layoutReceiver) ? layoutReceiver : undefined
        );
      }
    }

    return this;
  };

  /**
   * Destroy the instance.
   *
   * @public
   * @memberof Grid.prototype
   * @param {Boolean} [removeElements=false]
   * @returns {Grid}
   */
  Grid.prototype.destroy = function(removeElements) {
    if (this._isDestroyed) return this;

    var container = this._element;
    var items = this._items.slice(0);
    var i;

    // Unbind window resize event listener.
    if (this._resizeHandler) {
      window.removeEventListener('resize', this._resizeHandler);
    }

    // Destroy items.
    for (i = 0; i < items.length; i++) {
      items[i]._destroy(removeElements);
    }

    // Restore container.
    removeClass(container, this._settings.containerClass);
    container.style.height = '';
    container.style.width = '';

    // Emit destroy event and unbind all events.
    this._emit(eventDestroy);
    this._emitter.destroy();

    // Remove reference from the grid instances collection.
    gridInstances[this._id] = undefined;

    // Flag instance as destroyed.
    this._isDestroyed = true;

    return this;
  };

  /**
   * Private prototype methods
   * *************************
   */

  /**
   * Get instance's item by element or by index. Target can also be an Item
   * instance in which case the function returns the item if it exists within
   * related Grid instance. If nothing is found with the provided target, null
   * is returned.
   *
   * @private
   * @memberof Grid.prototype
   * @param {GridSingleItemQuery} [target]
   * @returns {?Item}
   */
  Grid.prototype._getItem = function(target) {
    // If no target is specified or the instance is destroyed, return null.
    if (this._isDestroyed || (!target && target !== 0)) {
      return null;
    }

    // If target is number return the item in that index. If the number is lower
    // than zero look for the item starting from the end of the items array. For
    // example -1 for the last item, -2 for the second last item, etc.
    if (typeof target === numberType$1) {
      return this._items[target > -1 ? target : this._items.length + target] || null;
    }

    // If the target is an instance of Item return it if it is attached to this
    // Grid instance, otherwise return null.
    if (target instanceof Item) {
      return target._gridId === this._id ? target : null;
    }

    // In other cases let's assume that the target is an element, so let's try
    // to find an item that matches the element and return it. If item is not
    // found return null.
    /** @todo This could be made a lot faster by using Map/WeakMap of elements. */
    for (var i = 0; i < this._items.length; i++) {
      if (this._items[i]._element === target) {
        return this._items[i];
      }
    }

    return null;
  };

  /**
   * Recalculates and updates instance's layout data.
   *
   * @private
   * @memberof Grid.prototype
   * @returns {LayoutData}
   */
  Grid.prototype._updateLayout = function() {
    var layout = this._layout;
    var settings = this._settings.layout;
    var width;
    var height;
    var newLayout;
    var i;

    // Let's increment layout id.
    ++layout.id;

    // Let's update layout items
    layout.items.length = 0;
    for (i = 0; i < this._items.length; i++) {
      if (this._items[i]._isActive) layout.items.push(this._items[i]);
    }

    // Let's make sure we have the correct container dimensions.
    this._refreshDimensions();

    // Calculate container width and height (without borders).
    width = this._width - this._borderLeft - this._borderRight;
    height = this._height - this._borderTop - this._borderBottom;

    // Calculate new layout.
    if (isFunction(settings)) {
      newLayout = settings(layout.items, width, height);
    } else {
      newLayout = packer.getLayout(layout.items, width, height, layout.slots, settings);
    }

    // Let's update the grid's layout.
    layout.slots = newLayout.slots;
    layout.setWidth = Boolean(newLayout.setWidth);
    layout.setHeight = Boolean(newLayout.setHeight);
    layout.width = newLayout.width;
    layout.height = newLayout.height;

    return layout;
  };

  /**
   * Emit a grid event.
   *
   * @private
   * @memberof Grid.prototype
   * @param {String} event
   * @param {...*} [arg]
   */
  Grid.prototype._emit = function() {
    if (this._isDestroyed) return;
    this._emitter.emit.apply(this._emitter, arguments);
  };

  /**
   * Check if there are any events listeners for an event.
   *
   * @private
   * @memberof Grid.prototype
   * @param {String} event
   * @returns {Boolean}
   */
  Grid.prototype._hasListeners = function(event) {
    var listeners = this._emitter._events[event];
    return !!(listeners && listeners.length);
  };

  /**
   * Update container's width, height and offsets.
   *
   * @private
   * @memberof Grid.prototype
   */
  Grid.prototype._updateBoundingRect = function() {
    var element = this._element;
    var rect = element.getBoundingClientRect();
    this._width = rect.width;
    this._height = rect.height;
    this._left = rect.left;
    this._top = rect.top;
  };

  /**
   * Update container's border sizes.
   *
   * @private
   * @memberof Grid.prototype
   * @param {Boolean} left
   * @param {Boolean} right
   * @param {Boolean} top
   * @param {Boolean} bottom
   */
  Grid.prototype._updateBorders = function(left, right, top, bottom) {
    var element = this._element;
    if (left) this._borderLeft = getStyleAsFloat(element, 'border-left-width');
    if (right) this._borderRight = getStyleAsFloat(element, 'border-right-width');
    if (top) this._borderTop = getStyleAsFloat(element, 'border-top-width');
    if (bottom) this._borderBottom = getStyleAsFloat(element, 'border-bottom-width');
  };

  /**
   * Refresh all of container's internal dimensions and offsets.
   *
   * @private
   * @memberof Grid.prototype
   */
  Grid.prototype._refreshDimensions = function() {
    this._updateBoundingRect();
    this._updateBorders(1, 1, 1, 1);
  };

  /**
   * Show or hide Grid instance's items.
   *
   * @private
   * @memberof Grid.prototype
   * @param {GridMultiItemQuery} items
   * @param {Boolean} toVisible
   * @param {Object} [options]
   * @param {Boolean} [options.instant=false]
   * @param {(ShowCallback|HideCallback)} [options.onFinish]
   * @param {(Boolean|LayoutCallback|String)} [options.layout=true]
   */
  Grid.prototype._setItemsVisibility = function(items, toVisible, options) {
    var grid = this;
    var targetItems = this.getItems(items);
    var opts = options || 0;
    var isInstant = opts.instant === true;
    var callback = opts.onFinish;
    var layout = opts.layout ? opts.layout : opts.layout === undefined;
    var counter = targetItems.length;
    var startEvent = toVisible ? eventShowStart : eventHideStart;
    var endEvent = toVisible ? eventShowEnd : eventHideEnd;
    var method = toVisible ? 'show' : 'hide';
    var needsLayout = false;
    var completedItems = [];
    var hiddenItems = [];
    var item;
    var i;

    // If there are no items call the callback, but don't emit any events.
    if (!counter) {
      if (isFunction(callback)) callback(targetItems);
      return;
    }

    // Emit showStart/hideStart event.
    if (this._hasListeners(startEvent)) {
      this._emit(startEvent, targetItems.slice(0));
    }

    // Show/hide items.
    for (i = 0; i < targetItems.length; i++) {
      item = targetItems[i];

      // If inactive item is shown or active item is hidden we need to do
      // layout.
      if ((toVisible && !item._isActive) || (!toVisible && item._isActive)) {
        needsLayout = true;
      }

      // If inactive item is shown we also need to do a little hack to make the
      // item not animate it's next positioning (layout).
      if (toVisible && !item._isActive) {
        item._layout._skipNextAnimation = true;
      }

      // If a hidden item is being shown we need to refresh the item's
      // dimensions.
      if (toVisible && item._visibility._isHidden) {
        hiddenItems.push(item);
      }

      // Show/hide the item.
      item._visibility[method](isInstant, function(interrupted, item) {
        // If the current item's animation was not interrupted add it to the
        // completedItems array.
        if (!interrupted) completedItems.push(item);

        // If all items have finished their animations call the callback
        // and emit showEnd/hideEnd event.
        if (--counter < 1) {
          if (isFunction(callback)) callback(completedItems.slice(0));
          if (grid._hasListeners(endEvent)) grid._emit(endEvent, completedItems.slice(0));
        }
      });
    }

    // Refresh hidden items.
    if (hiddenItems.length) this.refreshItems(hiddenItems);

    // Layout if needed.
    if (needsLayout && layout) {
      this.layout(layout === instantLayout, isFunction(layout) ? layout : undefined);
    }
  };

  /**
   * Private helpers
   * ***************
   */

  /**
   * Merge default settings with user settings. The returned object is a new
   * object with merged values. The merging is a deep merge meaning that all
   * objects and arrays within the provided settings objects will be also merged
   * so that modifying the values of the settings object will have no effect on
   * the returned object.
   *
   * @param {Object} defaultSettings
   * @param {Object} [userSettings]
   * @returns {Object} Returns a new object.
   */
  function mergeSettings(defaultSettings, userSettings) {
    // Create a fresh copy of default settings.
    var ret = mergeObjects({}, defaultSettings);

    // Merge user settings to default settings.
    if (userSettings) {
      ret = mergeObjects(ret, userSettings);
    }

    // Handle visible/hidden styles manually so that the whole object is
    // overridden instead of the props.
    ret.visibleStyles = (userSettings || 0).visibleStyles || (defaultSettings || 0).visibleStyles;
    ret.hiddenStyles = (userSettings || 0).hiddenStyles || (defaultSettings || 0).hiddenStyles;

    return ret;
  }

  /**
   * Merge two objects recursively (deep merge). The source object's properties
   * are merged to the target object.
   *
   * @param {Object} target
   *   - The target object.
   * @param {Object} source
   *   - The source object.
   * @returns {Object} Returns the target object.
   */
  function mergeObjects(target, source) {
    var sourceKeys = Object.keys(source);
    var length = sourceKeys.length;
    var isSourceObject;
    var propName;
    var i;

    for (i = 0; i < length; i++) {
      propName = sourceKeys[i];
      isSourceObject = isPlainObject(source[propName]);

      // If target and source values are both objects, merge the objects and
      // assign the merged value to the target property.
      if (isPlainObject(target[propName]) && isSourceObject) {
        target[propName] = mergeObjects(mergeObjects({}, target[propName]), source[propName]);
        continue;
      }

      // If source's value is object and target's is not let's clone the object as
      // the target's value.
      if (isSourceObject) {
        target[propName] = mergeObjects({}, source[propName]);
        continue;
      }

      // If source's value is an array let's clone the array as the target's
      // value.
      if (Array.isArray(source[propName])) {
        target[propName] = source[propName].slice(0);
        continue;
      }

      // In all other cases let's just directly assign the source's value as the
      // target's value.
      target[propName] = source[propName];
    }

    return target;
  }

  return Grid;

}));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* Tabulator v4.6.1 (c) Oliver Folkerd */

;(function (global, factory) {
	if (( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
		module.exports = factory();
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		global.Tabulator = factory();
	}
})(this, function () {

	'use strict';

	// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex


	if (!Array.prototype.findIndex) {

		Object.defineProperty(Array.prototype, 'findIndex', {

			value: function value(predicate) {

				// 1. Let O be ? ToObject(this value).


				if (this == null) {

					throw new TypeError('"this" is null or not defined');
				}

				var o = Object(this);

				// 2. Let len be ? ToLength(? Get(O, "length")).


				var len = o.length >>> 0;

				// 3. If IsCallable(predicate) is false, throw a TypeError exception.


				if (typeof predicate !== 'function') {

					throw new TypeError('predicate must be a function');
				}

				// 4. If thisArg was supplied, let T be thisArg; else let T be undefined.


				var thisArg = arguments[1];

				// 5. Let k be 0.


				var k = 0;

				// 6. Repeat, while k < len


				while (k < len) {

					// a. Let Pk be ! ToString(k).


					// b. Let kValue be ? Get(O, Pk).


					// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).


					// d. If testResult is true, return k.


					var kValue = o[k];

					if (predicate.call(thisArg, kValue, k, o)) {

						return k;
					}

					// e. Increase k by 1.


					k++;
				}

				// 7. Return -1.


				return -1;
			}

		});
	}

	// https://tc39.github.io/ecma262/#sec-array.prototype.find


	if (!Array.prototype.find) {

		Object.defineProperty(Array.prototype, 'find', {

			value: function value(predicate) {

				// 1. Let O be ? ToObject(this value).


				if (this == null) {

					throw new TypeError('"this" is null or not defined');
				}

				var o = Object(this);

				// 2. Let len be ? ToLength(? Get(O, "length")).


				var len = o.length >>> 0;

				// 3. If IsCallable(predicate) is false, throw a TypeError exception.


				if (typeof predicate !== 'function') {

					throw new TypeError('predicate must be a function');
				}

				// 4. If thisArg was supplied, let T be thisArg; else let T be undefined.


				var thisArg = arguments[1];

				// 5. Let k be 0.


				var k = 0;

				// 6. Repeat, while k < len


				while (k < len) {

					// a. Let Pk be ! ToString(k).


					// b. Let kValue be ? Get(O, Pk).


					// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).


					// d. If testResult is true, return kValue.


					var kValue = o[k];

					if (predicate.call(thisArg, kValue, k, o)) {

						return kValue;
					}

					// e. Increase k by 1.


					k++;
				}

				// 7. Return undefined.


				return undefined;
			}

		});
	}

	var ColumnManager = function ColumnManager(table) {

		this.table = table; //hold parent table


		this.blockHozScrollEvent = false;

		this.headersElement = this.createHeadersElement();

		this.element = this.createHeaderElement(); //containing element


		this.rowManager = null; //hold row manager object


		this.columns = []; // column definition object


		this.columnsByIndex = []; //columns by index


		this.columnsByField = {}; //columns by field


		this.scrollLeft = 0;

		this.element.insertBefore(this.headersElement, this.element.firstChild);
	};

	////////////// Setup Functions /////////////////


	ColumnManager.prototype.createHeadersElement = function () {

		var el = document.createElement("div");

		el.classList.add("tabulator-headers");

		return el;
	};

	ColumnManager.prototype.createHeaderElement = function () {

		var el = document.createElement("div");

		el.classList.add("tabulator-header");

		if (!this.table.options.headerVisible) {

			el.classList.add("tabulator-header-hidden");
		}

		return el;
	};

	ColumnManager.prototype.initialize = function () {

		var self = this;

		//scroll body along with header


		// self.element.addEventListener("scroll", function(e){


		// 	if(!self.blockHozScrollEvent){


		// 		self.table.rowManager.scrollHorizontal(self.element.scrollLeft);


		// 	}


		// });

	};

	//link to row manager


	ColumnManager.prototype.setRowManager = function (manager) {

		this.rowManager = manager;
	};

	//return containing element


	ColumnManager.prototype.getElement = function () {

		return this.element;
	};

	//return header containing element


	ColumnManager.prototype.getHeadersElement = function () {

		return this.headersElement;
	};

	// ColumnManager.prototype.tempScrollBlock = function(){


	// 	clearTimeout(this.blockHozScrollEvent);


	// 	this.blockHozScrollEvent = setTimeout(() => {this.blockHozScrollEvent = false;}, 50);


	// }


	//scroll horizontally to match table body


	ColumnManager.prototype.scrollHorizontal = function (left) {

		var hozAdjust = 0,
		    scrollWidth = this.element.scrollWidth - this.table.element.clientWidth;

		// this.tempScrollBlock();


		this.element.scrollLeft = left;

		//adjust for vertical scrollbar moving table when present


		if (left > scrollWidth) {

			hozAdjust = left - scrollWidth;

			this.element.style.marginLeft = -hozAdjust + "px";
		} else {

			this.element.style.marginLeft = 0;
		}

		//keep frozen columns fixed in position


		//this._calcFrozenColumnsPos(hozAdjust + 3);


		this.scrollLeft = left;

		if (this.table.modExists("frozenColumns")) {

			this.table.modules.frozenColumns.scrollHorizontal();
		}
	};

	///////////// Column Setup Functions /////////////


	ColumnManager.prototype.generateColumnsFromRowData = function (data) {

		var cols = [],
		    row,
		    sorter;

		if (data && data.length) {

			row = data[0];

			for (var key in row) {

				var col = {

					field: key,

					title: key

				};

				var value = row[key];

				switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {

					case "undefined":

						sorter = "string";

						break;

					case "boolean":

						sorter = "boolean";

						break;

					case "object":

						if (Array.isArray(value)) {

							sorter = "array";
						} else {

							sorter = "string";
						}

						break;

					default:

						if (!isNaN(value) && value !== "") {

							sorter = "number";
						} else {

							if (value.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i)) {

								sorter = "alphanum";
							} else {

								sorter = "string";
							}
						}

						break;

				}

				col.sorter = sorter;

				cols.push(col);
			}

			this.table.options.columns = cols;

			this.setColumns(this.table.options.columns);
		}
	};

	ColumnManager.prototype.setColumns = function (cols, row) {

		var self = this;

		while (self.headersElement.firstChild) {
			self.headersElement.removeChild(self.headersElement.firstChild);
		}self.columns = [];

		self.columnsByIndex = [];

		self.columnsByField = {};

		//reset frozen columns


		if (self.table.modExists("frozenColumns")) {

			self.table.modules.frozenColumns.reset();
		}

		cols.forEach(function (def, i) {

			self._addColumn(def);
		});

		self._reIndexColumns();

		if (self.table.options.responsiveLayout && self.table.modExists("responsiveLayout", true)) {

			self.table.modules.responsiveLayout.initialize();
		}

		self.redraw(true);
	};

	ColumnManager.prototype._addColumn = function (definition, before, nextToColumn) {

		var column = new Column(definition, this),
		    colEl = column.getElement(),
		    index = nextToColumn ? this.findColumnIndex(nextToColumn) : nextToColumn;

		if (nextToColumn && index > -1) {

			var parentIndex = this.columns.indexOf(nextToColumn.getTopColumn());

			var nextEl = nextToColumn.getElement();

			if (before) {

				this.columns.splice(parentIndex, 0, column);

				nextEl.parentNode.insertBefore(colEl, nextEl);
			} else {

				this.columns.splice(parentIndex + 1, 0, column);

				nextEl.parentNode.insertBefore(colEl, nextEl.nextSibling);
			}
		} else {

			if (before) {

				this.columns.unshift(column);

				this.headersElement.insertBefore(column.getElement(), this.headersElement.firstChild);
			} else {

				this.columns.push(column);

				this.headersElement.appendChild(column.getElement());
			}

			column.columnRendered();
		}

		return column;
	};

	ColumnManager.prototype.registerColumnField = function (col) {

		if (col.definition.field) {

			this.columnsByField[col.definition.field] = col;
		}
	};

	ColumnManager.prototype.registerColumnPosition = function (col) {

		this.columnsByIndex.push(col);
	};

	ColumnManager.prototype._reIndexColumns = function () {

		this.columnsByIndex = [];

		this.columns.forEach(function (column) {

			column.reRegisterPosition();
		});
	};

	//ensure column headers take up the correct amount of space in column groups


	ColumnManager.prototype._verticalAlignHeaders = function () {

		var self = this,
		    minHeight = 0;

		self.columns.forEach(function (column) {

			var height;

			column.clearVerticalAlign();

			height = column.getHeight();

			if (height > minHeight) {

				minHeight = height;
			}
		});

		self.columns.forEach(function (column) {

			column.verticalAlign(self.table.options.columnHeaderVertAlign, minHeight);
		});

		self.rowManager.adjustTableSize();
	};

	//////////////// Column Details /////////////////


	ColumnManager.prototype.findColumn = function (subject) {

		var self = this;

		if ((typeof subject === 'undefined' ? 'undefined' : _typeof(subject)) == "object") {

			if (subject instanceof Column) {

				//subject is column element


				return subject;
			} else if (subject instanceof ColumnComponent) {

				//subject is public column component


				return subject._getSelf() || false;
			} else if (typeof HTMLElement !== "undefined" && subject instanceof HTMLElement) {

				//subject is a HTML element of the column header


				var match = self.columns.find(function (column) {

					return column.element === subject;
				});

				return match || false;
			}
		} else {

			//subject should be treated as the field name of the column


			return this.columnsByField[subject] || false;
		}

		//catch all for any other type of input


		return false;
	};

	ColumnManager.prototype.getColumnByField = function (field) {

		return this.columnsByField[field];
	};

	ColumnManager.prototype.getColumnsByFieldRoot = function (root) {
		var _this = this;

		var matches = [];

		Object.keys(this.columnsByField).forEach(function (field) {

			var fieldRoot = field.split(".")[0];

			if (fieldRoot === root) {

				matches.push(_this.columnsByField[field]);
			}
		});

		return matches;
	};

	ColumnManager.prototype.getColumnByIndex = function (index) {

		return this.columnsByIndex[index];
	};

	ColumnManager.prototype.getFirstVisibileColumn = function (index) {

		var index = this.columnsByIndex.findIndex(function (col) {

			return col.visible;
		});

		return index > -1 ? this.columnsByIndex[index] : false;
	};

	ColumnManager.prototype.getColumns = function () {

		return this.columns;
	};

	ColumnManager.prototype.findColumnIndex = function (column) {

		return this.columnsByIndex.findIndex(function (col) {

			return column === col;
		});
	};

	//return all columns that are not groups


	ColumnManager.prototype.getRealColumns = function () {

		return this.columnsByIndex;
	};

	//travers across columns and call action


	ColumnManager.prototype.traverse = function (callback) {

		var self = this;

		self.columnsByIndex.forEach(function (column, i) {

			callback(column, i);
		});
	};

	//get defintions of actual columns


	ColumnManager.prototype.getDefinitions = function (active) {

		var self = this,
		    output = [];

		self.columnsByIndex.forEach(function (column) {

			if (!active || active && column.visible) {

				output.push(column.getDefinition());
			}
		});

		return output;
	};

	//get full nested definition tree


	ColumnManager.prototype.getDefinitionTree = function () {

		var self = this,
		    output = [];

		self.columns.forEach(function (column) {

			output.push(column.getDefinition(true));
		});

		return output;
	};

	ColumnManager.prototype.getComponents = function (structured) {

		var self = this,
		    output = [],
		    columns = structured ? self.columns : self.columnsByIndex;

		columns.forEach(function (column) {

			output.push(column.getComponent());
		});

		return output;
	};

	ColumnManager.prototype.getWidth = function () {

		var width = 0;

		this.columnsByIndex.forEach(function (column) {

			if (column.visible) {

				width += column.getWidth();
			}
		});

		return width;
	};

	ColumnManager.prototype.moveColumn = function (from, to, after) {

		this.moveColumnActual(from, to, after);

		if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {

			this.table.modules.responsiveLayout.initialize();
		}

		if (this.table.modExists("columnCalcs")) {

			this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows);
		}

		to.element.parentNode.insertBefore(from.element, to.element);

		if (after) {

			to.element.parentNode.insertBefore(to.element, from.element);
		}

		this._verticalAlignHeaders();

		this.table.rowManager.reinitialize();
	};

	ColumnManager.prototype.moveColumnActual = function (from, to, after) {

		if (from.parent.isGroup) {

			this._moveColumnInArray(from.parent.columns, from, to, after);
		} else {

			this._moveColumnInArray(this.columns, from, to, after);
		}

		this._moveColumnInArray(this.columnsByIndex, from, to, after, true);

		if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {

			this.table.modules.responsiveLayout.initialize();
		}

		if (this.table.options.columnMoved) {

			this.table.options.columnMoved.call(this.table, from.getComponent(), this.table.columnManager.getComponents());
		}

		if (this.table.options.persistence && this.table.modExists("persistence", true) && this.table.modules.persistence.config.columns) {

			this.table.modules.persistence.save("columns");
		}
	};

	ColumnManager.prototype._moveColumnInArray = function (columns, from, to, after, updateRows) {

		var fromIndex = columns.indexOf(from),
		    toIndex;

		if (fromIndex > -1) {

			columns.splice(fromIndex, 1);

			toIndex = columns.indexOf(to);

			if (toIndex > -1) {

				if (after) {

					toIndex = toIndex + 1;
				}
			} else {

				toIndex = fromIndex;
			}

			columns.splice(toIndex, 0, from);

			if (updateRows) {

				this.table.rowManager.rows.forEach(function (row) {

					if (row.cells.length) {

						var cell = row.cells.splice(fromIndex, 1)[0];

						row.cells.splice(toIndex, 0, cell);
					}
				});
			}
		}
	};

	ColumnManager.prototype.scrollToColumn = function (column, position, ifVisible) {
		var _this2 = this;

		var left = 0,
		    offset = 0,
		    adjust = 0,
		    colEl = column.getElement();

		return new Promise(function (resolve, reject) {

			if (typeof position === "undefined") {

				position = _this2.table.options.scrollToColumnPosition;
			}

			if (typeof ifVisible === "undefined") {

				ifVisible = _this2.table.options.scrollToColumnIfVisible;
			}

			if (column.visible) {

				//align to correct position


				switch (position) {

					case "middle":

					case "center":

						adjust = -_this2.element.clientWidth / 2;

						break;

					case "right":

						adjust = colEl.clientWidth - _this2.headersElement.clientWidth;

						break;

				}

				//check column visibility


				if (!ifVisible) {

					offset = colEl.offsetLeft;

					if (offset > 0 && offset + colEl.offsetWidth < _this2.element.clientWidth) {

						return false;
					}
				}

				//calculate scroll position


				left = colEl.offsetLeft + _this2.element.scrollLeft + adjust;

				left = Math.max(Math.min(left, _this2.table.rowManager.element.scrollWidth - _this2.table.rowManager.element.clientWidth), 0);

				_this2.table.rowManager.scrollHorizontal(left);

				_this2.scrollHorizontal(left);

				resolve();
			} else {

				console.warn("Scroll Error - Column not visible");

				reject("Scroll Error - Column not visible");
			}
		});
	};

	//////////////// Cell Management /////////////////


	ColumnManager.prototype.generateCells = function (row) {

		var self = this;

		var cells = [];

		self.columnsByIndex.forEach(function (column) {

			cells.push(column.generateCell(row));
		});

		return cells;
	};

	//////////////// Column Management /////////////////


	ColumnManager.prototype.getFlexBaseWidth = function () {

		var self = this,
		    totalWidth = self.table.element.clientWidth,
		    //table element width


		fixedWidth = 0;

		//adjust for vertical scrollbar if present


		if (self.rowManager.element.scrollHeight > self.rowManager.element.clientHeight) {

			totalWidth -= self.rowManager.element.offsetWidth - self.rowManager.element.clientWidth;
		}

		this.columnsByIndex.forEach(function (column) {

			var width, minWidth, colWidth;

			if (column.visible) {

				width = column.definition.width || 0;

				minWidth = typeof column.minWidth == "undefined" ? self.table.options.columnMinWidth : parseInt(column.minWidth);

				if (typeof width == "string") {

					if (width.indexOf("%") > -1) {

						colWidth = totalWidth / 100 * parseInt(width);
					} else {

						colWidth = parseInt(width);
					}
				} else {

					colWidth = width;
				}

				fixedWidth += colWidth > minWidth ? colWidth : minWidth;
			}
		});

		return fixedWidth;
	};

	ColumnManager.prototype.addColumn = function (definition, before, nextToColumn) {
		var _this3 = this;

		return new Promise(function (resolve, reject) {

			var column = _this3._addColumn(definition, before, nextToColumn);

			_this3._reIndexColumns();

			if (_this3.table.options.responsiveLayout && _this3.table.modExists("responsiveLayout", true)) {

				_this3.table.modules.responsiveLayout.initialize();
			}

			if (_this3.table.modExists("columnCalcs")) {

				_this3.table.modules.columnCalcs.recalc(_this3.table.rowManager.activeRows);
			}

			_this3.redraw();

			if (_this3.table.modules.layout.getMode() != "fitColumns") {

				column.reinitializeWidth();
			}

			_this3._verticalAlignHeaders();

			_this3.table.rowManager.reinitialize();

			resolve(column);
		});
	};

	//remove column from system


	ColumnManager.prototype.deregisterColumn = function (column) {

		var field = column.getField(),
		    index;

		//remove from field list


		if (field) {

			delete this.columnsByField[field];
		}

		//remove from index list


		index = this.columnsByIndex.indexOf(column);

		if (index > -1) {

			this.columnsByIndex.splice(index, 1);
		}

		//remove from column list


		index = this.columns.indexOf(column);

		if (index > -1) {

			this.columns.splice(index, 1);
		}

		if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {

			this.table.modules.responsiveLayout.initialize();
		}

		this.redraw();
	};

	//redraw columns


	ColumnManager.prototype.redraw = function (force) {

		if (force) {

			if (Tabulator.prototype.helpers.elVisible(this.element)) {

				this._verticalAlignHeaders();
			}

			this.table.rowManager.resetScroll();

			this.table.rowManager.reinitialize();
		}

		if (["fitColumns", "fitDataStretch"].indexOf(this.table.modules.layout.getMode()) > -1) {

			this.table.modules.layout.layout();
		} else {

			if (force) {

				this.table.modules.layout.layout();
			} else {

				if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {

					this.table.modules.responsiveLayout.update();
				}
			}
		}

		if (this.table.modExists("frozenColumns")) {

			this.table.modules.frozenColumns.layout();
		}

		if (this.table.modExists("columnCalcs")) {

			this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows);
		}

		if (force) {

			if (this.table.options.persistence && this.table.modExists("persistence", true) && this.table.modules.persistence.config.columns) {

				this.table.modules.persistence.save("columns");
			}

			if (this.table.modExists("columnCalcs")) {

				this.table.modules.columnCalcs.redraw();
			}
		}

		this.table.footerManager.redraw();
	};

	//public column object

	var ColumnComponent = function ColumnComponent(column) {

		this._column = column;

		this.type = "ColumnComponent";
	};

	ColumnComponent.prototype.getElement = function () {

		return this._column.getElement();
	};

	ColumnComponent.prototype.getDefinition = function () {

		return this._column.getDefinition();
	};

	ColumnComponent.prototype.getField = function () {

		return this._column.getField();
	};

	ColumnComponent.prototype.getCells = function () {

		var cells = [];

		this._column.cells.forEach(function (cell) {

			cells.push(cell.getComponent());
		});

		return cells;
	};

	ColumnComponent.prototype.getVisibility = function () {

		return this._column.visible;
	};

	ColumnComponent.prototype.show = function () {

		if (this._column.isGroup) {

			this._column.columns.forEach(function (column) {

				column.show();
			});
		} else {

			this._column.show();
		}
	};

	ColumnComponent.prototype.hide = function () {

		if (this._column.isGroup) {

			this._column.columns.forEach(function (column) {

				column.hide();
			});
		} else {

			this._column.hide();
		}
	};

	ColumnComponent.prototype.toggle = function () {

		if (this._column.visible) {

			this.hide();
		} else {

			this.show();
		}
	};

	ColumnComponent.prototype.delete = function () {

		return this._column.delete();
	};

	ColumnComponent.prototype.getSubColumns = function () {

		var output = [];

		if (this._column.columns.length) {

			this._column.columns.forEach(function (column) {

				output.push(column.getComponent());
			});
		}

		return output;
	};

	ColumnComponent.prototype.getParentColumn = function () {

		return this._column.parent instanceof Column ? this._column.parent.getComponent() : false;
	};

	ColumnComponent.prototype._getSelf = function () {

		return this._column;
	};

	ColumnComponent.prototype.scrollTo = function () {

		return this._column.table.columnManager.scrollToColumn(this._column);
	};

	ColumnComponent.prototype.getTable = function () {

		return this._column.table;
	};

	ColumnComponent.prototype.headerFilterFocus = function () {

		if (this._column.table.modExists("filter", true)) {

			this._column.table.modules.filter.setHeaderFilterFocus(this._column);
		}
	};

	ColumnComponent.prototype.reloadHeaderFilter = function () {

		if (this._column.table.modExists("filter", true)) {

			this._column.table.modules.filter.reloadHeaderFilter(this._column);
		}
	};

	ColumnComponent.prototype.getHeaderFilterValue = function () {

		if (this._column.table.modExists("filter", true)) {

			this._column.table.modules.filter.getHeaderFilterValue(this._column);
		}
	};

	ColumnComponent.prototype.setHeaderFilterValue = function (value) {

		if (this._column.table.modExists("filter", true)) {

			this._column.table.modules.filter.setHeaderFilterValue(this._column, value);
		}
	};

	ColumnComponent.prototype.move = function (to, after) {

		var toColumn = this._column.table.columnManager.findColumn(to);

		if (toColumn) {

			this._column.table.columnManager.moveColumn(this._column, toColumn, after);
		} else {

			console.warn("Move Error - No matching column found:", toColumn);
		}
	};

	ColumnComponent.prototype.getNextColumn = function () {

		var nextCol = this._column.nextColumn();

		return nextCol ? nextCol.getComponent() : false;
	};

	ColumnComponent.prototype.getPrevColumn = function () {

		var prevCol = this._column.prevColumn();

		return prevCol ? prevCol.getComponent() : false;
	};

	ColumnComponent.prototype.updateDefinition = function (updates) {

		return this._column.updateDefinition(updates);
	};

	var Column = function Column(def, parent) {

		var self = this;

		this.table = parent.table;

		this.definition = def; //column definition

		this.parent = parent; //hold parent object

		this.type = "column"; //type of element

		this.columns = []; //child columns

		this.cells = []; //cells bound to this column

		this.element = this.createElement(); //column header element

		this.contentElement = false;

		this.titleElement = false;

		this.groupElement = this.createGroupElement(); //column group holder element

		this.isGroup = false;

		this.tooltip = false; //hold column tooltip

		this.hozAlign = ""; //horizontal text alignment

		this.vertAlign = ""; //vert text alignment


		//multi dimensional filed handling

		this.field = "";

		this.fieldStructure = "";

		this.getFieldValue = "";

		this.setFieldValue = "";

		this.titleFormatterRendered = false;

		this.setField(this.definition.field);

		if (this.table.options.invalidOptionWarnings) {

			this.checkDefinition();
		}

		this.modules = {}; //hold module variables;


		this.cellEvents = {

			cellClick: false,

			cellDblClick: false,

			cellContext: false,

			cellTap: false,

			cellDblTap: false,

			cellTapHold: false,

			cellMouseEnter: false,

			cellMouseLeave: false,

			cellMouseOver: false,

			cellMouseOut: false,

			cellMouseMove: false

		};

		this.width = null; //column width

		this.widthStyled = ""; //column width prestyled to improve render efficiency

		this.minWidth = null; //column minimum width

		this.minWidthStyled = ""; //column minimum prestyled to improve render efficiency

		this.widthFixed = false; //user has specified a width for this column


		this.visible = true; //default visible state


		this._mapDepricatedFunctionality();

		//initialize column

		if (def.columns) {

			this.isGroup = true;

			def.columns.forEach(function (def, i) {

				var newCol = new Column(def, self);

				self.attachColumn(newCol);
			});

			self.checkColumnVisibility();
		} else {

			parent.registerColumnField(this);
		}

		if (def.rowHandle && this.table.options.movableRows !== false && this.table.modExists("moveRow")) {

			this.table.modules.moveRow.setHandle(true);
		}

		this._buildHeader();

		this.bindModuleColumns();
	};

	Column.prototype.createElement = function () {

		var el = document.createElement("div");

		el.classList.add("tabulator-col");

		el.setAttribute("role", "columnheader");

		el.setAttribute("aria-sort", "none");

		return el;
	};

	Column.prototype.createGroupElement = function () {

		var el = document.createElement("div");

		el.classList.add("tabulator-col-group-cols");

		return el;
	};

	Column.prototype.checkDefinition = function () {
		var _this4 = this;

		Object.keys(this.definition).forEach(function (key) {

			if (_this4.defaultOptionList.indexOf(key) === -1) {

				console.warn("Invalid column definition option in '" + (_this4.field || _this4.definition.title) + "' column:", key);
			}
		});
	};

	Column.prototype.setField = function (field) {

		this.field = field;

		this.fieldStructure = field ? this.table.options.nestedFieldSeparator ? field.split(this.table.options.nestedFieldSeparator) : [field] : [];

		this.getFieldValue = this.fieldStructure.length > 1 ? this._getNestedData : this._getFlatData;

		this.setFieldValue = this.fieldStructure.length > 1 ? this._setNestedData : this._setFlatData;
	};

	//register column position with column manager

	Column.prototype.registerColumnPosition = function (column) {

		this.parent.registerColumnPosition(column);
	};

	//register column position with column manager

	Column.prototype.registerColumnField = function (column) {

		this.parent.registerColumnField(column);
	};

	//trigger position registration

	Column.prototype.reRegisterPosition = function () {

		if (this.isGroup) {

			this.columns.forEach(function (column) {

				column.reRegisterPosition();
			});
		} else {

			this.registerColumnPosition(this);
		}
	};

	Column.prototype._mapDepricatedFunctionality = function () {

		if (typeof this.definition.hideInHtml !== "undefined") {

			this.definition.htmlOutput = !this.definition.hideInHtml;

			console.warn("hideInHtml column definition property is deprecated, you should now use htmlOutput");
		}

		if (typeof this.definition.align !== "undefined") {

			this.definition.hozAlign = this.definition.align;

			console.warn("align column definition property is deprecated, you should now use hozAlign");
		}
	};

	Column.prototype.setTooltip = function () {

		var self = this,
		    def = self.definition;

		//set header tooltips

		var tooltip = def.headerTooltip || def.tooltip === false ? def.headerTooltip : self.table.options.tooltipsHeader;

		if (tooltip) {

			if (tooltip === true) {

				if (def.field) {

					self.table.modules.localize.bind("columns|" + def.field, function (value) {

						self.element.setAttribute("title", value || def.title);
					});
				} else {

					self.element.setAttribute("title", def.title);
				}
			} else {

				if (typeof tooltip == "function") {

					tooltip = tooltip(self.getComponent());

					if (tooltip === false) {

						tooltip = "";
					}
				}

				self.element.setAttribute("title", tooltip);
			}
		} else {

			self.element.setAttribute("title", "");
		}
	};

	//build header element

	Column.prototype._buildHeader = function () {

		var self = this,
		    def = self.definition;

		while (self.element.firstChild) {
			self.element.removeChild(self.element.firstChild);
		}if (def.headerVertical) {

			self.element.classList.add("tabulator-col-vertical");

			if (def.headerVertical === "flip") {

				self.element.classList.add("tabulator-col-vertical-flip");
			}
		}

		self.contentElement = self._bindEvents();

		self.contentElement = self._buildColumnHeaderContent();

		self.element.appendChild(self.contentElement);

		if (self.isGroup) {

			self._buildGroupHeader();
		} else {

			self._buildColumnHeader();
		}

		self.setTooltip();

		//set resizable handles

		if (self.table.options.resizableColumns && self.table.modExists("resizeColumns")) {

			self.table.modules.resizeColumns.initializeColumn("header", self, self.element);
		}

		//set resizable handles

		if (def.headerFilter && self.table.modExists("filter") && self.table.modExists("edit")) {

			if (typeof def.headerFilterPlaceholder !== "undefined" && def.field) {

				self.table.modules.localize.setHeaderFilterColumnPlaceholder(def.field, def.headerFilterPlaceholder);
			}

			self.table.modules.filter.initializeColumn(self);
		}

		//set resizable handles

		if (self.table.modExists("frozenColumns")) {

			self.table.modules.frozenColumns.initializeColumn(self);
		}

		//set movable column

		if (self.table.options.movableColumns && !self.isGroup && self.table.modExists("moveColumn")) {

			self.table.modules.moveColumn.initializeColumn(self);
		}

		//set calcs column

		if ((def.topCalc || def.bottomCalc) && self.table.modExists("columnCalcs")) {

			self.table.modules.columnCalcs.initializeColumn(self);
		}

		//handle persistence

		if (self.table.modExists("persistence") && self.table.modules.persistence.config.columns) {

			self.table.modules.persistence.initializeColumn(self);
		}

		//update header tooltip on mouse enter

		self.element.addEventListener("mouseenter", function (e) {

			self.setTooltip();
		});
	};

	Column.prototype._bindEvents = function () {

		var self = this,
		    def = self.definition,
		    dblTap,
		    tapHold,
		    tap;

		//setup header click event bindings

		if (typeof def.headerClick == "function") {

			self.element.addEventListener("click", function (e) {
				def.headerClick(e, self.getComponent());
			});
		}

		if (typeof def.headerDblClick == "function") {

			self.element.addEventListener("dblclick", function (e) {
				def.headerDblClick(e, self.getComponent());
			});
		}

		if (typeof def.headerContext == "function") {

			self.element.addEventListener("contextmenu", function (e) {
				def.headerContext(e, self.getComponent());
			});
		}

		//setup header tap event bindings

		if (typeof def.headerTap == "function") {

			tap = false;

			self.element.addEventListener("touchstart", function (e) {

				tap = true;
			}, { passive: true });

			self.element.addEventListener("touchend", function (e) {

				if (tap) {

					def.headerTap(e, self.getComponent());
				}

				tap = false;
			});
		}

		if (typeof def.headerDblTap == "function") {

			dblTap = null;

			self.element.addEventListener("touchend", function (e) {

				if (dblTap) {

					clearTimeout(dblTap);

					dblTap = null;

					def.headerDblTap(e, self.getComponent());
				} else {

					dblTap = setTimeout(function () {

						clearTimeout(dblTap);

						dblTap = null;
					}, 300);
				}
			});
		}

		if (typeof def.headerTapHold == "function") {

			tapHold = null;

			self.element.addEventListener("touchstart", function (e) {

				clearTimeout(tapHold);

				tapHold = setTimeout(function () {

					clearTimeout(tapHold);

					tapHold = null;

					tap = false;

					def.headerTapHold(e, self.getComponent());
				}, 1000);
			}, { passive: true });

			self.element.addEventListener("touchend", function (e) {

				clearTimeout(tapHold);

				tapHold = null;
			});
		}

		//store column cell click event bindings

		if (typeof def.cellClick == "function") {

			self.cellEvents.cellClick = def.cellClick;
		}

		if (typeof def.cellDblClick == "function") {

			self.cellEvents.cellDblClick = def.cellDblClick;
		}

		if (typeof def.cellContext == "function") {

			self.cellEvents.cellContext = def.cellContext;
		}

		//store column mouse event bindings

		if (typeof def.cellMouseEnter == "function") {

			self.cellEvents.cellMouseEnter = def.cellMouseEnter;
		}

		if (typeof def.cellMouseLeave == "function") {

			self.cellEvents.cellMouseLeave = def.cellMouseLeave;
		}

		if (typeof def.cellMouseOver == "function") {

			self.cellEvents.cellMouseOver = def.cellMouseOver;
		}

		if (typeof def.cellMouseOut == "function") {

			self.cellEvents.cellMouseOut = def.cellMouseOut;
		}

		if (typeof def.cellMouseMove == "function") {

			self.cellEvents.cellMouseMove = def.cellMouseMove;
		}

		//setup column cell tap event bindings

		if (typeof def.cellTap == "function") {

			self.cellEvents.cellTap = def.cellTap;
		}

		if (typeof def.cellDblTap == "function") {

			self.cellEvents.cellDblTap = def.cellDblTap;
		}

		if (typeof def.cellTapHold == "function") {

			self.cellEvents.cellTapHold = def.cellTapHold;
		}

		//setup column cell edit callbacks

		if (typeof def.cellEdited == "function") {

			self.cellEvents.cellEdited = def.cellEdited;
		}

		if (typeof def.cellEditing == "function") {

			self.cellEvents.cellEditing = def.cellEditing;
		}

		if (typeof def.cellEditCancelled == "function") {

			self.cellEvents.cellEditCancelled = def.cellEditCancelled;
		}
	};

	//build header element for header

	Column.prototype._buildColumnHeader = function () {

		var self = this,
		    def = self.definition,
		    table = self.table,
		    sortable;

		//set column sorter

		if (table.modExists("sort")) {

			table.modules.sort.initializeColumn(self, self.contentElement);
		}

		//set column header context menu

		if ((def.headerContextMenu || def.headerMenu) && table.modExists("menu")) {

			table.modules.menu.initializeColumnHeader(self);
		}

		//set column formatter

		if (table.modExists("format")) {

			table.modules.format.initializeColumn(self);
		}

		//set column editor

		if (typeof def.editor != "undefined" && table.modExists("edit")) {

			table.modules.edit.initializeColumn(self);
		}

		//set colum validator

		if (typeof def.validator != "undefined" && table.modExists("validate")) {

			table.modules.validate.initializeColumn(self);
		}

		//set column mutator

		if (table.modExists("mutator")) {

			table.modules.mutator.initializeColumn(self);
		}

		//set column accessor

		if (table.modExists("accessor")) {

			table.modules.accessor.initializeColumn(self);
		}

		//set respoviveLayout

		if (_typeof(table.options.responsiveLayout) && table.modExists("responsiveLayout")) {

			table.modules.responsiveLayout.initializeColumn(self);
		}

		//set column visibility

		if (typeof def.visible != "undefined") {

			if (def.visible) {

				self.show(true);
			} else {

				self.hide(true);
			}
		}

		//asign additional css classes to column header

		if (def.cssClass) {

			var classeNames = def.cssClass.split(" ");

			classeNames.forEach(function (className) {

				self.element.classList.add(className);
			});
		}

		if (def.field) {

			this.element.setAttribute("tabulator-field", def.field);
		}

		//set min width if present

		self.setMinWidth(typeof def.minWidth == "undefined" ? self.table.options.columnMinWidth : parseInt(def.minWidth));

		self.reinitializeWidth();

		//set tooltip if present

		self.tooltip = self.definition.tooltip || self.definition.tooltip === false ? self.definition.tooltip : self.table.options.tooltips;

		//set orizontal text alignment

		self.hozAlign = typeof self.definition.hozAlign == "undefined" ? self.table.options.cellHozAlign : self.definition.hozAlign;

		self.vertAlign = typeof self.definition.vertAlign == "undefined" ? self.table.options.cellVertAlign : self.definition.vertAlign;
	};

	Column.prototype._buildColumnHeaderContent = function () {

		var def = self.definition,
		    table = self.table;

		var contentElement = document.createElement("div");

		contentElement.classList.add("tabulator-col-content");

		this.titleElement = this._buildColumnHeaderTitle();

		contentElement.appendChild(this.titleElement);

		return contentElement;
	};

	//build title element of column

	Column.prototype._buildColumnHeaderTitle = function () {

		var self = this,
		    def = self.definition,
		    table = self.table,
		    title;

		var titleHolderElement = document.createElement("div");

		titleHolderElement.classList.add("tabulator-col-title");

		if (def.editableTitle) {

			var titleElement = document.createElement("input");

			titleElement.classList.add("tabulator-title-editor");

			titleElement.addEventListener("click", function (e) {

				e.stopPropagation();

				titleElement.focus();
			});

			titleElement.addEventListener("change", function () {

				def.title = titleElement.value;

				table.options.columnTitleChanged.call(self.table, self.getComponent());
			});

			titleHolderElement.appendChild(titleElement);

			if (def.field) {

				table.modules.localize.bind("columns|" + def.field, function (text) {

					titleElement.value = text || def.title || "&nbsp;";
				});
			} else {

				titleElement.value = def.title || "&nbsp;";
			}
		} else {

			if (def.field) {

				table.modules.localize.bind("columns|" + def.field, function (text) {

					self._formatColumnHeaderTitle(titleHolderElement, text || def.title || "&nbsp;");
				});
			} else {

				self._formatColumnHeaderTitle(titleHolderElement, def.title || "&nbsp;");
			}
		}

		return titleHolderElement;
	};

	Column.prototype._formatColumnHeaderTitle = function (el, title) {
		var _this5 = this;

		var formatter, contents, params, mockCell, onRendered;

		if (this.definition.titleFormatter && this.table.modExists("format")) {

			formatter = this.table.modules.format.getFormatter(this.definition.titleFormatter);

			onRendered = function onRendered(callback) {

				_this5.titleFormatterRendered = callback;
			};

			mockCell = {

				getValue: function getValue() {

					return title;
				},

				getElement: function getElement() {

					return el;
				}

			};

			params = this.definition.titleFormatterParams || {};

			params = typeof params === "function" ? params() : params;

			contents = formatter.call(this.table.modules.format, mockCell, params, onRendered);

			switch (typeof contents === 'undefined' ? 'undefined' : _typeof(contents)) {

				case "object":

					if (contents instanceof Node) {

						el.appendChild(contents);
					} else {

						el.innerHTML = "";

						console.warn("Format Error - Title formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:", contents);
					}

					break;

				case "undefined":

				case "null":

					el.innerHTML = "";

					break;

				default:

					el.innerHTML = contents;

			}
		} else {

			el.innerHTML = title;
		}
	};

	//build header element for column group

	Column.prototype._buildGroupHeader = function () {
		var _this6 = this;

		this.element.classList.add("tabulator-col-group");

		this.element.setAttribute("role", "columngroup");

		this.element.setAttribute("aria-title", this.definition.title);

		//asign additional css classes to column header

		if (this.definition.cssClass) {

			var classeNames = this.definition.cssClass.split(" ");

			classeNames.forEach(function (className) {

				_this6.element.classList.add(className);
			});
		}

		this.element.appendChild(this.groupElement);
	};

	//flat field lookup

	Column.prototype._getFlatData = function (data) {

		return data[this.field];
	};

	//nested field lookup

	Column.prototype._getNestedData = function (data) {

		var dataObj = data,
		    structure = this.fieldStructure,
		    length = structure.length,
		    output;

		for (var i = 0; i < length; i++) {

			dataObj = dataObj[structure[i]];

			output = dataObj;

			if (!dataObj) {

				break;
			}
		}

		return output;
	};

	//flat field set

	Column.prototype._setFlatData = function (data, value) {

		if (this.field) {

			data[this.field] = value;
		}
	};

	//nested field set

	Column.prototype._setNestedData = function (data, value) {

		var dataObj = data,
		    structure = this.fieldStructure,
		    length = structure.length;

		for (var i = 0; i < length; i++) {

			if (i == length - 1) {

				dataObj[structure[i]] = value;
			} else {

				if (!dataObj[structure[i]]) {

					if (typeof value !== "undefined") {

						dataObj[structure[i]] = {};
					} else {

						break;
					}
				}

				dataObj = dataObj[structure[i]];
			}
		}
	};

	//attach column to this group

	Column.prototype.attachColumn = function (column) {

		var self = this;

		if (self.groupElement) {

			self.columns.push(column);

			self.groupElement.appendChild(column.getElement());
		} else {

			console.warn("Column Warning - Column being attached to another column instead of column group");
		}
	};

	//vertically align header in column

	Column.prototype.verticalAlign = function (alignment, height) {

		//calculate height of column header and group holder element

		var parentHeight = this.parent.isGroup ? this.parent.getGroupElement().clientHeight : height || this.parent.getHeadersElement().clientHeight;

		// var parentHeight = this.parent.isGroup ? this.parent.getGroupElement().clientHeight : this.parent.getHeadersElement().clientHeight;


		this.element.style.height = parentHeight + "px";

		if (this.isGroup) {

			this.groupElement.style.minHeight = parentHeight - this.contentElement.offsetHeight + "px";
		}

		//vertically align cell contents

		if (!this.isGroup && alignment !== "top") {

			if (alignment === "bottom") {

				this.element.style.paddingTop = this.element.clientHeight - this.contentElement.offsetHeight + "px";
			} else {

				this.element.style.paddingTop = (this.element.clientHeight - this.contentElement.offsetHeight) / 2 + "px";
			}
		}

		this.columns.forEach(function (column) {

			column.verticalAlign(alignment);
		});
	};

	//clear vertical alignmenet

	Column.prototype.clearVerticalAlign = function () {

		this.element.style.paddingTop = "";

		this.element.style.height = "";

		this.element.style.minHeight = "";

		this.groupElement.style.minHeight = "";

		this.columns.forEach(function (column) {

			column.clearVerticalAlign();
		});
	};

	Column.prototype.bindModuleColumns = function () {

		//check if rownum formatter is being used on a column

		if (this.definition.formatter == "rownum") {

			this.table.rowManager.rowNumColumn = this;
		}
	};

	//// Retreive Column Information ////


	//return column header element

	Column.prototype.getElement = function () {

		return this.element;
	};

	//return colunm group element

	Column.prototype.getGroupElement = function () {

		return this.groupElement;
	};

	//return field name

	Column.prototype.getField = function () {

		return this.field;
	};

	//return the first column in a group

	Column.prototype.getFirstColumn = function () {

		if (!this.isGroup) {

			return this;
		} else {

			if (this.columns.length) {

				return this.columns[0].getFirstColumn();
			} else {

				return false;
			}
		}
	};

	//return the last column in a group

	Column.prototype.getLastColumn = function () {

		if (!this.isGroup) {

			return this;
		} else {

			if (this.columns.length) {

				return this.columns[this.columns.length - 1].getLastColumn();
			} else {

				return false;
			}
		}
	};

	//return all columns in a group

	Column.prototype.getColumns = function () {

		return this.columns;
	};

	//return all columns in a group

	Column.prototype.getCells = function () {

		return this.cells;
	};

	//retreive the top column in a group of columns

	Column.prototype.getTopColumn = function () {

		if (this.parent.isGroup) {

			return this.parent.getTopColumn();
		} else {

			return this;
		}
	};

	//return column definition object

	Column.prototype.getDefinition = function (updateBranches) {

		var colDefs = [];

		if (this.isGroup && updateBranches) {

			this.columns.forEach(function (column) {

				colDefs.push(column.getDefinition(true));
			});

			this.definition.columns = colDefs;
		}

		return this.definition;
	};

	//////////////////// Actions ////////////////////


	Column.prototype.checkColumnVisibility = function () {

		var visible = false;

		this.columns.forEach(function (column) {

			if (column.visible) {

				visible = true;
			}
		});

		if (visible) {

			this.show();

			this.parent.table.options.columnVisibilityChanged.call(this.table, this.getComponent(), false);
		} else {

			this.hide();
		}
	};

	//show column

	Column.prototype.show = function (silent, responsiveToggle) {

		if (!this.visible) {

			this.visible = true;

			this.element.style.display = "";

			if (this.parent.isGroup) {

				this.parent.checkColumnVisibility();
			}

			this.cells.forEach(function (cell) {

				cell.show();
			});

			if (!this.isGroup && this.width === null) {

				this.reinitializeWidth();
			}

			this.table.columnManager._verticalAlignHeaders();

			if (this.table.options.persistence && this.table.modExists("persistence", true) && this.table.modules.persistence.config.columns) {

				this.table.modules.persistence.save("columns");
			}

			if (!responsiveToggle && this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {

				this.table.modules.responsiveLayout.updateColumnVisibility(this, this.visible);
			}

			if (!silent) {

				this.table.options.columnVisibilityChanged.call(this.table, this.getComponent(), true);
			}

			if (this.parent.isGroup) {

				this.parent.matchChildWidths();
			}
		}
	};

	//hide column

	Column.prototype.hide = function (silent, responsiveToggle) {

		if (this.visible) {

			this.visible = false;

			this.element.style.display = "none";

			this.table.columnManager._verticalAlignHeaders();

			if (this.parent.isGroup) {

				this.parent.checkColumnVisibility();
			}

			this.cells.forEach(function (cell) {

				cell.hide();
			});

			if (this.table.options.persistence && this.table.modExists("persistence", true) && this.table.modules.persistence.config.columns) {

				this.table.modules.persistence.save("columns");
			}

			if (!responsiveToggle && this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {

				this.table.modules.responsiveLayout.updateColumnVisibility(this, this.visible);
			}

			if (!silent) {

				this.table.options.columnVisibilityChanged.call(this.table, this.getComponent(), false);
			}

			if (this.parent.isGroup) {

				this.parent.matchChildWidths();
			}
		}
	};

	Column.prototype.matchChildWidths = function () {

		var childWidth = 0;

		if (this.contentElement && this.columns.length) {

			this.columns.forEach(function (column) {

				if (column.visible) {

					childWidth += column.getWidth();
				}
			});

			this.contentElement.style.maxWidth = childWidth - 1 + "px";

			if (this.parent.isGroup) {

				this.parent.matchChildWidths();
			}
		}
	};

	Column.prototype.setWidth = function (width) {

		this.widthFixed = true;

		this.setWidthActual(width);
	};

	Column.prototype.setWidthActual = function (width) {

		if (isNaN(width)) {

			width = Math.floor(this.table.element.clientWidth / 100 * parseInt(width));
		}

		width = Math.max(this.minWidth, width);

		this.width = width;

		this.widthStyled = width ? width + "px" : "";

		this.element.style.width = this.widthStyled;

		if (!this.isGroup) {

			this.cells.forEach(function (cell) {

				cell.setWidth();
			});
		}

		if (this.parent.isGroup) {

			this.parent.matchChildWidths();
		}

		//set resizable handles

		if (this.table.modExists("frozenColumns")) {

			this.table.modules.frozenColumns.layout();
		}
	};

	Column.prototype.checkCellHeights = function () {

		var rows = [];

		this.cells.forEach(function (cell) {

			if (cell.row.heightInitialized) {

				if (cell.row.getElement().offsetParent !== null) {

					rows.push(cell.row);

					cell.row.clearCellHeight();
				} else {

					cell.row.heightInitialized = false;
				}
			}
		});

		rows.forEach(function (row) {

			row.calcHeight();
		});

		rows.forEach(function (row) {

			row.setCellHeight();
		});
	};

	Column.prototype.getWidth = function () {

		var width = 0;

		if (this.isGroup) {

			this.columns.forEach(function (column) {

				if (column.visible) {

					width += column.getWidth();
				}
			});
		} else {

			width = this.width;
		}

		return width;
	};

	Column.prototype.getHeight = function () {

		return this.element.offsetHeight;
	};

	Column.prototype.setMinWidth = function (minWidth) {

		this.minWidth = minWidth;

		this.minWidthStyled = minWidth ? minWidth + "px" : "";

		this.element.style.minWidth = this.minWidthStyled;

		this.cells.forEach(function (cell) {

			cell.setMinWidth();
		});
	};

	Column.prototype.delete = function () {
		var _this7 = this;

		return new Promise(function (resolve, reject) {

			if (_this7.isGroup) {

				_this7.columns.forEach(function (column) {

					column.delete();
				});
			}

			var cellCount = _this7.cells.length;

			for (var i = 0; i < cellCount; i++) {

				_this7.cells[0].delete();
			}

			_this7.element.parentNode.removeChild(_this7.element);

			_this7.table.columnManager.deregisterColumn(_this7);

			resolve();
		});
	};

	Column.prototype.columnRendered = function () {

		if (this.titleFormatterRendered) {

			this.titleFormatterRendered();
		}
	};

	//////////////// Cell Management /////////////////


	//generate cell for this column

	Column.prototype.generateCell = function (row) {

		var self = this;

		var cell = new Cell(self, row);

		this.cells.push(cell);

		return cell;
	};

	Column.prototype.nextColumn = function () {

		var index = this.table.columnManager.findColumnIndex(this);

		return index > -1 ? this._nextVisibleColumn(index + 1) : false;
	};

	Column.prototype._nextVisibleColumn = function (index) {

		var column = this.table.columnManager.getColumnByIndex(index);

		return !column || column.visible ? column : this._nextVisibleColumn(index + 1);
	};

	Column.prototype.prevColumn = function () {

		var index = this.table.columnManager.findColumnIndex(this);

		return index > -1 ? this._prevVisibleColumn(index - 1) : false;
	};

	Column.prototype._prevVisibleColumn = function (index) {

		var column = this.table.columnManager.getColumnByIndex(index);

		return !column || column.visible ? column : this._prevVisibleColumn(index - 1);
	};

	Column.prototype.reinitializeWidth = function (force) {

		this.widthFixed = false;

		//set width if present

		if (typeof this.definition.width !== "undefined" && !force) {

			this.setWidth(this.definition.width);
		}

		//hide header filters to prevent them altering column width

		if (this.table.modExists("filter")) {

			this.table.modules.filter.hideHeaderFilterElements();
		}

		this.fitToData();

		//show header filters again after layout is complete

		if (this.table.modExists("filter")) {

			this.table.modules.filter.showHeaderFilterElements();
		}
	};

	//set column width to maximum cell width

	Column.prototype.fitToData = function () {

		var self = this;

		if (!this.widthFixed) {

			this.element.style.width = "";

			self.cells.forEach(function (cell) {

				cell.clearWidth();
			});
		}

		var maxWidth = this.element.offsetWidth;

		if (!self.width || !this.widthFixed) {

			self.cells.forEach(function (cell) {

				var width = cell.getWidth();

				if (width > maxWidth) {

					maxWidth = width;
				}
			});

			if (maxWidth) {

				self.setWidthActual(maxWidth + 1);
			}
		}
	};

	Column.prototype.updateDefinition = function (updates) {
		var _this8 = this;

		return new Promise(function (resolve, reject) {

			var definition;

			if (!_this8.isGroup) {

				definition = Object.assign({}, _this8.getDefinition());

				definition = Object.assign(definition, updates);

				_this8.table.columnManager.addColumn(definition, false, _this8).then(function (column) {

					if (definition.field == _this8.field) {

						_this8.field = false; //cleair field name to prevent deletion of duplicate column from arrays
					}

					_this8.delete().then(function () {

						resolve(column.getComponent());
					}).catch(function (err) {

						reject(err);
					});
				}).catch(function (err) {

					reject(err);
				});
			} else {

				console.warn("Column Update Error - The updateDefintion function is only available on columns, not column groups");

				reject("Column Update Error - The updateDefintion function is only available on columns, not column groups");
			}
		});
	};

	Column.prototype.deleteCell = function (cell) {

		var index = this.cells.indexOf(cell);

		if (index > -1) {

			this.cells.splice(index, 1);
		}
	};

	Column.prototype.defaultOptionList = ["title", "field", "columns", "visible", "align", "hozAlign", "vertAlign", "width", "minWidth", "widthGrow", "widthShrink", "resizable", "frozen", "responsive", "tooltip", "cssClass", "rowHandle", "hideInHtml", "print", "htmlOutput", "sorter", "sorterParams", "formatter", "formatterParams", "variableHeight", "editable", "editor", "editorParams", "validator", "mutator", "mutatorParams", "mutatorData", "mutatorDataParams", "mutatorEdit", "mutatorEditParams", "mutatorClipboard", "mutatorClipboardParams", "accessor", "accessorParams", "accessorData", "accessorDataParams", "accessorDownload", "accessorDownloadParams", "accessorClipboard", "accessorClipboardParams", "accessorPrint", "accessorPrintParams", "accessorHtmlOutput", "accessorHtmlOutputParams", "clipboard", "download", "downloadTitle", "topCalc", "topCalcParams", "topCalcFormatter", "topCalcFormatterParams", "bottomCalc", "bottomCalcParams", "bottomCalcFormatter", "bottomCalcFormatterParams", "cellClick", "cellDblClick", "cellContext", "cellTap", "cellDblTap", "cellTapHold", "cellMouseEnter", "cellMouseLeave", "cellMouseOver", "cellMouseOut", "cellMouseMove", "cellEditing", "cellEdited", "cellEditCancelled", "headerSort", "headerSortStartingDir", "headerSortTristate", "headerClick", "headerDblClick", "headerContext", "headerTap", "headerDblTap", "headerTapHold", "headerTooltip", "headerVertical", "editableTitle", "titleFormatter", "titleFormatterParams", "headerFilter", "headerFilterPlaceholder", "headerFilterParams", "headerFilterEmptyCheck", "headerFilterFunc", "headerFilterFuncParams", "headerFilterLiveFilter", "print", "headerContextMenu", "headerMenu", "contextMenu", "formatterPrint", "formatterPrintParams", "formatterClipboard", "formatterClipboardParams", "formatterHtmlOutput", "formatterHtmlOutputParams"];

	//////////////// Event Bindings /////////////////


	//////////////// Object Generation /////////////////

	Column.prototype.getComponent = function () {

		return new ColumnComponent(this);
	};

	var RowManager = function RowManager(table) {

		this.table = table;

		this.element = this.createHolderElement(); //containing element

		this.tableElement = this.createTableElement(); //table element

		this.heightFixer = this.createTableElement(); //table element

		this.columnManager = null; //hold column manager object

		this.height = 0; //hold height of table element


		this.firstRender = false; //handle first render

		this.renderMode = "virtual"; //current rendering mode

		this.fixedHeight = false; //current rendering mode


		this.rows = []; //hold row data objects

		this.activeRows = []; //rows currently available to on display in the table

		this.activeRowsCount = 0; //count of active rows


		this.displayRows = []; //rows currently on display in the table

		this.displayRowsCount = 0; //count of display rows


		this.scrollTop = 0;

		this.scrollLeft = 0;

		this.vDomRowHeight = 20; //approximation of row heights for padding


		this.vDomTop = 0; //hold position for first rendered row in the virtual DOM

		this.vDomBottom = 0; //hold possition for last rendered row in the virtual DOM


		this.vDomScrollPosTop = 0; //last scroll position of the vDom top;

		this.vDomScrollPosBottom = 0; //last scroll position of the vDom bottom;


		this.vDomTopPad = 0; //hold value of padding for top of virtual DOM

		this.vDomBottomPad = 0; //hold value of padding for bottom of virtual DOM


		this.vDomMaxRenderChain = 90; //the maximum number of dom elements that can be rendered in 1 go


		this.vDomWindowBuffer = 0; //window row buffer before removing elements, to smooth scrolling


		this.vDomWindowMinTotalRows = 20; //minimum number of rows to be generated in virtual dom (prevent buffering issues on tables with tall rows)

		this.vDomWindowMinMarginRows = 5; //minimum number of rows to be generated in virtual dom margin


		this.vDomTopNewRows = []; //rows to normalize after appending to optimize render speed

		this.vDomBottomNewRows = []; //rows to normalize after appending to optimize render speed


		this.rowNumColumn = false; //hold column component for row number column


		this.redrawBlock = false; //prevent redraws to allow multiple data manipulations becore continuing

		this.redrawBlockRestoreConfig = false; //store latest redraw function calls for when redraw is needed

		this.redrawBlockRederInPosition = false; //store latest redraw function calls for when redraw is needed
	};

	//////////////// Setup Functions /////////////////


	RowManager.prototype.createHolderElement = function () {

		var el = document.createElement("div");

		el.classList.add("tabulator-tableHolder");

		el.setAttribute("tabindex", 0);

		return el;
	};

	RowManager.prototype.createTableElement = function () {

		var el = document.createElement("div");

		el.classList.add("tabulator-table");

		return el;
	};

	//return containing element

	RowManager.prototype.getElement = function () {

		return this.element;
	};

	//return table element

	RowManager.prototype.getTableElement = function () {

		return this.tableElement;
	};

	//return position of row in table

	RowManager.prototype.getRowPosition = function (row, active) {

		if (active) {

			return this.activeRows.indexOf(row);
		} else {

			return this.rows.indexOf(row);
		}
	};

	//link to column manager

	RowManager.prototype.setColumnManager = function (manager) {

		this.columnManager = manager;
	};

	RowManager.prototype.initialize = function () {

		var self = this;

		self.setRenderMode();

		//initialize manager

		self.element.appendChild(self.tableElement);

		self.firstRender = true;

		//scroll header along with table body

		self.element.addEventListener("scroll", function () {

			var left = self.element.scrollLeft;

			//handle horizontal scrolling

			if (self.scrollLeft != left) {

				self.columnManager.scrollHorizontal(left);

				if (self.table.options.groupBy) {

					self.table.modules.groupRows.scrollHeaders(left);
				}

				if (self.table.modExists("columnCalcs")) {

					self.table.modules.columnCalcs.scrollHorizontal(left);
				}

				self.table.options.scrollHorizontal(left);
			}

			self.scrollLeft = left;
		});

		//handle virtual dom scrolling

		if (this.renderMode === "virtual") {

			self.element.addEventListener("scroll", function () {

				var top = self.element.scrollTop;

				var dir = self.scrollTop > top;

				//handle verical scrolling

				if (self.scrollTop != top) {

					self.scrollTop = top;

					self.scrollVertical(dir);

					if (self.table.options.ajaxProgressiveLoad == "scroll") {

						self.table.modules.ajax.nextPage(self.element.scrollHeight - self.element.clientHeight - top);
					}

					self.table.options.scrollVertical(top);
				} else {

					self.scrollTop = top;
				}
			});
		}
	};

	////////////////// Row Manipulation //////////////////


	RowManager.prototype.findRow = function (subject) {

		var self = this;

		if ((typeof subject === 'undefined' ? 'undefined' : _typeof(subject)) == "object") {

			if (subject instanceof Row) {

				//subject is row element

				return subject;
			} else if (subject instanceof RowComponent) {

				//subject is public row component

				return subject._getSelf() || false;
			} else if (typeof HTMLElement !== "undefined" && subject instanceof HTMLElement) {

				//subject is a HTML element of the row

				var match = self.rows.find(function (row) {

					return row.element === subject;
				});

				return match || false;
			}
		} else if (typeof subject == "undefined" || subject === null) {

			return false;
		} else {

			//subject should be treated as the index of the row

			var _match = self.rows.find(function (row) {

				return row.data[self.table.options.index] == subject;
			});

			return _match || false;
		}

		//catch all for any other type of input


		return false;
	};

	RowManager.prototype.getRowFromDataObject = function (data) {

		var match = this.rows.find(function (row) {

			return row.data === data;
		});

		return match || false;
	};

	RowManager.prototype.getRowFromPosition = function (position, active) {

		if (active) {

			return this.activeRows[position];
		} else {

			return this.rows[position];
		}
	};

	RowManager.prototype.scrollToRow = function (row, position, ifVisible) {
		var _this9 = this;

		var rowIndex = this.getDisplayRows().indexOf(row),
		    rowEl = row.getElement(),
		    rowTop,
		    offset = 0;

		return new Promise(function (resolve, reject) {

			if (rowIndex > -1) {

				if (typeof position === "undefined") {

					position = _this9.table.options.scrollToRowPosition;
				}

				if (typeof ifVisible === "undefined") {

					ifVisible = _this9.table.options.scrollToRowIfVisible;
				}

				if (position === "nearest") {

					switch (_this9.renderMode) {

						case "classic":

							rowTop = Tabulator.prototype.helpers.elOffset(rowEl).top;

							position = Math.abs(_this9.element.scrollTop - rowTop) > Math.abs(_this9.element.scrollTop + _this9.element.clientHeight - rowTop) ? "bottom" : "top";

							break;

						case "virtual":

							position = Math.abs(_this9.vDomTop - rowIndex) > Math.abs(_this9.vDomBottom - rowIndex) ? "bottom" : "top";

							break;

					}
				}

				//check row visibility

				if (!ifVisible) {

					if (Tabulator.prototype.helpers.elVisible(rowEl)) {

						offset = Tabulator.prototype.helpers.elOffset(rowEl).top - Tabulator.prototype.helpers.elOffset(_this9.element).top;

						if (offset > 0 && offset < _this9.element.clientHeight - rowEl.offsetHeight) {

							return false;
						}
					}
				}

				//scroll to row

				switch (_this9.renderMode) {

					case "classic":

						_this9.element.scrollTop = Tabulator.prototype.helpers.elOffset(rowEl).top - Tabulator.prototype.helpers.elOffset(_this9.element).top + _this9.element.scrollTop;

						break;

					case "virtual":

						_this9._virtualRenderFill(rowIndex, true);

						break;

				}

				//align to correct position

				switch (position) {

					case "middle":

					case "center":

						if (_this9.element.scrollHeight - _this9.element.scrollTop == _this9.element.clientHeight) {

							_this9.element.scrollTop = _this9.element.scrollTop + (rowEl.offsetTop - _this9.element.scrollTop) - (_this9.element.scrollHeight - rowEl.offsetTop) / 2;
						} else {

							_this9.element.scrollTop = _this9.element.scrollTop - _this9.element.clientHeight / 2;
						}

						break;

					case "bottom":

						if (_this9.element.scrollHeight - _this9.element.scrollTop == _this9.element.clientHeight) {

							_this9.element.scrollTop = _this9.element.scrollTop - (_this9.element.scrollHeight - rowEl.offsetTop) + rowEl.offsetHeight;
						} else {

							_this9.element.scrollTop = _this9.element.scrollTop - _this9.element.clientHeight + rowEl.offsetHeight;
						}

						break;

				}

				resolve();
			} else {

				console.warn("Scroll Error - Row not visible");

				reject("Scroll Error - Row not visible");
			}
		});
	};

	////////////////// Data Handling //////////////////


	RowManager.prototype.setData = function (data, renderInPosition, columnsChanged) {
		var _this10 = this;

		var self = this;

		return new Promise(function (resolve, reject) {

			if (renderInPosition && _this10.getDisplayRows().length) {

				if (self.table.options.pagination) {

					self._setDataActual(data, true);
				} else {

					_this10.reRenderInPosition(function () {

						self._setDataActual(data);
					});
				}
			} else {

				if (_this10.table.options.autoColumns && columnsChanged) {

					_this10.table.columnManager.generateColumnsFromRowData(data);
				}

				_this10.resetScroll();

				_this10._setDataActual(data);
			}

			resolve();
		});
	};

	RowManager.prototype._setDataActual = function (data, renderInPosition) {

		var self = this;

		self.table.options.dataLoading.call(this.table, data);

		this._wipeElements();

		if (this.table.options.history && this.table.modExists("history")) {

			this.table.modules.history.clear();
		}

		if (Array.isArray(data)) {

			if (this.table.modExists("selectRow")) {

				this.table.modules.selectRow.clearSelectionData();
			}

			if (this.table.options.reactiveData && this.table.modExists("reactiveData", true)) {

				this.table.modules.reactiveData.watchData(data);
			}

			data.forEach(function (def, i) {

				if (def && (typeof def === 'undefined' ? 'undefined' : _typeof(def)) === "object") {

					var row = new Row(def, self);

					self.rows.push(row);
				} else {

					console.warn("Data Loading Warning - Invalid row data detected and ignored, expecting object but received:", def);
				}
			});

			self.table.options.dataLoaded.call(this.table, data);

			self.refreshActiveData(false, false, renderInPosition);
		} else {

			console.error("Data Loading Error - Unable to process data due to invalid data type \nExpecting: array \nReceived: ", typeof data === 'undefined' ? 'undefined' : _typeof(data), "\nData:     ", data);
		}
	};

	RowManager.prototype._wipeElements = function () {

		this.rows.forEach(function (row) {

			row.wipe();
		});

		if (this.table.options.groupBy && this.table.modExists("groupRows")) {

			this.table.modules.groupRows.wipe();
		}

		this.rows = [];
	};

	RowManager.prototype.deleteRow = function (row, blockRedraw) {

		var allIndex = this.rows.indexOf(row),
		    activeIndex = this.activeRows.indexOf(row);

		if (activeIndex > -1) {

			this.activeRows.splice(activeIndex, 1);
		}

		if (allIndex > -1) {

			this.rows.splice(allIndex, 1);
		}

		this.setActiveRows(this.activeRows);

		this.displayRowIterator(function (rows) {

			var displayIndex = rows.indexOf(row);

			if (displayIndex > -1) {

				rows.splice(displayIndex, 1);
			}
		});

		if (!blockRedraw) {

			this.reRenderInPosition();
		}

		this.regenerateRowNumbers();

		this.table.options.rowDeleted.call(this.table, row.getComponent());

		this.table.options.dataEdited.call(this.table, this.getData());

		if (this.table.options.groupBy && this.table.modExists("groupRows")) {

			this.table.modules.groupRows.updateGroupRows(true);
		} else if (this.table.options.pagination && this.table.modExists("page")) {

			this.refreshActiveData(false, false, true);
		} else {

			if (this.table.options.pagination && this.table.modExists("page")) {

				this.refreshActiveData("page");
			}
		}
	};

	RowManager.prototype.addRow = function (data, pos, index, blockRedraw) {

		var row = this.addRowActual(data, pos, index, blockRedraw);

		if (this.table.options.history && this.table.modExists("history")) {

			this.table.modules.history.action("rowAdd", row, { data: data, pos: pos, index: index });
		}

		return row;
	};

	//add multiple rows

	RowManager.prototype.addRows = function (data, pos, index) {
		var _this11 = this;

		var self = this,
		    length = 0,
		    rows = [];

		return new Promise(function (resolve, reject) {

			pos = _this11.findAddRowPos(pos);

			if (!Array.isArray(data)) {

				data = [data];
			}

			length = data.length - 1;

			if (typeof index == "undefined" && pos || typeof index !== "undefined" && !pos) {

				data.reverse();
			}

			data.forEach(function (item, i) {

				var row = self.addRow(item, pos, index, true);

				rows.push(row);
			});

			if (_this11.table.options.groupBy && _this11.table.modExists("groupRows")) {

				_this11.table.modules.groupRows.updateGroupRows(true);
			} else if (_this11.table.options.pagination && _this11.table.modExists("page")) {

				_this11.refreshActiveData(false, false, true);
			} else {

				_this11.reRenderInPosition();
			}

			//recalc column calculations if present

			if (_this11.table.modExists("columnCalcs")) {

				_this11.table.modules.columnCalcs.recalc(_this11.table.rowManager.activeRows);
			}

			_this11.regenerateRowNumbers();

			resolve(rows);
		});
	};

	RowManager.prototype.findAddRowPos = function (pos) {

		if (typeof pos === "undefined") {

			pos = this.table.options.addRowPos;
		}

		if (pos === "pos") {

			pos = true;
		}

		if (pos === "bottom") {

			pos = false;
		}

		return pos;
	};

	RowManager.prototype.addRowActual = function (data, pos, index, blockRedraw) {

		var row = data instanceof Row ? data : new Row(data || {}, this),
		    top = this.findAddRowPos(pos),
		    allIndex = -1,
		    activeIndex,
		    dispRows;

		if (!index && this.table.options.pagination && this.table.options.paginationAddRow == "page") {

			dispRows = this.getDisplayRows();

			if (top) {

				if (dispRows.length) {

					index = dispRows[0];
				} else {

					if (this.activeRows.length) {

						index = this.activeRows[this.activeRows.length - 1];

						top = false;
					}
				}
			} else {

				if (dispRows.length) {

					index = dispRows[dispRows.length - 1];

					top = dispRows.length < this.table.modules.page.getPageSize() ? false : true;
				}
			}
		}

		if (typeof index !== "undefined") {

			index = this.findRow(index);
		}

		if (this.table.options.groupBy && this.table.modExists("groupRows")) {

			this.table.modules.groupRows.assignRowToGroup(row);

			var groupRows = row.getGroup().rows;

			if (groupRows.length > 1) {

				if (!index || index && groupRows.indexOf(index) == -1) {

					if (top) {

						if (groupRows[0] !== row) {

							index = groupRows[0];

							this._moveRowInArray(row.getGroup().rows, row, index, !top);
						}
					} else {

						if (groupRows[groupRows.length - 1] !== row) {

							index = groupRows[groupRows.length - 1];

							this._moveRowInArray(row.getGroup().rows, row, index, !top);
						}
					}
				} else {

					this._moveRowInArray(row.getGroup().rows, row, index, !top);
				}
			}
		}

		if (index) {

			allIndex = this.rows.indexOf(index);
		}

		if (index && allIndex > -1) {

			activeIndex = this.activeRows.indexOf(index);

			this.displayRowIterator(function (rows) {

				var displayIndex = rows.indexOf(index);

				if (displayIndex > -1) {

					rows.splice(top ? displayIndex : displayIndex + 1, 0, row);
				}
			});

			if (activeIndex > -1) {

				this.activeRows.splice(top ? activeIndex : activeIndex + 1, 0, row);
			}

			this.rows.splice(top ? allIndex : allIndex + 1, 0, row);
		} else {

			if (top) {

				this.displayRowIterator(function (rows) {

					rows.unshift(row);
				});

				this.activeRows.unshift(row);

				this.rows.unshift(row);
			} else {

				this.displayRowIterator(function (rows) {

					rows.push(row);
				});

				this.activeRows.push(row);

				this.rows.push(row);
			}
		}

		this.setActiveRows(this.activeRows);

		this.table.options.rowAdded.call(this.table, row.getComponent());

		this.table.options.dataEdited.call(this.table, this.getData());

		if (!blockRedraw) {

			this.reRenderInPosition();
		}

		return row;
	};

	RowManager.prototype.moveRow = function (from, to, after) {

		if (this.table.options.history && this.table.modExists("history")) {

			this.table.modules.history.action("rowMove", from, { posFrom: this.getRowPosition(from), posTo: this.getRowPosition(to), to: to, after: after });
		}

		this.moveRowActual(from, to, after);

		this.regenerateRowNumbers();

		this.table.options.rowMoved.call(this.table, from.getComponent());
	};

	RowManager.prototype.moveRowActual = function (from, to, after) {

		var self = this;

		this._moveRowInArray(this.rows, from, to, after);

		this._moveRowInArray(this.activeRows, from, to, after);

		this.displayRowIterator(function (rows) {

			self._moveRowInArray(rows, from, to, after);
		});

		if (this.table.options.groupBy && this.table.modExists("groupRows")) {

			var toGroup = to.getGroup();

			var fromGroup = from.getGroup();

			if (toGroup === fromGroup) {

				this._moveRowInArray(toGroup.rows, from, to, after);
			} else {

				if (fromGroup) {

					fromGroup.removeRow(from);
				}

				toGroup.insertRow(from, to, after);
			}
		}
	};

	RowManager.prototype._moveRowInArray = function (rows, from, to, after) {

		var fromIndex, toIndex, start, end;

		if (from !== to) {

			fromIndex = rows.indexOf(from);

			if (fromIndex > -1) {

				rows.splice(fromIndex, 1);

				toIndex = rows.indexOf(to);

				if (toIndex > -1) {

					if (after) {

						rows.splice(toIndex + 1, 0, from);
					} else {

						rows.splice(toIndex, 0, from);
					}
				} else {

					rows.splice(fromIndex, 0, from);
				}
			}

			//restyle rows

			if (rows === this.getDisplayRows()) {

				start = fromIndex < toIndex ? fromIndex : toIndex;

				end = toIndex > fromIndex ? toIndex : fromIndex + 1;

				for (var i = start; i <= end; i++) {

					if (rows[i]) {

						this.styleRow(rows[i], i);
					}
				}
			}
		}
	};

	RowManager.prototype.clearData = function () {

		this.setData([]);
	};

	RowManager.prototype.getRowIndex = function (row) {

		return this.findRowIndex(row, this.rows);
	};

	RowManager.prototype.getDisplayRowIndex = function (row) {

		var index = this.getDisplayRows().indexOf(row);

		return index > -1 ? index : false;
	};

	RowManager.prototype.nextDisplayRow = function (row, rowOnly) {

		var index = this.getDisplayRowIndex(row),
		    nextRow = false;

		if (index !== false && index < this.displayRowsCount - 1) {

			nextRow = this.getDisplayRows()[index + 1];
		}

		if (nextRow && (!(nextRow instanceof Row) || nextRow.type != "row")) {

			return this.nextDisplayRow(nextRow, rowOnly);
		}

		return nextRow;
	};

	RowManager.prototype.prevDisplayRow = function (row, rowOnly) {

		var index = this.getDisplayRowIndex(row),
		    prevRow = false;

		if (index) {

			prevRow = this.getDisplayRows()[index - 1];
		}

		if (prevRow && (!(prevRow instanceof Row) || prevRow.type != "row")) {

			return this.prevDisplayRow(prevRow, rowOnly);
		}

		return prevRow;
	};

	RowManager.prototype.findRowIndex = function (row, list) {

		var rowIndex;

		row = this.findRow(row);

		if (row) {

			rowIndex = list.indexOf(row);

			if (rowIndex > -1) {

				return rowIndex;
			}
		}

		return false;
	};

	RowManager.prototype.getData = function (active, transform) {

		var output = [],
		    rows = this.getRows(active);

		rows.forEach(function (row) {

			if (row.type == "row") {

				output.push(row.getData(transform || "data"));
			}
		});

		return output;
	};

	RowManager.prototype.getComponents = function (active) {

		var output = [],
		    rows = this.getRows(active);

		rows.forEach(function (row) {

			output.push(row.getComponent());
		});

		return output;
	};

	RowManager.prototype.getDataCount = function (active) {

		var rows = this.getRows(active);

		return rows.length;
	};

	RowManager.prototype._genRemoteRequest = function () {
		var _this12 = this;

		var table = this.table,
		    options = table.options,
		    params = {};

		if (table.modExists("page")) {

			//set sort data if defined

			if (options.ajaxSorting) {

				var sorters = this.table.modules.sort.getSort();

				sorters.forEach(function (item) {

					delete item.column;
				});

				params[this.table.modules.page.paginationDataSentNames.sorters] = sorters;
			}

			//set filter data if defined

			if (options.ajaxFiltering) {

				var filters = this.table.modules.filter.getFilters(true, true);

				params[this.table.modules.page.paginationDataSentNames.filters] = filters;
			}

			this.table.modules.ajax.setParams(params, true);
		}

		table.modules.ajax.sendRequest().then(function (data) {

			_this12._setDataActual(data, true);
		}).catch(function (e) {});
	};

	//choose the path to refresh data after a filter update

	RowManager.prototype.filterRefresh = function () {

		var table = this.table,
		    options = table.options,
		    left = this.scrollLeft;

		if (options.ajaxFiltering) {

			if (options.pagination == "remote" && table.modExists("page")) {

				table.modules.page.reset(true);

				table.modules.page.setPage(1).then(function () {}).catch(function () {});
			} else if (options.ajaxProgressiveLoad) {

				table.modules.ajax.loadData().then(function () {}).catch(function () {});
			} else {

				//assume data is url, make ajax call to url to get data

				this._genRemoteRequest();
			}
		} else {

			this.refreshActiveData("filter");
		}

		this.scrollHorizontal(left);
	};

	//choose the path to refresh data after a sorter update

	RowManager.prototype.sorterRefresh = function (loadOrignalData) {

		var table = this.table,
		    options = this.table.options,
		    left = this.scrollLeft;

		if (options.ajaxSorting) {

			if ((options.pagination == "remote" || options.progressiveLoad) && table.modExists("page")) {

				table.modules.page.reset(true);

				table.modules.page.setPage(1).then(function () {}).catch(function () {});
			} else if (options.ajaxProgressiveLoad) {

				table.modules.ajax.loadData().then(function () {}).catch(function () {});
			} else {

				//assume data is url, make ajax call to url to get data

				this._genRemoteRequest();
			}
		} else {

			this.refreshActiveData(loadOrignalData ? "filter" : "sort");
		}

		this.scrollHorizontal(left);
	};

	RowManager.prototype.scrollHorizontal = function (left) {

		this.scrollLeft = left;

		this.element.scrollLeft = left;

		if (this.table.options.groupBy) {

			this.table.modules.groupRows.scrollHeaders(left);
		}

		if (this.table.modExists("columnCalcs")) {

			this.table.modules.columnCalcs.scrollHorizontal(left);
		}
	};

	//set active data set

	RowManager.prototype.refreshActiveData = function (stage, skipStage, renderInPosition) {

		var self = this,
		    table = this.table,
		    cascadeOrder = ["all", "filter", "sort", "display", "freeze", "group", "tree", "page"],
		    displayIndex;

		if (this.redrawBlock) {

			if (!this.redrawBlockRestoreConfig || cascadeOrder.indexOf(stage) < cascadeOrder.indexOf(this.redrawBlockRestoreConfig.stage)) {

				this.redrawBlockRestoreConfig = {

					stage: stage,

					skipStage: skipStage,

					renderInPosition: renderInPosition

				};
			}

			return;
		} else {

			if (self.table.modExists("edit")) {

				self.table.modules.edit.cancelEdit();
			}

			if (!stage) {

				stage = "all";
			}

			if (table.options.selectable && !table.options.selectablePersistence && table.modExists("selectRow")) {

				table.modules.selectRow.deselectRows();
			}

			//cascade through data refresh stages

			switch (stage) {

				case "all":

				case "filter":

					if (!skipStage) {

						if (table.modExists("filter")) {

							self.setActiveRows(table.modules.filter.filter(self.rows));
						} else {

							self.setActiveRows(self.rows.slice(0));
						}
					} else {

						skipStage = false;
					}

				case "sort":

					if (!skipStage) {

						if (table.modExists("sort")) {

							table.modules.sort.sort(this.activeRows);
						}
					} else {

						skipStage = false;
					}

					//regenerate row numbers for row number formatter if in use

					this.regenerateRowNumbers();

				//generic stage to allow for pipeline trigger after the data manipulation stage

				case "display":

					this.resetDisplayRows();

				case "freeze":

					if (!skipStage) {

						if (this.table.modExists("frozenRows")) {

							if (table.modules.frozenRows.isFrozen()) {

								if (!table.modules.frozenRows.getDisplayIndex()) {

									table.modules.frozenRows.setDisplayIndex(this.getNextDisplayIndex());
								}

								displayIndex = table.modules.frozenRows.getDisplayIndex();

								displayIndex = self.setDisplayRows(table.modules.frozenRows.getRows(this.getDisplayRows(displayIndex - 1)), displayIndex);

								if (displayIndex !== true) {

									table.modules.frozenRows.setDisplayIndex(displayIndex);
								}
							}
						}
					} else {

						skipStage = false;
					}

				case "group":

					if (!skipStage) {

						if (table.options.groupBy && table.modExists("groupRows")) {

							if (!table.modules.groupRows.getDisplayIndex()) {

								table.modules.groupRows.setDisplayIndex(this.getNextDisplayIndex());
							}

							displayIndex = table.modules.groupRows.getDisplayIndex();

							displayIndex = self.setDisplayRows(table.modules.groupRows.getRows(this.getDisplayRows(displayIndex - 1)), displayIndex);

							if (displayIndex !== true) {

								table.modules.groupRows.setDisplayIndex(displayIndex);
							}
						}
					} else {

						skipStage = false;
					}

				case "tree":

					if (!skipStage) {

						if (table.options.dataTree && table.modExists("dataTree")) {

							if (!table.modules.dataTree.getDisplayIndex()) {

								table.modules.dataTree.setDisplayIndex(this.getNextDisplayIndex());
							}

							displayIndex = table.modules.dataTree.getDisplayIndex();

							displayIndex = self.setDisplayRows(table.modules.dataTree.getRows(this.getDisplayRows(displayIndex - 1)), displayIndex);

							if (displayIndex !== true) {

								table.modules.dataTree.setDisplayIndex(displayIndex);
							}
						}
					} else {

						skipStage = false;
					}

					if (table.options.pagination && table.modExists("page") && !renderInPosition) {

						if (table.modules.page.getMode() == "local") {

							table.modules.page.reset();
						}
					}

				case "page":

					if (!skipStage) {

						if (table.options.pagination && table.modExists("page")) {

							if (!table.modules.page.getDisplayIndex()) {

								table.modules.page.setDisplayIndex(this.getNextDisplayIndex());
							}

							displayIndex = table.modules.page.getDisplayIndex();

							if (table.modules.page.getMode() == "local") {

								table.modules.page.setMaxRows(this.getDisplayRows(displayIndex - 1).length);
							}

							displayIndex = self.setDisplayRows(table.modules.page.getRows(this.getDisplayRows(displayIndex - 1)), displayIndex);

							if (displayIndex !== true) {

								table.modules.page.setDisplayIndex(displayIndex);
							}
						}
					} else {

						skipStage = false;
					}

			}

			if (Tabulator.prototype.helpers.elVisible(self.element)) {

				if (renderInPosition) {

					self.reRenderInPosition();
				} else {

					self.renderTable();

					if (table.options.layoutColumnsOnNewData) {

						self.table.columnManager.redraw(true);
					}
				}
			}

			if (table.modExists("columnCalcs")) {

				table.modules.columnCalcs.recalc(this.activeRows);
			}
		}
	};

	//regenerate row numbers for row number formatter if in use

	RowManager.prototype.regenerateRowNumbers = function () {
		var _this13 = this;

		if (this.rowNumColumn) {

			this.activeRows.forEach(function (row) {

				var cell = row.getCell(_this13.rowNumColumn);

				if (cell) {

					cell._generateContents();
				}
			});
		}
	};

	RowManager.prototype.setActiveRows = function (activeRows) {

		this.activeRows = activeRows;

		this.activeRowsCount = this.activeRows.length;
	};

	//reset display rows array

	RowManager.prototype.resetDisplayRows = function () {

		this.displayRows = [];

		this.displayRows.push(this.activeRows.slice(0));

		this.displayRowsCount = this.displayRows[0].length;

		if (this.table.modExists("frozenRows")) {

			this.table.modules.frozenRows.setDisplayIndex(0);
		}

		if (this.table.options.groupBy && this.table.modExists("groupRows")) {

			this.table.modules.groupRows.setDisplayIndex(0);
		}

		if (this.table.options.pagination && this.table.modExists("page")) {

			this.table.modules.page.setDisplayIndex(0);
		}
	};

	RowManager.prototype.getNextDisplayIndex = function () {

		return this.displayRows.length;
	};

	//set display row pipeline data

	RowManager.prototype.setDisplayRows = function (displayRows, index) {

		var output = true;

		if (index && typeof this.displayRows[index] != "undefined") {

			this.displayRows[index] = displayRows;

			output = true;
		} else {

			this.displayRows.push(displayRows);

			output = index = this.displayRows.length - 1;
		}

		if (index == this.displayRows.length - 1) {

			this.displayRowsCount = this.displayRows[this.displayRows.length - 1].length;
		}

		return output;
	};

	RowManager.prototype.getDisplayRows = function (index) {

		if (typeof index == "undefined") {

			return this.displayRows.length ? this.displayRows[this.displayRows.length - 1] : [];
		} else {

			return this.displayRows[index] || [];
		}
	};

	RowManager.prototype.getVisibleRows = function (viewable) {

		var topEdge = this.element.scrollTop,
		    bottomEdge = this.element.clientHeight + topEdge,
		    topFound = false,
		    topRow = 0,
		    bottomRow = 0,
		    rows = this.getDisplayRows();

		if (viewable) {

			this.getDisplayRows();

			for (var i = this.vDomTop; i <= this.vDomBottom; i++) {

				if (rows[i]) {

					if (!topFound) {

						if (topEdge - rows[i].getElement().offsetTop >= 0) {

							topRow = i;
						} else {

							topFound = true;

							if (bottomEdge - rows[i].getElement().offsetTop >= 0) {

								bottomRow = i;
							} else {

								break;
							}
						}
					} else {

						if (bottomEdge - rows[i].getElement().offsetTop >= 0) {

							bottomRow = i;
						} else {

							break;
						}
					}
				}
			}
		} else {

			topRow = this.vDomTop;

			bottomRow = this.vDomBottom;
		}

		return rows.slice(topRow, bottomRow + 1);
	};

	//repeat action accross display rows

	RowManager.prototype.displayRowIterator = function (callback) {

		this.displayRows.forEach(callback);

		this.displayRowsCount = this.displayRows[this.displayRows.length - 1].length;
	};

	//return only actual rows (not group headers etc)

	RowManager.prototype.getRows = function (active) {

		var rows;

		switch (active) {

			case "active":

				rows = this.activeRows;

				break;

			case "display":

				rows = this.table.rowManager.getDisplayRows();

				break;

			case "visible":

				rows = this.getVisibleRows(true);

				break;

			default:

				rows = this.rows;

		}

		return rows;
	};

	///////////////// Table Rendering /////////////////


	//trigger rerender of table in current position

	RowManager.prototype.reRenderInPosition = function (callback) {

		if (this.getRenderMode() == "virtual") {

			if (this.redrawBlock) {

				if (callback) {

					callback();
				} else {

					this.redrawBlockRederInPosition = true;
				}
			} else {

				var scrollTop = this.element.scrollTop;

				var topRow = false;

				var topOffset = false;

				var left = this.scrollLeft;

				var rows = this.getDisplayRows();

				for (var i = this.vDomTop; i <= this.vDomBottom; i++) {

					if (rows[i]) {

						var diff = scrollTop - rows[i].getElement().offsetTop;

						if (topOffset === false || Math.abs(diff) < topOffset) {

							topOffset = diff;

							topRow = i;
						} else {

							break;
						}
					}
				}

				if (callback) {

					callback();
				}

				this._virtualRenderFill(topRow === false ? this.displayRowsCount - 1 : topRow, true, topOffset || 0);

				this.scrollHorizontal(left);
			}
		} else {

			this.renderTable();

			if (callback) {

				callback();
			}
		}
	};

	RowManager.prototype.setRenderMode = function () {

		if (this.table.options.virtualDom) {

			this.renderMode = "virtual";

			if (this.table.element.clientHeight || this.table.options.height) {

				this.fixedHeight = true;
			} else {

				this.fixedHeight = false;
			}
		} else {

			this.renderMode = "classic";
		}
	};

	RowManager.prototype.getRenderMode = function () {

		return this.renderMode;
	};

	RowManager.prototype.renderTable = function () {

		this.table.options.renderStarted.call(this.table);

		this.element.scrollTop = 0;

		switch (this.renderMode) {

			case "classic":

				this._simpleRender();

				break;

			case "virtual":

				this._virtualRenderFill();

				break;

		}

		if (this.firstRender) {

			if (this.displayRowsCount) {

				this.firstRender = false;

				this.table.modules.layout.layout();
			} else {

				this.renderEmptyScroll();
			}
		}

		if (this.table.modExists("frozenColumns")) {

			this.table.modules.frozenColumns.layout();
		}

		if (!this.displayRowsCount) {

			if (this.table.options.placeholder) {

				this.table.options.placeholder.setAttribute("tabulator-render-mode", this.renderMode);

				this.getElement().appendChild(this.table.options.placeholder);

				this.table.options.placeholder.style.width = this.table.columnManager.getWidth() + "px";
			}
		}

		this.table.options.renderComplete.call(this.table);
	};

	//simple render on heightless table

	RowManager.prototype._simpleRender = function () {

		this._clearVirtualDom();

		if (this.displayRowsCount) {

			this.checkClassicModeGroupHeaderWidth();
		} else {

			this.renderEmptyScroll();
		}
	};

	RowManager.prototype.checkClassicModeGroupHeaderWidth = function () {

		var self = this,
		    element = this.tableElement,
		    onlyGroupHeaders = true;

		self.getDisplayRows().forEach(function (row, index) {

			self.styleRow(row, index);

			element.appendChild(row.getElement());

			row.initialize(true);

			if (row.type !== "group") {

				onlyGroupHeaders = false;
			}
		});

		if (onlyGroupHeaders) {

			element.style.minWidth = self.table.columnManager.getWidth() + "px";
		} else {

			element.style.minWidth = "";
		}
	};

	//show scrollbars on empty table div

	RowManager.prototype.renderEmptyScroll = function () {

		if (this.table.options.placeholder) {

			this.tableElement.style.display = "none";
		} else {

			this.tableElement.style.minWidth = this.table.columnManager.getWidth() + "px";

			this.tableElement.style.minHeight = "1px";

			this.tableElement.style.visibility = "hidden";
		}
	};

	RowManager.prototype._clearVirtualDom = function () {

		var element = this.tableElement;

		if (this.table.options.placeholder && this.table.options.placeholder.parentNode) {

			this.table.options.placeholder.parentNode.removeChild(this.table.options.placeholder);
		}

		// element.children.detach();

		while (element.firstChild) {
			element.removeChild(element.firstChild);
		}element.style.paddingTop = "";

		element.style.paddingBottom = "";

		element.style.minWidth = "";

		element.style.minHeight = "";

		element.style.display = "";

		element.style.visibility = "";

		this.scrollTop = 0;

		this.scrollLeft = 0;

		this.vDomTop = 0;

		this.vDomBottom = 0;

		this.vDomTopPad = 0;

		this.vDomBottomPad = 0;
	};

	RowManager.prototype.styleRow = function (row, index) {

		var rowEl = row.getElement();

		if (index % 2) {

			rowEl.classList.add("tabulator-row-even");

			rowEl.classList.remove("tabulator-row-odd");
		} else {

			rowEl.classList.add("tabulator-row-odd");

			rowEl.classList.remove("tabulator-row-even");
		}
	};

	//full virtual render

	RowManager.prototype._virtualRenderFill = function (position, forceMove, offset) {

		var self = this,
		    element = self.tableElement,
		    holder = self.element,
		    topPad = 0,
		    rowsHeight = 0,
		    topPadHeight = 0,
		    i = 0,
		    onlyGroupHeaders = true,
		    rows = self.getDisplayRows();

		position = position || 0;

		offset = offset || 0;

		if (!position) {

			self._clearVirtualDom();
		} else {

			while (element.firstChild) {
				element.removeChild(element.firstChild);
			} //check if position is too close to bottom of table

			var heightOccupied = (self.displayRowsCount - position + 1) * self.vDomRowHeight;

			if (heightOccupied < self.height) {

				position -= Math.ceil((self.height - heightOccupied) / self.vDomRowHeight);

				if (position < 0) {

					position = 0;
				}
			}

			//calculate initial pad

			topPad = Math.min(Math.max(Math.floor(self.vDomWindowBuffer / self.vDomRowHeight), self.vDomWindowMinMarginRows), position);

			position -= topPad;
		}

		if (self.displayRowsCount && Tabulator.prototype.helpers.elVisible(self.element)) {

			self.vDomTop = position;

			self.vDomBottom = position - 1;

			while ((rowsHeight <= self.height + self.vDomWindowBuffer || i < self.vDomWindowMinTotalRows) && self.vDomBottom < self.displayRowsCount - 1) {

				var index = self.vDomBottom + 1,
				    row = rows[index],
				    rowHeight = 0;

				self.styleRow(row, index);

				element.appendChild(row.getElement());

				if (!row.initialized) {

					row.initialize(true);
				} else {

					if (!row.heightInitialized) {

						row.normalizeHeight(true);
					}
				}

				rowHeight = row.getHeight();

				if (i < topPad) {

					topPadHeight += rowHeight;
				} else {

					rowsHeight += rowHeight;
				}

				if (rowHeight > this.vDomWindowBuffer) {

					this.vDomWindowBuffer = rowHeight * 2;
				}

				if (row.type !== "group") {

					onlyGroupHeaders = false;
				}

				self.vDomBottom++;

				i++;
			}

			if (!position) {

				this.vDomTopPad = 0;

				//adjust rowheight to match average of rendered elements

				self.vDomRowHeight = Math.floor((rowsHeight + topPadHeight) / i);

				self.vDomBottomPad = self.vDomRowHeight * (self.displayRowsCount - self.vDomBottom - 1);

				self.vDomScrollHeight = topPadHeight + rowsHeight + self.vDomBottomPad - self.height;
			} else {

				self.vDomTopPad = !forceMove ? self.scrollTop - topPadHeight : self.vDomRowHeight * this.vDomTop + offset;

				self.vDomBottomPad = self.vDomBottom == self.displayRowsCount - 1 ? 0 : Math.max(self.vDomScrollHeight - self.vDomTopPad - rowsHeight - topPadHeight, 0);
			}

			element.style.paddingTop = self.vDomTopPad + "px";

			element.style.paddingBottom = self.vDomBottomPad + "px";

			if (forceMove) {

				this.scrollTop = self.vDomTopPad + topPadHeight + offset - (this.element.scrollWidth > this.element.clientWidth ? this.element.offsetHeight - this.element.clientHeight : 0);
			}

			this.scrollTop = Math.min(this.scrollTop, this.element.scrollHeight - this.height);

			//adjust for horizontal scrollbar if present (and not at top of table)

			if (this.element.scrollWidth > this.element.offsetWidth && forceMove) {

				this.scrollTop += this.element.offsetHeight - this.element.clientHeight;
			}

			this.vDomScrollPosTop = this.scrollTop;

			this.vDomScrollPosBottom = this.scrollTop;

			holder.scrollTop = this.scrollTop;

			element.style.minWidth = onlyGroupHeaders ? self.table.columnManager.getWidth() + "px" : "";

			if (self.table.options.groupBy) {

				if (self.table.modules.layout.getMode() != "fitDataFill" && self.displayRowsCount == self.table.modules.groupRows.countGroups()) {

					self.tableElement.style.minWidth = self.table.columnManager.getWidth();
				}
			}
		} else {

			this.renderEmptyScroll();
		}

		if (!this.fixedHeight) {

			this.adjustTableSize();
		}
	};

	//handle vertical scrolling

	RowManager.prototype.scrollVertical = function (dir) {

		var topDiff = this.scrollTop - this.vDomScrollPosTop;

		var bottomDiff = this.scrollTop - this.vDomScrollPosBottom;

		var margin = this.vDomWindowBuffer * 2;

		if (-topDiff > margin || bottomDiff > margin) {

			//if big scroll redraw table;

			var left = this.scrollLeft;

			this._virtualRenderFill(Math.floor(this.element.scrollTop / this.element.scrollHeight * this.displayRowsCount));

			this.scrollHorizontal(left);
		} else {

			if (dir) {

				//scrolling up

				if (topDiff < 0) {

					this._addTopRow(-topDiff);
				}

				if (bottomDiff < 0) {

					//hide bottom row if needed

					if (this.vDomScrollHeight - this.scrollTop > this.vDomWindowBuffer) {

						this._removeBottomRow(-bottomDiff);
					}
				}
			} else {

				//scrolling down

				if (topDiff >= 0) {

					//hide top row if needed

					if (this.scrollTop > this.vDomWindowBuffer) {

						this._removeTopRow(topDiff);
					}
				}

				if (bottomDiff >= 0) {

					this._addBottomRow(bottomDiff);
				}
			}
		}
	};

	RowManager.prototype._addTopRow = function (topDiff) {
		var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


		var table = this.tableElement,
		    rows = this.getDisplayRows();

		if (this.vDomTop) {

			var index = this.vDomTop - 1,
			    topRow = rows[index],
			    topRowHeight = topRow.getHeight() || this.vDomRowHeight;

			//hide top row if needed

			if (topDiff >= topRowHeight) {

				this.styleRow(topRow, index);

				table.insertBefore(topRow.getElement(), table.firstChild);

				if (!topRow.initialized || !topRow.heightInitialized) {

					this.vDomTopNewRows.push(topRow);

					if (!topRow.heightInitialized) {

						topRow.clearCellHeight();
					}
				}

				topRow.initialize();

				this.vDomTopPad -= topRowHeight;

				if (this.vDomTopPad < 0) {

					this.vDomTopPad = index * this.vDomRowHeight;
				}

				if (!index) {

					this.vDomTopPad = 0;
				}

				table.style.paddingTop = this.vDomTopPad + "px";

				this.vDomScrollPosTop -= topRowHeight;

				this.vDomTop--;
			}

			topDiff = -(this.scrollTop - this.vDomScrollPosTop);

			if (topRow.getHeight() > this.vDomWindowBuffer) {

				this.vDomWindowBuffer = topRow.getHeight() * 2;
			}

			if (i < this.vDomMaxRenderChain && this.vDomTop && topDiff >= (rows[this.vDomTop - 1].getHeight() || this.vDomRowHeight)) {

				this._addTopRow(topDiff, i + 1);
			} else {

				this._quickNormalizeRowHeight(this.vDomTopNewRows);
			}
		}
	};

	RowManager.prototype._removeTopRow = function (topDiff) {

		var table = this.tableElement,
		    topRow = this.getDisplayRows()[this.vDomTop],
		    topRowHeight = topRow.getHeight() || this.vDomRowHeight;

		if (topDiff >= topRowHeight) {

			var rowEl = topRow.getElement();

			rowEl.parentNode.removeChild(rowEl);

			this.vDomTopPad += topRowHeight;

			table.style.paddingTop = this.vDomTopPad + "px";

			this.vDomScrollPosTop += this.vDomTop ? topRowHeight : topRowHeight + this.vDomWindowBuffer;

			this.vDomTop++;

			topDiff = this.scrollTop - this.vDomScrollPosTop;

			this._removeTopRow(topDiff);
		}
	};

	RowManager.prototype._addBottomRow = function (bottomDiff) {
		var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


		var table = this.tableElement,
		    rows = this.getDisplayRows();

		if (this.vDomBottom < this.displayRowsCount - 1) {

			var index = this.vDomBottom + 1,
			    bottomRow = rows[index],
			    bottomRowHeight = bottomRow.getHeight() || this.vDomRowHeight;

			//hide bottom row if needed

			if (bottomDiff >= bottomRowHeight) {

				this.styleRow(bottomRow, index);

				table.appendChild(bottomRow.getElement());

				if (!bottomRow.initialized || !bottomRow.heightInitialized) {

					this.vDomBottomNewRows.push(bottomRow);

					if (!bottomRow.heightInitialized) {

						bottomRow.clearCellHeight();
					}
				}

				bottomRow.initialize();

				this.vDomBottomPad -= bottomRowHeight;

				if (this.vDomBottomPad < 0 || index == this.displayRowsCount - 1) {

					this.vDomBottomPad = 0;
				}

				table.style.paddingBottom = this.vDomBottomPad + "px";

				this.vDomScrollPosBottom += bottomRowHeight;

				this.vDomBottom++;
			}

			bottomDiff = this.scrollTop - this.vDomScrollPosBottom;

			if (bottomRow.getHeight() > this.vDomWindowBuffer) {

				this.vDomWindowBuffer = bottomRow.getHeight() * 2;
			}

			if (i < this.vDomMaxRenderChain && this.vDomBottom < this.displayRowsCount - 1 && bottomDiff >= (rows[this.vDomBottom + 1].getHeight() || this.vDomRowHeight)) {

				this._addBottomRow(bottomDiff, i + 1);
			} else {

				this._quickNormalizeRowHeight(this.vDomBottomNewRows);
			}
		}
	};

	RowManager.prototype._removeBottomRow = function (bottomDiff) {

		var table = this.tableElement,
		    bottomRow = this.getDisplayRows()[this.vDomBottom],
		    bottomRowHeight = bottomRow.getHeight() || this.vDomRowHeight;

		if (bottomDiff >= bottomRowHeight) {

			var rowEl = bottomRow.getElement();

			if (rowEl.parentNode) {

				rowEl.parentNode.removeChild(rowEl);
			}

			this.vDomBottomPad += bottomRowHeight;

			if (this.vDomBottomPad < 0) {

				this.vDomBottomPad = 0;
			}

			table.style.paddingBottom = this.vDomBottomPad + "px";

			this.vDomScrollPosBottom -= bottomRowHeight;

			this.vDomBottom--;

			bottomDiff = -(this.scrollTop - this.vDomScrollPosBottom);

			this._removeBottomRow(bottomDiff);
		}
	};

	RowManager.prototype._quickNormalizeRowHeight = function (rows) {

		rows.forEach(function (row) {

			row.calcHeight();
		});

		rows.forEach(function (row) {

			row.setCellHeight();
		});

		rows.length = 0;
	};

	//normalize height of active rows

	RowManager.prototype.normalizeHeight = function () {

		this.activeRows.forEach(function (row) {

			row.normalizeHeight();
		});
	};

	//adjust the height of the table holder to fit in the Tabulator element

	RowManager.prototype.adjustTableSize = function () {

		var initialHeight = this.element.clientHeight,
		    modExists;

		if (this.renderMode === "virtual") {

			var otherHeight = this.columnManager.getElement().offsetHeight + (this.table.footerManager && !this.table.footerManager.external ? this.table.footerManager.getElement().offsetHeight : 0);

			if (this.fixedHeight) {

				this.element.style.minHeight = "calc(100% - " + otherHeight + "px)";

				this.element.style.height = "calc(100% - " + otherHeight + "px)";

				this.element.style.maxHeight = "calc(100% - " + otherHeight + "px)";
			} else {

				this.element.style.height = "";

				this.element.style.height = this.table.element.clientHeight - otherHeight + "px";

				this.element.scrollTop = this.scrollTop;
			}

			this.height = this.element.clientHeight;

			this.vDomWindowBuffer = this.table.options.virtualDomBuffer || this.height;

			//check if the table has changed size when dealing with variable height tables

			if (!this.fixedHeight && initialHeight != this.element.clientHeight) {

				modExists = this.table.modExists("resizeTable");

				if (modExists && !this.table.modules.resizeTable.autoResize || !modExists) {

					this.redraw();
				}
			}
		}
	};

	//renitialize all rows

	RowManager.prototype.reinitialize = function () {

		this.rows.forEach(function (row) {

			row.reinitialize();
		});
	};

	//prevent table from being redrawn

	RowManager.prototype.blockRedraw = function () {

		this.redrawBlock = true;

		this.redrawBlockRestoreConfig = false;
	};

	//restore table redrawing

	RowManager.prototype.restoreRedraw = function () {

		this.redrawBlock = false;

		if (this.redrawBlockRestoreConfig) {

			this.refreshActiveData(this.redrawBlockRestoreConfig.stage, this.redrawBlockRestoreConfig.skipStage, this.redrawBlockRestoreConfig.renderInPosition);

			this.redrawBlockRestoreConfig = false;
		} else {

			if (this.redrawBlockRederInPosition) {

				this.reRenderInPosition();
			}
		}

		this.redrawBlockRederInPosition = false;
	};

	//redraw table

	RowManager.prototype.redraw = function (force) {

		var pos = 0,
		    left = this.scrollLeft;

		this.adjustTableSize();

		this.table.tableWidth = this.table.element.clientWidth;

		if (!force) {

			if (this.renderMode == "classic") {

				if (this.table.options.groupBy) {

					this.refreshActiveData("group", false, false);
				} else {

					this._simpleRender();
				}
			} else {

				this.reRenderInPosition();

				this.scrollHorizontal(left);
			}

			if (!this.displayRowsCount) {

				if (this.table.options.placeholder) {

					this.getElement().appendChild(this.table.options.placeholder);
				}
			}
		} else {

			this.renderTable();
		}
	};

	RowManager.prototype.resetScroll = function () {

		this.element.scrollLeft = 0;

		this.element.scrollTop = 0;

		if (this.table.browser === "ie") {

			var event = document.createEvent("Event");

			event.initEvent("scroll", false, true);

			this.element.dispatchEvent(event);
		} else {

			this.element.dispatchEvent(new Event('scroll'));
		}
	};

	//public row object

	var RowComponent = function RowComponent(row) {

		this._row = row;
	};

	RowComponent.prototype.getData = function (transform) {

		return this._row.getData(transform);
	};

	RowComponent.prototype.getElement = function () {

		return this._row.getElement();
	};

	RowComponent.prototype.getCells = function () {

		var cells = [];

		this._row.getCells().forEach(function (cell) {

			cells.push(cell.getComponent());
		});

		return cells;
	};

	RowComponent.prototype.getCell = function (column) {

		var cell = this._row.getCell(column);

		return cell ? cell.getComponent() : false;
	};

	RowComponent.prototype.getIndex = function () {

		return this._row.getData("data")[this._row.table.options.index];
	};

	RowComponent.prototype.getPosition = function (active) {

		return this._row.table.rowManager.getRowPosition(this._row, active);
	};

	RowComponent.prototype.delete = function () {

		return this._row.delete();
	};

	RowComponent.prototype.scrollTo = function () {

		return this._row.table.rowManager.scrollToRow(this._row);
	};

	RowComponent.prototype.pageTo = function () {

		if (this._row.table.modExists("page", true)) {

			return this._row.table.modules.page.setPageToRow(this._row);
		}
	};

	RowComponent.prototype.move = function (to, after) {

		this._row.moveToRow(to, after);
	};

	RowComponent.prototype.update = function (data) {

		return this._row.updateData(data);
	};

	RowComponent.prototype.normalizeHeight = function () {

		this._row.normalizeHeight(true);
	};

	RowComponent.prototype.select = function () {

		this._row.table.modules.selectRow.selectRows(this._row);
	};

	RowComponent.prototype.deselect = function () {

		this._row.table.modules.selectRow.deselectRows(this._row);
	};

	RowComponent.prototype.toggleSelect = function () {

		this._row.table.modules.selectRow.toggleRow(this._row);
	};

	RowComponent.prototype.isSelected = function () {

		return this._row.table.modules.selectRow.isRowSelected(this._row);
	};

	RowComponent.prototype._getSelf = function () {

		return this._row;
	};

	RowComponent.prototype.freeze = function () {

		if (this._row.table.modExists("frozenRows", true)) {

			this._row.table.modules.frozenRows.freezeRow(this._row);
		}
	};

	RowComponent.prototype.unfreeze = function () {

		if (this._row.table.modExists("frozenRows", true)) {

			this._row.table.modules.frozenRows.unfreezeRow(this._row);
		}
	};

	RowComponent.prototype.treeCollapse = function () {

		if (this._row.table.modExists("dataTree", true)) {

			this._row.table.modules.dataTree.collapseRow(this._row);
		}
	};

	RowComponent.prototype.treeExpand = function () {

		if (this._row.table.modExists("dataTree", true)) {

			this._row.table.modules.dataTree.expandRow(this._row);
		}
	};

	RowComponent.prototype.treeToggle = function () {

		if (this._row.table.modExists("dataTree", true)) {

			this._row.table.modules.dataTree.toggleRow(this._row);
		}
	};

	RowComponent.prototype.getTreeParent = function () {

		if (this._row.table.modExists("dataTree", true)) {

			return this._row.table.modules.dataTree.getTreeParent(this._row);
		}

		return false;
	};

	RowComponent.prototype.getTreeChildren = function () {

		if (this._row.table.modExists("dataTree", true)) {

			return this._row.table.modules.dataTree.getTreeChildren(this._row);
		}

		return false;
	};

	RowComponent.prototype.reformat = function () {

		return this._row.reinitialize();
	};

	RowComponent.prototype.getGroup = function () {

		return this._row.getGroup().getComponent();
	};

	RowComponent.prototype.getTable = function () {

		return this._row.table;
	};

	RowComponent.prototype.getNextRow = function () {

		var row = this._row.nextRow();

		return row ? row.getComponent() : row;
	};

	RowComponent.prototype.getPrevRow = function () {

		var row = this._row.prevRow();

		return row ? row.getComponent() : row;
	};

	var Row = function Row(data, parent) {
		var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "row";


		this.table = parent.table;

		this.parent = parent;

		this.data = {};

		this.type = type; //type of element

		this.element = this.createElement();

		this.modules = {}; //hold module variables;

		this.cells = [];

		this.height = 0; //hold element height

		this.heightStyled = ""; //hold element height prestyled to improve render efficiency

		this.manualHeight = false; //user has manually set row height

		this.outerHeight = 0; //holde lements outer height

		this.initialized = false; //element has been rendered

		this.heightInitialized = false; //element has resized cells to fit


		this.setData(data);

		this.generateElement();
	};

	Row.prototype.createElement = function () {

		var el = document.createElement("div");

		el.classList.add("tabulator-row");

		el.setAttribute("role", "row");

		return el;
	};

	Row.prototype.getElement = function () {

		return this.element;
	};

	Row.prototype.detachElement = function () {

		if (this.element && this.element.parentNode) {

			this.element.parentNode.removeChild(this.element);
		}
	};

	Row.prototype.generateElement = function () {

		var self = this,
		    dblTap,
		    tapHold,
		    tap;

		//set row selection characteristics

		if (self.table.options.selectable !== false && self.table.modExists("selectRow")) {

			self.table.modules.selectRow.initializeRow(this);
		}

		//setup movable rows

		if (self.table.options.movableRows !== false && self.table.modExists("moveRow")) {

			self.table.modules.moveRow.initializeRow(this);
		}

		//setup data tree

		if (self.table.options.dataTree !== false && self.table.modExists("dataTree")) {

			self.table.modules.dataTree.initializeRow(this);
		}

		//setup column colapse container

		if (self.table.options.responsiveLayout === "collapse" && self.table.modExists("responsiveLayout")) {

			self.table.modules.responsiveLayout.initializeRow(this);
		}

		//set column menu

		if (self.table.options.rowContextMenu && this.table.modExists("menu")) {

			self.table.modules.menu.initializeRow(this);
		}

		//handle row click events

		if (self.table.options.rowClick) {

			self.element.addEventListener("click", function (e) {

				self.table.options.rowClick(e, self.getComponent());
			});
		}

		if (self.table.options.rowDblClick) {

			self.element.addEventListener("dblclick", function (e) {

				self.table.options.rowDblClick(e, self.getComponent());
			});
		}

		if (self.table.options.rowContext) {

			self.element.addEventListener("contextmenu", function (e) {

				self.table.options.rowContext(e, self.getComponent());
			});
		}

		//handle mouse events

		if (self.table.options.rowMouseEnter) {

			self.element.addEventListener("mouseenter", function (e) {

				self.table.options.rowMouseEnter(e, self.getComponent());
			});
		}

		if (self.table.options.rowMouseLeave) {

			self.element.addEventListener("mouseleave", function (e) {

				self.table.options.rowMouseLeave(e, self.getComponent());
			});
		}

		if (self.table.options.rowMouseOver) {

			self.element.addEventListener("mouseover", function (e) {

				self.table.options.rowMouseOver(e, self.getComponent());
			});
		}

		if (self.table.options.rowMouseOut) {

			self.element.addEventListener("mouseout", function (e) {

				self.table.options.rowMouseOut(e, self.getComponent());
			});
		}

		if (self.table.options.rowMouseMove) {

			self.element.addEventListener("mousemove", function (e) {

				self.table.options.rowMouseMove(e, self.getComponent());
			});
		}

		if (self.table.options.rowTap) {

			tap = false;

			self.element.addEventListener("touchstart", function (e) {

				tap = true;
			}, { passive: true });

			self.element.addEventListener("touchend", function (e) {

				if (tap) {

					self.table.options.rowTap(e, self.getComponent());
				}

				tap = false;
			});
		}

		if (self.table.options.rowDblTap) {

			dblTap = null;

			self.element.addEventListener("touchend", function (e) {

				if (dblTap) {

					clearTimeout(dblTap);

					dblTap = null;

					self.table.options.rowDblTap(e, self.getComponent());
				} else {

					dblTap = setTimeout(function () {

						clearTimeout(dblTap);

						dblTap = null;
					}, 300);
				}
			});
		}

		if (self.table.options.rowTapHold) {

			tapHold = null;

			self.element.addEventListener("touchstart", function (e) {

				clearTimeout(tapHold);

				tapHold = setTimeout(function () {

					clearTimeout(tapHold);

					tapHold = null;

					tap = false;

					self.table.options.rowTapHold(e, self.getComponent());
				}, 1000);
			}, { passive: true });

			self.element.addEventListener("touchend", function (e) {

				clearTimeout(tapHold);

				tapHold = null;
			});
		}
	};

	Row.prototype.generateCells = function () {

		this.cells = this.table.columnManager.generateCells(this);
	};

	//functions to setup on first render

	Row.prototype.initialize = function (force) {

		var self = this;

		if (!self.initialized || force) {

			self.deleteCells();

			while (self.element.firstChild) {
				self.element.removeChild(self.element.firstChild);
			} //handle frozen cells

			if (this.table.modExists("frozenColumns")) {

				this.table.modules.frozenColumns.layoutRow(this);
			}

			this.generateCells();

			self.cells.forEach(function (cell) {

				self.element.appendChild(cell.getElement());

				cell.cellRendered();
			});

			if (force) {

				self.normalizeHeight();
			}

			//setup movable rows

			if (self.table.options.dataTree && self.table.modExists("dataTree")) {

				self.table.modules.dataTree.layoutRow(this);
			}

			//setup column colapse container

			if (self.table.options.responsiveLayout === "collapse" && self.table.modExists("responsiveLayout")) {

				self.table.modules.responsiveLayout.layoutRow(this);
			}

			if (self.table.options.rowFormatter) {

				self.table.options.rowFormatter(self.getComponent());
			}

			//set resizable handles

			if (self.table.options.resizableRows && self.table.modExists("resizeRows")) {

				self.table.modules.resizeRows.initializeRow(self);
			}

			self.initialized = true;
		}
	};

	Row.prototype.reinitializeHeight = function () {

		this.heightInitialized = false;

		if (this.element.offsetParent !== null) {

			this.normalizeHeight(true);
		}
	};

	Row.prototype.reinitialize = function () {

		this.initialized = false;

		this.heightInitialized = false;

		if (!this.manualHeight) {

			this.height = 0;

			this.heightStyled = "";
		}

		if (this.element.offsetParent !== null) {

			this.initialize(true);
		}
	};

	//get heights when doing bulk row style calcs in virtual DOM

	Row.prototype.calcHeight = function (force) {

		var maxHeight = 0,
		    minHeight = this.table.options.resizableRows ? this.element.clientHeight : 0;

		this.cells.forEach(function (cell) {

			var height = cell.getHeight();

			if (height > maxHeight) {

				maxHeight = height;
			}
		});

		if (force) {

			this.height = Math.max(maxHeight, minHeight);
		} else {

			this.height = this.manualHeight ? this.height : Math.max(maxHeight, minHeight);
		}

		this.heightStyled = this.height ? this.height + "px" : "";

		this.outerHeight = this.element.offsetHeight;
	};

	//set of cells

	Row.prototype.setCellHeight = function () {

		this.cells.forEach(function (cell) {

			cell.setHeight();
		});

		this.heightInitialized = true;
	};

	Row.prototype.clearCellHeight = function () {

		this.cells.forEach(function (cell) {

			cell.clearHeight();
		});
	};

	//normalize the height of elements in the row

	Row.prototype.normalizeHeight = function (force) {

		if (force) {

			this.clearCellHeight();
		}

		this.calcHeight(force);

		this.setCellHeight();
	};

	// Row.prototype.setHeight = function(height){

	// 	this.height = height;


	// 	this.setCellHeight();

	// };


	//set height of rows

	Row.prototype.setHeight = function (height, force) {

		if (this.height != height || force) {

			this.manualHeight = true;

			this.height = height;

			this.heightStyled = height ? height + "px" : "";

			this.setCellHeight();

			// this.outerHeight = this.element.outerHeight();

			this.outerHeight = this.element.offsetHeight;
		}
	};

	//return rows outer height

	Row.prototype.getHeight = function () {

		return this.outerHeight;
	};

	//return rows outer Width

	Row.prototype.getWidth = function () {

		return this.element.offsetWidth;
	};

	//////////////// Cell Management /////////////////


	Row.prototype.deleteCell = function (cell) {

		var index = this.cells.indexOf(cell);

		if (index > -1) {

			this.cells.splice(index, 1);
		}
	};

	//////////////// Data Management /////////////////


	Row.prototype.setData = function (data) {

		if (this.table.modExists("mutator")) {

			data = this.table.modules.mutator.transformRow(data, "data");
		}

		this.data = data;

		if (this.table.options.reactiveData && this.table.modExists("reactiveData", true)) {

			this.table.modules.reactiveData.watchRow(this);
		}
	};

	//update the rows data

	Row.prototype.updateData = function (updatedData) {
		var _this14 = this;

		var visible = Tabulator.prototype.helpers.elVisible(this.element),
		    tempData = {},
		    newRowData;

		return new Promise(function (resolve, reject) {

			if (typeof updatedData === "string") {

				updatedData = JSON.parse(updatedData);
			}

			if (_this14.table.options.reactiveData && _this14.table.modExists("reactiveData", true)) {

				_this14.table.modules.reactiveData.block();
			}

			//mutate incomming data if needed

			if (_this14.table.modExists("mutator")) {

				tempData = Object.assign(tempData, _this14.data);

				tempData = Object.assign(tempData, updatedData);

				newRowData = _this14.table.modules.mutator.transformRow(tempData, "data", updatedData);
			} else {

				newRowData = updatedData;
			}

			//set data

			for (var attrname in newRowData) {

				_this14.data[attrname] = newRowData[attrname];
			}

			if (_this14.table.options.reactiveData && _this14.table.modExists("reactiveData", true)) {

				_this14.table.modules.reactiveData.unblock();
			}

			//update affected cells only

			for (var attrname in updatedData) {

				var columns = _this14.table.columnManager.getColumnsByFieldRoot(attrname);

				columns.forEach(function (column) {

					var cell = _this14.getCell(column.getField());

					if (cell) {

						var value = column.getFieldValue(newRowData);

						if (cell.getValue() != value) {

							cell.setValueProcessData(value);

							if (visible) {

								cell.cellRendered();
							}
						}
					}
				});
			}

			//Partial reinitialization if visible

			if (visible) {

				_this14.normalizeHeight();

				if (_this14.table.options.rowFormatter) {

					_this14.table.options.rowFormatter(_this14.getComponent());
				}
			} else {

				_this14.initialized = false;

				_this14.height = 0;

				_this14.heightStyled = "";
			}

			if (_this14.table.options.dataTree !== false && _this14.table.modExists("dataTree") && _this14.table.modules.dataTree.redrawNeeded(updatedData)) {

				_this14.table.modules.dataTree.initializeRow(_this14);

				_this14.table.modules.dataTree.layoutRow(_this14);

				_this14.table.rowManager.refreshActiveData("tree", false, true);
			}

			//this.reinitialize();


			_this14.table.options.rowUpdated.call(_this14.table, _this14.getComponent());

			resolve();
		});
	};

	Row.prototype.getData = function (transform) {

		var self = this;

		if (transform) {

			if (self.table.modExists("accessor")) {

				return self.table.modules.accessor.transformRow(self.data, transform);
			}
		} else {

			return this.data;
		}
	};

	Row.prototype.getCell = function (column) {

		var match = false;

		column = this.table.columnManager.findColumn(column);

		match = this.cells.find(function (cell) {

			return cell.column === column;
		});

		return match;
	};

	Row.prototype.getCellIndex = function (findCell) {

		return this.cells.findIndex(function (cell) {

			return cell === findCell;
		});
	};

	Row.prototype.findNextEditableCell = function (index) {

		var nextCell = false;

		if (index < this.cells.length - 1) {

			for (var i = index + 1; i < this.cells.length; i++) {

				var cell = this.cells[i];

				if (cell.column.modules.edit && Tabulator.prototype.helpers.elVisible(cell.getElement())) {

					var allowEdit = true;

					if (typeof cell.column.modules.edit.check == "function") {

						allowEdit = cell.column.modules.edit.check(cell.getComponent());
					}

					if (allowEdit) {

						nextCell = cell;

						break;
					}
				}
			}
		}

		return nextCell;
	};

	Row.prototype.findPrevEditableCell = function (index) {

		var prevCell = false;

		if (index > 0) {

			for (var i = index - 1; i >= 0; i--) {

				var cell = this.cells[i],
				    allowEdit = true;

				if (cell.column.modules.edit && Tabulator.prototype.helpers.elVisible(cell.getElement())) {

					if (typeof cell.column.modules.edit.check == "function") {

						allowEdit = cell.column.modules.edit.check(cell.getComponent());
					}

					if (allowEdit) {

						prevCell = cell;

						break;
					}
				}
			}
		}

		return prevCell;
	};

	Row.prototype.getCells = function () {

		return this.cells;
	};

	Row.prototype.nextRow = function () {

		var row = this.table.rowManager.nextDisplayRow(this, true);

		return row || false;
	};

	Row.prototype.prevRow = function () {

		var row = this.table.rowManager.prevDisplayRow(this, true);

		return row || false;
	};

	Row.prototype.moveToRow = function (to, before) {

		var toRow = this.table.rowManager.findRow(to);

		if (toRow) {

			this.table.rowManager.moveRowActual(this, toRow, !before);

			this.table.rowManager.refreshActiveData("display", false, true);
		} else {

			console.warn("Move Error - No matching row found:", to);
		}
	};

	///////////////////// Actions  /////////////////////


	Row.prototype.delete = function () {
		var _this15 = this;

		return new Promise(function (resolve, reject) {

			var index, rows;

			if (_this15.table.options.history && _this15.table.modExists("history")) {

				if (_this15.table.options.groupBy && _this15.table.modExists("groupRows")) {

					rows = _this15.getGroup().rows;

					index = rows.indexOf(_this15);

					if (index) {

						index = rows[index - 1];
					}
				} else {

					index = _this15.table.rowManager.getRowIndex(_this15);

					if (index) {

						index = _this15.table.rowManager.rows[index - 1];
					}
				}

				_this15.table.modules.history.action("rowDelete", _this15, { data: _this15.getData(), pos: !index, index: index });
			}

			_this15.deleteActual();

			resolve();
		});
	};

	Row.prototype.deleteActual = function (blockRedraw) {

		var index = this.table.rowManager.getRowIndex(this);

		//deselect row if it is selected

		if (this.table.modExists("selectRow")) {

			this.table.modules.selectRow._deselectRow(this, true);
		}

		// if(this.table.options.dataTree && this.table.modExists("dataTree")){

		// 	this.table.modules.dataTree.collapseRow(this, true);

		// }


		//remove any reactive data watchers from row object

		if (this.table.options.reactiveData && this.table.modExists("reactiveData", true)) {}

		// this.table.modules.reactiveData.unwatchRow(this);

		//remove from group

		if (this.modules.group) {

			this.modules.group.removeRow(this);
		}

		this.table.rowManager.deleteRow(this, blockRedraw);

		this.deleteCells();

		this.initialized = false;

		this.heightInitialized = false;

		//recalc column calculations if present

		if (this.table.modExists("columnCalcs")) {

			if (this.table.options.groupBy && this.table.modExists("groupRows")) {

				this.table.modules.columnCalcs.recalcRowGroup(this);
			} else {

				this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows);
			}
		}
	};

	Row.prototype.deleteCells = function () {

		var cellCount = this.cells.length;

		for (var i = 0; i < cellCount; i++) {

			this.cells[0].delete();
		}
	};

	Row.prototype.wipe = function () {

		this.deleteCells();

		while (this.element.firstChild) {
			this.element.removeChild(this.element.firstChild);
		}this.element = false;

		this.modules = {};

		if (this.element.parentNode) {

			this.element.parentNode.removeChild(this.element);
		}
	};

	Row.prototype.getGroup = function () {

		return this.modules.group || false;
	};

	//////////////// Object Generation /////////////////

	Row.prototype.getComponent = function () {

		return new RowComponent(this);
	};

	//public row object

	var CellComponent = function CellComponent(cell) {

		this._cell = cell;
	};

	CellComponent.prototype.getValue = function () {

		return this._cell.getValue();
	};

	CellComponent.prototype.getOldValue = function () {

		return this._cell.getOldValue();
	};

	CellComponent.prototype.getElement = function () {

		return this._cell.getElement();
	};

	CellComponent.prototype.getRow = function () {

		return this._cell.row.getComponent();
	};

	CellComponent.prototype.getData = function () {

		return this._cell.row.getData();
	};

	CellComponent.prototype.getField = function () {

		return this._cell.column.getField();
	};

	CellComponent.prototype.getColumn = function () {

		return this._cell.column.getComponent();
	};

	CellComponent.prototype.setValue = function (value, mutate) {

		if (typeof mutate == "undefined") {

			mutate = true;
		}

		this._cell.setValue(value, mutate);
	};

	CellComponent.prototype.restoreOldValue = function () {

		this._cell.setValueActual(this._cell.getOldValue());
	};

	CellComponent.prototype.edit = function (force) {

		return this._cell.edit(force);
	};

	CellComponent.prototype.cancelEdit = function () {

		this._cell.cancelEdit();
	};

	CellComponent.prototype.nav = function () {

		return this._cell.nav();
	};

	CellComponent.prototype.checkHeight = function () {

		this._cell.checkHeight();
	};

	CellComponent.prototype.getTable = function () {

		return this._cell.table;
	};

	CellComponent.prototype._getSelf = function () {

		return this._cell;
	};

	var Cell = function Cell(column, row) {

		this.table = column.table;

		this.column = column;

		this.row = row;

		this.element = null;

		this.value = null;

		this.oldValue = null;

		this.modules = {};

		this.height = null;

		this.width = null;

		this.minWidth = null;

		this.build();
	};

	//////////////// Setup Functions /////////////////


	//generate element

	Cell.prototype.build = function () {

		this.generateElement();

		this.setWidth();

		this._configureCell();

		this.setValueActual(this.column.getFieldValue(this.row.data));
	};

	Cell.prototype.generateElement = function () {

		this.element = document.createElement('div');

		this.element.className = "tabulator-cell";

		this.element.setAttribute("role", "gridcell");

		this.element = this.element;
	};

	Cell.prototype._configureCell = function () {

		var self = this,
		    cellEvents = self.column.cellEvents,
		    element = self.element,
		    field = this.column.getField(),
		    vertAligns = {

			top: "flex-start",

			bottom: "flex-end",

			middle: "center"

		},
		    hozAligns = {

			left: "flex-start",

			right: "flex-end",

			center: "center"

		};

		//set text alignment

		element.style.textAlign = self.column.hozAlign;

		if (self.column.vertAlign) {

			element.style.display = "inline-flex";

			element.style.alignItems = vertAligns[self.column.vertAlign] || "";

			if (self.column.hozAlign) {

				element.style.justifyContent = hozAligns[self.column.hozAlign] || "";
			}
		}

		if (field) {

			element.setAttribute("tabulator-field", field);
		}

		//add class to cell if needed

		if (self.column.definition.cssClass) {

			var classNames = self.column.definition.cssClass.split(" ");

			classNames.forEach(function (className) {

				element.classList.add(className);
			});
		}

		//update tooltip on mouse enter

		if (this.table.options.tooltipGenerationMode === "hover") {

			element.addEventListener("mouseenter", function (e) {

				self._generateTooltip();
			});
		}

		self._bindClickEvents(cellEvents);

		self._bindTouchEvents(cellEvents);

		self._bindMouseEvents(cellEvents);

		if (self.column.modules.edit) {

			self.table.modules.edit.bindEditor(self);
		}

		if (self.column.definition.rowHandle && self.table.options.movableRows !== false && self.table.modExists("moveRow")) {

			self.table.modules.moveRow.initializeCell(self);
		}

		//hide cell if not visible

		if (!self.column.visible) {

			self.hide();
		}
	};

	Cell.prototype._bindClickEvents = function (cellEvents) {

		var self = this,
		    element = self.element;

		//set event bindings

		if (cellEvents.cellClick || self.table.options.cellClick) {

			element.addEventListener("click", function (e) {

				var component = self.getComponent();

				if (cellEvents.cellClick) {

					cellEvents.cellClick.call(self.table, e, component);
				}

				if (self.table.options.cellClick) {

					self.table.options.cellClick.call(self.table, e, component);
				}
			});
		}

		if (cellEvents.cellDblClick || this.table.options.cellDblClick) {

			element.addEventListener("dblclick", function (e) {

				var component = self.getComponent();

				if (cellEvents.cellDblClick) {

					cellEvents.cellDblClick.call(self.table, e, component);
				}

				if (self.table.options.cellDblClick) {

					self.table.options.cellDblClick.call(self.table, e, component);
				}
			});
		} else {

			// element.addEventListener("dblclick", function(e){

			// e.preventDefault();

			// try{

			// 	if (document.selection) { // IE

			// 		var range = document.body.createTextRange();

			// 		range.moveToElementText(self.element);

			// 		range.select();

			// 	} else if (window.getSelection) {

			// 		var range = document.createRange();

			// 		range.selectNode(self.element);

			// 		window.getSelection().removeAllRanges();

			// 		window.getSelection().addRange(range);

			// 	}

			// }catch(e){}

			// });

		}

		if (cellEvents.cellContext || this.table.options.cellContext) {

			element.addEventListener("contextmenu", function (e) {

				var component = self.getComponent();

				if (cellEvents.cellContext) {

					cellEvents.cellContext.call(self.table, e, component);
				}

				if (self.table.options.cellContext) {

					self.table.options.cellContext.call(self.table, e, component);
				}
			});
		}
	};

	Cell.prototype._bindMouseEvents = function (cellEvents) {

		var self = this,
		    element = self.element;

		if (cellEvents.cellMouseEnter || self.table.options.cellMouseEnter) {

			element.addEventListener("mouseenter", function (e) {

				var component = self.getComponent();

				if (cellEvents.cellMouseEnter) {

					cellEvents.cellMouseEnter.call(self.table, e, component);
				}

				if (self.table.options.cellMouseEnter) {

					self.table.options.cellMouseEnter.call(self.table, e, component);
				}
			});
		}

		if (cellEvents.cellMouseLeave || self.table.options.cellMouseLeave) {

			element.addEventListener("mouseleave", function (e) {

				var component = self.getComponent();

				if (cellEvents.cellMouseLeave) {

					cellEvents.cellMouseLeave.call(self.table, e, component);
				}

				if (self.table.options.cellMouseLeave) {

					self.table.options.cellMouseLeave.call(self.table, e, component);
				}
			});
		}

		if (cellEvents.cellMouseOver || self.table.options.cellMouseOver) {

			element.addEventListener("mouseover", function (e) {

				var component = self.getComponent();

				if (cellEvents.cellMouseOver) {

					cellEvents.cellMouseOver.call(self.table, e, component);
				}

				if (self.table.options.cellMouseOver) {

					self.table.options.cellMouseOver.call(self.table, e, component);
				}
			});
		}

		if (cellEvents.cellMouseOut || self.table.options.cellMouseOut) {

			element.addEventListener("mouseout", function (e) {

				var component = self.getComponent();

				if (cellEvents.cellMouseOut) {

					cellEvents.cellMouseOut.call(self.table, e, component);
				}

				if (self.table.options.cellMouseOut) {

					self.table.options.cellMouseOut.call(self.table, e, component);
				}
			});
		}

		if (cellEvents.cellMouseMove || self.table.options.cellMouseMove) {

			element.addEventListener("mousemove", function (e) {

				var component = self.getComponent();

				if (cellEvents.cellMouseMove) {

					cellEvents.cellMouseMove.call(self.table, e, component);
				}

				if (self.table.options.cellMouseMove) {

					self.table.options.cellMouseMove.call(self.table, e, component);
				}
			});
		}
	};

	Cell.prototype._bindTouchEvents = function (cellEvents) {

		var self = this,
		    element = self.element,
		    dblTap,
		    tapHold,
		    tap;

		if (cellEvents.cellTap || this.table.options.cellTap) {

			tap = false;

			element.addEventListener("touchstart", function (e) {

				tap = true;
			}, { passive: true });

			element.addEventListener("touchend", function (e) {

				if (tap) {

					var component = self.getComponent();

					if (cellEvents.cellTap) {

						cellEvents.cellTap.call(self.table, e, component);
					}

					if (self.table.options.cellTap) {

						self.table.options.cellTap.call(self.table, e, component);
					}
				}

				tap = false;
			});
		}

		if (cellEvents.cellDblTap || this.table.options.cellDblTap) {

			dblTap = null;

			element.addEventListener("touchend", function (e) {

				if (dblTap) {

					clearTimeout(dblTap);

					dblTap = null;

					var component = self.getComponent();

					if (cellEvents.cellDblTap) {

						cellEvents.cellDblTap.call(self.table, e, component);
					}

					if (self.table.options.cellDblTap) {

						self.table.options.cellDblTap.call(self.table, e, component);
					}
				} else {

					dblTap = setTimeout(function () {

						clearTimeout(dblTap);

						dblTap = null;
					}, 300);
				}
			});
		}

		if (cellEvents.cellTapHold || this.table.options.cellTapHold) {

			tapHold = null;

			element.addEventListener("touchstart", function (e) {

				clearTimeout(tapHold);

				tapHold = setTimeout(function () {

					clearTimeout(tapHold);

					tapHold = null;

					tap = false;

					var component = self.getComponent();

					if (cellEvents.cellTapHold) {

						cellEvents.cellTapHold.call(self.table, e, component);
					}

					if (self.table.options.cellTapHold) {

						self.table.options.cellTapHold.call(self.table, e, component);
					}
				}, 1000);
			}, { passive: true });

			element.addEventListener("touchend", function (e) {

				clearTimeout(tapHold);

				tapHold = null;
			});
		}
	};

	//generate cell contents

	Cell.prototype._generateContents = function () {

		var val;

		if (this.table.modExists("format")) {

			val = this.table.modules.format.formatValue(this);
		} else {

			val = this.element.innerHTML = this.value;
		}

		switch (typeof val === 'undefined' ? 'undefined' : _typeof(val)) {

			case "object":

				if (val instanceof Node) {

					//clear previous cell contents

					while (this.element.firstChild) {
						this.element.removeChild(this.element.firstChild);
					}this.element.appendChild(val);
				} else {

					this.element.innerHTML = "";

					if (val != null) {

						console.warn("Format Error - Formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:", val);
					}
				}

				break;

			case "undefined":

			case "null":

				this.element.innerHTML = "";

				break;

			default:

				this.element.innerHTML = val;

		}
	};

	Cell.prototype.cellRendered = function () {

		if (this.table.modExists("format") && this.table.modules.format.cellRendered) {

			this.table.modules.format.cellRendered(this);
		}
	};

	//generate tooltip text

	Cell.prototype._generateTooltip = function () {

		var tooltip = this.column.tooltip;

		if (tooltip) {

			if (tooltip === true) {

				tooltip = this.value;
			} else if (typeof tooltip == "function") {

				tooltip = tooltip(this.getComponent());

				if (tooltip === false) {

					tooltip = "";
				}
			}

			if (typeof tooltip === "undefined") {

				tooltip = "";
			}

			this.element.setAttribute("title", tooltip);
		} else {

			this.element.setAttribute("title", "");
		}
	};

	//////////////////// Getters ////////////////////

	Cell.prototype.getElement = function () {

		return this.element;
	};

	Cell.prototype.getValue = function () {

		return this.value;
	};

	Cell.prototype.getOldValue = function () {

		return this.oldValue;
	};

	//////////////////// Actions ////////////////////


	Cell.prototype.setValue = function (value, mutate) {

		var changed = this.setValueProcessData(value, mutate),
		    component;

		if (changed) {

			if (this.table.options.history && this.table.modExists("history")) {

				this.table.modules.history.action("cellEdit", this, { oldValue: this.oldValue, newValue: this.value });
			}

			component = this.getComponent();

			if (this.column.cellEvents.cellEdited) {

				this.column.cellEvents.cellEdited.call(this.table, component);
			}

			this.table.options.cellEdited.call(this.table, component);

			this.table.options.dataEdited.call(this.table, this.table.rowManager.getData());
		}
	};

	Cell.prototype.setValueProcessData = function (value, mutate) {

		var changed = false;

		if (this.value != value) {

			changed = true;

			if (mutate) {

				if (this.column.modules.mutate) {

					value = this.table.modules.mutator.transformCell(this, value);
				}
			}
		}

		this.setValueActual(value);

		if (changed && this.table.modExists("columnCalcs")) {

			if (this.column.definition.topCalc || this.column.definition.bottomCalc) {

				if (this.table.options.groupBy && this.table.modExists("groupRows")) {

					if (this.table.options.columnCalcs == "table" || this.table.options.columnCalcs == "both") {

						this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows);
					}

					if (this.table.options.columnCalcs != "table") {

						this.table.modules.columnCalcs.recalcRowGroup(this.row);
					}
				} else {

					this.table.modules.columnCalcs.recalc(this.table.rowManager.activeRows);
				}
			}
		}

		return changed;
	};

	Cell.prototype.setValueActual = function (value) {

		this.oldValue = this.value;

		this.value = value;

		if (this.table.options.reactiveData && this.table.modExists("reactiveData")) {

			this.table.modules.reactiveData.block();
		}

		this.column.setFieldValue(this.row.data, value);

		if (this.table.options.reactiveData && this.table.modExists("reactiveData")) {

			this.table.modules.reactiveData.unblock();
		}

		this._generateContents();

		this._generateTooltip();

		//set resizable handles

		if (this.table.options.resizableColumns && this.table.modExists("resizeColumns")) {

			this.table.modules.resizeColumns.initializeColumn("cell", this.column, this.element);
		}

		//set column menu

		if (this.column.definition.contextMenu && this.table.modExists("menu")) {

			this.table.modules.menu.initializeCell(this);
		}

		//handle frozen cells

		if (this.table.modExists("frozenColumns")) {

			this.table.modules.frozenColumns.layoutElement(this.element, this.column);
		}
	};

	Cell.prototype.setWidth = function () {

		this.width = this.column.width;

		this.element.style.width = this.column.widthStyled;
	};

	Cell.prototype.clearWidth = function () {

		this.width = "";

		this.element.style.width = "";
	};

	Cell.prototype.getWidth = function () {

		return this.width || this.element.offsetWidth;
	};

	Cell.prototype.setMinWidth = function () {

		this.minWidth = this.column.minWidth;

		this.element.style.minWidth = this.column.minWidthStyled;
	};

	Cell.prototype.checkHeight = function () {

		// var height = this.element.css("height");

		this.row.reinitializeHeight();
	};

	Cell.prototype.clearHeight = function () {

		this.element.style.height = "";

		this.height = null;
	};

	Cell.prototype.setHeight = function () {

		this.height = this.row.height;

		this.element.style.height = this.row.heightStyled;
	};

	Cell.prototype.getHeight = function () {

		return this.height || this.element.offsetHeight;
	};

	Cell.prototype.show = function () {

		this.element.style.display = "";
	};

	Cell.prototype.hide = function () {

		this.element.style.display = "none";
	};

	Cell.prototype.edit = function (force) {

		if (this.table.modExists("edit", true)) {

			return this.table.modules.edit.editCell(this, force);
		}
	};

	Cell.prototype.cancelEdit = function () {

		if (this.table.modExists("edit", true)) {

			var editing = this.table.modules.edit.getCurrentCell();

			if (editing && editing._getSelf() === this) {

				this.table.modules.edit.cancelEdit();
			} else {

				console.warn("Cancel Editor Error - This cell is not currently being edited ");
			}
		}
	};

	Cell.prototype.delete = function () {

		if (!this.table.rowManager.redrawBlock) {

			this.element.parentNode.removeChild(this.element);
		}

		this.element = false;

		this.column.deleteCell(this);

		this.row.deleteCell(this);

		this.calcs = {};
	};

	//////////////// Navigation /////////////////


	Cell.prototype.nav = function () {

		var self = this,
		    nextCell = false,
		    index = this.row.getCellIndex(this);

		return {

			next: function next() {

				var nextCell = this.right(),
				    nextRow;

				if (!nextCell) {

					nextRow = self.table.rowManager.nextDisplayRow(self.row, true);

					if (nextRow) {

						nextCell = nextRow.findNextEditableCell(-1);

						if (nextCell) {

							nextCell.edit();

							return true;
						}
					}
				} else {

					return true;
				}

				return false;
			},

			prev: function prev() {

				var nextCell = this.left(),
				    prevRow;

				if (!nextCell) {

					prevRow = self.table.rowManager.prevDisplayRow(self.row, true);

					if (prevRow) {

						nextCell = prevRow.findPrevEditableCell(prevRow.cells.length);

						if (nextCell) {

							nextCell.edit();

							return true;
						}
					}
				} else {

					return true;
				}

				return false;
			},

			left: function left() {

				nextCell = self.row.findPrevEditableCell(index);

				if (nextCell) {

					nextCell.edit();

					return true;
				} else {

					return false;
				}
			},

			right: function right() {

				nextCell = self.row.findNextEditableCell(index);

				if (nextCell) {

					nextCell.edit();

					return true;
				} else {

					return false;
				}
			},

			up: function up() {

				var nextRow = self.table.rowManager.prevDisplayRow(self.row, true);

				if (nextRow) {

					nextRow.cells[index].edit();
				}
			},

			down: function down() {

				var nextRow = self.table.rowManager.nextDisplayRow(self.row, true);

				if (nextRow) {

					nextRow.cells[index].edit();
				}
			}

		};
	};

	Cell.prototype.getIndex = function () {

		this.row.getCellIndex(this);
	};

	//////////////// Object Generation /////////////////

	Cell.prototype.getComponent = function () {

		return new CellComponent(this);
	};

	var FooterManager = function FooterManager(table) {

		this.table = table;

		this.active = false;

		this.element = this.createElement(); //containing element

		this.external = false;

		this.links = [];

		this._initialize();
	};

	FooterManager.prototype.createElement = function () {

		var el = document.createElement("div");

		el.classList.add("tabulator-footer");

		return el;
	};

	FooterManager.prototype._initialize = function (element) {

		if (this.table.options.footerElement) {

			switch (_typeof(this.table.options.footerElement)) {

				case "string":

					if (this.table.options.footerElement[0] === "<") {

						this.element.innerHTML = this.table.options.footerElement;
					} else {

						this.external = true;

						this.element = document.querySelector(this.table.options.footerElement);
					}

					break;

				default:

					this.element = this.table.options.footerElement;

					break;

			}
		}
	};

	FooterManager.prototype.getElement = function () {

		return this.element;
	};

	FooterManager.prototype.append = function (element, parent) {

		this.activate(parent);

		this.element.appendChild(element);

		this.table.rowManager.adjustTableSize();
	};

	FooterManager.prototype.prepend = function (element, parent) {

		this.activate(parent);

		this.element.insertBefore(element, this.element.firstChild);

		this.table.rowManager.adjustTableSize();
	};

	FooterManager.prototype.remove = function (element) {

		element.parentNode.removeChild(element);

		this.deactivate();
	};

	FooterManager.prototype.deactivate = function (force) {

		if (!this.element.firstChild || force) {

			if (!this.external) {

				this.element.parentNode.removeChild(this.element);
			}

			this.active = false;
		}

		// this.table.rowManager.adjustTableSize();
	};

	FooterManager.prototype.activate = function (parent) {

		if (!this.active) {

			this.active = true;

			if (!this.external) {

				this.table.element.appendChild(this.getElement());

				this.table.element.style.display = '';
			}
		}

		if (parent) {

			this.links.push(parent);
		}
	};

	FooterManager.prototype.redraw = function () {

		this.links.forEach(function (link) {

			link.footerRedraw();
		});
	};

	var Tabulator = function Tabulator(element, options) {

		this.options = {};

		this.columnManager = null; // hold Column Manager

		this.rowManager = null; //hold Row Manager

		this.footerManager = null; //holder Footer Manager

		this.browser = ""; //hold current browser type

		this.browserSlow = false; //handle reduced functionality for slower browsers

		this.browserMobile = false; //check if running on moble, prevent resize cancelling edit on keyboard appearence


		this.modules = {}; //hold all modules bound to this table


		this.initializeElement(element);

		this.initializeOptions(options || {});

		this._create();

		Tabulator.prototype.comms.register(this); //register table for inderdevice communication
	};

	//default setup options

	Tabulator.prototype.defaultOptions = {

		height: false, //height of tabulator

		minHeight: false, //minimum height of tabulator

		maxHeight: false, //maximum height of tabulator


		layout: "fitData", ///layout type "fitColumns" | "fitData"

		layoutColumnsOnNewData: false, //update column widths on setData


		columnMinWidth: 40, //minimum global width for a column

		columnHeaderVertAlign: "top", //vertical alignment of column headers

		columnVertAlign: false, // DEPRECATED - Left to allow warning


		resizableColumns: true, //resizable columns

		resizableRows: false, //resizable rows

		autoResize: true, //auto resize table


		columns: [], //store for colum header info


		cellHozAlign: "", //horizontal align columns

		cellVertAlign: "", //certical align columns


		data: [], //default starting data


		autoColumns: false, //build columns from data row structure


		reactiveData: false, //enable data reactivity


		nestedFieldSeparator: ".", //seperatpr for nested data


		tooltips: false, //Tool tip value

		tooltipsHeader: false, //Tool tip for headers

		tooltipGenerationMode: "load", //when to generate tooltips


		initialSort: false, //initial sorting criteria

		initialFilter: false, //initial filtering criteria

		initialHeaderFilter: false, //initial header filtering criteria


		columnHeaderSortMulti: true, //multiple or single column sorting


		sortOrderReverse: false, //reverse internal sort ordering


		headerSort: true, //set default global header sort

		headerSortTristate: false, //set default tristate header sorting


		footerElement: false, //hold footer element


		index: "id", //filed for row index


		keybindings: [], //array for keybindings


		tabEndNewRow: false, //create new row when tab to end of table


		invalidOptionWarnings: true, //allow toggling of invalid option warnings


		clipboard: false, //enable clipboard

		clipboardCopyStyled: true, //formatted table data

		clipboardCopyConfig: false, //clipboard config

		clipboardCopyFormatter: false, //DEPRICATED - REMOVE in 5.0

		clipboardCopyRowRange: "active", //restrict clipboard to visible rows only

		clipboardPasteParser: "table", //convert pasted clipboard data to rows

		clipboardPasteAction: "insert", //how to insert pasted data into the table


		clipboardCopied: function clipboardCopied() {}, //data has been copied to the clipboard

		clipboardPasted: function clipboardPasted() {}, //data has been pasted into the table

		clipboardPasteError: function clipboardPasteError() {}, //data has not successfully been pasted into the table


		downloadDataFormatter: false, //function to manipulate table data before it is downloaded

		downloadReady: function downloadReady(data, blob) {
			return blob;
		}, //function to manipulate download data

		downloadComplete: false, //function to manipulate download data

		downloadConfig: false, //download config


		dataTree: false, //enable data tree

		dataTreeElementColumn: false,

		dataTreeBranchElement: true, //show data tree branch element

		dataTreeChildIndent: 9, //data tree child indent in px

		dataTreeChildField: "_children", //data tre column field to look for child rows

		dataTreeCollapseElement: false, //data tree row collapse element

		dataTreeExpandElement: false, //data tree row expand element

		dataTreeStartExpanded: false,

		dataTreeRowExpanded: function dataTreeRowExpanded() {}, //row has been expanded

		dataTreeRowCollapsed: function dataTreeRowCollapsed() {}, //row has been collapsed

		dataTreeChildColumnCalcs: false, //include visible data tree rows in column calculations

		dataTreeSelectPropagate: false, //seleccting a parent row selects its children


		printAsHtml: false, //enable print as html

		printFormatter: false, //printing page formatter

		printHeader: false, //page header contents

		printFooter: false, //page footer contents

		printCopyStyle: true, //DEPRICATED - REMOVE in 5.0

		printStyled: true, //enable print as html styling

		printVisibleRows: true, //DEPRICATED - REMOVE in 5.0

		printRowRange: "visible", //restrict print to visible rows only

		printConfig: {}, //print config options


		addRowPos: "bottom", //position to insert blank rows, top|bottom


		selectable: "highlight", //highlight rows on hover

		selectableRangeMode: "drag", //highlight rows on hover

		selectableRollingSelection: true, //roll selection once maximum number of selectable rows is reached

		selectablePersistence: true, // maintain selection when table view is updated

		selectableCheck: function selectableCheck(data, row) {
			return true;
		}, //check wheather row is selectable


		headerFilterLiveFilterDelay: 300, //delay before updating column after user types in header filter

		headerFilterPlaceholder: false, //placeholder text to display in header filters


		headerVisible: true, //hide header


		history: false, //enable edit history


		locale: false, //current system language

		langs: {},

		virtualDom: true, //enable DOM virtualization

		virtualDomBuffer: 0, // set virtual DOM buffer size


		persistentLayout: false, //DEPRICATED - REMOVE in 5.0

		persistentSort: false, //DEPRICATED - REMOVE in 5.0

		persistentFilter: false, //DEPRICATED - REMOVE in 5.0

		persistenceID: "", //key for persistent storage

		persistenceMode: true, //mode for storing persistence information

		persistenceReaderFunc: false, //function for handling persistence data reading

		persistenceWriterFunc: false, //function for handling persistence data writing


		persistence: false,

		responsiveLayout: false, //responsive layout flags

		responsiveLayoutCollapseStartOpen: true, //start showing collapsed data

		responsiveLayoutCollapseUseFormatters: true, //responsive layout collapse formatter

		responsiveLayoutCollapseFormatter: false, //responsive layout collapse formatter


		pagination: false, //set pagination type

		paginationSize: false, //set number of rows to a page

		paginationInitialPage: 1, //initail page to show on load

		paginationButtonCount: 5, // set count of page button

		paginationSizeSelector: false, //add pagination size selector element

		paginationElement: false, //element to hold pagination numbers

		paginationDataSent: {}, //pagination data sent to the server

		paginationDataReceived: {}, //pagination data received from the server

		paginationAddRow: "page", //add rows on table or page


		ajaxURL: false, //url for ajax loading

		ajaxURLGenerator: false,

		ajaxParams: {}, //params for ajax loading

		ajaxConfig: "get", //ajax request type

		ajaxContentType: "form", //ajax request type

		ajaxRequestFunc: false, //promise function

		ajaxLoader: true, //show loader

		ajaxLoaderLoading: false, //loader element

		ajaxLoaderError: false, //loader element

		ajaxFiltering: false,

		ajaxSorting: false,

		ajaxProgressiveLoad: false, //progressive loading

		ajaxProgressiveLoadDelay: 0, //delay between requests

		ajaxProgressiveLoadScrollMargin: 0, //margin before scroll begins


		groupBy: false, //enable table grouping and set field to group by

		groupStartOpen: true, //starting state of group

		groupValues: false,

		groupHeader: false, //header generation function


		htmlOutputConfig: false, //html outypu config


		movableColumns: false, //enable movable columns


		movableRows: false, //enable movable rows

		movableRowsConnectedTables: false, //tables for movable rows to be connected to

		movableRowsSender: false,

		movableRowsReceiver: "insert",

		movableRowsSendingStart: function movableRowsSendingStart() {},

		movableRowsSent: function movableRowsSent() {},

		movableRowsSentFailed: function movableRowsSentFailed() {},

		movableRowsSendingStop: function movableRowsSendingStop() {},

		movableRowsReceivingStart: function movableRowsReceivingStart() {},

		movableRowsReceived: function movableRowsReceived() {},

		movableRowsReceivedFailed: function movableRowsReceivedFailed() {},

		movableRowsReceivingStop: function movableRowsReceivingStop() {},

		scrollToRowPosition: "top",

		scrollToRowIfVisible: true,

		scrollToColumnPosition: "left",

		scrollToColumnIfVisible: true,

		rowFormatter: false,

		rowFormatterPrint: null,

		rowFormatterClipboard: null,

		rowFormatterHtmlOutput: null,

		placeholder: false,

		//table building callbacks

		tableBuilding: function tableBuilding() {},

		tableBuilt: function tableBuilt() {},

		//render callbacks

		renderStarted: function renderStarted() {},

		renderComplete: function renderComplete() {},

		//row callbacks

		rowClick: false,

		rowDblClick: false,

		rowContext: false,

		rowTap: false,

		rowDblTap: false,

		rowTapHold: false,

		rowMouseEnter: false,

		rowMouseLeave: false,

		rowMouseOver: false,

		rowMouseOut: false,

		rowMouseMove: false,

		rowContextMenu: false,

		rowAdded: function rowAdded() {},

		rowDeleted: function rowDeleted() {},

		rowMoved: function rowMoved() {},

		rowUpdated: function rowUpdated() {},

		rowSelectionChanged: function rowSelectionChanged() {},

		rowSelected: function rowSelected() {},

		rowDeselected: function rowDeselected() {},

		rowResized: function rowResized() {},

		//cell callbacks

		//row callbacks

		cellClick: false,

		cellDblClick: false,

		cellContext: false,

		cellTap: false,

		cellDblTap: false,

		cellTapHold: false,

		cellMouseEnter: false,

		cellMouseLeave: false,

		cellMouseOver: false,

		cellMouseOut: false,

		cellMouseMove: false,

		cellEditing: function cellEditing() {},

		cellEdited: function cellEdited() {},

		cellEditCancelled: function cellEditCancelled() {},

		//column callbacks

		columnMoved: false,

		columnResized: function columnResized() {},

		columnTitleChanged: function columnTitleChanged() {},

		columnVisibilityChanged: function columnVisibilityChanged() {},

		//HTML iport callbacks

		htmlImporting: function htmlImporting() {},

		htmlImported: function htmlImported() {},

		//data callbacks

		dataLoading: function dataLoading() {},

		dataLoaded: function dataLoaded() {},

		dataEdited: function dataEdited() {},

		//ajax callbacks

		ajaxRequesting: function ajaxRequesting() {},

		ajaxResponse: false,

		ajaxError: function ajaxError() {},

		//filtering callbacks

		dataFiltering: false,

		dataFiltered: false,

		//sorting callbacks

		dataSorting: function dataSorting() {},

		dataSorted: function dataSorted() {},

		//grouping callbacks

		groupToggleElement: "arrow",

		groupClosedShowCalcs: false,

		dataGrouping: function dataGrouping() {},

		dataGrouped: false,

		groupVisibilityChanged: function groupVisibilityChanged() {},

		groupClick: false,

		groupDblClick: false,

		groupContext: false,

		groupTap: false,

		groupDblTap: false,

		groupTapHold: false,

		columnCalcs: true,

		//pagination callbacks

		pageLoaded: function pageLoaded() {},

		//localization callbacks

		localized: function localized() {},

		//validation has failed

		validationFailed: function validationFailed() {},

		//history callbacks

		historyUndo: function historyUndo() {},

		historyRedo: function historyRedo() {},

		//scroll callbacks

		scrollHorizontal: function scrollHorizontal() {},

		scrollVertical: function scrollVertical() {}

	};

	Tabulator.prototype.initializeOptions = function (options) {

		//warn user if option is not available

		if (options.invalidOptionWarnings !== false) {

			for (var key in options) {

				if (typeof this.defaultOptions[key] === "undefined") {

					console.warn("Invalid table constructor option:", key);
				}
			}
		}

		//assign options to table

		for (var key in this.defaultOptions) {

			if (key in options) {

				this.options[key] = options[key];
			} else {

				if (Array.isArray(this.defaultOptions[key])) {

					this.options[key] = [];
				} else if (_typeof(this.defaultOptions[key]) === "object" && this.defaultOptions[key] !== null) {

					this.options[key] = {};
				} else {

					this.options[key] = this.defaultOptions[key];
				}
			}
		}
	};

	Tabulator.prototype.initializeElement = function (element) {

		if (typeof HTMLElement !== "undefined" && element instanceof HTMLElement) {

			this.element = element;

			return true;
		} else if (typeof element === "string") {

			this.element = document.querySelector(element);

			if (this.element) {

				return true;
			} else {

				console.error("Tabulator Creation Error - no element found matching selector: ", element);

				return false;
			}
		} else {

			console.error("Tabulator Creation Error - Invalid element provided:", element);

			return false;
		}
	};

	//convert depricated functionality to new functions

	Tabulator.prototype._mapDepricatedFunctionality = function () {

		//map depricated persistance setup options

		if (this.options.persistentLayout || this.options.persistentSort || this.options.persistentFilter) {

			if (!this.options.persistence) {

				this.options.persistence = {};
			}
		}

		if (typeof this.options.clipboardCopyHeader !== "undefined") {

			this.options.columnHeaders = this.options.clipboardCopyHeader;

			console.warn("DEPRECATION WARNING - clipboardCopyHeader option has been deprecated, please use the columnHeaders property on the clipboardCopyConfig option");
		}

		if (this.options.printVisibleRows !== true) {

			console.warn("printVisibleRows option is deprecated, you should now use the printRowRange option");

			this.options.persistence.printRowRange = "active";
		}

		if (this.options.printCopyStyle !== true) {

			console.warn("printCopyStyle option is deprecated, you should now use the printStyled option");

			this.options.persistence.printStyled = this.options.printCopyStyle;
		}

		if (this.options.persistentLayout) {

			console.warn("persistentLayout option is deprecated, you should now use the persistence option");

			if (this.options.persistence !== true && typeof this.options.persistence.columns === "undefined") {

				this.options.persistence.columns = true;
			}
		}

		if (this.options.persistentSort) {

			console.warn("persistentSort option is deprecated, you should now use the persistence option");

			if (this.options.persistence !== true && typeof this.options.persistence.sort === "undefined") {

				this.options.persistence.sort = true;
			}
		}

		if (this.options.persistentFilter) {

			console.warn("persistentFilter option is deprecated, you should now use the persistence option");

			if (this.options.persistence !== true && typeof this.options.persistence.filter === "undefined") {

				this.options.persistence.filter = true;
			}
		}

		if (this.options.columnVertAlign) {

			console.warn("columnVertAlign option is deprecated, you should now use the columnHeaderVertAlign option");

			this.options.columnHeaderVertAlign = this.options.columnVertAlign;
		}
	};

	Tabulator.prototype._clearSelection = function () {

		this.element.classList.add("tabulator-block-select");

		if (window.getSelection) {

			if (window.getSelection().empty) {
				// Chrome

				window.getSelection().empty();
			} else if (window.getSelection().removeAllRanges) {
				// Firefox

				window.getSelection().removeAllRanges();
			}
		} else if (document.selection) {
			// IE?

			document.selection.empty();
		}

		this.element.classList.remove("tabulator-block-select");
	};

	//concreate table

	Tabulator.prototype._create = function () {

		this._clearObjectPointers();

		this._mapDepricatedFunctionality();

		this.bindModules();

		if (this.element.tagName === "TABLE") {

			if (this.modExists("htmlTableImport", true)) {

				this.modules.htmlTableImport.parseTable();
			}
		}

		this.columnManager = new ColumnManager(this);

		this.rowManager = new RowManager(this);

		this.footerManager = new FooterManager(this);

		this.columnManager.setRowManager(this.rowManager);

		this.rowManager.setColumnManager(this.columnManager);

		this._buildElement();

		this._loadInitialData();
	};

	//clear pointers to objects in default config object

	Tabulator.prototype._clearObjectPointers = function () {

		this.options.columns = this.options.columns.slice(0);

		if (!this.options.reactiveData) {

			this.options.data = this.options.data.slice(0);
		}
	};

	//build tabulator element

	Tabulator.prototype._buildElement = function () {
		var _this16 = this;

		var element = this.element,
		    mod = this.modules,
		    options = this.options;

		options.tableBuilding.call(this);

		element.classList.add("tabulator");

		element.setAttribute("role", "grid");

		//empty element

		while (element.firstChild) {
			element.removeChild(element.firstChild);
		} //set table height

		if (options.height) {

			options.height = isNaN(options.height) ? options.height : options.height + "px";

			element.style.height = options.height;
		}

		//set table min height

		if (options.minHeight !== false) {

			options.minHeight = isNaN(options.minHeight) ? options.minHeight : options.minHeight + "px";

			element.style.minHeight = options.minHeight;
		}

		//set table maxHeight

		if (options.maxHeight !== false) {

			options.maxHeight = isNaN(options.maxHeight) ? options.maxHeight : options.maxHeight + "px";

			element.style.maxHeight = options.maxHeight;
		}

		this.columnManager.initialize();

		this.rowManager.initialize();

		this._detectBrowser();

		if (this.modExists("layout", true)) {

			mod.layout.initialize(options.layout);
		}

		//set localization

		if (options.headerFilterPlaceholder !== false) {

			mod.localize.setHeaderFilterPlaceholder(options.headerFilterPlaceholder);
		}

		for (var locale in options.langs) {

			mod.localize.installLang(locale, options.langs[locale]);
		}

		mod.localize.setLocale(options.locale);

		//configure placeholder element

		if (typeof options.placeholder == "string") {

			var el = document.createElement("div");

			el.classList.add("tabulator-placeholder");

			var span = document.createElement("span");

			span.innerHTML = options.placeholder;

			el.appendChild(span);

			options.placeholder = el;
		}

		//build table elements

		element.appendChild(this.columnManager.getElement());

		element.appendChild(this.rowManager.getElement());

		if (options.footerElement) {

			this.footerManager.activate();
		}

		if (options.persistence && this.modExists("persistence", true)) {

			mod.persistence.initialize();
		}

		if (options.persistence && this.modExists("persistence", true) && mod.persistence.config.columns) {

			options.columns = mod.persistence.load("columns", options.columns);
		}

		if (options.movableRows && this.modExists("moveRow")) {

			mod.moveRow.initialize();
		}

		if (options.autoColumns && this.options.data) {

			this.columnManager.generateColumnsFromRowData(this.options.data);
		}

		if (this.modExists("columnCalcs")) {

			mod.columnCalcs.initialize();
		}

		this.columnManager.setColumns(options.columns);

		if (options.dataTree && this.modExists("dataTree", true)) {

			mod.dataTree.initialize();
		}

		if (this.modExists("frozenRows")) {

			this.modules.frozenRows.initialize();
		}

		if ((options.persistence && this.modExists("persistence", true) && mod.persistence.config.sort || options.initialSort) && this.modExists("sort", true)) {

			var sorters = [];

			if (options.persistence && this.modExists("persistence", true) && mod.persistence.config.sort) {

				sorters = mod.persistence.load("sort");

				if (sorters === false && options.initialSort) {

					sorters = options.initialSort;
				}
			} else if (options.initialSort) {

				sorters = options.initialSort;
			}

			mod.sort.setSort(sorters);
		}

		if ((options.persistence && this.modExists("persistence", true) && mod.persistence.config.filter || options.initialFilter) && this.modExists("filter", true)) {

			var filters = [];

			if (options.persistence && this.modExists("persistence", true) && mod.persistence.config.filter) {

				filters = mod.persistence.load("filter");

				if (filters === false && options.initialFilter) {

					filters = options.initialFilter;
				}
			} else if (options.initialFilter) {

				filters = options.initialFilter;
			}

			mod.filter.setFilter(filters);
		}

		if (options.initialHeaderFilter && this.modExists("filter", true)) {

			options.initialHeaderFilter.forEach(function (item) {

				var column = _this16.columnManager.findColumn(item.field);

				if (column) {

					mod.filter.setHeaderFilterValue(column, item.value);
				} else {

					console.warn("Column Filter Error - No matching column found:", item.field);

					return false;
				}
			});
		}

		if (this.modExists("ajax")) {

			mod.ajax.initialize();
		}

		if (options.pagination && this.modExists("page", true)) {

			mod.page.initialize();
		}

		if (options.groupBy && this.modExists("groupRows", true)) {

			mod.groupRows.initialize();
		}

		if (this.modExists("keybindings")) {

			mod.keybindings.initialize();
		}

		if (this.modExists("selectRow")) {

			mod.selectRow.clearSelectionData(true);
		}

		if (options.autoResize && this.modExists("resizeTable")) {

			mod.resizeTable.initialize();
		}

		if (this.modExists("clipboard")) {

			mod.clipboard.initialize();
		}

		if (options.printAsHtml && this.modExists("print")) {

			mod.print.initialize();
		}

		options.tableBuilt.call(this);
	};

	Tabulator.prototype._loadInitialData = function () {

		var self = this;

		if (self.options.pagination && self.modExists("page")) {

			self.modules.page.reset(true, true);

			if (self.options.pagination == "local") {

				if (self.options.data.length) {

					self.rowManager.setData(self.options.data, false, true);
				} else {

					if ((self.options.ajaxURL || self.options.ajaxURLGenerator) && self.modExists("ajax")) {

						self.modules.ajax.loadData(false, true).then(function () {}).catch(function () {

							if (self.options.paginationInitialPage) {

								self.modules.page.setPage(self.options.paginationInitialPage);
							}
						});

						return;
					} else {

						self.rowManager.setData(self.options.data, false, true);
					}
				}

				if (self.options.paginationInitialPage) {

					self.modules.page.setPage(self.options.paginationInitialPage);
				}
			} else {

				if (self.options.ajaxURL) {

					self.modules.page.setPage(self.options.paginationInitialPage).then(function () {}).catch(function () {});
				} else {

					self.rowManager.setData([], false, true);
				}
			}
		} else {

			if (self.options.data.length) {

				self.rowManager.setData(self.options.data);
			} else {

				if ((self.options.ajaxURL || self.options.ajaxURLGenerator) && self.modExists("ajax")) {

					self.modules.ajax.loadData(false, true).then(function () {}).catch(function () {});
				} else {

					self.rowManager.setData(self.options.data, false, true);
				}
			}
		}
	};

	//deconstructor

	Tabulator.prototype.destroy = function () {

		var element = this.element;

		Tabulator.prototype.comms.deregister(this); //deregister table from inderdevice communication


		if (this.options.reactiveData && this.modExists("reactiveData", true)) {

			this.modules.reactiveData.unwatchData();
		}

		//clear row data

		this.rowManager.rows.forEach(function (row) {

			row.wipe();
		});

		this.rowManager.rows = [];

		this.rowManager.activeRows = [];

		this.rowManager.displayRows = [];

		//clear event bindings

		if (this.options.autoResize && this.modExists("resizeTable")) {

			this.modules.resizeTable.clearBindings();
		}

		if (this.modExists("keybindings")) {

			this.modules.keybindings.clearBindings();
		}

		//clear DOM

		while (element.firstChild) {
			element.removeChild(element.firstChild);
		}element.classList.remove("tabulator");
	};

	Tabulator.prototype._detectBrowser = function () {

		var ua = navigator.userAgent || navigator.vendor || window.opera;

		if (ua.indexOf("Trident") > -1) {

			this.browser = "ie";

			this.browserSlow = true;
		} else if (ua.indexOf("Edge") > -1) {

			this.browser = "edge";

			this.browserSlow = true;
		} else if (ua.indexOf("Firefox") > -1) {

			this.browser = "firefox";

			this.browserSlow = false;
		} else {

			this.browser = "other";

			this.browserSlow = false;
		}

		this.browserMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(ua) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4));
	};

	////////////////// Data Handling //////////////////


	//block table redrawing

	Tabulator.prototype.blockRedraw = function () {

		return this.rowManager.blockRedraw();
	};

	//restore table redrawing

	Tabulator.prototype.restoreRedraw = function () {

		return this.rowManager.restoreRedraw();
	};

	//local data from local file

	Tabulator.prototype.setDataFromLocalFile = function (extensions) {
		var _this17 = this;

		return new Promise(function (resolve, reject) {

			var input = document.createElement("input");

			input.type = "file";

			input.accept = extensions || ".json,application/json";

			input.addEventListener("change", function (e) {

				var file = input.files[0],
				    reader = new FileReader(),
				    data;

				reader.readAsText(file);

				reader.onload = function (e) {

					try {

						data = JSON.parse(reader.result);
					} catch (e) {

						console.warn("File Load Error - File contents is invalid JSON", e);

						reject(e);

						return;
					}

					_this17._setData(data).then(function (data) {

						resolve(data);
					}).catch(function (err) {

						resolve(err);
					});
				};

				reader.onerror = function (e) {

					console.warn("File Load Error - Unable to read file");

					reject();
				};
			});

			input.click();
		});
	};

	//load data

	Tabulator.prototype.setData = function (data, params, config) {

		if (this.modExists("ajax")) {

			this.modules.ajax.blockActiveRequest();
		}

		return this._setData(data, params, config, false, true);
	};

	Tabulator.prototype._setData = function (data, params, config, inPosition, columnsChanged) {

		var self = this;

		if (typeof data === "string") {

			if (data.indexOf("{") == 0 || data.indexOf("[") == 0) {

				//data is a json encoded string

				return self.rowManager.setData(JSON.parse(data), inPosition, columnsChanged);
			} else {

				if (self.modExists("ajax", true)) {

					if (params) {

						self.modules.ajax.setParams(params);
					}

					if (config) {

						self.modules.ajax.setConfig(config);
					}

					self.modules.ajax.setUrl(data);

					if (self.options.pagination == "remote" && self.modExists("page", true)) {

						self.modules.page.reset(true, true);

						return self.modules.page.setPage(1);
					} else {

						//assume data is url, make ajax call to url to get data

						return self.modules.ajax.loadData(inPosition, columnsChanged);
					}
				}
			}
		} else {

			if (data) {

				//asume data is already an object

				return self.rowManager.setData(data, inPosition, columnsChanged);
			} else {

				//no data provided, check if ajaxURL is present;

				if (self.modExists("ajax") && (self.modules.ajax.getUrl || self.options.ajaxURLGenerator)) {

					if (self.options.pagination == "remote" && self.modExists("page", true)) {

						self.modules.page.reset(true, true);

						return self.modules.page.setPage(1);
					} else {

						return self.modules.ajax.loadData(inPosition, columnsChanged);
					}
				} else {

					//empty data

					return self.rowManager.setData([], inPosition, columnsChanged);
				}
			}
		}
	};

	//clear data

	Tabulator.prototype.clearData = function () {

		if (this.modExists("ajax")) {

			this.modules.ajax.blockActiveRequest();
		}

		this.rowManager.clearData();
	};

	//get table data array

	Tabulator.prototype.getData = function (active) {

		if (active === true) {

			console.warn("passing a boolean to the getData function is deprecated, you should now pass the string 'active'");

			active = "active";
		}

		return this.rowManager.getData(active);
	};

	//get table data array count

	Tabulator.prototype.getDataCount = function (active) {

		if (active === true) {

			console.warn("passing a boolean to the getDataCount function is deprecated, you should now pass the string 'active'");

			active = "active";
		}

		return this.rowManager.getDataCount(active);
	};

	//search for specific row components

	Tabulator.prototype.searchRows = function (field, type, value) {

		if (this.modExists("filter", true)) {

			return this.modules.filter.search("rows", field, type, value);
		}
	};

	//search for specific data

	Tabulator.prototype.searchData = function (field, type, value) {

		if (this.modExists("filter", true)) {

			return this.modules.filter.search("data", field, type, value);
		}
	};

	//get table html

	Tabulator.prototype.getHtml = function (visible, style, config) {

		if (this.modExists("export", true)) {

			return this.modules.export.getHtml(visible, style, config);
		}
	};

	//get print html

	Tabulator.prototype.print = function (visible, style, config) {

		if (this.modExists("print", true)) {

			return this.modules.print.printFullscreen(visible, style, config);
		}
	};

	//retrieve Ajax URL

	Tabulator.prototype.getAjaxUrl = function () {

		if (this.modExists("ajax", true)) {

			return this.modules.ajax.getUrl();
		}
	};

	//replace data, keeping table in position with same sort

	Tabulator.prototype.replaceData = function (data, params, config) {

		if (this.modExists("ajax")) {

			this.modules.ajax.blockActiveRequest();
		}

		return this._setData(data, params, config, true);
	};

	//update table data

	Tabulator.prototype.updateData = function (data) {
		var _this18 = this;

		var self = this;

		var responses = 0;

		return new Promise(function (resolve, reject) {

			if (_this18.modExists("ajax")) {

				_this18.modules.ajax.blockActiveRequest();
			}

			if (typeof data === "string") {

				data = JSON.parse(data);
			}

			if (data) {

				data.forEach(function (item) {

					var row = self.rowManager.findRow(item[self.options.index]);

					if (row) {

						responses++;

						row.updateData(item).then(function () {

							responses--;

							if (!responses) {

								resolve();
							}
						});
					}
				});
			} else {

				console.warn("Update Error - No data provided");

				reject("Update Error - No data provided");
			}
		});
	};

	Tabulator.prototype.addData = function (data, pos, index) {
		var _this19 = this;

		return new Promise(function (resolve, reject) {

			if (_this19.modExists("ajax")) {

				_this19.modules.ajax.blockActiveRequest();
			}

			if (typeof data === "string") {

				data = JSON.parse(data);
			}

			if (data) {

				_this19.rowManager.addRows(data, pos, index).then(function (rows) {

					var output = [];

					rows.forEach(function (row) {

						output.push(row.getComponent());
					});

					resolve(output);
				});
			} else {

				console.warn("Update Error - No data provided");

				reject("Update Error - No data provided");
			}
		});
	};

	//update table data

	Tabulator.prototype.updateOrAddData = function (data) {
		var _this20 = this;

		var self = this,
		    rows = [],
		    responses = 0;

		return new Promise(function (resolve, reject) {

			if (_this20.modExists("ajax")) {

				_this20.modules.ajax.blockActiveRequest();
			}

			if (typeof data === "string") {

				data = JSON.parse(data);
			}

			if (data) {

				data.forEach(function (item) {

					var row = self.rowManager.findRow(item[self.options.index]);

					responses++;

					if (row) {

						row.updateData(item).then(function () {

							responses--;

							rows.push(row.getComponent());

							if (!responses) {

								resolve(rows);
							}
						});
					} else {

						self.rowManager.addRows(item).then(function (newRows) {

							responses--;

							rows.push(newRows[0].getComponent());

							if (!responses) {

								resolve(rows);
							}
						});
					}
				});
			} else {

				console.warn("Update Error - No data provided");

				reject("Update Error - No data provided");
			}
		});
	};

	//get row object

	Tabulator.prototype.getRow = function (index) {

		var row = this.rowManager.findRow(index);

		if (row) {

			return row.getComponent();
		} else {

			console.warn("Find Error - No matching row found:", index);

			return false;
		}
	};

	//get row object

	Tabulator.prototype.getRowFromPosition = function (position, active) {

		var row = this.rowManager.getRowFromPosition(position, active);

		if (row) {

			return row.getComponent();
		} else {

			console.warn("Find Error - No matching row found:", position);

			return false;
		}
	};

	//delete row from table

	Tabulator.prototype.deleteRow = function (index) {
		var _this21 = this;

		return new Promise(function (resolve, reject) {

			var self = _this21,
			    count = 0,
			    successCount = 0,
			    foundRows = [];

			function doneCheck() {

				count++;

				if (count == index.length) {

					if (successCount) {

						self.rowManager.reRenderInPosition();

						resolve();
					}
				}
			}

			if (!Array.isArray(index)) {

				index = [index];
			}

			//find matching rows

			index.forEach(function (item) {

				var row = _this21.rowManager.findRow(item, true);

				if (row) {

					foundRows.push(row);
				} else {

					console.warn("Delete Error - No matching row found:", item);

					reject("Delete Error - No matching row found");

					doneCheck();
				}
			});

			//sort rows into correct order to ensure smooth delete from table

			foundRows.sort(function (a, b) {

				return _this21.rowManager.rows.indexOf(a) > _this21.rowManager.rows.indexOf(b) ? 1 : -1;
			});

			foundRows.forEach(function (row) {

				row.delete().then(function () {

					successCount++;

					doneCheck();
				}).catch(function (err) {

					doneCheck();

					reject(err);
				});
			});
		});
	};

	//add row to table

	Tabulator.prototype.addRow = function (data, pos, index) {
		var _this22 = this;

		return new Promise(function (resolve, reject) {

			if (typeof data === "string") {

				data = JSON.parse(data);
			}

			_this22.rowManager.addRows(data, pos, index).then(function (rows) {

				//recalc column calculations if present

				if (_this22.modExists("columnCalcs")) {

					_this22.modules.columnCalcs.recalc(_this22.rowManager.activeRows);
				}

				resolve(rows[0].getComponent());
			});
		});
	};

	//update a row if it exitsts otherwise create it

	Tabulator.prototype.updateOrAddRow = function (index, data) {
		var _this23 = this;

		return new Promise(function (resolve, reject) {

			var row = _this23.rowManager.findRow(index);

			if (typeof data === "string") {

				data = JSON.parse(data);
			}

			if (row) {

				row.updateData(data).then(function () {

					//recalc column calculations if present

					if (_this23.modExists("columnCalcs")) {

						_this23.modules.columnCalcs.recalc(_this23.rowManager.activeRows);
					}

					resolve(row.getComponent());
				}).catch(function (err) {

					reject(err);
				});
			} else {

				row = _this23.rowManager.addRows(data).then(function (rows) {

					//recalc column calculations if present

					if (_this23.modExists("columnCalcs")) {

						_this23.modules.columnCalcs.recalc(_this23.rowManager.activeRows);
					}

					resolve(rows[0].getComponent());
				}).catch(function (err) {

					reject(err);
				});
			}
		});
	};

	//update row data

	Tabulator.prototype.updateRow = function (index, data) {
		var _this24 = this;

		return new Promise(function (resolve, reject) {

			var row = _this24.rowManager.findRow(index);

			if (typeof data === "string") {

				data = JSON.parse(data);
			}

			if (row) {

				row.updateData(data).then(function () {

					resolve(row.getComponent());
				}).catch(function (err) {

					reject(err);
				});
			} else {

				console.warn("Update Error - No matching row found:", index);

				reject("Update Error - No matching row found");
			}
		});
	};

	//scroll to row in DOM

	Tabulator.prototype.scrollToRow = function (index, position, ifVisible) {
		var _this25 = this;

		return new Promise(function (resolve, reject) {

			var row = _this25.rowManager.findRow(index);

			if (row) {

				_this25.rowManager.scrollToRow(row, position, ifVisible).then(function () {

					resolve();
				}).catch(function (err) {

					reject(err);
				});
			} else {

				console.warn("Scroll Error - No matching row found:", index);

				reject("Scroll Error - No matching row found");
			}
		});
	};

	Tabulator.prototype.moveRow = function (from, to, after) {

		var fromRow = this.rowManager.findRow(from);

		if (fromRow) {

			fromRow.moveToRow(to, after);
		} else {

			console.warn("Move Error - No matching row found:", from);
		}
	};

	Tabulator.prototype.getRows = function (active) {

		if (active === true) {

			console.warn("passing a boolean to the getRows function is deprecated, you should now pass the string 'active'");

			active = "active";
		}

		return this.rowManager.getComponents(active);
	};

	//get position of row in table

	Tabulator.prototype.getRowPosition = function (index, active) {

		var row = this.rowManager.findRow(index);

		if (row) {

			return this.rowManager.getRowPosition(row, active);
		} else {

			console.warn("Position Error - No matching row found:", index);

			return false;
		}
	};

	//copy table data to clipboard

	Tabulator.prototype.copyToClipboard = function (selector) {

		if (this.modExists("clipboard", true)) {

			this.modules.clipboard.copy(selector);
		}
	};

	/////////////// Column Functions  ///////////////


	Tabulator.prototype.setColumns = function (definition) {

		this.columnManager.setColumns(definition);
	};

	Tabulator.prototype.getColumns = function (structured) {

		return this.columnManager.getComponents(structured);
	};

	Tabulator.prototype.getColumn = function (field) {

		var col = this.columnManager.findColumn(field);

		if (col) {

			return col.getComponent();
		} else {

			console.warn("Find Error - No matching column found:", field);

			return false;
		}
	};

	Tabulator.prototype.getColumnDefinitions = function () {

		return this.columnManager.getDefinitionTree();
	};

	Tabulator.prototype.getColumnLayout = function () {

		if (this.modExists("persistence", true)) {

			return this.modules.persistence.parseColumns(this.columnManager.getColumns());
		}
	};

	Tabulator.prototype.setColumnLayout = function (layout) {

		if (this.modExists("persistence", true)) {

			this.columnManager.setColumns(this.modules.persistence.mergeDefinition(this.options.columns, layout));

			return true;
		}

		return false;
	};

	Tabulator.prototype.showColumn = function (field) {

		var column = this.columnManager.findColumn(field);

		if (column) {

			column.show();

			if (this.options.responsiveLayout && this.modExists("responsiveLayout", true)) {

				this.modules.responsiveLayout.update();
			}
		} else {

			console.warn("Column Show Error - No matching column found:", field);

			return false;
		}
	};

	Tabulator.prototype.hideColumn = function (field) {

		var column = this.columnManager.findColumn(field);

		if (column) {

			column.hide();

			if (this.options.responsiveLayout && this.modExists("responsiveLayout", true)) {

				this.modules.responsiveLayout.update();
			}
		} else {

			console.warn("Column Hide Error - No matching column found:", field);

			return false;
		}
	};

	Tabulator.prototype.toggleColumn = function (field) {

		var column = this.columnManager.findColumn(field);

		if (column) {

			if (column.visible) {

				column.hide();
			} else {

				column.show();
			}
		} else {

			console.warn("Column Visibility Toggle Error - No matching column found:", field);

			return false;
		}
	};

	Tabulator.prototype.addColumn = function (definition, before, field) {
		var _this26 = this;

		return new Promise(function (resolve, reject) {

			var column = _this26.columnManager.findColumn(field);

			_this26.columnManager.addColumn(definition, before, column).then(function (column) {

				resolve(column.getComponent());
			}).catch(function (err) {

				reject(err);
			});
		});
	};

	Tabulator.prototype.deleteColumn = function (field) {
		var _this27 = this;

		return new Promise(function (resolve, reject) {

			var column = _this27.columnManager.findColumn(field);

			if (column) {

				column.delete().then(function () {

					resolve();
				}).catch(function (err) {

					reject(err);
				});
			} else {

				console.warn("Column Delete Error - No matching column found:", field);

				reject();
			}
		});
	};

	Tabulator.prototype.updateColumnDefinition = function (field, definition) {
		var _this28 = this;

		return new Promise(function (resolve, reject) {

			var column = _this28.columnManager.findColumn(field);

			if (column) {

				column.updateDefinition(definition).then(function (col) {

					resolve(col);
				}).catch(function (err) {

					reject(err);
				});
			} else {

				console.warn("Column Update Error - No matching column found:", field);

				reject();
			}
		});
	};

	Tabulator.prototype.moveColumn = function (from, to, after) {

		var fromColumn = this.columnManager.findColumn(from);

		var toColumn = this.columnManager.findColumn(to);

		if (fromColumn) {

			if (toColumn) {

				this.columnManager.moveColumn(fromColumn, toColumn, after);
			} else {

				console.warn("Move Error - No matching column found:", toColumn);
			}
		} else {

			console.warn("Move Error - No matching column found:", from);
		}
	};

	//scroll to column in DOM

	Tabulator.prototype.scrollToColumn = function (field, position, ifVisible) {
		var _this29 = this;

		return new Promise(function (resolve, reject) {

			var column = _this29.columnManager.findColumn(field);

			if (column) {

				_this29.columnManager.scrollToColumn(column, position, ifVisible).then(function () {

					resolve();
				}).catch(function (err) {

					reject(err);
				});
			} else {

				console.warn("Scroll Error - No matching column found:", field);

				reject("Scroll Error - No matching column found");
			}
		});
	};

	//////////// Localization Functions  ////////////

	Tabulator.prototype.setLocale = function (locale) {

		this.modules.localize.setLocale(locale);
	};

	Tabulator.prototype.getLocale = function () {

		return this.modules.localize.getLocale();
	};

	Tabulator.prototype.getLang = function (locale) {

		return this.modules.localize.getLang(locale);
	};

	//////////// General Public Functions ////////////


	//redraw list without updating data

	Tabulator.prototype.redraw = function (force) {

		this.columnManager.redraw(force);

		this.rowManager.redraw(force);
	};

	Tabulator.prototype.setHeight = function (height) {

		if (this.rowManager.renderMode !== "classic") {

			this.options.height = isNaN(height) ? height : height + "px";

			this.element.style.height = this.options.height;

			this.rowManager.setRenderMode();

			this.rowManager.redraw();
		} else {

			console.warn("setHeight function is not available in classic render mode");
		}
	};

	///////////////////// Sorting ////////////////////


	//trigger sort

	Tabulator.prototype.setSort = function (sortList, dir) {

		if (this.modExists("sort", true)) {

			this.modules.sort.setSort(sortList, dir);

			this.rowManager.sorterRefresh();
		}
	};

	Tabulator.prototype.getSorters = function () {

		if (this.modExists("sort", true)) {

			return this.modules.sort.getSort();
		}
	};

	Tabulator.prototype.clearSort = function () {

		if (this.modExists("sort", true)) {

			this.modules.sort.clear();

			this.rowManager.sorterRefresh();
		}
	};

	///////////////////// Filtering ////////////////////


	//set standard filters

	Tabulator.prototype.setFilter = function (field, type, value) {

		if (this.modExists("filter", true)) {

			this.modules.filter.setFilter(field, type, value);

			this.rowManager.filterRefresh();
		}
	};

	//add filter to array

	Tabulator.prototype.addFilter = function (field, type, value) {

		if (this.modExists("filter", true)) {

			this.modules.filter.addFilter(field, type, value);

			this.rowManager.filterRefresh();
		}
	};

	//get all filters

	Tabulator.prototype.getFilters = function (all) {

		if (this.modExists("filter", true)) {

			return this.modules.filter.getFilters(all);
		}
	};

	Tabulator.prototype.setHeaderFilterFocus = function (field) {

		if (this.modExists("filter", true)) {

			var column = this.columnManager.findColumn(field);

			if (column) {

				this.modules.filter.setHeaderFilterFocus(column);
			} else {

				console.warn("Column Filter Focus Error - No matching column found:", field);

				return false;
			}
		}
	};

	Tabulator.prototype.getHeaderFilterValue = function (field) {

		if (this.modExists("filter", true)) {

			var column = this.columnManager.findColumn(field);

			if (column) {

				return this.modules.filter.getHeaderFilterValue(column);
			} else {

				console.warn("Column Filter Error - No matching column found:", field);
			}
		}
	};

	Tabulator.prototype.setHeaderFilterValue = function (field, value) {

		if (this.modExists("filter", true)) {

			var column = this.columnManager.findColumn(field);

			if (column) {

				this.modules.filter.setHeaderFilterValue(column, value);
			} else {

				console.warn("Column Filter Error - No matching column found:", field);

				return false;
			}
		}
	};

	Tabulator.prototype.getHeaderFilters = function () {

		if (this.modExists("filter", true)) {

			return this.modules.filter.getHeaderFilters();
		}
	};

	//remove filter from array

	Tabulator.prototype.removeFilter = function (field, type, value) {

		if (this.modExists("filter", true)) {

			this.modules.filter.removeFilter(field, type, value);

			this.rowManager.filterRefresh();
		}
	};

	//clear filters

	Tabulator.prototype.clearFilter = function (all) {

		if (this.modExists("filter", true)) {

			this.modules.filter.clearFilter(all);

			this.rowManager.filterRefresh();
		}
	};

	//clear header filters

	Tabulator.prototype.clearHeaderFilter = function () {

		if (this.modExists("filter", true)) {

			this.modules.filter.clearHeaderFilter();

			this.rowManager.filterRefresh();
		}
	};

	///////////////////// Filtering ////////////////////

	Tabulator.prototype.selectRow = function (rows) {

		if (this.modExists("selectRow", true)) {

			if (rows === true) {

				console.warn("passing a boolean to the selectRowselectRow function is deprecated, you should now pass the string 'active'");

				rows = "active";
			}

			this.modules.selectRow.selectRows(rows);
		}
	};

	Tabulator.prototype.deselectRow = function (rows) {

		if (this.modExists("selectRow", true)) {

			this.modules.selectRow.deselectRows(rows);
		}
	};

	Tabulator.prototype.toggleSelectRow = function (row) {

		if (this.modExists("selectRow", true)) {

			this.modules.selectRow.toggleRow(row);
		}
	};

	Tabulator.prototype.getSelectedRows = function () {

		if (this.modExists("selectRow", true)) {

			return this.modules.selectRow.getSelectedRows();
		}
	};

	Tabulator.prototype.getSelectedData = function () {

		if (this.modExists("selectRow", true)) {

			return this.modules.selectRow.getSelectedData();
		}
	};

	//////////// Pagination Functions  ////////////


	Tabulator.prototype.setMaxPage = function (max) {

		if (this.options.pagination && this.modExists("page")) {

			this.modules.page.setMaxPage(max);
		} else {

			return false;
		}
	};

	Tabulator.prototype.setPage = function (page) {

		if (this.options.pagination && this.modExists("page")) {

			return this.modules.page.setPage(page);
		} else {

			return new Promise(function (resolve, reject) {
				reject();
			});
		}
	};

	Tabulator.prototype.setPageToRow = function (row) {
		var _this30 = this;

		return new Promise(function (resolve, reject) {

			if (_this30.options.pagination && _this30.modExists("page")) {

				row = _this30.rowManager.findRow(row);

				if (row) {

					_this30.modules.page.setPageToRow(row).then(function () {

						resolve();
					}).catch(function () {

						reject();
					});
				} else {

					reject();
				}
			} else {

				reject();
			}
		});
	};

	Tabulator.prototype.setPageSize = function (size) {

		if (this.options.pagination && this.modExists("page")) {

			this.modules.page.setPageSize(size);

			this.modules.page.setPage(1).then(function () {}).catch(function () {});
		} else {

			return false;
		}
	};

	Tabulator.prototype.getPageSize = function () {

		if (this.options.pagination && this.modExists("page", true)) {

			return this.modules.page.getPageSize();
		}
	};

	Tabulator.prototype.previousPage = function () {

		if (this.options.pagination && this.modExists("page")) {

			this.modules.page.previousPage();
		} else {

			return false;
		}
	};

	Tabulator.prototype.nextPage = function () {

		if (this.options.pagination && this.modExists("page")) {

			this.modules.page.nextPage();
		} else {

			return false;
		}
	};

	Tabulator.prototype.getPage = function () {

		if (this.options.pagination && this.modExists("page")) {

			return this.modules.page.getPage();
		} else {

			return false;
		}
	};

	Tabulator.prototype.getPageMax = function () {

		if (this.options.pagination && this.modExists("page")) {

			return this.modules.page.getPageMax();
		} else {

			return false;
		}
	};

	///////////////// Grouping Functions ///////////////


	Tabulator.prototype.setGroupBy = function (groups) {

		if (this.modExists("groupRows", true)) {

			this.options.groupBy = groups;

			this.modules.groupRows.initialize();

			this.rowManager.refreshActiveData("display");

			if (this.options.persistence && this.modExists("persistence", true) && this.modules.persistence.config.group) {

				this.modules.persistence.save("group");
			}
		} else {

			return false;
		}
	};

	Tabulator.prototype.setGroupStartOpen = function (values) {

		if (this.modExists("groupRows", true)) {

			this.options.groupStartOpen = values;

			this.modules.groupRows.initialize();

			if (this.options.groupBy) {

				this.rowManager.refreshActiveData("group");

				if (this.options.persistence && this.modExists("persistence", true) && this.modules.persistence.config.group) {

					this.modules.persistence.save("group");
				}
			} else {

				console.warn("Grouping Update - cant refresh view, no groups have been set");
			}
		} else {

			return false;
		}
	};

	Tabulator.prototype.setGroupHeader = function (values) {

		if (this.modExists("groupRows", true)) {

			this.options.groupHeader = values;

			this.modules.groupRows.initialize();

			if (this.options.groupBy) {

				this.rowManager.refreshActiveData("group");

				if (this.options.persistence && this.modExists("persistence", true) && this.modules.persistence.config.group) {

					this.modules.persistence.save("group");
				}
			} else {

				console.warn("Grouping Update - cant refresh view, no groups have been set");
			}
		} else {

			return false;
		}
	};

	Tabulator.prototype.getGroups = function (values) {

		if (this.modExists("groupRows", true)) {

			return this.modules.groupRows.getGroups(true);
		} else {

			return false;
		}
	};

	// get grouped table data in the same format as getData()

	Tabulator.prototype.getGroupedData = function () {

		if (this.modExists("groupRows", true)) {

			return this.options.groupBy ? this.modules.groupRows.getGroupedData() : this.getData();
		}
	};

	///////////////// Column Calculation Functions ///////////////

	Tabulator.prototype.getCalcResults = function () {

		if (this.modExists("columnCalcs", true)) {

			return this.modules.columnCalcs.getResults();
		} else {

			return false;
		}
	};

	Tabulator.prototype.recalc = function () {

		if (this.modExists("columnCalcs", true)) {

			this.modules.columnCalcs.recalcAll(this.rowManager.activeRows);
		}
	};

	/////////////// Navigation Management //////////////


	Tabulator.prototype.navigatePrev = function () {

		var cell = false;

		if (this.modExists("edit", true)) {

			cell = this.modules.edit.currentCell;

			if (cell) {

				return cell.nav().prev();
			}
		}

		return false;
	};

	Tabulator.prototype.navigateNext = function () {

		var cell = false;

		if (this.modExists("edit", true)) {

			cell = this.modules.edit.currentCell;

			if (cell) {

				return cell.nav().next();
			}
		}

		return false;
	};

	Tabulator.prototype.navigateLeft = function () {

		var cell = false;

		if (this.modExists("edit", true)) {

			cell = this.modules.edit.currentCell;

			if (cell) {

				e.preventDefault();

				return cell.nav().left();
			}
		}

		return false;
	};

	Tabulator.prototype.navigateRight = function () {

		var cell = false;

		if (this.modExists("edit", true)) {

			cell = this.modules.edit.currentCell;

			if (cell) {

				e.preventDefault();

				return cell.nav().right();
			}
		}

		return false;
	};

	Tabulator.prototype.navigateUp = function () {

		var cell = false;

		if (this.modExists("edit", true)) {

			cell = this.modules.edit.currentCell;

			if (cell) {

				e.preventDefault();

				return cell.nav().up();
			}
		}

		return false;
	};

	Tabulator.prototype.navigateDown = function () {

		var cell = false;

		if (this.modExists("edit", true)) {

			cell = this.modules.edit.currentCell;

			if (cell) {

				e.preventDefault();

				return cell.nav().down();
			}
		}

		return false;
	};

	/////////////// History Management //////////////

	Tabulator.prototype.undo = function () {

		if (this.options.history && this.modExists("history", true)) {

			return this.modules.history.undo();
		} else {

			return false;
		}
	};

	Tabulator.prototype.redo = function () {

		if (this.options.history && this.modExists("history", true)) {

			return this.modules.history.redo();
		} else {

			return false;
		}
	};

	Tabulator.prototype.getHistoryUndoSize = function () {

		if (this.options.history && this.modExists("history", true)) {

			return this.modules.history.getHistoryUndoSize();
		} else {

			return false;
		}
	};

	Tabulator.prototype.getHistoryRedoSize = function () {

		if (this.options.history && this.modExists("history", true)) {

			return this.modules.history.getHistoryRedoSize();
		} else {

			return false;
		}
	};

	/////////////// Download Management //////////////


	Tabulator.prototype.download = function (type, filename, options, active) {

		if (this.modExists("download", true)) {

			this.modules.download.download(type, filename, options, active);
		}
	};

	Tabulator.prototype.downloadToTab = function (type, filename, options, active) {

		if (this.modExists("download", true)) {

			this.modules.download.download(type, filename, options, active, true);
		}
	};

	/////////// Inter Table Communications ///////////


	Tabulator.prototype.tableComms = function (table, module, action, data) {

		this.modules.comms.receive(table, module, action, data);
	};

	////////////// Extension Management //////////////


	//object to hold module

	Tabulator.prototype.moduleBindings = {};

	//extend module

	Tabulator.prototype.extendModule = function (name, property, values) {

		if (Tabulator.prototype.moduleBindings[name]) {

			var source = Tabulator.prototype.moduleBindings[name].prototype[property];

			if (source) {

				if ((typeof values === 'undefined' ? 'undefined' : _typeof(values)) == "object") {

					for (var key in values) {

						source[key] = values[key];
					}
				} else {

					console.warn("Module Error - Invalid value type, it must be an object");
				}
			} else {

				console.warn("Module Error - property does not exist:", property);
			}
		} else {

			console.warn("Module Error - module does not exist:", name);
		}
	};

	//add module to tabulator

	Tabulator.prototype.registerModule = function (name, module) {

		var self = this;

		Tabulator.prototype.moduleBindings[name] = module;
	};

	//ensure that module are bound to instantiated function

	Tabulator.prototype.bindModules = function () {

		this.modules = {};

		for (var name in Tabulator.prototype.moduleBindings) {

			this.modules[name] = new Tabulator.prototype.moduleBindings[name](this);
		}
	};

	//Check for module

	Tabulator.prototype.modExists = function (plugin, required) {

		if (this.modules[plugin]) {

			return true;
		} else {

			if (required) {

				console.error("Tabulator Module Not Installed: " + plugin);
			}

			return false;
		}
	};

	Tabulator.prototype.helpers = {

		elVisible: function elVisible(el) {

			return !(el.offsetWidth <= 0 && el.offsetHeight <= 0);
		},

		elOffset: function elOffset(el) {

			var box = el.getBoundingClientRect();

			return {

				top: box.top + window.pageYOffset - document.documentElement.clientTop,

				left: box.left + window.pageXOffset - document.documentElement.clientLeft

			};
		},

		deepClone: function deepClone(obj) {

			var clone = Array.isArray(obj) ? [] : {};

			for (var i in obj) {

				if (obj[i] != null && _typeof(obj[i]) === "object") {

					if (obj[i] instanceof Date) {

						clone[i] = new Date(obj[i]);
					} else {

						clone[i] = this.deepClone(obj[i]);
					}
				} else {

					clone[i] = obj[i];
				}
			}

			return clone;
		}

	};

	Tabulator.prototype.comms = {

		tables: [],

		register: function register(table) {

			Tabulator.prototype.comms.tables.push(table);
		},

		deregister: function deregister(table) {

			var index = Tabulator.prototype.comms.tables.indexOf(table);

			if (index > -1) {

				Tabulator.prototype.comms.tables.splice(index, 1);
			}
		},

		lookupTable: function lookupTable(query, silent) {

			var results = [],
			    matches,
			    match;

			if (typeof query === "string") {

				matches = document.querySelectorAll(query);

				if (matches.length) {

					for (var i = 0; i < matches.length; i++) {

						match = Tabulator.prototype.comms.matchElement(matches[i]);

						if (match) {

							results.push(match);
						}
					}
				}
			} else if (typeof HTMLElement !== "undefined" && query instanceof HTMLElement || query instanceof Tabulator) {

				match = Tabulator.prototype.comms.matchElement(query);

				if (match) {

					results.push(match);
				}
			} else if (Array.isArray(query)) {

				query.forEach(function (item) {

					results = results.concat(Tabulator.prototype.comms.lookupTable(item));
				});
			} else {

				if (!silent) {

					console.warn("Table Connection Error - Invalid Selector", query);
				}
			}

			return results;
		},

		matchElement: function matchElement(element) {

			return Tabulator.prototype.comms.tables.find(function (table) {

				return element instanceof Tabulator ? table === element : table.element === element;
			});
		}

	};

	Tabulator.prototype.findTable = function (query) {

		var results = Tabulator.prototype.comms.lookupTable(query, true);

		return Array.isArray(results) && !results.length ? false : results;
	};

	var Layout = function Layout(table) {

		this.table = table;

		this.mode = null;
	};

	//initialize layout system


	Layout.prototype.initialize = function (layout) {

		if (this.modes[layout]) {

			this.mode = layout;
		} else {

			console.warn("Layout Error - invalid mode set, defaulting to 'fitData' : " + layout);

			this.mode = 'fitData';
		}

		this.table.element.setAttribute("tabulator-layout", this.mode);
	};

	Layout.prototype.getMode = function () {

		return this.mode;
	};

	//trigger table layout


	Layout.prototype.layout = function () {

		this.modes[this.mode].call(this, this.table.columnManager.columnsByIndex);
	};

	//layout render functions


	Layout.prototype.modes = {

		//resize columns to fit data the contain


		"fitData": function fitData(columns) {

			columns.forEach(function (column) {

				column.reinitializeWidth();
			});

			if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {

				this.table.modules.responsiveLayout.update();
			}
		},

		//resize columns to fit data the contain and stretch row to fill table


		"fitDataFill": function fitDataFill(columns) {

			columns.forEach(function (column) {

				column.reinitializeWidth();
			});

			if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {

				this.table.modules.responsiveLayout.update();
			}
		},

		//resize columns to fit data the contain and stretch last column to fill table


		"fitDataStretch": function fitDataStretch(columns) {
			var _this31 = this;

			var colsWidth = 0,
			    tableWidth = this.table.rowManager.element.clientWidth,
			    gap = 0,
			    lastCol = false;

			columns.forEach(function (column, i) {

				if (!column.widthFixed) {

					column.reinitializeWidth();
				}

				if (_this31.table.options.responsiveLayout ? column.modules.responsive.visible : column.visible) {

					lastCol = column;
				}

				if (column.visible) {

					colsWidth += column.getWidth();
				}
			});

			if (lastCol) {

				gap = tableWidth - colsWidth + lastCol.getWidth();

				if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {

					lastCol.setWidth(0);

					this.table.modules.responsiveLayout.update();
				}

				if (gap > 0) {

					lastCol.setWidth(gap);
				} else {

					lastCol.reinitializeWidth();
				}
			} else {

				if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {

					this.table.modules.responsiveLayout.update();
				}
			}
		},

		//resize columns to fit


		"fitColumns": function fitColumns(columns) {

			var self = this;

			var totalWidth = self.table.element.clientWidth; //table element width


			var fixedWidth = 0; //total width of columns with a defined width


			var flexWidth = 0; //total width available to flexible columns


			var flexGrowUnits = 0; //total number of widthGrow blocks accross all columns


			var flexColWidth = 0; //desired width of flexible columns


			var flexColumns = []; //array of flexible width columns


			var fixedShrinkColumns = []; //array of fixed width columns that can shrink


			var flexShrinkUnits = 0; //total number of widthShrink blocks accross all columns


			var overflowWidth = 0; //horizontal overflow width


			var gapFill = 0; //number of pixels to be added to final column to close and half pixel gaps


			function calcWidth(width) {

				var colWidth;

				if (typeof width == "string") {

					if (width.indexOf("%") > -1) {

						colWidth = totalWidth / 100 * parseInt(width);
					} else {

						colWidth = parseInt(width);
					}
				} else {

					colWidth = width;
				}

				return colWidth;
			}

			//ensure columns resize to take up the correct amount of space


			function scaleColumns(columns, freeSpace, colWidth, shrinkCols) {

				var oversizeCols = [],
				    oversizeSpace = 0,
				    remainingSpace = 0,
				    nextColWidth = 0,
				    gap = 0,
				    changeUnits = 0,
				    undersizeCols = [];

				function calcGrow(col) {

					return colWidth * (col.column.definition.widthGrow || 1);
				}

				function calcShrink(col) {

					return calcWidth(col.width) - colWidth * (col.column.definition.widthShrink || 0);
				}

				columns.forEach(function (col, i) {

					var width = shrinkCols ? calcShrink(col) : calcGrow(col);

					if (col.column.minWidth >= width) {

						oversizeCols.push(col);
					} else {

						undersizeCols.push(col);

						changeUnits += shrinkCols ? col.column.definition.widthShrink || 1 : col.column.definition.widthGrow || 1;
					}
				});

				if (oversizeCols.length) {

					oversizeCols.forEach(function (col) {

						oversizeSpace += shrinkCols ? col.width - col.column.minWidth : col.column.minWidth;

						col.width = col.column.minWidth;
					});

					remainingSpace = freeSpace - oversizeSpace;

					nextColWidth = changeUnits ? Math.floor(remainingSpace / changeUnits) : remainingSpace;

					gap = remainingSpace - nextColWidth * changeUnits;

					gap += scaleColumns(undersizeCols, remainingSpace, nextColWidth, shrinkCols);
				} else {

					gap = changeUnits ? freeSpace - Math.floor(freeSpace / changeUnits) * changeUnits : freeSpace;

					undersizeCols.forEach(function (column) {

						column.width = shrinkCols ? calcShrink(column) : calcGrow(column);
					});
				}

				return gap;
			}

			if (this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", true)) {

				this.table.modules.responsiveLayout.update();
			}

			//adjust for vertical scrollbar if present


			if (this.table.rowManager.element.scrollHeight > this.table.rowManager.element.clientHeight) {

				totalWidth -= this.table.rowManager.element.offsetWidth - this.table.rowManager.element.clientWidth;
			}

			columns.forEach(function (column) {

				var width, minWidth, colWidth;

				if (column.visible) {

					width = column.definition.width;

					minWidth = parseInt(column.minWidth);

					if (width) {

						colWidth = calcWidth(width);

						fixedWidth += colWidth > minWidth ? colWidth : minWidth;

						if (column.definition.widthShrink) {

							fixedShrinkColumns.push({

								column: column,

								width: colWidth > minWidth ? colWidth : minWidth

							});

							flexShrinkUnits += column.definition.widthShrink;
						}
					} else {

						flexColumns.push({

							column: column,

							width: 0

						});

						flexGrowUnits += column.definition.widthGrow || 1;
					}
				}
			});

			//calculate available space


			flexWidth = totalWidth - fixedWidth;

			//calculate correct column size


			flexColWidth = Math.floor(flexWidth / flexGrowUnits);

			//generate column widths


			var gapFill = scaleColumns(flexColumns, flexWidth, flexColWidth, false);

			//increase width of last column to account for rounding errors


			if (flexColumns.length && gapFill > 0) {

				flexColumns[flexColumns.length - 1].width += +gapFill;
			}

			//caculate space for columns to be shrunk into


			flexColumns.forEach(function (col) {

				flexWidth -= col.width;
			});

			overflowWidth = Math.abs(gapFill) + flexWidth;

			//shrink oversize columns if there is no available space


			if (overflowWidth > 0 && flexShrinkUnits) {

				gapFill = scaleColumns(fixedShrinkColumns, overflowWidth, Math.floor(overflowWidth / flexShrinkUnits), true);
			}

			//decrease width of last column to account for rounding errors


			if (fixedShrinkColumns.length) {

				fixedShrinkColumns[fixedShrinkColumns.length - 1].width -= gapFill;
			}

			flexColumns.forEach(function (col) {

				col.column.setWidth(col.width);
			});

			fixedShrinkColumns.forEach(function (col) {

				col.column.setWidth(col.width);
			});
		}

	};

	Tabulator.prototype.registerModule("layout", Layout);

	var Localize = function Localize(table) {

		this.table = table; //hold Tabulator object

		this.locale = "default"; //current locale

		this.lang = false; //current language

		this.bindings = {}; //update events to call when locale is changed
	};

	//set header placehoder

	Localize.prototype.setHeaderFilterPlaceholder = function (placeholder) {

		this.langs.default.headerFilters.default = placeholder;
	};

	//set header filter placeholder by column

	Localize.prototype.setHeaderFilterColumnPlaceholder = function (column, placeholder) {

		this.langs.default.headerFilters.columns[column] = placeholder;

		if (this.lang && !this.lang.headerFilters.columns[column]) {

			this.lang.headerFilters.columns[column] = placeholder;
		}
	};

	//setup a lang description object

	Localize.prototype.installLang = function (locale, lang) {

		if (this.langs[locale]) {

			this._setLangProp(this.langs[locale], lang);
		} else {

			this.langs[locale] = lang;
		}
	};

	Localize.prototype._setLangProp = function (lang, values) {

		for (var key in values) {

			if (lang[key] && _typeof(lang[key]) == "object") {

				this._setLangProp(lang[key], values[key]);
			} else {

				lang[key] = values[key];
			}
		}
	};

	//set current locale

	Localize.prototype.setLocale = function (desiredLocale) {

		var self = this;

		desiredLocale = desiredLocale || "default";

		//fill in any matching languge values

		function traverseLang(trans, path) {

			for (var prop in trans) {

				if (_typeof(trans[prop]) == "object") {

					if (!path[prop]) {

						path[prop] = {};
					}

					traverseLang(trans[prop], path[prop]);
				} else {

					path[prop] = trans[prop];
				}
			}
		}

		//determing correct locale to load

		if (desiredLocale === true && navigator.language) {

			//get local from system

			desiredLocale = navigator.language.toLowerCase();
		}

		if (desiredLocale) {

			//if locale is not set, check for matching top level locale else use default

			if (!self.langs[desiredLocale]) {

				var prefix = desiredLocale.split("-")[0];

				if (self.langs[prefix]) {

					console.warn("Localization Error - Exact matching locale not found, using closest match: ", desiredLocale, prefix);

					desiredLocale = prefix;
				} else {

					console.warn("Localization Error - Matching locale not found, using default: ", desiredLocale);

					desiredLocale = "default";
				}
			}
		}

		self.locale = desiredLocale;

		//load default lang template

		self.lang = Tabulator.prototype.helpers.deepClone(self.langs.default || {});

		if (desiredLocale != "default") {

			traverseLang(self.langs[desiredLocale], self.lang);
		}

		self.table.options.localized.call(self.table, self.locale, self.lang);

		self._executeBindings();
	};

	//get current locale

	Localize.prototype.getLocale = function (locale) {

		return self.locale;
	};

	//get lang object for given local or current if none provided

	Localize.prototype.getLang = function (locale) {

		return locale ? this.langs[locale] : this.lang;
	};

	//get text for current locale

	Localize.prototype.getText = function (path, value) {

		var path = value ? path + "|" + value : path,
		    pathArray = path.split("|"),
		    text = this._getLangElement(pathArray, this.locale);

		// if(text === false){

		// 	console.warn("Localization Error - Matching localized text not found for given path: ", path);

		// }


		return text || "";
	};

	//traverse langs object and find localized copy

	Localize.prototype._getLangElement = function (path, locale) {

		var self = this;

		var root = self.lang;

		path.forEach(function (level) {

			var rootPath;

			if (root) {

				rootPath = root[level];

				if (typeof rootPath != "undefined") {

					root = rootPath;
				} else {

					root = false;
				}
			}
		});

		return root;
	};

	//set update binding

	Localize.prototype.bind = function (path, callback) {

		if (!this.bindings[path]) {

			this.bindings[path] = [];
		}

		this.bindings[path].push(callback);

		callback(this.getText(path), this.lang);
	};

	//itterate through bindings and trigger updates

	Localize.prototype._executeBindings = function () {

		var self = this;

		var _loop = function _loop(path) {

			self.bindings[path].forEach(function (binding) {

				binding(self.getText(path), self.lang);
			});
		};

		for (var path in self.bindings) {
			_loop(path);
		}
	};

	//Localized text listings

	Localize.prototype.langs = {

		"default": { //hold default locale text

			"groups": {

				"item": "item",

				"items": "items"

			},

			"columns": {},

			"ajax": {

				"loading": "Loading",

				"error": "Error"

			},

			"pagination": {

				"page_size": "Page Size",

				"first": "First",

				"first_title": "First Page",

				"last": "Last",

				"last_title": "Last Page",

				"prev": "Prev",

				"prev_title": "Prev Page",

				"next": "Next",

				"next_title": "Next Page"

			},

			"headerFilters": {

				"default": "filter column...",

				"columns": {}

			}

		}

	};

	Tabulator.prototype.registerModule("localize", Localize);

	var Comms = function Comms(table) {

		this.table = table;
	};

	Comms.prototype.getConnections = function (selectors) {

		var self = this,
		    connections = [],
		    connection;

		connection = Tabulator.prototype.comms.lookupTable(selectors);

		connection.forEach(function (con) {

			if (self.table !== con) {

				connections.push(con);
			}
		});

		return connections;
	};

	Comms.prototype.send = function (selectors, module, action, data) {

		var self = this,
		    connections = this.getConnections(selectors);

		connections.forEach(function (connection) {

			connection.tableComms(self.table.element, module, action, data);
		});

		if (!connections.length && selectors) {

			console.warn("Table Connection Error - No tables matching selector found", selectors);
		}
	};

	Comms.prototype.receive = function (table, module, action, data) {

		if (this.table.modExists(module)) {

			return this.table.modules[module].commsReceived(table, action, data);
		} else {

			console.warn("Inter-table Comms Error - no such module:", module);
		}
	};

	Tabulator.prototype.registerModule("comms", Comms);

	var Accessor = function Accessor(table) {
		this.table = table; //hold Tabulator object
		this.allowedTypes = ["", "data", "download", "clipboard", "print", "htmlOutput"]; //list of accessor types
	};

	//initialize column accessor
	Accessor.prototype.initializeColumn = function (column) {
		var self = this,
		    match = false,
		    config = {};

		this.allowedTypes.forEach(function (type) {
			var key = "accessor" + (type.charAt(0).toUpperCase() + type.slice(1)),
			    accessor;

			if (column.definition[key]) {
				accessor = self.lookupAccessor(column.definition[key]);

				if (accessor) {
					match = true;

					config[key] = {
						accessor: accessor,
						params: column.definition[key + "Params"] || {}
					};
				}
			}
		});

		if (match) {
			column.modules.accessor = config;
		}
	};

	Accessor.prototype.lookupAccessor = function (value) {
		var accessor = false;

		//set column accessor
		switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
			case "string":
				if (this.accessors[value]) {
					accessor = this.accessors[value];
				} else {
					console.warn("Accessor Error - No such accessor found, ignoring: ", value);
				}
				break;

			case "function":
				accessor = value;
				break;
		}

		return accessor;
	};

	//apply accessor to row
	Accessor.prototype.transformRow = function (dataIn, type) {
		var self = this,
		    key = "accessor" + (type.charAt(0).toUpperCase() + type.slice(1));

		//clone data object with deep copy to isolate internal data from returned result
		var data = Tabulator.prototype.helpers.deepClone(dataIn || {});

		self.table.columnManager.traverse(function (column) {
			var value, accessor, params, component;

			if (column.modules.accessor) {

				accessor = column.modules.accessor[key] || column.modules.accessor.accessor || false;

				if (accessor) {
					value = column.getFieldValue(data);

					if (value != "undefined") {
						component = column.getComponent();
						params = typeof accessor.params === "function" ? accessor.params(value, data, type, component) : accessor.params;
						column.setFieldValue(data, accessor.accessor(value, data, type, params, component));
					}
				}
			}
		});

		return data;
	},

	//default accessors
	Accessor.prototype.accessors = {};

	Tabulator.prototype.registerModule("accessor", Accessor);
	var Ajax = function Ajax(table) {

		this.table = table; //hold Tabulator object
		this.config = false; //hold config object for ajax request
		this.url = ""; //request URL
		this.urlGenerator = false;
		this.params = false; //request parameters

		this.loaderElement = this.createLoaderElement(); //loader message div
		this.msgElement = this.createMsgElement(); //message element
		this.loadingElement = false;
		this.errorElement = false;
		this.loaderPromise = false;

		this.progressiveLoad = false;
		this.loading = false;

		this.requestOrder = 0; //prevent requests comming out of sequence if overridden by another load request
	};

	//initialize setup options
	Ajax.prototype.initialize = function () {
		var template;

		this.loaderElement.appendChild(this.msgElement);

		if (this.table.options.ajaxLoaderLoading) {
			if (typeof this.table.options.ajaxLoaderLoading == "string") {
				template = document.createElement('template');
				template.innerHTML = this.table.options.ajaxLoaderLoading.trim();
				this.loadingElement = template.content.firstChild;
			} else {
				this.loadingElement = this.table.options.ajaxLoaderLoading;
			}
		}

		this.loaderPromise = this.table.options.ajaxRequestFunc || this.defaultLoaderPromise;

		this.urlGenerator = this.table.options.ajaxURLGenerator || this.defaultURLGenerator;

		if (this.table.options.ajaxLoaderError) {
			if (typeof this.table.options.ajaxLoaderError == "string") {
				template = document.createElement('template');
				template.innerHTML = this.table.options.ajaxLoaderError.trim();
				this.errorElement = template.content.firstChild;
			} else {
				this.errorElement = this.table.options.ajaxLoaderError;
			}
		}

		if (this.table.options.ajaxParams) {
			this.setParams(this.table.options.ajaxParams);
		}

		if (this.table.options.ajaxConfig) {
			this.setConfig(this.table.options.ajaxConfig);
		}

		if (this.table.options.ajaxURL) {
			this.setUrl(this.table.options.ajaxURL);
		}

		if (this.table.options.ajaxProgressiveLoad) {
			if (this.table.options.pagination) {
				this.progressiveLoad = false;
				console.error("Progressive Load Error - Pagination and progressive load cannot be used at the same time");
			} else {
				if (this.table.modExists("page")) {
					this.progressiveLoad = this.table.options.ajaxProgressiveLoad;
					this.table.modules.page.initializeProgressive(this.progressiveLoad);
				} else {
					console.error("Pagination plugin is required for progressive ajax loading");
				}
			}
		}
	};

	Ajax.prototype.createLoaderElement = function () {
		var el = document.createElement("div");
		el.classList.add("tabulator-loader");
		return el;
	};

	Ajax.prototype.createMsgElement = function () {
		var el = document.createElement("div");

		el.classList.add("tabulator-loader-msg");
		el.setAttribute("role", "alert");

		return el;
	};

	//set ajax params
	Ajax.prototype.setParams = function (params, update) {
		if (update) {
			this.params = this.params || {};

			for (var key in params) {
				this.params[key] = params[key];
			}
		} else {
			this.params = params;
		}
	};

	Ajax.prototype.getParams = function () {
		return this.params || {};
	};

	//load config object
	Ajax.prototype.setConfig = function (config) {
		this._loadDefaultConfig();

		if (typeof config == "string") {
			this.config.method = config;
		} else {
			for (var key in config) {
				this.config[key] = config[key];
			}
		}
	};

	//create config object from default
	Ajax.prototype._loadDefaultConfig = function (force) {
		var self = this;
		if (!self.config || force) {

			self.config = {};

			//load base config from defaults
			for (var key in self.defaultConfig) {
				self.config[key] = self.defaultConfig[key];
			}
		}
	};

	//set request url
	Ajax.prototype.setUrl = function (url) {
		this.url = url;
	};

	//get request url
	Ajax.prototype.getUrl = function () {
		return this.url;
	};

	//lstandard loading function
	Ajax.prototype.loadData = function (inPosition, columnsChanged) {
		var self = this;

		if (this.progressiveLoad) {
			return this._loadDataProgressive();
		} else {
			return this._loadDataStandard(inPosition, columnsChanged);
		}
	};

	Ajax.prototype.nextPage = function (diff) {
		var margin;

		if (!this.loading) {

			margin = this.table.options.ajaxProgressiveLoadScrollMargin || this.table.rowManager.getElement().clientHeight * 2;

			if (diff < margin) {
				this.table.modules.page.nextPage().then(function () {}).catch(function () {});
			}
		}
	};

	Ajax.prototype.blockActiveRequest = function () {
		this.requestOrder++;
	};

	Ajax.prototype._loadDataProgressive = function () {
		this.table.rowManager.setData([]);
		return this.table.modules.page.setPage(1);
	};

	Ajax.prototype._loadDataStandard = function (inPosition, columnsChanged) {
		var _this32 = this;

		return new Promise(function (resolve, reject) {
			_this32.sendRequest(inPosition).then(function (data) {
				_this32.table.rowManager.setData(data, inPosition, columnsChanged).then(function () {
					resolve();
				}).catch(function (e) {
					reject(e);
				});
			}).catch(function (e) {
				reject(e);
			});
		});
	};

	Ajax.prototype.generateParamsList = function (data, prefix) {
		var self = this,
		    output = [];

		prefix = prefix || "";

		if (Array.isArray(data)) {
			data.forEach(function (item, i) {
				output = output.concat(self.generateParamsList(item, prefix ? prefix + "[" + i + "]" : i));
			});
		} else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === "object") {
			for (var key in data) {
				output = output.concat(self.generateParamsList(data[key], prefix ? prefix + "[" + key + "]" : key));
			}
		} else {
			output.push({ key: prefix, value: data });
		}

		return output;
	};

	Ajax.prototype.serializeParams = function (params) {
		var output = this.generateParamsList(params),
		    encoded = [];

		output.forEach(function (item) {
			encoded.push(encodeURIComponent(item.key) + "=" + encodeURIComponent(item.value));
		});

		return encoded.join("&");
	};

	//send ajax request
	Ajax.prototype.sendRequest = function (silent) {
		var _this33 = this;

		var self = this,
		    url = self.url,
		    requestNo,
		    esc,
		    query;

		self.requestOrder++;
		requestNo = self.requestOrder;

		self._loadDefaultConfig();

		return new Promise(function (resolve, reject) {
			if (self.table.options.ajaxRequesting.call(_this33.table, self.url, self.params) !== false) {

				self.loading = true;

				if (!silent) {
					self.showLoader();
				}

				_this33.loaderPromise(url, self.config, self.params).then(function (data) {
					if (requestNo === self.requestOrder) {
						if (self.table.options.ajaxResponse) {
							data = self.table.options.ajaxResponse.call(self.table, self.url, self.params, data);
						}
						resolve(data);

						self.hideLoader();
						self.loading = false;
					} else {
						console.warn("Ajax Response Blocked - An active ajax request was blocked by an attempt to change table data while the request was being made");
					}
				}).catch(function (error) {
					console.error("Ajax Load Error: ", error);
					self.table.options.ajaxError.call(self.table, error);

					self.showError();

					setTimeout(function () {
						self.hideLoader();
					}, 3000);

					self.loading = false;

					reject();
				});
			} else {
				reject();
			}
		});
	};

	Ajax.prototype.showLoader = function () {
		var shouldLoad = typeof this.table.options.ajaxLoader === "function" ? this.table.options.ajaxLoader() : this.table.options.ajaxLoader;

		if (shouldLoad) {

			this.hideLoader();

			while (this.msgElement.firstChild) {
				this.msgElement.removeChild(this.msgElement.firstChild);
			}this.msgElement.classList.remove("tabulator-error");
			this.msgElement.classList.add("tabulator-loading");

			if (this.loadingElement) {
				this.msgElement.appendChild(this.loadingElement);
			} else {
				this.msgElement.innerHTML = this.table.modules.localize.getText("ajax|loading");
			}

			this.table.element.appendChild(this.loaderElement);
		}
	};

	Ajax.prototype.showError = function () {
		this.hideLoader();

		while (this.msgElement.firstChild) {
			this.msgElement.removeChild(this.msgElement.firstChild);
		}this.msgElement.classList.remove("tabulator-loading");
		this.msgElement.classList.add("tabulator-error");

		if (this.errorElement) {
			this.msgElement.appendChild(this.errorElement);
		} else {
			this.msgElement.innerHTML = this.table.modules.localize.getText("ajax|error");
		}

		this.table.element.appendChild(this.loaderElement);
	};

	Ajax.prototype.hideLoader = function () {
		if (this.loaderElement.parentNode) {
			this.loaderElement.parentNode.removeChild(this.loaderElement);
		}
	};

	//default ajax config object
	Ajax.prototype.defaultConfig = {
		method: "GET"
	};

	Ajax.prototype.defaultURLGenerator = function (url, config, params) {

		if (url) {
			if (params && Object.keys(params).length) {
				if (!config.method || config.method.toLowerCase() == "get") {
					config.method = "get";

					url += (url.includes("?") ? "&" : "?") + this.serializeParams(params);
				}
			}
		}

		return url;
	};

	Ajax.prototype.defaultLoaderPromise = function (url, config, params) {
		var self = this,
		    contentType;

		return new Promise(function (resolve, reject) {

			//set url
			url = self.urlGenerator(url, config, params);

			//set body content if not GET request
			if (config.method.toUpperCase() != "GET") {
				contentType = _typeof(self.table.options.ajaxContentType) === "object" ? self.table.options.ajaxContentType : self.contentTypeFormatters[self.table.options.ajaxContentType];
				if (contentType) {

					for (var key in contentType.headers) {
						if (!config.headers) {
							config.headers = {};
						}

						if (typeof config.headers[key] === "undefined") {
							config.headers[key] = contentType.headers[key];
						}
					}

					config.body = contentType.body.call(self, url, config, params);
				} else {
					console.warn("Ajax Error - Invalid ajaxContentType value:", self.table.options.ajaxContentType);
				}
			}

			if (url) {

				//configure headers
				if (typeof config.headers === "undefined") {
					config.headers = {};
				}

				if (typeof config.headers.Accept === "undefined") {
					config.headers.Accept = "application/json";
				}

				if (typeof config.headers["X-Requested-With"] === "undefined") {
					config.headers["X-Requested-With"] = "XMLHttpRequest";
				}

				if (typeof config.mode === "undefined") {
					config.mode = "cors";
				}

				if (config.mode == "cors") {

					if (typeof config.headers["Access-Control-Allow-Origin"] === "undefined") {
						config.headers["Access-Control-Allow-Origin"] = window.location.origin;
					}

					if (typeof config.credentials === "undefined") {
						config.credentials = 'same-origin';
					}
				} else {
					if (typeof config.credentials === "undefined") {
						config.credentials = 'include';
					}
				}

				//send request
				fetch(url, config).then(function (response) {
					if (response.ok) {
						response.json().then(function (data) {
							resolve(data);
						}).catch(function (error) {
							reject(error);
							console.warn("Ajax Load Error - Invalid JSON returned", error);
						});
					} else {
						console.error("Ajax Load Error - Connection Error: " + response.status, response.statusText);
						reject(response);
					}
				}).catch(function (error) {
					console.error("Ajax Load Error - Connection Error: ", error);
					reject(error);
				});
			} else {
				console.warn("Ajax Load Error - No URL Set");
				resolve([]);
			}
		});
	};

	Ajax.prototype.contentTypeFormatters = {
		"json": {
			headers: {
				'Content-Type': 'application/json'
			},
			body: function body(url, config, params) {
				return JSON.stringify(params);
			}
		},
		"form": {
			headers: {},
			body: function body(url, config, params) {
				var output = this.generateParamsList(params),
				    form = new FormData();

				output.forEach(function (item) {
					form.append(item.key, item.value);
				});

				return form;
			}
		}
	};

	Tabulator.prototype.registerModule("ajax", Ajax);

	var ColumnCalcs = function ColumnCalcs(table) {
		this.table = table; //hold Tabulator object
		this.topCalcs = [];
		this.botCalcs = [];
		this.genColumn = false;
		this.topElement = this.createElement();
		this.botElement = this.createElement();
		this.topRow = false;
		this.botRow = false;
		this.topInitialized = false;
		this.botInitialized = false;

		this.initialize();
	};

	ColumnCalcs.prototype.createElement = function () {
		var el = document.createElement("div");
		el.classList.add("tabulator-calcs-holder");
		return el;
	};

	ColumnCalcs.prototype.initialize = function () {
		this.genColumn = new Column({ field: "value" }, this);
	};

	//dummy functions to handle being mock column manager
	ColumnCalcs.prototype.registerColumnField = function () {};

	//initialize column calcs
	ColumnCalcs.prototype.initializeColumn = function (column) {
		var def = column.definition;

		var config = {
			topCalcParams: def.topCalcParams || {},
			botCalcParams: def.bottomCalcParams || {}
		};

		if (def.topCalc) {

			switch (_typeof(def.topCalc)) {
				case "string":
					if (this.calculations[def.topCalc]) {
						config.topCalc = this.calculations[def.topCalc];
					} else {
						console.warn("Column Calc Error - No such calculation found, ignoring: ", def.topCalc);
					}
					break;

				case "function":
					config.topCalc = def.topCalc;
					break;

			}

			if (config.topCalc) {
				column.modules.columnCalcs = config;
				this.topCalcs.push(column);

				if (this.table.options.columnCalcs != "group") {
					this.initializeTopRow();
				}
			}
		}

		if (def.bottomCalc) {
			switch (_typeof(def.bottomCalc)) {
				case "string":
					if (this.calculations[def.bottomCalc]) {
						config.botCalc = this.calculations[def.bottomCalc];
					} else {
						console.warn("Column Calc Error - No such calculation found, ignoring: ", def.bottomCalc);
					}
					break;

				case "function":
					config.botCalc = def.bottomCalc;
					break;

			}

			if (config.botCalc) {
				column.modules.columnCalcs = config;
				this.botCalcs.push(column);

				if (this.table.options.columnCalcs != "group") {
					this.initializeBottomRow();
				}
			}
		}
	};

	ColumnCalcs.prototype.removeCalcs = function () {
		var changed = false;

		if (this.topInitialized) {
			this.topInitialized = false;
			this.topElement.parentNode.removeChild(this.topElement);
			changed = true;
		}

		if (this.botInitialized) {
			this.botInitialized = false;
			this.table.footerManager.remove(this.botElement);
			changed = true;
		}

		if (changed) {
			this.table.rowManager.adjustTableSize();
		}
	};

	ColumnCalcs.prototype.initializeTopRow = function () {
		if (!this.topInitialized) {
			// this.table.columnManager.headersElement.after(this.topElement);
			this.table.columnManager.getElement().insertBefore(this.topElement, this.table.columnManager.headersElement.nextSibling);
			this.topInitialized = true;
		}
	};

	ColumnCalcs.prototype.initializeBottomRow = function () {
		if (!this.botInitialized) {
			this.table.footerManager.prepend(this.botElement);
			this.botInitialized = true;
		}
	};

	ColumnCalcs.prototype.scrollHorizontal = function (left) {
		var hozAdjust = 0,
		    scrollWidth = this.table.columnManager.getElement().scrollWidth - this.table.element.clientWidth;

		if (this.botInitialized) {
			this.botRow.getElement().style.marginLeft = -left + "px";
		}
	};

	ColumnCalcs.prototype.recalc = function (rows) {
		var data, row;

		if (this.topInitialized || this.botInitialized) {
			data = this.rowsToData(rows);

			if (this.topInitialized) {
				if (this.topRow) {
					this.topRow.deleteCells();
				}

				row = this.generateRow("top", this.rowsToData(rows));
				this.topRow = row;
				while (this.topElement.firstChild) {
					this.topElement.removeChild(this.topElement.firstChild);
				}this.topElement.appendChild(row.getElement());
				row.initialize(true);
			}

			if (this.botInitialized) {
				if (this.botRow) {
					this.botRow.deleteCells();
				}

				row = this.generateRow("bottom", this.rowsToData(rows));
				this.botRow = row;
				while (this.botElement.firstChild) {
					this.botElement.removeChild(this.botElement.firstChild);
				}this.botElement.appendChild(row.getElement());
				row.initialize(true);
			}

			this.table.rowManager.adjustTableSize();

			//set resizable handles
			if (this.table.modExists("frozenColumns")) {
				this.table.modules.frozenColumns.layout();
			}
		}
	};

	ColumnCalcs.prototype.recalcRowGroup = function (row) {
		this.recalcGroup(this.table.modules.groupRows.getRowGroup(row));
	};

	ColumnCalcs.prototype.recalcAll = function () {
		var _this34 = this;

		if (this.topCalcs.length || this.botCalcs.length) {
			if (this.table.options.columnCalcs !== "group") {
				this.recalc(this.table.rowManager.activeRows);
			}

			if (this.table.options.groupBy && this.table.options.columnCalcs !== "table") {

				var groups = table.modules.groupRows.getChildGroups();

				groups.forEach(function (group) {
					_this34.recalcGroup(group);
				});
			}
		}
	};

	ColumnCalcs.prototype.recalcGroup = function (group) {
		var data, rowData;

		if (group) {
			if (group.calcs) {
				if (group.calcs.bottom) {
					data = this.rowsToData(group.rows);
					rowData = this.generateRowData("bottom", data);

					group.calcs.bottom.updateData(rowData);
					group.calcs.bottom.reinitialize();
				}

				if (group.calcs.top) {
					data = this.rowsToData(group.rows);
					rowData = this.generateRowData("top", data);

					group.calcs.top.updateData(rowData);
					group.calcs.top.reinitialize();
				}
			}
		}
	};

	//generate top stats row
	ColumnCalcs.prototype.generateTopRow = function (rows) {
		return this.generateRow("top", this.rowsToData(rows));
	};
	//generate bottom stats row
	ColumnCalcs.prototype.generateBottomRow = function (rows) {
		return this.generateRow("bottom", this.rowsToData(rows));
	};

	ColumnCalcs.prototype.rowsToData = function (rows) {
		var _this35 = this;

		var data = [];

		rows.forEach(function (row) {
			data.push(row.getData());

			if (_this35.table.options.dataTree && _this35.table.options.dataTreeChildColumnCalcs) {
				if (row.modules.dataTree.open) {
					var children = _this35.rowsToData(_this35.table.modules.dataTree.getFilteredTreeChildren(row));
					data = data.concat(children);
				}
			}
		});

		return data;
	};

	//generate stats row
	ColumnCalcs.prototype.generateRow = function (pos, data) {
		var self = this,
		    rowData = this.generateRowData(pos, data),
		    row;

		if (self.table.modExists("mutator")) {
			self.table.modules.mutator.disable();
		}

		row = new Row(rowData, this, "calc");

		if (self.table.modExists("mutator")) {
			self.table.modules.mutator.enable();
		}

		row.getElement().classList.add("tabulator-calcs", "tabulator-calcs-" + pos);

		row.generateCells = function () {

			var cells = [];

			self.table.columnManager.columnsByIndex.forEach(function (column) {

				//set field name of mock column
				self.genColumn.setField(column.getField());
				self.genColumn.hozAlign = column.hozAlign;

				if (column.definition[pos + "CalcFormatter"] && self.table.modExists("format")) {

					self.genColumn.modules.format = {
						formatter: self.table.modules.format.getFormatter(column.definition[pos + "CalcFormatter"]),
						params: column.definition[pos + "CalcFormatterParams"]
					};
				} else {
					self.genColumn.modules.format = {
						formatter: self.table.modules.format.getFormatter("plaintext"),
						params: {}
					};
				}

				//ensure css class defintion is replicated to calculation cell
				self.genColumn.definition.cssClass = column.definition.cssClass;

				//generate cell and assign to correct column
				var cell = new Cell(self.genColumn, row);
				cell.column = column;
				cell.setWidth();

				column.cells.push(cell);
				cells.push(cell);

				if (!column.visible) {
					cell.hide();
				}
			});

			this.cells = cells;
		};

		return row;
	};

	//generate stats row
	ColumnCalcs.prototype.generateRowData = function (pos, data) {
		var rowData = {},
		    calcs = pos == "top" ? this.topCalcs : this.botCalcs,
		    type = pos == "top" ? "topCalc" : "botCalc",
		    params,
		    paramKey;

		calcs.forEach(function (column) {
			var values = [];

			if (column.modules.columnCalcs && column.modules.columnCalcs[type]) {
				data.forEach(function (item) {
					values.push(column.getFieldValue(item));
				});

				paramKey = type + "Params";
				params = typeof column.modules.columnCalcs[paramKey] === "function" ? column.modules.columnCalcs[paramKey](values, data) : column.modules.columnCalcs[paramKey];

				column.setFieldValue(rowData, column.modules.columnCalcs[type](values, data, params));
			}
		});

		return rowData;
	};

	ColumnCalcs.prototype.hasTopCalcs = function () {
		return !!this.topCalcs.length;
	};

	ColumnCalcs.prototype.hasBottomCalcs = function () {
		return !!this.botCalcs.length;
	};

	//handle table redraw
	ColumnCalcs.prototype.redraw = function () {
		if (this.topRow) {
			this.topRow.normalizeHeight(true);
		}
		if (this.botRow) {
			this.botRow.normalizeHeight(true);
		}
	};

	//return the calculated
	ColumnCalcs.prototype.getResults = function () {
		var self = this,
		    results = {},
		    groups;

		if (this.table.options.groupBy && this.table.modExists("groupRows")) {
			groups = this.table.modules.groupRows.getGroups(true);

			groups.forEach(function (group) {
				results[group.getKey()] = self.getGroupResults(group);
			});
		} else {
			results = {
				top: this.topRow ? this.topRow.getData() : {},
				bottom: this.botRow ? this.botRow.getData() : {}
			};
		}

		return results;
	};

	//get results from a group
	ColumnCalcs.prototype.getGroupResults = function (group) {
		var self = this,
		    groupObj = group._getSelf(),
		    subGroups = group.getSubGroups(),
		    subGroupResults = {},
		    results = {};

		subGroups.forEach(function (subgroup) {
			subGroupResults[subgroup.getKey()] = self.getGroupResults(subgroup);
		});

		results = {
			top: groupObj.calcs.top ? groupObj.calcs.top.getData() : {},
			bottom: groupObj.calcs.bottom ? groupObj.calcs.bottom.getData() : {},
			groups: subGroupResults
		};

		return results;
	};

	//default calculations
	ColumnCalcs.prototype.calculations = {
		"avg": function avg(values, data, calcParams) {
			var output = 0,
			    precision = typeof calcParams.precision !== "undefined" ? calcParams.precision : 2;

			if (values.length) {
				output = values.reduce(function (sum, value) {
					value = Number(value);
					return sum + value;
				});

				output = output / values.length;

				output = precision !== false ? output.toFixed(precision) : output;
			}

			return parseFloat(output).toString();
		},
		"max": function max(values, data, calcParams) {
			var output = null,
			    precision = typeof calcParams.precision !== "undefined" ? calcParams.precision : false;

			values.forEach(function (value) {

				value = Number(value);

				if (value > output || output === null) {
					output = value;
				}
			});

			return output !== null ? precision !== false ? output.toFixed(precision) : output : "";
		},
		"min": function min(values, data, calcParams) {
			var output = null,
			    precision = typeof calcParams.precision !== "undefined" ? calcParams.precision : false;

			values.forEach(function (value) {

				value = Number(value);

				if (value < output || output === null) {
					output = value;
				}
			});

			return output !== null ? precision !== false ? output.toFixed(precision) : output : "";
		},
		"sum": function sum(values, data, calcParams) {
			var output = 0,
			    precision = typeof calcParams.precision !== "undefined" ? calcParams.precision : false;

			if (values.length) {
				values.forEach(function (value) {
					value = Number(value);

					output += !isNaN(value) ? Number(value) : 0;
				});
			}

			return precision !== false ? output.toFixed(precision) : output;
		},
		"concat": function concat(values, data, calcParams) {
			var output = 0;

			if (values.length) {
				output = values.reduce(function (sum, value) {
					return String(sum) + String(value);
				});
			}

			return output;
		},
		"count": function count(values, data, calcParams) {
			var output = 0;

			if (values.length) {
				values.forEach(function (value) {
					if (value) {
						output++;
					}
				});
			}

			return output;
		}
	};

	Tabulator.prototype.registerModule("columnCalcs", ColumnCalcs);

	var Clipboard = function Clipboard(table) {
		this.table = table;
		this.mode = true;

		this.pasteParser = function () {};
		this.pasteAction = function () {};
		this.customSelection = false;
		this.rowRange = false;
		this.blocked = true; //block copy actions not originating from this command
	};

	Clipboard.prototype.initialize = function () {
		var _this36 = this;

		this.mode = this.table.options.clipboard;

		this.rowRange = this.table.options.clipboardCopyRowRange;

		if (this.mode === true || this.mode === "copy") {
			this.table.element.addEventListener("copy", function (e) {
				var plain, html;

				if (!_this36.blocked) {
					e.preventDefault();

					if (_this36.customSelection) {
						plain = _this36.customSelection;

						if (_this36.table.options.clipboardCopyFormatter) {
							plain = _this36.table.options.clipboardCopyFormatter("plain", plain);
						}
					} else {
						html = _this36.table.modules.export.getHtml(_this36.rowRange, _this36.table.options.clipboardCopyStyled, _this36.table.options.clipboardCopyConfig, "clipboard");
						plain = html ? _this36.generatePlainContent(html) : "";

						if (_this36.table.options.clipboardCopyFormatter) {
							plain = _this36.table.options.clipboardCopyFormatter("plain", plain);
							html = _this36.table.options.clipboardCopyFormatter("html", html);
						}
					}

					if (window.clipboardData && window.clipboardData.setData) {
						window.clipboardData.setData('Text', plain);
					} else if (e.clipboardData && e.clipboardData.setData) {
						e.clipboardData.setData('text/plain', plain);
						if (html) {
							e.clipboardData.setData('text/html', html);
						}
					} else if (e.originalEvent && e.originalEvent.clipboardData.setData) {
						e.originalEvent.clipboardData.setData('text/plain', plain);
						if (html) {
							e.originalEvent.clipboardData.setData('text/html', html);
						}
					}

					_this36.table.options.clipboardCopied.call(_this36.table, plain, html);

					_this36.reset();
				}
			});
		}

		if (this.mode === true || this.mode === "paste") {
			this.table.element.addEventListener("paste", function (e) {
				_this36.paste(e);
			});
		}

		this.setPasteParser(this.table.options.clipboardPasteParser);
		this.setPasteAction(this.table.options.clipboardPasteAction);
	};

	Clipboard.prototype.reset = function () {
		this.blocked = false;
		this.originalSelectionText = "";
	};

	Clipboard.prototype.generatePlainContent = function (html) {
		var output = [];

		var holder = document.createElement("div");
		holder.innerHTML = html;

		var table = holder.getElementsByTagName("table")[0];
		var rows = Array.prototype.slice.call(table.getElementsByTagName("tr"));

		rows.forEach(function (row) {
			var rowData = [];

			var headers = Array.prototype.slice.call(row.getElementsByTagName("th"));
			var cells = Array.prototype.slice.call(row.getElementsByTagName("td"));

			cells = cells.concat(headers);

			cells.forEach(function (cell) {
				var val = cell.innerHTML;

				val = val == "&nbsp;" ? "" : val;

				rowData.push(val);
			});

			output.push(rowData.join("\t"));
		});

		return output.join("\n");
	};

	Clipboard.prototype.copy = function (range, internal) {
		var range, sel, textRange;
		this.blocked = false;
		this.customSelection = false;

		if (this.mode === true || this.mode === "copy") {

			this.rowRange = range || this.table.options.clipboardCopyRowRange;

			if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
				range = document.createRange();
				range.selectNodeContents(this.table.element);
				sel = window.getSelection();

				if (sel.toString() && internal) {
					this.customSelection = sel.toString();
				}

				sel.removeAllRanges();
				sel.addRange(range);
			} else if (typeof document.selection != "undefined" && typeof document.body.createTextRange != "undefined") {
				textRange = document.body.createTextRange();
				textRange.moveToElementText(this.table.element);
				textRange.select();
			}

			document.execCommand('copy');

			if (sel) {
				sel.removeAllRanges();
			}
		}
	};

	//PASTE EVENT HANDLING

	Clipboard.prototype.setPasteAction = function (action) {

		switch (typeof action === 'undefined' ? 'undefined' : _typeof(action)) {
			case "string":
				this.pasteAction = this.pasteActions[action];

				if (!this.pasteAction) {
					console.warn("Clipboard Error - No such paste action found:", action);
				}
				break;

			case "function":
				this.pasteAction = action;
				break;
		}
	};

	Clipboard.prototype.setPasteParser = function (parser) {
		switch (typeof parser === 'undefined' ? 'undefined' : _typeof(parser)) {
			case "string":
				this.pasteParser = this.pasteParsers[parser];

				if (!this.pasteParser) {
					console.warn("Clipboard Error - No such paste parser found:", parser);
				}
				break;

			case "function":
				this.pasteParser = parser;
				break;
		}
	};

	Clipboard.prototype.paste = function (e) {
		var data, rowData, rows;

		if (this.checkPaseOrigin(e)) {

			data = this.getPasteData(e);

			rowData = this.pasteParser.call(this, data);

			if (rowData) {
				e.preventDefault();

				if (this.table.modExists("mutator")) {
					rowData = this.mutateData(rowData);
				}

				rows = this.pasteAction.call(this, rowData);
				this.table.options.clipboardPasted.call(this.table, data, rowData, rows);
			} else {
				this.table.options.clipboardPasteError.call(this.table, data);
			}
		}
	};

	Clipboard.prototype.mutateData = function (data) {
		var self = this,
		    output = [];

		if (Array.isArray(data)) {
			data.forEach(function (row) {
				output.push(self.table.modules.mutator.transformRow(row, "clipboard"));
			});
		} else {
			output = data;
		}

		return output;
	};

	Clipboard.prototype.checkPaseOrigin = function (e) {
		var valid = true;

		if (e.target.tagName != "DIV" || this.table.modules.edit.currentCell) {
			valid = false;
		}

		return valid;
	};

	Clipboard.prototype.getPasteData = function (e) {
		var data;

		if (window.clipboardData && window.clipboardData.getData) {
			data = window.clipboardData.getData('Text');
		} else if (e.clipboardData && e.clipboardData.getData) {
			data = e.clipboardData.getData('text/plain');
		} else if (e.originalEvent && e.originalEvent.clipboardData.getData) {
			data = e.originalEvent.clipboardData.getData('text/plain');
		}

		return data;
	};

	Clipboard.prototype.pasteParsers = {
		table: function table(clipboard) {
			var data = [],
			    success = false,
			    headerFindSuccess = true,
			    columns = this.table.columnManager.columns,
			    columnMap = [],
			    rows = [];

			//get data from clipboard into array of columns and rows.
			clipboard = clipboard.split("\n");

			clipboard.forEach(function (row) {
				data.push(row.split("\t"));
			});

			if (data.length && !(data.length === 1 && data[0].length < 2)) {
				success = true;

				//check if headers are present by title
				data[0].forEach(function (value) {
					var column = columns.find(function (column) {
						return value && column.definition.title && value.trim() && column.definition.title.trim() === value.trim();
					});

					if (column) {
						columnMap.push(column);
					} else {
						headerFindSuccess = false;
					}
				});

				//check if column headers are present by field
				if (!headerFindSuccess) {
					headerFindSuccess = true;
					columnMap = [];

					data[0].forEach(function (value) {
						var column = columns.find(function (column) {
							return value && column.field && value.trim() && column.field.trim() === value.trim();
						});

						if (column) {
							columnMap.push(column);
						} else {
							headerFindSuccess = false;
						}
					});

					if (!headerFindSuccess) {
						columnMap = this.table.columnManager.columnsByIndex;
					}
				}

				//remove header row if found
				if (headerFindSuccess) {
					data.shift();
				}

				data.forEach(function (item) {
					var row = {};

					item.forEach(function (value, i) {
						if (columnMap[i]) {
							row[columnMap[i].field] = value;
						}
					});

					rows.push(row);
				});

				return rows;
			} else {
				return false;
			}
		}
	};

	Clipboard.prototype.pasteActions = {
		replace: function replace(rows) {
			return this.table.setData(rows);
		},
		update: function update(rows) {
			return this.table.updateOrAddData(rows);
		},
		insert: function insert(rows) {
			return this.table.addData(rows);
		}
	};

	Tabulator.prototype.registerModule("clipboard", Clipboard);

	var DataTree = function DataTree(table) {
		this.table = table;
		this.indent = 10;
		this.field = "";
		this.collapseEl = null;
		this.expandEl = null;
		this.branchEl = null;
		this.elementField = false;

		this.startOpen = function () {};

		this.displayIndex = 0;
	};

	DataTree.prototype.initialize = function () {
		var dummyEl = null,
		    firstCol = this.table.columnManager.getFirstVisibileColumn(),
		    options = this.table.options;

		this.field = options.dataTreeChildField;
		this.indent = options.dataTreeChildIndent;
		this.elementField = options.dataTreeElementColumn || (firstCol ? firstCol.field : false);

		if (options.dataTreeBranchElement) {

			if (options.dataTreeBranchElement === true) {
				this.branchEl = document.createElement("div");
				this.branchEl.classList.add("tabulator-data-tree-branch");
			} else {
				if (typeof options.dataTreeBranchElement === "string") {
					dummyEl = document.createElement("div");
					dummyEl.innerHTML = options.dataTreeBranchElement;
					this.branchEl = dummyEl.firstChild;
				} else {
					this.branchEl = options.dataTreeBranchElement;
				}
			}
		}

		if (options.dataTreeCollapseElement) {
			if (typeof options.dataTreeCollapseElement === "string") {
				dummyEl = document.createElement("div");
				dummyEl.innerHTML = options.dataTreeCollapseElement;
				this.collapseEl = dummyEl.firstChild;
			} else {
				this.collapseEl = options.dataTreeCollapseElement;
			}
		} else {
			this.collapseEl = document.createElement("div");
			this.collapseEl.classList.add("tabulator-data-tree-control");
			this.collapseEl.tabIndex = 0;
			this.collapseEl.innerHTML = "<div class='tabulator-data-tree-control-collapse'></div>";
		}

		if (options.dataTreeExpandElement) {
			if (typeof options.dataTreeExpandElement === "string") {
				dummyEl = document.createElement("div");
				dummyEl.innerHTML = options.dataTreeExpandElement;
				this.expandEl = dummyEl.firstChild;
			} else {
				this.expandEl = options.dataTreeExpandElement;
			}
		} else {
			this.expandEl = document.createElement("div");
			this.expandEl.classList.add("tabulator-data-tree-control");
			this.expandEl.tabIndex = 0;
			this.expandEl.innerHTML = "<div class='tabulator-data-tree-control-expand'></div>";
		}

		switch (_typeof(options.dataTreeStartExpanded)) {
			case "boolean":
				this.startOpen = function (row, index) {
					return options.dataTreeStartExpanded;
				};
				break;

			case "function":
				this.startOpen = options.dataTreeStartExpanded;
				break;

			default:
				this.startOpen = function (row, index) {
					return options.dataTreeStartExpanded[index];
				};
				break;
		}
	};

	DataTree.prototype.initializeRow = function (row) {
		var childArray = row.getData()[this.field];
		var isArray = Array.isArray(childArray);

		var children = isArray || !isArray && (typeof childArray === 'undefined' ? 'undefined' : _typeof(childArray)) === "object" && childArray !== null;

		if (!children && row.modules.dataTree && row.modules.dataTree.branchEl) {
			row.modules.dataTree.branchEl.parentNode.removeChild(row.modules.dataTree.branchEl);
		}

		if (!children && row.modules.dataTree && row.modules.dataTree.controlEl) {
			row.modules.dataTree.controlEl.parentNode.removeChild(row.modules.dataTree.controlEl);
		}

		row.modules.dataTree = {
			index: 0,
			open: children ? row.modules.dataTree ? row.modules.dataTree.open : this.startOpen(row.getComponent(), 0) : false,
			controlEl: row.modules.dataTree && children ? row.modules.dataTree.controlEl : false,
			branchEl: row.modules.dataTree && children ? row.modules.dataTree.branchEl : false,
			parent: false,
			children: children
		};
	};

	DataTree.prototype.layoutRow = function (row) {
		var cell = this.elementField ? row.getCell(this.elementField) : row.getCells()[0],
		    el = cell.getElement(),
		    config = row.modules.dataTree;

		if (config.branchEl) {
			config.branchEl.parentNode.removeChild(config.branchEl);
			config.branchEl = false;
		}

		if (config.controlEl) {
			config.controlEl.parentNode.removeChild(config.controlEl);
			config.controlEl = false;
		}

		this.generateControlElement(row, el);

		row.element.classList.add("tabulator-tree-level-" + config.index);

		if (config.index) {
			if (this.branchEl) {
				config.branchEl = this.branchEl.cloneNode(true);
				el.insertBefore(config.branchEl, el.firstChild);
				config.branchEl.style.marginLeft = (config.branchEl.offsetWidth + config.branchEl.style.marginRight) * (config.index - 1) + config.index * this.indent + "px";
			} else {
				el.style.paddingLeft = parseInt(window.getComputedStyle(el, null).getPropertyValue('padding-left')) + config.index * this.indent + "px";
			}
		}
	};

	DataTree.prototype.generateControlElement = function (row, el) {
		var _this37 = this;

		var config = row.modules.dataTree,
		    el = el || row.getCells()[0].getElement(),
		    oldControl = config.controlEl;

		if (config.children !== false) {

			if (config.open) {
				config.controlEl = this.collapseEl.cloneNode(true);
				config.controlEl.addEventListener("click", function (e) {
					e.stopPropagation();
					_this37.collapseRow(row);
				});
			} else {
				config.controlEl = this.expandEl.cloneNode(true);
				config.controlEl.addEventListener("click", function (e) {
					e.stopPropagation();
					_this37.expandRow(row);
				});
			}

			config.controlEl.addEventListener("mousedown", function (e) {
				e.stopPropagation();
			});

			if (oldControl && oldControl.parentNode === el) {
				oldControl.parentNode.replaceChild(config.controlEl, oldControl);
			} else {
				el.insertBefore(config.controlEl, el.firstChild);
			}
		}
	};

	DataTree.prototype.setDisplayIndex = function (index) {
		this.displayIndex = index;
	};

	DataTree.prototype.getDisplayIndex = function () {
		return this.displayIndex;
	};

	DataTree.prototype.getRows = function (rows) {
		var _this38 = this;

		var output = [];

		rows.forEach(function (row, i) {
			var config, children;

			output.push(row);

			if (row instanceof Row) {

				config = row.modules.dataTree.children;

				if (!config.index && config.children !== false) {
					children = _this38.getChildren(row);

					children.forEach(function (child) {
						output.push(child);
					});
				}
			}
		});

		return output;
	};

	DataTree.prototype.getChildren = function (row) {
		var _this39 = this;

		var config = row.modules.dataTree,
		    children = [],
		    output = [];

		if (config.children !== false && config.open) {
			if (!Array.isArray(config.children)) {
				config.children = this.generateChildren(row);
			}

			if (this.table.modExists("filter")) {
				children = this.table.modules.filter.filter(config.children);
			} else {
				children = config.children;
			}

			if (this.table.modExists("sort")) {
				this.table.modules.sort.sort(children);
			}

			children.forEach(function (child) {
				output.push(child);

				var subChildren = _this39.getChildren(child);

				subChildren.forEach(function (sub) {
					output.push(sub);
				});
			});
		}

		return output;
	};

	DataTree.prototype.generateChildren = function (row) {
		var _this40 = this;

		var children = [];

		var childArray = row.getData()[this.field];

		if (!Array.isArray(childArray)) {
			childArray = [childArray];
		}

		childArray.forEach(function (childData) {
			var childRow = new Row(childData || {}, _this40.table.rowManager);
			childRow.modules.dataTree.index = row.modules.dataTree.index + 1;
			childRow.modules.dataTree.parent = row;
			if (childRow.modules.dataTree.children) {
				childRow.modules.dataTree.open = _this40.startOpen(childRow.getComponent(), childRow.modules.dataTree.index);
			}
			children.push(childRow);
		});

		return children;
	};

	DataTree.prototype.expandRow = function (row, silent) {
		var config = row.modules.dataTree;

		if (config.children !== false) {
			config.open = true;

			row.reinitialize();

			this.table.rowManager.refreshActiveData("tree", false, true);

			this.table.options.dataTreeRowExpanded(row.getComponent(), row.modules.dataTree.index);
		}
	};

	DataTree.prototype.collapseRow = function (row) {
		var config = row.modules.dataTree;

		if (config.children !== false) {
			config.open = false;

			row.reinitialize();

			this.table.rowManager.refreshActiveData("tree", false, true);

			this.table.options.dataTreeRowCollapsed(row.getComponent(), row.modules.dataTree.index);
		}
	};

	DataTree.prototype.toggleRow = function (row) {
		var config = row.modules.dataTree;

		if (config.children !== false) {
			if (config.open) {
				this.collapseRow(row);
			} else {
				this.expandRow(row);
			}
		}
	};

	DataTree.prototype.getTreeParent = function (row) {
		return row.modules.dataTree.parent ? row.modules.dataTree.parent.getComponent() : false;
	};

	DataTree.prototype.getFilteredTreeChildren = function (row) {
		var config = row.modules.dataTree,
		    output = [],
		    children;

		if (config.children) {

			if (!Array.isArray(config.children)) {
				config.children = this.generateChildren(row);
			}

			if (this.table.modExists("filter")) {
				children = this.table.modules.filter.filter(config.children);
			} else {
				children = config.children;
			}

			children.forEach(function (childRow) {
				if (childRow instanceof Row) {
					output.push(childRow);
				}
			});
		}

		return output;
	};

	DataTree.prototype.getTreeChildren = function (row) {
		var config = row.modules.dataTree,
		    output = [];

		if (config.children) {

			if (!Array.isArray(config.children)) {
				config.children = this.generateChildren(row);
			}

			config.children.forEach(function (childRow) {
				if (childRow instanceof Row) {
					output.push(childRow.getComponent());
				}
			});
		}

		return output;
	};

	DataTree.prototype.checkForRestyle = function (cell) {
		if (!cell.row.cells.indexOf(cell)) {
			if (cell.row.modules.dataTree.children !== false) {
				cell.row.reinitialize();
			}
		}
	};

	DataTree.prototype.getChildField = function () {
		return this.field;
	};

	DataTree.prototype.redrawNeeded = function (data) {
		return (this.field ? typeof data[this.field] !== "undefined" : false) || (this.elementField ? typeof data[this.elementField] !== "undefined" : false);
	};

	Tabulator.prototype.registerModule("dataTree", DataTree);

	var Download = function Download(table) {
		this.table = table; //hold Tabulator object
		this.fields = {}; //hold filed multi dimension arrays
		this.columnsByIndex = []; //hold columns in their order in the table
		this.columnsByField = {}; //hold columns with lookup by field name
		this.config = {};
		this.active = false;
	};

	//trigger file download
	Download.prototype.download = function (type, filename, options, active, interceptCallback) {
		var self = this,
		    downloadFunc = false;
		this.processConfig();
		this.active = active;

		function buildLink(data, mime) {
			if (interceptCallback) {
				if (interceptCallback === true) {
					self.triggerDownload(data, mime, type, filename, true);
				} else {
					interceptCallback(data);
				}
			} else {
				self.triggerDownload(data, mime, type, filename);
			}
		}

		if (typeof type == "function") {
			downloadFunc = type;
		} else {
			if (self.downloaders[type]) {
				downloadFunc = self.downloaders[type];
			} else {
				console.warn("Download Error - No such download type found: ", type);
			}
		}

		this.processColumns();

		if (downloadFunc) {
			downloadFunc.call(this, self.processDefinitions(), self.processData(active || "active"), options || {}, buildLink, this.config);
		}
	};

	Download.prototype.processConfig = function () {
		var config = { //download config
			columnGroups: true,
			rowGroups: true,
			columnCalcs: true,
			dataTree: true
		};

		if (this.table.options.downloadConfig) {
			for (var key in this.table.options.downloadConfig) {
				config[key] = this.table.options.downloadConfig[key];
			}
		}

		this.config.rowGroups = config.rowGroups && this.table.options.groupBy && this.table.modExists("groupRows");

		if (config.columnGroups && this.table.columnManager.columns.length != this.table.columnManager.columnsByIndex.length) {
			this.config.columnGroups = true;
		}

		if (config.columnCalcs && this.table.modExists("columnCalcs")) {
			this.config.columnCalcs = true;
		}

		if (config.dataTree && this.table.options.dataTree && this.table.modExists("dataTree")) {
			this.config.dataTree = true;
		}
	};

	Download.prototype.processColumns = function () {
		var self = this;

		self.columnsByIndex = [];
		self.columnsByField = {};

		self.table.columnManager.columnsByIndex.forEach(function (column) {

			if (column.field && column.definition.download !== false && (column.visible || !column.visible && column.definition.download)) {
				self.columnsByIndex.push(column);
				self.columnsByField[column.field] = column;
			}
		});
	};

	Download.prototype.processDefinitions = function () {
		var self = this,
		    processedDefinitions = [];

		if (this.config.columnGroups) {
			self.table.columnManager.columns.forEach(function (column) {
				var colData = self.processColumnGroup(column);

				if (colData) {
					processedDefinitions.push(colData);
				}
			});
		} else {
			self.columnsByIndex.forEach(function (column) {
				if (column.download !== false) {
					//isolate definiton from defintion object
					processedDefinitions.push(self.processDefinition(column));
				}
			});
		}

		return processedDefinitions;
	};

	Download.prototype.processColumnGroup = function (column) {
		var _this41 = this;

		var subGroups = column.columns,
		    maxDepth = 0;
		var processedColumn = this.processDefinition(column);
		var groupData = {
			type: "group",
			title: processedColumn.title,
			depth: 1
		};

		if (subGroups.length) {
			groupData.subGroups = [];
			groupData.width = 0;

			subGroups.forEach(function (subGroup) {
				var subGroupData = _this41.processColumnGroup(subGroup);

				if (subGroupData.depth > maxDepth) {
					maxDepth = subGroupData.depth;
				}

				if (subGroupData) {
					groupData.width += subGroupData.width;
					groupData.subGroups.push(subGroupData);
				}
			});

			groupData.depth += maxDepth;

			if (!groupData.width) {
				return false;
			}
		} else {
			if (column.field && column.definition.download !== false && (column.visible || !column.visible && column.definition.download)) {
				groupData.width = 1;
				groupData.definition = processedColumn;
			} else {
				return false;
			}
		}

		return groupData;
	};

	Download.prototype.processDefinition = function (column) {
		var def = {};

		for (var key in column.definition) {
			def[key] = column.definition[key];
		}

		if (typeof column.definition.downloadTitle != "undefined") {
			def.title = column.definition.downloadTitle;
		}

		return def;
	};

	Download.prototype.processData = function (active) {
		var _this42 = this;

		var self = this,
		    data = [],
		    groups = [],
		    rows = false,
		    calcs = {};

		if (this.config.rowGroups) {

			if (active == "visible") {

				rows = self.table.rowManager.getRows(active);

				rows.forEach(function (row) {
					if (row.type == "row") {
						var group = row.getGroup();

						if (groups.indexOf(group) === -1) {
							groups.push(group);
						}
					}
				});
			} else {
				groups = this.table.modules.groupRows.getGroups();
			}

			groups.forEach(function (group) {
				data.push(_this42.processGroupData(group, rows));
			});
		} else {
			if (this.config.dataTree) {
				active = active = "active" ? "display" : active;
			}
			data = self.table.rowManager.getData(active, "download");
		}

		if (this.config.columnCalcs) {
			calcs = this.table.getCalcResults();

			data = {
				calcs: calcs,
				data: data
			};
		}

		//bulk data processing
		if (typeof self.table.options.downloadDataFormatter == "function") {
			data = self.table.options.downloadDataFormatter(data);
		}

		return data;
	};

	Download.prototype.processGroupData = function (group, visRows) {
		var _this43 = this;

		var subGroups = group.getSubGroups();

		var groupData = {
			type: "group",
			key: group.key
		};

		if (subGroups.length) {
			groupData.subGroups = [];

			subGroups.forEach(function (subGroup) {
				groupData.subGroups.push(_this43.processGroupData(subGroup, visRows));
			});
		} else {
			if (visRows) {
				groupData.rows = [];

				group.rows.forEach(function (row) {
					if (visRows.indexOf(row) > -1) {
						groupData.rows.push(row.getData("download"));
					}
				});
			} else {
				groupData.rows = group.getData(true, "download");
			}
		}

		return groupData;
	};

	Download.prototype.triggerDownload = function (data, mime, type, filename, newTab) {
		var element = document.createElement('a'),
		    blob = new Blob([data], { type: mime }),
		    filename = filename || "Tabulator." + (typeof type === "function" ? "txt" : type);

		blob = this.table.options.downloadReady.call(this.table, data, blob);

		if (blob) {

			if (newTab) {
				window.open(window.URL.createObjectURL(blob));
			} else {
				if (navigator.msSaveOrOpenBlob) {
					navigator.msSaveOrOpenBlob(blob, filename);
				} else {
					element.setAttribute('href', window.URL.createObjectURL(blob));

					//set file title
					element.setAttribute('download', filename);

					//trigger download
					element.style.display = 'none';
					document.body.appendChild(element);
					element.click();

					//remove temporary link element
					document.body.removeChild(element);
				}
			}

			if (this.table.options.downloadComplete) {
				this.table.options.downloadComplete();
			}
		}
	};

	//nested field lookup
	Download.prototype.getFieldValue = function (field, data) {
		var column = this.columnsByField[field];

		if (column) {
			return column.getFieldValue(data);
		}

		return false;
	};

	Download.prototype.commsReceived = function (table, action, data) {
		switch (action) {
			case "intercept":
				this.download(data.type, "", data.options, data.active, data.intercept);
				break;
		}
	};

	//downloaders
	Download.prototype.downloaders = {
		csv: function csv(columns, data, options, setFileContents, config) {
			var self = this,
			    titles = [],
			    fields = [],
			    delimiter = options && options.delimiter ? options.delimiter : ",",
			    fileContents,
			    output;

			//build column headers
			function parseSimpleTitles() {
				columns.forEach(function (column) {
					titles.push('"' + String(column.title).split('"').join('""') + '"');
					fields.push(column.field);
				});
			}

			function parseColumnGroup(column, level) {
				if (column.subGroups) {
					column.subGroups.forEach(function (subGroup) {
						parseColumnGroup(subGroup, level + 1);
					});
				} else {
					titles.push('"' + String(column.title).split('"').join('""') + '"');
					fields.push(column.definition.field);
				}
			}

			if (config.columnGroups) {
				console.warn("Download Warning - CSV downloader cannot process column groups");

				columns.forEach(function (column) {
					parseColumnGroup(column, 0);
				});
			} else {
				parseSimpleTitles();
			}

			//generate header row
			fileContents = [titles.join(delimiter)];

			function parseRows(data) {
				//generate each row of the table
				data.forEach(function (row) {
					var rowData = [];

					fields.forEach(function (field) {
						var value = self.getFieldValue(field, row);

						switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
							case "object":
								value = JSON.stringify(value);
								break;

							case "undefined":
							case "null":
								value = "";
								break;

							default:
								value = value;
						}

						//escape quotation marks
						rowData.push('"' + String(value).split('"').join('""') + '"');
					});

					fileContents.push(rowData.join(delimiter));
				});
			}

			function parseGroup(group) {
				if (group.subGroups) {
					group.subGroups.forEach(function (subGroup) {
						parseGroup(subGroup);
					});
				} else {
					parseRows(group.rows);
				}
			}

			if (config.columnCalcs) {
				console.warn("Download Warning - CSV downloader cannot process column calculations");
				data = data.data;
			}

			if (config.rowGroups) {
				console.warn("Download Warning - CSV downloader cannot process row groups");

				data.forEach(function (group) {
					parseGroup(group);
				});
			} else {
				parseRows(data);
			}

			output = fileContents.join("\n");

			if (options.bom) {
				output = '\uFEFF' + output;
			}

			setFileContents(output, "text/csv");
		},

		json: function json(columns, data, options, setFileContents, config) {
			var fileContents;

			if (config.columnCalcs) {
				console.warn("Download Warning - CSV downloader cannot process column calculations");
				data = data.data;
			}

			fileContents = JSON.stringify(data, null, '\t');

			setFileContents(fileContents, "application/json");
		},

		pdf: function pdf(columns, data, options, setFileContents, config) {
			var self = this,
			    fields = [],
			    header = [],
			    body = [],
			    calcs = {},
			    headerDepth = 1,
			    table = "",
			    autoTableParams = {},
			    rowGroupStyles = options.rowGroupStyles || {
				fontStyle: "bold",
				fontSize: 12,
				cellPadding: 6,
				fillColor: 220
			},
			    rowCalcStyles = options.rowCalcStyles || {
				fontStyle: "bold",
				fontSize: 10,
				cellPadding: 4,
				fillColor: 232
			},
			    jsPDFParams = options.jsPDF || {},
			    title = options && options.title ? options.title : "";

			if (config.columnCalcs) {
				calcs = data.calcs;
				data = data.data;
			}

			if (!jsPDFParams.orientation) {
				jsPDFParams.orientation = options.orientation || "landscape";
			}

			if (!jsPDFParams.unit) {
				jsPDFParams.unit = "pt";
			}

			//build column headers
			function parseSimpleTitles() {
				columns.forEach(function (column) {
					if (column.field) {
						header.push(column.title || "");
						fields.push(column.field);
					}
				});

				header = [header];
			}

			function parseColumnGroup(column, level) {
				var colSpan = column.width,
				    rowSpan = 1,
				    col = {
					content: column.title || ""
				};

				if (column.subGroups) {
					column.subGroups.forEach(function (subGroup) {
						parseColumnGroup(subGroup, level + 1);
					});
					rowSpan = 1;
				} else {
					fields.push(column.definition.field);
					rowSpan = headerDepth - level;
				}

				col.rowSpan = rowSpan;
				// col.colSpan = colSpan;

				header[level].push(col);

				colSpan--;

				if (rowSpan > 1) {
					for (var i = level + 1; i < headerDepth; i++) {
						header[i].push("");
					}
				}

				for (var i = 0; i < colSpan; i++) {
					header[level].push("");
				}
			}

			if (config.columnGroups) {
				columns.forEach(function (column) {
					if (column.depth > headerDepth) {
						headerDepth = column.depth;
					}
				});

				for (var i = 0; i < headerDepth; i++) {
					header.push([]);
				}

				columns.forEach(function (column) {
					parseColumnGroup(column, 0);
				});
			} else {
				parseSimpleTitles();
			}

			function parseValue(value) {
				switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
					case "object":
						value = JSON.stringify(value);
						break;

					case "undefined":
					case "null":
						value = "";
						break;

					default:
						value = value;
				}

				return value;
			}

			function parseRows(data) {
				//build table rows
				data.forEach(function (row) {
					body.push(parseRow(row));
				});
			}

			function parseRow(row, styles) {
				var rowData = [];

				fields.forEach(function (field) {
					var value = self.getFieldValue(field, row);
					value = parseValue(value);

					if (styles) {
						rowData.push({
							content: value,
							styles: styles
						});
					} else {
						rowData.push(value);
					}
				});

				return rowData;
			}

			function parseGroup(group, calcObj) {
				var groupData = [];

				groupData.push({ content: parseValue(group.key), colSpan: fields.length, styles: rowGroupStyles });

				body.push(groupData);

				if (group.subGroups) {
					group.subGroups.forEach(function (subGroup) {
						parseGroup(subGroup, calcObj[group.key] ? calcObj[group.key].groups || {} : {});
					});
				} else {

					if (config.columnCalcs) {
						addCalcRow(calcObj, group.key, "top");
					}

					parseRows(group.rows);

					if (config.columnCalcs) {
						addCalcRow(calcObj, group.key, "bottom");
					}
				}
			}

			function addCalcRow(calcs, selector, pos) {
				var calcData = calcs[selector];

				if (calcData) {
					if (pos) {
						calcData = calcData[pos];
					}

					if (Object.keys(calcData).length) {
						body.push(parseRow(calcData, rowCalcStyles));
					}
				}
			}

			if (config.rowGroups) {
				data.forEach(function (group) {
					parseGroup(group, calcs);
				});
			} else {
				if (config.columnCalcs) {
					addCalcRow(calcs, "top");
				}

				parseRows(data);

				if (config.columnCalcs) {
					addCalcRow(calcs, "bottom");
				}
			}

			var doc = new jsPDF(jsPDFParams); //set document to landscape, better for most tables

			if (options && options.autoTable) {
				if (typeof options.autoTable === "function") {
					autoTableParams = options.autoTable(doc) || {};
				} else {
					autoTableParams = options.autoTable;
				}
			}

			if (title) {
				autoTableParams.addPageContent = function (data) {
					doc.text(title, 40, 30);
				};
			}

			autoTableParams.head = header;
			autoTableParams.body = body;

			doc.autoTable(autoTableParams);

			if (options && options.documentProcessing) {
				options.documentProcessing(doc);
			}

			setFileContents(doc.output("arraybuffer"), "application/pdf");
		},

		xlsx: function xlsx(columns, data, options, setFileContents, config) {
			var self = this,
			    sheetName = options.sheetName || "Sheet1",
			    workbook = XLSX.utils.book_new(),
			    calcs = {},
			    groupRowIndexs = [],
			    groupColumnIndexs = [],
			    calcRowIndexs = [],
			    output;

			workbook.SheetNames = [];
			workbook.Sheets = {};

			if (config.columnCalcs) {
				calcs = data.calcs;
				data = data.data;
			}

			function generateSheet() {
				var titles = [],
				    fields = [],
				    rows = [],
				    worksheet;

				//convert rows to worksheet
				function rowsToSheet() {
					var sheet = {};
					var range = { s: { c: 0, r: 0 }, e: { c: fields.length, r: rows.length } };

					XLSX.utils.sheet_add_aoa(sheet, rows);

					sheet['!ref'] = XLSX.utils.encode_range(range);

					var merges = generateMerges();

					if (merges.length) {
						sheet["!merges"] = merges;
					}

					return sheet;
				}

				function parseSimpleTitles() {
					//get field lists
					columns.forEach(function (column) {
						titles.push(column.title);
						fields.push(column.field);
					});

					rows.push(titles);
				}

				function parseColumnGroup(column, level) {

					if (typeof titles[level] === "undefined") {
						titles[level] = [];
					}

					if (typeof groupColumnIndexs[level] === "undefined") {
						groupColumnIndexs[level] = [];
					}

					if (column.width > 1) {

						groupColumnIndexs[level].push({
							type: "hoz",
							start: titles[level].length,
							end: titles[level].length + column.width - 1
						});
					}

					titles[level].push(column.title);

					if (column.subGroups) {
						column.subGroups.forEach(function (subGroup) {
							parseColumnGroup(subGroup, level + 1);
						});
					} else {
						fields.push(column.definition.field);
						padColumnTitles(fields.length - 1, level);

						groupColumnIndexs[level].push({
							type: "vert",
							start: fields.length - 1
						});
					}
				}

				function padColumnTitles() {
					var max = 0;

					titles.forEach(function (title) {
						var len = title.length;
						if (len > max) {
							max = len;
						}
					});

					titles.forEach(function (title) {
						var len = title.length;
						if (len < max) {
							for (var i = len; i < max; i++) {
								title.push("");
							}
						}
					});
				}

				if (config.columnGroups) {
					columns.forEach(function (column) {
						parseColumnGroup(column, 0);
					});

					titles.forEach(function (title) {
						rows.push(title);
					});
				} else {
					parseSimpleTitles();
				}

				function generateMerges() {
					var output = [];

					groupRowIndexs.forEach(function (index) {
						output.push({ s: { r: index, c: 0 }, e: { r: index, c: fields.length - 1 } });
					});

					groupColumnIndexs.forEach(function (merges, level) {
						merges.forEach(function (merge) {
							if (merge.type === "hoz") {
								output.push({ s: { r: level, c: merge.start }, e: { r: level, c: merge.end } });
							} else {
								if (level != titles.length - 1) {
									output.push({ s: { r: level, c: merge.start }, e: { r: titles.length - 1, c: merge.start } });
								}
							}
						});
					});

					return output;
				}

				//generate each row of the table
				function parseRows(data) {
					data.forEach(function (row) {
						rows.push(parseRow(row));
					});
				}

				function parseRow(row) {
					var rowData = [];

					fields.forEach(function (field) {
						var value = self.getFieldValue(field, row);
						rowData.push(!(value instanceof Date) && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object" ? JSON.stringify(value) : value);
					});

					return rowData;
				}

				function addCalcRow(calcs, selector, pos) {
					var calcData = calcs[selector];

					if (calcData) {
						if (pos) {
							calcData = calcData[pos];
						}

						if (Object.keys(calcData).length) {
							calcRowIndexs.push(rows.length);
							rows.push(parseRow(calcData));
						}
					}
				}

				function parseGroup(group, calcObj) {
					var groupData = [];

					groupData.push(group.key);

					groupRowIndexs.push(rows.length);

					rows.push(groupData);

					if (group.subGroups) {
						group.subGroups.forEach(function (subGroup) {
							parseGroup(subGroup, calcObj[group.key] ? calcObj[group.key].groups || {} : {});
						});
					} else {

						if (config.columnCalcs) {
							addCalcRow(calcObj, group.key, "top");
						}

						parseRows(group.rows);

						if (config.columnCalcs) {
							addCalcRow(calcObj, group.key, "bottom");
						}
					}
				}

				if (config.rowGroups) {
					data.forEach(function (group) {
						parseGroup(group, calcs);
					});
				} else {
					if (config.columnCalcs) {
						addCalcRow(calcs, "top");
					}

					parseRows(data);

					if (config.columnCalcs) {
						addCalcRow(calcs, "bottom");
					}
				}

				worksheet = rowsToSheet();

				return worksheet;
			}

			if (options.sheetOnly) {
				setFileContents(generateSheet());
				return;
			}

			if (options.sheets) {
				for (var sheet in options.sheets) {

					if (options.sheets[sheet] === true) {
						workbook.SheetNames.push(sheet);
						workbook.Sheets[sheet] = generateSheet();
					} else {

						workbook.SheetNames.push(sheet);

						this.table.modules.comms.send(options.sheets[sheet], "download", "intercept", {
							type: "xlsx",
							options: { sheetOnly: true },
							active: self.active,
							intercept: function intercept(data) {
								workbook.Sheets[sheet] = data;
							}
						});
					}
				}
			} else {
				workbook.SheetNames.push(sheetName);
				workbook.Sheets[sheetName] = generateSheet();
			}

			if (options.documentProcessing) {
				workbook = options.documentProcessing(workbook);
			}

			//convert workbook to binary array
			function s2ab(s) {
				var buf = new ArrayBuffer(s.length);
				var view = new Uint8Array(buf);
				for (var i = 0; i != s.length; ++i) {
					view[i] = s.charCodeAt(i) & 0xFF;
				}return buf;
			}

			output = XLSX.write(workbook, { bookType: 'xlsx', bookSST: true, type: 'binary' });

			setFileContents(s2ab(output), "application/octet-stream");
		},

		html: function html(columns, data, options, setFileContents, config) {
			if (this.table.modExists("export", true)) {
				setFileContents(this.table.modules.export.getHtml(true, options.style, config), "text/html");
			}
		}

	};

	Tabulator.prototype.registerModule("download", Download);

	var Edit = function Edit(table) {
		this.table = table; //hold Tabulator object
		this.currentCell = false; //hold currently editing cell
		this.mouseClick = false; //hold mousedown state to prevent click binding being overriden by editor opening
		this.recursionBlock = false; //prevent focus recursion
		this.invalidEdit = false;
	};

	//initialize column editor
	Edit.prototype.initializeColumn = function (column) {
		var self = this,
		    config = {
			editor: false,
			blocked: false,
			check: column.definition.editable,
			params: column.definition.editorParams || {}
		};

		//set column editor
		switch (_typeof(column.definition.editor)) {
			case "string":

				if (column.definition.editor === "tick") {
					column.definition.editor = "tickCross";
					console.warn("DEPRECATION WARNING - the tick editor has been deprecated, please use the tickCross editor");
				}

				if (self.editors[column.definition.editor]) {
					config.editor = self.editors[column.definition.editor];
				} else {
					console.warn("Editor Error - No such editor found: ", column.definition.editor);
				}
				break;

			case "function":
				config.editor = column.definition.editor;
				break;

			case "boolean":

				if (column.definition.editor === true) {

					if (typeof column.definition.formatter !== "function") {

						if (column.definition.formatter === "tick") {
							column.definition.formatter = "tickCross";
							console.warn("DEPRECATION WARNING - the tick editor has been deprecated, please use the tickCross editor");
						}

						if (self.editors[column.definition.formatter]) {
							config.editor = self.editors[column.definition.formatter];
						} else {
							config.editor = self.editors["input"];
						}
					} else {
						console.warn("Editor Error - Cannot auto lookup editor for a custom formatter: ", column.definition.formatter);
					}
				}
				break;
		}

		if (config.editor) {
			column.modules.edit = config;
		}
	};

	Edit.prototype.getCurrentCell = function () {
		return this.currentCell ? this.currentCell.getComponent() : false;
	};

	Edit.prototype.clearEditor = function () {
		var cell = this.currentCell,
		    cellEl;

		this.invalidEdit = false;

		if (cell) {
			this.currentCell = false;

			cellEl = cell.getElement();
			cellEl.classList.remove("tabulator-validation-fail");
			cellEl.classList.remove("tabulator-editing");
			while (cellEl.firstChild) {
				cellEl.removeChild(cellEl.firstChild);
			}cell.row.getElement().classList.remove("tabulator-row-editing");
		}
	};

	Edit.prototype.cancelEdit = function () {

		if (this.currentCell) {
			var cell = this.currentCell;
			var component = this.currentCell.getComponent();

			this.clearEditor();
			cell.setValueActual(cell.getValue());

			if (cell.column.cellEvents.cellEditCancelled) {
				cell.column.cellEvents.cellEditCancelled.call(this.table, component);
			}

			this.table.options.cellEditCancelled.call(this.table, component);
		}
	};

	//return a formatted value for a cell
	Edit.prototype.bindEditor = function (cell) {
		var self = this,
		    element = cell.getElement();

		element.setAttribute("tabindex", 0);

		element.addEventListener("click", function (e) {
			if (!element.classList.contains("tabulator-editing")) {
				element.focus();
			}
		});

		element.addEventListener("mousedown", function (e) {
			self.mouseClick = true;
		});

		element.addEventListener("focus", function (e) {
			if (!self.recursionBlock) {
				self.edit(cell, e, false);
			}
		});
	};

	Edit.prototype.focusCellNoEvent = function (cell, block) {
		this.recursionBlock = true;
		if (!(block && this.table.browser === "ie")) {
			cell.getElement().focus();
		}
		this.recursionBlock = false;
	};

	Edit.prototype.editCell = function (cell, forceEdit) {
		this.focusCellNoEvent(cell);
		this.edit(cell, false, forceEdit);
	};

	Edit.prototype.edit = function (cell, e, forceEdit) {
		var self = this,
		    allowEdit = true,
		    rendered = function rendered() {},
		    element = cell.getElement(),
		    cellEditor,
		    component,
		    params;

		//prevent editing if another cell is refusing to leave focus (eg. validation fail)
		if (this.currentCell) {
			if (!this.invalidEdit) {
				this.cancelEdit();
			}
			return;
		}

		//handle successfull value change
		function success(value) {
			if (self.currentCell === cell) {
				var valid = true;

				if (cell.column.modules.validate && self.table.modExists("validate")) {
					valid = self.table.modules.validate.validate(cell.column.modules.validate, cell.getComponent(), value);
				}

				if (valid === true) {
					self.clearEditor();
					cell.setValue(value, true);

					if (self.table.options.dataTree && self.table.modExists("dataTree")) {
						self.table.modules.dataTree.checkForRestyle(cell);
					}

					return true;
				} else {
					self.invalidEdit = true;
					element.classList.add("tabulator-validation-fail");
					self.focusCellNoEvent(cell, true);
					rendered();
					self.table.options.validationFailed.call(self.table, cell.getComponent(), value, valid);

					return false;
				}
			} else {
				// console.warn("Edit Success Error - cannot call success on a cell that is no longer being edited");
			}
		}

		//handle aborted edit
		function cancel() {
			if (self.currentCell === cell) {
				self.cancelEdit();

				if (self.table.options.dataTree && self.table.modExists("dataTree")) {
					self.table.modules.dataTree.checkForRestyle(cell);
				}
			} else {
				// console.warn("Edit Success Error - cannot call cancel on a cell that is no longer being edited");
			}
		}

		function onRendered(callback) {
			rendered = callback;
		}

		if (!cell.column.modules.edit.blocked) {
			if (e) {
				e.stopPropagation();
			}

			switch (_typeof(cell.column.modules.edit.check)) {
				case "function":
					allowEdit = cell.column.modules.edit.check(cell.getComponent());
					break;

				case "boolean":
					allowEdit = cell.column.modules.edit.check;
					break;
			}

			if (allowEdit || forceEdit) {

				self.cancelEdit();

				self.currentCell = cell;

				component = cell.getComponent();

				if (this.mouseClick) {
					this.mouseClick = false;

					if (cell.column.cellEvents.cellClick) {
						cell.column.cellEvents.cellClick.call(this.table, e, component);
					}
				}

				if (cell.column.cellEvents.cellEditing) {
					cell.column.cellEvents.cellEditing.call(this.table, component);
				}

				self.table.options.cellEditing.call(this.table, component);

				params = typeof cell.column.modules.edit.params === "function" ? cell.column.modules.edit.params(component) : cell.column.modules.edit.params;

				cellEditor = cell.column.modules.edit.editor.call(self, component, onRendered, success, cancel, params);

				//if editor returned, add to DOM, if false, abort edit
				if (cellEditor !== false) {

					if (cellEditor instanceof Node) {
						element.classList.add("tabulator-editing");
						cell.row.getElement().classList.add("tabulator-row-editing");
						while (element.firstChild) {
							element.removeChild(element.firstChild);
						}element.appendChild(cellEditor);

						//trigger onRendered Callback
						rendered();

						//prevent editing from triggering rowClick event
						var children = element.children;

						for (var i = 0; i < children.length; i++) {
							children[i].addEventListener("click", function (e) {
								e.stopPropagation();
							});
						}
					} else {
						console.warn("Edit Error - Editor should return an instance of Node, the editor returned:", cellEditor);
						element.blur();
						return false;
					}
				} else {
					element.blur();
					return false;
				}

				return true;
			} else {
				this.mouseClick = false;
				element.blur();
				return false;
			}
		} else {
			this.mouseClick = false;
			element.blur();
			return false;
		}
	};

	Edit.prototype.maskInput = function (el, options) {
		var mask = options.mask,
		    maskLetter = typeof options.maskLetterChar !== "undefined" ? options.maskLetterChar : "A",
		    maskNumber = typeof options.maskNumberChar !== "undefined" ? options.maskNumberChar : "9",
		    maskWildcard = typeof options.maskWildcardChar !== "undefined" ? options.maskWildcardChar : "*",
		    success = false;

		function fillSymbols(index) {
			var symbol = mask[index];
			if (typeof symbol !== "undefined" && symbol !== maskWildcard && symbol !== maskLetter && symbol !== maskNumber) {
				el.value = el.value + "" + symbol;
				fillSymbols(index + 1);
			}
		}

		el.addEventListener("keydown", function (e) {
			var index = el.value.length,
			    char = e.key;

			if (e.keyCode > 46) {
				if (index >= mask.length) {
					e.preventDefault();
					e.stopPropagation();
					success = false;
					return false;
				} else {
					switch (mask[index]) {
						case maskLetter:
							if (char.toUpperCase() == char.toLowerCase()) {
								e.preventDefault();
								e.stopPropagation();
								success = false;
								return false;
							}
							break;

						case maskNumber:
							if (isNaN(char)) {
								e.preventDefault();
								e.stopPropagation();
								success = false;
								return false;
							}
							break;

						case maskWildcard:
							break;

						default:
							if (char !== mask[index]) {
								e.preventDefault();
								e.stopPropagation();
								success = false;
								return false;
							}
					}
				}

				success = true;
			}

			return;
		});

		el.addEventListener("keyup", function (e) {
			if (e.keyCode > 46) {
				if (options.maskAutoFill) {
					fillSymbols(el.value.length);
				}
			}
		});

		if (!el.placeholder) {
			el.placeholder = mask;
		}

		if (options.maskAutoFill) {
			fillSymbols(el.value.length);
		}
	};

	//default data editors
	Edit.prototype.editors = {

		//input element
		input: function input(cell, onRendered, success, cancel, editorParams) {

			//create and style input
			var cellValue = cell.getValue(),
			    input = document.createElement("input");

			input.setAttribute("type", editorParams.search ? "search" : "text");

			input.style.padding = "4px";
			input.style.width = "100%";
			input.style.boxSizing = "border-box";

			if (editorParams.elementAttributes && _typeof(editorParams.elementAttributes) == "object") {
				for (var key in editorParams.elementAttributes) {
					if (key.charAt(0) == "+") {
						key = key.slice(1);
						input.setAttribute(key, input.getAttribute(key) + editorParams.elementAttributes["+" + key]);
					} else {
						input.setAttribute(key, editorParams.elementAttributes[key]);
					}
				}
			}

			input.value = typeof cellValue !== "undefined" ? cellValue : "";

			onRendered(function () {
				input.focus();
				input.style.height = "100%";
			});

			function onChange(e) {
				if ((cellValue === null || typeof cellValue === "undefined") && input.value !== "" || input.value !== cellValue) {

					if (success(input.value)) {
						cellValue = input.value; //persist value if successfully validated incase editor is used as header filter
					}
				} else {
					cancel();
				}
			}

			//submit new value on blur or change
			input.addEventListener("change", onChange);
			input.addEventListener("blur", onChange);

			//submit new value on enter
			input.addEventListener("keydown", function (e) {
				switch (e.keyCode) {
					// case 9:
					case 13:
						onChange(e);
						break;

					case 27:
						cancel();
						break;
				}
			});

			if (editorParams.mask) {
				this.table.modules.edit.maskInput(input, editorParams);
			}

			return input;
		},

		//resizable text area element
		textarea: function textarea(cell, onRendered, success, cancel, editorParams) {
			var self = this,
			    cellValue = cell.getValue(),
			    vertNav = editorParams.verticalNavigation || "hybrid",
			    value = String(cellValue !== null && typeof cellValue !== "undefined" ? cellValue : ""),
			    count = (value.match(/(?:\r\n|\r|\n)/g) || []).length + 1,
			    input = document.createElement("textarea"),
			    scrollHeight = 0;

			//create and style input
			input.style.display = "block";
			input.style.padding = "2px";
			input.style.height = "100%";
			input.style.width = "100%";
			input.style.boxSizing = "border-box";
			input.style.whiteSpace = "pre-wrap";
			input.style.resize = "none";

			if (editorParams.elementAttributes && _typeof(editorParams.elementAttributes) == "object") {
				for (var key in editorParams.elementAttributes) {
					if (key.charAt(0) == "+") {
						key = key.slice(1);
						input.setAttribute(key, input.getAttribute(key) + editorParams.elementAttributes["+" + key]);
					} else {
						input.setAttribute(key, editorParams.elementAttributes[key]);
					}
				}
			}

			input.value = value;

			onRendered(function () {
				input.focus();
				input.style.height = "100%";
			});

			function onChange(e) {

				if ((cellValue === null || typeof cellValue === "undefined") && input.value !== "" || input.value !== cellValue) {

					if (success(input.value)) {
						cellValue = input.value; //persist value if successfully validated incase editor is used as header filter
					}

					setTimeout(function () {
						cell.getRow().normalizeHeight();
					}, 300);
				} else {
					cancel();
				}
			}

			//submit new value on blur or change
			input.addEventListener("change", onChange);
			input.addEventListener("blur", onChange);

			input.addEventListener("keyup", function () {

				input.style.height = "";

				var heightNow = input.scrollHeight;

				input.style.height = heightNow + "px";

				if (heightNow != scrollHeight) {
					scrollHeight = heightNow;
					cell.getRow().normalizeHeight();
				}
			});

			input.addEventListener("keydown", function (e) {

				switch (e.keyCode) {
					case 27:
						cancel();
						break;

					case 38:
						//up arrow
						if (vertNav == "editor" || vertNav == "hybrid" && input.selectionStart) {
							e.stopImmediatePropagation();
							e.stopPropagation();
						}

						break;

					case 40:
						//down arrow
						if (vertNav == "editor" || vertNav == "hybrid" && input.selectionStart !== input.value.length) {
							e.stopImmediatePropagation();
							e.stopPropagation();
						}
						break;
				}
			});

			if (editorParams.mask) {
				this.table.modules.edit.maskInput(input, editorParams);
			}

			return input;
		},

		//input element with type of number
		number: function number(cell, onRendered, success, cancel, editorParams) {

			var cellValue = cell.getValue(),
			    vertNav = editorParams.verticalNavigation || "editor",
			    input = document.createElement("input");

			input.setAttribute("type", "number");

			if (typeof editorParams.max != "undefined") {
				input.setAttribute("max", editorParams.max);
			}

			if (typeof editorParams.min != "undefined") {
				input.setAttribute("min", editorParams.min);
			}

			if (typeof editorParams.step != "undefined") {
				input.setAttribute("step", editorParams.step);
			}

			//create and style input
			input.style.padding = "4px";
			input.style.width = "100%";
			input.style.boxSizing = "border-box";

			if (editorParams.elementAttributes && _typeof(editorParams.elementAttributes) == "object") {
				for (var key in editorParams.elementAttributes) {
					if (key.charAt(0) == "+") {
						key = key.slice(1);
						input.setAttribute(key, input.getAttribute(key) + editorParams.elementAttributes["+" + key]);
					} else {
						input.setAttribute(key, editorParams.elementAttributes[key]);
					}
				}
			}

			input.value = cellValue;

			var blurFunc = function blurFunc(e) {
				onChange();
			};

			onRendered(function () {
				//submit new value on blur
				input.removeEventListener("blur", blurFunc);

				input.focus();
				input.style.height = "100%";

				//submit new value on blur
				input.addEventListener("blur", blurFunc);
			});

			function onChange() {
				var value = input.value;

				if (!isNaN(value) && value !== "") {
					value = Number(value);
				}

				if (value !== cellValue) {
					if (success(value)) {
						cellValue = value; //persist value if successfully validated incase editor is used as header filter
					}
				} else {
					cancel();
				}
			}

			//submit new value on enter
			input.addEventListener("keydown", function (e) {
				switch (e.keyCode) {
					case 13:
						// case 9:
						onChange();
						break;

					case 27:
						cancel();
						break;

					case 38: //up arrow
					case 40:
						//down arrow
						if (vertNav == "editor") {
							e.stopImmediatePropagation();
							e.stopPropagation();
						}
						break;
				}
			});

			if (editorParams.mask) {
				this.table.modules.edit.maskInput(input, editorParams);
			}

			return input;
		},

		//input element with type of number
		range: function range(cell, onRendered, success, cancel, editorParams) {

			var cellValue = cell.getValue(),
			    input = document.createElement("input");

			input.setAttribute("type", "range");

			if (typeof editorParams.max != "undefined") {
				input.setAttribute("max", editorParams.max);
			}

			if (typeof editorParams.min != "undefined") {
				input.setAttribute("min", editorParams.min);
			}

			if (typeof editorParams.step != "undefined") {
				input.setAttribute("step", editorParams.step);
			}

			//create and style input
			input.style.padding = "4px";
			input.style.width = "100%";
			input.style.boxSizing = "border-box";

			if (editorParams.elementAttributes && _typeof(editorParams.elementAttributes) == "object") {
				for (var key in editorParams.elementAttributes) {
					if (key.charAt(0) == "+") {
						key = key.slice(1);
						input.setAttribute(key, input.getAttribute(key) + editorParams.elementAttributes["+" + key]);
					} else {
						input.setAttribute(key, editorParams.elementAttributes[key]);
					}
				}
			}

			input.value = cellValue;

			onRendered(function () {
				input.focus();
				input.style.height = "100%";
			});

			function onChange() {
				var value = input.value;

				if (!isNaN(value) && value !== "") {
					value = Number(value);
				}

				if (value != cellValue) {
					if (success(value)) {
						cellValue = value; //persist value if successfully validated incase editor is used as header filter
					}
				} else {
					cancel();
				}
			}

			//submit new value on blur
			input.addEventListener("blur", function (e) {
				onChange();
			});

			//submit new value on enter
			input.addEventListener("keydown", function (e) {
				switch (e.keyCode) {
					case 13:
					case 9:
						onChange();
						break;

					case 27:
						cancel();
						break;
				}
			});

			return input;
		},

		//select
		select: function select(cell, onRendered, success, cancel, editorParams) {
			var self = this,
			    cellEl = cell.getElement(),
			    initialValue = cell.getValue(),
			    vertNav = editorParams.verticalNavigation || "editor",
			    initialDisplayValue = typeof initialValue !== "undefined" || initialValue === null ? initialValue : typeof editorParams.defaultValue !== "undefined" ? editorParams.defaultValue : "",
			    input = document.createElement("input"),
			    listEl = document.createElement("div"),
			    dataItems = [],
			    displayItems = [],
			    currentItem = {},
			    blurable = true;

			this.table.rowManager.element.addEventListener("scroll", cancelItem);

			if (Array.isArray(editorParams) || !Array.isArray(editorParams) && (typeof editorParams === 'undefined' ? 'undefined' : _typeof(editorParams)) === "object" && !editorParams.values) {
				console.warn("DEPRECATION WANRING - values for the select editor must now be passed into the values property of the editorParams object, not as the editorParams object");
				editorParams = { values: editorParams };
			}

			function getUniqueColumnValues(field) {
				var output = {},
				    data = self.table.getData(),
				    column;

				if (field) {
					column = self.table.columnManager.getColumnByField(field);
				} else {
					column = cell.getColumn()._getSelf();
				}

				if (column) {
					data.forEach(function (row) {
						var val = column.getFieldValue(row);

						if (val !== null && typeof val !== "undefined" && val !== "") {
							output[val] = true;
						}
					});

					if (editorParams.sortValuesList) {
						if (editorParams.sortValuesList == "asc") {
							output = Object.keys(output).sort();
						} else {
							output = Object.keys(output).sort().reverse();
						}
					} else {
						output = Object.keys(output);
					}
				} else {
					console.warn("unable to find matching column to create select lookup list:", field);
				}

				return output;
			}

			function parseItems(inputValues, curentValue) {
				var dataList = [];
				var displayList = [];

				function processComplexListItem(item) {
					var item = {
						label: editorParams.listItemFormatter ? editorParams.listItemFormatter(item.value, item.label) : item.label,
						value: item.value,
						element: false
					};

					if (item.value === curentValue || !isNaN(parseFloat(item.value)) && !isNaN(parseFloat(item.value)) && parseFloat(item.value) === parseFloat(curentValue)) {
						setCurrentItem(item);
					}

					dataList.push(item);
					displayList.push(item);

					return item;
				}

				if (typeof inputValues == "function") {
					inputValues = inputValues(cell);
				}

				if (Array.isArray(inputValues)) {
					inputValues.forEach(function (value) {
						var item;

						if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object") {

							if (value.options) {
								item = {
									label: value.label,
									group: true,
									element: false
								};

								displayList.push(item);

								value.options.forEach(function (item) {
									processComplexListItem(item);
								});
							} else {
								processComplexListItem(value);
							}
						} else {

							item = {
								label: editorParams.listItemFormatter ? editorParams.listItemFormatter(value, value) : value,
								value: value,
								element: false
							};

							if (item.value === curentValue || !isNaN(parseFloat(item.value)) && !isNaN(parseFloat(item.value)) && parseFloat(item.value) === parseFloat(curentValue)) {
								setCurrentItem(item);
							}

							dataList.push(item);
							displayList.push(item);
						}
					});
				} else {
					for (var key in inputValues) {
						var item = {
							label: editorParams.listItemFormatter ? editorParams.listItemFormatter(key, inputValues[key]) : inputValues[key],
							value: key,
							element: false
						};

						if (item.value === curentValue || !isNaN(parseFloat(item.value)) && !isNaN(parseFloat(item.value)) && parseFloat(item.value) === parseFloat(curentValue)) {
							setCurrentItem(item);
						}

						dataList.push(item);
						displayList.push(item);
					}
				}

				dataItems = dataList;
				displayItems = displayList;

				fillList();
			}

			function fillList() {
				while (listEl.firstChild) {
					listEl.removeChild(listEl.firstChild);
				}displayItems.forEach(function (item) {
					var el = item.element;

					if (!el) {

						if (item.group) {
							el = document.createElement("div");
							el.classList.add("tabulator-edit-select-list-group");
							el.tabIndex = 0;
							el.innerHTML = item.label === "" ? "&nbsp;" : item.label;
						} else {
							el = document.createElement("div");
							el.classList.add("tabulator-edit-select-list-item");
							el.tabIndex = 0;
							el.innerHTML = item.label === "" ? "&nbsp;" : item.label;

							el.addEventListener("click", function () {
								setCurrentItem(item);
								chooseItem();
							});

							if (item === currentItem) {
								el.classList.add("active");
							}
						}

						el.addEventListener("mousedown", function () {
							blurable = false;

							setTimeout(function () {
								blurable = true;
							}, 10);
						});

						item.element = el;
					}

					listEl.appendChild(el);
				});
			}

			function setCurrentItem(item) {

				if (currentItem && currentItem.element) {
					currentItem.element.classList.remove("active");
				}

				currentItem = item;
				input.value = item.label === "&nbsp;" ? "" : item.label;

				if (item.element) {
					item.element.classList.add("active");
				}
			}

			function chooseItem() {
				hideList();

				if (initialValue !== currentItem.value) {
					initialValue = currentItem.value;
					success(currentItem.value);
				} else {
					cancel();
				}
			}

			function cancelItem() {
				hideList();
				cancel();
			}

			function showList() {
				if (!listEl.parentNode) {

					if (editorParams.values === true) {
						parseItems(getUniqueColumnValues(), initialDisplayValue);
					} else if (typeof editorParams.values === "string") {
						parseItems(getUniqueColumnValues(editorParams.values), initialDisplayValue);
					} else {
						parseItems(editorParams.values || [], initialDisplayValue);
					}

					var offset = Tabulator.prototype.helpers.elOffset(cellEl);

					listEl.style.minWidth = cellEl.offsetWidth + "px";

					listEl.style.top = offset.top + cellEl.offsetHeight + "px";
					listEl.style.left = offset.left + "px";
					document.body.appendChild(listEl);
				}
			}

			function hideList() {
				if (listEl.parentNode) {
					listEl.parentNode.removeChild(listEl);
				}

				removeScrollListener();
			}

			function removeScrollListener() {
				self.table.rowManager.element.removeEventListener("scroll", cancelItem);
			}

			//style input
			input.setAttribute("type", "text");

			input.style.padding = "4px";
			input.style.width = "100%";
			input.style.boxSizing = "border-box";
			input.style.cursor = "default";
			input.readOnly = this.currentCell != false;

			if (editorParams.elementAttributes && _typeof(editorParams.elementAttributes) == "object") {
				for (var key in editorParams.elementAttributes) {
					if (key.charAt(0) == "+") {
						key = key.slice(1);
						input.setAttribute(key, input.getAttribute(key) + editorParams.elementAttributes["+" + key]);
					} else {
						input.setAttribute(key, editorParams.elementAttributes[key]);
					}
				}
			}

			input.value = typeof initialValue !== "undefined" || initialValue === null ? initialValue : "";

			// if(editorParams.values === true){
			// 	parseItems(getUniqueColumnValues(), initialValue);
			// }else if(typeof editorParams.values === "string"){
			// 	parseItems(getUniqueColumnValues(editorParams.values), initialValue);
			// }else{
			// 	parseItems(editorParams.values || [], initialValue);
			// }

			//allow key based navigation
			input.addEventListener("keydown", function (e) {
				var index;

				switch (e.keyCode) {
					case 38:
						//up arrow
						index = dataItems.indexOf(currentItem);

						if (vertNav == "editor" || vertNav == "hybrid" && index) {
							e.stopImmediatePropagation();
							e.stopPropagation();
							e.preventDefault();

							if (index > 0) {
								setCurrentItem(dataItems[index - 1]);
							}
						}
						break;

					case 40:
						//down arrow
						index = dataItems.indexOf(currentItem);

						if (vertNav == "editor" || vertNav == "hybrid" && index < dataItems.length - 1) {
							e.stopImmediatePropagation();
							e.stopPropagation();
							e.preventDefault();

							if (index < dataItems.length - 1) {
								if (index == -1) {
									setCurrentItem(dataItems[0]);
								} else {
									setCurrentItem(dataItems[index + 1]);
								}
							}
						}
						break;

					case 37: //left arrow
					case 39:
						//right arrow
						e.stopImmediatePropagation();
						e.stopPropagation();
						e.preventDefault();
						break;

					case 13:
						//enter
						chooseItem();
						break;

					case 27:
						//escape
						cancelItem();
						break;
				}
			});

			input.addEventListener("blur", function (e) {
				if (blurable) {
					cancelItem();
				}
			});

			input.addEventListener("focus", function (e) {
				showList();
			});

			//style list element
			listEl = document.createElement("div");
			listEl.classList.add("tabulator-edit-select-list");

			onRendered(function () {
				input.style.height = "100%";
				input.focus();
			});

			return input;
		},

		//autocomplete
		autocomplete: function autocomplete(cell, onRendered, success, cancel, editorParams) {
			var self = this,
			    cellEl = cell.getElement(),
			    initialValue = cell.getValue(),
			    vertNav = editorParams.verticalNavigation || "editor",
			    initialDisplayValue = typeof initialValue !== "undefined" || initialValue === null ? initialValue : typeof editorParams.defaultValue !== "undefined" ? editorParams.defaultValue : "",
			    input = document.createElement("input"),
			    listEl = document.createElement("div"),
			    allItems = [],
			    displayItems = [],
			    values = [],
			    currentItem = false,
			    blurable = true;

			this.table.rowManager.element.addEventListener("scroll", cancelItem);

			//style input
			input.setAttribute("type", "search");

			input.style.padding = "4px";
			input.style.width = "100%";
			input.style.boxSizing = "border-box";

			if (editorParams.elementAttributes && _typeof(editorParams.elementAttributes) == "object") {
				for (var key in editorParams.elementAttributes) {
					if (key.charAt(0) == "+") {
						key = key.slice(1);
						input.setAttribute(key, input.getAttribute(key) + editorParams.elementAttributes["+" + key]);
					} else {
						input.setAttribute(key, editorParams.elementAttributes[key]);
					}
				}
			}

			//style list element
			listEl.classList.add("tabulator-edit-select-list");

			function getUniqueColumnValues(field) {
				var output = {},
				    data = self.table.getData(),
				    column;

				if (field) {
					column = self.table.columnManager.getColumnByField(field);
				} else {
					column = cell.getColumn()._getSelf();
				}

				if (column) {
					data.forEach(function (row) {
						var val = column.getFieldValue(row);

						if (val !== null && typeof val !== "undefined" && val !== "") {
							output[val] = true;
						}
					});

					if (editorParams.sortValuesList) {
						if (editorParams.sortValuesList == "asc") {
							output = Object.keys(output).sort();
						} else {
							output = Object.keys(output).sort().reverse();
						}
					} else {
						output = Object.keys(output);
					}
				} else {
					console.warn("unable to find matching column to create autocomplete lookup list:", field);
				}

				return output;
			}

			function filterList(term, intialLoad) {
				var matches = [],
				    values,
				    items,
				    searchEl;

				//lookup base values list
				if (editorParams.values === true) {
					values = getUniqueColumnValues();
				} else if (typeof editorParams.values === "string") {
					values = getUniqueColumnValues(editorParams.values);
				} else {
					values = editorParams.values || [];
				}

				if (editorParams.searchFunc) {
					matches = editorParams.searchFunc(term, values);

					if (matches instanceof Promise) {

						addNotice(typeof editorParams.searchingPlaceholder !== "undefined" ? editorParams.searchingPlaceholder : "Searching...");

						matches.then(function (result) {
							fillListIfNotEmpty(parseItems(result), intialLoad);
						}).catch(function (err) {
							console.err("error in autocomplete search promise:", err);
						});
					} else {
						fillListIfNotEmpty(parseItems(matches), intialLoad);
					}
				} else {
					items = parseItems(values);

					if (term === "") {
						if (editorParams.showListOnEmpty) {
							matches = items;
						}
					} else {
						items.forEach(function (item) {
							if (item.value !== null || typeof item.value !== "undefined") {
								if (String(item.value).toLowerCase().indexOf(String(term).toLowerCase()) > -1 || String(item.title).toLowerCase().indexOf(String(term).toLowerCase()) > -1) {
									matches.push(item);
								}
							}
						});
					}

					fillListIfNotEmpty(matches, intialLoad);
				}
			}

			function addNotice(notice) {
				var searchEl = document.createElement("div");

				clearList();

				if (notice !== false) {
					searchEl.classList.add("tabulator-edit-select-list-notice");
					searchEl.tabIndex = 0;

					if (notice instanceof Node) {
						searchEl.appendChild(notice);
					} else {
						searchEl.innerHTML = notice;
					}

					listEl.appendChild(searchEl);
				}
			}

			function parseItems(inputValues) {
				var itemList = [];

				if (Array.isArray(inputValues)) {
					inputValues.forEach(function (value) {
						var item = {
							title: editorParams.listItemFormatter ? editorParams.listItemFormatter(value, value) : value,
							value: value
						};

						itemList.push(item);
					});
				} else {
					for (var key in inputValues) {
						var item = {
							title: editorParams.listItemFormatter ? editorParams.listItemFormatter(key, inputValues[key]) : inputValues[key],
							value: key
						};

						itemList.push(item);
					}
				}

				return itemList;
			}

			function clearList() {
				while (listEl.firstChild) {
					listEl.removeChild(listEl.firstChild);
				}
			}

			function fillListIfNotEmpty(items, intialLoad) {
				if (items.length) {
					fillList(items, intialLoad);
				} else {
					if (editorParams.emptyPlaceholder) {
						addNotice(editorParams.emptyPlaceholder);
					}
				}
			}

			function fillList(items, intialLoad) {
				var current = false;

				clearList();

				displayItems = items;

				displayItems.forEach(function (item) {
					var el = item.element;

					if (!el) {
						el = document.createElement("div");
						el.classList.add("tabulator-edit-select-list-item");
						el.tabIndex = 0;
						el.innerHTML = item.title;

						el.addEventListener("click", function () {
							setCurrentItem(item);
							chooseItem();
						});

						el.addEventListener("mousedown", function () {
							blurable = false;

							setTimeout(function () {
								blurable = true;
							}, 10);
						});

						item.element = el;

						if (intialLoad && item.value == initialValue) {
							input.value = item.title;
							item.element.classList.add("active");
							current = true;
						}

						if (item === currentItem) {
							item.element.classList.add("active");
							current = true;
						}
					}

					listEl.appendChild(el);
				});

				if (!current) {
					setCurrentItem(false);
				}
			}

			function chooseItem() {
				hideList();

				if (currentItem) {
					if (initialValue !== currentItem.value) {
						initialValue = currentItem.value;
						input.value = currentItem.title;
						success(currentItem.value);
					} else {
						cancel();
					}
				} else {
					if (editorParams.freetext) {
						initialValue = input.value;
						success(input.value);
					} else {
						if (editorParams.allowEmpty && input.value === "") {
							initialValue = input.value;
							success(input.value);
						} else {
							cancel();
						}
					}
				}
			}

			function showList() {
				if (!listEl.parentNode) {
					while (listEl.firstChild) {
						listEl.removeChild(listEl.firstChild);
					}var offset = Tabulator.prototype.helpers.elOffset(cellEl);

					listEl.style.minWidth = cellEl.offsetWidth + "px";

					listEl.style.top = offset.top + cellEl.offsetHeight + "px";
					listEl.style.left = offset.left + "px";
					document.body.appendChild(listEl);
				}
			}

			function setCurrentItem(item, showInputValue) {
				if (currentItem && currentItem.element) {
					currentItem.element.classList.remove("active");
				}

				currentItem = item;

				if (item && item.element) {
					item.element.classList.add("active");
				}
			}

			function hideList() {
				if (listEl.parentNode) {
					listEl.parentNode.removeChild(listEl);
				}

				removeScrollListener();
			}

			function cancelItem() {
				hideList();
				cancel();
			}

			function removeScrollListener() {
				self.table.rowManager.element.removeEventListener("scroll", cancelItem);
			}

			//allow key based navigation
			input.addEventListener("keydown", function (e) {
				var index;

				switch (e.keyCode) {
					case 38:
						//up arrow
						index = displayItems.indexOf(currentItem);

						if (vertNav == "editor" || vertNav == "hybrid" && index) {
							e.stopImmediatePropagation();
							e.stopPropagation();
							e.preventDefault();

							if (index > 0) {
								setCurrentItem(displayItems[index - 1]);
							} else {
								setCurrentItem(false);
							}
						}
						break;

					case 40:
						//down arrow

						index = displayItems.indexOf(currentItem);

						if (vertNav == "editor" || vertNav == "hybrid" && index < displayItems.length - 1) {

							e.stopImmediatePropagation();
							e.stopPropagation();
							e.preventDefault();

							if (index < displayItems.length - 1) {
								if (index == -1) {
									setCurrentItem(displayItems[0]);
								} else {
									setCurrentItem(displayItems[index + 1]);
								}
							}
						}
						break;

					case 37: //left arrow
					case 39:
						//right arrow
						e.stopImmediatePropagation();
						e.stopPropagation();
						e.preventDefault();
						break;

					case 13:
						//enter
						chooseItem();
						break;

					case 27:
						//escape
						cancelItem();
						break;

					case 36: //home
					case 35:
						//end
						//prevent table navigation while using input element
						e.stopImmediatePropagation();
						break;
				}
			});

			input.addEventListener("keyup", function (e) {

				switch (e.keyCode) {
					case 38: //up arrow
					case 37: //left arrow
					case 39: //up arrow
					case 40: //right arrow
					case 13: //enter
					case 27:
						//escape
						break;

					default:
						filterList(input.value);
				}
			});

			input.addEventListener("search", function (e) {
				filterList(input.value);
			});

			input.addEventListener("blur", function (e) {
				if (blurable) {
					chooseItem();
				}
			});

			input.addEventListener("focus", function (e) {
				var value = initialDisplayValue;
				showList();
				input.value = value;
				filterList(value, true);
			});

			onRendered(function () {
				input.style.height = "100%";
				input.focus();
			});

			if (editorParams.mask) {
				this.table.modules.edit.maskInput(input, editorParams);
			}

			return input;
		},

		//start rating
		star: function star(cell, onRendered, success, cancel, editorParams) {
			var self = this,
			    element = cell.getElement(),
			    value = cell.getValue(),
			    maxStars = element.getElementsByTagName("svg").length || 5,
			    size = element.getElementsByTagName("svg")[0] ? element.getElementsByTagName("svg")[0].getAttribute("width") : 14,
			    stars = [],
			    starsHolder = document.createElement("div"),
			    star = document.createElementNS('http://www.w3.org/2000/svg', "svg");

			//change star type
			function starChange(val) {
				stars.forEach(function (star, i) {
					if (i < val) {
						if (self.table.browser == "ie") {
							star.setAttribute("class", "tabulator-star-active");
						} else {
							star.classList.replace("tabulator-star-inactive", "tabulator-star-active");
						}

						star.innerHTML = '<polygon fill="#488CE9" stroke="#014AAE" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>';
					} else {
						if (self.table.browser == "ie") {
							star.setAttribute("class", "tabulator-star-inactive");
						} else {
							star.classList.replace("tabulator-star-active", "tabulator-star-inactive");
						}

						star.innerHTML = '<polygon fill="#010155" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>';
					}
				});
			}

			//build stars
			function buildStar(i) {

				var starHolder = document.createElement("span");
				var nextStar = star.cloneNode(true);

				stars.push(nextStar);

				starHolder.addEventListener("mouseenter", function (e) {
					e.stopPropagation();
					e.stopImmediatePropagation();
					starChange(i);
				});

				starHolder.addEventListener("mousemove", function (e) {
					e.stopPropagation();
					e.stopImmediatePropagation();
				});

				starHolder.addEventListener("click", function (e) {
					e.stopPropagation();
					e.stopImmediatePropagation();
					success(i);
				});

				starHolder.appendChild(nextStar);
				starsHolder.appendChild(starHolder);
			}

			//handle keyboard navigation value change
			function changeValue(val) {
				value = val;
				starChange(val);
			}

			//style cell
			element.style.whiteSpace = "nowrap";
			element.style.overflow = "hidden";
			element.style.textOverflow = "ellipsis";

			//style holding element
			starsHolder.style.verticalAlign = "middle";
			starsHolder.style.display = "inline-block";
			starsHolder.style.padding = "4px";

			//style star
			star.setAttribute("width", size);
			star.setAttribute("height", size);
			star.setAttribute("viewBox", "0 0 512 512");
			star.setAttribute("xml:space", "preserve");
			star.style.padding = "0 1px";

			if (editorParams.elementAttributes && _typeof(editorParams.elementAttributes) == "object") {
				for (var key in editorParams.elementAttributes) {
					if (key.charAt(0) == "+") {
						key = key.slice(1);
						starsHolder.setAttribute(key, starsHolder.getAttribute(key) + editorParams.elementAttributes["+" + key]);
					} else {
						starsHolder.setAttribute(key, editorParams.elementAttributes[key]);
					}
				}
			}

			//create correct number of stars
			for (var i = 1; i <= maxStars; i++) {
				buildStar(i);
			}

			//ensure value does not exceed number of stars
			value = Math.min(parseInt(value), maxStars);

			// set initial styling of stars
			starChange(value);

			starsHolder.addEventListener("mousemove", function (e) {
				starChange(0);
			});

			starsHolder.addEventListener("click", function (e) {
				success(0);
			});

			element.addEventListener("blur", function (e) {
				cancel();
			});

			//allow key based navigation
			element.addEventListener("keydown", function (e) {
				switch (e.keyCode) {
					case 39:
						//right arrow
						changeValue(value + 1);
						break;

					case 37:
						//left arrow
						changeValue(value - 1);
						break;

					case 13:
						//enter
						success(value);
						break;

					case 27:
						//escape
						cancel();
						break;
				}
			});

			return starsHolder;
		},

		//draggable progress bar
		progress: function progress(cell, onRendered, success, cancel, editorParams) {
			var element = cell.getElement(),
			    max = typeof editorParams.max === "undefined" ? element.getElementsByTagName("div")[0].getAttribute("max") || 100 : editorParams.max,
			    min = typeof editorParams.min === "undefined" ? element.getElementsByTagName("div")[0].getAttribute("min") || 0 : editorParams.min,
			    percent = (max - min) / 100,
			    value = cell.getValue() || 0,
			    handle = document.createElement("div"),
			    bar = document.createElement("div"),
			    mouseDrag,
			    mouseDragWidth;

			//set new value
			function updateValue() {
				var calcVal = percent * Math.round(bar.offsetWidth / (element.clientWidth / 100)) + min;
				success(calcVal);
				element.setAttribute("aria-valuenow", calcVal);
				element.setAttribute("aria-label", value);
			}

			//style handle
			handle.style.position = "absolute";
			handle.style.right = "0";
			handle.style.top = "0";
			handle.style.bottom = "0";
			handle.style.width = "5px";
			handle.classList.add("tabulator-progress-handle");

			//style bar
			bar.style.display = "inline-block";
			bar.style.position = "relative";
			// bar.style.top = "8px";
			// bar.style.bottom = "8px";
			// bar.style.left = "4px";
			// bar.style.marginRight = "4px";
			bar.style.height = "100%";
			bar.style.backgroundColor = "#488CE9";
			bar.style.maxWidth = "100%";
			bar.style.minWidth = "0%";

			if (editorParams.elementAttributes && _typeof(editorParams.elementAttributes) == "object") {
				for (var key in editorParams.elementAttributes) {
					if (key.charAt(0) == "+") {
						key = key.slice(1);
						bar.setAttribute(key, bar.getAttribute(key) + editorParams.elementAttributes["+" + key]);
					} else {
						bar.setAttribute(key, editorParams.elementAttributes[key]);
					}
				}
			}

			//style cell
			element.style.padding = "4px 4px";

			//make sure value is in range
			value = Math.min(parseFloat(value), max);
			value = Math.max(parseFloat(value), min);

			//workout percentage
			value = Math.round((value - min) / percent);
			// bar.style.right = value + "%";
			bar.style.width = value + "%";

			element.setAttribute("aria-valuemin", min);
			element.setAttribute("aria-valuemax", max);

			bar.appendChild(handle);

			handle.addEventListener("mousedown", function (e) {
				mouseDrag = e.screenX;
				mouseDragWidth = bar.offsetWidth;
			});

			handle.addEventListener("mouseover", function () {
				handle.style.cursor = "ew-resize";
			});

			element.addEventListener("mousemove", function (e) {
				if (mouseDrag) {
					bar.style.width = mouseDragWidth + e.screenX - mouseDrag + "px";
				}
			});

			element.addEventListener("mouseup", function (e) {
				if (mouseDrag) {
					e.stopPropagation();
					e.stopImmediatePropagation();

					mouseDrag = false;
					mouseDragWidth = false;

					updateValue();
				}
			});

			//allow key based navigation
			element.addEventListener("keydown", function (e) {
				switch (e.keyCode) {
					case 39:
						//right arrow
						bar.style.width = bar.clientWidth + element.clientWidth / 100 + "px";
						break;

					case 37:
						//left arrow
						bar.style.width = bar.clientWidth - element.clientWidth / 100 + "px";
						break;

					case 13:
						//enter
						updateValue();
						break;

					case 27:
						//escape
						cancel();
						break;

				}
			});

			element.addEventListener("blur", function () {
				cancel();
			});

			return bar;
		},

		//checkbox
		tickCross: function tickCross(cell, onRendered, success, cancel, editorParams) {
			var value = cell.getValue(),
			    input = document.createElement("input"),
			    tristate = editorParams.tristate,
			    indetermValue = typeof editorParams.indeterminateValue === "undefined" ? null : editorParams.indeterminateValue,
			    indetermState = false;

			input.setAttribute("type", "checkbox");
			input.style.marginTop = "5px";
			input.style.boxSizing = "border-box";

			if (editorParams.elementAttributes && _typeof(editorParams.elementAttributes) == "object") {
				for (var key in editorParams.elementAttributes) {
					if (key.charAt(0) == "+") {
						key = key.slice(1);
						input.setAttribute(key, input.getAttribute(key) + editorParams.elementAttributes["+" + key]);
					} else {
						input.setAttribute(key, editorParams.elementAttributes[key]);
					}
				}
			}

			input.value = value;

			if (tristate && (typeof value === "undefined" || value === indetermValue || value === "")) {
				indetermState = true;
				input.indeterminate = true;
			}

			if (this.table.browser != "firefox") {
				//prevent blur issue on mac firefox
				onRendered(function () {
					input.focus();
				});
			}

			input.checked = value === true || value === "true" || value === "True" || value === 1;

			function setValue(blur) {
				if (tristate) {
					if (!blur) {
						if (input.checked && !indetermState) {
							input.checked = false;
							input.indeterminate = true;
							indetermState = true;
							return indetermValue;
						} else {
							indetermState = false;
							return input.checked;
						}
					} else {
						if (indetermState) {
							return indetermValue;
						} else {
							return input.checked;
						}
					}
				} else {
					return input.checked;
				}
			}

			//submit new value on blur
			input.addEventListener("change", function (e) {
				success(setValue());
			});

			input.addEventListener("blur", function (e) {
				success(setValue(true));
			});

			//submit new value on enter
			input.addEventListener("keydown", function (e) {
				if (e.keyCode == 13) {
					success(setValue());
				}
				if (e.keyCode == 27) {
					cancel();
				}
			});

			return input;
		}
	};

	Tabulator.prototype.registerModule("edit", Edit);

	var Export = function Export(table) {
		this.table = table; //hold Tabulator object
		this.config = {};
		this.cloneTableStyle = true;
		this.colVisProp = "";
	};

	Export.prototype.genereateTable = function (config, style, range, colVisProp) {
		this.cloneTableStyle = style;
		this.config = config || {};
		this.colVisProp = colVisProp;

		var table = document.createElement("table");
		table.classList.add("tabulator-print-table");

		if (this.config.columnHeaders !== false) {
			table.appendChild(this.generateHeaderElements());
		}

		table.appendChild(this.generateBodyElements(this.rowLookup(range)));

		this.mapElementStyles(this.table.element, table, ["border-top", "border-left", "border-right", "border-bottom"]);

		return table;
	};

	Export.prototype.rowLookup = function (range) {
		var _this44 = this;

		var rows = [];

		if (typeof range == "function") {
			range.call(this.table).forEach(function (row) {
				row = _this44.table.rowManager.findRow(row);

				if (row) {
					rows.push(row);
				}
			});
		} else {
			switch (range) {
				case true:
				case "visible":
					rows = this.table.rowManager.getVisibleRows(true);
					break;

				case "all":
					rows = this.table.rowManager.rows;
					break;

				case "selected":
					rows = this.modules.selectRow.selectedRows;
					break;

				case "active":
				default:
					rows = this.table.rowManager.getDisplayRows();
			}
		}

		return Object.assign([], rows);
	};

	Export.prototype.generateColumnGroupHeaders = function () {
		var _this45 = this;

		var output = [];

		var columns = this.config.columnGroups !== false ? this.table.columnManager.columns : this.table.columnManager.columnsByIndex;

		columns.forEach(function (column) {
			var colData = _this45.processColumnGroup(column);

			if (colData) {
				output.push(colData);
			}
		});

		return output;
	};

	Export.prototype.processColumnGroup = function (column) {
		var _this46 = this;

		var subGroups = column.columns,
		    maxDepth = 0;

		var groupData = {
			title: column.definition.title,
			column: column,
			depth: 1
		};

		if (subGroups.length) {
			groupData.subGroups = [];
			groupData.width = 0;

			subGroups.forEach(function (subGroup) {
				var subGroupData = _this46.processColumnGroup(subGroup);

				if (subGroupData) {
					groupData.width += subGroupData.width;
					groupData.subGroups.push(subGroupData);

					if (subGroupData.depth > maxDepth) {
						maxDepth = subGroupData.depth;
					}
				}
			});

			groupData.depth += maxDepth;

			if (!groupData.width) {
				return false;
			}
		} else {
			if (this.columnVisCheck(column)) {
				groupData.width = 1;
			} else {
				return false;
			}
		}

		return groupData;
	};

	Export.prototype.groupHeadersToRows = function (columns) {

		var headers = [],
		    headerDepth = 0;

		function parseColumnGroup(column, level) {

			var depth = headerDepth - level;

			if (typeof headers[level] === "undefined") {
				headers[level] = [];
			}

			column.height = column.subGroups ? 1 : depth - column.depth + 1;

			headers[level].push(column);

			if (column.subGroups) {
				column.subGroups.forEach(function (subGroup) {
					parseColumnGroup(subGroup, level + 1);
				});
			}
		}

		//calculate maximum header debth
		columns.forEach(function (column) {
			if (column.depth > headerDepth) {
				headerDepth = column.depth;
			}
		});

		columns.forEach(function (column) {
			parseColumnGroup(column, 0);
		});

		return headers;
	};

	Export.prototype.generateHeaderElements = function () {
		var _this47 = this;

		var headerEl = document.createElement("thead");

		var rows = this.groupHeadersToRows(this.generateColumnGroupHeaders());

		rows.forEach(function (row) {
			var rowEl = document.createElement("tr");

			_this47.mapElementStyles(_this47.table.columnManager.getHeadersElement(), headerEl, ["border-top", "border-left", "border-right", "border-bottom", "background-color", "color", "font-weight", "font-family", "font-size"]);

			row.forEach(function (column) {
				var cellEl = document.createElement("th");
				var classNames = column.column.definition.cssClass ? column.column.definition.cssClass.split(" ") : [];

				cellEl.colSpan = column.width;
				cellEl.rowSpan = column.height;

				cellEl.innerHTML = column.column.definition.title;

				if (_this47.cloneTableStyle) {
					cellEl.style.boxSizing = "border-box";
				}

				classNames.forEach(function (className) {
					cellEl.classList.add(className);
				});

				_this47.mapElementStyles(column.column.getElement(), cellEl, ["text-align", "border-top", "border-left", "border-right", "border-bottom", "background-color", "color", "font-weight", "font-family", "font-size"]);
				_this47.mapElementStyles(column.column.contentElement, cellEl, ["padding-top", "padding-left", "padding-right", "padding-bottom"]);

				if (column.column.visible) {
					_this47.mapElementStyles(column.column.getElement(), cellEl, ["width"]);
				} else {
					if (column.column.definition.width) {
						cellEl.style.width = column.column.definition.width + "px";
					}
				}

				if (column.column.parent) {
					_this47.mapElementStyles(column.column.parent.groupElement, cellEl, ["border-top"]);
				}

				rowEl.appendChild(cellEl);
			});

			headerEl.appendChild(rowEl);
		});

		return headerEl;
	};

	Export.prototype.generateBodyElements = function (rows) {};

	Export.prototype.generateBodyElements = function (rows) {
		var _this48 = this;

		var oddRow, evenRow, calcRow, firstRow, firstCell, firstGroup, lastCell, styleCells, styleRow, treeElementField, rowFormatter;

		//assign row formatter
		rowFormatter = this.table.options["rowFormatter" + (this.colVisProp.charAt(0).toUpperCase() + this.colVisProp.slice(1))];
		rowFormatter = rowFormatter !== null ? rowFormatter : this.table.options.rowFormatter;

		//lookup row styles
		if (this.cloneTableStyle && window.getComputedStyle) {
			oddRow = this.table.element.querySelector(".tabulator-row-odd:not(.tabulator-group):not(.tabulator-calcs)");
			evenRow = this.table.element.querySelector(".tabulator-row-even:not(.tabulator-group):not(.tabulator-calcs)");
			calcRow = this.table.element.querySelector(".tabulator-row.tabulator-calcs");
			firstRow = this.table.element.querySelector(".tabulator-row:not(.tabulator-group):not(.tabulator-calcs)");
			firstGroup = this.table.element.getElementsByClassName("tabulator-group")[0];

			if (firstRow) {
				styleCells = firstRow.getElementsByClassName("tabulator-cell");
				firstCell = styleCells[0];
				lastCell = styleCells[styleCells.length - 1];
			}
		}

		var bodyEl = document.createElement("tbody");

		var columns = [];

		if (this.config.columnCalcs !== false && this.table.modExists("columnCalcs")) {
			if (this.table.modules.columnCalcs.topInitialized) {
				rows.unshift(this.table.modules.columnCalcs.topRow);
			}

			if (this.table.modules.columnCalcs.botInitialized) {
				rows.push(this.table.modules.columnCalcs.botRow);
			}
		}

		this.table.columnManager.columnsByIndex.forEach(function (column) {
			if (_this48.columnVisCheck(column)) {
				columns.push(column);
			}
		});

		if (this.table.options.dataTree && this.config.dataTree !== false && this.table.modExists("columnCalcs")) {
			treeElementField = this.table.modules.dataTree.elementField;
		}

		rows = rows.filter(function (row) {
			switch (row.type) {
				case "group":
					return _this48.config.rowGroups !== false;
					break;

				case "calc":
					return _this48.config.columnCalcs !== false;
					break;
			}

			return true;
		});

		if (rows.length > 1000) {
			console.warn("It may take a long time to render an HTML table with more than 1000 rows");
		}

		rows.forEach(function (row, i) {
			var rowData = row.getData(_this48.colVisProp);

			var rowEl = document.createElement("tr");
			rowEl.classList.add("tabulator-print-table-row");

			switch (row.type) {
				case "group":
					var cellEl = document.createElement("td");
					cellEl.colSpan = columns.length;
					cellEl.innerHTML = row.key;

					rowEl.classList.add("tabulator-print-table-group");

					_this48.mapElementStyles(firstGroup, rowEl, ["border-top", "border-left", "border-right", "border-bottom", "color", "font-weight", "font-family", "font-size", "background-color"]);
					_this48.mapElementStyles(firstGroup, cellEl, ["padding-top", "padding-left", "padding-right", "padding-bottom"]);
					rowEl.appendChild(cellEl);
					break;

				case "calc":
					rowEl.classList.add("tabulator-print-table-calcs");

				case "row":

					if (_this48.table.options.dataTree && _this48.config.dataTree === false && row.modules.dataTree.parent) {
						return;
					}

					columns.forEach(function (column, i) {
						var cellEl = document.createElement("td");

						var value = column.getFieldValue(rowData);

						var cellWrapper = {
							modules: {},
							getValue: function getValue() {
								return value;
							},
							getField: function getField() {
								return column.definition.field;
							},
							getElement: function getElement() {
								return cellEl;
							},
							getColumn: function getColumn() {
								return column.getComponent();
							},
							getData: function getData() {
								return rowData;
							},
							getRow: function getRow() {
								return row.getComponent();
							},
							getComponent: function getComponent() {
								return cellWrapper;
							},
							column: column
						};

						var classNames = column.definition.cssClass ? column.definition.cssClass.split(" ") : [];

						classNames.forEach(function (className) {
							cellEl.classList.add(className);
						});

						if (_this48.table.modExists("format") && _this48.config.formatCells !== false) {
							value = _this48.table.modules.format.formatExportValue(cellWrapper, _this48.colVisProp);
						} else {
							switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
								case "object":
									value = JSON.stringify(value);
									break;

								case "undefined":
								case "null":
									value = "";
									break;

								default:
									value = value;
							}
						}

						if (value instanceof Node) {
							cellEl.appendChild(value);
						} else {
							cellEl.innerHTML = value;
						}

						if (firstCell) {
							_this48.mapElementStyles(firstCell, cellEl, ["padding-top", "padding-left", "padding-right", "padding-bottom", "border-top", "border-left", "border-right", "border-bottom", "color", "font-weight", "font-family", "font-size"]);

							if (column.definition.align) {
								cellEl.style.textAlign = column.definition.align;
							}
						}

						if (_this48.table.options.dataTree && _this48.config.dataTree !== false) {
							if (treeElementField && treeElementField == column.field || !treeElementField && i == 0) {
								if (row.modules.dataTree.controlEl) {
									cellEl.insertBefore(row.modules.dataTree.controlEl.cloneNode(true), cellEl.firstChild);
								}
								if (row.modules.dataTree.branchEl) {
									cellEl.insertBefore(row.modules.dataTree.branchEl.cloneNode(true), cellEl.firstChild);
								}
							}
						}

						rowEl.appendChild(cellEl);

						if (cellWrapper.modules.format && cellWrapper.modules.format.renderedCallback) {
							cellWrapper.modules.format.renderedCallback();
						}
					});

					styleRow = row.type == "calc" ? calcRow : i % 2 && evenRow ? evenRow : oddRow;

					_this48.mapElementStyles(styleRow, rowEl, ["border-top", "border-left", "border-right", "border-bottom", "color", "font-weight", "font-family", "font-size", "background-color"]);

					if (rowFormatter && _this48.config.formatCells !== false) {
						var rowComponent = row.getComponent();

						rowComponent.getElement = function () {
							return rowEl;
						};

						rowFormatter(rowComponent);
					}

					break;
			}

			bodyEl.appendChild(rowEl);
		});

		return bodyEl;
	};

	Export.prototype.columnVisCheck = function (column) {
		return column.definition[this.colVisProp] !== false && (column.visible || !column.visible && column.definition[this.colVisProp]);
	};

	Export.prototype.getHtml = function (visible, style, config, colVisProp) {
		var holder = document.createElement("div");

		holder.appendChild(this.genereateTable(config || this.table.options.htmlOutputConfig, style, visible, colVisProp || "htmlOutput"));

		return holder.innerHTML;
	};

	Export.prototype.mapElementStyles = function (from, to, props) {
		if (this.cloneTableStyle && from && to) {

			var lookup = {
				"background-color": "backgroundColor",
				"color": "fontColor",
				"width": "width",
				"font-weight": "fontWeight",
				"font-family": "fontFamily",
				"font-size": "fontSize",
				"text-align": "textAlign",
				"border-top": "borderTop",
				"border-left": "borderLeft",
				"border-right": "borderRight",
				"border-bottom": "borderBottom",
				"padding-top": "paddingTop",
				"padding-left": "paddingLeft",
				"padding-right": "paddingRight",
				"padding-bottom": "paddingBottom"
			};

			if (window.getComputedStyle) {
				var fromStyle = window.getComputedStyle(from);

				props.forEach(function (prop) {
					to.style[lookup[prop]] = fromStyle.getPropertyValue(prop);
				});
			}
		}
	};

	Tabulator.prototype.registerModule("export", Export);

	var Filter = function Filter(table) {

		this.table = table; //hold Tabulator object

		this.filterList = []; //hold filter list
		this.headerFilters = {}; //hold column filters
		this.headerFilterColumns = []; //hold columns that use header filters

		this.prevHeaderFilterChangeCheck = "";
		this.prevHeaderFilterChangeCheck = "{}";

		this.changed = false; //has filtering changed since last render
	};

	//initialize column header filter
	Filter.prototype.initializeColumn = function (column, value) {
		var self = this,
		    field = column.getField(),
		    params;

		//handle successfull value change
		function success(value) {
			var filterType = column.modules.filter.tagType == "input" && column.modules.filter.attrType == "text" || column.modules.filter.tagType == "textarea" ? "partial" : "match",
			    type = "",
			    filterChangeCheck = "",
			    filterFunc;

			if (typeof column.modules.filter.prevSuccess === "undefined" || column.modules.filter.prevSuccess !== value) {

				column.modules.filter.prevSuccess = value;

				if (!column.modules.filter.emptyFunc(value)) {
					column.modules.filter.value = value;

					switch (_typeof(column.definition.headerFilterFunc)) {
						case "string":
							if (self.filters[column.definition.headerFilterFunc]) {
								type = column.definition.headerFilterFunc;
								filterFunc = function filterFunc(data) {
									var params = column.definition.headerFilterFuncParams || {};
									var fieldVal = column.getFieldValue(data);

									params = typeof params === "function" ? params(value, fieldVal, data) : params;

									return self.filters[column.definition.headerFilterFunc](value, fieldVal, data, params);
								};
							} else {
								console.warn("Header Filter Error - Matching filter function not found: ", column.definition.headerFilterFunc);
							}
							break;

						case "function":
							filterFunc = function filterFunc(data) {
								var params = column.definition.headerFilterFuncParams || {};
								var fieldVal = column.getFieldValue(data);

								params = typeof params === "function" ? params(value, fieldVal, data) : params;

								return column.definition.headerFilterFunc(value, fieldVal, data, params);
							};

							type = filterFunc;
							break;
					}

					if (!filterFunc) {
						switch (filterType) {
							case "partial":
								filterFunc = function filterFunc(data) {
									var colVal = column.getFieldValue(data);

									if (typeof colVal !== 'undefined' && colVal !== null) {
										return String(colVal).toLowerCase().indexOf(String(value).toLowerCase()) > -1;
									} else {
										return false;
									}
								};
								type = "like";
								break;

							default:
								filterFunc = function filterFunc(data) {
									return column.getFieldValue(data) == value;
								};
								type = "=";
						}
					}

					self.headerFilters[field] = { value: value, func: filterFunc, type: type };
				} else {
					delete self.headerFilters[field];
				}

				filterChangeCheck = JSON.stringify(self.headerFilters);

				if (self.prevHeaderFilterChangeCheck !== filterChangeCheck) {
					self.prevHeaderFilterChangeCheck = filterChangeCheck;

					self.changed = true;
					self.table.rowManager.filterRefresh();
				}
			}

			return true;
		}

		column.modules.filter = {
			success: success,
			attrType: false,
			tagType: false,
			emptyFunc: false
		};

		this.generateHeaderFilterElement(column);
	};

	Filter.prototype.generateHeaderFilterElement = function (column, initialValue, reinitialize) {
		var _this49 = this;

		var self = this,
		    success = column.modules.filter.success,
		    field = column.getField(),
		    filterElement,
		    editor,
		    editorElement,
		    cellWrapper,
		    typingTimer,
		    searchTrigger,
		    params;

		//handle aborted edit
		function cancel() {}

		if (column.modules.filter.headerElement && column.modules.filter.headerElement.parentNode) {
			column.contentElement.removeChild(column.modules.filter.headerElement.parentNode);
		}

		if (field) {

			//set empty value function
			column.modules.filter.emptyFunc = column.definition.headerFilterEmptyCheck || function (value) {
				return !value && value !== "0";
			};

			filterElement = document.createElement("div");
			filterElement.classList.add("tabulator-header-filter");

			//set column editor
			switch (_typeof(column.definition.headerFilter)) {
				case "string":
					if (self.table.modules.edit.editors[column.definition.headerFilter]) {
						editor = self.table.modules.edit.editors[column.definition.headerFilter];

						if ((column.definition.headerFilter === "tick" || column.definition.headerFilter === "tickCross") && !column.definition.headerFilterEmptyCheck) {
							column.modules.filter.emptyFunc = function (value) {
								return value !== true && value !== false;
							};
						}
					} else {
						console.warn("Filter Error - Cannot build header filter, No such editor found: ", column.definition.editor);
					}
					break;

				case "function":
					editor = column.definition.headerFilter;
					break;

				case "boolean":
					if (column.modules.edit && column.modules.edit.editor) {
						editor = column.modules.edit.editor;
					} else {
						if (column.definition.formatter && self.table.modules.edit.editors[column.definition.formatter]) {
							editor = self.table.modules.edit.editors[column.definition.formatter];

							if ((column.definition.formatter === "tick" || column.definition.formatter === "tickCross") && !column.definition.headerFilterEmptyCheck) {
								column.modules.filter.emptyFunc = function (value) {
									return value !== true && value !== false;
								};
							}
						} else {
							editor = self.table.modules.edit.editors["input"];
						}
					}
					break;
			}

			if (editor) {

				cellWrapper = {
					getValue: function getValue() {
						return typeof initialValue !== "undefined" ? initialValue : "";
					},
					getField: function getField() {
						return column.definition.field;
					},
					getElement: function getElement() {
						return filterElement;
					},
					getColumn: function getColumn() {
						return column.getComponent();
					},
					getRow: function getRow() {
						return {
							normalizeHeight: function normalizeHeight() {}
						};
					}
				};

				params = column.definition.headerFilterParams || {};

				params = typeof params === "function" ? params.call(self.table) : params;

				editorElement = editor.call(this.table.modules.edit, cellWrapper, function () {}, success, cancel, params);

				if (!editorElement) {
					console.warn("Filter Error - Cannot add filter to " + field + " column, editor returned a value of false");
					return;
				}

				if (!(editorElement instanceof Node)) {
					console.warn("Filter Error - Cannot add filter to " + field + " column, editor should return an instance of Node, the editor returned:", editorElement);
					return;
				}

				//set Placeholder Text
				if (field) {
					self.table.modules.localize.bind("headerFilters|columns|" + column.definition.field, function (value) {
						editorElement.setAttribute("placeholder", typeof value !== "undefined" && value ? value : self.table.modules.localize.getText("headerFilters|default"));
					});
				} else {
					self.table.modules.localize.bind("headerFilters|default", function (value) {
						editorElement.setAttribute("placeholder", typeof self.column.definition.headerFilterPlaceholder !== "undefined" && self.column.definition.headerFilterPlaceholder ? self.column.definition.headerFilterPlaceholder : value);
					});
				}

				//focus on element on click
				editorElement.addEventListener("click", function (e) {
					e.stopPropagation();
					editorElement.focus();
				});

				editorElement.addEventListener("focus", function (e) {
					var left = _this49.table.columnManager.element.scrollLeft;

					if (left !== _this49.table.rowManager.element.scrollLeft) {
						_this49.table.rowManager.scrollHorizontal(left);
						_this49.table.columnManager.scrollHorizontal(left);
					}
				});

				//live update filters as user types
				typingTimer = false;

				searchTrigger = function searchTrigger(e) {
					if (typingTimer) {
						clearTimeout(typingTimer);
					}

					typingTimer = setTimeout(function () {
						success(editorElement.value);
					}, self.table.options.headerFilterLiveFilterDelay);
				};

				column.modules.filter.headerElement = editorElement;
				column.modules.filter.attrType = editorElement.hasAttribute("type") ? editorElement.getAttribute("type").toLowerCase() : "";
				column.modules.filter.tagType = editorElement.tagName.toLowerCase();

				if (column.definition.headerFilterLiveFilter !== false) {

					if (!(column.definition.headerFilter === 'autocomplete' || column.definition.headerFilter === 'tickCross' || (column.definition.editor === 'autocomplete' || column.definition.editor === 'tickCross') && column.definition.headerFilter === true)) {
						editorElement.addEventListener("keyup", searchTrigger);
						editorElement.addEventListener("search", searchTrigger);

						//update number filtered columns on change
						if (column.modules.filter.attrType == "number") {
							editorElement.addEventListener("change", function (e) {
								success(editorElement.value);
							});
						}

						//change text inputs to search inputs to allow for clearing of field
						if (column.modules.filter.attrType == "text" && this.table.browser !== "ie") {
							editorElement.setAttribute("type", "search");
							// editorElement.off("change blur"); //prevent blur from triggering filter and preventing selection click
						}
					}

					//prevent input and select elements from propegating click to column sorters etc
					if (column.modules.filter.tagType == "input" || column.modules.filter.tagType == "select" || column.modules.filter.tagType == "textarea") {
						editorElement.addEventListener("mousedown", function (e) {
							e.stopPropagation();
						});
					}
				}

				filterElement.appendChild(editorElement);

				column.contentElement.appendChild(filterElement);

				if (!reinitialize) {
					self.headerFilterColumns.push(column);
				}
			}
		} else {
			console.warn("Filter Error - Cannot add header filter, column has no field set:", column.definition.title);
		}
	};

	//hide all header filter elements (used to ensure correct column widths in "fitData" layout mode)
	Filter.prototype.hideHeaderFilterElements = function () {
		this.headerFilterColumns.forEach(function (column) {
			if (column.modules.filter && column.modules.filter.headerElement) {
				column.modules.filter.headerElement.style.display = 'none';
			}
		});
	};

	//show all header filter elements (used to ensure correct column widths in "fitData" layout mode)
	Filter.prototype.showHeaderFilterElements = function () {
		this.headerFilterColumns.forEach(function (column) {
			if (column.modules.filter && column.modules.filter.headerElement) {
				column.modules.filter.headerElement.style.display = '';
			}
		});
	};

	//programatically set focus of header filter
	Filter.prototype.setHeaderFilterFocus = function (column) {
		if (column.modules.filter && column.modules.filter.headerElement) {
			column.modules.filter.headerElement.focus();
		} else {
			console.warn("Column Filter Focus Error - No header filter set on column:", column.getField());
		}
	};

	//programmatically get value of header filter
	Filter.prototype.getHeaderFilterValue = function (column) {
		if (column.modules.filter && column.modules.filter.headerElement) {
			return column.modules.filter.headerElement.value;
		} else {
			console.warn("Column Filter Error - No header filter set on column:", column.getField());
		}
	};

	//programatically set value of header filter
	Filter.prototype.setHeaderFilterValue = function (column, value) {
		if (column) {
			if (column.modules.filter && column.modules.filter.headerElement) {
				this.generateHeaderFilterElement(column, value, true);
				column.modules.filter.success(value);
			} else {
				console.warn("Column Filter Error - No header filter set on column:", column.getField());
			}
		}
	};

	Filter.prototype.reloadHeaderFilter = function (column) {
		if (column) {
			if (column.modules.filter && column.modules.filter.headerElement) {
				this.generateHeaderFilterElement(column, column.modules.filter.value, true);
			} else {
				console.warn("Column Filter Error - No header filter set on column:", column.getField());
			}
		}
	};

	//check if the filters has changed since last use
	Filter.prototype.hasChanged = function () {
		var changed = this.changed;
		this.changed = false;
		return changed;
	};

	//set standard filters
	Filter.prototype.setFilter = function (field, type, value) {
		var self = this;

		self.filterList = [];

		if (!Array.isArray(field)) {
			field = [{ field: field, type: type, value: value }];
		}

		self.addFilter(field);
	};

	//add filter to array
	Filter.prototype.addFilter = function (field, type, value) {
		var self = this;

		if (!Array.isArray(field)) {
			field = [{ field: field, type: type, value: value }];
		}

		field.forEach(function (filter) {

			filter = self.findFilter(filter);

			if (filter) {
				self.filterList.push(filter);

				self.changed = true;
			}
		});

		if (this.table.options.persistence && this.table.modExists("persistence", true) && this.table.modules.persistence.config.filter) {
			this.table.modules.persistence.save("filter");
		}
	};

	Filter.prototype.findFilter = function (filter) {
		var self = this,
		    column;

		if (Array.isArray(filter)) {
			return this.findSubFilters(filter);
		}

		var filterFunc = false;

		if (typeof filter.field == "function") {
			filterFunc = function filterFunc(data) {
				return filter.field(data, filter.type || {}); // pass params to custom filter function
			};
		} else {

			if (self.filters[filter.type]) {

				column = self.table.columnManager.getColumnByField(filter.field);

				if (column) {
					filterFunc = function filterFunc(data) {
						return self.filters[filter.type](filter.value, column.getFieldValue(data));
					};
				} else {
					filterFunc = function filterFunc(data) {
						return self.filters[filter.type](filter.value, data[filter.field]);
					};
				}
			} else {
				console.warn("Filter Error - No such filter type found, ignoring: ", filter.type);
			}
		}

		filter.func = filterFunc;

		return filter.func ? filter : false;
	};

	Filter.prototype.findSubFilters = function (filters) {
		var self = this,
		    output = [];

		filters.forEach(function (filter) {
			filter = self.findFilter(filter);

			if (filter) {
				output.push(filter);
			}
		});

		return output.length ? output : false;
	};

	//get all filters
	Filter.prototype.getFilters = function (all, ajax) {
		var output = [];

		if (all) {
			output = this.getHeaderFilters();
		}

		if (ajax) {
			output.forEach(function (item) {
				if (typeof item.type == "function") {
					item.type = "function";
				}
			});
		}

		output = output.concat(this.filtersToArray(this.filterList, ajax));

		return output;
	};

	//filter to Object
	Filter.prototype.filtersToArray = function (filterList, ajax) {
		var _this50 = this;

		var output = [];

		filterList.forEach(function (filter) {
			var item;

			if (Array.isArray(filter)) {
				output.push(_this50.filtersToArray(filter, ajax));
			} else {
				item = { field: filter.field, type: filter.type, value: filter.value };

				if (ajax) {
					if (typeof item.type == "function") {
						item.type = "function";
					}
				}

				output.push(item);
			}
		});

		return output;
	};

	//get all filters
	Filter.prototype.getHeaderFilters = function () {
		var self = this,
		    output = [];

		for (var key in this.headerFilters) {
			output.push({ field: key, type: this.headerFilters[key].type, value: this.headerFilters[key].value });
		}

		return output;
	};

	//remove filter from array
	Filter.prototype.removeFilter = function (field, type, value) {
		var self = this;

		if (!Array.isArray(field)) {
			field = [{ field: field, type: type, value: value }];
		}

		field.forEach(function (filter) {
			var index = -1;

			if (_typeof(filter.field) == "object") {
				index = self.filterList.findIndex(function (element) {
					return filter === element;
				});
			} else {
				index = self.filterList.findIndex(function (element) {
					return filter.field === element.field && filter.type === element.type && filter.value === element.value;
				});
			}

			if (index > -1) {
				self.filterList.splice(index, 1);
				self.changed = true;
			} else {
				console.warn("Filter Error - No matching filter type found, ignoring: ", filter.type);
			}
		});

		if (this.table.options.persistence && this.table.modExists("persistence", true) && this.table.modules.persistence.config.filter) {
			this.table.modules.persistence.save("filter");
		}
	};

	//clear filters
	Filter.prototype.clearFilter = function (all) {
		this.filterList = [];

		if (all) {
			this.clearHeaderFilter();
		}

		this.changed = true;

		if (this.table.options.persistence && this.table.modExists("persistence", true) && this.table.modules.persistence.config.filter) {
			this.table.modules.persistence.save("filter");
		}
	};

	//clear header filters
	Filter.prototype.clearHeaderFilter = function () {
		var self = this;

		this.headerFilters = {};
		self.prevHeaderFilterChangeCheck = "{}";

		this.headerFilterColumns.forEach(function (column) {
			column.modules.filter.value = null;
			column.modules.filter.prevSuccess = undefined;
			self.reloadHeaderFilter(column);
		});

		this.changed = true;
	};

	//search data and return matching rows
	Filter.prototype.search = function (searchType, field, type, value) {
		var self = this,
		    activeRows = [],
		    filterList = [];

		if (!Array.isArray(field)) {
			field = [{ field: field, type: type, value: value }];
		}

		field.forEach(function (filter) {
			filter = self.findFilter(filter);

			if (filter) {
				filterList.push(filter);
			}
		});

		this.table.rowManager.rows.forEach(function (row) {
			var match = true;

			filterList.forEach(function (filter) {
				if (!self.filterRecurse(filter, row.getData())) {
					match = false;
				}
			});

			if (match) {
				activeRows.push(searchType === "data" ? row.getData("data") : row.getComponent());
			}
		});

		return activeRows;
	};

	//filter row array
	Filter.prototype.filter = function (rowList, filters) {
		var self = this,
		    activeRows = [],
		    activeRowComponents = [];

		if (self.table.options.dataFiltering) {
			self.table.options.dataFiltering.call(self.table, self.getFilters());
		}

		if (!self.table.options.ajaxFiltering && (self.filterList.length || Object.keys(self.headerFilters).length)) {

			rowList.forEach(function (row) {
				if (self.filterRow(row)) {
					activeRows.push(row);
				}
			});
		} else {
			activeRows = rowList.slice(0);
		}

		if (self.table.options.dataFiltered) {

			activeRows.forEach(function (row) {
				activeRowComponents.push(row.getComponent());
			});

			self.table.options.dataFiltered.call(self.table, self.getFilters(), activeRowComponents);
		}

		return activeRows;
	};

	//filter individual row
	Filter.prototype.filterRow = function (row, filters) {
		var self = this,
		    match = true,
		    data = row.getData();

		self.filterList.forEach(function (filter) {
			if (!self.filterRecurse(filter, data)) {
				match = false;
			}
		});

		for (var field in self.headerFilters) {
			if (!self.headerFilters[field].func(data)) {
				match = false;
			}
		}

		return match;
	};

	Filter.prototype.filterRecurse = function (filter, data) {
		var self = this,
		    match = false;

		if (Array.isArray(filter)) {
			filter.forEach(function (subFilter) {
				if (self.filterRecurse(subFilter, data)) {
					match = true;
				}
			});
		} else {
			match = filter.func(data);
		}

		return match;
	};

	//list of available filters
	Filter.prototype.filters = {

		//equal to
		"=": function _(filterVal, rowVal, rowData, filterParams) {
			return rowVal == filterVal ? true : false;
		},

		//less than
		"<": function _(filterVal, rowVal, rowData, filterParams) {
			return rowVal < filterVal ? true : false;
		},

		//less than or equal to
		"<=": function _(filterVal, rowVal, rowData, filterParams) {
			return rowVal <= filterVal ? true : false;
		},

		//greater than
		">": function _(filterVal, rowVal, rowData, filterParams) {
			return rowVal > filterVal ? true : false;
		},

		//greater than or equal to
		">=": function _(filterVal, rowVal, rowData, filterParams) {
			return rowVal >= filterVal ? true : false;
		},

		//not equal to
		"!=": function _(filterVal, rowVal, rowData, filterParams) {
			return rowVal != filterVal ? true : false;
		},

		"regex": function regex(filterVal, rowVal, rowData, filterParams) {

			if (typeof filterVal == "string") {
				filterVal = new RegExp(filterVal);
			}

			return filterVal.test(rowVal);
		},

		//contains the string
		"like": function like(filterVal, rowVal, rowData, filterParams) {
			if (filterVal === null || typeof filterVal === "undefined") {
				return rowVal === filterVal ? true : false;
			} else {
				if (typeof rowVal !== 'undefined' && rowVal !== null) {
					return String(rowVal).toLowerCase().indexOf(filterVal.toLowerCase()) > -1;
				} else {
					return false;
				}
			}
		},

		//in array
		"in": function _in(filterVal, rowVal, rowData, filterParams) {
			if (Array.isArray(filterVal)) {
				return filterVal.indexOf(rowVal) > -1;
			} else {
				console.warn("Filter Error - filter value is not an array:", filterVal);
				return false;
			}
		}
	};

	Tabulator.prototype.registerModule("filter", Filter);

	var Format = function Format(table) {
		this.table = table; //hold Tabulator object
	};

	//initialize column formatter
	Format.prototype.initializeColumn = function (column) {
		column.modules.format = this.lookupFormatter(column, "");

		if (typeof column.definition.formatterPrint !== "undefined") {
			column.modules.format.print = this.lookupFormatter(column, "Print");
		}

		if (typeof column.definition.formatterClipboard !== "undefined") {
			column.modules.format.clipboard = this.lookupFormatter(column, "Clipboard");
		}

		if (typeof column.definition.formatterHtmlOutput !== "undefined") {
			column.modules.format.htmlOutput = this.lookupFormatter(column, "HtmlOutput");
		}
	};

	Format.prototype.lookupFormatter = function (column, type) {
		var config = { params: column.definition["formatter" + type + "Params"] || {} },
		    formatter = column.definition["formatter" + type];

		//set column formatter
		switch (typeof formatter === 'undefined' ? 'undefined' : _typeof(formatter)) {
			case "string":

				if (formatter === "tick") {
					formatter = "tickCross";

					if (typeof config.params.crossElement == "undefined") {
						config.params.crossElement = false;
					}

					console.warn("DEPRECATION WARNING - the tick formatter has been deprecated, please use the tickCross formatter with the crossElement param set to false");
				}

				if (this.formatters[formatter]) {
					config.formatter = this.formatters[formatter];
				} else {
					console.warn("Formatter Error - No such formatter found: ", formatter);
					config.formatter = this.formatters.plaintext;
				}
				break;

			case "function":
				config.formatter = formatter;
				break;

			default:
				config.formatter = this.formatters.plaintext;
				break;
		}

		return config;
	};

	Format.prototype.cellRendered = function (cell) {
		if (cell.modules.format && cell.modules.format.renderedCallback) {
			cell.modules.format.renderedCallback();
		}
	};

	//return a formatted value for a cell
	Format.prototype.formatValue = function (cell) {
		var component = cell.getComponent(),
		    params = typeof cell.column.modules.format.params === "function" ? cell.column.modules.format.params(component) : cell.column.modules.format.params;

		function onRendered(callback) {
			if (!cell.modules.format) {
				cell.modules.format = {};
			}

			cell.modules.format.renderedCallback = callback;
		}

		return cell.column.modules.format.formatter.call(this, component, params, onRendered);
	};

	Format.prototype.formatExportValue = function (cell, type) {
		var formatter = cell.column.modules.format[type],
		    params;

		if (formatter) {
			var onRendered = function onRendered(callback) {
				if (!cell.modules.format) {
					cell.modules.format = {};
				}

				cell.modules.format.renderedCallback = callback;
			};

			params = typeof formatter.params === "function" ? formatter.params(component) : formatter.params;

			return formatter.formatter.call(this, cell.getComponent(), params, onRendered);
		} else {
			return this.formatValue(cell);
		}
	};

	Format.prototype.sanitizeHTML = function (value) {
		if (value) {
			var entityMap = {
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;',
				"'": '&#39;',
				'/': '&#x2F;',
				'`': '&#x60;',
				'=': '&#x3D;'
			};

			return String(value).replace(/[&<>"'`=\/]/g, function (s) {
				return entityMap[s];
			});
		} else {
			return value;
		}
	};

	Format.prototype.emptyToSpace = function (value) {
		return value === null || typeof value === "undefined" ? "&nbsp;" : value;
	};

	//get formatter for cell
	Format.prototype.getFormatter = function (formatter) {
		var formatter;

		switch (typeof formatter === 'undefined' ? 'undefined' : _typeof(formatter)) {
			case "string":
				if (this.formatters[formatter]) {
					formatter = this.formatters[formatter];
				} else {
					console.warn("Formatter Error - No such formatter found: ", formatter);
					formatter = this.formatters.plaintext;
				}
				break;

			case "function":
				formatter = formatter;
				break;

			default:
				formatter = this.formatters.plaintext;
				break;
		}

		return formatter;
	};

	//default data formatters
	Format.prototype.formatters = {
		//plain text value
		plaintext: function plaintext(cell, formatterParams, onRendered) {
			return this.emptyToSpace(this.sanitizeHTML(cell.getValue()));
		},

		//html text value
		html: function html(cell, formatterParams, onRendered) {
			return cell.getValue();
		},

		//multiline text area
		textarea: function textarea(cell, formatterParams, onRendered) {
			cell.getElement().style.whiteSpace = "pre-wrap";
			return this.emptyToSpace(this.sanitizeHTML(cell.getValue()));
		},

		//currency formatting
		money: function money(cell, formatterParams, onRendered) {
			var floatVal = parseFloat(cell.getValue()),
			    number,
			    integer,
			    decimal,
			    rgx;

			var decimalSym = formatterParams.decimal || ".";
			var thousandSym = formatterParams.thousand || ",";
			var symbol = formatterParams.symbol || "";
			var after = !!formatterParams.symbolAfter;
			var precision = typeof formatterParams.precision !== "undefined" ? formatterParams.precision : 2;

			if (isNaN(floatVal)) {
				return this.emptyToSpace(this.sanitizeHTML(cell.getValue()));
			}

			number = precision !== false ? floatVal.toFixed(precision) : floatVal;
			number = String(number).split(".");

			integer = number[0];
			decimal = number.length > 1 ? decimalSym + number[1] : "";

			rgx = /(\d+)(\d{3})/;

			while (rgx.test(integer)) {
				integer = integer.replace(rgx, "$1" + thousandSym + "$2");
			}

			return after ? integer + decimal + symbol : symbol + integer + decimal;
		},

		//clickable anchor tag
		link: function link(cell, formatterParams, onRendered) {
			var value = cell.getValue(),
			    urlPrefix = formatterParams.urlPrefix || "",
			    download = formatterParams.download,
			    label = value,
			    el = document.createElement("a"),
			    data;

			if (formatterParams.labelField) {
				data = cell.getData();
				label = data[formatterParams.labelField];
			}

			if (formatterParams.label) {
				switch (_typeof(formatterParams.label)) {
					case "string":
						label = formatterParams.label;
						break;

					case "function":
						label = formatterParams.label(cell);
						break;
				}
			}

			if (label) {
				if (formatterParams.urlField) {
					data = cell.getData();
					value = data[formatterParams.urlField];
				}

				if (formatterParams.url) {
					switch (_typeof(formatterParams.url)) {
						case "string":
							value = formatterParams.url;
							break;

						case "function":
							value = formatterParams.url(cell);
							break;
					}
				}

				el.setAttribute("href", urlPrefix + value);

				if (formatterParams.target) {
					el.setAttribute("target", formatterParams.target);
				}

				if (formatterParams.download) {

					if (typeof download == "function") {
						download = download(cell);
					} else {
						download = download === true ? "" : download;
					}

					el.setAttribute("download", download);
				}

				el.innerHTML = this.emptyToSpace(this.sanitizeHTML(label));

				return el;
			} else {
				return "&nbsp;";
			}
		},

		//image element
		image: function image(cell, formatterParams, onRendered) {
			var el = document.createElement("img");
			el.setAttribute("src", cell.getValue());

			switch (_typeof(formatterParams.height)) {
				case "number":
					el.style.height = formatterParams.height + "px";
					break;

				case "string":
					el.style.height = formatterParams.height;
					break;
			}

			switch (_typeof(formatterParams.width)) {
				case "number":
					el.style.width = formatterParams.width + "px";
					break;

				case "string":
					el.style.width = formatterParams.width;
					break;
			}

			el.addEventListener("load", function () {
				cell.getRow().normalizeHeight();
			});

			return el;
		},

		//tick or cross
		tickCross: function tickCross(cell, formatterParams, onRendered) {
			var value = cell.getValue(),
			    element = cell.getElement(),
			    empty = formatterParams.allowEmpty,
			    truthy = formatterParams.allowTruthy,
			    tick = typeof formatterParams.tickElement !== "undefined" ? formatterParams.tickElement : '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>',
			    cross = typeof formatterParams.crossElement !== "undefined" ? formatterParams.crossElement : '<svg enable-background="new 0 0 24 24" height="14" width="14"  viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>';

			if (truthy && value || value === true || value === "true" || value === "True" || value === 1 || value === "1") {
				element.setAttribute("aria-checked", true);
				return tick || "";
			} else {
				if (empty && (value === "null" || value === "" || value === null || typeof value === "undefined")) {
					element.setAttribute("aria-checked", "mixed");
					return "";
				} else {
					element.setAttribute("aria-checked", false);
					return cross || "";
				}
			}
		},

		datetime: function datetime(cell, formatterParams, onRendered) {
			var inputFormat = formatterParams.inputFormat || "YYYY-MM-DD hh:mm:ss";
			var outputFormat = formatterParams.outputFormat || "DD/MM/YYYY hh:mm:ss";
			var invalid = typeof formatterParams.invalidPlaceholder !== "undefined" ? formatterParams.invalidPlaceholder : "";
			var value = cell.getValue();

			var newDatetime = moment(value, inputFormat);

			if (newDatetime.isValid()) {
				return newDatetime.format(outputFormat);
			} else {

				if (invalid === true) {
					return value;
				} else if (typeof invalid === "function") {
					return invalid(value);
				} else {
					return invalid;
				}
			}
		},

		datetimediff: function datetime(cell, formatterParams, onRendered) {
			var inputFormat = formatterParams.inputFormat || "YYYY-MM-DD hh:mm:ss";
			var invalid = typeof formatterParams.invalidPlaceholder !== "undefined" ? formatterParams.invalidPlaceholder : "";
			var suffix = typeof formatterParams.suffix !== "undefined" ? formatterParams.suffix : false;
			var unit = typeof formatterParams.unit !== "undefined" ? formatterParams.unit : undefined;
			var humanize = typeof formatterParams.humanize !== "undefined" ? formatterParams.humanize : false;
			var date = typeof formatterParams.date !== "undefined" ? formatterParams.date : moment();
			var value = cell.getValue();

			var newDatetime = moment(value, inputFormat);

			if (newDatetime.isValid()) {
				if (humanize) {
					return moment.duration(newDatetime.diff(date)).humanize(suffix);
				} else {
					return newDatetime.diff(date, unit) + (suffix ? " " + suffix : "");
				}
			} else {

				if (invalid === true) {
					return value;
				} else if (typeof invalid === "function") {
					return invalid(value);
				} else {
					return invalid;
				}
			}
		},

		//select
		lookup: function lookup(cell, formatterParams, onRendered) {
			var value = cell.getValue();

			if (typeof formatterParams[value] === "undefined") {
				console.warn('Missing display value for ' + value);
				return value;
			}

			return formatterParams[value];
		},

		//star rating
		star: function star(cell, formatterParams, onRendered) {
			var value = cell.getValue(),
			    element = cell.getElement(),
			    maxStars = formatterParams && formatterParams.stars ? formatterParams.stars : 5,
			    stars = document.createElement("span"),
			    star = document.createElementNS('http://www.w3.org/2000/svg', "svg"),
			    starActive = '<polygon fill="#FFEA00" stroke="#C1AB60" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>',
			    starInactive = '<polygon fill="#D2D2D2" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>';

			//style stars holder
			stars.style.verticalAlign = "middle";

			//style star
			star.setAttribute("width", "14");
			star.setAttribute("height", "14");
			star.setAttribute("viewBox", "0 0 512 512");
			star.setAttribute("xml:space", "preserve");
			star.style.padding = "0 1px";

			value = value && !isNaN(value) ? parseInt(value) : 0;

			value = Math.max(0, Math.min(value, maxStars));

			for (var i = 1; i <= maxStars; i++) {
				var nextStar = star.cloneNode(true);
				nextStar.innerHTML = i <= value ? starActive : starInactive;

				stars.appendChild(nextStar);
			}

			element.style.whiteSpace = "nowrap";
			element.style.overflow = "hidden";
			element.style.textOverflow = "ellipsis";

			element.setAttribute("aria-label", value);

			return stars;
		},

		traffic: function traffic(cell, formatterParams, onRendered) {
			var value = this.sanitizeHTML(cell.getValue()) || 0,
			    el = document.createElement("span"),
			    max = formatterParams && formatterParams.max ? formatterParams.max : 100,
			    min = formatterParams && formatterParams.min ? formatterParams.min : 0,
			    colors = formatterParams && typeof formatterParams.color !== "undefined" ? formatterParams.color : ["red", "orange", "green"],
			    color = "#666666",
			    percent,
			    percentValue;

			if (isNaN(value) || typeof cell.getValue() === "undefined") {
				return;
			}

			el.classList.add("tabulator-traffic-light");

			//make sure value is in range
			percentValue = parseFloat(value) <= max ? parseFloat(value) : max;
			percentValue = parseFloat(percentValue) >= min ? parseFloat(percentValue) : min;

			//workout percentage
			percent = (max - min) / 100;
			percentValue = Math.round((percentValue - min) / percent);

			//set color
			switch (typeof colors === 'undefined' ? 'undefined' : _typeof(colors)) {
				case "string":
					color = colors;
					break;
				case "function":
					color = colors(value);
					break;
				case "object":
					if (Array.isArray(colors)) {
						var unit = 100 / colors.length;
						var index = Math.floor(percentValue / unit);

						index = Math.min(index, colors.length - 1);
						index = Math.max(index, 0);
						color = colors[index];
						break;
					}
			}

			el.style.backgroundColor = color;

			return el;
		},

		//progress bar
		progress: function progress(cell, formatterParams, onRendered) {
			//progress bar
			var value = this.sanitizeHTML(cell.getValue()) || 0,
			    element = cell.getElement(),
			    max = formatterParams && formatterParams.max ? formatterParams.max : 100,
			    min = formatterParams && formatterParams.min ? formatterParams.min : 0,
			    legendAlign = formatterParams && formatterParams.legendAlign ? formatterParams.legendAlign : "center",
			    percent,
			    percentValue,
			    color,
			    legend,
			    legendColor,
			    top,
			    left,
			    right,
			    bottom;

			//make sure value is in range
			percentValue = parseFloat(value) <= max ? parseFloat(value) : max;
			percentValue = parseFloat(percentValue) >= min ? parseFloat(percentValue) : min;

			//workout percentage
			percent = (max - min) / 100;
			percentValue = Math.round((percentValue - min) / percent);

			//set bar color
			switch (_typeof(formatterParams.color)) {
				case "string":
					color = formatterParams.color;
					break;
				case "function":
					color = formatterParams.color(value);
					break;
				case "object":
					if (Array.isArray(formatterParams.color)) {
						var unit = 100 / formatterParams.color.length;
						var index = Math.floor(percentValue / unit);

						index = Math.min(index, formatterParams.color.length - 1);
						index = Math.max(index, 0);
						color = formatterParams.color[index];
						break;
					}
				default:
					color = "#2DC214";
			}

			//generate legend
			switch (_typeof(formatterParams.legend)) {
				case "string":
					legend = formatterParams.legend;
					break;
				case "function":
					legend = formatterParams.legend(value);
					break;
				case "boolean":
					legend = value;
					break;
				default:
					legend = false;
			}

			//set legend color
			switch (_typeof(formatterParams.legendColor)) {
				case "string":
					legendColor = formatterParams.legendColor;
					break;
				case "function":
					legendColor = formatterParams.legendColor(value);
					break;
				case "object":
					if (Array.isArray(formatterParams.legendColor)) {
						var unit = 100 / formatterParams.legendColor.length;
						var index = Math.floor(percentValue / unit);

						index = Math.min(index, formatterParams.legendColor.length - 1);
						index = Math.max(index, 0);
						legendColor = formatterParams.legendColor[index];
					}
					break;
				default:
					legendColor = "#000";
			}

			element.style.minWidth = "30px";
			element.style.position = "relative";

			element.setAttribute("aria-label", percentValue);

			var barEl = document.createElement("div");
			barEl.style.display = "inline-block";
			barEl.style.position = "relative";
			barEl.style.width = percentValue + "%";
			barEl.style.backgroundColor = color;
			barEl.style.height = "100%";

			barEl.setAttribute('data-max', max);
			barEl.setAttribute('data-min', min);

			if (legend) {
				var legendEl = document.createElement("div");
				legendEl.style.position = "absolute";
				legendEl.style.top = "4px";
				legendEl.style.left = 0;
				legendEl.style.textAlign = legendAlign;
				legendEl.style.width = "100%";
				legendEl.style.color = legendColor;
				legendEl.innerHTML = legend;
			}

			onRendered(function () {

				//handle custom element needed if formatter is to be included in printed/downloaded output
				if (!(cell instanceof CellComponent)) {
					var holderEl = document.createElement("div");
					holderEl.style.position = "absolute";
					holderEl.style.top = "4px";
					holderEl.style.bottom = "4px";
					holderEl.style.left = "4px";
					holderEl.style.right = "4px";

					element.appendChild(holderEl);

					element = holderEl;
				}

				element.appendChild(barEl);

				if (legend) {
					element.appendChild(legendEl);
				}
			});

			return "";
		},

		//background color
		color: function color(cell, formatterParams, onRendered) {
			cell.getElement().style.backgroundColor = this.sanitizeHTML(cell.getValue());
			return "";
		},

		//tick icon
		buttonTick: function buttonTick(cell, formatterParams, onRendered) {
			return '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>';
		},

		//cross icon
		buttonCross: function buttonCross(cell, formatterParams, onRendered) {
			return '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>';
		},

		//current row number
		rownum: function rownum(cell, formatterParams, onRendered) {
			return this.table.rowManager.activeRows.indexOf(cell.getRow()._getSelf()) + 1;
		},

		//row handle
		handle: function handle(cell, formatterParams, onRendered) {
			cell.getElement().classList.add("tabulator-row-handle");
			return "<div class='tabulator-row-handle-box'><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div></div>";
		},

		responsiveCollapse: function responsiveCollapse(cell, formatterParams, onRendered) {
			var self = this,
			    open = false,
			    el = document.createElement("div"),
			    config = cell.getRow()._row.modules.responsiveLayout;

			el.classList.add("tabulator-responsive-collapse-toggle");
			el.innerHTML = "<span class='tabulator-responsive-collapse-toggle-open'>+</span><span class='tabulator-responsive-collapse-toggle-close'>-</span>";

			cell.getElement().classList.add("tabulator-row-handle");

			function toggleList(isOpen) {
				var collapseEl = config.element;

				config.open = isOpen;

				if (collapseEl) {

					if (config.open) {
						el.classList.add("open");
						collapseEl.style.display = '';
					} else {
						el.classList.remove("open");
						collapseEl.style.display = 'none';
					}
				}
			}

			el.addEventListener("click", function (e) {
				e.stopImmediatePropagation();
				toggleList(!config.open);
			});

			toggleList(config.open);

			return el;
		},

		rowSelection: function rowSelection(cell) {
			var _this51 = this;

			var checkbox = document.createElement("input");

			checkbox.type = 'checkbox';

			if (this.table.modExists("selectRow", true)) {

				checkbox.addEventListener("click", function (e) {
					e.stopPropagation();
				});

				if (typeof cell.getRow == 'function') {
					var row = cell.getRow();

					checkbox.addEventListener("change", function (e) {
						row.toggleSelect();
					});

					checkbox.checked = row.isSelected();
					this.table.modules.selectRow.registerRowSelectCheckbox(row, checkbox);
				} else {
					checkbox.addEventListener("change", function (e) {
						if (_this51.table.modules.selectRow.selectedRows.length) {
							_this51.table.deselectRow();
						} else {
							_this51.table.selectRow();
						}
					});

					this.table.modules.selectRow.registerHeaderSelectCheckbox(checkbox);
				}
			}
			return checkbox;
		}
	};

	Tabulator.prototype.registerModule("format", Format);

	var FrozenColumns = function FrozenColumns(table) {
		this.table = table; //hold Tabulator object
		this.leftColumns = [];
		this.rightColumns = [];
		this.leftMargin = 0;
		this.rightMargin = 0;
		this.rightPadding = 0;
		this.initializationMode = "left";
		this.active = false;
		this.scrollEndTimer = false;
	};

	//reset initial state
	FrozenColumns.prototype.reset = function () {
		this.initializationMode = "left";
		this.leftColumns = [];
		this.rightColumns = [];
		this.leftMargin = 0;
		this.rightMargin = 0;
		this.rightMargin = 0;
		this.active = false;

		this.table.columnManager.headersElement.style.marginLeft = 0;
		this.table.columnManager.element.style.paddingRight = 0;
	};

	//initialize specific column
	FrozenColumns.prototype.initializeColumn = function (column) {
		var config = { margin: 0, edge: false };

		if (!column.isGroup) {

			if (this.frozenCheck(column)) {

				config.position = this.initializationMode;

				if (this.initializationMode == "left") {
					this.leftColumns.push(column);
				} else {
					this.rightColumns.unshift(column);
				}

				this.active = true;

				column.modules.frozen = config;
			} else {
				this.initializationMode = "right";
			}
		}
	};

	FrozenColumns.prototype.frozenCheck = function (column) {
		var frozen = false;

		if (column.parent.isGroup && column.definition.frozen) {
			console.warn("Frozen Column Error - Parent column group must be frozen, not individual columns or sub column groups");
		}

		if (column.parent.isGroup) {
			return this.frozenCheck(column.parent);
		} else {
			return column.definition.frozen;
		}

		return frozen;
	};

	//quick layout to smooth horizontal scrolling
	FrozenColumns.prototype.scrollHorizontal = function () {
		var _this52 = this;

		var rows;

		if (this.active) {
			clearTimeout(this.scrollEndTimer);

			//layout all rows after scroll is complete
			this.scrollEndTimer = setTimeout(function () {
				_this52.layout();
			}, 100);

			rows = this.table.rowManager.getVisibleRows();

			this.calcMargins();

			this.layoutColumnPosition();

			this.layoutCalcRows();

			rows.forEach(function (row) {
				if (row.type === "row") {
					_this52.layoutRow(row);
				}
			});

			this.table.rowManager.tableElement.style.marginRight = this.rightMargin;
		}
	};

	//calculate margins for rows
	FrozenColumns.prototype.calcMargins = function () {
		this.leftMargin = this._calcSpace(this.leftColumns, this.leftColumns.length) + "px";
		this.table.columnManager.headersElement.style.marginLeft = this.leftMargin;

		this.rightMargin = this._calcSpace(this.rightColumns, this.rightColumns.length) + "px";
		this.table.columnManager.element.style.paddingRight = this.rightMargin;

		//calculate right frozen columns
		this.rightPadding = this.table.rowManager.element.clientWidth + this.table.columnManager.scrollLeft;
	};

	//layout calculation rows
	FrozenColumns.prototype.layoutCalcRows = function () {
		if (this.table.modExists("columnCalcs")) {
			if (this.table.modules.columnCalcs.topInitialized && this.table.modules.columnCalcs.topRow) {
				this.layoutRow(this.table.modules.columnCalcs.topRow);
			}
			if (this.table.modules.columnCalcs.botInitialized && this.table.modules.columnCalcs.botRow) {
				this.layoutRow(this.table.modules.columnCalcs.botRow);
			}
		}
	};

	//calculate column positions and layout headers
	FrozenColumns.prototype.layoutColumnPosition = function (allCells) {
		var _this53 = this;

		var leftParents = [];

		this.leftColumns.forEach(function (column, i) {
			column.modules.frozen.margin = _this53._calcSpace(_this53.leftColumns, i) + _this53.table.columnManager.scrollLeft + "px";

			if (i == _this53.leftColumns.length - 1) {
				column.modules.frozen.edge = true;
			} else {
				column.modules.frozen.edge = false;
			}

			if (column.parent.isGroup) {
				var parentEl = _this53.getColGroupParentElement(column);
				if (!leftParents.includes(parentEl)) {
					_this53.layoutElement(parentEl, column);
					leftParents.push(parentEl);
				}

				if (column.modules.frozen.edge) {
					parentEl.classList.add("tabulator-frozen-" + column.modules.frozen.position);
				}
			} else {
				_this53.layoutElement(column.getElement(), column);
			}

			if (allCells) {
				column.cells.forEach(function (cell) {
					_this53.layoutElement(cell.getElement(), column);
				});
			}
		});

		this.rightColumns.forEach(function (column, i) {
			column.modules.frozen.margin = _this53.rightPadding - _this53._calcSpace(_this53.rightColumns, i + 1) + "px";

			if (i == _this53.rightColumns.length - 1) {
				column.modules.frozen.edge = true;
			} else {
				column.modules.frozen.edge = false;
			}

			if (column.parent.isGroup) {
				_this53.layoutElement(_this53.getColGroupParentElement(column), column);
			} else {
				_this53.layoutElement(column.getElement(), column);
			}

			if (allCells) {
				column.cells.forEach(function (cell) {
					_this53.layoutElement(cell.getElement(), column);
				});
			}
		});
	};

	FrozenColumns.prototype.getColGroupParentElement = function (column) {
		return column.parent.isGroup ? this.getColGroupParentElement(column.parent) : column.getElement();
	};

	//layout columns appropropriatly
	FrozenColumns.prototype.layout = function () {
		var self = this,
		    rightMargin = 0;

		if (self.active) {

			//calculate row padding
			this.calcMargins();

			// self.table.rowManager.activeRows.forEach(function(row){
			// 	self.layoutRow(row);
			// });

			// if(self.table.options.dataTree){
			self.table.rowManager.getDisplayRows().forEach(function (row) {
				if (row.type === "row") {
					self.layoutRow(row);
				}
			});
			// }

			this.layoutCalcRows();

			//calculate left columns
			this.layoutColumnPosition(true);

			// if(tableHolder.scrollHeight > tableHolder.clientHeight){
			// 	rightMargin -= tableHolder.offsetWidth - tableHolder.clientWidth;
			// }

			this.table.rowManager.tableElement.style.marginRight = this.rightMargin;
		}
	};

	FrozenColumns.prototype.layoutRow = function (row) {
		var _this54 = this;

		var rowEl = row.getElement();

		rowEl.style.paddingLeft = this.leftMargin;
		// rowEl.style.paddingRight = this.rightMargin + "px";

		this.leftColumns.forEach(function (column) {
			var cell = row.getCell(column);

			if (cell) {
				_this54.layoutElement(cell.getElement(), column);
			}
		});

		this.rightColumns.forEach(function (column) {
			var cell = row.getCell(column);

			if (cell) {
				_this54.layoutElement(cell.getElement(), column);
			}
		});
	};

	FrozenColumns.prototype.layoutElement = function (element, column) {

		if (column.modules.frozen) {
			element.style.position = "absolute";
			element.style.left = column.modules.frozen.margin;

			element.classList.add("tabulator-frozen");

			if (column.modules.frozen.edge) {
				element.classList.add("tabulator-frozen-" + column.modules.frozen.position);
			}
		}
	};

	FrozenColumns.prototype._calcSpace = function (columns, index) {
		var width = 0;

		for (var i = 0; i < index; i++) {
			if (columns[i].visible) {
				width += columns[i].getWidth();
			}
		}

		return width;
	};

	Tabulator.prototype.registerModule("frozenColumns", FrozenColumns);
	var FrozenRows = function FrozenRows(table) {
		this.table = table; //hold Tabulator object
		this.topElement = document.createElement("div");
		this.rows = [];
		this.displayIndex = 0; //index in display pipeline
	};

	FrozenRows.prototype.initialize = function () {
		this.rows = [];

		this.topElement.classList.add("tabulator-frozen-rows-holder");

		// this.table.columnManager.element.append(this.topElement);
		this.table.columnManager.getElement().insertBefore(this.topElement, this.table.columnManager.headersElement.nextSibling);
	};

	FrozenRows.prototype.setDisplayIndex = function (index) {
		this.displayIndex = index;
	};

	FrozenRows.prototype.getDisplayIndex = function () {
		return this.displayIndex;
	};

	FrozenRows.prototype.isFrozen = function () {
		return !!this.rows.length;
	};

	//filter frozen rows out of display data
	FrozenRows.prototype.getRows = function (rows) {
		var self = this,
		    frozen = [],
		    output = rows.slice(0);

		this.rows.forEach(function (row) {
			var index = output.indexOf(row);

			if (index > -1) {
				output.splice(index, 1);
			}
		});

		return output;
	};

	FrozenRows.prototype.freezeRow = function (row) {
		if (!row.modules.frozen) {
			row.modules.frozen = true;
			this.topElement.appendChild(row.getElement());
			row.initialize();
			row.normalizeHeight();
			this.table.rowManager.adjustTableSize();

			this.rows.push(row);

			this.table.rowManager.refreshActiveData("display");

			this.styleRows();
		} else {
			console.warn("Freeze Error - Row is already frozen");
		}
	};

	FrozenRows.prototype.unfreezeRow = function (row) {
		var index = this.rows.indexOf(row);

		if (row.modules.frozen) {

			row.modules.frozen = false;

			var rowEl = row.getElement();
			rowEl.parentNode.removeChild(rowEl);

			this.table.rowManager.adjustTableSize();

			this.rows.splice(index, 1);

			this.table.rowManager.refreshActiveData("display");

			if (this.rows.length) {
				this.styleRows();
			}
		} else {
			console.warn("Freeze Error - Row is already unfrozen");
		}
	};

	FrozenRows.prototype.styleRows = function (row) {
		var self = this;

		this.rows.forEach(function (row, i) {
			self.table.rowManager.styleRow(row, i);
		});
	};

	Tabulator.prototype.registerModule("frozenRows", FrozenRows);

	//public group object
	var GroupComponent = function GroupComponent(group) {
		this._group = group;
		this.type = "GroupComponent";
	};

	GroupComponent.prototype.getKey = function () {
		return this._group.key;
	};

	GroupComponent.prototype.getField = function () {
		return this._group.field;
	};

	GroupComponent.prototype.getElement = function () {
		return this._group.element;
	};

	GroupComponent.prototype.getRows = function () {
		return this._group.getRows(true);
	};

	GroupComponent.prototype.getSubGroups = function () {
		return this._group.getSubGroups(true);
	};

	GroupComponent.prototype.getParentGroup = function () {
		return this._group.parent ? this._group.parent.getComponent() : false;
	};

	GroupComponent.prototype.getVisibility = function () {
		return this._group.visible;
	};

	GroupComponent.prototype.show = function () {
		this._group.show();
	};

	GroupComponent.prototype.hide = function () {
		this._group.hide();
	};

	GroupComponent.prototype.toggle = function () {
		this._group.toggleVisibility();
	};

	GroupComponent.prototype._getSelf = function () {
		return this._group;
	};

	GroupComponent.prototype.getTable = function () {
		return this._group.groupManager.table;
	};

	//////////////////////////////////////////////////
	//////////////// Group Functions /////////////////
	//////////////////////////////////////////////////

	var Group = function Group(groupManager, parent, level, key, field, generator, oldGroup) {

		this.groupManager = groupManager;
		this.parent = parent;
		this.key = key;
		this.level = level;
		this.field = field;
		this.hasSubGroups = level < groupManager.groupIDLookups.length - 1;
		this.addRow = this.hasSubGroups ? this._addRowToGroup : this._addRow;
		this.type = "group"; //type of element
		this.old = oldGroup;
		this.rows = [];
		this.groups = [];
		this.groupList = [];
		this.generator = generator;
		this.elementContents = false;
		this.height = 0;
		this.outerHeight = 0;
		this.initialized = false;
		this.calcs = {};
		this.initialized = false;
		this.modules = {};
		this.arrowElement = false;

		this.visible = oldGroup ? oldGroup.visible : typeof groupManager.startOpen[level] !== "undefined" ? groupManager.startOpen[level] : groupManager.startOpen[0];

		this.createElements();
		this.addBindings();

		this.createValueGroups();
	};

	Group.prototype.wipe = function () {
		if (this.groupList.length) {
			this.groupList.forEach(function (group) {
				group.wipe();
			});
		} else {
			this.element = false;
			this.arrowElement = false;
			this.elementContents = false;
		}
	};

	Group.prototype.createElements = function () {
		var arrow = document.createElement("div");
		arrow.classList.add("tabulator-arrow");

		this.element = document.createElement("div");
		this.element.classList.add("tabulator-row");
		this.element.classList.add("tabulator-group");
		this.element.classList.add("tabulator-group-level-" + this.level);
		this.element.setAttribute("role", "rowgroup");

		this.arrowElement = document.createElement("div");
		this.arrowElement.classList.add("tabulator-group-toggle");
		this.arrowElement.appendChild(arrow);

		//setup movable rows
		if (this.groupManager.table.options.movableRows !== false && this.groupManager.table.modExists("moveRow")) {
			this.groupManager.table.modules.moveRow.initializeGroupHeader(this);
		}
	};

	Group.prototype.createValueGroups = function () {
		var _this55 = this;

		var level = this.level + 1;
		if (this.groupManager.allowedValues && this.groupManager.allowedValues[level]) {
			this.groupManager.allowedValues[level].forEach(function (value) {
				_this55._createGroup(value, level);
			});
		}
	};

	Group.prototype.addBindings = function () {
		var self = this,
		    dblTap,
		    tapHold,
		    tap,
		    toggleElement;

		//handle group click events
		if (self.groupManager.table.options.groupClick) {
			self.element.addEventListener("click", function (e) {
				self.groupManager.table.options.groupClick.call(self.groupManager.table, e, self.getComponent());
			});
		}

		if (self.groupManager.table.options.groupDblClick) {
			self.element.addEventListener("dblclick", function (e) {
				self.groupManager.table.options.groupDblClick.call(self.groupManager.table, e, self.getComponent());
			});
		}

		if (self.groupManager.table.options.groupContext) {
			self.element.addEventListener("contextmenu", function (e) {
				self.groupManager.table.options.groupContext.call(self.groupManager.table, e, self.getComponent());
			});
		}

		if (self.groupManager.table.options.groupTap) {

			tap = false;

			self.element.addEventListener("touchstart", function (e) {
				tap = true;
			}, { passive: true });

			self.element.addEventListener("touchend", function (e) {
				if (tap) {
					self.groupManager.table.options.groupTap(e, self.getComponent());
				}

				tap = false;
			});
		}

		if (self.groupManager.table.options.groupDblTap) {

			dblTap = null;

			self.element.addEventListener("touchend", function (e) {

				if (dblTap) {
					clearTimeout(dblTap);
					dblTap = null;

					self.groupManager.table.options.groupDblTap(e, self.getComponent());
				} else {

					dblTap = setTimeout(function () {
						clearTimeout(dblTap);
						dblTap = null;
					}, 300);
				}
			});
		}

		if (self.groupManager.table.options.groupTapHold) {

			tapHold = null;

			self.element.addEventListener("touchstart", function (e) {
				clearTimeout(tapHold);

				tapHold = setTimeout(function () {
					clearTimeout(tapHold);
					tapHold = null;
					tap = false;
					self.groupManager.table.options.groupTapHold(e, self.getComponent());
				}, 1000);
			}, { passive: true });

			self.element.addEventListener("touchend", function (e) {
				clearTimeout(tapHold);
				tapHold = null;
			});
		}

		if (self.groupManager.table.options.groupToggleElement) {
			toggleElement = self.groupManager.table.options.groupToggleElement == "arrow" ? self.arrowElement : self.element;

			toggleElement.addEventListener("click", function (e) {
				e.stopPropagation();
				e.stopImmediatePropagation();
				self.toggleVisibility();
			});
		}
	};

	Group.prototype._createGroup = function (groupID, level) {
		var groupKey = level + "_" + groupID;
		var group = new Group(this.groupManager, this, level, groupID, this.groupManager.groupIDLookups[level].field, this.groupManager.headerGenerator[level] || this.groupManager.headerGenerator[0], this.old ? this.old.groups[groupKey] : false);

		this.groups[groupKey] = group;
		this.groupList.push(group);
	};

	Group.prototype._addRowToGroup = function (row) {

		var level = this.level + 1;

		if (this.hasSubGroups) {
			var groupID = this.groupManager.groupIDLookups[level].func(row.getData()),
			    groupKey = level + "_" + groupID;

			if (this.groupManager.allowedValues && this.groupManager.allowedValues[level]) {
				if (this.groups[groupKey]) {
					this.groups[groupKey].addRow(row);
				}
			} else {
				if (!this.groups[groupKey]) {
					this._createGroup(groupID, level);
				}

				this.groups[groupKey].addRow(row);
			}
		}
	};

	Group.prototype._addRow = function (row) {
		this.rows.push(row);
		row.modules.group = this;
	};

	Group.prototype.insertRow = function (row, to, after) {
		var data = this.conformRowData({});

		row.updateData(data);

		var toIndex = this.rows.indexOf(to);

		if (toIndex > -1) {
			if (after) {
				this.rows.splice(toIndex + 1, 0, row);
			} else {
				this.rows.splice(toIndex, 0, row);
			}
		} else {
			if (after) {
				this.rows.push(row);
			} else {
				this.rows.unshift(row);
			}
		}

		row.modules.group = this;

		this.generateGroupHeaderContents();

		if (this.groupManager.table.modExists("columnCalcs") && this.groupManager.table.options.columnCalcs != "table") {
			this.groupManager.table.modules.columnCalcs.recalcGroup(this);
		}

		this.groupManager.updateGroupRows(true);
	};

	Group.prototype.scrollHeader = function (left) {
		this.arrowElement.style.marginLeft = left;

		this.groupList.forEach(function (child) {
			child.scrollHeader(left);
		});
	};

	Group.prototype.getRowIndex = function (row) {};

	//update row data to match grouping contraints
	Group.prototype.conformRowData = function (data) {
		if (this.field) {
			data[this.field] = this.key;
		} else {
			console.warn("Data Conforming Error - Cannot conform row data to match new group as groupBy is a function");
		}

		if (this.parent) {
			data = this.parent.conformRowData(data);
		}

		return data;
	};

	Group.prototype.removeRow = function (row) {
		var index = this.rows.indexOf(row);
		var el = row.getElement();

		if (index > -1) {
			this.rows.splice(index, 1);
		}

		if (!this.groupManager.table.options.groupValues && !this.rows.length) {
			if (this.parent) {
				this.parent.removeGroup(this);
			} else {
				this.groupManager.removeGroup(this);
			}

			this.groupManager.updateGroupRows(true);
		} else {

			if (el.parentNode) {
				el.parentNode.removeChild(el);
			}

			this.generateGroupHeaderContents();

			if (this.groupManager.table.modExists("columnCalcs") && this.groupManager.table.options.columnCalcs != "table") {
				this.groupManager.table.modules.columnCalcs.recalcGroup(this);
			}
		}
	};

	Group.prototype.removeGroup = function (group) {
		var groupKey = group.level + "_" + group.key,
		    index;

		if (this.groups[groupKey]) {
			delete this.groups[groupKey];

			index = this.groupList.indexOf(group);

			if (index > -1) {
				this.groupList.splice(index, 1);
			}

			if (!this.groupList.length) {
				if (this.parent) {
					this.parent.removeGroup(this);
				} else {
					this.groupManager.removeGroup(this);
				}
			}
		}
	};

	Group.prototype.getHeadersAndRows = function (noCalc) {
		var output = [];

		output.push(this);

		this._visSet();

		if (this.visible) {
			if (this.groupList.length) {
				this.groupList.forEach(function (group) {
					output = output.concat(group.getHeadersAndRows(noCalc));
				});
			} else {
				if (!noCalc && this.groupManager.table.options.columnCalcs != "table" && this.groupManager.table.modExists("columnCalcs") && this.groupManager.table.modules.columnCalcs.hasTopCalcs()) {
					if (this.calcs.top) {
						this.calcs.top.detachElement();
						this.calcs.top.deleteCells();
					}

					this.calcs.top = this.groupManager.table.modules.columnCalcs.generateTopRow(this.rows);
					output.push(this.calcs.top);
				}

				output = output.concat(this.rows);

				if (!noCalc && this.groupManager.table.options.columnCalcs != "table" && this.groupManager.table.modExists("columnCalcs") && this.groupManager.table.modules.columnCalcs.hasBottomCalcs()) {
					if (this.calcs.bottom) {
						this.calcs.bottom.detachElement();
						this.calcs.bottom.deleteCells();
					}

					this.calcs.bottom = this.groupManager.table.modules.columnCalcs.generateBottomRow(this.rows);
					output.push(this.calcs.bottom);
				}
			}
		} else {
			if (!this.groupList.length && this.groupManager.table.options.columnCalcs != "table") {

				if (this.groupManager.table.modExists("columnCalcs")) {

					if (!noCalc && this.groupManager.table.modules.columnCalcs.hasTopCalcs()) {
						if (this.calcs.top) {
							this.calcs.top.detachElement();
							this.calcs.top.deleteCells();
						}

						if (this.groupManager.table.options.groupClosedShowCalcs) {
							this.calcs.top = this.groupManager.table.modules.columnCalcs.generateTopRow(this.rows);
							output.push(this.calcs.top);
						}
					}

					if (!noCalc && this.groupManager.table.modules.columnCalcs.hasBottomCalcs()) {
						if (this.calcs.bottom) {
							this.calcs.bottom.detachElement();
							this.calcs.bottom.deleteCells();
						}

						if (this.groupManager.table.options.groupClosedShowCalcs) {
							this.calcs.bottom = this.groupManager.table.modules.columnCalcs.generateBottomRow(this.rows);
							output.push(this.calcs.bottom);
						}
					}
				}
			}
		}

		return output;
	};

	Group.prototype.getData = function (visible, transform) {
		var self = this,
		    output = [];

		this._visSet();

		if (!visible || visible && this.visible) {
			this.rows.forEach(function (row) {
				output.push(row.getData(transform || "data"));
			});
		}

		return output;
	};

	// Group.prototype.getRows = function(){
	// 	this._visSet();

	// 	return this.visible ? this.rows : [];
	// };

	Group.prototype.getRowCount = function () {
		var count = 0;

		if (this.groupList.length) {
			this.groupList.forEach(function (group) {
				count += group.getRowCount();
			});
		} else {
			count = this.rows.length;
		}
		return count;
	};

	Group.prototype.toggleVisibility = function () {
		if (this.visible) {
			this.hide();
		} else {
			this.show();
		}
	};

	Group.prototype.hide = function () {
		this.visible = false;

		if (this.groupManager.table.rowManager.getRenderMode() == "classic" && !this.groupManager.table.options.pagination) {

			this.element.classList.remove("tabulator-group-visible");

			if (this.groupList.length) {
				this.groupList.forEach(function (group) {

					var rows = group.getHeadersAndRows();

					rows.forEach(function (row) {
						row.detachElement();
					});
				});
			} else {
				this.rows.forEach(function (row) {
					var rowEl = row.getElement();
					rowEl.parentNode.removeChild(rowEl);
				});
			}

			this.groupManager.table.rowManager.setDisplayRows(this.groupManager.updateGroupRows(), this.groupManager.getDisplayIndex());

			this.groupManager.table.rowManager.checkClassicModeGroupHeaderWidth();
		} else {
			this.groupManager.updateGroupRows(true);
		}

		this.groupManager.table.options.groupVisibilityChanged.call(this.table, this.getComponent(), false);
	};

	Group.prototype.show = function () {
		var self = this;

		self.visible = true;

		if (this.groupManager.table.rowManager.getRenderMode() == "classic" && !this.groupManager.table.options.pagination) {

			this.element.classList.add("tabulator-group-visible");

			var prev = self.getElement();

			if (this.groupList.length) {
				this.groupList.forEach(function (group) {
					var rows = group.getHeadersAndRows();

					rows.forEach(function (row) {
						var rowEl = row.getElement();
						prev.parentNode.insertBefore(rowEl, prev.nextSibling);
						row.initialize();
						prev = rowEl;
					});
				});
			} else {
				self.rows.forEach(function (row) {
					var rowEl = row.getElement();
					prev.parentNode.insertBefore(rowEl, prev.nextSibling);
					row.initialize();
					prev = rowEl;
				});
			}

			this.groupManager.table.rowManager.setDisplayRows(this.groupManager.updateGroupRows(), this.groupManager.getDisplayIndex());

			this.groupManager.table.rowManager.checkClassicModeGroupHeaderWidth();
		} else {
			this.groupManager.updateGroupRows(true);
		}

		this.groupManager.table.options.groupVisibilityChanged.call(this.table, this.getComponent(), true);
	};

	Group.prototype._visSet = function () {
		var data = [];

		if (typeof this.visible == "function") {

			this.rows.forEach(function (row) {
				data.push(row.getData());
			});

			this.visible = this.visible(this.key, this.getRowCount(), data, this.getComponent());
		}
	};

	Group.prototype.getRowGroup = function (row) {
		var match = false;
		if (this.groupList.length) {
			this.groupList.forEach(function (group) {
				var result = group.getRowGroup(row);

				if (result) {
					match = result;
				}
			});
		} else {
			if (this.rows.find(function (item) {
				return item === row;
			})) {
				match = this;
			}
		}

		return match;
	};

	Group.prototype.getSubGroups = function (component) {
		var output = [];

		this.groupList.forEach(function (child) {
			output.push(component ? child.getComponent() : child);
		});

		return output;
	};

	Group.prototype.getRows = function (compoment) {
		var output = [];

		this.rows.forEach(function (row) {
			output.push(compoment ? row.getComponent() : row);
		});

		return output;
	};

	Group.prototype.generateGroupHeaderContents = function () {
		var data = [];

		this.rows.forEach(function (row) {
			data.push(row.getData());
		});

		this.elementContents = this.generator(this.key, this.getRowCount(), data, this.getComponent());

		while (this.element.firstChild) {
			this.element.removeChild(this.element.firstChild);
		}if (typeof this.elementContents === "string") {
			this.element.innerHTML = this.elementContents;
		} else {
			this.element.appendChild(this.elementContents);
		}

		this.element.insertBefore(this.arrowElement, this.element.firstChild);
	};

	////////////// Standard Row Functions //////////////

	Group.prototype.getElement = function () {
		this.addBindingsd = false;

		this._visSet();

		if (this.visible) {
			this.element.classList.add("tabulator-group-visible");
		} else {
			this.element.classList.remove("tabulator-group-visible");
		}

		for (var i = 0; i < this.element.childNodes.length; ++i) {
			this.element.childNodes[i].parentNode.removeChild(this.element.childNodes[i]);
		}

		this.generateGroupHeaderContents();

		// this.addBindings();

		return this.element;
	};

	Group.prototype.detachElement = function () {
		if (this.element && this.element.parentNode) {
			this.element.parentNode.removeChild(this.element);
		}
	};

	//normalize the height of elements in the row
	Group.prototype.normalizeHeight = function () {
		this.setHeight(this.element.clientHeight);
	};

	Group.prototype.initialize = function (force) {
		if (!this.initialized || force) {
			this.normalizeHeight();
			this.initialized = true;
		}
	};

	Group.prototype.reinitialize = function () {
		this.initialized = false;
		this.height = 0;

		if (Tabulator.prototype.helpers.elVisible(this.element)) {
			this.initialize(true);
		}
	};

	Group.prototype.setHeight = function (height) {
		if (this.height != height) {
			this.height = height;
			this.outerHeight = this.element.offsetHeight;
		}
	};

	//return rows outer height
	Group.prototype.getHeight = function () {
		return this.outerHeight;
	};

	Group.prototype.getGroup = function () {
		return this;
	};

	Group.prototype.reinitializeHeight = function () {};
	Group.prototype.calcHeight = function () {};
	Group.prototype.setCellHeight = function () {};
	Group.prototype.clearCellHeight = function () {};

	//////////////// Object Generation /////////////////
	Group.prototype.getComponent = function () {
		return new GroupComponent(this);
	};

	//////////////////////////////////////////////////
	////////////// Group Row Extension ///////////////
	//////////////////////////////////////////////////

	var GroupRows = function GroupRows(table) {

		this.table = table; //hold Tabulator object

		this.groupIDLookups = false; //enable table grouping and set field to group by
		this.startOpen = [function () {
			return false;
		}]; //starting state of group
		this.headerGenerator = [function () {
			return "";
		}];
		this.groupList = []; //ordered list of groups
		this.allowedValues = false;
		this.groups = {}; //hold row groups
		this.displayIndex = 0; //index in display pipeline
	};

	//initialize group configuration
	GroupRows.prototype.initialize = function () {
		var self = this,
		    groupBy = self.table.options.groupBy,
		    startOpen = self.table.options.groupStartOpen,
		    groupHeader = self.table.options.groupHeader;

		this.allowedValues = self.table.options.groupValues;

		if (Array.isArray(groupBy) && Array.isArray(groupHeader) && groupBy.length > groupHeader.length) {
			console.warn("Error creating group headers, groupHeader array is shorter than groupBy array");
		}

		self.headerGenerator = [function () {
			return "";
		}];
		this.startOpen = [function () {
			return false;
		}]; //starting state of group

		self.table.modules.localize.bind("groups|item", function (langValue, lang) {
			self.headerGenerator[0] = function (value, count, data) {
				//header layout function
				return (typeof value === "undefined" ? "" : value) + "<span>(" + count + " " + (count === 1 ? langValue : lang.groups.items) + ")</span>";
			};
		});

		this.groupIDLookups = [];

		if (Array.isArray(groupBy) || groupBy) {
			if (this.table.modExists("columnCalcs") && this.table.options.columnCalcs != "table" && this.table.options.columnCalcs != "both") {
				this.table.modules.columnCalcs.removeCalcs();
			}
		} else {
			if (this.table.modExists("columnCalcs") && this.table.options.columnCalcs != "group") {

				var cols = this.table.columnManager.getRealColumns();

				cols.forEach(function (col) {
					if (col.definition.topCalc) {
						self.table.modules.columnCalcs.initializeTopRow();
					}

					if (col.definition.bottomCalc) {
						self.table.modules.columnCalcs.initializeBottomRow();
					}
				});
			}
		}

		if (!Array.isArray(groupBy)) {
			groupBy = [groupBy];
		}

		groupBy.forEach(function (group, i) {
			var lookupFunc, column;

			if (typeof group == "function") {
				lookupFunc = group;
			} else {
				column = self.table.columnManager.getColumnByField(group);

				if (column) {
					lookupFunc = function lookupFunc(data) {
						return column.getFieldValue(data);
					};
				} else {
					lookupFunc = function lookupFunc(data) {
						return data[group];
					};
				}
			}

			self.groupIDLookups.push({
				field: typeof group === "function" ? false : group,
				func: lookupFunc,
				values: self.allowedValues ? self.allowedValues[i] : false
			});
		});

		if (startOpen) {

			if (!Array.isArray(startOpen)) {
				startOpen = [startOpen];
			}

			startOpen.forEach(function (level) {
				level = typeof level == "function" ? level : function () {
					return true;
				};
			});

			self.startOpen = startOpen;
		}

		if (groupHeader) {
			self.headerGenerator = Array.isArray(groupHeader) ? groupHeader : [groupHeader];
		}

		this.initialized = true;
	};

	GroupRows.prototype.setDisplayIndex = function (index) {
		this.displayIndex = index;
	};

	GroupRows.prototype.getDisplayIndex = function () {
		return this.displayIndex;
	};

	//return appropriate rows with group headers
	GroupRows.prototype.getRows = function (rows) {
		if (this.groupIDLookups.length) {

			this.table.options.dataGrouping.call(this.table);

			this.generateGroups(rows);

			if (this.table.options.dataGrouped) {
				this.table.options.dataGrouped.call(this.table, this.getGroups(true));
			}

			return this.updateGroupRows();
		} else {
			return rows.slice(0);
		}
	};

	GroupRows.prototype.getGroups = function (compoment) {
		var groupComponents = [];

		this.groupList.forEach(function (group) {
			groupComponents.push(compoment ? group.getComponent() : group);
		});

		return groupComponents;
	};

	GroupRows.prototype.getChildGroups = function (group) {
		var _this56 = this;

		var groupComponents = [];

		if (!group) {
			group = this;
		}

		group.groupList.forEach(function (child) {
			if (child.groupList.length) {
				groupComponents = groupComponents.concat(_this56.getChildGroups(child));
			} else {
				groupComponents.push(child);
			}
		});

		return groupComponents;
	};

	GroupRows.prototype.wipe = function () {
		this.groupList.forEach(function (group) {
			group.wipe();
		});
	};

	GroupRows.prototype.pullGroupListData = function (groupList) {
		var self = this;
		var groupListData = [];

		groupList.forEach(function (group) {
			var groupHeader = {};
			groupHeader.level = 0;
			groupHeader.rowCount = 0;
			groupHeader.headerContent = "";
			var childData = [];

			if (group.hasSubGroups) {
				childData = self.pullGroupListData(group.groupList);

				groupHeader.level = group.level;
				groupHeader.rowCount = childData.length - group.groupList.length; // data length minus number of sub-headers
				groupHeader.headerContent = group.generator(group.key, groupHeader.rowCount, group.rows, group);

				groupListData.push(groupHeader);
				groupListData = groupListData.concat(childData);
			} else {
				groupHeader.level = group.level;
				groupHeader.headerContent = group.generator(group.key, group.rows.length, group.rows, group);
				groupHeader.rowCount = group.getRows().length;

				groupListData.push(groupHeader);

				group.getRows().forEach(function (row) {
					groupListData.push(row.getData("data"));
				});
			}
		});

		return groupListData;
	};

	GroupRows.prototype.getGroupedData = function () {

		return this.pullGroupListData(this.groupList);
	};

	GroupRows.prototype.getRowGroup = function (row) {
		var match = false;

		this.groupList.forEach(function (group) {
			var result = group.getRowGroup(row);

			if (result) {
				match = result;
			}
		});

		return match;
	};

	GroupRows.prototype.countGroups = function () {
		return this.groupList.length;
	};

	GroupRows.prototype.generateGroups = function (rows) {
		var self = this,
		    oldGroups = self.groups;

		self.groups = {};
		self.groupList = [];

		if (this.allowedValues && this.allowedValues[0]) {
			this.allowedValues[0].forEach(function (value) {
				self.createGroup(value, 0, oldGroups);
			});

			rows.forEach(function (row) {
				self.assignRowToExistingGroup(row, oldGroups);
			});
		} else {
			rows.forEach(function (row) {
				self.assignRowToGroup(row, oldGroups);
			});
		}
	};

	GroupRows.prototype.createGroup = function (groupID, level, oldGroups) {
		var groupKey = level + "_" + groupID,
		    group;

		oldGroups = oldGroups || [];

		group = new Group(this, false, level, groupID, this.groupIDLookups[0].field, this.headerGenerator[0], oldGroups[groupKey]);

		this.groups[groupKey] = group;
		this.groupList.push(group);
	};

	// GroupRows.prototype.assignRowToGroup = function(row, oldGroups){
	// 	var groupID = this.groupIDLookups[0].func(row.getData()),
	// 	groupKey = "0_" + groupID;

	// 	if(!this.groups[groupKey]){
	// 		this.createGroup(groupID, 0, oldGroups);
	// 	}

	// 	this.groups[groupKey].addRow(row);
	// };

	GroupRows.prototype.assignRowToExistingGroup = function (row, oldGroups) {
		var groupID = this.groupIDLookups[0].func(row.getData()),
		    groupKey = "0_" + groupID;

		if (this.groups[groupKey]) {
			this.groups[groupKey].addRow(row);
		}
	};

	GroupRows.prototype.assignRowToGroup = function (row, oldGroups) {
		var groupID = this.groupIDLookups[0].func(row.getData()),
		    newGroupNeeded = !this.groups["0_" + groupID];

		if (newGroupNeeded) {
			this.createGroup(groupID, 0, oldGroups);
		}

		this.groups["0_" + groupID].addRow(row);

		return !newGroupNeeded;
	};

	GroupRows.prototype.updateGroupRows = function (force) {
		var self = this,
		    output = [],
		    oldRowCount;

		self.groupList.forEach(function (group) {
			output = output.concat(group.getHeadersAndRows());
		});

		//force update of table display
		if (force) {

			var displayIndex = self.table.rowManager.setDisplayRows(output, this.getDisplayIndex());

			if (displayIndex !== true) {
				this.setDisplayIndex(displayIndex);
			}

			self.table.rowManager.refreshActiveData("group", true, true);
		}

		return output;
	};

	GroupRows.prototype.scrollHeaders = function (left) {
		left = left + "px";

		this.groupList.forEach(function (group) {
			group.scrollHeader(left);
		});
	};

	GroupRows.prototype.removeGroup = function (group) {
		var groupKey = group.level + "_" + group.key,
		    index;

		if (this.groups[groupKey]) {
			delete this.groups[groupKey];

			index = this.groupList.indexOf(group);

			if (index > -1) {
				this.groupList.splice(index, 1);
			}
		}
	};

	Tabulator.prototype.registerModule("groupRows", GroupRows);
	var History = function History(table) {
		this.table = table; //hold Tabulator object

		this.history = [];
		this.index = -1;
	};

	History.prototype.clear = function () {
		this.history = [];
		this.index = -1;
	};

	History.prototype.action = function (type, component, data) {

		this.history = this.history.slice(0, this.index + 1);

		this.history.push({
			type: type,
			component: component,
			data: data
		});

		this.index++;
	};

	History.prototype.getHistoryUndoSize = function () {
		return this.index + 1;
	};

	History.prototype.getHistoryRedoSize = function () {
		return this.history.length - (this.index + 1);
	};

	History.prototype.undo = function () {

		if (this.index > -1) {
			var action = this.history[this.index];

			this.undoers[action.type].call(this, action);

			this.index--;

			this.table.options.historyUndo.call(this.table, action.type, action.component.getComponent(), action.data);

			return true;
		} else {
			console.warn("History Undo Error - No more history to undo");
			return false;
		}
	};

	History.prototype.redo = function () {
		if (this.history.length - 1 > this.index) {

			this.index++;

			var action = this.history[this.index];

			this.redoers[action.type].call(this, action);

			this.table.options.historyRedo.call(this.table, action.type, action.component.getComponent(), action.data);

			return true;
		} else {
			console.warn("History Redo Error - No more history to redo");
			return false;
		}
	};

	History.prototype.undoers = {
		cellEdit: function cellEdit(action) {
			action.component.setValueProcessData(action.data.oldValue);
		},

		rowAdd: function rowAdd(action) {
			action.component.deleteActual();
		},

		rowDelete: function rowDelete(action) {
			var newRow = this.table.rowManager.addRowActual(action.data.data, action.data.pos, action.data.index);

			if (this.table.options.groupBy && this.table.modExists("groupRows")) {
				this.table.modules.groupRows.updateGroupRows(true);
			}

			this._rebindRow(action.component, newRow);
		},

		rowMove: function rowMove(action) {
			this.table.rowManager.moveRowActual(action.component, this.table.rowManager.rows[action.data.posFrom], !action.data.after);
			this.table.rowManager.redraw();
		}
	};

	History.prototype.redoers = {
		cellEdit: function cellEdit(action) {
			action.component.setValueProcessData(action.data.newValue);
		},

		rowAdd: function rowAdd(action) {
			var newRow = this.table.rowManager.addRowActual(action.data.data, action.data.pos, action.data.index);

			if (this.table.options.groupBy && this.table.modExists("groupRows")) {
				this.table.modules.groupRows.updateGroupRows(true);
			}

			this._rebindRow(action.component, newRow);
		},

		rowDelete: function rowDelete(action) {
			action.component.deleteActual();
		},

		rowMove: function rowMove(action) {
			this.table.rowManager.moveRowActual(action.component, this.table.rowManager.rows[action.data.posTo], action.data.after);
			this.table.rowManager.redraw();
		}
	};

	//rebind rows to new element after deletion
	History.prototype._rebindRow = function (oldRow, newRow) {
		this.history.forEach(function (action) {
			if (action.component instanceof Row) {
				if (action.component === oldRow) {
					action.component = newRow;
				}
			} else if (action.component instanceof Cell) {
				if (action.component.row === oldRow) {
					var field = action.component.column.getField();

					if (field) {
						action.component = newRow.getCell(field);
					}
				}
			}
		});
	};

	Tabulator.prototype.registerModule("history", History);
	var HtmlTableImport = function HtmlTableImport(table) {
		this.table = table; //hold Tabulator object
		this.fieldIndex = [];
		this.hasIndex = false;
	};

	HtmlTableImport.prototype.parseTable = function () {
		var self = this,
		    element = self.table.element,
		    options = self.table.options,
		    columns = options.columns,
		    headers = element.getElementsByTagName("th"),
		    rows = element.getElementsByTagName("tbody")[0],
		    data = [],
		    newTable;

		self.hasIndex = false;

		self.table.options.htmlImporting.call(this.table);

		rows = rows ? rows.getElementsByTagName("tr") : [];

		//check for tablator inline options
		self._extractOptions(element, options);

		if (headers.length) {
			self._extractHeaders(headers, rows);
		} else {
			self._generateBlankHeaders(headers, rows);
		}

		//iterate through table rows and build data set
		for (var index = 0; index < rows.length; index++) {
			var row = rows[index],
			    cells = row.getElementsByTagName("td"),
			    item = {};

			//create index if the dont exist in table
			if (!self.hasIndex) {
				item[options.index] = index;
			}

			for (var i = 0; i < cells.length; i++) {
				var cell = cells[i];
				if (typeof this.fieldIndex[i] !== "undefined") {
					item[this.fieldIndex[i]] = cell.innerHTML;
				}
			}

			//add row data to item
			data.push(item);
		}

		//create new element
		var newElement = document.createElement("div");

		//transfer attributes to new element
		var attributes = element.attributes;

		// loop through attributes and apply them on div

		for (var i in attributes) {
			if (_typeof(attributes[i]) == "object") {
				newElement.setAttribute(attributes[i].name, attributes[i].value);
			}
		}

		// replace table with div element
		element.parentNode.replaceChild(newElement, element);

		options.data = data;

		self.table.options.htmlImported.call(this.table);

		// // newElement.tabulator(options);

		this.table.element = newElement;
	};

	//extract tabulator attribute options
	HtmlTableImport.prototype._extractOptions = function (element, options, defaultOptions) {
		var attributes = element.attributes;
		var optionsArr = defaultOptions ? Object.assign([], defaultOptions) : Object.keys(options);
		var optionsList = {};

		optionsArr.forEach(function (item) {
			optionsList[item.toLowerCase()] = item;
		});

		for (var index in attributes) {
			var attrib = attributes[index];
			var name;

			if (attrib && (typeof attrib === 'undefined' ? 'undefined' : _typeof(attrib)) == "object" && attrib.name && attrib.name.indexOf("tabulator-") === 0) {
				name = attrib.name.replace("tabulator-", "");

				if (typeof optionsList[name] !== "undefined") {
					options[optionsList[name]] = this._attribValue(attrib.value);
				}
			}
		}
	};

	//get value of attribute
	HtmlTableImport.prototype._attribValue = function (value) {
		if (value === "true") {
			return true;
		}

		if (value === "false") {
			return false;
		}

		return value;
	};

	//find column if it has already been defined
	HtmlTableImport.prototype._findCol = function (title) {
		var match = this.table.options.columns.find(function (column) {
			return column.title === title;
		});

		return match || false;
	};

	//extract column from headers
	HtmlTableImport.prototype._extractHeaders = function (headers, rows) {
		for (var index = 0; index < headers.length; index++) {
			var header = headers[index],
			    exists = false,
			    col = this._findCol(header.textContent),
			    width,
			    attributes;

			if (col) {
				exists = true;
			} else {
				col = { title: header.textContent.trim() };
			}

			if (!col.field) {
				col.field = header.textContent.trim().toLowerCase().replace(" ", "_");
			}

			width = header.getAttribute("width");

			if (width && !col.width) {
				col.width = width;
			}

			//check for tablator inline options
			attributes = header.attributes;

			// //check for tablator inline options
			this._extractOptions(header, col, Column.prototype.defaultOptionList);

			this.fieldIndex[index] = col.field;

			if (col.field == this.table.options.index) {
				this.hasIndex = true;
			}

			if (!exists) {
				this.table.options.columns.push(col);
			}
		}
	};

	//generate blank headers
	HtmlTableImport.prototype._generateBlankHeaders = function (headers, rows) {
		for (var index = 0; index < headers.length; index++) {
			var header = headers[index],
			    col = { title: "", field: "col" + index };

			this.fieldIndex[index] = col.field;

			var width = header.getAttribute("width");

			if (width) {
				col.width = width;
			}

			this.table.options.columns.push(col);
		}
	};

	Tabulator.prototype.registerModule("htmlTableImport", HtmlTableImport);
	var Keybindings = function Keybindings(table) {
		this.table = table; //hold Tabulator object
		this.watchKeys = null;
		this.pressedKeys = null;
		this.keyupBinding = false;
		this.keydownBinding = false;
	};

	Keybindings.prototype.initialize = function () {
		var bindings = this.table.options.keybindings,
		    mergedBindings = {};

		this.watchKeys = {};
		this.pressedKeys = [];

		if (bindings !== false) {

			for (var key in this.bindings) {
				mergedBindings[key] = this.bindings[key];
			}

			if (Object.keys(bindings).length) {

				for (var _key in bindings) {
					mergedBindings[_key] = bindings[_key];
				}
			}

			this.mapBindings(mergedBindings);
			this.bindEvents();
		}
	};

	Keybindings.prototype.mapBindings = function (bindings) {
		var _this57 = this;

		var self = this;

		var _loop2 = function _loop2(key) {

			if (_this57.actions[key]) {

				if (bindings[key]) {

					if (_typeof(bindings[key]) !== "object") {
						bindings[key] = [bindings[key]];
					}

					bindings[key].forEach(function (binding) {
						self.mapBinding(key, binding);
					});
				}
			} else {
				console.warn("Key Binding Error - no such action:", key);
			}
		};

		for (var key in bindings) {
			_loop2(key);
		}
	};

	Keybindings.prototype.mapBinding = function (action, symbolsList) {
		var self = this;

		var binding = {
			action: this.actions[action],
			keys: [],
			ctrl: false,
			shift: false,
			meta: false
		};

		var symbols = symbolsList.toString().toLowerCase().split(" ").join("").split("+");

		symbols.forEach(function (symbol) {
			switch (symbol) {
				case "ctrl":
					binding.ctrl = true;
					break;

				case "shift":
					binding.shift = true;
					break;

				case "meta":
					binding.meta = true;
					break;

				default:
					symbol = parseInt(symbol);
					binding.keys.push(symbol);

					if (!self.watchKeys[symbol]) {
						self.watchKeys[symbol] = [];
					}

					self.watchKeys[symbol].push(binding);
			}
		});
	};

	Keybindings.prototype.bindEvents = function () {
		var self = this;

		this.keyupBinding = function (e) {
			var code = e.keyCode;
			var bindings = self.watchKeys[code];

			if (bindings) {

				self.pressedKeys.push(code);

				bindings.forEach(function (binding) {
					self.checkBinding(e, binding);
				});
			}
		};

		this.keydownBinding = function (e) {
			var code = e.keyCode;
			var bindings = self.watchKeys[code];

			if (bindings) {

				var index = self.pressedKeys.indexOf(code);

				if (index > -1) {
					self.pressedKeys.splice(index, 1);
				}
			}
		};

		this.table.element.addEventListener("keydown", this.keyupBinding);

		this.table.element.addEventListener("keyup", this.keydownBinding);
	};

	Keybindings.prototype.clearBindings = function () {
		if (this.keyupBinding) {
			this.table.element.removeEventListener("keydown", this.keyupBinding);
		}

		if (this.keydownBinding) {
			this.table.element.removeEventListener("keyup", this.keydownBinding);
		}
	};

	Keybindings.prototype.checkBinding = function (e, binding) {
		var self = this,
		    match = true;

		if (e.ctrlKey == binding.ctrl && e.shiftKey == binding.shift && e.metaKey == binding.meta) {
			binding.keys.forEach(function (key) {
				var index = self.pressedKeys.indexOf(key);

				if (index == -1) {
					match = false;
				}
			});

			if (match) {
				binding.action.call(self, e);
			}

			return true;
		}

		return false;
	};

	//default bindings
	Keybindings.prototype.bindings = {
		navPrev: "shift + 9",
		navNext: 9,
		navUp: 38,
		navDown: 40,
		scrollPageUp: 33,
		scrollPageDown: 34,
		scrollToStart: 36,
		scrollToEnd: 35,
		undo: "ctrl + 90",
		redo: "ctrl + 89",
		copyToClipboard: "ctrl + 67"
	};

	//default actions
	Keybindings.prototype.actions = {
		keyBlock: function keyBlock(e) {
			e.stopPropagation();
			e.preventDefault();
		},
		scrollPageUp: function scrollPageUp(e) {
			var rowManager = this.table.rowManager,
			    newPos = rowManager.scrollTop - rowManager.height,
			    scrollMax = rowManager.element.scrollHeight;

			e.preventDefault();

			if (rowManager.displayRowsCount) {
				if (newPos >= 0) {
					rowManager.element.scrollTop = newPos;
				} else {
					rowManager.scrollToRow(rowManager.getDisplayRows()[0]);
				}
			}

			this.table.element.focus();
		},
		scrollPageDown: function scrollPageDown(e) {
			var rowManager = this.table.rowManager,
			    newPos = rowManager.scrollTop + rowManager.height,
			    scrollMax = rowManager.element.scrollHeight;

			e.preventDefault();

			if (rowManager.displayRowsCount) {
				if (newPos <= scrollMax) {
					rowManager.element.scrollTop = newPos;
				} else {
					rowManager.scrollToRow(rowManager.getDisplayRows()[rowManager.displayRowsCount - 1]);
				}
			}

			this.table.element.focus();
		},
		scrollToStart: function scrollToStart(e) {
			var rowManager = this.table.rowManager;

			e.preventDefault();

			if (rowManager.displayRowsCount) {
				rowManager.scrollToRow(rowManager.getDisplayRows()[0]);
			}

			this.table.element.focus();
		},
		scrollToEnd: function scrollToEnd(e) {
			var rowManager = this.table.rowManager;

			e.preventDefault();

			if (rowManager.displayRowsCount) {
				rowManager.scrollToRow(rowManager.getDisplayRows()[rowManager.displayRowsCount - 1]);
			}

			this.table.element.focus();
		},
		navPrev: function navPrev(e) {
			var cell = false;

			if (this.table.modExists("edit")) {
				cell = this.table.modules.edit.currentCell;

				if (cell) {
					e.preventDefault();
					cell.nav().prev();
				}
			}
		},

		navNext: function navNext(e) {
			var cell = false;
			var newRow = this.table.options.tabEndNewRow;
			var nav;

			if (this.table.modExists("edit")) {
				cell = this.table.modules.edit.currentCell;

				if (cell) {
					e.preventDefault();

					nav = cell.nav();

					if (!nav.next()) {
						if (newRow) {

							cell.getElement().firstChild.blur();

							if (newRow === true) {
								newRow = this.table.addRow({});
							} else {
								if (typeof newRow == "function") {
									newRow = this.table.addRow(newRow(cell.row.getComponent()));
								} else {
									newRow = this.table.addRow(newRow);
								}
							}

							newRow.then(function () {
								setTimeout(function () {
									nav.next();
								});
							});
						}
					}
				}
			}
		},

		navLeft: function navLeft(e) {
			var cell = false;

			if (this.table.modExists("edit")) {
				cell = this.table.modules.edit.currentCell;

				if (cell) {
					e.preventDefault();
					cell.nav().left();
				}
			}
		},

		navRight: function navRight(e) {
			var cell = false;

			if (this.table.modExists("edit")) {
				cell = this.table.modules.edit.currentCell;

				if (cell) {
					e.preventDefault();
					cell.nav().right();
				}
			}
		},

		navUp: function navUp(e) {
			var cell = false;

			if (this.table.modExists("edit")) {
				cell = this.table.modules.edit.currentCell;

				if (cell) {
					e.preventDefault();
					cell.nav().up();
				}
			}
		},

		navDown: function navDown(e) {
			var cell = false;

			if (this.table.modExists("edit")) {
				cell = this.table.modules.edit.currentCell;

				if (cell) {
					e.preventDefault();
					cell.nav().down();
				}
			}
		},

		undo: function undo(e) {
			var cell = false;
			if (this.table.options.history && this.table.modExists("history") && this.table.modExists("edit")) {

				cell = this.table.modules.edit.currentCell;

				if (!cell) {
					e.preventDefault();
					this.table.modules.history.undo();
				}
			}
		},

		redo: function redo(e) {
			var cell = false;
			if (this.table.options.history && this.table.modExists("history") && this.table.modExists("edit")) {

				cell = this.table.modules.edit.currentCell;

				if (!cell) {
					e.preventDefault();
					this.table.modules.history.redo();
				}
			}
		},

		copyToClipboard: function copyToClipboard(e) {
			if (!this.table.modules.edit.currentCell) {
				if (this.table.modExists("clipboard", true)) {
					this.table.modules.clipboard.copy(false, true);
				}
			}
		}
	};

	Tabulator.prototype.registerModule("keybindings", Keybindings);
	var Menu = function Menu(table) {
		this.table = table; //hold Tabulator object
		this.menuEl = false;
		this.blurEvent = this.hideMenu.bind(this);
	};

	Menu.prototype.initializeColumnHeader = function (column) {
		var _this58 = this;

		var headerMenuEl;

		if (column.definition.headerContextMenu) {
			column.getElement().addEventListener("contextmenu", function (e) {
				var menu = typeof column.definition.headerContextMenu == "function" ? column.definition.headerContextMenu() : column.definition.headerContextMenu;

				e.preventDefault();

				_this58.loadMenu(e, column, menu);
			});
		}

		if (column.definition.headerMenu) {

			headerMenuEl = document.createElement("span");
			headerMenuEl.classList.add("tabulator-header-menu-button");
			headerMenuEl.innerHTML = "&vellip;";

			headerMenuEl.addEventListener("click", function (e) {
				var menu = typeof column.definition.headerMenu == "function" ? column.definition.headerMenu() : column.definition.headerMenu;
				e.stopPropagation();
				e.preventDefault();

				_this58.loadMenu(e, column, menu);
			});

			column.titleElement.insertBefore(headerMenuEl, column.titleElement.firstChild);
		}
	};

	Menu.prototype.initializeCell = function (cell) {
		var _this59 = this;

		cell.getElement().addEventListener("contextmenu", function (e) {
			var menu = typeof cell.column.definition.contextMenu == "function" ? cell.column.definition.contextMenu() : cell.column.definition.contextMenu;

			e.preventDefault();

			_this59.loadMenu(e, cell, menu);
		});
	};

	Menu.prototype.initializeRow = function (row) {
		var _this60 = this;

		row.getElement().addEventListener("contextmenu", function (e) {
			var menu = typeof _this60.table.options.rowContextMenu == "function" ? _this60.table.options.rowContextMenu() : _this60.table.options.rowContextMenu;

			e.preventDefault();

			_this60.loadMenu(e, row, menu);
		});
	};

	Menu.prototype.loadMenu = function (e, component, menu) {
		var _this61 = this;

		var docHeight = document.body.offsetHeight;

		//abort if no menu set
		if (!menu || !menu.length) {
			return;
		}

		this.hideMenu();

		this.menuEl = document.createElement("div");
		this.menuEl.classList.add("tabulator-menu");

		menu.forEach(function (item) {
			var itemEl = document.createElement("div");
			var label = item.label;
			var disabled = item.disabled;

			if (item.separator) {
				itemEl.classList.add("tabulator-menu-separator");
			} else {
				itemEl.classList.add("tabulator-menu-item");

				if (typeof label == "function") {
					label = label(component.getComponent());
				}

				if (label instanceof Node) {
					itemEl.appendChild(label);
				} else {
					itemEl.innerHTML = label;
				}

				if (typeof disabled == "function") {
					disabled = disabled(component.getComponent());
				}

				if (disabled) {
					itemEl.classList.add("tabulator-menu-item-disabled");
					itemEl.addEventListener("click", function (e) {
						e.stopPropagation();
					});
				} else {
					itemEl.addEventListener("click", function (e) {
						_this61.hideMenu();
						item.action(e, component.getComponent());
					});
				}
			}

			_this61.menuEl.appendChild(itemEl);
		});

		this.menuEl.style.top = e.pageY + "px";
		this.menuEl.style.left = e.pageX + "px";

		document.body.addEventListener("click", this.blurEvent);
		this.table.rowManager.element.addEventListener("scroll", this.blurEvent);

		setTimeout(function () {
			document.body.addEventListener("contextmenu", _this61.blurEvent);
		}, 100);

		document.body.appendChild(this.menuEl);

		//move menu to start on right edge if it is too close to the edge of the screen
		if (e.pageX + this.menuEl.offsetWidth >= document.body.offsetWidth) {
			this.menuEl.style.left = "";
			this.menuEl.style.right = document.body.offsetWidth - e.pageX + "px";
		}

		//move menu to start on bottom edge if it is too close to the edge of the screen
		if (e.pageY + this.menuEl.offsetHeight >= docHeight) {
			this.menuEl.style.top = "";
			this.menuEl.style.bottom = docHeight - e.pageY + "px";
		}
	};

	Menu.prototype.hideMenu = function () {
		if (this.menuEl.parentNode) {
			this.menuEl.parentNode.removeChild(this.menuEl);
		}

		if (this.blurEvent) {
			document.body.removeEventListener("click", this.blurEvent);
			document.body.removeEventListener("contextmenu", this.blurEvent);
			this.table.rowManager.element.removeEventListener("scroll", this.blurEvent);
		}
	};

	//default accessors
	Menu.prototype.menus = {};

	Tabulator.prototype.registerModule("menu", Menu);
	var MoveColumns = function MoveColumns(table) {
		this.table = table; //hold Tabulator object
		this.placeholderElement = this.createPlaceholderElement();
		this.hoverElement = false; //floating column header element
		this.checkTimeout = false; //click check timeout holder
		this.checkPeriod = 250; //period to wait on mousedown to consider this a move and not a click
		this.moving = false; //currently moving column
		this.toCol = false; //destination column
		this.toColAfter = false; //position of moving column relative to the desitnation column
		this.startX = 0; //starting position within header element
		this.autoScrollMargin = 40; //auto scroll on edge when within margin
		this.autoScrollStep = 5; //auto scroll distance in pixels
		this.autoScrollTimeout = false; //auto scroll timeout
		this.touchMove = false;

		this.moveHover = this.moveHover.bind(this);
		this.endMove = this.endMove.bind(this);
	};

	MoveColumns.prototype.createPlaceholderElement = function () {
		var el = document.createElement("div");

		el.classList.add("tabulator-col");
		el.classList.add("tabulator-col-placeholder");

		return el;
	};

	MoveColumns.prototype.initializeColumn = function (column) {
		var self = this,
		    config = {},
		    colEl;

		if (!column.modules.frozen) {

			colEl = column.getElement();

			config.mousemove = function (e) {
				if (column.parent === self.moving.parent) {
					if ((self.touchMove ? e.touches[0].pageX : e.pageX) - Tabulator.prototype.helpers.elOffset(colEl).left + self.table.columnManager.element.scrollLeft > column.getWidth() / 2) {
						if (self.toCol !== column || !self.toColAfter) {
							colEl.parentNode.insertBefore(self.placeholderElement, colEl.nextSibling);
							self.moveColumn(column, true);
						}
					} else {
						if (self.toCol !== column || self.toColAfter) {
							colEl.parentNode.insertBefore(self.placeholderElement, colEl);
							self.moveColumn(column, false);
						}
					}
				}
			}.bind(self);

			colEl.addEventListener("mousedown", function (e) {
				self.touchMove = false;
				if (e.which === 1) {
					self.checkTimeout = setTimeout(function () {
						self.startMove(e, column);
					}, self.checkPeriod);
				}
			});

			colEl.addEventListener("mouseup", function (e) {
				if (e.which === 1) {
					if (self.checkTimeout) {
						clearTimeout(self.checkTimeout);
					}
				}
			});

			self.bindTouchEvents(column);
		}

		column.modules.moveColumn = config;
	};

	MoveColumns.prototype.bindTouchEvents = function (column) {
		var self = this,
		    colEl = column.getElement(),
		    startXMove = false,
		    //shifting center position of the cell
		dir = false,
		    currentCol,
		    nextCol,
		    prevCol,
		    nextColWidth,
		    prevColWidth,
		    nextColWidthLast,
		    prevColWidthLast;

		colEl.addEventListener("touchstart", function (e) {
			self.checkTimeout = setTimeout(function () {
				self.touchMove = true;
				currentCol = column;
				nextCol = column.nextColumn();
				nextColWidth = nextCol ? nextCol.getWidth() / 2 : 0;
				prevCol = column.prevColumn();
				prevColWidth = prevCol ? prevCol.getWidth() / 2 : 0;
				nextColWidthLast = 0;
				prevColWidthLast = 0;
				startXMove = false;

				self.startMove(e, column);
			}, self.checkPeriod);
		}, { passive: true });

		colEl.addEventListener("touchmove", function (e) {
			var halfCol, diff, moveToCol;

			if (self.moving) {
				self.moveHover(e);

				if (!startXMove) {
					startXMove = e.touches[0].pageX;
				}

				diff = e.touches[0].pageX - startXMove;

				if (diff > 0) {
					if (nextCol && diff - nextColWidthLast > nextColWidth) {
						moveToCol = nextCol;

						if (moveToCol !== column) {
							startXMove = e.touches[0].pageX;
							moveToCol.getElement().parentNode.insertBefore(self.placeholderElement, moveToCol.getElement().nextSibling);
							self.moveColumn(moveToCol, true);
						}
					}
				} else {
					if (prevCol && -diff - prevColWidthLast > prevColWidth) {
						moveToCol = prevCol;

						if (moveToCol !== column) {
							startXMove = e.touches[0].pageX;
							moveToCol.getElement().parentNode.insertBefore(self.placeholderElement, moveToCol.getElement());
							self.moveColumn(moveToCol, false);
						}
					}
				}

				if (moveToCol) {
					currentCol = moveToCol;
					nextCol = moveToCol.nextColumn();
					nextColWidthLast = nextColWidth;
					nextColWidth = nextCol ? nextCol.getWidth() / 2 : 0;
					prevCol = moveToCol.prevColumn();
					prevColWidthLast = prevColWidth;
					prevColWidth = prevCol ? prevCol.getWidth() / 2 : 0;
				}
			}
		}, { passive: true });

		colEl.addEventListener("touchend", function (e) {
			if (self.checkTimeout) {
				clearTimeout(self.checkTimeout);
			}
			if (self.moving) {
				self.endMove(e);
			}
		});
	};

	MoveColumns.prototype.startMove = function (e, column) {
		var element = column.getElement();

		this.moving = column;
		this.startX = (this.touchMove ? e.touches[0].pageX : e.pageX) - Tabulator.prototype.helpers.elOffset(element).left;

		this.table.element.classList.add("tabulator-block-select");

		//create placeholder
		this.placeholderElement.style.width = column.getWidth() + "px";
		this.placeholderElement.style.height = column.getHeight() + "px";

		element.parentNode.insertBefore(this.placeholderElement, element);
		element.parentNode.removeChild(element);

		//create hover element
		this.hoverElement = element.cloneNode(true);
		this.hoverElement.classList.add("tabulator-moving");

		this.table.columnManager.getElement().appendChild(this.hoverElement);

		this.hoverElement.style.left = "0";
		this.hoverElement.style.bottom = "0";

		if (!this.touchMove) {
			this._bindMouseMove();

			document.body.addEventListener("mousemove", this.moveHover);
			document.body.addEventListener("mouseup", this.endMove);
		}

		this.moveHover(e);
	};

	MoveColumns.prototype._bindMouseMove = function () {
		this.table.columnManager.columnsByIndex.forEach(function (column) {
			if (column.modules.moveColumn.mousemove) {
				column.getElement().addEventListener("mousemove", column.modules.moveColumn.mousemove);
			}
		});
	};

	MoveColumns.prototype._unbindMouseMove = function () {
		this.table.columnManager.columnsByIndex.forEach(function (column) {
			if (column.modules.moveColumn.mousemove) {
				column.getElement().removeEventListener("mousemove", column.modules.moveColumn.mousemove);
			}
		});
	};

	MoveColumns.prototype.moveColumn = function (column, after) {
		var movingCells = this.moving.getCells();

		this.toCol = column;
		this.toColAfter = after;

		if (after) {
			column.getCells().forEach(function (cell, i) {
				var cellEl = cell.getElement();
				cellEl.parentNode.insertBefore(movingCells[i].getElement(), cellEl.nextSibling);
			});
		} else {
			column.getCells().forEach(function (cell, i) {
				var cellEl = cell.getElement();
				cellEl.parentNode.insertBefore(movingCells[i].getElement(), cellEl);
			});
		}
	};

	MoveColumns.prototype.endMove = function (e) {
		if (e.which === 1 || this.touchMove) {
			this._unbindMouseMove();

			this.placeholderElement.parentNode.insertBefore(this.moving.getElement(), this.placeholderElement.nextSibling);
			this.placeholderElement.parentNode.removeChild(this.placeholderElement);
			this.hoverElement.parentNode.removeChild(this.hoverElement);

			this.table.element.classList.remove("tabulator-block-select");

			if (this.toCol) {
				this.table.columnManager.moveColumnActual(this.moving, this.toCol, this.toColAfter);
			}

			this.moving = false;
			this.toCol = false;
			this.toColAfter = false;

			if (!this.touchMove) {
				document.body.removeEventListener("mousemove", this.moveHover);
				document.body.removeEventListener("mouseup", this.endMove);
			}
		}
	};

	MoveColumns.prototype.moveHover = function (e) {
		var self = this,
		    columnHolder = self.table.columnManager.getElement(),
		    scrollLeft = columnHolder.scrollLeft,
		    xPos = (self.touchMove ? e.touches[0].pageX : e.pageX) - Tabulator.prototype.helpers.elOffset(columnHolder).left + scrollLeft,
		    scrollPos;

		self.hoverElement.style.left = xPos - self.startX + "px";

		if (xPos - scrollLeft < self.autoScrollMargin) {
			if (!self.autoScrollTimeout) {
				self.autoScrollTimeout = setTimeout(function () {
					scrollPos = Math.max(0, scrollLeft - 5);
					self.table.rowManager.getElement().scrollLeft = scrollPos;
					self.autoScrollTimeout = false;
				}, 1);
			}
		}

		if (scrollLeft + columnHolder.clientWidth - xPos < self.autoScrollMargin) {
			if (!self.autoScrollTimeout) {
				self.autoScrollTimeout = setTimeout(function () {
					scrollPos = Math.min(columnHolder.clientWidth, scrollLeft + 5);
					self.table.rowManager.getElement().scrollLeft = scrollPos;
					self.autoScrollTimeout = false;
				}, 1);
			}
		}
	};

	Tabulator.prototype.registerModule("moveColumn", MoveColumns);

	var MoveRows = function MoveRows(table) {

		this.table = table; //hold Tabulator object
		this.placeholderElement = this.createPlaceholderElement();
		this.hoverElement = false; //floating row header element
		this.checkTimeout = false; //click check timeout holder
		this.checkPeriod = 150; //period to wait on mousedown to consider this a move and not a click
		this.moving = false; //currently moving row
		this.toRow = false; //destination row
		this.toRowAfter = false; //position of moving row relative to the desitnation row
		this.hasHandle = false; //row has handle instead of fully movable row
		this.startY = 0; //starting Y position within header element
		this.startX = 0; //starting X position within header element

		this.moveHover = this.moveHover.bind(this);
		this.endMove = this.endMove.bind(this);
		this.tableRowDropEvent = false;

		this.touchMove = false;

		this.connection = false;
		this.connections = [];

		this.connectedTable = false;
		this.connectedRow = false;
	};

	MoveRows.prototype.createPlaceholderElement = function () {
		var el = document.createElement("div");

		el.classList.add("tabulator-row");
		el.classList.add("tabulator-row-placeholder");

		return el;
	};

	MoveRows.prototype.initialize = function (handle) {
		this.connection = this.table.options.movableRowsConnectedTables;
	};

	MoveRows.prototype.setHandle = function (handle) {
		this.hasHandle = handle;
	};

	MoveRows.prototype.initializeGroupHeader = function (group) {
		var self = this,
		    config = {},
		    rowEl;

		//inter table drag drop
		config.mouseup = function (e) {
			self.tableRowDrop(e, row);
		}.bind(self);

		//same table drag drop
		config.mousemove = function (e) {
			if (e.pageY - Tabulator.prototype.helpers.elOffset(group.element).top + self.table.rowManager.element.scrollTop > group.getHeight() / 2) {
				if (self.toRow !== group || !self.toRowAfter) {
					var rowEl = group.getElement();
					rowEl.parentNode.insertBefore(self.placeholderElement, rowEl.nextSibling);
					self.moveRow(group, true);
				}
			} else {
				if (self.toRow !== group || self.toRowAfter) {
					var rowEl = group.getElement();
					if (rowEl.previousSibling) {
						rowEl.parentNode.insertBefore(self.placeholderElement, rowEl);
						self.moveRow(group, false);
					}
				}
			}
		}.bind(self);

		group.modules.moveRow = config;
	};

	MoveRows.prototype.initializeRow = function (row) {
		var self = this,
		    config = {},
		    rowEl;

		//inter table drag drop
		config.mouseup = function (e) {
			self.tableRowDrop(e, row);
		}.bind(self);

		//same table drag drop
		config.mousemove = function (e) {
			if (e.pageY - Tabulator.prototype.helpers.elOffset(row.element).top + self.table.rowManager.element.scrollTop > row.getHeight() / 2) {
				if (self.toRow !== row || !self.toRowAfter) {
					var rowEl = row.getElement();
					rowEl.parentNode.insertBefore(self.placeholderElement, rowEl.nextSibling);
					self.moveRow(row, true);
				}
			} else {
				if (self.toRow !== row || self.toRowAfter) {
					var rowEl = row.getElement();
					rowEl.parentNode.insertBefore(self.placeholderElement, rowEl);
					self.moveRow(row, false);
				}
			}
		}.bind(self);

		if (!this.hasHandle) {

			rowEl = row.getElement();

			rowEl.addEventListener("mousedown", function (e) {
				if (e.which === 1) {
					self.checkTimeout = setTimeout(function () {
						self.startMove(e, row);
					}, self.checkPeriod);
				}
			});

			rowEl.addEventListener("mouseup", function (e) {
				if (e.which === 1) {
					if (self.checkTimeout) {
						clearTimeout(self.checkTimeout);
					}
				}
			});

			this.bindTouchEvents(row, row.getElement());
		}

		row.modules.moveRow = config;
	};

	MoveRows.prototype.initializeCell = function (cell) {
		var self = this,
		    cellEl = cell.getElement();

		cellEl.addEventListener("mousedown", function (e) {
			if (e.which === 1) {
				self.checkTimeout = setTimeout(function () {
					self.startMove(e, cell.row);
				}, self.checkPeriod);
			}
		});

		cellEl.addEventListener("mouseup", function (e) {
			if (e.which === 1) {
				if (self.checkTimeout) {
					clearTimeout(self.checkTimeout);
				}
			}
		});

		this.bindTouchEvents(cell.row, cell.getElement());
	};

	MoveRows.prototype.bindTouchEvents = function (row, element) {
		var self = this,
		    startYMove = false,
		    //shifting center position of the cell
		dir = false,
		    currentRow,
		    nextRow,
		    prevRow,
		    nextRowHeight,
		    prevRowHeight,
		    nextRowHeightLast,
		    prevRowHeightLast;

		element.addEventListener("touchstart", function (e) {
			self.checkTimeout = setTimeout(function () {
				self.touchMove = true;
				currentRow = row;
				nextRow = row.nextRow();
				nextRowHeight = nextRow ? nextRow.getHeight() / 2 : 0;
				prevRow = row.prevRow();
				prevRowHeight = prevRow ? prevRow.getHeight() / 2 : 0;
				nextRowHeightLast = 0;
				prevRowHeightLast = 0;
				startYMove = false;

				self.startMove(e, row);
			}, self.checkPeriod);
		}, { passive: true });
		this.moving, this.toRow, this.toRowAfter;
		element.addEventListener("touchmove", function (e) {

			var halfCol, diff, moveToRow;

			if (self.moving) {
				e.preventDefault();

				self.moveHover(e);

				if (!startYMove) {
					startYMove = e.touches[0].pageY;
				}

				diff = e.touches[0].pageY - startYMove;

				if (diff > 0) {
					if (nextRow && diff - nextRowHeightLast > nextRowHeight) {
						moveToRow = nextRow;

						if (moveToRow !== row) {
							startYMove = e.touches[0].pageY;
							moveToRow.getElement().parentNode.insertBefore(self.placeholderElement, moveToRow.getElement().nextSibling);
							self.moveRow(moveToRow, true);
						}
					}
				} else {
					if (prevRow && -diff - prevRowHeightLast > prevRowHeight) {
						moveToRow = prevRow;

						if (moveToRow !== row) {
							startYMove = e.touches[0].pageY;
							moveToRow.getElement().parentNode.insertBefore(self.placeholderElement, moveToRow.getElement());
							self.moveRow(moveToRow, false);
						}
					}
				}

				if (moveToRow) {
					currentRow = moveToRow;
					nextRow = moveToRow.nextRow();
					nextRowHeightLast = nextRowHeight;
					nextRowHeight = nextRow ? nextRow.getHeight() / 2 : 0;
					prevRow = moveToRow.prevRow();
					prevRowHeightLast = prevRowHeight;
					prevRowHeight = prevRow ? prevRow.getHeight() / 2 : 0;
				}
			}
		});

		element.addEventListener("touchend", function (e) {
			if (self.checkTimeout) {
				clearTimeout(self.checkTimeout);
			}
			if (self.moving) {
				self.endMove(e);
				self.touchMove = false;
			}
		});
	};

	MoveRows.prototype._bindMouseMove = function () {
		var self = this;

		self.table.rowManager.getDisplayRows().forEach(function (row) {
			if ((row.type === "row" || row.type === "group") && row.modules.moveRow.mousemove) {
				row.getElement().addEventListener("mousemove", row.modules.moveRow.mousemove);
			}
		});
	};

	MoveRows.prototype._unbindMouseMove = function () {
		var self = this;

		self.table.rowManager.getDisplayRows().forEach(function (row) {
			if ((row.type === "row" || row.type === "group") && row.modules.moveRow.mousemove) {
				row.getElement().removeEventListener("mousemove", row.modules.moveRow.mousemove);
			}
		});
	};

	MoveRows.prototype.startMove = function (e, row) {
		var element = row.getElement();

		this.setStartPosition(e, row);

		this.moving = row;

		this.table.element.classList.add("tabulator-block-select");

		//create placeholder
		this.placeholderElement.style.width = row.getWidth() + "px";
		this.placeholderElement.style.height = row.getHeight() + "px";

		if (!this.connection) {
			element.parentNode.insertBefore(this.placeholderElement, element);
			element.parentNode.removeChild(element);
		} else {
			this.table.element.classList.add("tabulator-movingrow-sending");
			this.connectToTables(row);
		}

		//create hover element
		this.hoverElement = element.cloneNode(true);
		this.hoverElement.classList.add("tabulator-moving");

		if (this.connection) {
			document.body.appendChild(this.hoverElement);
			this.hoverElement.style.left = "0";
			this.hoverElement.style.top = "0";
			this.hoverElement.style.width = this.table.element.clientWidth + "px";
			this.hoverElement.style.whiteSpace = "nowrap";
			this.hoverElement.style.overflow = "hidden";
			this.hoverElement.style.pointerEvents = "none";
		} else {
			this.table.rowManager.getTableElement().appendChild(this.hoverElement);

			this.hoverElement.style.left = "0";
			this.hoverElement.style.top = "0";

			this._bindMouseMove();
		}

		document.body.addEventListener("mousemove", this.moveHover);
		document.body.addEventListener("mouseup", this.endMove);

		this.moveHover(e);
	};

	MoveRows.prototype.setStartPosition = function (e, row) {
		var pageX = this.touchMove ? e.touches[0].pageX : e.pageX,
		    pageY = this.touchMove ? e.touches[0].pageY : e.pageY,
		    element,
		    position;

		element = row.getElement();
		if (this.connection) {
			position = element.getBoundingClientRect();

			this.startX = position.left - pageX + window.pageXOffset;
			this.startY = position.top - pageY + window.pageYOffset;
		} else {
			this.startY = pageY - element.getBoundingClientRect().top;
		}
	};

	MoveRows.prototype.endMove = function (e) {
		if (!e || e.which === 1 || this.touchMove) {
			this._unbindMouseMove();

			if (!this.connection) {
				this.placeholderElement.parentNode.insertBefore(this.moving.getElement(), this.placeholderElement.nextSibling);
				this.placeholderElement.parentNode.removeChild(this.placeholderElement);
			}

			this.hoverElement.parentNode.removeChild(this.hoverElement);

			this.table.element.classList.remove("tabulator-block-select");

			if (this.toRow) {
				this.table.rowManager.moveRow(this.moving, this.toRow, this.toRowAfter);
			}

			this.moving = false;
			this.toRow = false;
			this.toRowAfter = false;

			document.body.removeEventListener("mousemove", this.moveHover);
			document.body.removeEventListener("mouseup", this.endMove);

			if (this.connection) {
				this.table.element.classList.remove("tabulator-movingrow-sending");
				this.disconnectFromTables();
			}
		}
	};

	MoveRows.prototype.moveRow = function (row, after) {
		this.toRow = row;
		this.toRowAfter = after;
	};

	MoveRows.prototype.moveHover = function (e) {
		if (this.connection) {
			this.moveHoverConnections.call(this, e);
		} else {
			this.moveHoverTable.call(this, e);
		}
	};

	MoveRows.prototype.moveHoverTable = function (e) {
		var rowHolder = this.table.rowManager.getElement(),
		    scrollTop = rowHolder.scrollTop,
		    yPos = (this.touchMove ? e.touches[0].pageY : e.pageY) - rowHolder.getBoundingClientRect().top + scrollTop,
		    scrollPos;

		this.hoverElement.style.top = yPos - this.startY + "px";
	};

	MoveRows.prototype.moveHoverConnections = function (e) {
		this.hoverElement.style.left = this.startX + (this.touchMove ? e.touches[0].pageX : e.pageX) + "px";
		this.hoverElement.style.top = this.startY + (this.touchMove ? e.touches[0].pageY : e.pageY) + "px";
	};

	//establish connection with other tables
	MoveRows.prototype.connectToTables = function (row) {
		var self = this,
		    connections = this.table.modules.comms.getConnections(this.connection);

		this.table.options.movableRowsSendingStart.call(this.table, connections);

		this.table.modules.comms.send(this.connection, "moveRow", "connect", {
			row: row
		});
	};

	//disconnect from other tables
	MoveRows.prototype.disconnectFromTables = function () {
		var self = this,
		    connections = this.table.modules.comms.getConnections(this.connection);

		this.table.options.movableRowsSendingStop.call(this.table, connections);

		this.table.modules.comms.send(this.connection, "moveRow", "disconnect");
	};

	//accept incomming connection
	MoveRows.prototype.connect = function (table, row) {
		var self = this;
		if (!this.connectedTable) {
			this.connectedTable = table;
			this.connectedRow = row;

			this.table.element.classList.add("tabulator-movingrow-receiving");

			self.table.rowManager.getDisplayRows().forEach(function (row) {
				if (row.type === "row" && row.modules.moveRow && row.modules.moveRow.mouseup) {
					row.getElement().addEventListener("mouseup", row.modules.moveRow.mouseup);
				}
			});

			self.tableRowDropEvent = self.tableRowDrop.bind(self);

			self.table.element.addEventListener("mouseup", self.tableRowDropEvent);

			this.table.options.movableRowsReceivingStart.call(this.table, row, table);

			return true;
		} else {
			console.warn("Move Row Error - Table cannot accept connection, already connected to table:", this.connectedTable);
			return false;
		}
	};

	//close incomming connection
	MoveRows.prototype.disconnect = function (table) {
		var self = this;
		if (table === this.connectedTable) {
			this.connectedTable = false;
			this.connectedRow = false;

			this.table.element.classList.remove("tabulator-movingrow-receiving");

			self.table.rowManager.getDisplayRows().forEach(function (row) {
				if (row.type === "row" && row.modules.moveRow && row.modules.moveRow.mouseup) {
					row.getElement().removeEventListener("mouseup", row.modules.moveRow.mouseup);
				}
			});

			self.table.element.removeEventListener("mouseup", self.tableRowDropEvent);

			this.table.options.movableRowsReceivingStop.call(this.table, table);
		} else {
			console.warn("Move Row Error - trying to disconnect from non connected table");
		}
	};

	MoveRows.prototype.dropComplete = function (table, row, success) {
		var sender = false;

		if (success) {

			switch (_typeof(this.table.options.movableRowsSender)) {
				case "string":
					sender = this.senders[this.table.options.movableRowsSender];
					break;

				case "function":
					sender = this.table.options.movableRowsSender;
					break;
			}

			if (sender) {
				sender.call(this, this.moving.getComponent(), row ? row.getComponent() : undefined, table);
			} else {
				if (this.table.options.movableRowsSender) {
					console.warn("Mover Row Error - no matching sender found:", this.table.options.movableRowsSender);
				}
			}

			this.table.options.movableRowsSent.call(this.table, this.moving.getComponent(), row ? row.getComponent() : undefined, table);
		} else {
			this.table.options.movableRowsSentFailed.call(this.table, this.moving.getComponent(), row ? row.getComponent() : undefined, table);
		}

		this.endMove();
	};

	MoveRows.prototype.tableRowDrop = function (e, row) {
		var receiver = false,
		    success = false;

		e.stopImmediatePropagation();

		switch (_typeof(this.table.options.movableRowsReceiver)) {
			case "string":
				receiver = this.receivers[this.table.options.movableRowsReceiver];
				break;

			case "function":
				receiver = this.table.options.movableRowsReceiver;
				break;
		}

		if (receiver) {
			success = receiver.call(this, this.connectedRow.getComponent(), row ? row.getComponent() : undefined, this.connectedTable);
		} else {
			console.warn("Mover Row Error - no matching receiver found:", this.table.options.movableRowsReceiver);
		}

		if (success) {
			this.table.options.movableRowsReceived.call(this.table, this.connectedRow.getComponent(), row ? row.getComponent() : undefined, this.connectedTable);
		} else {
			this.table.options.movableRowsReceivedFailed.call(this.table, this.connectedRow.getComponent(), row ? row.getComponent() : undefined, this.connectedTable);
		}

		this.table.modules.comms.send(this.connectedTable, "moveRow", "dropcomplete", {
			row: row,
			success: success
		});
	};

	MoveRows.prototype.receivers = {
		insert: function insert(fromRow, toRow, fromTable) {
			this.table.addRow(fromRow.getData(), undefined, toRow);
			return true;
		},

		add: function add(fromRow, toRow, fromTable) {
			this.table.addRow(fromRow.getData());
			return true;
		},

		update: function update(fromRow, toRow, fromTable) {
			if (toRow) {
				toRow.update(fromRow.getData());
				return true;
			}

			return false;
		},

		replace: function replace(fromRow, toRow, fromTable) {
			if (toRow) {
				this.table.addRow(fromRow.getData(), undefined, toRow);
				toRow.delete();
				return true;
			}

			return false;
		}
	};

	MoveRows.prototype.senders = {
		delete: function _delete(fromRow, toRow, toTable) {
			fromRow.delete();
		}
	};

	MoveRows.prototype.commsReceived = function (table, action, data) {
		switch (action) {
			case "connect":
				return this.connect(table, data.row);
				break;

			case "disconnect":
				return this.disconnect(table);
				break;

			case "dropcomplete":
				return this.dropComplete(table, data.row, data.success);
				break;
		}
	};

	Tabulator.prototype.registerModule("moveRow", MoveRows);
	var Mutator = function Mutator(table) {
		this.table = table; //hold Tabulator object
		this.allowedTypes = ["", "data", "edit", "clipboard"]; //list of muatation types
		this.enabled = true;
	};

	//initialize column mutator
	Mutator.prototype.initializeColumn = function (column) {
		var self = this,
		    match = false,
		    config = {};

		this.allowedTypes.forEach(function (type) {
			var key = "mutator" + (type.charAt(0).toUpperCase() + type.slice(1)),
			    mutator;

			if (column.definition[key]) {
				mutator = self.lookupMutator(column.definition[key]);

				if (mutator) {
					match = true;

					config[key] = {
						mutator: mutator,
						params: column.definition[key + "Params"] || {}
					};
				}
			}
		});

		if (match) {
			column.modules.mutate = config;
		}
	};

	Mutator.prototype.lookupMutator = function (value) {
		var mutator = false;

		//set column mutator
		switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
			case "string":
				if (this.mutators[value]) {
					mutator = this.mutators[value];
				} else {
					console.warn("Mutator Error - No such mutator found, ignoring: ", value);
				}
				break;

			case "function":
				mutator = value;
				break;
		}

		return mutator;
	};

	//apply mutator to row
	Mutator.prototype.transformRow = function (data, type, updatedData) {
		var self = this,
		    key = "mutator" + (type.charAt(0).toUpperCase() + type.slice(1)),
		    value;

		if (this.enabled) {

			self.table.columnManager.traverse(function (column) {
				var mutator, params, component;

				if (column.modules.mutate) {
					mutator = column.modules.mutate[key] || column.modules.mutate.mutator || false;

					if (mutator) {
						value = column.getFieldValue(typeof updatedData !== "undefined" ? updatedData : data);

						if (type == "data" || typeof value !== "undefined") {
							component = column.getComponent();
							params = typeof mutator.params === "function" ? mutator.params(value, data, type, component) : mutator.params;
							column.setFieldValue(data, mutator.mutator(value, data, type, params, component));
						}
					}
				}
			});
		}

		return data;
	};

	//apply mutator to new cell value
	Mutator.prototype.transformCell = function (cell, value) {
		var mutator = cell.column.modules.mutate.mutatorEdit || cell.column.modules.mutate.mutator || false,
		    tempData = {};

		if (mutator) {
			tempData = Object.assign(tempData, cell.row.getData());
			cell.column.setFieldValue(tempData, value);
			return mutator.mutator(value, tempData, "edit", mutator.params, cell.getComponent());
		} else {
			return value;
		}
	};

	Mutator.prototype.enable = function () {
		this.enabled = true;
	};

	Mutator.prototype.disable = function () {
		this.enabled = false;
	};

	//default mutators
	Mutator.prototype.mutators = {};

	Tabulator.prototype.registerModule("mutator", Mutator);
	var Page = function Page(table) {

		this.table = table; //hold Tabulator object

		this.mode = "local";
		this.progressiveLoad = false;

		this.size = 0;
		this.page = 1;
		this.count = 5;
		this.max = 1;

		this.displayIndex = 0; //index in display pipeline

		this.initialLoad = true;

		this.pageSizes = [];

		this.createElements();
	};

	Page.prototype.createElements = function () {

		var button;

		this.element = document.createElement("span");
		this.element.classList.add("tabulator-paginator");

		this.pagesElement = document.createElement("span");
		this.pagesElement.classList.add("tabulator-pages");

		button = document.createElement("button");
		button.classList.add("tabulator-page");
		button.setAttribute("type", "button");
		button.setAttribute("role", "button");
		button.setAttribute("aria-label", "");
		button.setAttribute("title", "");

		this.firstBut = button.cloneNode(true);
		this.firstBut.setAttribute("data-page", "first");

		this.prevBut = button.cloneNode(true);
		this.prevBut.setAttribute("data-page", "prev");

		this.nextBut = button.cloneNode(true);
		this.nextBut.setAttribute("data-page", "next");

		this.lastBut = button.cloneNode(true);
		this.lastBut.setAttribute("data-page", "last");

		if (this.table.options.paginationSizeSelector) {
			this.pageSizeSelect = document.createElement("select");
			this.pageSizeSelect.classList.add("tabulator-page-size");
		}
	};

	Page.prototype.generatePageSizeSelectList = function () {
		var _this62 = this;

		var pageSizes = [];

		if (this.pageSizeSelect) {

			if (Array.isArray(this.table.options.paginationSizeSelector)) {
				pageSizes = this.table.options.paginationSizeSelector;
				this.pageSizes = pageSizes;

				if (this.pageSizes.indexOf(this.size) == -1) {
					pageSizes.unshift(this.size);
				}
			} else {

				if (this.pageSizes.indexOf(this.size) == -1) {
					pageSizes = [];

					for (var i = 1; i < 5; i++) {
						pageSizes.push(this.size * i);
					}

					this.pageSizes = pageSizes;
				} else {
					pageSizes = this.pageSizes;
				}
			}

			while (this.pageSizeSelect.firstChild) {
				this.pageSizeSelect.removeChild(this.pageSizeSelect.firstChild);
			}pageSizes.forEach(function (item) {
				var itemEl = document.createElement("option");
				itemEl.value = item;
				itemEl.innerHTML = item;

				_this62.pageSizeSelect.appendChild(itemEl);
			});

			this.pageSizeSelect.value = this.size;
		}
	};

	//setup pageination
	Page.prototype.initialize = function (hidden) {
		var self = this,
		    pageSelectLabel;

		//update param names
		for (var key in self.table.options.paginationDataSent) {
			self.paginationDataSentNames[key] = self.table.options.paginationDataSent[key];
		}

		for (var _key2 in self.table.options.paginationDataReceived) {
			self.paginationDataReceivedNames[_key2] = self.table.options.paginationDataReceived[_key2];
		}

		//build pagination element

		//bind localizations
		self.table.modules.localize.bind("pagination|first", function (value) {
			self.firstBut.innerHTML = value;
		});

		self.table.modules.localize.bind("pagination|first_title", function (value) {
			self.firstBut.setAttribute("aria-label", value);
			self.firstBut.setAttribute("title", value);
		});

		self.table.modules.localize.bind("pagination|prev", function (value) {
			self.prevBut.innerHTML = value;
		});

		self.table.modules.localize.bind("pagination|prev_title", function (value) {
			self.prevBut.setAttribute("aria-label", value);
			self.prevBut.setAttribute("title", value);
		});

		self.table.modules.localize.bind("pagination|next", function (value) {
			self.nextBut.innerHTML = value;
		});

		self.table.modules.localize.bind("pagination|next_title", function (value) {
			self.nextBut.setAttribute("aria-label", value);
			self.nextBut.setAttribute("title", value);
		});

		self.table.modules.localize.bind("pagination|last", function (value) {
			self.lastBut.innerHTML = value;
		});

		self.table.modules.localize.bind("pagination|last_title", function (value) {
			self.lastBut.setAttribute("aria-label", value);
			self.lastBut.setAttribute("title", value);
		});

		//click bindings
		self.firstBut.addEventListener("click", function () {
			self.setPage(1);
		});

		self.prevBut.addEventListener("click", function () {
			self.previousPage();
		});

		self.nextBut.addEventListener("click", function () {
			self.nextPage().then(function () {}).catch(function () {});
		});

		self.lastBut.addEventListener("click", function () {
			self.setPage(self.max);
		});

		if (self.table.options.paginationElement) {
			self.element = self.table.options.paginationElement;
		}

		if (this.pageSizeSelect) {
			pageSelectLabel = document.createElement("label");

			self.table.modules.localize.bind("pagination|page_size", function (value) {
				self.pageSizeSelect.setAttribute("aria-label", value);
				self.pageSizeSelect.setAttribute("title", value);
				pageSelectLabel.innerHTML = value;
			});

			self.element.appendChild(pageSelectLabel);
			self.element.appendChild(self.pageSizeSelect);

			self.pageSizeSelect.addEventListener("change", function (e) {
				self.setPageSize(self.pageSizeSelect.value);
				self.setPage(1).then(function () {}).catch(function () {});
			});
		}

		//append to DOM
		self.element.appendChild(self.firstBut);
		self.element.appendChild(self.prevBut);
		self.element.appendChild(self.pagesElement);
		self.element.appendChild(self.nextBut);
		self.element.appendChild(self.lastBut);

		if (!self.table.options.paginationElement && !hidden) {
			self.table.footerManager.append(self.element, self);
		}

		//set default values
		self.mode = self.table.options.pagination;

		self.size = self.table.options.paginationSize || Math.floor(self.table.rowManager.getElement().clientHeight / 24);
		// self.page = self.table.options.paginationInitialPage || 1;
		self.count = self.table.options.paginationButtonCount;

		self.generatePageSizeSelectList();
	};

	Page.prototype.initializeProgressive = function (mode) {
		this.initialize(true);
		this.mode = "progressive_" + mode;
		this.progressiveLoad = true;
	};

	Page.prototype.setDisplayIndex = function (index) {
		this.displayIndex = index;
	};

	Page.prototype.getDisplayIndex = function () {
		return this.displayIndex;
	};

	//calculate maximum page from number of rows
	Page.prototype.setMaxRows = function (rowCount) {
		if (!rowCount) {
			this.max = 1;
		} else {
			this.max = Math.ceil(rowCount / this.size);
		}

		if (this.page > this.max) {
			this.page = this.max;
		}
	};

	//reset to first page without triggering action
	Page.prototype.reset = function (force, columnsChanged) {
		if (this.mode == "local" || force) {
			this.page = 1;
		}

		if (columnsChanged) {
			this.initialLoad = true;
		}

		return true;
	};

	//set the maxmum page
	Page.prototype.setMaxPage = function (max) {

		max = parseInt(max);

		this.max = max || 1;

		if (this.page > this.max) {
			this.page = this.max;
			this.trigger();
		}
	};

	//set current page number
	Page.prototype.setPage = function (page) {
		var _this63 = this;

		var self = this;

		return new Promise(function (resolve, reject) {

			page = parseInt(page);

			if (page > 0 && page <= _this63.max) {
				_this63.page = page;
				_this63.trigger().then(function () {
					resolve();
				}).catch(function () {
					reject();
				});

				if (self.table.options.persistence && self.table.modExists("persistence", true) && self.table.modules.persistence.config.page) {
					self.table.modules.persistence.save("page");
				}
			} else {
				console.warn("Pagination Error - Requested page is out of range of 1 - " + _this63.max + ":", page);
				reject();
			}
		});
	};

	Page.prototype.setPageToRow = function (row) {
		var _this64 = this;

		return new Promise(function (resolve, reject) {

			var rows = _this64.table.rowManager.getDisplayRows(_this64.displayIndex - 1);
			var index = rows.indexOf(row);

			if (index > -1) {
				var page = Math.ceil((index + 1) / _this64.size);

				_this64.setPage(page).then(function () {
					resolve();
				}).catch(function () {
					reject();
				});
			} else {
				console.warn("Pagination Error - Requested row is not visible");
				reject();
			}
		});
	};

	Page.prototype.setPageSize = function (size) {
		size = parseInt(size);

		if (size > 0) {
			this.size = size;
		}

		if (this.pageSizeSelect) {
			// this.pageSizeSelect.value = size;
			this.generatePageSizeSelectList();
		}

		if (this.table.options.persistence && this.table.modExists("persistence", true) && this.table.modules.persistence.config.page) {
			this.table.modules.persistence.save("page");
		}
	};

	//setup the pagination buttons
	Page.prototype._setPageButtons = function () {
		var self = this;

		var leftSize = Math.floor((this.count - 1) / 2);
		var rightSize = Math.ceil((this.count - 1) / 2);
		var min = this.max - this.page + leftSize + 1 < this.count ? this.max - this.count + 1 : Math.max(this.page - leftSize, 1);
		var max = this.page <= rightSize ? Math.min(this.count, this.max) : Math.min(this.page + rightSize, this.max);

		while (self.pagesElement.firstChild) {
			self.pagesElement.removeChild(self.pagesElement.firstChild);
		}if (self.page == 1) {
			self.firstBut.disabled = true;
			self.prevBut.disabled = true;
		} else {
			self.firstBut.disabled = false;
			self.prevBut.disabled = false;
		}

		if (self.page == self.max) {
			self.lastBut.disabled = true;
			self.nextBut.disabled = true;
		} else {
			self.lastBut.disabled = false;
			self.nextBut.disabled = false;
		}

		for (var i = min; i <= max; i++) {
			if (i > 0 && i <= self.max) {
				self.pagesElement.appendChild(self._generatePageButton(i));
			}
		}

		this.footerRedraw();
	};

	Page.prototype._generatePageButton = function (page) {
		var self = this,
		    button = document.createElement("button");

		button.classList.add("tabulator-page");
		if (page == self.page) {
			button.classList.add("active");
		}

		button.setAttribute("type", "button");
		button.setAttribute("role", "button");
		button.setAttribute("aria-label", "Show Page " + page);
		button.setAttribute("title", "Show Page " + page);
		button.setAttribute("data-page", page);
		button.textContent = page;

		button.addEventListener("click", function (e) {
			self.setPage(page);
		});

		return button;
	};

	//previous page
	Page.prototype.previousPage = function () {
		var _this65 = this;

		return new Promise(function (resolve, reject) {
			if (_this65.page > 1) {
				_this65.page--;
				_this65.trigger().then(function () {
					resolve();
				}).catch(function () {
					reject();
				});

				if (_this65.table.options.persistence && _this65.table.modExists("persistence", true) && _this65.table.modules.persistence.config.page) {
					_this65.table.modules.persistence.save("page");
				}
			} else {
				console.warn("Pagination Error - Previous page would be less than page 1:", 0);
				reject();
			}
		});
	};

	//next page
	Page.prototype.nextPage = function () {
		var _this66 = this;

		return new Promise(function (resolve, reject) {
			if (_this66.page < _this66.max) {
				_this66.page++;
				_this66.trigger().then(function () {
					resolve();
				}).catch(function () {
					reject();
				});

				if (_this66.table.options.persistence && _this66.table.modExists("persistence", true) && _this66.table.modules.persistence.config.page) {
					_this66.table.modules.persistence.save("page");
				}
			} else {
				if (!_this66.progressiveLoad) {
					console.warn("Pagination Error - Next page would be greater than maximum page of " + _this66.max + ":", _this66.max + 1);
				}
				reject();
			}
		});
	};

	//return current page number
	Page.prototype.getPage = function () {
		return this.page;
	};

	//return max page number
	Page.prototype.getPageMax = function () {
		return this.max;
	};

	Page.prototype.getPageSize = function (size) {
		return this.size;
	};

	Page.prototype.getMode = function () {
		return this.mode;
	};

	//return appropriate rows for current page
	Page.prototype.getRows = function (data) {
		var output, start, end;

		if (this.mode == "local") {
			output = [];
			start = this.size * (this.page - 1);
			end = start + parseInt(this.size);

			this._setPageButtons();

			for (var i = start; i < end; i++) {
				if (data[i]) {
					output.push(data[i]);
				}
			}

			return output;
		} else {

			this._setPageButtons();

			return data.slice(0);
		}
	};

	Page.prototype.trigger = function () {
		var _this67 = this;

		var left;

		return new Promise(function (resolve, reject) {

			switch (_this67.mode) {
				case "local":
					left = _this67.table.rowManager.scrollLeft;

					_this67.table.rowManager.refreshActiveData("page");
					_this67.table.rowManager.scrollHorizontal(left);

					_this67.table.options.pageLoaded.call(_this67.table, _this67.getPage());
					resolve();
					break;

				case "remote":
				case "progressive_load":
				case "progressive_scroll":
					_this67.table.modules.ajax.blockActiveRequest();
					_this67._getRemotePage().then(function () {
						resolve();
					}).catch(function () {
						reject();
					});
					break;

				default:
					console.warn("Pagination Error - no such pagination mode:", _this67.mode);
					reject();
			}
		});
	};

	Page.prototype._getRemotePage = function () {
		var _this68 = this;

		var self = this,
		    oldParams,
		    pageParams;

		return new Promise(function (resolve, reject) {

			if (!self.table.modExists("ajax", true)) {
				reject();
			}

			//record old params and restore after request has been made
			oldParams = Tabulator.prototype.helpers.deepClone(self.table.modules.ajax.getParams() || {});
			pageParams = self.table.modules.ajax.getParams();

			//configure request params
			pageParams[_this68.paginationDataSentNames.page] = self.page;

			//set page size if defined
			if (_this68.size) {
				pageParams[_this68.paginationDataSentNames.size] = _this68.size;
			}

			//set sort data if defined
			if (_this68.table.options.ajaxSorting && _this68.table.modExists("sort")) {
				var sorters = self.table.modules.sort.getSort();

				sorters.forEach(function (item) {
					delete item.column;
				});

				pageParams[_this68.paginationDataSentNames.sorters] = sorters;
			}

			//set filter data if defined
			if (_this68.table.options.ajaxFiltering && _this68.table.modExists("filter")) {
				var filters = self.table.modules.filter.getFilters(true, true);
				pageParams[_this68.paginationDataSentNames.filters] = filters;
			}

			self.table.modules.ajax.setParams(pageParams);

			self.table.modules.ajax.sendRequest(_this68.progressiveLoad).then(function (data) {
				self._parseRemoteData(data);
				resolve();
			}).catch(function (e) {
				reject();
			});

			self.table.modules.ajax.setParams(oldParams);
		});
	};

	Page.prototype._parseRemoteData = function (data) {
		var self = this,
		    left,
		    data,
		    margin;

		if (typeof data[this.paginationDataReceivedNames.last_page] === "undefined") {
			console.warn("Remote Pagination Error - Server response missing '" + this.paginationDataReceivedNames.last_page + "' property");
		}

		if (data[this.paginationDataReceivedNames.data]) {
			this.max = parseInt(data[this.paginationDataReceivedNames.last_page]) || 1;

			if (this.progressiveLoad) {
				switch (this.mode) {
					case "progressive_load":

						if (this.page == 1) {
							this.table.rowManager.setData(data[this.paginationDataReceivedNames.data], false, this.initialLoad && this.page == 1);
						} else {
							this.table.rowManager.addRows(data[this.paginationDataReceivedNames.data]);
						}

						if (this.page < this.max) {
							setTimeout(function () {
								self.nextPage().then(function () {}).catch(function () {});
							}, self.table.options.ajaxProgressiveLoadDelay);
						}
						break;

					case "progressive_scroll":
						data = this.table.rowManager.getData().concat(data[this.paginationDataReceivedNames.data]);

						this.table.rowManager.setData(data, true, this.initialLoad && this.page == 1);

						margin = this.table.options.ajaxProgressiveLoadScrollMargin || this.table.rowManager.element.clientHeight * 2;

						if (self.table.rowManager.element.scrollHeight <= self.table.rowManager.element.clientHeight + margin) {
							self.nextPage().then(function () {}).catch(function () {});
						}
						break;
				}
			} else {
				left = this.table.rowManager.scrollLeft;

				this.table.rowManager.setData(data[this.paginationDataReceivedNames.data], false, this.initialLoad && this.page == 1);

				this.table.rowManager.scrollHorizontal(left);

				this.table.columnManager.scrollHorizontal(left);

				this.table.options.pageLoaded.call(this.table, this.getPage());
			}

			this.initialLoad = false;
		} else {
			console.warn("Remote Pagination Error - Server response missing '" + this.paginationDataReceivedNames.data + "' property");
		}
	};

	//handle the footer element being redrawn
	Page.prototype.footerRedraw = function () {
		var footer = this.table.footerManager.element;

		if (Math.ceil(footer.clientWidth) - footer.scrollWidth < 0) {
			this.pagesElement.style.display = 'none';
		} else {
			this.pagesElement.style.display = '';

			if (Math.ceil(footer.clientWidth) - footer.scrollWidth < 0) {
				this.pagesElement.style.display = 'none';
			}
		}
	};

	//set the paramter names for pagination requests
	Page.prototype.paginationDataSentNames = {
		"page": "page",
		"size": "size",
		"sorters": "sorters",
		// "sort_dir":"sort_dir",
		"filters": "filters"
		// "filter_value":"filter_value",
		// "filter_type":"filter_type",
	};

	//set the property names for pagination responses
	Page.prototype.paginationDataReceivedNames = {
		"current_page": "current_page",
		"last_page": "last_page",
		"data": "data"
	};

	Tabulator.prototype.registerModule("page", Page);

	var Persistence = function Persistence(table) {
		this.table = table; //hold Tabulator object
		this.mode = "";
		this.id = "";
		// this.persistProps = ["field", "width", "visible"];
		this.defWatcherBlock = false;
		this.config = {};
		this.readFunc = false;
		this.writeFunc = false;
	};

	// Test for whether localStorage is available for use.
	Persistence.prototype.localStorageTest = function () {
		var testKey = "_tabulator_test";

		try {
			window.localStorage.setItem(testKey, testKey);
			window.localStorage.removeItem(testKey);
			return true;
		} catch (e) {
			return false;
		}
	};

	//setup parameters
	Persistence.prototype.initialize = function () {
		//determine persistent layout storage type

		var mode = this.table.options.persistenceMode,
		    id = this.table.options.persistenceID,
		    retreivedData;

		this.mode = mode !== true ? mode : this.localStorageTest() ? "local" : "cookie";

		if (this.table.options.persistenceReaderFunc) {
			if (typeof this.table.options.persistenceReaderFunc === "function") {
				this.readFunc = this.table.options.persistenceReaderFunc;
			} else {
				if (this.readers[this.table.options.persistenceReaderFunc]) {
					this.readFunc = this.readers[this.table.options.persistenceReaderFunc];
				} else {
					console.warn("Persistence Read Error - invalid reader set", this.table.options.persistenceReaderFunc);
				}
			}
		} else {
			if (this.readers[this.mode]) {
				this.readFunc = this.readers[this.mode];
			} else {
				console.warn("Persistence Read Error - invalid reader set", this.mode);
			}
		}

		if (this.table.options.persistenceWriterFunc) {
			if (typeof this.table.options.persistenceWriterFunc === "function") {
				this.writeFunc = this.table.options.persistenceWriterFunc;
			} else {
				if (this.readers[this.table.options.persistenceWriterFunc]) {
					this.writeFunc = this.readers[this.table.options.persistenceWriterFunc];
				} else {
					console.warn("Persistence Write Error - invalid reader set", this.table.options.persistenceWriterFunc);
				}
			}
		} else {
			if (this.writers[this.mode]) {
				this.writeFunc = this.writers[this.mode];
			} else {
				console.warn("Persistence Write Error - invalid writer set", this.mode);
			}
		}

		//set storage tag
		this.id = "tabulator-" + (id || this.table.element.getAttribute("id") || "");

		this.config = {
			sort: this.table.options.persistence === true || this.table.options.persistence.sort,
			filter: this.table.options.persistence === true || this.table.options.persistence.filter,
			group: this.table.options.persistence === true || this.table.options.persistence.group,
			page: this.table.options.persistence === true || this.table.options.persistence.page,
			columns: this.table.options.persistence === true ? ["title", "width", "visible"] : this.table.options.persistence.columns
		};

		//load pagination data if needed
		if (this.config.page) {
			retreivedData = this.retreiveData("page");

			if (retreivedData) {
				if (typeof retreivedData.paginationSize !== "undefined" && (this.config.page === true || this.config.page.size)) {
					this.table.options.paginationSize = retreivedData.paginationSize;
				}

				if (typeof retreivedData.paginationInitialPage !== "undefined" && (this.config.page === true || this.config.page.page)) {
					this.table.options.paginationInitialPage = retreivedData.paginationInitialPage;
				}
			}
		}

		//load group data if needed
		if (this.config.group) {
			retreivedData = this.retreiveData("group");

			if (retreivedData) {
				if (typeof retreivedData.groupBy !== "undefined" && (this.config.group === true || this.config.group.groupBy)) {
					this.table.options.groupBy = retreivedData.groupBy;
				}
				if (typeof retreivedData.groupStartOpen !== "undefined" && (this.config.group === true || this.config.group.groupStartOpen)) {
					this.table.options.groupStartOpen = retreivedData.groupStartOpen;
				}
				if (typeof retreivedData.groupHeader !== "undefined" && (this.config.group === true || this.config.group.groupHeader)) {
					this.table.options.groupHeader = retreivedData.groupHeader;
				}
			}
		}
	};

	Persistence.prototype.initializeColumn = function (column) {
		var self = this,
		    def,
		    keys;

		if (this.config.columns) {
			this.defWatcherBlock = true;

			def = column.getDefinition();

			keys = this.config.columns === true ? Object.keys(def) : this.config.columns;

			keys.forEach(function (key) {
				var props = Object.getOwnPropertyDescriptor(def, key);
				var value = def[key];
				if (props) {
					Object.defineProperty(def, key, {
						set: function set(newValue) {
							value = newValue;

							if (!self.defWatcherBlock) {
								self.save("columns");
							}

							if (props.set) {
								props.set(newValue);
							}
						},
						get: function get() {
							if (props.get) {
								props.get();
							}
							return value;
						}
					});
				}
			});

			this.defWatcherBlock = false;
		}
	};

	//load saved definitions
	Persistence.prototype.load = function (type, current) {
		var data = this.retreiveData(type);

		if (current) {
			data = data ? this.mergeDefinition(current, data) : current;
		}

		return data;
	};

	//retreive data from memory
	Persistence.prototype.retreiveData = function (type) {
		return this.readFunc ? this.readFunc(this.id, type) : false;
	};

	//merge old and new column definitions
	Persistence.prototype.mergeDefinition = function (oldCols, newCols) {
		var self = this,
		    output = [];

		// oldCols = oldCols || [];
		newCols = newCols || [];

		newCols.forEach(function (column, to) {

			var from = self._findColumn(oldCols, column),
			    keys;

			if (from) {

				if (self.config.columns === true || self.config.columns == undefined) {
					keys = Object.keys(from);
					keys.push("width");
				} else {
					keys = self.config.columns;
				}

				keys.forEach(function (key) {
					if (typeof column[key] !== "undefined") {
						from[key] = column[key];
					}
				});

				if (from.columns) {
					from.columns = self.mergeDefinition(from.columns, column.columns);
				}

				output.push(from);
			}
		});

		oldCols.forEach(function (column, i) {
			var from = self._findColumn(newCols, column);
			if (!from) {
				if (output.length > i) {
					output.splice(i, 0, column);
				} else {
					output.push(column);
				}
			}
		});

		return output;
	};

	//find matching columns
	Persistence.prototype._findColumn = function (columns, subject) {
		var type = subject.columns ? "group" : subject.field ? "field" : "object";

		return columns.find(function (col) {
			switch (type) {
				case "group":
					return col.title === subject.title && col.columns.length === subject.columns.length;
					break;

				case "field":
					return col.field === subject.field;
					break;

				case "object":
					return col === subject;
					break;
			}
		});
	};

	//save data
	Persistence.prototype.save = function (type) {
		var data = {};

		switch (type) {
			case "columns":
				data = this.parseColumns(this.table.columnManager.getColumns());
				break;

			case "filter":
				data = this.table.modules.filter.getFilters();
				break;

			case "sort":
				data = this.validateSorters(this.table.modules.sort.getSort());
				break;

			case "group":
				data = this.getGroupConfig();
				break;

			case "page":
				data = this.getPageConfig();
				break;
		}

		if (this.writeFunc) {
			this.writeFunc(this.id, type, data);
		}
	};

	//ensure sorters contain no function data
	Persistence.prototype.validateSorters = function (data) {
		data.forEach(function (item) {
			item.column = item.field;
			delete item.field;
		});

		return data;
	};

	Persistence.prototype.getGroupConfig = function () {
		if (this.config.group) {
			if (this.config.group === true || this.config.group.groupBy) {
				data.groupBy = this.table.options.groupBy;
			}

			if (this.config.group === true || this.config.group.groupStartOpen) {
				data.groupStartOpen = this.table.options.groupStartOpen;
			}

			if (this.config.group === true || this.config.group.groupHeader) {
				data.groupHeader = this.table.options.groupHeader;
			}
		}

		return data;
	};

	Persistence.prototype.getPageConfig = function () {
		var data = {};

		if (this.config.page) {
			if (this.config.page === true || this.config.page.size) {
				data.paginationSize = this.table.modules.page.getPageSize();
			}

			if (this.config.page === true || this.config.page.page) {
				data.paginationInitialPage = this.table.modules.page.getPage();
			}
		}

		return data;
	};

	//parse columns for data to store
	Persistence.prototype.parseColumns = function (columns) {
		var self = this,
		    definitions = [];

		columns.forEach(function (column) {
			var defStore = {},
			    colDef = column.getDefinition(),
			    keys;

			if (column.isGroup) {
				defStore.title = colDef.title;
				defStore.columns = self.parseColumns(column.getColumns());
			} else {
				defStore.field = column.getField();

				if (self.config.columns === true || self.config.columns == undefined) {
					keys = Object.keys(colDef);
					keys.push("width");
				} else {
					keys = self.config.columns;
				}

				keys.forEach(function (key) {

					switch (key) {
						case "width":
							defStore.width = column.getWidth();
							break;
						case "visible":
							defStore.visible = column.visible;
							break;

						default:
							defStore[key] = colDef[key];
					}
				});
			}

			definitions.push(defStore);
		});

		return definitions;
	};

	// read peristence information from storage
	Persistence.prototype.readers = {
		local: function local(id, type) {
			var data = localStorage.getItem(id + "-" + type);

			return data ? JSON.parse(data) : false;
		},
		cookie: function cookie(id, type) {
			var cookie = document.cookie,
			    key = id + "-" + type,
			    cookiePos = cookie.indexOf(key + "="),
			    end,
			    data;

			//if cookie exists, decode and load column data into tabulator
			if (cookiePos > -1) {
				cookie = cookie.substr(cookiePos);

				end = cookie.indexOf(";");

				if (end > -1) {
					cookie = cookie.substr(0, end);
				}

				data = cookie.replace(key + "=", "");
			}

			return data ? JSON.parse(data) : false;
		}
	};

	//write persistence information to storage
	Persistence.prototype.writers = {
		local: function local(id, type, data) {
			localStorage.setItem(id + "-" + type, JSON.stringify(data));
		},
		cookie: function cookie(id, type, data) {
			var expireDate = new Date();

			expireDate.setDate(expireDate.getDate() + 10000);

			document.cookie = id + "-" + type + "=" + JSON.stringify(data) + "; expires=" + expireDate.toUTCString();
		}
	};

	Tabulator.prototype.registerModule("persistence", Persistence);

	var Print = function Print(table) {
		this.table = table; //hold Tabulator object
		this.element = false;
		this.manualBlock = false;
	};

	Print.prototype.initialize = function () {
		window.addEventListener("beforeprint", this.replaceTable.bind(this));
		window.addEventListener("afterprint", this.cleanup.bind(this));
	};

	Print.prototype.replaceTable = function () {
		if (!this.manualBlock) {
			this.element = document.createElement("div");
			this.element.classList.add("tabulator-print-table");

			this.element.appendChild(this.table.modules.export.genereateTable(this.table.options.printConfig, this.table.options.printStyled, this.table.options.printRowRange, "print"));

			this.table.element.style.display = "none";

			this.table.element.parentNode.insertBefore(this.element, this.table.element);
		}
	};

	Print.prototype.cleanup = function () {
		document.body.classList.remove("tabulator-print-fullscreen-hide");

		if (this.element && this.element.parentNode) {
			this.element.parentNode.removeChild(this.element);
			this.table.element.style.display = "";
		}
	};

	Print.prototype.printFullscreen = function (visible, style, config) {
		var scrollX = window.scrollX,
		    scrollY = window.scrollY,
		    headerEl = document.createElement("div"),
		    footerEl = document.createElement("div"),
		    tableEl = this.table.modules.export.genereateTable(typeof config != "undefined" ? config : this.table.options.printConfig, typeof style != "undefined" ? style : this.table.options.printStyled, visible, "print"),
		    headerContent,
		    footerContent;

		this.manualBlock = true;

		this.element = document.createElement("div");
		this.element.classList.add("tabulator-print-fullscreen");

		if (this.table.options.printHeader) {
			headerEl.classList.add("tabulator-print-header");

			headerContent = typeof this.table.options.printHeader == "function" ? this.table.options.printHeader.call(this.table) : this.table.options.printHeader;

			if (typeof headerContent == "string") {
				headerEl.innerHTML = headerContent;
			} else {
				headerEl.appendChild(headerContent);
			}

			this.element.appendChild(headerEl);
		}

		this.element.appendChild(tableEl);

		if (this.table.options.printFooter) {
			footerEl.classList.add("tabulator-print-footer");

			footerContent = typeof this.table.options.printFooter == "function" ? this.table.options.printFooter.call(this.table) : this.table.options.printFooter;

			if (typeof footerContent == "string") {
				footerEl.innerHTML = footerContent;
			} else {
				footerEl.appendChild(footerContent);
			}

			this.element.appendChild(footerEl);
		}

		document.body.classList.add("tabulator-print-fullscreen-hide");
		document.body.appendChild(this.element);

		if (this.table.options.printFormatter) {
			this.table.options.printFormatter(this.element, tableEl);
		}

		window.print();

		this.cleanup();

		window.scrollTo(scrollX, scrollY);

		this.manualBlock = false;
	};

	Tabulator.prototype.registerModule("print", Print);
	var ReactiveData = function ReactiveData(table) {
		this.table = table; //hold Tabulator object
		this.data = false;
		this.blocked = false; //block reactivity while performing update
		this.origFuncs = {}; // hold original data array functions to allow replacement after data is done with
		this.currentVersion = 0;
	};

	ReactiveData.prototype.watchData = function (data) {
		var self = this,
		    pushFunc,
		    version;

		this.currentVersion++;

		version = this.currentVersion;

		self.unwatchData();

		self.data = data;

		//override array push function
		self.origFuncs.push = data.push;

		Object.defineProperty(self.data, "push", {
			enumerable: false,
			configurable: true,
			value: function value() {
				var args = Array.from(arguments);

				if (!self.blocked && version === self.currentVersion) {
					args.forEach(function (arg) {
						self.table.rowManager.addRowActual(arg, false);
					});
				}

				return self.origFuncs.push.apply(data, arguments);
			}
		});

		//override array unshift function
		self.origFuncs.unshift = data.unshift;

		Object.defineProperty(self.data, "unshift", {
			enumerable: false,
			configurable: true,
			value: function value() {
				var args = Array.from(arguments);

				if (!self.blocked && version === self.currentVersion) {
					args.forEach(function (arg) {
						self.table.rowManager.addRowActual(arg, true);
					});
				}

				return self.origFuncs.unshift.apply(data, arguments);
			}
		});

		//override array shift function
		self.origFuncs.shift = data.shift;

		Object.defineProperty(self.data, "shift", {
			enumerable: false,
			configurable: true,
			value: function value() {
				var row;

				if (!self.blocked && version === self.currentVersion) {
					if (self.data.length) {
						row = self.table.rowManager.getRowFromDataObject(self.data[0]);

						if (row) {
							row.deleteActual();
						}
					}
				}

				return self.origFuncs.shift.call(data);
			}
		});

		//override array pop function
		self.origFuncs.pop = data.pop;

		Object.defineProperty(self.data, "pop", {
			enumerable: false,
			configurable: true,
			value: function value() {
				var row;
				if (!self.blocked && version === self.currentVersion) {
					if (self.data.length) {
						row = self.table.rowManager.getRowFromDataObject(self.data[self.data.length - 1]);

						if (row) {
							row.deleteActual();
						}
					}
				}
				return self.origFuncs.pop.call(data);
			}
		});

		//override array splice function
		self.origFuncs.splice = data.splice;

		Object.defineProperty(self.data, "splice", {
			enumerable: false,
			configurable: true,
			value: function value() {
				var args = Array.from(arguments),
				    start = args[0] < 0 ? data.length + args[0] : args[0],
				    end = args[1],
				    newRows = args[2] ? args.slice(2) : false,
				    startRow;

				if (!self.blocked && version === self.currentVersion) {

					//add new rows
					if (newRows) {
						startRow = data[start] ? self.table.rowManager.getRowFromDataObject(data[start]) : false;

						if (startRow) {
							newRows.forEach(function (rowData) {
								self.table.rowManager.addRowActual(rowData, true, startRow, true);
							});
						} else {
							newRows = newRows.slice().reverse();

							newRows.forEach(function (rowData) {
								self.table.rowManager.addRowActual(rowData, true, false, true);
							});
						}
					}

					//delete removed rows
					if (end !== 0) {
						var oldRows = data.slice(start, typeof args[1] === "undefined" ? args[1] : start + end);

						oldRows.forEach(function (rowData, i) {
							var row = self.table.rowManager.getRowFromDataObject(rowData);

							if (row) {
								row.deleteActual(i !== oldRows.length - 1);
							}
						});
					}

					if (newRows || end !== 0) {
						self.table.rowManager.reRenderInPosition();
					}
				}

				return self.origFuncs.splice.apply(data, arguments);
			}
		});
	};

	ReactiveData.prototype.unwatchData = function () {
		if (this.data !== false) {
			for (var key in this.origFuncs) {
				Object.defineProperty(this.data, key, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: this.origFuncs.key
				});
			}
		}
	};

	ReactiveData.prototype.watchRow = function (row) {
		var self = this,
		    data = row.getData();

		this.blocked = true;

		for (var key in data) {
			this.watchKey(row, data, key);
		}

		this.blocked = false;
	};

	ReactiveData.prototype.watchKey = function (row, data, key) {
		var self = this,
		    props = Object.getOwnPropertyDescriptor(data, key),
		    value = data[key],
		    version = this.currentVersion;

		Object.defineProperty(data, key, {
			set: function set(newValue) {
				value = newValue;
				if (!self.blocked && version === self.currentVersion) {
					var update = {};
					update[key] = newValue;
					row.updateData(update);
				}

				if (props.set) {
					props.set(newValue);
				}
			},
			get: function get() {

				if (props.get) {
					props.get();
				}

				return value;
			}
		});
	};

	ReactiveData.prototype.unwatchRow = function (row) {
		var data = row.getData();

		for (var key in data) {
			Object.defineProperty(data, key, {
				value: data[key]
			});
		}
	};

	ReactiveData.prototype.block = function () {
		this.blocked = true;
	};

	ReactiveData.prototype.unblock = function () {
		this.blocked = false;
	};

	Tabulator.prototype.registerModule("reactiveData", ReactiveData);

	var ResizeColumns = function ResizeColumns(table) {
		this.table = table; //hold Tabulator object
		this.startColumn = false;
		this.startX = false;
		this.startWidth = false;
		this.handle = null;
		this.prevHandle = null;
	};

	ResizeColumns.prototype.initializeColumn = function (type, column, element) {
		var self = this,
		    variableHeight = false,
		    mode = this.table.options.resizableColumns;

		//set column resize mode
		if (type === "header") {
			variableHeight = column.definition.formatter == "textarea" || column.definition.variableHeight;
			column.modules.resize = { variableHeight: variableHeight };
		}

		if (mode === true || mode == type) {

			var handle = document.createElement('div');
			handle.className = "tabulator-col-resize-handle";

			var prevHandle = document.createElement('div');
			prevHandle.className = "tabulator-col-resize-handle prev";

			handle.addEventListener("click", function (e) {
				e.stopPropagation();
			});

			var handleDown = function handleDown(e) {
				var nearestColumn = column.getLastColumn();

				if (nearestColumn && self._checkResizability(nearestColumn)) {
					self.startColumn = column;
					self._mouseDown(e, nearestColumn, handle);
				}
			};

			handle.addEventListener("mousedown", handleDown);
			handle.addEventListener("touchstart", handleDown, { passive: true });

			//reszie column on  double click
			handle.addEventListener("dblclick", function (e) {
				var col = column.getLastColumn();

				if (col && self._checkResizability(col)) {
					e.stopPropagation();
					col.reinitializeWidth(true);
				}
			});

			prevHandle.addEventListener("click", function (e) {
				e.stopPropagation();
			});

			var prevHandleDown = function prevHandleDown(e) {
				var nearestColumn, colIndex, prevColumn;

				nearestColumn = column.getFirstColumn();

				if (nearestColumn) {
					colIndex = self.table.columnManager.findColumnIndex(nearestColumn);
					prevColumn = colIndex > 0 ? self.table.columnManager.getColumnByIndex(colIndex - 1) : false;

					if (prevColumn && self._checkResizability(prevColumn)) {
						self.startColumn = column;
						self._mouseDown(e, prevColumn, prevHandle);
					}
				}
			};

			prevHandle.addEventListener("mousedown", prevHandleDown);
			prevHandle.addEventListener("touchstart", prevHandleDown, { passive: true });

			//resize column on double click
			prevHandle.addEventListener("dblclick", function (e) {
				var nearestColumn, colIndex, prevColumn;

				nearestColumn = column.getFirstColumn();

				if (nearestColumn) {
					colIndex = self.table.columnManager.findColumnIndex(nearestColumn);
					prevColumn = colIndex > 0 ? self.table.columnManager.getColumnByIndex(colIndex - 1) : false;

					if (prevColumn && self._checkResizability(prevColumn)) {
						e.stopPropagation();
						prevColumn.reinitializeWidth(true);
					}
				}
			});

			element.appendChild(handle);
			element.appendChild(prevHandle);
		}
	};

	ResizeColumns.prototype._checkResizability = function (column) {
		return typeof column.definition.resizable != "undefined" ? column.definition.resizable : this.table.options.resizableColumns;
	};

	ResizeColumns.prototype._mouseDown = function (e, column, handle) {
		var self = this;

		self.table.element.classList.add("tabulator-block-select");

		function mouseMove(e) {
			// self.table.columnManager.tempScrollBlock();

			column.setWidth(self.startWidth + ((typeof e.screenX === "undefined" ? e.touches[0].screenX : e.screenX) - self.startX));

			if (!self.table.browserSlow && column.modules.resize && column.modules.resize.variableHeight) {
				column.checkCellHeights();
			}
		}

		function mouseUp(e) {

			//block editor from taking action while resizing is taking place
			if (self.startColumn.modules.edit) {
				self.startColumn.modules.edit.blocked = false;
			}

			if (self.table.browserSlow && column.modules.resize && column.modules.resize.variableHeight) {
				column.checkCellHeights();
			}

			document.body.removeEventListener("mouseup", mouseUp);
			document.body.removeEventListener("mousemove", mouseMove);

			handle.removeEventListener("touchmove", mouseMove);
			handle.removeEventListener("touchend", mouseUp);

			self.table.element.classList.remove("tabulator-block-select");

			if (self.table.options.persistence && self.table.modExists("persistence", true) && self.table.modules.persistence.config.columns) {
				self.table.modules.persistence.save("columns");
			}

			self.table.options.columnResized.call(self.table, column.getComponent());
		}

		e.stopPropagation(); //prevent resize from interfereing with movable columns

		//block editor from taking action while resizing is taking place
		if (self.startColumn.modules.edit) {
			self.startColumn.modules.edit.blocked = true;
		}

		self.startX = typeof e.screenX === "undefined" ? e.touches[0].screenX : e.screenX;
		self.startWidth = column.getWidth();

		document.body.addEventListener("mousemove", mouseMove);
		document.body.addEventListener("mouseup", mouseUp);
		handle.addEventListener("touchmove", mouseMove, { passive: true });
		handle.addEventListener("touchend", mouseUp);
	};

	Tabulator.prototype.registerModule("resizeColumns", ResizeColumns);
	var ResizeRows = function ResizeRows(table) {
		this.table = table; //hold Tabulator object
		this.startColumn = false;
		this.startY = false;
		this.startHeight = false;
		this.handle = null;
		this.prevHandle = null;
	};

	ResizeRows.prototype.initializeRow = function (row) {
		var self = this,
		    rowEl = row.getElement();

		var handle = document.createElement('div');
		handle.className = "tabulator-row-resize-handle";

		var prevHandle = document.createElement('div');
		prevHandle.className = "tabulator-row-resize-handle prev";

		handle.addEventListener("click", function (e) {
			e.stopPropagation();
		});

		var handleDown = function handleDown(e) {
			self.startRow = row;
			self._mouseDown(e, row, handle);
		};

		handle.addEventListener("mousedown", handleDown);
		handle.addEventListener("touchstart", handleDown, { passive: true });

		prevHandle.addEventListener("click", function (e) {
			e.stopPropagation();
		});

		var prevHandleDown = function prevHandleDown(e) {
			var prevRow = self.table.rowManager.prevDisplayRow(row);

			if (prevRow) {
				self.startRow = prevRow;
				self._mouseDown(e, prevRow, prevHandle);
			}
		};

		prevHandle.addEventListener("mousedown", prevHandleDown);
		prevHandle.addEventListener("touchstart", prevHandleDown, { passive: true });

		rowEl.appendChild(handle);
		rowEl.appendChild(prevHandle);
	};

	ResizeRows.prototype._mouseDown = function (e, row, handle) {
		var self = this;

		self.table.element.classList.add("tabulator-block-select");

		function mouseMove(e) {
			row.setHeight(self.startHeight + ((typeof e.screenY === "undefined" ? e.touches[0].screenY : e.screenY) - self.startY));
		}

		function mouseUp(e) {

			// //block editor from taking action while resizing is taking place
			// if(self.startColumn.modules.edit){
			// 	self.startColumn.modules.edit.blocked = false;
			// }

			document.body.removeEventListener("mouseup", mouseMove);
			document.body.removeEventListener("mousemove", mouseMove);

			handle.removeEventListener("touchmove", mouseMove);
			handle.removeEventListener("touchend", mouseUp);

			self.table.element.classList.remove("tabulator-block-select");

			self.table.options.rowResized.call(this.table, row.getComponent());
		}

		e.stopPropagation(); //prevent resize from interfereing with movable columns

		//block editor from taking action while resizing is taking place
		// if(self.startColumn.modules.edit){
		// 	self.startColumn.modules.edit.blocked = true;
		// }

		self.startY = typeof e.screenY === "undefined" ? e.touches[0].screenY : e.screenY;
		self.startHeight = row.getHeight();

		document.body.addEventListener("mousemove", mouseMove);
		document.body.addEventListener("mouseup", mouseUp);

		handle.addEventListener("touchmove", mouseMove, { passive: true });
		handle.addEventListener("touchend", mouseUp);
	};

	Tabulator.prototype.registerModule("resizeRows", ResizeRows);
	var ResizeTable = function ResizeTable(table) {
		this.table = table; //hold Tabulator object
		this.binding = false;
		this.observer = false;
		this.containerObserver = false;

		this.tableHeight = 0;
		this.tableWidth = 0;
		this.containerHeight = 0;
		this.containerWidth = 0;

		this.autoResize = false;
	};

	ResizeTable.prototype.initialize = function (row) {
		var _this69 = this;

		var table = this.table,
		    tableStyle;

		this.tableHeight = table.element.clientHeight;
		this.tableWidth = table.element.clientWidth;

		if (table.element.parentNode) {
			this.containerHeight = table.element.parentNode.clientHeight;
			this.containerWidth = table.element.parentNode.clientWidth;
		}

		if (typeof ResizeObserver !== "undefined" && table.rowManager.getRenderMode() === "virtual") {

			this.autoResize = true;

			this.observer = new ResizeObserver(function (entry) {
				if (!table.browserMobile || table.browserMobile && !table.modules.edit.currentCell) {

					var nodeHeight = Math.floor(entry[0].contentRect.height);
					var nodeWidth = Math.floor(entry[0].contentRect.width);

					if (_this69.tableHeight != nodeHeight || _this69.tableWidth != nodeWidth) {
						_this69.tableHeight = nodeHeight;
						_this69.tableWidth = nodeWidth;

						if (table.element.parentNode) {
							_this69.containerHeight = table.element.parentNode.clientHeight;
							_this69.containerWidth = table.element.parentNode.clientWidth;
						}

						table.redraw();
					}
				}
			});

			this.observer.observe(table.element);

			tableStyle = window.getComputedStyle(table.element);

			if (this.table.element.parentNode && !this.table.rowManager.fixedHeight && (tableStyle.getPropertyValue("max-height") || tableStyle.getPropertyValue("min-height"))) {

				this.containerObserver = new ResizeObserver(function (entry) {
					if (!table.browserMobile || table.browserMobile && !table.modules.edit.currentCell) {

						var nodeHeight = Math.floor(entry[0].contentRect.height);
						var nodeWidth = Math.floor(entry[0].contentRect.width);

						if (_this69.containerHeight != nodeHeight || _this69.containerWidth != nodeWidth) {
							_this69.containerHeight = nodeHeight;
							_this69.containerWidth = nodeWidth;
							_this69.tableHeight = table.element.clientHeight;
							_this69.tableWidth = table.element.clientWidth;

							table.redraw();
						}

						table.redraw();
					}
				});

				this.containerObserver.observe(this.table.element.parentNode);
			}
		} else {
			this.binding = function () {
				if (!table.browserMobile || table.browserMobile && !table.modules.edit.currentCell) {
					table.redraw();
				}
			};

			window.addEventListener("resize", this.binding);
		}
	};

	ResizeTable.prototype.clearBindings = function (row) {
		if (this.binding) {
			window.removeEventListener("resize", this.binding);
		}

		if (this.observer) {
			this.observer.unobserve(this.table.element);
		}

		if (this.containerObserver) {
			this.containerObserver.unobserve(this.table.element.parentNode);
		}
	};

	Tabulator.prototype.registerModule("resizeTable", ResizeTable);
	var ResponsiveLayout = function ResponsiveLayout(table) {
		this.table = table; //hold Tabulator object
		this.columns = [];
		this.hiddenColumns = [];
		this.mode = "";
		this.index = 0;
		this.collapseFormatter = [];
		this.collapseStartOpen = true;
		this.collapseHandleColumn = false;
	};

	//generate resposive columns list
	ResponsiveLayout.prototype.initialize = function () {
		var self = this,
		    columns = [];

		this.mode = this.table.options.responsiveLayout;
		this.collapseFormatter = this.table.options.responsiveLayoutCollapseFormatter || this.formatCollapsedData;
		this.collapseStartOpen = this.table.options.responsiveLayoutCollapseStartOpen;
		this.hiddenColumns = [];

		//detemine level of responsivity for each column
		this.table.columnManager.columnsByIndex.forEach(function (column, i) {
			if (column.modules.responsive) {
				if (column.modules.responsive.order && column.modules.responsive.visible) {
					column.modules.responsive.index = i;
					columns.push(column);

					if (!column.visible && self.mode === "collapse") {
						self.hiddenColumns.push(column);
					}
				}
			}
		});

		//sort list by responsivity
		columns = columns.reverse();
		columns = columns.sort(function (a, b) {
			var diff = b.modules.responsive.order - a.modules.responsive.order;
			return diff || b.modules.responsive.index - a.modules.responsive.index;
		});

		this.columns = columns;

		if (this.mode === "collapse") {
			this.generateCollapsedContent();
		}

		//assign collapse column
		for (var _iterator = this.table.columnManager.columnsByIndex, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
			var _ref;

			if (_isArray) {
				if (_i >= _iterator.length) break;
				_ref = _iterator[_i++];
			} else {
				_i = _iterator.next();
				if (_i.done) break;
				_ref = _i.value;
			}

			var col = _ref;

			if (col.definition.formatter == "responsiveCollapse") {
				this.collapseHandleColumn = col;
				break;
			}
		}

		if (this.collapseHandleColumn) {
			if (this.hiddenColumns.length) {
				this.collapseHandleColumn.show();
			} else {
				this.collapseHandleColumn.hide();
			}
		}
	};

	//define layout information
	ResponsiveLayout.prototype.initializeColumn = function (column) {
		var def = column.getDefinition();

		column.modules.responsive = { order: typeof def.responsive === "undefined" ? 1 : def.responsive, visible: def.visible === false ? false : true };
	};

	ResponsiveLayout.prototype.initializeRow = function (row) {
		var el;

		if (row.type !== "calc") {
			el = document.createElement("div");
			el.classList.add("tabulator-responsive-collapse");

			row.modules.responsiveLayout = {
				element: el,
				open: this.collapseStartOpen
			};

			if (!this.collapseStartOpen) {
				el.style.display = 'none';
			}
		}
	};

	ResponsiveLayout.prototype.layoutRow = function (row) {
		var rowEl = row.getElement();

		if (row.modules.responsiveLayout) {
			rowEl.appendChild(row.modules.responsiveLayout.element);
			this.generateCollapsedRowContent(row);
		}
	};

	//update column visibility
	ResponsiveLayout.prototype.updateColumnVisibility = function (column, visible) {
		var index;
		if (column.modules.responsive) {
			column.modules.responsive.visible = visible;
			this.initialize();
		}
	};

	ResponsiveLayout.prototype.hideColumn = function (column) {
		var colCount = this.hiddenColumns.length;

		column.hide(false, true);

		if (this.mode === "collapse") {
			this.hiddenColumns.unshift(column);
			this.generateCollapsedContent();

			if (this.collapseHandleColumn && !colCount) {
				this.collapseHandleColumn.show();
			}
		}
	};

	ResponsiveLayout.prototype.showColumn = function (column) {
		var index;

		column.show(false, true);
		//set column width to prevent calculation loops on uninitialized columns
		column.setWidth(column.getWidth());

		if (this.mode === "collapse") {
			index = this.hiddenColumns.indexOf(column);

			if (index > -1) {
				this.hiddenColumns.splice(index, 1);
			}

			this.generateCollapsedContent();

			if (this.collapseHandleColumn && !this.hiddenColumns.length) {
				this.collapseHandleColumn.hide();
			}
		}
	};

	//redraw columns to fit space
	ResponsiveLayout.prototype.update = function () {
		var self = this,
		    working = true;

		while (working) {

			var width = self.table.modules.layout.getMode() == "fitColumns" ? self.table.columnManager.getFlexBaseWidth() : self.table.columnManager.getWidth();

			var diff = (self.table.options.headerVisible ? self.table.columnManager.element.clientWidth : self.table.element.clientWidth) - width;

			if (diff < 0) {
				//table is too wide
				var column = self.columns[self.index];

				if (column) {
					self.hideColumn(column);
					self.index++;
				} else {
					working = false;
				}
			} else {

				//table has spare space
				var _column = self.columns[self.index - 1];

				if (_column) {
					if (diff > 0) {
						if (diff >= _column.getWidth()) {
							self.showColumn(_column);
							self.index--;
						} else {
							working = false;
						}
					} else {
						working = false;
					}
				} else {
					working = false;
				}
			}

			if (!self.table.rowManager.activeRowsCount) {
				self.table.rowManager.renderEmptyScroll();
			}
		}
	};

	ResponsiveLayout.prototype.generateCollapsedContent = function () {
		var self = this,
		    rows = this.table.rowManager.getDisplayRows();

		rows.forEach(function (row) {
			self.generateCollapsedRowContent(row);
		});
	};

	ResponsiveLayout.prototype.generateCollapsedRowContent = function (row) {
		var el, contents;

		if (row.modules.responsiveLayout) {
			el = row.modules.responsiveLayout.element;

			while (el.firstChild) {
				el.removeChild(el.firstChild);
			}contents = this.collapseFormatter(this.generateCollapsedRowData(row));
			if (contents) {
				el.appendChild(contents);
			}
		}
	};

	ResponsiveLayout.prototype.generateCollapsedRowData = function (row) {
		var self = this,
		    data = row.getData(),
		    output = [],
		    mockCellComponent;

		this.hiddenColumns.forEach(function (column) {
			var value = column.getFieldValue(data);

			if (column.definition.title && column.field) {
				if (column.modules.format && self.table.options.responsiveLayoutCollapseUseFormatters) {

					mockCellComponent = {
						value: false,
						data: {},
						getValue: function getValue() {
							return value;
						},
						getData: function getData() {
							return data;
						},
						getElement: function getElement() {
							return document.createElement("div");
						},
						getRow: function getRow() {
							return row.getComponent();
						},
						getColumn: function getColumn() {
							return column.getComponent();
						}
					};

					output.push({
						title: column.definition.title,
						value: column.modules.format.formatter.call(self.table.modules.format, mockCellComponent, column.modules.format.params)
					});
				} else {
					output.push({
						title: column.definition.title,
						value: value
					});
				}
			}
		});

		return output;
	};

	ResponsiveLayout.prototype.formatCollapsedData = function (data) {
		var list = document.createElement("table"),
		    listContents = "";

		data.forEach(function (item) {
			var div = document.createElement("div");

			if (item.value instanceof Node) {
				div.appendChild(item.value);
				item.value = div.innerHTML;
			}

			listContents += "<tr><td><strong>" + item.title + "</strong></td><td>" + item.value + "</td></tr>";
		});

		list.innerHTML = listContents;

		return Object.keys(data).length ? list : "";
	};

	Tabulator.prototype.registerModule("responsiveLayout", ResponsiveLayout);

	var SelectRow = function SelectRow(table) {
		this.table = table; //hold Tabulator object
		this.selecting = false; //flag selecting in progress
		this.lastClickedRow = false; //last clicked row
		this.selectPrev = []; //hold previously selected element for drag drop selection
		this.selectedRows = []; //hold selected rows
		this.headerCheckboxElement = null; // hold header select element
	};

	SelectRow.prototype.clearSelectionData = function (silent) {
		this.selecting = false;
		this.lastClickedRow = false;
		this.selectPrev = [];
		this.selectedRows = [];

		if (!silent) {
			this._rowSelectionChanged();
		}
	};

	SelectRow.prototype.initializeRow = function (row) {
		var self = this,
		    element = row.getElement();

		// trigger end of row selection
		var endSelect = function endSelect() {

			setTimeout(function () {
				self.selecting = false;
			}, 50);

			document.body.removeEventListener("mouseup", endSelect);
		};

		row.modules.select = { selected: false };

		//set row selection class
		if (self.table.options.selectableCheck.call(this.table, row.getComponent())) {
			element.classList.add("tabulator-selectable");
			element.classList.remove("tabulator-unselectable");

			if (self.table.options.selectable && self.table.options.selectable != "highlight") {
				if (self.table.options.selectableRangeMode === "click") {
					element.addEventListener("click", function (e) {
						if (e.shiftKey) {
							self.table._clearSelection();
							self.lastClickedRow = self.lastClickedRow || row;

							var lastClickedRowIdx = self.table.rowManager.getDisplayRowIndex(self.lastClickedRow);
							var rowIdx = self.table.rowManager.getDisplayRowIndex(row);

							var fromRowIdx = lastClickedRowIdx <= rowIdx ? lastClickedRowIdx : rowIdx;
							var toRowIdx = lastClickedRowIdx >= rowIdx ? lastClickedRowIdx : rowIdx;

							var rows = self.table.rowManager.getDisplayRows().slice(0);
							var toggledRows = rows.splice(fromRowIdx, toRowIdx - fromRowIdx + 1);

							if (e.ctrlKey || e.metaKey) {
								toggledRows.forEach(function (toggledRow) {
									if (toggledRow !== self.lastClickedRow) {

										if (self.table.options.selectable !== true && !self.isRowSelected(row)) {
											if (self.selectedRows.length < self.table.options.selectable) {
												self.toggleRow(toggledRow);
											}
										} else {
											self.toggleRow(toggledRow);
										}
									}
								});
								self.lastClickedRow = row;
							} else {
								self.deselectRows(undefined, true);

								if (self.table.options.selectable !== true) {
									if (toggledRows.length > self.table.options.selectable) {
										toggledRows = toggledRows.slice(0, self.table.options.selectable);
									}
								}

								self.selectRows(toggledRows);
							}
							self.table._clearSelection();
						} else if (e.ctrlKey || e.metaKey) {
							self.toggleRow(row);
							self.lastClickedRow = row;
						} else {
							self.deselectRows(undefined, true);
							self.selectRows(row);
							self.lastClickedRow = row;
						}
					});
				} else {
					element.addEventListener("click", function (e) {
						if (!self.table.modExists("edit") || !self.table.modules.edit.getCurrentCell()) {
							self.table._clearSelection();
						}

						if (!self.selecting) {
							self.toggleRow(row);
						}
					});

					element.addEventListener("mousedown", function (e) {
						if (e.shiftKey) {
							self.table._clearSelection();

							self.selecting = true;

							self.selectPrev = [];

							document.body.addEventListener("mouseup", endSelect);
							document.body.addEventListener("keyup", endSelect);

							self.toggleRow(row);

							return false;
						}
					});

					element.addEventListener("mouseenter", function (e) {
						if (self.selecting) {
							self.table._clearSelection();
							self.toggleRow(row);

							if (self.selectPrev[1] == row) {
								self.toggleRow(self.selectPrev[0]);
							}
						}
					});

					element.addEventListener("mouseout", function (e) {
						if (self.selecting) {
							self.table._clearSelection();
							self.selectPrev.unshift(row);
						}
					});
				}
			}
		} else {
			element.classList.add("tabulator-unselectable");
			element.classList.remove("tabulator-selectable");
		}
	};

	//toggle row selection
	SelectRow.prototype.toggleRow = function (row) {
		if (this.table.options.selectableCheck.call(this.table, row.getComponent())) {
			if (row.modules.select && row.modules.select.selected) {
				this._deselectRow(row);
			} else {
				this._selectRow(row);
			}
		}
	};

	//select a number of rows
	SelectRow.prototype.selectRows = function (rows) {
		var _this70 = this;

		var rowMatch;

		switch (typeof rows === 'undefined' ? 'undefined' : _typeof(rows)) {
			case "undefined":
				this.table.rowManager.rows.forEach(function (row) {
					_this70._selectRow(row, true, true);
				});

				this._rowSelectionChanged();
				break;

			case "string":

				rowMatch = this.table.rowManager.findRow(rows);

				if (rowMatch) {
					this._selectRow(rowMatch, true, true);
				} else {
					this.table.rowManager.getRows(rows).forEach(function (row) {
						_this70._selectRow(row, true, true);
					});
				}

				this._rowSelectionChanged();
				break;

			default:
				if (Array.isArray(rows)) {
					rows.forEach(function (row) {
						_this70._selectRow(row, true, true);
					});

					this._rowSelectionChanged();
				} else {
					this._selectRow(rows, false, true);
				}
				break;
		}
	};

	//select an individual row
	SelectRow.prototype._selectRow = function (rowInfo, silent, force) {
		var index;

		//handle max row count
		if (!isNaN(this.table.options.selectable) && this.table.options.selectable !== true && !force) {
			if (this.selectedRows.length >= this.table.options.selectable) {
				if (this.table.options.selectableRollingSelection) {
					this._deselectRow(this.selectedRows[0]);
				} else {
					return false;
				}
			}
		}

		var row = this.table.rowManager.findRow(rowInfo);

		if (row) {
			if (this.selectedRows.indexOf(row) == -1) {
				if (!row.modules.select) {
					row.modules.select = {};
				}

				row.modules.select.selected = true;
				if (row.modules.select.checkboxEl) {
					row.modules.select.checkboxEl.checked = true;
				}
				row.getElement().classList.add("tabulator-selected");

				this.selectedRows.push(row);

				if (this.table.options.dataTreeSelectPropagate) {
					this.childRowSelection(row, true);
				}

				if (!silent) {
					this.table.options.rowSelected.call(this.table, row.getComponent());
				}

				this._rowSelectionChanged(silent);
			}
		} else {
			if (!silent) {
				console.warn("Selection Error - No such row found, ignoring selection:" + rowInfo);
			}
		}
	};

	SelectRow.prototype.isRowSelected = function (row) {
		return this.selectedRows.indexOf(row) !== -1;
	};

	//deselect a number of rows
	SelectRow.prototype.deselectRows = function (rows, silent) {
		var self = this,
		    rowCount;

		if (typeof rows == "undefined") {

			rowCount = self.selectedRows.length;

			for (var i = 0; i < rowCount; i++) {
				self._deselectRow(self.selectedRows[0], true);
			}

			self._rowSelectionChanged(silent);
		} else {
			if (Array.isArray(rows)) {
				rows.forEach(function (row) {
					self._deselectRow(row, true);
				});

				self._rowSelectionChanged(silent);
			} else {
				self._deselectRow(rows, silent);
			}
		}
	};

	//deselect an individual row
	SelectRow.prototype._deselectRow = function (rowInfo, silent) {
		var self = this,
		    row = self.table.rowManager.findRow(rowInfo),
		    index;

		if (row) {
			index = self.selectedRows.findIndex(function (selectedRow) {
				return selectedRow == row;
			});

			if (index > -1) {

				if (!row.modules.select) {
					row.modules.select = {};
				}

				row.modules.select.selected = false;
				if (row.modules.select.checkboxEl) {
					row.modules.select.checkboxEl.checked = false;
				}
				row.getElement().classList.remove("tabulator-selected");
				self.selectedRows.splice(index, 1);

				if (this.table.options.dataTreeSelectPropagate) {
					this.childRowSelection(row, false);
				}

				if (!silent) {
					self.table.options.rowDeselected.call(this.table, row.getComponent());
				}

				self._rowSelectionChanged(silent);
			}
		} else {
			if (!silent) {
				console.warn("Deselection Error - No such row found, ignoring selection:" + rowInfo);
			}
		}
	};

	SelectRow.prototype.getSelectedData = function () {
		var data = [];

		this.selectedRows.forEach(function (row) {
			data.push(row.getData());
		});

		return data;
	};

	SelectRow.prototype.getSelectedRows = function () {

		var rows = [];

		this.selectedRows.forEach(function (row) {
			rows.push(row.getComponent());
		});

		return rows;
	};

	SelectRow.prototype._rowSelectionChanged = function (silent) {
		if (this.headerCheckboxElement) {
			if (this.selectedRows.length === 0) {
				this.headerCheckboxElement.checked = false;
				this.headerCheckboxElement.indeterminate = false;
			} else if (this.table.rowManager.rows.length === this.selectedRows.length) {
				this.headerCheckboxElement.checked = true;
				this.headerCheckboxElement.indeterminate = false;
			} else {
				this.headerCheckboxElement.indeterminate = true;
				this.headerCheckboxElement.checked = false;
			}
		}

		if (!silent) {
			this.table.options.rowSelectionChanged.call(this.table, this.getSelectedData(), this.getSelectedRows());
		}
	};

	SelectRow.prototype.registerRowSelectCheckbox = function (row, element) {
		if (!row._row.modules.select) {
			row._row.modules.select = {};
		}

		row._row.modules.select.checkboxEl = element;
	};

	SelectRow.prototype.registerHeaderSelectCheckbox = function (element) {
		this.headerCheckboxElement = element;
	};

	SelectRow.prototype.childRowSelection = function (row, select) {
		var children = this.table.modules.dataTree.getChildren(row);

		if (select) {
			for (var _iterator2 = children, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
				var _ref2;

				if (_isArray2) {
					if (_i2 >= _iterator2.length) break;
					_ref2 = _iterator2[_i2++];
				} else {
					_i2 = _iterator2.next();
					if (_i2.done) break;
					_ref2 = _i2.value;
				}

				var child = _ref2;

				this._selectRow(child, true);
			}
		} else {
			for (var _iterator3 = children, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
				var _ref3;

				if (_isArray3) {
					if (_i3 >= _iterator3.length) break;
					_ref3 = _iterator3[_i3++];
				} else {
					_i3 = _iterator3.next();
					if (_i3.done) break;
					_ref3 = _i3.value;
				}

				var _child = _ref3;

				this._deselectRow(_child, true);
			}
		}
	};

	Tabulator.prototype.registerModule("selectRow", SelectRow);

	var Sort = function Sort(table) {
		this.table = table; //hold Tabulator object
		this.sortList = []; //holder current sort
		this.changed = false; //has the sort changed since last render
	};

	//initialize column header for sorting
	Sort.prototype.initializeColumn = function (column, content) {
		var self = this,
		    sorter = false,
		    colEl,
		    arrowEl;

		switch (_typeof(column.definition.sorter)) {
			case "string":
				if (self.sorters[column.definition.sorter]) {
					sorter = self.sorters[column.definition.sorter];
				} else {
					console.warn("Sort Error - No such sorter found: ", column.definition.sorter);
				}
				break;

			case "function":
				sorter = column.definition.sorter;
				break;
		}

		column.modules.sort = {
			sorter: sorter, dir: "none",
			params: column.definition.sorterParams || {},
			startingDir: column.definition.headerSortStartingDir || "asc",
			tristate: typeof column.definition.headerSortTristate !== "undefined" ? column.definition.headerSortTristate : this.table.options.headerSortTristate
		};

		if (typeof column.definition.headerSort === "undefined" ? this.table.options.headerSort !== false : column.definition.headerSort !== false) {

			colEl = column.getElement();

			colEl.classList.add("tabulator-sortable");

			arrowEl = document.createElement("div");
			arrowEl.classList.add("tabulator-arrow");
			//create sorter arrow
			content.appendChild(arrowEl);

			//sort on click
			colEl.addEventListener("click", function (e) {
				var dir = "",
				    sorters = [],
				    match = false;

				if (column.modules.sort) {
					if (column.modules.sort.tristate) {
						if (column.modules.sort.dir == "none") {
							dir = column.modules.sort.startingDir;
						} else {
							if (column.modules.sort.dir == column.modules.sort.startingDir) {
								dir = column.modules.sort.dir == "asc" ? "desc" : "asc";
							} else {
								dir = "none";
							}
						}
					} else {
						switch (column.modules.sort.dir) {
							case "asc":
								dir = "desc";
								break;

							case "desc":
								dir = "asc";
								break;

							default:
								dir = column.modules.sort.startingDir;
						}
					}

					if (self.table.options.columnHeaderSortMulti && (e.shiftKey || e.ctrlKey)) {
						sorters = self.getSort();

						match = sorters.findIndex(function (sorter) {
							return sorter.field === column.getField();
						});

						if (match > -1) {
							sorters[match].dir = dir;

							if (match != sorters.length - 1) {
								match = sorters.splice(match, 1)[0];
								if (dir != "none") {
									sorters.push(match);
								}
							}
						} else {
							if (dir != "none") {
								sorters.push({ column: column, dir: dir });
							}
						}

						//add to existing sort
						self.setSort(sorters);
					} else {
						if (dir == "none") {
							self.clear();
						} else {
							//sort by column only
							self.setSort(column, dir);
						}
					}

					self.table.rowManager.sorterRefresh(!self.sortList.length);
				}
			});
		}
	};

	//check if the sorters have changed since last use
	Sort.prototype.hasChanged = function () {
		var changed = this.changed;
		this.changed = false;
		return changed;
	};

	//return current sorters
	Sort.prototype.getSort = function () {
		var self = this,
		    sorters = [];

		self.sortList.forEach(function (item) {
			if (item.column) {
				sorters.push({ column: item.column.getComponent(), field: item.column.getField(), dir: item.dir });
			}
		});

		return sorters;
	};

	//change sort list and trigger sort
	Sort.prototype.setSort = function (sortList, dir) {
		var self = this,
		    newSortList = [];

		if (!Array.isArray(sortList)) {
			sortList = [{ column: sortList, dir: dir }];
		}

		sortList.forEach(function (item) {
			var column;

			column = self.table.columnManager.findColumn(item.column);

			if (column) {
				item.column = column;
				newSortList.push(item);
				self.changed = true;
			} else {
				console.warn("Sort Warning - Sort field does not exist and is being ignored: ", item.column);
			}
		});

		self.sortList = newSortList;

		if (this.table.options.persistence && this.table.modExists("persistence", true) && this.table.modules.persistence.config.sort) {
			this.table.modules.persistence.save("sort");
		}
	};

	//clear sorters
	Sort.prototype.clear = function () {
		this.setSort([]);
	};

	//find appropriate sorter for column
	Sort.prototype.findSorter = function (column) {
		var row = this.table.rowManager.activeRows[0],
		    sorter = "string",
		    field,
		    value;

		if (row) {
			row = row.getData();
			field = column.getField();

			if (field) {

				value = column.getFieldValue(row);

				switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
					case "undefined":
						sorter = "string";
						break;

					case "boolean":
						sorter = "boolean";
						break;

					default:
						if (!isNaN(value) && value !== "") {
							sorter = "number";
						} else {
							if (value.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i)) {
								sorter = "alphanum";
							}
						}
						break;
				}
			}
		}

		return this.sorters[sorter];
	};

	//work through sort list sorting data
	Sort.prototype.sort = function (data) {
		var self = this,
		    lastSort,
		    sortList;

		sortList = this.table.options.sortOrderReverse ? self.sortList.slice().reverse() : self.sortList;

		if (self.table.options.dataSorting) {
			self.table.options.dataSorting.call(self.table, self.getSort());
		}

		self.clearColumnHeaders();

		if (!self.table.options.ajaxSorting) {

			sortList.forEach(function (item, i) {

				if (item.column && item.column.modules.sort) {

					//if no sorter has been defined, take a guess
					if (!item.column.modules.sort.sorter) {
						item.column.modules.sort.sorter = self.findSorter(item.column);
					}

					self._sortItem(data, item.column, item.dir, sortList, i);
				}

				self.setColumnHeader(item.column, item.dir);
			});
		} else {
			sortList.forEach(function (item, i) {
				self.setColumnHeader(item.column, item.dir);
			});
		}

		if (self.table.options.dataSorted) {
			self.table.options.dataSorted.call(self.table, self.getSort(), self.table.rowManager.getComponents("active"));
		}
	};

	//clear sort arrows on columns
	Sort.prototype.clearColumnHeaders = function () {
		this.table.columnManager.getRealColumns().forEach(function (column) {
			if (column.modules.sort) {
				column.modules.sort.dir = "none";
				column.getElement().setAttribute("aria-sort", "none");
			}
		});
	};

	//set the column header sort direction
	Sort.prototype.setColumnHeader = function (column, dir) {
		column.modules.sort.dir = dir;
		column.getElement().setAttribute("aria-sort", dir);
	};

	//sort each item in sort list
	Sort.prototype._sortItem = function (data, column, dir, sortList, i) {
		var self = this;

		var params = typeof column.modules.sort.params === "function" ? column.modules.sort.params(column.getComponent(), dir) : column.modules.sort.params;

		data.sort(function (a, b) {

			var result = self._sortRow(a, b, column, dir, params);

			//if results match recurse through previous searchs to be sure
			if (result === 0 && i) {
				for (var j = i - 1; j >= 0; j--) {
					result = self._sortRow(a, b, sortList[j].column, sortList[j].dir, params);

					if (result !== 0) {
						break;
					}
				}
			}

			return result;
		});
	};

	//process individual rows for a sort function on active data
	Sort.prototype._sortRow = function (a, b, column, dir, params) {
		var el1Comp, el2Comp, colComp;

		//switch elements depending on search direction
		var el1 = dir == "asc" ? a : b;
		var el2 = dir == "asc" ? b : a;

		a = column.getFieldValue(el1.getData());
		b = column.getFieldValue(el2.getData());

		a = typeof a !== "undefined" ? a : "";
		b = typeof b !== "undefined" ? b : "";

		el1Comp = el1.getComponent();
		el2Comp = el2.getComponent();

		return column.modules.sort.sorter.call(this, a, b, el1Comp, el2Comp, column.getComponent(), dir, params);
	};

	//default data sorters
	Sort.prototype.sorters = {

		//sort numbers
		number: function number(a, b, aRow, bRow, column, dir, params) {
			var alignEmptyValues = params.alignEmptyValues;
			var decimal = params.decimalSeparator || ".";
			var thousand = params.thousandSeparator || ",";
			var emptyAlign = 0;

			a = parseFloat(String(a).split(thousand).join("").split(decimal).join("."));
			b = parseFloat(String(b).split(thousand).join("").split(decimal).join("."));

			//handle non numeric values
			if (isNaN(a)) {
				emptyAlign = isNaN(b) ? 0 : -1;
			} else if (isNaN(b)) {
				emptyAlign = 1;
			} else {
				//compare valid values
				return a - b;
			}

			//fix empty values in position
			if (alignEmptyValues === "top" && dir === "desc" || alignEmptyValues === "bottom" && dir === "asc") {
				emptyAlign *= -1;
			}

			return emptyAlign;
		},

		//sort strings
		string: function string(a, b, aRow, bRow, column, dir, params) {
			var alignEmptyValues = params.alignEmptyValues;
			var emptyAlign = 0;
			var locale;

			//handle empty values
			if (!a) {
				emptyAlign = !b ? 0 : -1;
			} else if (!b) {
				emptyAlign = 1;
			} else {
				//compare valid values
				switch (_typeof(params.locale)) {
					case "boolean":
						if (params.locale) {
							locale = this.table.modules.localize.getLocale();
						}
						break;
					case "string":
						locale = params.locale;
						break;
				}

				return String(a).toLowerCase().localeCompare(String(b).toLowerCase(), locale);
			}

			//fix empty values in position
			if (alignEmptyValues === "top" && dir === "desc" || alignEmptyValues === "bottom" && dir === "asc") {
				emptyAlign *= -1;
			}

			return emptyAlign;
		},

		//sort date
		date: function date(a, b, aRow, bRow, column, dir, params) {
			if (!params.format) {
				params.format = "DD/MM/YYYY";
			}

			return this.sorters.datetime.call(this, a, b, aRow, bRow, column, dir, params);
		},

		//sort hh:mm formatted times
		time: function time(a, b, aRow, bRow, column, dir, params) {
			if (!params.format) {
				params.format = "hh:mm";
			}

			return this.sorters.datetime.call(this, a, b, aRow, bRow, column, dir, params);
		},

		//sort datetime
		datetime: function datetime(a, b, aRow, bRow, column, dir, params) {
			var format = params.format || "DD/MM/YYYY hh:mm:ss",
			    alignEmptyValues = params.alignEmptyValues,
			    emptyAlign = 0;

			if (typeof moment != "undefined") {
				a = moment(a, format);
				b = moment(b, format);

				if (!a.isValid()) {
					emptyAlign = !b.isValid() ? 0 : -1;
				} else if (!b.isValid()) {
					emptyAlign = 1;
				} else {
					//compare valid values
					return a - b;
				}

				//fix empty values in position
				if (alignEmptyValues === "top" && dir === "desc" || alignEmptyValues === "bottom" && dir === "asc") {
					emptyAlign *= -1;
				}

				return emptyAlign;
			} else {
				console.error("Sort Error - 'datetime' sorter is dependant on moment.js");
			}
		},

		//sort booleans
		boolean: function boolean(a, b, aRow, bRow, column, dir, params) {
			var el1 = a === true || a === "true" || a === "True" || a === 1 ? 1 : 0;
			var el2 = b === true || b === "true" || b === "True" || b === 1 ? 1 : 0;

			return el1 - el2;
		},

		//sort if element contains any data
		array: function array(a, b, aRow, bRow, column, dir, params) {
			var el1 = 0;
			var el2 = 0;
			var type = params.type || "length";
			var alignEmptyValues = params.alignEmptyValues;
			var emptyAlign = 0;

			function calc(value) {

				switch (type) {
					case "length":
						return value.length;
						break;

					case "sum":
						return value.reduce(function (c, d) {
							return c + d;
						});
						break;

					case "max":
						return Math.max.apply(null, value);
						break;

					case "min":
						return Math.min.apply(null, value);
						break;

					case "avg":
						return value.reduce(function (c, d) {
							return c + d;
						}) / value.length;
						break;
				}
			}

			//handle non array values
			if (!Array.isArray(a)) {
				alignEmptyValues = !Array.isArray(b) ? 0 : -1;
			} else if (!Array.isArray(b)) {
				alignEmptyValues = 1;
			} else {

				//compare valid values
				el1 = a ? calc(a) : 0;
				el2 = b ? calc(b) : 0;

				return el1 - el2;
			}

			//fix empty values in position
			if (alignEmptyValues === "top" && dir === "desc" || alignEmptyValues === "bottom" && dir === "asc") {
				emptyAlign *= -1;
			}

			return emptyAlign;
		},

		//sort if element contains any data
		exists: function exists(a, b, aRow, bRow, column, dir, params) {
			var el1 = typeof a == "undefined" ? 0 : 1;
			var el2 = typeof b == "undefined" ? 0 : 1;

			return el1 - el2;
		},

		//sort alpha numeric strings
		alphanum: function alphanum(as, bs, aRow, bRow, column, dir, params) {
			var a,
			    b,
			    a1,
			    b1,
			    i = 0,
			    L,
			    rx = /(\d+)|(\D+)/g,
			    rd = /\d/;
			var alignEmptyValues = params.alignEmptyValues;
			var emptyAlign = 0;

			//handle empty values
			if (!as && as !== 0) {
				emptyAlign = !bs && bs !== 0 ? 0 : -1;
			} else if (!bs && bs !== 0) {
				emptyAlign = 1;
			} else {

				if (isFinite(as) && isFinite(bs)) return as - bs;
				a = String(as).toLowerCase();
				b = String(bs).toLowerCase();
				if (a === b) return 0;
				if (!(rd.test(a) && rd.test(b))) return a > b ? 1 : -1;
				a = a.match(rx);
				b = b.match(rx);
				L = a.length > b.length ? b.length : a.length;
				while (i < L) {
					a1 = a[i];
					b1 = b[i++];
					if (a1 !== b1) {
						if (isFinite(a1) && isFinite(b1)) {
							if (a1.charAt(0) === "0") a1 = "." + a1;
							if (b1.charAt(0) === "0") b1 = "." + b1;
							return a1 - b1;
						} else return a1 > b1 ? 1 : -1;
					}
				}

				return a.length > b.length;
			}

			//fix empty values in position
			if (alignEmptyValues === "top" && dir === "desc" || alignEmptyValues === "bottom" && dir === "asc") {
				emptyAlign *= -1;
			}

			return emptyAlign;
		}
	};

	Tabulator.prototype.registerModule("sort", Sort);

	var Validate = function Validate(table) {
		this.table = table;
	};

	//validate
	Validate.prototype.initializeColumn = function (column) {
		var self = this,
		    config = [],
		    validator;

		if (column.definition.validator) {

			if (Array.isArray(column.definition.validator)) {
				column.definition.validator.forEach(function (item) {
					validator = self._extractValidator(item);

					if (validator) {
						config.push(validator);
					}
				});
			} else {
				validator = this._extractValidator(column.definition.validator);

				if (validator) {
					config.push(validator);
				}
			}

			column.modules.validate = config.length ? config : false;
		}
	};

	Validate.prototype._extractValidator = function (value) {
		var type, params, pos;

		switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
			case "string":
				pos = value.indexOf(':');

				if (pos > -1) {
					type = value.substring(0, pos);
					params = value.substring(pos + 1);
				} else {
					type = value;
				}

				return this._buildValidator(type, params);
				break;

			case "function":
				return this._buildValidator(value);
				break;

			case "object":
				return this._buildValidator(value.type, value.parameters);
				break;
		}
	};

	Validate.prototype._buildValidator = function (type, params) {

		var func = typeof type == "function" ? type : this.validators[type];

		if (!func) {
			console.warn("Validator Setup Error - No matching validator found:", type);
			return false;
		} else {
			return {
				type: typeof type == "function" ? "function" : type,
				func: func,
				params: params
			};
		}
	};

	Validate.prototype.validate = function (validators, cell, value) {
		var self = this,
		    valid = [];

		if (validators) {
			validators.forEach(function (item) {
				if (!item.func.call(self, cell, value, item.params)) {
					valid.push({
						type: item.type,
						parameters: item.params
					});
				}
			});
		}

		return valid.length ? valid : true;
	};

	Validate.prototype.validators = {

		//is integer
		integer: function integer(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			value = Number(value);
			return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
		},

		//is float
		float: function float(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			value = Number(value);
			return typeof value === 'number' && isFinite(value) && value % 1 !== 0;
		},

		//must be a number
		numeric: function numeric(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			return !isNaN(value);
		},

		//must be a string
		string: function string(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			return isNaN(value);
		},

		//maximum value
		max: function max(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			return parseFloat(value) <= parameters;
		},

		//minimum value
		min: function min(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			return parseFloat(value) >= parameters;
		},

		//minimum string length
		minLength: function minLength(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			return String(value).length >= parameters;
		},

		//maximum string length
		maxLength: function maxLength(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			return String(value).length <= parameters;
		},

		//in provided value list
		in: function _in(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			if (typeof parameters == "string") {
				parameters = parameters.split("|");
			}

			return value === "" || parameters.indexOf(value) > -1;
		},

		//must match provided regex
		regex: function regex(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			var reg = new RegExp(parameters);

			return reg.test(value);
		},

		//value must be unique in this column
		unique: function unique(cell, value, parameters) {
			if (value === "" || value === null || typeof value === "undefined") {
				return true;
			}
			var unique = true;

			var cellData = cell.getData();
			var column = cell.getColumn()._getSelf();

			this.table.rowManager.rows.forEach(function (row) {
				var data = row.getData();

				if (data !== cellData) {
					if (value == column.getFieldValue(data)) {
						unique = false;
					}
				}
			});

			return unique;
		},

		//must have a value
		required: function required(cell, value, parameters) {
			return value !== "" && value !== null && typeof value !== "undefined";
		}
	};

	Tabulator.prototype.registerModule("validate", Validate);

	return Tabulator;
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlternativeVisualizersWrapper; });




var AlternativeVisualizersWrapper = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](AlternativeVisualizersWrapper, _super);
    function AlternativeVisualizersWrapper(visualizers, targetElement, question, data, options) {
        var _this = _super.call(this, targetElement, question, data, options) || this;
        _this.visualizers = visualizers;
        if (!visualizers || visualizers.length < 2) {
            throw new Error("VisualizerArrayWrapper works with visualizers collection only.");
        }
        _this.visualizer = visualizers[0];
        return _this;
    }
    AlternativeVisualizersWrapper.prototype.setVisualizer = function (name) {
        if (!!this.visualizer) {
            this.visualizer.destroy();
        }
        this.visualizer = this.visualizers.filter(function (v) { return v.name === name; })[0];
        this.visualizer.render(this.visualizerContainer);
        this.invokeOnUpdate();
    };
    AlternativeVisualizersWrapper.prototype.update = function (data) {
        this.visualizer.update(data);
    };
    AlternativeVisualizersWrapper.prototype.destroy = function () {
        this.visualizer.destroy();
        _super.prototype.destroy.call(this);
    };
    AlternativeVisualizersWrapper.prototype.renderContent = function (container) {
        this.visualizerContainer = container;
        this.visualizer.render(this.visualizerContainer);
    };
    AlternativeVisualizersWrapper.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        var selectWrapper = __WEBPACK_IMPORTED_MODULE_3__utils_index__["a" /* ToolbarHelper */].createSelector(toolbar, this.visualizers.map(function (visualizer) {
            return {
                value: visualizer.name,
                text: __WEBPACK_IMPORTED_MODULE_2__localizationManager__["a" /* localization */].getString("visualizer_" + visualizer.name)
            };
        }), function (option) { return _this.visualizer.name === option.value; }, function (e) { return _this.setVisualizer(e.target.value); });
        toolbar.appendChild(selectWrapper);
        _super.prototype.createToolbarItems.call(this, toolbar);
    };
    return AlternativeVisualizersWrapper;
}(__WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a" /* VisualizerBase */]));



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementVisibility; });
var ElementVisibility;
(function (ElementVisibility) {
    ElementVisibility[ElementVisibility["Visible"] = 0] = "Visible";
    ElementVisibility[ElementVisibility["Invisible"] = 1] = "Invisible";
    ElementVisibility[ElementVisibility["PublicInvisible"] = 2] = "PublicInvisible";
})(ElementVisibility || (ElementVisibility = {}));


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return englishStrings; });
//Uncomment this line on creating a translation file
//import { localization } from "../localizationManager";
var englishStrings = {
    groupButton: "Group By Me",
    ungroupButton: "Ungroup By Me",
    selectButton: "Select Me",
    hideColumn: "Hide column",
    showColumn: "Show column",
    makePrivateColumn: "Make column private",
    makePublicColumn: "Make column public",
    moveToDetail: "Move to Detail",
    showAsColumn: "Show as Column",
    visualizer_text: "Texts in table",
    visualizer_wordcloud: "Wordcloud",
    chartType_bar: "Bar",
    chartType_stackedbar: "Stacked Bar",
    chartType_doughnut: "Doughnut",
    chartType_pie: "Pie",
    chartType_scatter: "Scatter",
    chartType_gauge: "Gauge",
    chartType_bullet: "Bullet",
    hideButton: "Hide",
    resetFilter: "Reset Filter",
    clearButton: "Clear",
    addElement: "Choose question to show...",
    defaultOrder: "Default",
    ascOrder: "Ascending",
    descOrder: "Descending",
    showMinorColumns: "Show minor columns"
};
//Uncomment these two lines on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
//localization.locales["en"] = englishStrings;
//localization.localeNames["en"] = "English";


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectBase__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooleanPlotly; });




var BooleanPlotly = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](BooleanPlotly, _super);
    function BooleanPlotly(targetElement, question, data, options) {
        var _this = _super.call(this, targetElement, question, data, options) || this;
        _this.targetElement = targetElement;
        _this.chartTypes = BooleanPlotly.types;
        _this.chartType = _this.chartTypes[0];
        return _this;
    }
    Object.defineProperty(BooleanPlotly.prototype, "booleanQuestion", {
        get: function () {
            return this.question;
        },
        enumerable: true,
        configurable: true
    });
    BooleanPlotly.prototype.patchConfigParameters = function (chartNode, traces, layout, config) {
        var colors = this.getColors();
        var boolColors = [
            BooleanPlotly.trueColor || colors[0],
            BooleanPlotly.falseColor || colors[1]
        ];
        if (this.chartType === "pie" || this.chartType === "doughnut") {
            traces.forEach(function (trace) {
                trace.marker.colors = boolColors;
            });
        }
        else if (this.chartType === "bar") {
            traces.forEach(function (trace) {
                trace.marker.color = boolColors;
            });
        }
    };
    BooleanPlotly.prototype.getSelectedItemByText = function (itemText) {
        var labels = this.getLabels();
        var values = this.getValues();
        return new __WEBPACK_IMPORTED_MODULE_1_survey_core__["ItemValue"](values[labels.indexOf(itemText)], itemText);
    };
    BooleanPlotly.prototype.getValues = function () {
        return [
            this.booleanQuestion.valueTrue !== undefined
                ? this.booleanQuestion.valueTrue
                : true,
            this.booleanQuestion.valueFalse !== undefined
                ? this.booleanQuestion.valueFalse
                : false
        ];
    };
    BooleanPlotly.prototype.getLabels = function () {
        var labels = this.getValues();
        if (this.booleanQuestion.labelTrue !== undefined) {
            labels[0] = this.booleanQuestion.labelTrue;
        }
        if (this.booleanQuestion.labelFalse !== undefined) {
            labels[1] = this.booleanQuestion.labelFalse;
        }
        return labels;
    };
    BooleanPlotly.prototype.getData = function () {
        var _this = this;
        var values = this.getValues();
        var trueCount = 0;
        var falseCount = 0;
        this.data.forEach(function (row) {
            var rowValue = row[_this.question.name];
            if (rowValue === values[0]) {
                trueCount++;
            }
            if (rowValue === values[1]) {
                falseCount++;
            }
        });
        return [[trueCount, falseCount]];
    };
    BooleanPlotly.trueColor = "";
    BooleanPlotly.falseColor = "";
    BooleanPlotly.types = ["pie", "bar", "doughnut"];
    return BooleanPlotly;
}(__WEBPACK_IMPORTED_MODULE_3__selectBase__["b" /* SelectBasePlotly */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("boolean", BooleanPlotly);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectBase__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixPlotly; });




var MatrixPlotly = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](MatrixPlotly, _super);
    function MatrixPlotly(targetNode, question, data, options) {
        var _this = _super.call(this, targetNode, question, data, options) || this;
        _this.chartTypes = MatrixPlotly.types;
        _this.chartType = _this.chartTypes[0];
        return _this;
    }
    MatrixPlotly.prototype.patchConfigParameters = function (chartNode, traces, layout, config) {
        var _this = this;
        var question = this.question;
        //var valueTitles = question.columns.map(column => column.text);
        layout.showlegend = true;
        if (this.chartType === "pie" || this.chartType === "doughnut") {
            layout.grid = { rows: 1, columns: traces.length };
        }
        else if (this.chartType === "stackedbar") {
            layout.height = undefined;
            layout.barmode = "stack";
        }
        else {
            layout.height = undefined;
        }
        question.columns.forEach(function (column, index) {
            if (_this.chartType === "pie" || _this.chartType === "doughnut") {
                traces[index].domain = { column: index };
            }
            else {
                traces[index].hoverinfo = "x+name";
                traces[index].marker.color = undefined;
                if (_this.chartType === "stackedbar") {
                    traces[index].type = "bar";
                    traces[index].name = column.text;
                    traces[index].width = 0.5 / traces.length;
                }
                else {
                    traces[index].name = column.text;
                    traces[index].width = 0.5 / traces.length;
                }
            }
        });
    };
    MatrixPlotly.prototype.valuesSource = function () {
        var question = this.question;
        return question.columns;
    };
    MatrixPlotly.prototype.getLabels = function () {
        var question = this.question;
        return question.rows.map(function (row) {
            return __WEBPACK_IMPORTED_MODULE_1_survey_core__["ItemValue"].getTextOrHtmlByValue(question.rows, row.value);
        });
    };
    MatrixPlotly.prototype.getData = function () {
        var _this = this;
        var question = this.question;
        var datasets = this.valuesSource().map(function (choice) {
            return question.rows.map(function (v) { return 0; });
        });
        this.data.forEach(function (rowData) {
            var questionValue = rowData[_this.question.name];
            if (!!questionValue) {
                question.rows.forEach(function (row, index) {
                    _this.getValues().forEach(function (val, dsIndex) {
                        if (questionValue[row.value] == val) {
                            datasets[dsIndex][index]++;
                        }
                    });
                });
            }
        });
        return datasets;
    };
    MatrixPlotly.types = ["bar", "stackedbar", "pie", "doughnut"];
    return MatrixPlotly;
}(__WEBPACK_IMPORTED_MODULE_3__selectBase__["b" /* SelectBasePlotly */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("matrix", MatrixPlotly);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizerBase__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualizationManager__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localizationManager__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GaugePlotly; });

var Plotly = __webpack_require__(14);




var GaugePlotly = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](GaugePlotly, _super);
    function GaugePlotly(targetElement, question, data, options) {
        var _this = _super.call(this, targetElement, question, data, options) || this;
        _this.targetElement = targetElement;
        _this.chartNode = document.createElement("div");
        _this.toolbarChangeHandler = function (e) {
            if (_this.chartType !== e.target.value) {
                _this.chartType = e.target.value;
                _this.update(_this.data);
            }
        };
        _this.chartTypes = GaugePlotly.types;
        _this.chartType = _this.chartTypes[0];
        return _this;
    }
    GaugePlotly.prototype.update = function (data) {
        if (data !== undefined) {
            this._result = undefined;
        }
        _super.prototype.update.call(this, data);
        this.destroy();
        this.createChart();
        this.invokeOnUpdate();
    };
    GaugePlotly.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        if (this.chartTypes.length > 1) {
            var selectWrapper = __WEBPACK_IMPORTED_MODULE_4__utils_index__["a" /* ToolbarHelper */].createSelector(toolbar, this.chartTypes.map(function (chartType) {
                return {
                    value: chartType,
                    text: __WEBPACK_IMPORTED_MODULE_3__localizationManager__["a" /* localization */].getString("chartType_" + chartType)
                };
            }), function (option) { return _this.chartType === option.value; }, this.toolbarChangeHandler);
            toolbar.appendChild(selectWrapper);
        }
        _super.prototype.createToolbarItems.call(this, toolbar);
    };
    GaugePlotly.prototype.destroy = function () {
        Plotly.purge(this.chartNode);
        this._result = undefined;
    };
    GaugePlotly.prototype.generateText = function (maxValue, minValue, stepsCount) {
        var texts = [];
        if (stepsCount === 5) {
            texts = [
                "very high (" + maxValue + ")",
                "high",
                "medium",
                "low",
                "very low (" + minValue + ")"
            ];
        }
        else {
            texts.push(maxValue);
            for (var i = 0; i < stepsCount - 2; i++) {
                texts.push("");
            }
            texts.push(minValue);
        }
        if (!!GaugePlotly.generateTextsCallback) {
            return GaugePlotly.generateTextsCallback(this.question, maxValue, minValue, stepsCount, texts);
        }
        return texts;
    };
    GaugePlotly.prototype.generateValues = function (maxValue, stepsCount) {
        var values = [];
        for (var i = 0; i < stepsCount; i++) {
            values.push(maxValue / stepsCount);
        }
        values.push(maxValue);
        return values;
    };
    GaugePlotly.prototype.generateColors = function (maxValue, minValue, stepsCount) {
        var palette = this.getColors();
        var colors = [];
        for (var i = 0; i < stepsCount; i++) {
            colors.push(palette[i]);
        }
        colors.push("rgba(255, 255, 255, 0)");
        return colors;
    };
    GaugePlotly.prototype.toPercentage = function (value, maxValue) {
        return (value / maxValue) * 100;
    };
    GaugePlotly.prototype.createChart = function () {
        var question = this.question;
        var rateValues = question.visibleRateValues;
        var maxValue = rateValues[rateValues.length - 1].value;
        var minValue = rateValues[0].value;
        var colors = this.generateColors(maxValue, minValue, GaugePlotly.stepsCount);
        var level = this.result;
        if (GaugePlotly.showAsPercentage) {
            level = this.toPercentage(level, maxValue);
            minValue = this.toPercentage(minValue, maxValue);
            maxValue = this.toPercentage(maxValue, maxValue);
        }
        var data = [
            {
                type: "indicator",
                mode: "gauge+number",
                gauge: {
                    axis: { range: [minValue, maxValue] },
                    shape: this.chartType,
                    bgcolor: "white",
                    bar: { color: colors[0] }
                },
                value: level,
                text: question.name,
                domain: { x: [0, 1], y: [0, 1] }
            }
        ];
        var height = 400;
        if (this.chartType === "bullet") {
            height = 250;
        }
        var layout = {
            width: 600,
            height: height,
            plot_bgcolor: this.backgroundColor,
            paper_bgcolor: this.backgroundColor
        };
        var config = {
            displayModeBar: false,
            staticPlot: true
        };
        this.chart = Plotly.newPlot(this.chartNode, data, layout, config);
    };
    GaugePlotly.prototype.renderContent = function (container) {
        this.createChart();
        container.appendChild(this.chartNode);
    };
    Object.defineProperty(GaugePlotly.prototype, "result", {
        get: function () {
            var _this = this;
            if (this._result === undefined) {
                var questionValues_1 = [];
                this.data.forEach(function (rowData) {
                    var questionValue = +rowData[_this.question.name];
                    if (!!questionValue) {
                        questionValues_1.push(questionValue);
                    }
                });
                this._result =
                    (questionValues_1 &&
                        questionValues_1.reduce(function (a, b) { return a + b; }, 0) / questionValues_1.length) ||
                        0;
                this._result = Math.ceil(this._result * 100) / 100;
            }
            return this._result;
        },
        enumerable: true,
        configurable: true
    });
    GaugePlotly.stepsCount = 5;
    GaugePlotly.types = ["gauge", "bullet"];
    GaugePlotly.showAsPercentage = false;
    return GaugePlotly;
}(__WEBPACK_IMPORTED_MODULE_1__visualizerBase__["a" /* VisualizerBase */]));

__WEBPACK_IMPORTED_MODULE_2__visualizationManager__["a" /* VisualizationManager */].registerVisualizer("rating", GaugePlotly);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectBase__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectBaseSortablePlotly; });




var SelectBaseSortablePlotly = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SelectBaseSortablePlotly, _super);
    function SelectBaseSortablePlotly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectBaseSortablePlotly.prototype.onChartTypeChanged = function () {
        this.setLabelsOrder("default");
        this.updateOrderSelector();
    };
    SelectBaseSortablePlotly.prototype.updateOrderSelector = function () {
        if (this.chartType == "bar") {
            this.choicesOrder.style.display = "inline-block";
        }
        else {
            this.choicesOrder.style.display = "none";
            this.choicesOrder.getElementsByTagName("select")[0].value = "default";
        }
    };
    SelectBaseSortablePlotly.prototype.createToolbarItems = function (toolbar) {
        var _this = this;
        if (this.chartTypes.length > 0) {
            this.choicesOrder = __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* ToolbarHelper */].createSelector(toolbar, [
                { text: __WEBPACK_IMPORTED_MODULE_3____["localization"].getString("defaultOrder"), value: "default" },
                { text: __WEBPACK_IMPORTED_MODULE_3____["localization"].getString("ascOrder"), value: "asc" },
                { text: __WEBPACK_IMPORTED_MODULE_3____["localization"].getString("descOrder"), value: "desc" }
            ], function (option) { return false; }, function (e) {
                _this.setLabelsOrder(e.target.value);
                _this.update(_this.data);
            });
            _super.prototype.createToolbarItems.call(this, toolbar);
            toolbar.appendChild(this.choicesOrder);
        }
    };
    return SelectBaseSortablePlotly;
}(__WEBPACK_IMPORTED_MODULE_1__selectBase__["b" /* SelectBasePlotly */]));

__WEBPACK_IMPORTED_MODULE_3____["VisualizationManager"].registerVisualizer("checkbox", SelectBaseSortablePlotly);
__WEBPACK_IMPORTED_MODULE_3____["VisualizationManager"].registerVisualizer("radiogroup", SelectBaseSortablePlotly);
__WEBPACK_IMPORTED_MODULE_3____["VisualizationManager"].registerVisualizer("dropdown", SelectBaseSortablePlotly);
__WEBPACK_IMPORTED_MODULE_3____["VisualizationManager"].registerVisualizer("imagepicker", SelectBaseSortablePlotly);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stopWords; });
var stopWords = new Array("a", "about", "above", "across", "after", "again", "against", "all", "almost", "alone", "along", "already", "also", "although", "always", "among", "an", "and", "another", "any", "anybody", "anyone", "anything", "anywhere", "are", "area", "areas", "around", "as", "ask", "asked", "asking", "asks", "at", "away", "b", "back", "backed", "backing", "backs", "be", "became", "because", "become", "becomes", "been", "before", "began", "behind", "being", "beings", "best", "better", "between", "big", "both", "but", "by", "c", "came", "can", "cannot", "case", "cases", "certain", "certainly", "clear", "clearly", "come", "could", "d", "did", "differ", "different", "differently", "do", "does", "done", "down", "down", "downed", "downing", "downs", "during", "e", "each", "early", "either", "end", "ended", "ending", "ends", "enough", "even", "evenly", "ever", "every", "everybody", "everyone", "everything", "everywhere", "f", "face", "faces", "fact", "facts", "far", "felt", "few", "find", "finds", "first", "for", "four", "from", "full", "fully", "further", "furthered", "furthering", "furthers", "g", "gave", "general", "generally", "get", "gets", "give", "given", "gives", "go", "going", "good", "goods", "got", "great", "greater", "greatest", "group", "grouped", "grouping", "groups", "h", "had", "has", "have", "having", "he", "her", "here", "herself", "high", "high", "high", "higher", "highest", "him", "himself", "his", "how", "however", "i", "if", "important", "in", "interest", "interested", "interesting", "interests", "into", "is", "it", "its", "itself", "j", "just", "k", "keep", "keeps", "kind", "knew", "know", "known", "knows", "l", "large", "largely", "last", "later", "latest", "least", "less", "let", "lets", "like", "likely", "long", "longer", "longest", "m", "made", "make", "making", "man", "many", "may", "me", "member", "members", "men", "might", "more", "most", "mostly", "mr", "mrs", "much", "must", "my", "myself", "n", "necessary", "need", "needed", "needing", "needs", "never", "new", "new", "newer", "newest", "next", "no", "nobody", "non", "noone", "not", "nothing", "now", "nowhere", "number", "numbers", "o", "of", "off", "often", "old", "older", "oldest", "on", "once", "one", "only", "open", "opened", "opening", "opens", "or", "order", "ordered", "ordering", "orders", "other", "others", "our", "out", "over", "p", "part", "parted", "parting", "parts", "per", "perhaps", "place", "places", "point", "pointed", "pointing", "points", "possible", "present", "presented", "presenting", "presents", "problem", "problems", "put", "puts", "q", "quite", "r", "rather", "really", "right", "right", "room", "rooms", "s", "said", "same", "saw", "say", "says", "second", "seconds", "see", "seem", "seemed", "seeming", "seems", "sees", "several", "shall", "she", "should", "show", "showed", "showing", "shows", "side", "sides", "since", "small", "smaller", "smallest", "so", "some", "somebody", "someone", "something", "somewhere", "state", "states", "still", "still", "such", "sure", "t", "take", "taken", "than", "that", "the", "their", "them", "then", "there", "therefore", "these", "they", "thing", "things", "think", "thinks", "this", "those", "though", "thought", "thoughts", "three", "through", "thus", "to", "today", "together", "too", "took", "toward", "turn", "turned", "turning", "turns", "two", "u", "under", "until", "up", "upon", "us", "use", "used", "uses", "v", "very", "w", "want", "wanted", "wanting", "wants", "was", "way", "ways", "we", "well", "wells", "went", "were", "what", "when", "where", "whether", "which", "while", "who", "whole", "whose", "why", "will", "with", "within", "without", "work", "worked", "working", "works", "would", "x", "y", "year", "years", "yet", "you", "young", "younger", "youngest", "your", "yours", "z");


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ })
/******/ ]);
});