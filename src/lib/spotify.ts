export default async function getAccessToken(refresh_token) {
	console.log(
		`Basic ${Buffer.from(
			`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
		).toString("base64")}`
	);
	const response = await fetch(process.env.TOKEN_ENDPOINT, {
		method: "POST",
		headers: {
			Authorization: `Basic ${Buffer.from(
				`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
			).toString("base64")}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			grant_type: "refresh_token",
			refresh_token,
		}),
	});

	return response.json();
}

export const getUsersPlaylists = async (refresh_token) => {
	const { access_token } = await getAccessToken(refresh_token);
	return fetch(process.env.PLAYLISTS_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
};
