export default async function handler(req: any, res: any) {
  try {
    const { default: app } = await import("../server");
    return app(req, res);
  } catch (err: any) {
    console.error("[Vercel API Gateway Error]:", err);
    res.status(500).json({
      success: false,
      error: "[Vercel API Gateway Error] Lỗi khởi động backend: " + (err.message || err),
      stack: err.stack || ""
    });
  }
}
