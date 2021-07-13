# cosmos-umbrella
[![Build status](https://dev.azure.com/mapankra/CosmosDB%20OData%20SAP%20umbrella/_apis/build/status/CosmosDB%20OData%20SAP%20umbrella-CI)](https://dev.azure.com/mapankra/CosmosDB%20OData%20SAP%20umbrella/_build/latest?definitionId=13)
[![Build status](https://vsrm.dev.azure.com/mapankra/_apis/public/Release/badge/cf76d14c-d6ac-4c79-90d3-5c289a7b68c2/1/1)](https://dev.azure.com/mapankra/CosmosDB%20OData%20SAP%20umbrella/_release/latest?definitionId=1)

A SAPUI5 freestyle application to consume data from CosmosDB via OData.

Additional Resources |
--- |
[blog on the SAP community](https://blogs.sap.com/2021/06/11/sap-where-can-i-get-toilet-paper-an-implementation-of-the-geodes-pattern-with-s4-btp-and-azure-cosmosdb/) |
[OData web api project](https://github.com/MartinPankraz/AzCosmosDB-OData-Shim) |
[SAP CAP app](https://github.com/MartinPankraz/sap-cap-cosmos-app) |
[CI/CD pipelines on AzDevOps](https://dev.azure.com/mapankra/CosmosDB%20OData%20SAP%20umbrella) |
<br>

![geode](img/geode-pattern.png)

## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Mon Jun 07 2021 12:40:58 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>@sap/generator-fiori|
|**App Generator Version**<br>1.2.0|
|**Generation Platform**<br>SAP Business Application Studio|
|**Floorplan Used**<br>3worklistodatav4|
|**Service Type**<br>OData Url|
|**Service URL**<br>https://sap-cosmos-global.azurefd.net/api/odata
|**Module Name**<br>cosmos-umbrella|
|**Application Title**<br>SAPUI5-CosmosDB-umbrella|
|**Namespace**<br>azure.odata.cosmos.example|
|**UI5 Theme**<br>sap_fiori_3|
|**UI5 Version**<br>Latest|

## Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite. In order to launch the generated app, simply right-click the webapp folder -> Preview application -> choose flp for Fiori launchpad env or noflp for Index.html only.

    ![preview wizard](img/BAS-app-startup.png)
-   Alternatively run the following command from the Terminal from the generated app root folder:

```
    npm start
```

- It is also possible to run the application using mock data that reflects the OData Service URL supplied during application generation.  In order to run the application with Mock Data, run the following from the generated app root folder:

```
    npm run start-mock
```
The preview application option shows the mock commands too

## Additional resoueces
I found the SAP cloud SDK [docs](https://sap.github.io/cloud-sdk/docs/js/guides/bas-external-system/) useful to understand the destinations setup for SAP BAS to reach FrontDoor and eventually the AppService for OData and CosmosDB.
