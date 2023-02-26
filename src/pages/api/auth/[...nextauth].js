import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const scopes = [
	"user-read-playback-state",
	"user-modify-playback-state",
	"user-read-currently-playing",
	"app-remote-control",
	"streaming",
	"user-read-playback-position",
	"user-read-recently-played",
	"user-read-email",
	"user-read-private",
	"playlist-read-private",
];

export default NextAuth({
	debug: true,
	providers: [
		SpotifyProvider({
			authorization: `https://accounts.spotify.com/authorize?scope=${scopes.join(
				","
			)}`,
			clientId: process.env.SPOTIFY_CLIENT_ID,
			clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
		}),
	],
	callbacks: {
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.refresh_token;
			}
			return token;
		},
		async session(session, user) {
			session.user = user;
			return session;
		},
	},
	theme: {
		colorScheme: "light",
	},
});
