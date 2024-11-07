const { object, string, setLocale } = require("yup");
import fa from "yup-locale-fa";
setLocale(fa);

export const signupSchema = object({
  email: string().email().required(),
  username: string().min(2).max(18)
    .matches(/^[a-zA-Z0-9]([ ._-](?![ ._-])|[a-zA-Z0-9]){2,18}[a-zA-Z0-9]$/,
      `نام کاربری فقط میتواند ترکیبی از حروف انگلیسی، اعداد، فاصله و علامت‌های (. _ -) باشد.
      همچنین این جدا کنندها نباید در ابتدا یا انتها و یا دوبار باهم استفاده شوند. و باید 3 تا 18 کاراکتر طول داشته باشند.`),
});

export const emailSchema = object({
  email: string().email().required(),
});

export const passwordSchema = object({
  password: string().min(7).max(255).required(),
});