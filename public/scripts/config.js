/*
 /* global requirejs, define */
/* jshint camelcase: false */
/* jshint unused: false */
/**
 * This file sets up the basic module libraries you'll need
 * for your application.
 */
'use strict';

requirejs.onError = function (err) {

    if (err.requireType === 'timeout') {
        console.error('modules: ' + err.requireModules);
    }

    if(typeof err.stack !== 'undefined')
        console.error(err.stack);

    throw err;
};
/**
 * RequireJS Config
 * This is configuration for the entire application.
 */
require.config({
    enforceDefine: false,
    xhtml: false,
    waitSeconds: 12,
    config: {
        text: {
            env: 'xhr'
        }
    },
    paths: {
        angular:'./bower_components/angular/angular.min',
        less:'./bower_components/less/dist/less.min',
        brandkit:'./bower_components/brandkit/js/iidx-brandkit',
        'angular-route': './bower_components/angular-route/angular-route.min',
        'angular-resource': './bower_components/angular-resource/angular-resource.min',
        'angular-ui-router': './bower_components/angular-ui-router/release/angular-ui-router.min',
        jquery:'./bower_components/jquery/dist/jquery.min',
        config:'./config',
        app:'./app',
        clipboard:'./bower_components/clipboard/dist/clipboard.min',
        ngclipboard:'./bower_components/ngclipboard/dist/ngclipboard.min',

        //Angular App Modules
        'directives-module': 'directives/module',
        'controllers-module': 'controllers/module',
        'filters-module': 'filters/module',
        'services-module': 'services/module',
        'routes-module': 'routes',

        // Add Ons
        'spinner':'./bower_components/spinjs/dist/spin.min',

        // Modules
        'SmartTriageAT':'../../modules/SmartTriageAT/_dist/index'
    },
    /*
     * IIDx use ge-bootstrap internally in their system
     * The follow section use ge-bootstrap map to remap ge-bootstrap path to the path alias above
     * Therefore all IIDx internal ge-bootstrap reference link will not be broken
     */
    map: {
//        'ge-bootstrap': {
//            'bootstrap/bootstrap-affix': 'bootstrap-affix',
//            'bootstrap/bootstrap-alert': 'bootstrap-alert',
//            'bootstrap/bootstrap-button': 'bootstrap-button',
//            'bootstrap/bootstrap-carousel': 'bootstrap-carousel',
//            'bootstrap/bootstrap-collapse': 'bootstrap-collapse',
//            'bootstrap/bootstrap-dropdown': 'bootstrap-dropdown',
//            'bootstrap/bootstrap-modal': 'bootstrap-modal',
//            'bootstrap/bootstrap-popover': 'bootstrap-popover',
//            'bootstrap/bootstrap-scrollspy': 'bootstrap-scrollspy',
//            'bootstrap/bootstrap-tab': 'bootstrap-tab',
//            'bootstrap/bootstrap-tooltip': 'bootstrap-tooltip',
//            'bootstrap/bootstrap-transition': 'bootstrap-transition',
//            'bootstrap/bootstrap-typeahead': 'bootstrap-typeahead'
//        }
    },
    priority: [
        'jquery',
        'angular',
        'angular-resource',
        'angular-route',
        'bootstrap'
    ],
    shim: {
//        vruntime: {
//            deps: ['jquery', 'angular']
//        },
        'angular': {
            deps: [],
            exports: 'angular'
        },
        'clipboard': {
            deps: [],
            exports: 'clipboard'
        },
        'ngclipboard': ['angular','clipboard'],
        'angular-route': ['angular'],
        'angular-resource': ['angular', 'angular-route', 'angular-ui-router'],
//        'angular-mocks': {
//            deps: ['angular', 'angular-route', 'angular-resource', 'angular-ui-router'],
//            exports: 'mock'
//        },
        'angular-ui-router': ['angular'],
//        'directives/v-runtime.directives': {
//            deps: ['angular']
//        },
//        underscore: {
//            exports: '_'
//        },
//        /*
//         * IIDx shim
//         * This section shim require for IIDx
//         */
//        OpenLayers: {
//            exports: 'OpenLayers'
//        },
//        'jquery-csv': [
//            'jquery'
//        ],
//        'bootstrap-switch': ['jquery'],
//        'bootstrap-timepicker': ['jquery'],
//        'col-reorder-amd': {
//            deps: ['jquery', 'datatables']
//        },
//        'datagrids/datagrids-col-vis': {
//            deps: ['jquery', 'datatables']
//        },
//        'bootstrap-transition': {
//            deps: ['jquery'],
//            exports: 'bootstrap-transition'
//        },
//        'bootstrap-affix': ['jquery'],
//        'bootstrap-alert': ['jquery'],
//        'bootstrap-button': ['jquery'],
//        'bootstrap-carousel': ['jquery', 'bootstrap-transition'],
//        'bootstrap-collapse': ['jquery', 'bootstrap-transition'],
//        'bootstrap-dropdown': ['jquery'],
//        'bootstrap-modal': {
//            deps: ['jquery', 'bootstrap-transition'],
//            exports: '$.fn.modal'
//        },
//        'bootstrap-popover': ['jquery', 'bootstrap-tooltip'],
//        'bootstrap-scrollspy': ['jquery'],
//        'bootstrap-tab': ['jquery'],
//        'bootstrap-typeahead': ['jquery'],
//        'bootstrap-tooltip': {
//            deps: ['jquery', 'bootstrap-transition'],
//            exports: 'tooltip'
//        },
//
//        'bootstrap-hover-dropdown': {
//            deps : [ 'jquery' ],
//            exports : 'bootstrap-hover-dropdown'
//        },
//        //Add depends to bootstrapper to load the angular app
        bootstrapper: {
            deps: [
                'app',
                'directives-module',
                'filters-module',
                'services-module',
                'controllers-module',
                'routes'
            ]
        }
//
//        'datetime-moment': {
//            deps : [ 'jquery' ],
//            exports : 'datetime-moment'
//        },
    }
});
