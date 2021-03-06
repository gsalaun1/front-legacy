/*
* Copyright (c) 2016 BreizhCamp
* [http://breizhcamp.org]
*
* This file is part of CFP.io.
*
* CFP.io is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as
* published by the Free Software Foundation, either version 3 of the
* License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <http://www.gnu.org/licenses/>.
*/
'use strict';
/*
No ng-app attribute in index.html. Config is retrieved from backend then Angular app is bootstrapped.
*/
(function(window, document) {

    var config = {
        apiBaseUrl: 'https://api.cfp.io/api',
        authServer: 'https://auth.cfp.io'
    };
    window.deferredBootstrapper.bootstrap({
        element: document.body,
        module: 'CallForPaper',
        resolve: {
            AppConfig: ['$http', function($http) {
                return $http.get(config.apiBaseUrl + '/application').then(function(response) {
                    response.data.apiBaseUrl = config.apiBaseUrl;
                    response.data.authServer = config.authServer;
                    return response.data;
                });
            }]
        }
    });
})(window, window.document);
