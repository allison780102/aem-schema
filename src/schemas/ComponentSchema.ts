import * as yup from "yup";
import {
  RestfulAEMAlignment,
  RestfulAEMContainer,
  RestfulWidgetComponent,
} from "../models/RestfulAEM";

export const ComponentSchema: yup.SchemaOf<RestfulAEMContainer> = yup.object({
  aemComponentId: yup.string(),
  aemComponentType: yup
    .mixed()
    .required("theclub-spa-react/components/container"),
  items: yup
    .array()
    .of(yup.object<RestfulWidgetComponent>().required())
    .required(),
  panelTitle: yup.string().required(),
  alignment: yup
    .mixed<RestfulAEMAlignment>()
    .oneOf(Object.values(RestfulAEMAlignment))
    .required(),
});
