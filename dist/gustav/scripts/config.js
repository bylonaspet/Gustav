"use strict";

 angular.module("gustav.config", [])

.constant("ENV", {
  "name": "test",
  "apiEndpoint": "https://www.csas.cz",
  "apiKey": "0bca73a4-0ebb-4837-a841-7dcb189e9c02",
  "authToken": "demo_b8d3fb54a86b63641727eba34fd638ef",
  "profileApiPath": "/webapi/api/v1/netbanking/my/profile",
  "accountsApiPath": "/webapi/api/v1/netbanking/my/accounts",
  "cardsApiPath": "/webapi/api/v1/netbanking/my/cards",
  "historyApiPath": "/webapi/api/v1/netbanking/my/accounts/:account/transactions?dateStart=:from&dateEnd=:to",
  "buildingSavingsApiPath": "/webapi/api/v1/netbanking/my/contracts/buildings"
})

;