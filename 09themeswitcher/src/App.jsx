import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContext, ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

    const [themeMode, setthemeMode] = useState("light")

    const lightTheme = () => {
        setthemeMode("light")
    }

    const DarkTheme = () => {
        setthemeMode("dark")
    }


    // actual kaam inn functions ka 

    useEffect(() => {
      
        document.querySelector('html').classList.remove("light", "dark") // jo bhi default theme h vo remove krdo pehle
        document.querySelector('html').classList.add(themeMode)

    }, [themeMode])
    

  return (
   
            <ThemeProvider value={{themeMode,lightTheme,DarkTheme}}>

            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                   
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

            </ThemeProvider>

  )
}

export default App
