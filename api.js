export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIyOWQzYThkMy0zNWE0LTRiNDEtYWI3MS02OTZmZWY1ZTIxNTMiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2OTY1ODc0MiwiZXhwIjoxNjcwMjYzNTQyfQ.mA0TgNndnks_vQIh1jleWuuOWS_sCyHgIi8FPgoBSiY";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v1/meetings`, {
    method: "POST",
    headers: {
      authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ region: "sg001" }),
  });

  const { meetingId } = await res.json();
  return meetingId;
};