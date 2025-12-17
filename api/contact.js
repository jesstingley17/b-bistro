export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST");
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  let body = "";
  try {
    body = await new Promise((resolve, reject) => {
      let data = "";
      req.on("data", (chunk) => {
        data += chunk;
      });
      req.on("end", () => resolve(data));
      req.on("error", reject);
    });
  } catch (err) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Unable to read request body" }));
    return;
  }

  let parsed;
  try {
    parsed = body ? JSON.parse(body) : {};
  } catch (err) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Invalid JSON payload" }));
    return;
  }

  const name = typeof parsed.name === "string" ? parsed.name.trim() : "";
  const email = typeof parsed.email === "string" ? parsed.email.trim() : "";
  const message =
    typeof parsed.message === "string" ? parsed.message.trim() : "";

  if (!name || !email || !message) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        error: "Please provide your name, email address and a message.",
      })
    );
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        error:
          "Email service is not configured. Please contact the restaurant directly.",
      })
    );
    return;
  }

  const fromAddress = "B's Bistro Website <no-reply@bsbistro.co.za>";

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: ["info@bsbistro.co.za"],
        reply_to: email,
        subject: `New website enquiry from ${name}`,
        html: `
          <p>You have received a new message from the website contact form.</p>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const text = await resendResponse.text();
      console.error("Resend error:", resendResponse.status, text);
      res.statusCode = 502;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          error: "Unable to send email at the moment. Please try again later.",
        })
      );
      return;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ success: true }));
  } catch (err) {
    console.error("Unexpected error sending contact email:", err);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        error: "Unexpected error sending email. Please try again later.",
      })
    );
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}


