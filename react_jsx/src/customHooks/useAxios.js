import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useAxios(url) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    // 利用 axios 发送网络请求
    setLoading(true)
    axios
      .get(url)
      .then(res => setData(res))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [url])

  return [loading, data, error]
}
