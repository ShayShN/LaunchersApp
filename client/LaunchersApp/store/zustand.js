import { create } from 'zustand'

const launchersStore = create((set) =>({
    launchers : [],
    users: [],

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
    },

    fetchUsers: async () => {
       try {
         const response = await fetch("http://localhost:3001/api/auth/getAllUsers", {
             method: "GET",
             au
     
         })
         const dataUsers = await response.json()
         
         set({ users: dataUsers})
       } catch (error) {
        console.log(error);
        
       }
    }
    

}))

export default launchersStore