export class AppSettings {
  public static BASE_PATH = "http://admin-mrpro.mrpro.pe/api/";
  public static BASE_IMAGE = "http://admin-mrpro.mrpro.pe/api/guest/update/image";
  public static BASE_PATH_IMAGE = "http://admin-mrpro.mrpro.pe/img/";
  // public static BASE_PATH = 'http://localhost:4028/';
  public static GUEST_RESET_PASSWORD = "guest/reset/password";
  public static GUEST_CREATE_USER = "guest/user/client";
  public static CREATE_PROVIDER = "provider/create";
  public static UPDATE_PROVIDER = "provider/update";
  public static GUEST_GET_PROVIDERS = "guest/providers";
  public static GUEST_GET_DISTRICTS = "guest/districts";
  public static GUEST_GET_CATEGORIES = "guest/categories";
  public static LOGIN_USER_EMAIL = "oauth/token";
  public static CLIENT_SEND_BUDGET = "client/send/budget";
  public static CLIENT_GET_BUDGET = "client/get/budget";
  public static CLIENT_EXECUTE_BUDGET = "client/exe/budget";
  public static PROVIDER_GET_BUDGET = "client/get/one/budget";
  public static CURRENT_USER = "oauth/current/user";
  public static GET_ESTATUS_BUDGET = "client/get/budget/status";
  public static UPDATE_PROVIDER_BUDGET = "client/update/budget";
  public static UPDATE_ESTATUS_BUDGET = "client/set/budget/status";
  public static CANCEL = "client/set/budget/status";
  public static CREATE_CARD_BANK = "card/create";
  public static DELETE_CARD_BANK = "card/delete";
  public static LIST_ALL_CARD = "card/get";
}
