export function Welcome() {
  const time = useInitialRenderTime()
  const [show, setShow] = useState(false)

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
      <button onClick={() => setShow((v) => !v)} className={'px-4 py-2 rd-2'}>
        {show ? 'Hell yeah!' : 'Do you want to see my babies?'}
      </button>
      <div className={'flex justify-center gap-4'}>
        {show && Array.from({ length: 2 }, (_, i) => <Child key={i} />)}
      </div>
    </div>
  )
}

function Child() {
  const [counter, setCounter] = useAtom(childCounter)
  return (
    <button
      onClick={() => setCounter((v) => ++v)}
      className={'px-2 py-1 rd-2 min-w-20'}
    >
      {counter || 'Try me'}
    </button>
  )
}

const childCounter = atom(0)
