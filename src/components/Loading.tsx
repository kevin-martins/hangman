import '../styles/loading.css'
import Center from './Center'

const Loading = (): JSX.Element => {
  return (
    <Center>
      <div className="lds-roller mx-auto">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Center>
  )
}

export default Loading
