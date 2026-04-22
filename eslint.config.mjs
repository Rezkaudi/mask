import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  rules: {
    "react/jsx-no-target-blank": ["error", {
      allowReferrer: false,
      enforceDynamicLinks: "always",
      warnOnSpreadAttributes: true,
    }]
  }
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
