// Server-side fetch utilities (NOT Server Actions - do not use "use server" here)
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const serverMutation = async (
  path,
  data,
  method = "POST",
  token = null,
  customHeaders = {}
) => {
  const res = await fetch(`${baseUrl}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...customHeaders,
    },
    body: JSON.stringify(data),
  });

  return handleStatus(res);
};

export const serverFetch = async (path, customHeaders = {}) => {
  const res = await fetch(`${baseUrl}${path}`, {
    headers: {
      ...customHeaders,
    },
  });

  return handleStatus(res);
};

export const protectedServerFetch = async (path, token, customHeaders = {}) => {
  const res = await fetch(`${baseUrl}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      ...customHeaders,
    },
  });

  return handleStatus(res);
};

const handleStatus = async (res) => {
  if (!res.ok) {
    let message = `Server error (${res.status})`;
    try {
      const body = await res.json();
      message = body?.message || body?.msg || message;
    } catch (_) {}
    throw new Error(message);
  }
  return res.json();
};
