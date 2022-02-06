import config from "./config";
import HttpService from "./services/HttpService";
import settings from "./utils/settings";

HttpService.setSettings(settings);
HttpService.initApp(config.port);
HttpService.useApi();
