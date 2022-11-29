const Center = ({ children }: any): JSX.Element => {
  return (
    <div className="grid h-full place-items-center">
        <div className="flex flex-col gap-4 sm:w-2/3 max-w-screen-xl">
            {children}
        </div>
    </div>
  )
}

export default Center
