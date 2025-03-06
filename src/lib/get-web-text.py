import requests
from bs4 import BeautifulSoup
import html2text
import argparse
from datetime import datetime
import re
from urllib.parse import urlparse
import os

def url_to_md(url):
    """
    Fetches the content of a webpage, converts it to markdown, and saves it to a file in the specified folder.

    Args:
        url (str): The URL of the webpage to convert.
    """
    # Fetch the webpage content
    response = requests.get(url)
    if response.status_code != 200:
        print(f"Failed to retrieve the URL: {url}")
        return

    # Parse the HTML content
    soup = BeautifulSoup(response.content, 'html.parser')

    # Extract the main content (for example, body text)
    content = soup.find('body')  # You can refine this if necessary

    # Extract the first <h1> tag text
    h1_tag = soup.find('h1')
    if (h1_tag):
        h1_text = h1_tag.get_text().strip()
        # Sanitize the h1 text to be a valid filename
        h1_text = re.sub(r'[^\w\s-]', '', h1_text).strip().lower()
        h1_text = re.sub(r'[-\s]+', '-', h1_text)
    else:
        h1_text = "output"

    # Get the current date
    current_date = datetime.now().strftime("%Y-%m-%d")

    # Extract the domain name
    parsed_url = urlparse(url)
    domain_name = parsed_url.netloc.split('.')[1]

    # Construct the output filename
    output_filename = f"{current_date}-{domain_name}-{h1_text[:10]}.md"

    # Define the output folder
    output_folder = "document-store/_raw"

    # Ensure the output folder exists
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Full path to the output file
    output_file_path = os.path.join(output_folder, output_filename)

    # Convert HTML content to markdown
    h = html2text.HTML2Text()
    h.ignore_links = True  # Set to True if you want to ignore links

    markdown_text = h.handle(str(content))

    # Write the markdown to a file
    with open(output_file_path, "w") as md_file:
        md_file.write(markdown_text)

    print(f"Markdown file saved as {output_file_path}")

def main():
    """
    Parses command line arguments and calls the url_to_md function.

    Example usage: `python3 get_web_text.py <url>`
    """
    parser = argparse.ArgumentParser(description="Convert a webpage to markdown.")
    parser.add_argument('url', help="The URL of the webpage to convert.")
    
    args = parser.parse_args()
    
    # Call the function with the provided arguments
    url_to_md(args.url)

if __name__ == "__main__":
    main()