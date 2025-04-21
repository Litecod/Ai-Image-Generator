export async function downloadImage(url: string, filename: string = "ai-image") {
  try {
    // Create a temporary anchor tag
    const link = document.createElement('a');
    
    // For Azure Blob Storage URLs (DALL-E)
    if (url.includes('blob.core.windows.net')) {
      // Approach 1: Force download by adding a query parameter
      link.href = `${url}?download=true`;
      
      // Approach 2: Proxy through your Next.js API (better solution)
      // link.href = `/api/download?url=${encodeURIComponent(url)}`;
    } 
    // For data URLs (base64)
    else if (url.startsWith('data:')) {
      link.href = url;
    }
    
    // Set download attributes
    link.download = filename.includes('.') ? filename : `${filename}.png`;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
    
  } catch (error) {
    console.error('Download failed:', error);
    window.open(url, '_blank');
  }
}