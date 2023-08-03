import {autoScrapOnLoad, launchExport} from "./activeTab/scraper/scraper";
import {improveUI} from "./activeTab/uiEnhancer/uiEnhancer";

if (window.isInjecting) {
  launchExport();
} else {
  autoScrapOnLoad();
  improveUI();
}

