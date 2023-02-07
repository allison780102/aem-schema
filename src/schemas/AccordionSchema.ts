import * as yup from "yup";
import { RestfulAEMAccordion, RestfulAEMPlatform } from "../models/RestfulAEM";
import { ComponentSchema } from "./ComponentSchema";

export const AccordionSchema: yup.SchemaOf<RestfulAEMAccordion> = yup.object({
  aemComponentId: yup.string().required(),
  aemComponentType: yup
    .mixed()
    .required("theclub-spa-react/components/accordion"),
  platform: yup
    .mixed<RestfulAEMPlatform>()
    .oneOf(Object.values(RestfulAEMPlatform))
    .required(),
  expandButtonLabel: yup.string().required(),
  collapseButtonLabel: yup.string().required(),
  items: ComponentSchema.required(),
});
