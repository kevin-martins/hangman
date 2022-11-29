const Center = ({ children }: any): JSX.Element => {
  return (
    <div className="grid bg-gray-700 h-screen mx-auto place-items-center">
        <div className="flex flex-col gap-4 sm:w-2/3 max-w-screen-xl mx-auto">
            {children}
        </div>
    </div>
  )
}

export default Center
