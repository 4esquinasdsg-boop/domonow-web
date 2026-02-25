/**
 * Converts YouTube share URLs (youtu.be/...) and watch URLs (youtube.com/watch?v=...)
 * to embed format (youtube.com/embed/...) for use in iframes.
 */
export function toYouTubeEmbed(url: string): string {
    if (!url) return '';

    let videoId = '';

    // Handle youtu.be/VIDEO_ID format
    const shortMatch = url.match(/youtu\.be\/([^?&#]+)/);
    if (shortMatch) {
        videoId = shortMatch[1];
    }

    // Handle youtube.com/watch?v=VIDEO_ID format
    const longMatch = url.match(/youtube\.com\/watch\?v=([^&#]+)/);
    if (longMatch) {
        videoId = longMatch[1];
    }

    // Handle already-embedded format
    const embedMatch = url.match(/youtube\.com\/embed\/([^?&#]+)/);
    if (embedMatch) {
        return url;
    }

    if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
    }

    return url;
}
