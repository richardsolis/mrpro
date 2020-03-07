export class AppSettings {
  public static BASE_PATH = "http://admin-mrpro-labs.mrpro.pe/api/"; //  https://admin-mrpro.mrpro.pe/api/
  public static BASE_IMAGE = "http://admin-mrpro-labs.mrpro.pe/api/guest/update/image" //https://admin-mrpro.mrpro.pe/api/guest/update/image
  public static BASE_PATH_IMAGE = "http://admin-mrpro-labs.mrpro.pe/img/"; //https://admin-mrpro.mrpro.pe/img/
  public static SEND_NOTIFICATION = "oauth/user/phone/send";
  // public static BASE_PATH = 'http://localhost:4028/';
  public static GET_DASHBOARD_PROVIDERS = "crud/provider";
  public static GET_ONE_DASHBOARD_PROVIDER = "crud/provider";
  public static POST_CREATE_DASHBOARD_PROVIDER = "crud/provider";
  public static PUT_CREATE_DASHBOARD_PROVIDER = "crud/provider";
  public static GET_EXPORT_EXCEL_PROVIDER = "crud/export/provider";
  public static POST_STATUS_DASHBOARD_PROVIDER = "crud/setstatus/provider";
  public static POST_MASSIVE_DASHBOARD_PROVIDER = "crud/massive/provider";
  public static GET_DASHBOARD_COMMISSION = "crud/commission";
  public static GET_ONE_DASHBOARD_COMMISSION = "crud/commission";
  public static POST_CREATE_DASHBOARD_COMMISSION = "crud/commission";
  public static PUT_CREATE_DASHBOARD_COMMISSION = "crud/commission";
  public static DELETE_DASHBOARD_COMMISSION = "crud/commission";
  public static GET_DASHBOARD_CLIENTS = "crud/client";
  public static GET_ONE_DASHBOARD_CLIENT = "crud/client";
  public static POST_CREATE_DASHBOARD_CLIENT = "crud/client";
  public static PUT_CREATE_DASHBOARD_CLIENT = "crud/client";
  public static GET_EXPORT_EXCEL_CLIENT = "crud/export/client";
  public static GET_DASHBOARD_ADMIS = "crud/admin";
  public static GET_ONE_DASHBOARD_ADMI = "crud/admin";
  public static POST_CREATE_DASHBOARD_ADMI = "crud/admin";
  public static PUT_UPDATE_DASHBOARD_ADMI = "crud/admin";
  public static DELETE_DASHBOARD_ADMI = "crud/admin";
  public static GET_DASHBOARD_BUDGETS = "crud/service";
  public static GET_ONE_DASHBOARD_BUDGET = "crud/service";
  public static DELETE_DASHBOARD_BUDGET = "crud/service";
  public static GET_EXPORT_EXCEL_BUDGET = "crud/export/service";
  public static POST_DASHBOARD_SEND_EMAIL_BUDGET = "crud/email";
  public static GET_DASHBOARD_CATEGORIES = "crud/category";
  public static GET_ONE_DASHBOARD_CATEGORY = "crud/category";
  public static POST_CREATE_DASHBOARD_CATEGORY = "crud/category";
  public static PUT_UPDATE_DASHBOARD_CATEGORY = "crud/category";
  public static DELETE_DASHBOARD_CATEGORY = "crud/category";
  public static GET_DASHBOARD_PRICEDS = "crud/priced";
  public static GET_ONE_DASHBOARD_PRICED = "crud/priced";
  public static POST_CREATE_DASHBOARD_PRICED = "crud/priced";
  public static PUT_UPDATE_DASHBOARD_PRICED = "crud/priced";
  public static DELETE_DASHBOARD_PRICED = "crud/priced";
  public static GUEST_RESET_PASSWORD = "guest/reset/password";
  public static GUEST_CHANGE_PASSWORD = "guest/set/password";
  public static GUEST_CREATE_USER = "guest/user/client";
  public static GUEST_SEND_INFO = "guest/send/info";
  public static VALIDATION_CORREO = "guest/user/valid/client";
  public static VALIDATION_CORREO_P = "provider/valid";
  public static CREATE_PROVIDER = "provider/create";
  public static UPDATE_PROVIDER = "provider/update";
  public static GUEST_GET_PROVIDERS = "guest/providers";
  public static GUEST_GET_DISTRICTS = "guest/districts";
  public static GUEST_GET_CATEGORIES = "guest/categories";
  public static GUEST_GET_PRICED = "guest/priced";
  public static LOGIN_USER_EMAIL = "oauth/token";
  public static CLIENT_SEND_BUDGET = "client/send/budget";
  public static CLIENT_GET_BUDGET = "client/get/budget";
  public static CLIENT_EXECUTE_BUDGET = "client/exe/budget";
  public static CLIENT_SCORE = "score/provider/create";
  public static UPDATE_CLIENT = "client/update/user";
  public static PROVIDER_SCORE = "score/client/create";
  public static PROVIDER_GET_BUDGET = "client/get/one/budget";
  public static CURRENT_USER = "oauth/current/user";
  public static GET_ESTATUS_BUDGET = "client/get/budget/status";
  public static UPDATE_PROVIDER_BUDGET = "client/update/budget";
  public static UPDATE_ESTATUS_BUDGET = "client/set/budget/status";
  public static CANCEL = "client/set/budget/status";
  public static CREATE_CARD_BANK = "card/create";
  public static DELETE_CARD_BANK = "card/delete";
  public static LIST_ALL_CARD = "card/get";
  public static CONVERT_IMG = "guest/convert/image";
  public static CERTIFICATE = "crud/certificate";
  public static CERTIFICATEGET = "guest/certificates";
  public static CARDSET = "card/set/default";
  public static SENDCANCELPORVIDER =  "client/send/budget/refuse";
  public static LANG_SPANISH = {
                processing:     "Procesando...",
                lengthMenu:     "Mostrar _MENU_ registros",
                zeroRecords:    "No se encontraron resultados",
                emptyTable:     "Ningún dato disponible en esta tabla",
                info:           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                infoEmpty:      "Mostrando registros del 0 al 0 de un total de 0 registros",
                infoFiltered:   "(filtrado de un total de _MAX_ registros)",
                infoPostFix:    "",
                search:         "Buscar:",
                url:            "",
                loadingRecords: "Cargando...",
                paginate: {
                    first:    "Primero",
                    last:     "Último",
                    next:     "Siguiente",
                    previous: "Anterior"
                },
                aria: {
                    sortAscending:  ": Activar para ordenar la columna de manera ascendente",
                    sortDescending: ": Activar para ordenar la columna de manera descendente"
                }
  };
}
