export const deleteReviewAdminClient = async (adminId, reviewId) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";
  const res = await fetch(`${baseUrl}/api/admin/reviews/${reviewId}`, {
    method: "DELETE",
    headers: {
      "x-user-id": adminId,
    },
  });
  return res.json();
};
