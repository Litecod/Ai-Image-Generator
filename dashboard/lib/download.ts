export const downloadImage = async (url: string, filename: string = "cartoon-image") => {
  try {
    // If it's already a data URL or blob URL
    if (url.startsWith('data:') || url.startsWith('blob:')) {
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    // Fetch the image first for external URLs
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    
    // Required for Firefox
    link.style.display = 'none';
    document.body.appendChild(link);
    
    link.click();
    
    // Cleanup
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    }, 100);
  } catch (error) {
    console.error('Download failed:', error);
    // Fallback - open in new tab if download fails
    window.open(url, '_blank');
  }
};