$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Admin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Admin",
  "description": "",
  "id": "admin",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Admin"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Pesquisar Usuario",
  "description": "",
  "id": "admin;pesquisar-usuario",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@PesquisarUsuario"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "acionar o menu Admin",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informar o campo de busca Username como \"\u003cusuario\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informar o campo de busca User Role como \"\u003cperfil\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo de busca Employee Name como \"\u003cnomeFuncionario\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo de busca Status como \"\u003csituacao\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar no botao Search",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o sistema devera apresentar lista com o resultado da busca de acordo com os filtros",
  "keyword": "Entao "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "admin;pesquisar-usuario;",
  "rows": [
    {
      "cells": [
        "usuario",
        "perfil",
        "nomeFuncionario",
        "situacao"
      ],
      "line": 20,
      "id": "admin;pesquisar-usuario;;1"
    },
    {
      "cells": [
        "Admin",
        "Admin",
        "Christine Tarabay",
        "Enabled"
      ],
      "line": 21,
      "id": "admin;pesquisar-usuario;;2"
    },
    {
      "cells": [
        "Alice.Duval",
        "ESS",
        "Alice Duval",
        "Enabled"
      ],
      "line": 22,
      "id": "admin;pesquisar-usuario;;3"
    },
    {
      "cells": [
        "Joe.Root",
        "ESS",
        "Joe Root",
        "Enabled"
      ],
      "line": 23,
      "id": "admin;pesquisar-usuario;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 2235073700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que usuario esteja logado",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 7824356900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_usuario_esteja_logado()"
});
formatter.result({
  "duration": 2319404200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Pesquisar Usuario",
  "description": "",
  "id": "admin;pesquisar-usuario;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@PesquisarUsuario"
    },
    {
      "line": 2,
      "name": "@Admin"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "acionar o menu Admin",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informar o campo de busca Username como \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informar o campo de busca User Role como \"Admin\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo de busca Employee Name como \"Christine Tarabay\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo de busca Status como \"Enabled\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar no botao Search",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o sistema devera apresentar lista com o resultado da busca de acordo com os filtros",
  "keyword": "Entao "
});
formatter.match({
  "location": "AdminSteps.acionar_o_menu_Admin()"
});
formatter.result({
  "duration": 1838725300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 41
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Username_como(String)"
});
formatter.result({
  "duration": 167851600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 42
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_User_Role_como(String)"
});
formatter.result({
  "duration": 168060200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Christine Tarabay",
      "offset": 46
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Employee_Name_como(String)"
});
formatter.result({
  "duration": 178319900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 39
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Status_como(String)"
});
formatter.result({
  "duration": 195307600,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.clicar_no_botao_Search()"
});
formatter.result({
  "duration": 509865100,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.o_sistema_devera_apresentar_lista_com_o_resultado_da_busca_de_acordo_com_os_filtros()"
});
formatter.result({
  "duration": 68409800,
  "status": "passed"
});
formatter.after({
  "duration": 679974200,
  "status": "passed"
});
formatter.before({
  "duration": 1393059100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que usuario esteja logado",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 3298712100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_usuario_esteja_logado()"
});
formatter.result({
  "duration": 4926839400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Pesquisar Usuario",
  "description": "",
  "id": "admin;pesquisar-usuario;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@PesquisarUsuario"
    },
    {
      "line": 2,
      "name": "@Admin"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "acionar o menu Admin",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informar o campo de busca Username como \"Alice.Duval\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informar o campo de busca User Role como \"ESS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo de busca Employee Name como \"Alice Duval\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo de busca Status como \"Enabled\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar no botao Search",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o sistema devera apresentar lista com o resultado da busca de acordo com os filtros",
  "keyword": "Entao "
});
formatter.match({
  "location": "AdminSteps.acionar_o_menu_Admin()"
});
formatter.result({
  "duration": 1501053000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alice.Duval",
      "offset": 41
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Username_como(String)"
});
formatter.result({
  "duration": 159224900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ESS",
      "offset": 42
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_User_Role_como(String)"
});
formatter.result({
  "duration": 171012200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alice Duval",
      "offset": 46
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Employee_Name_como(String)"
});
formatter.result({
  "duration": 176685200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 39
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Status_como(String)"
});
formatter.result({
  "duration": 195137400,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.clicar_no_botao_Search()"
});
formatter.result({
  "duration": 500240600,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.o_sistema_devera_apresentar_lista_com_o_resultado_da_busca_de_acordo_com_os_filtros()"
});
formatter.result({
  "duration": 107941800,
  "status": "passed"
});
formatter.after({
  "duration": 795765800,
  "status": "passed"
});
formatter.before({
  "duration": 1345515200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que usuario esteja logado",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 7998977800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_usuario_esteja_logado()"
});
formatter.result({
  "duration": 2951871900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Pesquisar Usuario",
  "description": "",
  "id": "admin;pesquisar-usuario;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@PesquisarUsuario"
    },
    {
      "line": 2,
      "name": "@Admin"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "acionar o menu Admin",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informar o campo de busca Username como \"Joe.Root\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informar o campo de busca User Role como \"ESS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo de busca Employee Name como \"Joe Root\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo de busca Status como \"Enabled\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar no botao Search",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o sistema devera apresentar lista com o resultado da busca de acordo com os filtros",
  "keyword": "Entao "
});
formatter.match({
  "location": "AdminSteps.acionar_o_menu_Admin()"
});
formatter.result({
  "duration": 1075305700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joe.Root",
      "offset": 41
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Username_como(String)"
});
formatter.result({
  "duration": 166601700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ESS",
      "offset": 42
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_User_Role_como(String)"
});
formatter.result({
  "duration": 170946900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joe Root",
      "offset": 46
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Employee_Name_como(String)"
});
formatter.result({
  "duration": 172372800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 39
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Status_como(String)"
});
formatter.result({
  "duration": 183664200,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.clicar_no_botao_Search()"
});
formatter.result({
  "duration": 472328400,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.o_sistema_devera_apresentar_lista_com_o_resultado_da_busca_de_acordo_com_os_filtros()"
});
formatter.result({
  "duration": 93272000,
  "status": "passed"
});
formatter.after({
  "duration": 685050600,
  "status": "passed"
});
formatter.uri("Features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@RealizarLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Username como \"\u003cusuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Password como \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o login, exibindo pagina contendo o Dashboard",
  "keyword": "Entao "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login;realizar-login-com-sucesso;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ],
      "line": 16,
      "id": "login;realizar-login-com-sucesso;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 17,
      "id": "login;realizar-login-com-sucesso;;2"
    },
    {
      "cells": [
        "teste",
        "teste"
      ],
      "line": 18,
      "id": "login;realizar-login-com-sucesso;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1354724100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 7870652300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@RealizarLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Username como \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Password como \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o login, exibindo pagina contendo o Dashboard",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Username_como(String)"
});
formatter.result({
  "duration": 132909300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Password_como(String)"
});
formatter.result({
  "duration": 111165800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicar_no_botao_Login()"
});
formatter.result({
  "duration": 3025016200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_sistema_devera_autorizar_o_login_exibindo_pagina_contendo_o_Dashboard()"
});
formatter.result({
  "duration": 64541200,
  "status": "passed"
});
formatter.after({
  "duration": 682959600,
  "status": "passed"
});
formatter.before({
  "duration": 1353205100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 3196791500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@RealizarLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Username como \"teste\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Password como \"teste\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o login, exibindo pagina contendo o Dashboard",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "teste",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Username_como(String)"
});
formatter.result({
  "duration": 148134400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teste",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Password_como(String)"
});
formatter.result({
  "duration": 105687800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicar_no_botao_Login()"
});
formatter.result({
  "duration": 654655200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_sistema_devera_autorizar_o_login_exibindo_pagina_contendo_o_Dashboard()"
});
formatter.result({
  "duration": 29359720100,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d89.0.4389.82)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027B0TT1-PC\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.82, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\b0tt1\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52755}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5095753277cc8496b9f308d3023c679b\n*** Element info: {Using\u003did, value\u003dmenu_dashboard_index}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.toString(Unknown Source)\r\n\tat java.lang.String.valueOf(Unknown Source)\r\n\tat java.lang.StringBuilder.append(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.toString(ExpectedConditions.java:305)\r\n\tat java.lang.String.valueOf(Unknown Source)\r\n\tat java.lang.StringBuilder.append(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:268)\r\n\tat utils.MetodosUteis.esperarElemento(MetodosUteis.java:18)\r\n\tat pageobjects.LoginPage.validarDashboard(LoginPage.java:49)\r\n\tat stepdefinitions.LoginSteps.o_sistema_devera_autorizar_o_login_exibindo_pagina_contendo_o_Dashboard(LoginSteps.java:48)\r\n\tat ✽.Entao o sistema devera autorizar o login, exibindo pagina contendo o Dashboard(Features/Login.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 605104800,
  "status": "passed"
});
});