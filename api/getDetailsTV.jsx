export default async function getDetailsTV( series_id ) {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${series_id}?api_key=8012e4149af0c58d8ecbd982582fcbf0&language=vi-VN&append_to_response=videos,images`);
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return await res.json();
  }

  