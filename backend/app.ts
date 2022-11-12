import config from "./config";
import HttpService from "./services/HttpService";
import settings from "./utils/settings";

/**
 * This file is responsible for the init of the backend.
 * @class HttpService - Application bootstrap file
 */
HttpService.setSettings(settings);
HttpService.initApp(config.port);
HttpService.useApi();
