var formObj = {
    "type": "form",
    "tags": [],
    "access": [
      {
        "roles": [
          "5a05516e35677f0001aeef6f",
          "5a05516e35677f0001aeef70",
          "5a05516e35677f0001aeef71"
        ],
        "type": "read_all"
      }
    ],
    "submissionAccess": [],
    "owner": "594fd15f7684cc005c2280ae",
    "components": [
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [
          {
            "hideLabel": false,
            "clearOnHide": false,
            "columns": [
              {
                "pull": 0,
                "push": 0,
                "offset": 0,
                "width": 6,
                "components": [
                  {
                    "hideLabel": false,
                    "lockKey": true,
                    "properties": {
                      "formhelp": "This example shows how to add two numbers",
                      "fieldhelp": "The first number to add",
                      "elearninglink": "https://en.wikipedia.org/wiki/Operation_(mathematics)",
                      "elearningimagelink": "http://www.sparklebox.co.uk/wp-content/uploads/1-1231.jpg",
                      "processimagelink": "https://i.stack.imgur.com/MjNuE.gif",
                      "processlink": "https://stackoverflow.com/questions/12256948/bitwise-operations-to-add-two-numbers"
                    },
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    },
                    "tags": [],
                    "type": "number",
                    "validate": {
                      "required": false,
                      "min": 0,
                      "max": 9999,
                      "step": "any",
                      "integer": "",
                      "multiple": "",
                      "custom": ""
                    },
                    "clearOnHide": true,
                    "hidden": false,
                    "persistent": true,
                    "protected": false,
                    "defaultValue": "",
                    "suffix": "",
                    "prefix": "",
                    "placeholder": "",
                    "key": "a",
                    "label": "Number 1",
                    "inputType": "number",
                    "tableView": true,
                    "input": true,
                    "labelPosition": "top"
                  }
                ]
              },
              {
                "pull": 0,
                "push": 0,
                "offset": 0,
                "width": 6,
                "components": [
                  {
                    "hideLabel": false,
                    "lockKey": true,
                    "properties": {
                      "elearninglink": "https://en.wikipedia.org/wiki/Operation_(mathematics)",
                      "elearningimagelink": "http://www.sparklebox.co.uk/wp-content/uploads/1-1231.jpg",
                      "fieldhelp": "The second number to add",
                      "formhelp": "This example shows how to add two numbers",
                      "processimagelink": "https://i.stack.imgur.com/MjNuE.gif",
                      "processlink": "https://stackoverflow.com/questions/12256948/bitwise-operations-to-add-two-numbers"
                    },
                    "conditional": {
                      "show": "",
                      "when": null,
                      "eq": ""
                    },
                    "tags": [],
                    "type": "number",
                    "validate": {
                      "required": false,
                      "min": 0,
                      "max": 9999,
                      "step": "any",
                      "integer": "",
                      "multiple": "",
                      "custom": ""
                    },
                    "clearOnHide": true,
                    "hidden": false,
                    "persistent": true,
                    "protected": false,
                    "defaultValue": "",
                    "suffix": "",
                    "prefix": "",
                    "placeholder": "",
                    "key": "b",
                    "label": "Number 2",
                    "inputType": "number",
                    "tableView": true,
                    "input": true,
                    "labelPosition": "top"
                  }
                ]
              }
            ],
            "properties": {
              "": ""
            },
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "tags": [],
            "type": "columns",
            "key": "columns",
            "tableView": false,
            "input": false
          },
          {
            "hideLabel": false,
            "custom": "function addtwonumbers(url,formdata){\n   executeAjaxRequestWithAdalLogic(ADAL.config.clientId,addtwonumbersnoadal,url,formdata);\n}\n\nfunction addtwonumbersnoadal(token,url,formdata) {\n   var settings = {\n     \"crossDomain\": true,     \n     \"url\": url,\n     \"timeout\":30000,\n     \"method\": \"POST\",\n     \"headers\": {\n       \"content-type\": \"application/json\",\n       \"authorization\": \"Bearer \"+token,\n       \"cache-control\": \"no-cache\"\n     },\n     \"data\": JSON.stringify(formdata),\n     \"dataType\": 'json',\n     \"contentType\": 'application/json'                          \n   }\n\n   $.ajax(settings).done(function (data,textStatus,request) {\n      document.getElementById('mymessage').innerHTML='Calculation successfully performed!';\n      //console.log('data='+JSON.stringify(data));\n      //console.log('formdata='+JSON.stringify(formdata));\n      var datamerged = $.extend(formdata.data,data.data);\n      var datamergedstring = JSON.stringify(datamerged);\n      //console.log('datamerged='+datamergedstring);\n      var initjson = JSON.parse('{\"data\":'+datamergedstring+'}');\n      \n      form.submission = initjson;      \n   }).fail(function (err, textStatus, errorThrown) {\n      document.getElementById('mymessage').innerHTML='Failed to calculate two numbers!';\n      console.log(\"AJAX REQUEST FAILED:\"+err.toString()+',textStatus='+textStatus+', errorThrown='+errorThrown+\", url=\"+url+\",formdata=\"+(formdata!=null ? JSON.stringify(formdata) : null));\n      alert(\"AJAX REQUEST FAILED:\"+err.toString()+',textStatus='+textStatus+', errorThrown='+errorThrown+\", url=\"+url+\",formdata=\"+(formdata!=null ? JSON.stringify(formdata) : null));\n   });\n}\n\naddtwonumbers(form.submission.data['API_add_url'],{\"data\":form.submission.data});",
            "input": true,
            "label": "Add two numbers",
            "tableView": false,
            "key": "addtwonumbers",
            "size": "md",
            "leftIcon": "",
            "rightIcon": "",
            "block": false,
            "action": "custom",
            "disableOnInvalid": false,
            "theme": "primary",
            "type": "button",
            "tags": [],
            "conditional": {
              "eq": "",
              "when": null,
              "show": ""
            },
            "properties": {
              "": ""
            },
            "event": "add2numbers",
            "lockKey": true
          },
          {
            "hideLabel": false,
            "input": true,
            "tableView": true,
            "inputType": "number",
            "label": "Result",
            "key": "c",
            "placeholder": "",
            "prefix": "",
            "suffix": "",
            "defaultValue": "",
            "protected": false,
            "persistent": true,
            "hidden": false,
            "clearOnHide": true,
            "validate": {
              "custom": "",
              "multiple": "",
              "integer": "",
              "step": "any",
              "max": "",
              "min": "",
              "required": false
            },
            "type": "number",
            "tags": [],
            "conditional": {
              "eq": "",
              "when": null,
              "show": ""
            },
            "properties": {
              "": ""
            },
            "lockKey": true,
            "disabled": true,
            "labelPosition": "top"
          },
          {
            "hideLabel": false,
            "properties": {
              "": ""
            },
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "tags": [],
            "type": "button",
            "theme": "success",
            "disableOnInvalid": false,
            "action": "submit",
            "block": false,
            "rightIcon": "",
            "leftIcon": "",
            "size": "md",
            "key": "submit",
            "tableView": false,
            "label": "Do all the crazy things in green",
            "input": true
          }
        ],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "Complete Test",
        "input": false,
        "key": "panel"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "Encryption",
        "input": false,
        "key": "panel27"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "key": "panel24",
        "input": false,
        "title": "All form.io Controls",
        "theme": "default",
        "tableView": false,
        "type": "panel",
        "breadcrumb": "default",
        "tags": [],
        "conditional": {
          "eq": "",
          "when": null,
          "show": ""
        },
        "properties": {
          "": ""
        }
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "Current User",
        "input": false,
        "key": "panel21"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "Branding",
        "input": false,
        "key": "panel20"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "Language",
        "input": false,
        "key": "panel19"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "Header Features",
        "input": false,
        "key": "panel18"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "key": "panel25",
        "input": false,
        "title": "CDN Content",
        "theme": "default",
        "tableView": false,
        "type": "panel",
        "breadcrumb": "default",
        "tags": [],
        "conditional": {
          "eq": "",
          "when": null,
          "show": ""
        },
        "properties": {
          "": ""
        }
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "CDN Token",
        "input": false,
        "key": "panel2"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "Event Grid",
        "input": false,
        "key": "panel3"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "Service Bus",
        "input": false,
        "key": "panel23"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "Mail",
        "input": false,
        "key": "panel4"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "PDF",
        "input": false,
        "key": "panel5"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "SMS",
        "input": false,
        "key": "panel6"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "WhatsApp",
        "input": false,
        "key": "panel7"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "Slack",
        "input": false,
        "key": "panel9"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "Teams",
        "input": false,
        "key": "panel10"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "Excel Calculation",
        "input": false,
        "key": "panel8"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "WebBase Cache",
        "input": false,
        "key": "panel11"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "SQL Server",
        "input": false,
        "key": "panel12"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "Preview",
        "input": false,
        "key": "panel15"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "DokStore",
        "input": false,
        "key": "panel14"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "CosmosDB",
        "input": false,
        "key": "panel13"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "Polizze erzeugen",
        "input": false,
        "key": "panel16"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "Schaden erzeugen",
        "input": false,
        "key": "panel17"
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "key": "panel26",
        "input": false,
        "title": "Dokument ablegen",
        "theme": "default",
        "tableView": false,
        "type": "panel",
        "breadcrumb": "default",
        "tags": [],
        "conditional": {
          "eq": "",
          "when": null,
          "show": ""
        },
        "properties": {
          "": ""
        }
      },
      {
        "hideLabel": false,
        "clearOnHide": false,
        "components": [],
        "properties": {
          "": ""
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "tags": [],
        "breadcrumb": "default",
        "type": "panel",
        "tableView": false,
        "theme": "default",
        "title": "In context translation",
        "input": false,
        "key": "panel22"
      }
    ],
    "created": "2017-11-12T12:49:28.153Z",
    "revisions": "",
    "_vid": 0,
    "_id": "5a08435835677f0001af052d",
    "machineName": "nezcjzowfnfwzny:end2end",
    "modified": "2018-02-02T02:51:31.574Z",
    "title": "Formbuilder",
    "display": "form",
    "name": "end2end",
    "path": "end2end",
    "project": "5a05516e35677f0001aeef6e",
    "properties": {
      "formtitle": "Formbuilder",
      "menus": "./defs/menus.json.js",
      "langmenustop": "./scripts/lang-menu-top.json.js",
      "langmenusbottom": "./scripts/lang-menu-bottom.json.js"
    }
  }