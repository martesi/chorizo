export function useInitialRenderTime() {
  const [time] = useState(getTime)

  return time
}
