

(function(dataController) {

	dataController.init = function(app) {
		app.get('/data', function(req, res) {
		  	res.send({  
				"id":"58fb7791-3ba2-482b-9dd3-6a9a4bf6fdfb",
				"clazz":"Account",
				"title":"Default",
				"resultsPerPage":15,
				"defaultPage":true,
				"defaultReport": "accountDetailReport",
				"isShared": true,
				"isDefault": false,
				"fields":[  
					{  
						"fieldName": "Test Field 1",
						"sortOrder": 1,
						"sortDirection": "1",
						"textAlignment": "center",
						"visibleOrder": 1,
						"id":"a990ccc2-0edd-406c-a1c5-fd952860d353",
						"property":"id",
						"linkField":false,
						"displayOrder":0,
						"visible":false,
						"includeInQuickSearch":true,
						"dataType":"STRING"
					},
					{  
						"fieldName": "Test Field 2",
						"sortOrder": 2,
						"sortDirection": "1",
						"textAlignment": "right",
						"visibleOrder": 2,
						"id":"5421c31a-3e56-4365-bd35-286ae53f12d5",
						"property":"defaultIdentifier",
						"nestedProperty":"value",
						"linkField":false,
						"displayOrder":1,
						"visible":true,
						"includeInQuickSearch":true,
						"dataType":"STRING"
					},
					{  
						"fieldName": "Test Field 3",
						"sortOrder": 3,
						"sortDirection": "0",
						"textAlignment": "left",
						"visibleOrder": 3,
						"id":"b8968e59-3fd9-41c6-9c2e-8f0fa590ea26",
						"property":"owner",
						"linkField":true,
						"linkLocation":"/internal_entity/View.action",
						"linkProperty":"id",
						"linkPropertyName":"internalEntity",
						"linkLabelProperty":"entityName",
						"displayOrder":2,
						"visible":true,
						"includeInQuickSearch":false,
						"dataType":"BASE"
					},
					{  
						"fieldName": "Test Field 4",
						"sortOrder": 4,
						"sortDirection": "0",
						"textAlignment": "center",
						"visibleOrder": 4,
						"id":"ac7362ae-14bf-4058-b687-304d0ab85f4a",
						"property":"institution",
						"linkField":true,
						"linkLocation":"/fin_institution/View.action",
						"linkProperty":"id",
						"linkPropertyName":"institution",
						"linkLabelProperty":"institutionName",
						"displayOrder":3,
						"visible":true,
						"includeInQuickSearch":false,
						"dataType":"BASE"
					},
					{  
						"fieldName": "Test Field 5",
						"sortOrder": 5,
						"sortDirection": "0",
						"textAlignment": "left",
						"visibleOrder": 5,
						"id":"ab4fa266-5930-4e4f-b44c-1c4295d33950",
						"property":"businessUnit",
						"linkField":true,
						"linkLocation":"/businessunit/View.action",
						"linkProperty":"id",
						"linkPropertyName":"businessUnit",
						"linkLabelProperty":"name",
						"displayOrder":4,
						"visible":false,
						"includeInQuickSearch":false,
						"dataType":"BASE"
					},
					{  
						"fieldName": "Test Field 6",
						"sortOrder": 6,
						"sortDirection": "0",
						"textAlignment": "right",
						"visibleOrder": 6,
						"id":"af5858b4-8e67-44f2-a975-97d6faa60715",
						"property":"currency",
						"nestedProperty":"displayValue",
						"linkField":false,
						"displayOrder":5,
						"visible":false,
						"includeInQuickSearch":false,
						"dataType":"MANAGEDMENU",
						"managedMenuName":"Currencies"
					},
					{  
						"fieldName": "Test Field 7",
						"sortOrder": 7,
						"sortDirection": "0",
						"textAlignment": "center",
						"visibleOrder": 7,
						"id":"0ecb9258-0747-4bec-921d-30909611539a",
						"property":"location",
						"nestedProperty":"locationName",
						"linkField":false,
						"displayOrder":6,
						"visible":true,
						"includeInQuickSearch":true,
						"dataType":"STRING"
					},
					{  
						"fieldName": "Test Field 8",
						"sortOrder": 8,
						"sortDirection": "1",
						"textAlignment": "center",
						"visibleOrder": 8,
						"id":"58c15f07-525c-4e74-aba8-db6e58ba3f3f",
						"property":"accountType",
						"nestedProperty":"displayValue",
						"linkField":false,
						"displayOrder":7,
						"visible":true,
						"includeInQuickSearch":false,
						"dataType":"MANAGEDMENU_NO_DESC",
						"managedMenuName":"Account Types"
					}
				]
			})
		});
	}
})(module.exports)