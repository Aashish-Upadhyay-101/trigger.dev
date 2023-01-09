export type Provider = {
  name: string;
  slug: string;
  icon: string;
  enabledFor: "all" | "admins" | "none";
  authentication: OAuthAuthentication | APIKeyAuthentication;
};

export type OAuthAuthentication = {
  type: "oauth";
  scopes: string[];
  environments: Record<string, { client_id: string }>;
};

export type APIKeyAuthentication = {
  type: "api_key";
  header_name: string;
  header_type: "access_token" | "bearer";
  documentation: string;
};

export type ProviderCatalog = {
  providers: Provider[];
};