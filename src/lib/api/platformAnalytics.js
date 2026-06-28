export const getPlatformAnalyticsClient = async (adminId) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";
  const res = await fetch(`${baseUrl}/api/admin/platform-analytics`, {
    headers: {
      "x-user-id": adminId,
    },
  });
  return res.json();
};
