export function Welcome() {
  const time = useInitialRenderTime()
  const [counter, setCounter] = useState(0)

  return (
    <div
      className={
        'fixed left-50% top-50% translate--50% b b-solid b-#f1e3e1 rd-4 px-6 py-4 text-center space-y-2'
      }
    >
      <div className={'text-12'}>🐕 Chorizo</div>
      <div className={'flex items-center justify-center'}>
        <MdiDraw className={'mr-1'} />
        Initial render at {time}
      </div>
      <button
        onClick={() => setCounter((v) => ++v)}
        className={'px-4 py-2 rd-2'}
      >
        You clicked {counter} time(s)
      </button>
    </div>
  )
}
