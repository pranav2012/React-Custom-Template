import PDLJS from "peopledatalabs";

export const PDLJSClient = new PDLJS({
  apiKey: process.env.NEXT_PUBLIC_PDL_API_KEY || "",
});
