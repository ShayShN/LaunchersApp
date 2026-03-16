import { create } from 'zustand'

const launchersStore = create((set) =>({
    launchers : [],

    setLauncher: (newLaunchers) => set({launchers: newLaunchers}),
    
    addLauncher: (newLaunch) => set((state) => ({launchers: [...state.launchers, newLaunch]})),

    fetchLaunchers: async () => {
       try {
         const response = await fetch("http://localhost:3001/api/launchers", {
             method: "GET"
     
         })
         const data = await response.json()
         
         set({ launchers: data})
       } catch (error) {
        console.log(error);
        
       }
    }
    

}))

export default launchersStore