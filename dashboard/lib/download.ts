
export const downloadImage = async (url: string, filename: string = "dalle-image.png") => {
  try {
    // Encode the URL parameter properly
    const proxyUrl = new URL('https://ai-image-generator-backend-two.vercel.app/api/user/download-image');
    proxyUrl.searchParams.append('url', url);

    const response = await fetch(proxyUrl.toString());
    
    if (!response.ok) {
      throw new Error(`Server returned ${response.status}: ${await response.text()}`);
    }

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    // Cleanup
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    }, 100);
  } catch (error) {
    console.error('Download failed:', error);
    // Fallback: Open in new tab
    window.open(url, '_blank');
    throw error; // Re-throw if you want calling code to handle it
  }
};