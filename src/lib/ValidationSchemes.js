const { object, string, setLocale } = require("yup");
import fa from "yup-locale-fa";
setLocale(fa);

export const emailSchema = object({
  email: string().email().required(),
});