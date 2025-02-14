import os
import sys
import re
from pytube import Playlist
from youtube_transcript_api import YouTubeTranscriptApi
from datetime import datetime

def sanitize_title(title):
    """
    Sanitizes the video title by allowing only dashes, letters, and numbers, and removing underscores.

    Args:
        title (str): The original video title.

    Returns:
        str: The sanitized video title.
    """
    return re.sub(r'[^a-zA-Z0-9-]', '', title)

def fetch_transcript(video_id, output_file):
    """
    Fetches the transcript for a given YouTube video ID and saves it to the specified output file.

    Args:
        video_id (str): The ID of the YouTube video.
        output_file (str): The path to the output file where the transcript will be saved.
    """
    try:
        transcript = YouTubeTranscriptApi.get_transcript(video_id)
        with open(output_file, 'w') as f:
            for entry in transcript:
                f.write(f"{entry['text']}\n")
        print(f"Transcript saved to {output_file}")
    except Exception as e:
        print(f"An error occurred: {e}")

def fetch_playlist_transcripts(playlist_url):
    """
    Fetches transcripts for all videos in a YouTube playlist and saves them to the 'document-store/_unsorted' folder.
    The file names are formatted as {date}+{playlist_name}+{video_title(15char)}.md.

    Args:
        playlist_url (str): The URL of the YouTube playlist.
    """
    try:
        playlist = Playlist(playlist_url)
        output_folder = os.path.join("document-store", "_raw")
        if not os.path.exists(output_folder):
            os.makedirs(output_folder)
        
        date_str = datetime.now().strftime("%Y-%m-%d")
        playlist_name = sanitize_title(playlist.title.replace(" ", "-"))
        
        for video in playlist.videos:
            video_id = video.video_id
            try:
                video_title = sanitize_title(video.title.replace(" ", "-")[:15])
            except Exception as e:
                print(f"An error occurred while fetching the title for video {video_id}: {e}")
                video_title = video_id[:15]
            
            output_file = os.path.join(output_folder, f"{date_str}+{playlist_name}+{video_title}.md")
            fetch_transcript(video_id, output_file)
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python fetch_playlist_transcripts.py <playlist_url>")
    else:
        playlist_url = sys.argv[1]
        fetch_playlist_transcripts(playlist_url)