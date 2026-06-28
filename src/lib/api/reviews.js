export const getAllReviewsForModerationClient = async (adminId, page = 1, limit = 10) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";
  const res = await fetch(`${baseUrl}/api/admin/reviews?page=${page}&limit=${limit}`, {
    headers: {
      "x-user-id": adminId,
    },
  });
  return res.json();
};

