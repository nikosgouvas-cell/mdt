export const templateConfig = {
  intakeTemplatePath: import.meta.env.VITE_TEMPLATE_CASE_PATH ?? "",
  decisionTemplatePath: import.meta.env.VITE_TEMPLATE_DECISION_PATH ?? "",
  logoUrl: import.meta.env.VITE_LOGO_URL ?? ""
};

export const hasTemplatesConfigured = Boolean(
  templateConfig.intakeTemplatePath || templateConfig.decisionTemplatePath
);
