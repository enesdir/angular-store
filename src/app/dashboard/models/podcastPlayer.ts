export interface PodcastPlayer {
	name: string;
	coverPhoto: string;
	currentEpisode: {
		title: string;
		duration: string;
		audioUrl: string;
		releaseDate: string;
	};
	playerInfo: { isPlaying: boolean; progress: string; volume: number; playbackSpeed: number };
}
