// utils/kinde/getAccessToken.ts
export const getAccessToken = async () => {
  const res = await fetch("https://savostore.kinde.com/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: "c595760117b04274979747bd77076fdb",
      client_secret: "JwRHnXbJEcaB2oMrTN6Ltule6aDzlHfaB9nV24TYNiUG2dNsSn7Qe",
      audience: "https://savostore.kinde.com/api",
      scope: 'read:organization_user_roles'
    }),
  });

  const data = await res.json();

  if (!res.ok) throw new Error("Failed to fetch access token from Kinde");

  return data.access_token;
};
