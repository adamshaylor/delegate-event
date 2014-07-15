(function () {


	'use strict';


	angular.module('delegateEvent', []);


	angular.module('delegateEvent').directive('delegateEvent', function () {


		var delegateEvent = {};


		delegateEvent.restrict = 'A';


		delegateEvent.link = function (scope, element, attributes) {


			scope.$watch(getDelegates, handleChangedDelegates, true);


			function getDelegates () {

				var delegationAttributeRegex = /^(data\-)?(on\-)([a-zA-Z]+)$/,
					// One for the whole expression, one for `on-`, and one for the event name
					minimumMatchCount = 3,
					delegates = [];

				angular.forEach(attributes, function (attributeValue, attributeName) {

					var originalName = attributes.$attr[attributeName],
						matches = originalName ? originalName.match(delegationAttributeRegex) : null,
						eventName,
						eventHandler;

					if (!matches || matches.length < minimumMatchCount) {
						return;
					}

					eventName = matches[matches.length - 1];
					eventHandler = scope.$eval(attributeValue);

					if (!angular.isFunction(eventHandler)) {
						return;
					}

					delegates.push({
						eventName: eventName,
						filter: attributes[attributeName + 'Filter'],
						handler: function () {
							var eventArguments = arguments;
							scope.$apply(function() {
								eventHandler.apply(element, eventArguments);
							});
						}
					});

				});

				return delegates;

			}


			function handleChangedDelegates (newDelegates, oldDelegates) {

				if (oldDelegates && oldDelegates.length) {

					angular.forEach(oldDelegates, function (oldDelegate) {

						if (oldDelegate.filter && oldDelegate.filter.length) {
							element.off(oldDelegate.eventName, oldDelegate.filter, oldDelegate.handler);
						}

						else {
							element.off(oldDelegate.eventName, oldDelegate.handler);
						}

					});
				}


				if (newDelegates && newDelegates.length) {

					angular.forEach(newDelegates, function (newDelegate) {

						if (newDelegate.filter && newDelegate.filter.length) {
							element.on(newDelegate.eventName, newDelegate.filter, newDelegate.handler);
						}

						else {
							element.on(newDelegate.eventName, newDelegate.handler);
						}

					});

				}

			}


		};


		return delegateEvent;


	});


})();