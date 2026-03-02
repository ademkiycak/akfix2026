
export async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    next: { revalidate: 60 },
  })
  if (!res.ok) throw new Error(`Fetch hatası: ${res.status}`)
  return res.json()
}

