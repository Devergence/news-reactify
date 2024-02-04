export const formatTimeAgo = (dateString) => {
  const now = new Date()
  const date = new Date(dateString)
  const secondPast = (now.getTime() - date.getTime()) / 1000;
  if (secondPast < 60) {
    return `${Math.floor(secondPast)} seconds ago`;
  }
  if (secondPast < 3600) {
    return `${Math.floor(secondPast / 60)} minutes ago`;
  }
  if (secondPast < 86400) {
    return `${Math.floor(secondPast / 3600)} hours ago`;
  }
  if (secondPast < 2592000) {
    return `${Math.floor(secondPast / 86400)} days ago`;
  }
  if (secondPast < 31536000) {
    return `${Math.floor(secondPast / 2592000)} months ago`;
  }
  return `${Math.floor(secondPast / 31536000)} years ago`;
}