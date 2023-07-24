const webdriver = require("selenium-webdriver");

const { Builder, By, until } = webdriver;
const { until: untilCondition } = require("selenium-webdriver/lib/until");
const fs = require("fs");

async function runTest() {
  const driver = new Builder().forBrowser("firefox").build();
  const columns = [
    {
      parent: null,
      type: "find",
      by: "id",
      value: "hcms",
      name: "hcms",
      sleep: "fast",
    },
    {
      parent: "hcms",
      name: "open-acordion-client",
      type: "find",
      method: "click",
      by: "xpath",
      value:
        "/html/body/div[1]/div[1]/div[2]/div/div[1]/div/div/div/div[2]/div/div[3]/button",
      sleep: "fast",
    },
    {
      parent: "open-acordion-client",
      name: "a-open-page-client",
      type: "find",
      method: "click",
      by: "xpath",
      value:
        "/html/body/div[1]/div[1]/div[2]/div/div[1]/div/div/div/div[2]/div/div[3]/div/div/div/div/div/div/a",
      sleep: "slow",
    },
    {
      parent: "a-open-page-client",
      name: "btn-open-add-client",
      type: "find",
      method: "click",
      by: "id",
      value: "add-new-client",
      sleep: "slow",
    },
    {
      parent: "btn-open-add-client",
      name: "add_id",
      type: "find",
      by: "id",
      value: "client_id",
      method: "sendKeys",
      keysValue: "iniBolehDiHapus",
    },
    {
      parent: "btn-open-add-client",
      name: "open_up_component_select_scope",
      type: "find",
      by: "xpath",
      value:
        "/html/body/div[1]/div[2]/div/div/div/div[4]/div/div[3]/div[2]/button",
      method: "click",
      sleep: "slow",
    },
    {
      parent: "btn-open-add-client",
      name: "slect_btn_basic_mobile",
      type: "find",
      by: "id",
      value: "btn_basic_mobile",
      method: "click",
      sleep: "slow",
    },
    {
      parent: "btn-open-add-client",
      name: "input_filter_service",
      type: "find",
      by: "id",
      value: "f_scope_by_service_name",
      method: "sendKeys",
      keysValue: "testing",
      sleep: "slow",
    },
    {
      parent: "btn-open-add-client",
      name: "click_search_button",
      type: "find",
      method: "click",
      by: "xpath",
      value: "/html/body/div[3]/div[3]/div/div[3]/form/div/div[2]/button[1]",
      sleep: "slow",
    },
    {
      parent: "btn-open-add-client",
      name: "select_search_service_result",
      type: "find",
      method: "click",
      by: "id",
      value: "btn_testinghapus_initesting",
      sleep: "slow",
    },

    {
      parent: "btn-open-add-client",
      name: "close_modal",
      method: "click",
      type: "find",
      by: "xpath",
      value: "/html/body/div[3]/div[3]/div/div[1]/button",
      sleep: "fast",
    },
    {
      parent: "btn-open-add-client",
      name: "submit_form",
      method: "click",
      type: "find",
      by: "xpath",
      value: "/html/body/div[1]/div[2]/div/div/div/div[4]/div/button",
      sleep: "medium",
    },
    {
      parent: "btn-open-add-client",
      name: "confirm_submit",
      method: "click",
      type: "find",
      by: "xpath",
      value: "/html/body/div[3]/div[3]/div/div/button[2]",
      sleep: "medium",
    },

    {
      parent: "confirm_submit",
      name: "back_to_list_client",
      method: "click",
      type: "find",
      by: "xpath",
      value:
        "/html/body/div[1]/div[2]/div/div/div/div[2]/div/div/div[2]/button",
      sleep: "slow",
    },

    {
      parent: "confirm_submit",
      name: "open_filter_input",
      method: "click",
      type: "find",
      by: "xpath",
      value:
        "/html/body/div[1]/div[2]/div/div/div/div[4]/div/div[1]/div[1]/div[1]",
      sleep: "superSlow",
    },

    {
      parent: "back_to_list_client",
      name: "fill_input_f_client",
      method: "click",
      type: "find",
      by: "id",
      value: "f_client",
      method: "sendKeys",
      keysValue: "iniBolehDiHapus",
      sleep: "medium",
    },

    {
      parent: "back_to_list_client",
      name: "click_button_search_f_client",
      method: "click",
      type: "find",
      by: "xpath",
      value:
        "/html/body/div[1]/div[2]/div/div/div/div[4]/div/div[1]/div[2]/div/div/div/div/div/div[1]/form/div/div[2]/button[1]",
      sleep: "medium",
    },

    {
      parent: "click_button_search_f_client",
      name: "select_data_to_be_deleted",
      method: "mouseDown",
      type: "find",
      by: "id",
      value: "ini-id-boss",
      sleep: "slow",
    },
    {
      parent: "click_button_search_f_client",
      name: "click_btn_delete",
      method: "click",
      type: "find",
      by: "xpath",
      value: "/html/body/div[3]/div[3]/ul/li[2]",
      sleep: "fast",
    },
    {
      parent: "click_button_search_f_client",
      name: "confirm_btn_delete",
      method: "click",
      type: "find",
      by: "xpath",
      value: "/html/body/div[4]/div[3]/div/div/button[2]",
      sleep: "fast",
    },
  ];

  let dataParent = [];
  let sleepTime = {
    superSlow: 5000,
    slow: 2000,
    medium: 1500,
    fast: 1000,
  };

  try {
    await driver.get("http://127.0.0.1:8084");
    for (let arrColumn = 0; arrColumn < columns.length; arrColumn++) {
      const command = columns[arrColumn];
      if (command.sleep) {
        await driver.sleep(sleepTime[command.sleep]);
      }

      if (command.type == "find") {
        if (command.parent == null) {
          dataParent[command.name] = driver
            .findElement(By[command.by](command.value))
            .click();
        } else {
          dataParent[command.name] = dataParent[command.parent].then(() => {
            return driver
              .wait(until.elementLocated(By[command.by](command.value)))
              .then(async (elementRes) => {
                driver.executeScript(() => {
                  const element = arguments[0];
                  element.classList.add("select-click");
                  setTimeout(function () {
                    element.classList.remove("select-click");
                  }, 1000);
                }, elementRes);

                if (command.method == "sendKeys") {
                  await elementRes.sendKeys(command.keysValue);
                  await driver.sleep(300);
                  const screenshotData = await driver.takeScreenshot();
                  // Menyimpan tangkapan layar ke file
                  fs.writeFileSync(
                    `${command.name}.png`,
                    screenshotData,
                    "base64"
                  );
                }

                if (command.method == "mouseDown") {
                  const actions = driver.actions({ async: true });
                  await actions.move({ origin: elementRes }).press().perform();
                }
                if (command.method == "click") {
                  await driver.executeScript(
                    "arguments[0].click();",
                    elementRes
                  );
                }
              });
          });
        }
      }
      console.log(dataParent);
    }
  } catch (error) {
    console.error("Pengujian gagal:", error);
  } finally {
    driver.sleep(5000).then(() => {
      driver.quit();
    });
  }
}

runTest();
