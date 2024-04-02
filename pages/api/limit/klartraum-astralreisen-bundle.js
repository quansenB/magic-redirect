export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    // Stop the request here for OPTIONS requests
    return res.status(200).end();
  }

  // Define the start and end dates in Berlin time
  const startTime = new Date("2024-04-03T14:00:00+02:00"); // 3rd of April, 2024 at 00:00 Berlin time
  const endTime = new Date("2024-04-05T22:23:09+02:00"); // 5th of April, 2024 at 00:00 Berlin time

  // Get the current time
  const currentTime = new Date();

  // Calculate total duration and elapsed duration in milliseconds
  const totalDuration = endTime - startTime;
  const elapsedDuration = currentTime - startTime;

  // Calculate the percentage of time elapsed
  const elapsedPercentage = elapsedDuration / totalDuration;

  // Determine the current limit value
  const limitStart = 50;
  const currentLimit = Math.round(limitStart - limitStart * elapsedPercentage);

  // Ensure the limit does not go below 0 or above 50
  let limitValue = Math.max(currentLimit, 0);
  limitValue = Math.min(currentLimit, 50);

  // Return the limit value as JSON
  return res.status(200).json({ limit: limitValue });
}
