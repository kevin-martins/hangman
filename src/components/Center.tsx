const Center = ({ children }: any): JSX.Element => {
  return (
    <div className="grid bg-gray-700 h-screen m-auto place-items-center">
        <div className="flex flex-col gap-4">
            {children}
        </div>
    </div>
  )
}

export default Center
