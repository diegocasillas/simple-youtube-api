const duration = require('iso8601-duration');

class Video {
    constructor(youtube, data) {
        this.youtube = youtube;
        this.title = data.snippet.title;
        this.id = data.id.videoId ? data.id.videoId : data.id;
        if(data.contentDetails) this.id = data.contentDetails.videoId || this.id;
        this.description = data.snippet.description;
        this.duration = data.contentDetails ? duration.parse(data.contentDetails.duration) : null;
        this.duration_seconds = this.duration ? duration.toSeconds(this.duration) : -1;
        this.url = `https://www.youtube.com/watch?v=${this.id}`;
        this.publishedAt = data.snippet.publishedAt;
        this.channel = {
            title: data.snippet.channelTitle,
            id: data.snippet.channelId
        };
    }
}

module.exports = Video;
