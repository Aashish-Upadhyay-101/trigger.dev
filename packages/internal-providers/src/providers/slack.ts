import { Provider } from "../types";

export const slackProvider: Provider = {
  name: "Slack",
  slug: "slack",
  icon: "/integrations/slack.png",
  enabledFor: "all",
  authentication: {
    type: "oauth",
    scopes: ["channels:read", "channels:join", "chat:write"],
    environments: {
      development: {
        client_id: "276370297397.4579145654276",
      },
      production: {
        client_id: "abcdefg",
      },
    },
  },
};