import Navbar from "@/components/shared/Navbar"


const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default MainLayout