import {actionExtensionIconClicked, actionPageLoaded} from "./tab/triggers";
// import infos from "./infos";

main();

async function main() {
  // console.log(infos.APP_MODE)
  // console.log("loaded")
  chrome.storage.local.get(['isInjecting'], async function (result) {
    result.isInjecting ? await actionExtensionIconClicked() : await actionPageLoaded();
    await chrome.storage.local.set({isInjecting: false});
  });
}