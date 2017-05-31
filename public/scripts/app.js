/**
 * Created by fabioalmeida on 9/1/16.
 */
require('../stylesheets/smarttriage.less');
require('../stylesheets/font-awesome-4.6.3/css/font-awesome.min.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');

var clipboard = require('./bower_components/clipboard/dist/clipboard.min');
define([
    'angular',
    './bower_components/clipboard/dist/clipboard.min',
    './directives/main',
    './controllers/main',
    './filters/main',
    './services/main',
    './bower_components/ngclipboard/dist/ngclipboard.min',
    '../../modules/SmartTriageAT/_dist/index',
    '../../modules/abtest/_dist/index',
    '../../modules/smartTriageV3/_dist/index',
    '../../modules/smartTriageV4/_dist/index',
    './routes'
], function ( angular){
    var triageApp = angular.module("triageApp",['app.routes','app.directives','app.controllers','app.filters','app.services','ngclipboard'
        ,'SmartTriageAT'
        ,'abtest'
        ,'smartTriageV3'
        ,'smartTriageV4'
    ]);
        return triageApp;

});
