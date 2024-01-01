// import { SupabaseClientInterface } from '../interfaces/supabase-client'

// export function useGenHook(fn: (a: any) => Promise<any>, lazy = false) {
//   const [rs, setRs] = useState<any>(null)
//   const cl = useContext(SupabaseClientContext)
//   useEffect(() => {
//     const cb = async () => {
//       setRs(await fn(cl))
//     }
//     if (!lazy)
//       cb()
//   }, [cl, lazy])
//   const lazyCallback = useCallback(async () => {
//     setRs(await fn(cl))
//   }, [cl, fn])
// }
