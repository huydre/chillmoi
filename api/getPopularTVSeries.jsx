export default async function getPopularTVSeries() {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=8012e4149af0c58d8ecbd982582fcbf0')
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return await res.json()
  }
  