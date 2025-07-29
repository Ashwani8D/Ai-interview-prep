import Vapi from "@vapi-ai/web";

// export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!);




if (!process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN) {
  throw new Error("VAPI web token is not defined.");
}
export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN);
