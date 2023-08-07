export default async function getTrendingAll(page) {
  const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=8012e4149af0c58d8ecbd982582fcbf0&language=vi-VN&page=${page}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return await res.json()
}
