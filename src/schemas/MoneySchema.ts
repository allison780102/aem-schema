import * as yup from "yup";
import { Currencies, Money } from "../models/Money";

export const MoneySchema: yup.SchemaOf<Money> = yup.object({
  currency: yup.mixed<Currencies>().oneOf(Object.values(Currencies)).required(),
  value: yup.number().required(),
});
